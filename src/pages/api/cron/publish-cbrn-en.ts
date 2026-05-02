/**
 * Vercel Cron Endpoint — CBRN English Article Publisher
 *
 * Triggered by Vercel Cron at:
 *   - 00:00 UTC (09:00 KST) → ?slot=morning
 *   - 09:00 UTC (18:00 KST) → ?slot=evening
 *
 * Auth: Vercel Cron sends `Authorization: Bearer <CRON_SECRET>` header.
 */

import type { APIRoute } from "astro";
import { selectPillar, selectTopic } from "../../../lib/cbrn-pillars";
import { generateArticle, commitArticleToGitHub } from "../../../lib/cbrn-publisher";

export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  // 1. Verify CRON_SECRET (Vercel Cron sends this header)
  const authHeader = request.headers.get("authorization");
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET || authHeader !== expectedAuth) {
    return new Response(
      JSON.stringify({ error: "Unauthorized", hint: "Missing or invalid CRON_SECRET" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  // 2. Parse slot from query
  const slotParam = url.searchParams.get("slot");
  const slot: "morning" | "evening" = slotParam === "evening" ? "evening" : "morning";

  // 3. Validate ENV
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const ghToken = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;

  if (!apiKey || !ghToken || !repo) {
    return new Response(
      JSON.stringify({
        error: "Missing required environment variables",
        missing: {
          ANTHROPIC_API_KEY: !apiKey,
          GITHUB_TOKEN: !ghToken,
          GITHUB_REPO: !repo,
        },
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const startTime = Date.now();

    // 4. Use UTC date so cron timing aligns with day boundary
    const now = new Date();

    // 5. Select pillar and topic
    const pillar = selectPillar(now, slot);
    const topic = selectTopic(pillar, now);

    console.log(`[CBRN-EN] Slot=${slot} Pillar=${pillar.id} Topic="${topic.topic}"`);

    // 6. Generate article via Claude
    const article = await generateArticle(pillar, topic, now, apiKey);
    const generatedAt = Date.now();

    console.log(`[CBRN-EN] Generated in ${generatedAt - startTime}ms: ${article.filename}`);

    // 7. Commit to GitHub (this triggers Vercel auto-deploy)
    const commit = await commitArticleToGitHub(article, {
      token: ghToken,
      repo,
    });

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
          commit: {
            sha: commit.sha,
            url: commit.url,
            path: commit.path,
          },
          timing: {
            totalMs,
            generationMs: generatedAt - startTime,
            commitMs: Date.now() - generatedAt,
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
    return new Response(
      JSON.stringify({ error: message, slot }, null, 2),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
