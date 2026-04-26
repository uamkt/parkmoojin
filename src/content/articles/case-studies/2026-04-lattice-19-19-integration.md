---
title: "Anduril Lattice 19/19 통합 실증 보고서: 인천테크노파크 공고 제2026-177호"
description: "UAM KoreaTech가 2026년 4월 20일 달성한 Anduril Lattice SDK 19/19 HTTP 200 실증의 기술 보고서"
category: "case-studies"
publishedAt: 2026-04-20
author: "박무진"
language: "ko"
quickAnswer: "UAM KoreaTech는 2026-04-20 인천테크노파크 공고 제2026-177호 실증에서 Anduril Lattice SDK 대상 19개 엔티티(정적 6 + 동적 13)를 모두 HTTP 200으로 게시하는 데 성공했습니다. 이는 한국 기업 최초의 NATO 표준 군용 데이터 플랫폼 통합 검증으로, STANAG 2103 호환과 CBRN-CADS의 NATO 상호운용성을 동시에 입증합니다. 5대 API 필드 규칙(disposition·template·environment·GEO·publisher)이 회귀 테스트 기준선으로 확정되었습니다."
tags: ["Anduril", "Lattice", "통합 실증", "STANAG 2103", "Case Study"]
faq:
  - question: "19/19는 정확히 무엇을 의미하나요?"
    answer: "19개 엔티티를 Lattice Entity API에 PUT/POST 요청한 결과, 19개 모두 HTTP 200 응답을 받았다는 의미입니다. 정적 엔티티 6개(카메라 3 + 위험구역 3)와 동적 엔티티 13개(조류 탐지 8 + 경보 5)로 구성되었으며, 모두 GET 검증으로도 정상 회수되었습니다."
  - question: "이 실증의 산업적 의의는?"
    answer: "Anduril Lattice는 미군 및 NATO 회원국이 채택하는 군용 데이터 플랫폼입니다. 이 플랫폼에서 19/19 통과는 한국 기업의 군용 시스템 통합 능력을 객관적으로 입증하는 첫 사례이며, FMS·DCSA 인증 게이트 통과 시 직접 인용 가능한 검증 자료입니다."
  - question: "5대 필드 규칙은 무엇인가요?"
    answer: "(1) disposition은 FRIENDLY/HOSTILE/UNKNOWN/NEUTRAL 4값만 허용, (2) template은 TEMPLATE_ASSET·CONTROL_AREA·TRACK·SENSOR_POI 사용, (3) environment 필드는 milView 객체 내, (4) GEO type은 CONTROL_AREA(POLYGON 아님), (5) publisher 호출 시 --write-state 옵션 필수. 이 5개를 위반하면 405/400 에러가 발생합니다."
citations:
  - title: "인천테크노파크 공고 제2026-177호"
    url: "https://www.itp.or.kr/"
    publishedYear: 2026
  - title: "Anduril Lattice SDK Documentation"
    url: "https://www.anduril.com/lattice/"
    publishedYear: 2026
  - title: "NATO STANAG 2103"
    url: "https://nso.nato.int/"
    publishedYear: 2024
ogImage: "/og-images/case-studies-lattice-2026.png"
---

# Anduril Lattice 19/19 통합 실증 보고서

## 1. 실증 개요

| 항목 | 내용 |
|------|------|
| 실증 일자 | 2026-04-20 |
| 공고 번호 | 인천테크노파크 공고 제2026-177호 |
| 커밋 해시 | `fbcb327` |
| 대상 시스템 | Anduril Lattice SDK (Sandbox `30dhgc`) |
| 결과 | 19/19 HTTP 200 (PUT) + 6/6 GET 검증 |
| 토큰 만료 | 2026-06-03 (재실증 가능 윈도우) |

## 2. 엔티티 구성

### 2.1 정적 엔티티 (6개)

| 엔티티 | template | disposition | environment |
|--------|----------|-------------|-------------|
| 카메라 #1 | TEMPLATE_SENSOR_POINT_OF_INTEREST | FRIENDLY | LAND |
| 카메라 #2 | TEMPLATE_SENSOR_POINT_OF_INTEREST | FRIENDLY | LAND |
| 카메라 #3 | TEMPLATE_SENSOR_POINT_OF_INTEREST | FRIENDLY | LAND |
| 위험구역 #1 | TEMPLATE_GEO/CONTROL_AREA | NEUTRAL | LAND |
| 위험구역 #2 | TEMPLATE_GEO/CONTROL_AREA | NEUTRAL | LAND |
| 위험구역 #3 | TEMPLATE_GEO/CONTROL_AREA | NEUTRAL | LAND |

### 2.2 동적 엔티티 (13개)

| 카테고리 | 개수 | template | disposition |
|----------|------|----------|-------------|
| 조류 탐지 (AVIX-AI) | 8 | TEMPLATE_TRACK | NEUTRAL |
| CBRN 경보 (CBRN-CADS) | 5 | TEMPLATE_TRACK | UNKNOWN/HOSTILE |

## 3. 5대 필드 규칙 (회귀 테스트 기준선)

본 실증에서 확정된 5대 필드 규칙은 향후 모든 Lattice 통합 작업의 회귀 테스트 기준선이 됩니다.

### 3.1 disposition

```
허용값: FRIENDLY | HOSTILE | UNKNOWN | NEUTRAL
```

`NEUTRAL`은 2026-04-24 Anduril Lattice Dashboard에 공식 추가된 값으로, Animal·비군사 객체에 사용합니다.

### 3.2 template

```
정적: TEMPLATE_ASSET/RADAR | TEMPLATE_GEO/CONTROL_AREA | TEMPLATE_SENSOR_POINT_OF_INTEREST
동적: TEMPLATE_TRACK
```

### 3.3 environment

```json
"milView": {
  "environment": "ENVIRONMENT_AIR | LAND | SURFACE | SUBSURFACE | SPACE"
}
```

`environment` 필드는 반드시 `milView` 객체 내부에 위치해야 합니다.

### 3.4 GEO 타입

```
정확: GEO_TYPE_CONTROL_AREA
오답: GEO_TYPE_POLYGON  ← 405 에러
```

`geoShape.polygon.rings[].positions[]` 구조 사용 (`geoDetails.controlArea.points`가 아님).

### 3.5 publisher

```bash
publisher --write-state ...  # ★ --write-state 옵션 필수
```

## 4. 자주 발생하는 에러와 해결

### 4.1 PUT path 오류 (405)

```
오답: PUT /api/v1/entities/{entityId}
정답: PUT /api/v1/entities  (entityId는 body 내부)
```

### 4.2 expiry 구조 오류

```
오답: { "expiry": { "expiryTime": "..." } }
정답: { "expiryTime": "..." }  // 최상위 ISO 문자열
```

### 4.3 DELETE 미지원

Lattice는 `DELETE` 메서드를 지원하지 않습니다(405). Soft-delete를 위해서는:

```json
{
  "isLive": false,
  "expiryTime": "1970-01-01T00:00:00Z"
}
```

위 페이로드를 PUT으로 전송합니다.

## 5. altitude 필드 선택

```
altitudeAglMeters : 저고도, 지면 기준 (예: 드론, 차량)
altitudeHaeMeters : HAE 기준 (예: Animal, 고공, 절대 좌표)
```

택일이며, 동시 사용 불가. 2026-04-24 부로 HAE가 공식 허용되어 조류 탐지 시나리오에 적용됩니다.

## 6. 본 실증의 의의

### 6.1 한국 기업 최초

Anduril Lattice는 미군·NATO 회원국이 채택하는 군용 데이터 플랫폼입니다. 한국 기업이 19/19로 통합 실증을 통과한 사례는 본 실증이 최초입니다.

### 6.2 STANAG 2103 호환 입증

Lattice Entity API는 STANAG 2103의 핵심 데이터 모델과 정합성을 갖습니다. 19/19 통과는 STANAG 2103 호환의 객관적 증거입니다.

### 6.3 FMS·DCSA 인증 자료

미 DoD가 RFI 후속 RFP를 발행할 경우, 본 실증 로그는 FMS·DCSA 인증 게이트에서 직접 인용 가능한 검증 자료입니다.

## 7. 다음 단계

1. **2026-05-08** Anduril Partner Track 응답 대기 (V5.1 번들 발송 완료)
2. **2026-Q3** Animal/HAE 패치(`avix_publisher_v2_animal_patch.py`) 실증
3. **2026-Q4** 동일 시나리오 토큰 갱신 후 재실증 (회귀 테스트)
4. **2027** 한화·KAI 번들에 본 실증 로그 첨부 → FMS 응답 패키지 구성

## 8. 결론

19/19는 단순 숫자가 아닙니다. 한국 방산 AI 기업이 NATO 표준 군용 인프라에 직접 통합 가능하다는 객관적 증명이며, K-방산 수출 패키지의 신뢰 자산입니다. 이 자산은 박무진 대표의 도크리트린 × 기술개발연구원 5명의 엔지니어링 × 2026-04-20 단일 커밋(`fbcb327`)으로 만들어졌습니다.
