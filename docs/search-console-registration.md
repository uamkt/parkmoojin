# 검색엔진 등록 가이드 (§13.4 + §11 Tier 3)

**선결 조건**: uamkt.com 프로덕션 배포 완료 (Day 4 §13.3.6 — Netlify domain attach + DNS + SSL)

---

## 1. Google Search Console 등록

URL: https://search.google.com/search-console

### 절차

1. **속성 추가** → 도메인 속성 선택 → `uamkt.com` 입력
2. **소유권 확인** — DNS TXT 레코드 방식
   - Google이 제공하는 TXT 레코드를 도메인 DNS에 추가
   - 예: `google-site-verification=xxxxxxxxxxxxxxxx`
   - 전파 후 "확인" 클릭
3. **사이트맵 제출**
   - 좌측 메뉴 > Sitemaps
   - 새 사이트맵 추가: `https://uamkt.com/sitemap-index.xml`
   - 제출 후 "성공" 상태 확인
4. **추가 사이트맵** (선택)
   - `https://uamkt.com/rss.xml` (RSS도 사이트맵으로 인식)

### 통과 기준 (Tier 3)

- [ ] 소유권 확인 완료 (`Verified` 상태)
- [ ] 사이트맵 제출 후 "성공" — 22 URL 색인 신청
- [ ] D+7 시점: "색인됨" URL 수 ≥ 5

---

## 2. Naver Search Advisor 등록

URL: https://searchadvisor.naver.com

### 절차

1. **사이트 등록** → `https://uamkt.com` 입력
2. **소유권 확인** — HTML 메타 태그 또는 HTML 파일 업로드 방식
   - 메타 태그: `<meta name="naver-site-verification" content="xxxxx" />`
   - `src/layouts/Base.astro`의 `<head>`에 임시 추가 → 빌드 → 배포 → "확인" 클릭
3. **사이트맵 제출**
   - 좌측 메뉴 > 요청 > 사이트맵 제출
   - URL: `https://uamkt.com/sitemap-index.xml`
4. **RSS 제출** (네이버는 RSS 별도 등록 가능)
   - 좌측 메뉴 > 요청 > RSS 제출
   - URL: `https://uamkt.com/rss.xml`
5. **색인 요청** — 주요 페이지 5건 즉시 색인 요청
   - `/`, `/about`, `/products/cbrn-cads`, `/products/avix-ai`, `/ip/patents`

### 통과 기준 (Tier 3)

- [ ] 소유권 확인 완료
- [ ] 사이트맵 제출 + RSS 제출 완료
- [ ] D+7 시점: 색인 요청 5건 처리됨
- [ ] D+30 시점: "Naver UAM 코리아텍" 검색 → 첫 페이지 노출

---

## 3. HubSpot AEO Grader

URL: https://hubspot.com/aeo-grader

### 절차

1. URL 입력: `https://uamkt.com`
2. 점수 확인 — 다음 항목별 평가:
   - Schema markup
   - Page speed
   - Mobile responsive
   - Heading structure
   - Meta tags
   - 70+ 점이 통과 기준

### 통과 기준 (Tier 3)

- [ ] AEO 종합 점수 ≥ 70
- [ ] Schema markup 항목 만점 또는 그에 준함
- [ ] 미달 항목 식별 → Day 8 (Phase 2 준비) 보완 작업

---

## 4. AI 검색엔진 노출 추적 (D+30)

### ChatGPT Search 모드

URL: https://chatgpt.com (Search 모드 활성화)

검색어:
- "UAM KoreaTech"
- "한국 CBRN AI 기업"
- "Korean JWARN equivalent"

통과 기준: D+30 시점 인용 1건+ (uamkt.com URL이 응답에 인용됨)

### Perplexity

URL: https://perplexity.ai

검색어:
- "Korean CBRN AI"
- "UAM KoreaTech CBRN-CADS"
- "Park Moojin defense AI"

통과 기준: D+30 시점 인용 1건+
권장: §12.3 Perplexity Publisher Program 가입 후 RSS 등록

### Naver

검색어: "UAM 코리아텍"
통과 기준: D+30 시점 첫 페이지 노출

---

## 추적 일지 양식 (예: ~/Desktop/uamkt-com/docs/tracking-log.md)

```
## 2026-MM-DD (D+N)
- Google: 색인 URL 수 = ?
- Naver: 색인 URL 수 = ?
- ChatGPT "UAM KoreaTech": 인용 = Yes/No, URL = ?
- Perplexity "Korean CBRN AI": 인용 = Yes/No, 위치 = ?
- AEO Grader 점수: ?
```

---

## Kill-Criteria

- D+30 시점 ChatGPT·Perplexity 둘 다 인용 0건 → AEO 자산 재검토 필요
  - quickAnswer 길이/품질 점검
  - llms.txt 위계 재구성
  - 블로그 글 추가 발행 (Phase 2 §12.4)
