# UAM KoreaTech 자동화 운영 가이드

## 시스템 개요

**Cloud-First 자동화** — 데스크탑/맥미니 가용성 무관, GitHub Actions 24/7 클라우드 트리거.

```
Claude (콘텐츠 생성) → git push → GitHub Actions → 3 채널 발행
```

## 3 채널

| 채널 | URL | 발행 도구 |
|------|-----|----------|
| **Hub** (uamkt.com) | https://uamkt.com | Astro build → Netlify deploy |
| **Spoke 1** (Blogger) | https://tacticalprompt.blogspot.com | Blogger API v3 |
| **Spoke 2** (WordPress) | https://cbrntactical.com | WordPress REST API |

## 발행 트리거 (3가지)

1. **즉시 발행** — `_content_pipeline/.../blogger.md` 또는 `wordpress.md` 변경 후 push
2. **예약 발행** — 매일 09:00 KST cron (요일별 슬롯)
3. **수동 발행** — GitHub UI: Actions → 워크플로우 선택 → "Run workflow"

## GitHub Secrets (대표님 발급 필요)

저장소 Settings → Secrets and variables → Actions에서 등록:

| Secret 이름 | 값 |
|------------|---|
| `NETLIFY_AUTH_TOKEN` | Netlify Personal Access Token |
| `NETLIFY_SITE_ID` | Netlify Site Settings → Site ID |
| `BLOGGER_BLOG_ID` | https://www.blogger.com → 블로그 설정 → URL에서 추출 |
| `BLOGGER_SERVICE_ACCOUNT_JSON` | Google Cloud Service Account JSON (전체 내용 paste) |
| `WP_SITE_URL` | https://cbrntactical.com |
| `WP_USERNAME` | WordPress 관리자 사용자명 |
| `WP_APP_PASSWORD` | WordPress Application Password (24자리) |

## 첫 발행 체크리스트

- [ ] 1. GitHub 저장소 `uamkt/parkmoojin` 생성 완료
- [ ] 2. Secrets 7개 등록 완료
- [ ] 3. Netlify가 `uamkt/parkmoojin` 저장소를 연결 (Netlify UI → Site → Build settings → Link to Git)
- [ ] 4. Blogger 측에서 Service Account 이메일에 작성자 권한 부여
- [ ] 5. WordPress 측에서 Application Password 발급
- [ ] 6. 첫 git push → Hub 자동 배포 검증
- [ ] 7. workflow_dispatch로 Blogger 수동 발행 검증
- [ ] 8. workflow_dispatch로 WordPress 수동 발행 검증
- [ ] 9. cron 첫 실행 확인 (다음 09:00 KST)

## 콘텐츠 작성 워크플로우

### 옵션 A — Claude 자동 (목표 상태)
```
박무진 대표:
  Claude에 "Week 5 Pillar 2 BLIS-D 시리즈 발행해줘"

Claude:
  → 7편 자동 생성
  → _content_pipeline/2026-W21/ 7개 파일 + src/content/articles/ 2개 파일
  → git add + commit + push
  → GitHub Actions가 cron 또는 push 트리거에 따라 자동 발행
```

### 옵션 B — 수동 (현재 단계)
```
1. 콘텐츠 raw 작성 (.md 파일)
2. 적절한 위치에 저장:
   - Hub: src/content/articles/[category]/[slug].md
   - Blogger: _content_pipeline/[date]/blogger.md
   - WordPress: _content_pipeline/[date]/wordpress.md
3. git add . && git commit -m "feat: Week N publish" && git push
4. GitHub Actions 진행 모니터링
5. 발행 완료 URL 확인
```

## 트러블슈팅

| 증상 | 원인 | 해결 |
|------|------|------|
| Hub 빌드 실패 | NETLIFY_AUTH_TOKEN 만료 | Netlify에서 재발급 후 Secrets 갱신 |
| Blogger 403 Forbidden | Service Account 권한 미부여 | Blogger 설정 → 작성자 추가 |
| WordPress 401 | App Password 만료/오타 | 새 App Password 발급 |
| cron 미실행 | UTC/KST 변환 오류 | cron 표현식 재확인 (KST 09:00 = UTC 00:00) |
| 콘텐츠 미발견 알림 | scheduled 슬롯에 파일 없음 | `_content_pipeline/{week}/{slot}_{channel}.md` 파일 작성 |

## 파일 구조 요약

```
~/Desktop/uamkt-com/
├── .github/workflows/
│   ├── publish-hub.yml          ← Hub Astro build → Netlify
│   ├── publish-blogger.yml       ← Blogger API
│   ├── publish-wordpress.yml     ← WordPress REST API
│   └── publish-scheduled.yml     ← Cron 7-slot 라우팅
├── scripts/
│   ├── publish_blogger.py
│   ├── publish_wordpress.py
│   └── build-og.mjs (기존 OG 이미지 자동 생성)
├── src/
│   ├── content/articles/         ← Hub 콘텐츠
│   │   ├── papers/
│   │   ├── case-studies/
│   │   ├── business-models/
│   │   ├── cbrn-ai/
│   │   ├── market-trends/
│   │   └── policy/
│   └── pages/
│       ├── avix.astro            ← Pillar 1
│       ├── cbrn-cads.astro       ← Pillar 2
│       └── tp-iq.astro           ← Pillar 3
├── _content_pipeline/             ← Spoke 콘텐츠 raw
│   └── README.md
├── AUTOMATION.md (이 파일)
├── README.md
└── netlify.toml
```

## Mac Mini 통합 (구매 후)

Mac Mini는 다음 역할:
1. **AI Agent 호스팅** — Claude API 호출 자동화
2. **모니터링 대시보드** — 발행 상태 실시간 확인
3. **백업·로그 분석** — `_logs/` 폴더 누적
4. **수동 트리거** — GitHub Actions API 호출 (필요 시)

GitHub Actions는 Mac Mini와 무관하게 Cloud에서 24/7 가동되므로, Mac Mini는 보조·증강 역할.
