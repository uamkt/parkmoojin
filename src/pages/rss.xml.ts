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

  return rss({
    title: `${ORGANIZATION.name} — Articles`,
    description:
      "유에이엠코리아텍의 시장 동향 리포트, 미니 논문, 사업 모델 분석, CBRN AI 전술 분석, 정책 분석, 케이스 스터디.",
    site: context.site ?? "https://uamkt.com",
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
