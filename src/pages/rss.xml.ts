/**
 * src/pages/rss.xml.ts — Articles RSS feed
 * 정의서 §13.4 Day 4 deliverable.
 * /rss.xml — 모든 articles (publishedAt desc, language별 미분리 — Phase 2에서 ko/en 분리 검토)
 */
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { ORGANIZATION } from "../lib/entities";

export async function GET(context: APIContext) {
  const articles = (await getCollection("articles")).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  // K-UAM iOS app v1.3 fix (2026-05-19):
  // RSS link base = 실제 콘텐츠 호스팅 URL (uamkt-com.vercel.app)
  // ─ uamkt.com (Next.js 브랜드 사이트) 에는 /articles/* 라우트 없음 → 404
  // ─ uamkt-com.vercel.app (Astro 콘텐츠 사이트) 에는 /articles/* 라우트 있음 → 200
  // sitemap/canonical 은 astro.config.mjs 의 'https://uamkt.com' 그대로 유지.
  const RSS_LINK_BASE = "https://uamkt-com.vercel.app";

  return rss({
    title: `${ORGANIZATION.name} — Articles`,
    description:
      "유에이엠코리아텍의 시장 동향 리포트, 미니 논문, 사업 모델 분석, CBRN AI 전술 분석, 정책 분석, 케이스 스터디.",
    site: RSS_LINK_BASE,
    items: articles.map((a) => ({
      title: a.data.title,
      pubDate: a.data.publishedAt,
      description: a.data.description,
      link: `/articles/${a.id}`,
      categories: [a.data.category, ...(a.data.tags ?? [])],
      author: a.data.author,
      customData: a.data.quickAnswer
        ? `<quickAnswer><![CDATA[${a.data.quickAnswer}]]></quickAnswer>`
        : undefined,
    })),
    customData: `<language>ko-kr</language><copyright>© ${new Date().getFullYear()} ${ORGANIZATION.legalName}</copyright>`,
  });
}
