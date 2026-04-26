# cbrntactical.com — CBRN 콘텐츠 spoke 연동 (§13.4)

**대상 사이트**: https://cbrntactical.com/
**상태**: 신규 사이트 또는 기존 사이트 schema 추가
**목적**: CBRN 전술 분석 spoke로 hub-spoke 구조 형성 — 동일 박무진 Person ID 사용

---

## 작업 지시 (신규 사이트인 경우)

cbrntactical.com을 별도 Astro 사이트로 신설하거나, 기존 정적 페이지가 있다면 아래 schema를 `<head>`에 추가:

## 삽입할 JSON-LD 블록

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cbrntactical.com/#website",
  "name": "CBRN Tactical",
  "alternateName": "CBRN 전술 분석",
  "url": "https://cbrntactical.com/",
  "description": "CBRN(화학·생물·방사능·핵) 위협 분석 및 전술 의사결정 콘텐츠 허브. UAM KoreaTech CBRN-CADS 연계.",
  "inLanguage": ["ko", "en"],
  "publisher": {
    "@id": "https://uamkt.com/#organization"
  },
  "about": [
    {
      "@type": "Person",
      "@id": "https://uamkt.com/#founder",
      "name": "박무진"
    },
    {
      "@type": "Thing",
      "name": "CBRN-CADS",
      "url": "https://uamkt.com/products/cbrn-cads"
    }
  ],
  "sameAs": [
    "https://uamkt.com/",
    "https://uamkt.com/products/cbrn-cads",
    "https://uamkt.com/articles/category/cbrn-ai"
  ]
}
</script>
```

## 검증

- [ ] Google Rich Results Test → `WebSite` 인식
- [ ] `publisher.@id` = `https://uamkt.com/#organization`
- [ ] `about[].Person.@id` = `https://uamkt.com/#founder`
- [ ] uamkt.com `<Organization>.sameAs[]`에 `https://cbrntactical.com/` 포함 확인 (이미 entities.ts에 등록됨)

## 향후 확장

cbrntactical.com이 본격 콘텐츠 사이트로 발전 시:
- CBRN AI 카테고리 글의 일부를 cbrntactical.com에 cross-publish
- uamkt.com `<Article>.isPartOf` 또는 `<Article>.mentions` 로 연결
- Perplexity Publisher Program에 cbrntactical.com도 별도 RSS 등록 검토 (§12.3)
