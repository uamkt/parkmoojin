/**
 * src/lib/schema.ts — schema.org JSON-LD 생성 함수
 * 본 정의서 §7.2 구현. 모든 페이지의 head에 1개 이상 삽입됩니다.
 */

import type { ORGANIZATION, FOUNDER } from "./entities";

const SCHEMA_CONTEXT = "https://schema.org" as const;

export function buildOrganizationSchema(org: typeof ORGANIZATION) {
  return {
    "@context": SCHEMA_CONTEXT,
    ...org,
  };
}

export function buildPersonSchema(person: typeof FOUNDER) {
  return {
    "@context": SCHEMA_CONTEXT,
    ...person,
  };
}

export function buildProductSchema(product: Record<string, unknown>) {
  return {
    "@context": SCHEMA_CONTEXT,
    ...product,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFAQSchema(faqs: readonly FaqItem[]) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  author?: string;
  url: string;
  ogImage?: string;
}

export function buildArticleSchema(article: ArticleSchemaInput) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt.toISOString(),
    dateModified: (article.updatedAt ?? article.publishedAt).toISOString(),
    author: { "@id": "https://uamkt.com/#founder" },
    publisher: { "@id": "https://uamkt.com/#organization" },
    url: article.url,
    image: article.ogImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
