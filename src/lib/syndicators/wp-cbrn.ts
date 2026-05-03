/**
 * WordPress REST API 클라이언트 — cbrntactical.com
 *
 * Phase 1-A: cbrntactical.com WordPress.com Business 사이트로 자동 발행
 *
 * 인증:        Basic Auth (username:app_password Base64)
 * Endpoint:    POST /wp-json/wp/v2/posts
 * 카테고리:     Pillar A→1363 / B→1360 / C→1371 / D→1365 자동 매핑
 * SEO:         canonical_url로 uamkt.com 원본 표시 (duplicate content 방지)
 *
 * 환경변수:
 *   - WP_CBRN_USERNAME      (WordPress.com login username)
 *   - WP_CBRN_APP_PASSWORD  (Application Password 24자, 공백 자동 제거)
 *   - WP_CBRN_BASE_URL      (예: https://cbrntactical.com)
 */

import type { PillarId } from "../cbrn-pillars";

/**
 * Pillar → WordPress Category ID 매핑
 *
 * cbrntactical.com 검증된 카테고리 (2026-05-03):
 *   1363 — military-history (Pillar A: Historical CBRN)
 *   1360 — cbrn-cads        (Pillar B: Detection Technology)
 *   1371 — blis-d           (Pillar C: Decontamination)
 *   1365 — tactical-prompt  (Pillar D: Decision Intelligence)
 */
const PILLAR_CATEGORY_MAP: Record<PillarId, number> = {
  A: 1363,
  B: 1360,
  C: 1371,
  D: 1365,
};

export interface WPArticleInput {
  title: string;
  htmlContent: string;
  excerpt: string;
  pillarId: PillarId;
  tags: string[];
  canonicalUrl: string;
  publishedAt: Date;
}

export interface WPPublishResult {
  postId: number;
  url: string;
  status: string;
  publishedAt: string;
}

export interface WPConfig {
  baseUrl: string;
  username: string;
  appPassword: string;
}

/**
 * WordPress REST API로 새 게시물 발행
 *
 * @throws Error 비-2xx 응답 시 (인증 실패, 권한 없음, 잘못된 카테고리 등)
 */
export async function publishToWordPress(
  article: WPArticleInput,
  config: WPConfig
): Promise<WPPublishResult> {
  const apiUrl = `${config.baseUrl.replace(/\/$/, "")}/wp-json/wp/v2/posts`;

  // Application Password는 발급 시 4자×6그룹 공백 포함 → API 호출 시 공백 제거
  const cleanPassword = config.appPassword.replace(/\s+/g, "");
  const authString = Buffer.from(
    `${config.username}:${cleanPassword}`
  ).toString("base64");

  const categoryId = PILLAR_CATEGORY_MAP[article.pillarId];

  // 본문 상단에 canonical 안내 박스 (SEO duplicate content 방지 + 사용자 신호)
  const contentWithCanonicalNotice = `<p style="font-size: 0.9em; color: #555; border-left: 3px solid #1976d2; padding: 8px 12px; background: #f5f9ff; margin-bottom: 24px;">
  📍 Originally published at <a href="${article.canonicalUrl}" rel="canonical" target="_blank"><strong>UAM Korea Tech</strong></a>
</p>

${article.htmlContent}`;

  const body = {
    title: article.title,
    content: contentWithCanonicalNotice,
    excerpt: article.excerpt,
    status: "publish",
    categories: [categoryId],
    // canonical link는 Yoast SEO 또는 Rank Math가 자동 인식
    meta: {
      _yoast_wpseo_canonical: article.canonicalUrl,
    },
    date: article.publishedAt.toISOString(),
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "uamkt-cbrn-syndicator/1.0",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `WordPress API ${response.status}: ${errorBody.slice(0, 500)}`
    );
  }

  const data = (await response.json()) as {
    id: number;
    link: string;
    status: string;
    date: string;
  };

  return {
    postId: data.id,
    url: data.link,
    status: data.status,
    publishedAt: data.date,
  };
}

/**
 * Pillar ID → WordPress Category ID 매핑 조회 (외부 노출)
 */
export function getPillarCategoryId(pillarId: PillarId): number {
  return PILLAR_CATEGORY_MAP[pillarId];
}

/**
 * Pillar → Category ID 전체 매핑 조회 (디버깅/검증용)
 */
export function getAllPillarCategoryMappings(): Record<PillarId, number> {
  return { ...PILLAR_CATEGORY_MAP };
}
