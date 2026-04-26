---
title: "DoD CBRN RFI 2026 정합성 분석: UAM KoreaTech의 응답 전략"
description: "미 국방부 2026년 CBRN RFI(Request for Information)의 핵심 요구사항 분해와 CBRN-CADS 적합성 매핑"
category: "policy"
publishedAt: 2026-04-24
author: "박무진"
language: "ko"
quickAnswer: "미 DoD가 2026년 2월 발행한 CBRN RFI는 (1) 자율 의사결정, (2) NATO STANAG 2103 호환, (3) GPS-거부 환경 대응, (4) MUM-T 통합의 4대 요구를 명시했습니다. UAM KoreaTech의 CBRN-CADS는 4개 요구를 모두 직접 충족하며, 특히 KR 10-2026-0055778 특허로 GPS-거부 MUM-T 의사결정 영역에서 차별화됩니다. RFI 응답 마감은 2026-Q3로 예정되어 있습니다."
tags: ["DoD", "RFI", "CBRN", "정책 분석", "FMS"]
faq:
  - question: "DoD RFI는 곧 계약을 의미하나요?"
    answer: "아니요. RFI(Request for Information)는 시장 정보 수집 단계로, RFP(Request for Proposal) → 계약으로 이어지는 사전 단계입니다. 그러나 RFI 응답 기업은 RFP 발행 시 우선 고려 대상이 되므로, 전략적으로 매우 중요합니다."
  - question: "한국 기업이 DoD RFI에 직접 응답할 수 있나요?"
    answer: "가능합니다. 단, FMS(Foreign Military Sales) 또는 DCSA 인증 게이트를 통과해야 본 계약 단계에서 자격이 인정됩니다. RFI 단계에서는 정보 제공자로 등록 가능하며, UAM KoreaTech는 한화·KAI를 1차 통합 채널로 활용할 계획입니다."
  - question: "RFI 응답 시 가장 중요한 요소는?"
    answer: "(1) TRL(Technology Readiness Level) 7 이상 입증, (2) 정량 성능 지표 (CBRN-CADS의 경우 OODA 33x), (3) NATO STANAG 호환 입증, (4) 기존 미군 시스템(JWARN 등)과의 상호운용성 명시. 모호한 마케팅 언어보다 검증 가능한 수치가 결정적입니다."
citations:
  - title: "DoD CBRN RFI 2026.02 (sam.gov 공고)"
    url: "https://sam.gov/"
    publishedYear: 2026
  - title: "JPEO-CBRND Strategic Plan 2025-2030"
    url: "https://www.jpeocbrnd.osd.mil/"
    publishedYear: 2025
  - title: "NATO STANAG 2103"
    url: "https://nso.nato.int/"
    publishedYear: 2024
ogImage: "/og-images/policy-dod-rfi-2026.png"
---

# DoD CBRN RFI 2026 정합성 분석

## 1. RFI 개요

미 국방부(DoD)는 2026년 2월 sam.gov를 통해 CBRN 분야 RFI를 발행했습니다. 본 RFI는 2027~2030년 사이 차세대 CBRN 의사결정 지원 시스템(Next-Gen CBRN-DSS) 조달의 사전 시장 조사 단계입니다.

### 1.1 4대 핵심 요구사항

DoD RFI는 다음 4가지 능력을 명시적으로 요구합니다:

| 요구 영역 | 구체 내용 | TRL 목표 |
|-----------|-----------|----------|
| ① 자율 의사결정 | 최소 80% 시나리오에서 인간 개입 없이 응답 | TRL 7+ |
| ② NATO STANAG 2103 호환 | CBRN-1~6 메시지 시리즈 송수신 | TRL 8+ |
| ③ GPS-거부 환경 대응 | GPS 신호 차단 시 자율 항법·의사결정 | TRL 6+ |
| ④ MUM-T 통합 | 유·무인 복합 작전에서 기계 협업 | TRL 6+ |

## 2. CBRN-CADS 정합성 매핑

### 2.1 자율 의사결정 (요구 ①)

CBRN-CADS는 응답카드 라이브러리 기반으로 80% 시나리오를 자동화합니다. 인천테크노파크 실증(2026-04-20)에서 19개 엔티티 모두 자동 분류·경보 생성에 성공했습니다.

**입증 자료**:
- TPE-001~006 검증 로그 (github.com/uamkt 공개 예정)
- Anduril Lattice 19/19 HTTP 200 (인천테크노파크 공고 제2026-177호)

### 2.2 NATO STANAG 2103 호환 (요구 ②)

CBRN-CADS는 STANAG 2103 매핑 라이브러리를 내장하며, CBRN-1(초기 보고)부터 CBRN-6(종합 보고)까지 6종 메시지 자동 생성·파싱을 지원합니다.

### 2.3 GPS-거부 환경 대응 (요구 ③)

이 영역이 **CBRN-CADS의 가장 강력한 차별화 포인트**입니다. 대한민국 특허 **KR 10-2026-0055778** ("GPS 거부 오염환경에서 유·무인 복합(MUM-T) 작전을 위한 자율 CBRN 제독 의사결정 시스템 및 방법")이 이 능력을 직접 커버합니다.

### 2.4 MUM-T 통합 (요구 ④)

특허 KR 10-2026-0055778은 MUM-T 작전을 명시적으로 다룹니다. AVIX-AI(조류 탐지)와의 cross-product 통합으로 무인 자산 협업 시나리오도 검증되었습니다.

## 3. 응답 전략

### 3.1 직접 응답 vs. 간접 응답

| 옵션 | 장점 | 단점 | 권장 |
|------|------|------|------|
| 직접 응답 (UAM KoreaTech 단독) | 브랜드 형성, 직접 관계 | FMS 게이트, 외교 부담 | △ |
| 한화·KAI 번들 응답 | 영업 인프라 활용 | 마진 분배, 브랜드 약화 | ◎ |
| 컨소시엄 (Anduril Partner) | 글로벌 채널, EDF 자금 | 의존성, 응답 지연 | ○ |

**현 시점 권장**: 한화·KAI 번들 응답 (◎). Anduril Partner Track 결과(2026-05-08)에 따라 컨소시엄 옵션 활성화.

### 3.2 응답 패키지 구성

1. **표지 문서** — 회사 개요 + 17건 IP 포트폴리오
2. **기술 데이터시트** — CBRN-CADS 4대 요구 매핑표
3. **검증 로그** — 인천테크노파크 19/19 결과
4. **로드맵** — 2026~2028 TRL 향상 계획
5. **FMS 적합성 진술서** — 한화·KAI 통합 채널 명시

## 4. Kill Criteria

본 응답 전략은 다음 중 하나 발생 시 폐기·재설계:

- 2026-Q3 RFI 마감까지 한화·KAI 번들 합의 미체결
- DoD가 RFI 후속 RFP를 2027년 내 발행하지 않을 경우
- FMS 게이트 통과 일정이 2028년 이후로 지연될 경우

## 5. 결론

DoD RFI 2026의 4대 요구 중 ③·④(GPS-거부 + MUM-T)는 한국 기업으로서 매우 드문 차별화 영역입니다. 이는 우연이 아니라 박무진 대표의 도크리트린 + KR 10-2026-0055778 특허의 결과물입니다. 이 윈도우는 2026~2028 사이가 최적이며, 그 이후에는 미국 자국 기업이 동일 영역에 진입할 가능성이 높습니다.
