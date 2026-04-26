# Content Pipeline — Spoke 발행 대기열

이 폴더는 **Spoke 채널(Blogger + WordPress)** 의 발행 콘텐츠 raw 파일을 보관합니다.
Hub 콘텐츠는 `src/content/articles/` 에 직접 저장합니다.

## 폴더 구조

```
_content_pipeline/
├── README.md (이 파일)
├── 2026-04-26/                  ← 주차 또는 발행일 폴더
│   ├── blogger.md               ← Google Blogger 발행 (단순)
│   ├── wordpress.md             ← WordPress 발행 (단순)
│   ├── pillar-deepdive_hub.md   ← scheduled 트리거용 (요일별 슬롯)
│   ├── pillar-variant_blogger.md
│   ├── pillar-stanag_wordpress.md
│   ├── tpe-series_blogger.md
│   ├── strategic-update_hub.md
│   ├── cbrn-analysis_wordpress.md
│   └── weekly-digest_blogger.md
└── 2026-W18/                    ← 차주
```

## 발행 트리거

| 트리거 | 동작 |
|-------|------|
| **git push** (이 폴더 내 변경) | 변경된 파일을 즉시 발행 |
| **schedule (cron)** | 매일 09:00 KST에 해당 요일 슬롯 자동 발행 |
| **workflow_dispatch** (수동) | GitHub UI에서 임의 시점 발행 |

## Frontmatter 표준

### Blogger (`blogger.md`)
```yaml
---
title: "..."
labels: ["TPE-002", "Object Recognition"]
custom_html: true   # HTML 그대로 / false면 MD → HTML 변환
---
```

### WordPress (`wordpress.md`)
```yaml
---
title: "..."
description: "..."
status: publish        # publish | draft | future
publish_date: null     # ISO 8601 시 예약 발행
categories: ["Defense", "STANAG Analysis"]
tags: ["NATO STANAG"]
featured_media: null   # WP media ID
custom_html: false
---
```

## 자동화 워크플로우

```
[Claude AI Agent or 박무진 대표]
  ↓ git add + commit + push
GitHub Actions
  ├── publish-blogger.yml   → Blogger API
  └── publish-wordpress.yml → WordPress REST API
  → 채널별 즉시 발행
```

## 주 7편 발행 캘린더

| 요일 | 슬롯 | 채널 | 콘텐츠 유형 |
|------|------|------|------------|
| 월 | pillar-deepdive | Hub | Pillar Deep-dive |
| 화 | pillar-variant | Blogger | Pillar 변형 |
| 수 | pillar-stanag | WordPress | NATO/STANAG |
| 목 | tpe-series | Blogger | TPE 시리즈 |
| 금 | strategic-update | Hub | Strategic |
| 토 | cbrn-analysis | WordPress | CBRN 분석 |
| 일 | weekly-digest | Blogger | Weekly Digest |
