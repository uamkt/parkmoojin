/**
 * src/content.config.ts — Astro 6 Content Collections
 * 본 정의서 §6.2 구현. AEO 필수 필드 + 학술 인용 필드 포함.
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// V2.4 (2026-05-18) — 박 대표 사업 전략 키워드 카테고리 신설
//   vertiport  : 버티포트 메인 카테고리 (인천공항 UAM 버티포트 2027-2028 사전 노출)
//   uam-korea  : 한국 UAM 시장 근황 및 뉴스 (섬에어·본에어 등 제휴 파트너)
//   aerospace  : 전세계 항공우주 동향
//   defense    : 전세계 방산 동향 (K-Defense, EDF, DoD RFI)
const ARTICLE_CATEGORIES = [
  "market-trends",
  "papers",
  "business-models",
  "cbrn-ai",
  "policy",
  "case-studies",
  "vertiport",
  "uam-korea",
  "aerospace",
  "defense",
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
  vertiport: {
    ko: "버티포트",
    description: "인천공항 UAM 버티포트 2027-2028 준공, KINTEX·김포·여의도 hub 등 버티포트 인프라 분석",
  },
  "uam-korea": {
    ko: "한국 UAM 시장",
    description: "K-UAM Grand Challenge, 섬에어(김포-사천 2026), 본에어(잠실-인천 헬기), Hyundai Supernal × KAI 등 한국 UAM 시장 동향",
  },
  aerospace: {
    ko: "항공우주",
    description: "KAI KF-21 보라매, KUH-1 수리온, Boeing·Airbus, 누리호, SpaceX Starship 한국 영향 등 전세계 항공우주 동향",
  },
  defense: {
    ko: "방산",
    description: "K-Defense 글로벌 수출(K2 흑표, FA-50), EDF, DoD RFI, 한·미 연합 CBRN, AUKUS 등 전세계 방산 동향",
  },
};

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];
export const ARTICLE_CATEGORY_LIST = ARTICLE_CATEGORIES;
