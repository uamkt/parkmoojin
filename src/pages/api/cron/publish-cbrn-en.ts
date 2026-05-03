/**
 * Vercel Cron Endpoint — CBRN English Article Publisher (Phase 1-A)
 *
 * 트리거 시점:
 *   - 00:00 UTC (09:00 KST) → ?slot=morning
 *   - 09:00 UTC (18:00 KST) → ?slot=evening
 *
 * Phase 0: uamkt.com 자동 영문 발행 (✅ 작동 중, 2026-05-03 가동)
 * Phase 1-A: cbrntactical.com WordPress 동시 발행 (⭐ 본 파일에서 추가)
 *
 * 인증: Vercel Cron이 `Authorization: Bearer <CRON_SECRET>` 헤더 전송
 *
 * 흐름:
 *   1. CRON_SECRET 검증
 *   2. Pillar/Topic 선정
 *   3. Claude API → 영문 기사 생성 (1500-2200 words, ~90s)
 *   4. GitHub commit → uamkt.com 발행 (~1s)
 *   5. ⭐ NEW: cbrntactical용 재가공 (~30s) + WordPress POST (~3s)
 *   6. 응답 JSON에 모든 채널 결과 포함
 *
 * 실패 정책:
 *   - uamkt.com 발행 실패 → 전체 500 (Phase 0 무결성 보장)
 *   - syndication 실패 → 200 OK 반환, syndication.{channel}.ok = false 로그만
 *
 * 메모리:
 *   - 영구 문서: ~/Desktop/_QMD/projects/osmu-syndicator/
 *   - 작업 일지: 05_PROGRESS_LOG.md
 *   - 환경변수: 06_VERCEL_ENV_INVENTORY.md
 */

import type { APIRoute } from "astro";
import { selectPillar, selectTopic } from "../../../lib/cbrn-pillars";
import { generateArticle, commitArticleToGitHub } from "../../../lib/cbrn-publisher";
import { repackageForCBRN } from "../../../lib/repackagers/for-cbrntactical";
import { publishToWordPress } from "../../../lib/syndicators/wp-cbrn";

export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  // 1. CRON_SECRET 검증 (Vercel Cron이 자동으로 Bearer 헤더 전송)
  const authHeader = request.headers.get("authorization");
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET || authHeader !== expectedAuth) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
        hint: "Missing or invalid CRON_SECRET",
      }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  // 2. Slot 파싱 (morning | evening)
  const slotParam = url.searchParams.get("slot");
  const slot: "morning" | "evening" =
    slotParam === "evening" ? "evening" : "morning";

  // 3. Phase 0 ENV 검증 (필수)
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const ghToken = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;

  if (!apiKey || !ghToken || !repo) {
    return new Response(
      JSON.stringify({
        error: "Missing required environment variables (Phase 0)",
        missing: {
          ANTHROPIC_API_KEY: !apiKey,
          GITHUB_TOKEN: !ghToken,
          GITHUB_REPO: !repo,
        },
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // Phase 1-A ENV (선택 — 없으면 cbrntactical syndication 자동 스킵)
  const wpUsername = process.env.WP_CBRN_USERNAME;
  const wpAppPassword = process.env.WP_CBRN_APP_PASSWORD;
  const wpBaseUrl = process.env.WP_CBRN_BASE_URL;

  try {
    const startTime = Date.now();
    const now = new Date();

    // 4. Pillar / Topic 선정
    const pillar = selectPillar(now, slot);
    const topic = selectTopic(pillar, now);
    console.log(
      `[CBRN-EN] Slot=${slot} Pillar=${pillar.id} Topic="${topic.topic}"`
    );

    // 5. Claude API → 영문 기사 생성 (Phase 0)
    const article = await generateArticle(pillar, topic, now, apiKey);
    const generatedAt = Date.now();
    console.log(
      `[CBRN-EN] Generated in ${generatedAt - startTime}ms: ${article.filename}`
    );

    // 6. GitHub commit (Phase 0 — uamkt.com 발행)
    const commit = await commitArticleToGitHub(article, {
      token: ghToken,
      repo,
    });
    const committedAt = Date.now();
    console.log(
      `[CBRN-EN] Committed in ${committedAt - generatedAt}ms: ${commit.sha}`
    );

    // 7. ⭐ Phase 1-A: cbrntactical.com WordPress syndication
    const syndicationResults: Record<string, unknown> = {};

    if (wpUsername && wpAppPassword && wpBaseUrl) {
      const synStart = Date.now();
      try {
        // 7-A: 사이트별 재가공 (Claude Sonnet 4.6 추가 호출, ~25-35s)
        const repackaged = await repackageForCBRN(
          article.fullContent,
          pillar,
          topic,
          apiKey
        );
        const repackagedAt = Date.now();
        console.log(
          `[CBRN-EN] Repackaged for cbrntactical in ${
            repackagedAt - synStart
          }ms: ${repackaged.title}`
        );

        // 7-B: WordPress 발행 (~2-3s)
        const canonicalUrl = `https://uamkt.com/articles/cbrn-ai/${article.slug}/`;
        const wpResult = await publishToWordPress(
          {
            title: repackaged.title,
            htmlContent: repackaged.htmlContent,
            excerpt: repackaged.excerpt,
            pillarId: pillar.id,
            tags: repackaged.tags,
            canonicalUrl,
            publishedAt: now,
          },
          {
            baseUrl: wpBaseUrl,
            username: wpUsername,
            appPassword: wpAppPassword,
          }
        );

        syndicationResults.cbrntactical = {
          ok: true,
          postId: wpResult.postId,
          url: wpResult.url,
          status: wpResult.status,
          repackagedTitle: repackaged.title,
          timing: {
            repackageMs: repackagedAt - synStart,
            publishMs: Date.now() - repackagedAt,
          },
        };
        console.log(
          `[CBRN-EN] Syndicated to cbrntactical.com: ${wpResult.url}`
        );
      } catch (synError) {
        const msg =
          synError instanceof Error ? synError.message : String(synError);
        console.error(`[CBRN-EN] cbrntactical syndication FAILED: ${msg}`);
        syndicationResults.cbrntactical = { ok: false, error: msg };
      }
    } else {
      syndicationResults.cbrntactical = {
        ok: false,
        skipped:
          "ENV missing (WP_CBRN_USERNAME / WP_CBRN_APP_PASSWORD / WP_CBRN_BASE_URL)",
      };
    }

    const totalMs = Date.now() - startTime;

    return new Response(
      JSON.stringify(
        {
          ok: true,
          slot,
          pillar: { id: pillar.id, name: pillar.name },
          topic: topic.topic,
          article: {
            slug: article.slug,
            filename: article.filename,
            title: article.title,
            date: article.date,
          },
          uamkt: {
            commit: {
              sha: commit.sha,
              url: commit.url,
              path: commit.path,
            },
          },
          syndication: syndicationResults,
          timing: {
            totalMs,
            generationMs: generatedAt - startTime,
            commitMs: committedAt - generatedAt,
            syndicationMs: Date.now() - committedAt,
          },
        },
        null,
        2
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("[CBRN-EN] Error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: message, slot }, null, 2), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
