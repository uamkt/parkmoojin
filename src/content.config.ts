/**
 * src/content.config.ts — Astro 6 Content Collections
 * 본 정의서 §6.2 구현. AEO 필수 필드 + 학술 인용 필드 포함.
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ARTICLE_CATEGORIES = [
  "market-trends",
  "papers",
  "business-models",
  "cbrn-ai",
  "policy",
  "case-studies",
] as const;

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(ARTICLE_CATEGORIES),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  author: z.string().default("박무진"),
  tags: z.array(z.string()).default([]),
  ogImage: z.string().optional(),
  language: z.enum(["ko", "en"]).default("ko"),
  // AEO 필수 — Quick Answer Box로 자동 추출 (40~600 char; 한국어 밀도 고려)
  quickAnswer: z.string().min(40).max(600),
  // FAQ — FAQPage schema 자동 트리거
  faq: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional(),
  // 학술 인용 (Citation chain)
  citations: z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        publishedYear: z.number().optional(),
      })
    )
    .optional(),
  doi: z.string().optional(),
  isbn: z.string().optional(),
});

export const collections = {
  articles: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
    schema: articleSchema,
  }),
};

export const CATEGORY_META: Record<
  (typeof ARTICLE_CATEGORIES)[number],
  { ko: string; description: string }
> = {
  "market-trends": {
    ko: "시장 동향 리포트",
    description: "Korean CBRN AI Market 등 영문 시장 보고서",
  },
  papers: {
    ko: "미니 논문",
    description: "Active Resilience Deterrence 등 학술형 논문 (8~12쪽)",
  },
  "business-models": {
    ko: "사업 모델 분석",
    description: "Lean Canvas + BD 시나리오",
  },
  "cbrn-ai": {
    ko: "CBRN AI 전술 분석",
    description: "What/How/Why FAQ형 글 (JWARN, CBRN-CADS 등)",
  },
  policy: {
    ko: "정책 분석",
    description: "국방 R&D 정책·NATO·EDF·미 DoD RFI 정합성 분석",
  },
  "case-studies": {
    ko: "케이스 스터디",
    description: "Lattice 19/19 통합·STANAG 2103 호환 등 실증 보고서",
  },
};

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];
export const ARTICLE_CATEGORY_LIST = ARTICLE_CATEGORIES;
