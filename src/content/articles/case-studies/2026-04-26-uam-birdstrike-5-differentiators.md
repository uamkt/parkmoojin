---
title: "국내 최초 UAM 버드스트라이크 솔루션의 5가지 차별점"
description: "AVIX-AI 폐루프 OS · Anduril Lattice gap-filling · BSM 2.0 4 모듈 — 한국 최초 UAM 버티포트 적용 사례를 5가지 차별 요소로 분해 분석"
category: "case-studies"
publishedAt: 2026-04-26
author: "박무진"
language: "ko"
quickAnswer: "UAM KoreaTech은 국내 최초로 UAM 버티포트 특화 조류충돌 솔루션을 운영하는 기업이며, (1) 버티포트 특화 폐루프 OS, (2) Anduril Lattice gap-filling 19/19 PoC, (3) BSM 2.0 5단 폐루프 아키텍처, (4) AI 4 모듈 통합, (5) Dual-Use 적용성의 5가지 축에서 기존 시장 대비 구조적 우위를 확보하고 있습니다."
tags: ["UAM", "Bird Strike", "AVIX-AI", "BSM 2.0", "Anduril Lattice", "Vertiport"]
faq:
  - question: "UAM 버티포트는 왜 기존 공항과 다른 솔루션이 필요한가?"
    answer: "UAM 버티포트는 도심 입지·수직 접근 기하·고밀도 운영 템포라는 세 가지 점에서 활주로형 공항과 구조적으로 다릅니다. 도시 적응 종 분포·수직 모니터링·30초 이내 위협 식별-자산 출동 사이클이 별도 요건입니다."
  - question: "Anduril Lattice gap-filling이란?"
    answer: "Anduril Lattice는 글로벌 항공 안전 데이터 플랫폼이지만 저고도 비행체-야생동물 인터랙션 도메인 모듈이 부재합니다. UAM KoreaTech은 이 공백을 자체 PoC로 검증하여 19/19 HTTP 200 + GET 6/6을 달성하였고, 글로벌 플랫폼에 민간 기여 형태로 빌드업하고 있습니다."
  - question: "BSM 2.0은 기존 시스템과 어떻게 다른가?"
    answer: "기존 공항 조류충돌 시스템은 IN→OUT 2단 선형 구조이지만, BSM 2.0은 IN→PROCESS→OUT→SOLUTION→KPI→IN의 5단 폐루프 순환 구조입니다. 핵심 차별은 KPI→IN 강화학습 피드백으로 운영 시간 누적 시 차별화가 커지는 Data Moat가 형성됩니다."
citations:
  - title: "K-UAM 2030 Roadmap"
    url: "https://www.molit.go.kr/"
    publishedYear: 2024
  - title: "ICAO Doc 9137 Part 3 — Wildlife Hazard Management at Aerodromes"
    url: "https://www.icao.int/"
    publishedYear: 2020
  - title: "Anduril Lattice SDK Sandbox Documentation v5.1"
    url: "https://developer.anduril.com/"
    publishedYear: 2026
  - title: "OGC SensorThings API Standard v1.1"
    url: "https://www.ogc.org/standards/sensorthings"
    publishedYear: 2024
ogImage: "/og-images/case-studies-uam-birdstrike-5-differentiators-2026.png"
---

# 국내 최초 UAM 버드스트라이크 솔루션의 5가지 차별점

## Abstract

국토교통부 K-UAM 2030 로드맵 발효 이후, 국내 UAM 버티포트 운영의 가장 시급한 안전 과제는 **조류충돌(Bird Strike) 위험 자동 차단**이다. 본고는 UAM KoreaTech가 국내 최초로 적용한 버티포트 특화 조류충돌 솔루션의 5가지 차별 요소를 분해 분석하고, 각 요소가 기존 공항 레이더 중심 솔루션과 어떻게 차별되는지를 정량 비교한다. 핵심 결론: 본사 솔루션은 (1) 버티포트 특화 폐루프 OS, (2) Anduril Lattice gap-filling 19/19 PoC, (3) BSM 2.0 5단 폐루프 아키텍처, (4) AI 4 모듈 통합, (5) Dual-Use 적용성의 5가지 축에서 기존 시장 대비 구조적 우위를 확보하고 있다.

## 1. 문제 정의 — 왜 UAM 버티포트는 다른 솔루션이 필요한가

국내 공항 조류충돌 사고는 2014~2024년 10년간 617건 발생하였다(국토교통부·한국공항공사 통계). 이 통계는 기존 활주로형 공항을 대상으로 한 것이며, K-UAM 2030 로드맵에 따라 2030년까지 도심 곳곳에 신설될 UAM 버티포트는 다음 세 가지 점에서 기존 공항과 구조적으로 다르다.

첫째, **버티포트는 도시 내부 또는 근교에 입지**한다. 활주로형 공항이 대부분 외곽 평야에 위치한 것과 달리, 버티포트는 빌딩 옥상·수변 부지·도심 환승 지점에 설치된다. 이는 기존 공항 주변과 완전히 다른 조류 서식 패턴을 만든다. 도심 환경에서는 비둘기·까마귀·흰뺨검둥오리 등 도시 적응 종이 우위를 차지하며, 이들의 비행 패턴·집단 행동·시간대 분포가 활주로형 공항의 위협 종(가창오리·흑기러기·왜가리)과 본질적으로 다르다.

둘째, **버티포트의 항공기 접근 패턴은 수직**이다. 활주로형 공항이 직선 활주로 양 끝에 위협 구간이 집중되는 반면, 버티포트는 모든 방향의 수직 상승·하강 경로에서 위협이 분산된다. 이는 기존의 선형(linear) 레이더 스캔 방식으로는 효율적 모니터링이 어렵다는 것을 의미한다.

셋째, **버티포트의 운영 빈도는 활주로형 공항 대비 5~10배 높다**. 도심 환승 거점 버티포트는 시간당 수십 회의 이착륙이 예상되며, 이는 위협 자산을 발견하고 경보를 발령하는 데 허용되는 시간이 매우 짧다는 것을 의미한다.

> "버티포트는 활주로형 공항의 축소판이 아니다 — 위협 패턴·접근 기하·운영 템포가 모두 다른 별개 도메인이다."

## 2. 5가지 차별점 — 정량 비교

본사 솔루션의 5가지 차별 요소를 기존 시장과 정량 비교하면 다음과 같다.

| # | 차별점 | 본사 솔루션 | 기존 시장 | 검증 근거 |
|---|--------|-----------|---------|---------|
| 1 | 국내 최초 UAM 버티포트 적용 | 버티포트 특화 폐루프 OS | 공항 활주로형 레이더 중심 | 국토부 K-UAM 2030 |
| 2 | Anduril Lattice gap-filling | 19/19 HTTP 200 자체 PoC | Lattice Sandbox 미참여 | fbcb327 커밋 (2026-04-20) |
| 3 | BSM 2.0 폐루프 OS | 5단 순환 + 강화학습 피드백 | 선형 Alert 2단 (IN→OUT) | OGC SensorThings API v1.1 |
| 4 | AI 4 모듈 통합 | M1 객체인식 + M2 Habitat + M3 오케스트레이션 + M4 KPI | 단일 모달리티 (레이더 only) | 저작권 등록 완료 라인업 |
| 5 | Dual-Use 적용성 | Civil + Defense 양쪽 적용 | 단일 트랙 한정 | CBRN-CADS Lattice 통합 |

## 3. 5가지 차별점 — 심층 분석

### 차별점 1 — 국내 최초 UAM 버티포트 적용

본사는 국내 기업 중 유일하게 UAM 버티포트를 1차 운영 대상으로 설계된 조류충돌 솔루션을 보유한다. K-UAM 2030 로드맵에 따라 2027년부터 시범 운영될 도심 버티포트는 도심 종 분포·수직 접근 기하·고밀도 운영 템포라는 세 가지 점에서 활주로형 공항과 전혀 다른 환경이다.

본사 솔루션은 설계 초기부터 이 세 가지 차이를 1차 요건으로 반영하여 개발되었다. 구체적으로 (a) 비둘기·까마귀·흰뺨검둥오리 등 도시 적응 종 13개 우선 학습 데이터셋, (b) 360도 수직·수평 동시 모니터링 객체 인식 모듈, (c) 평균 30초 이내 위협 식별-자산 출동 사이클이라는 세 가지 운영 파라미터가 활주로형 공항용 솔루션과 정량적으로 다르다.

### 차별점 2 — Anduril Lattice gap-filling 기여

Anduril Industries의 Lattice는 글로벌 항공 안전 데이터 플랫폼으로 미 국방부·NATO·다수 동맹국이 도입한 표준 OS이다. 그러나 Lattice의 공식 Entity 카탈로그는 저고도(150m AGL 이하) 비행체-야생동물 인터랙션 도메인에 대한 모듈이 부재하다. 본사는 이 공백을 자체 PoC로 검증하여 글로벌 플랫폼에 "민간 기여(civil contribution)" 형태로 빌드업하고 있다.

본사의 Lattice Sandbox PoC는 2026-04-20 커밋(SHA: fbcb327)에서 정적 6개 + 동적 13개 = 총 19개 엔티티 발행에 대해 19/19 HTTP 200 응답을 달성하였다. GET 검증 6/6도 동시 통과하여, 글로벌 메이저 플랫폼의 도메인 공백을 한국 기업이 메우고 있다는 사회·기술적 정통성 신호를 확보하였다.

### 차별점 3 — BSM 2.0 폐루프 OS 아키텍처

기존 공항 조류충돌 시스템은 IN(센서) → OUT(알림)의 2단 선형 구조이다. 위협이 탐지되면 알림이 발령되고, 그 다음은 인간 운영자의 수동 판단·자산 출동·결과 기록으로 이어진다. 이 구조의 핵심 한계는 조치 결과가 다시 시스템으로 환류되지 않아 모델·전술이 시간이 지나도 개선되지 않는다는 점이다.

본사 BSM 2.0(Bird Strike Mitigation 2.0)은 IN → PROCESS → OUT → SOLUTION → KPI → IN의 5단 폐루프 순환 구조를 채택한다. 핵심 차별은 KPI → IN 피드백 루프로, 조치 결과(성공·실패·비용)가 자동 수집되어 AI 모델·자산 오케스트레이션 가중치를 지속 개선한다. 공항·버티포트가 운영 시간을 누적할수록 차별화가 커지는 Data Moat가 형성되는 구조이며, 이는 OGC SensorThings API v1.1 표준 기반 상호 운용성을 갖추어 향후 한국공항공사·국토부 표준과 즉시 정합 가능하다.

### 차별점 4 — AI 4 모듈 통합 (M1~M4)

BSM 2.0의 IN 계층은 4 핵심 모듈로 구성된다. **M1 지능형 CCTV 조류 객체 인식**은 보안 업계의 안면인식·인원 카운팅 기술을 조류 객체로 역응용한 모듈로, 얼굴 감지 대신 조류 객체 감지, 인원 카운팅 대신 개체 카운팅, Re-ID 트래킹 대신 같은 개체 경로 추적을 수행한다. **M2 Airfield Habitat Profile Engine**은 공항·버티포트별 토지 사용(LULC)·수목·수계·먹이 DB와 시계열 조류 방문 패턴을 결합하여, 새 개체가 출현한 이유와 다음 이동을 추론한다.

**M3 제압자산 오케스트레이션 라이브러리**는 음향 스피커 + 에어분사 드론 동시 운영(충격파 2배) 등 자산 조합·타이밍의 직교적 설계를 통해 조류의 학습 내성을 무력화한다. **M4 KPI 폐루프 학습**은 조치 결과를 강화학습 가중치로 자동 반영하여, 같은 종·같은 Habitat·같은 시간대에서 어떤 자산 조합이 효과적이었는지 학습하고 다음 조치에서 우선순위를 갱신한다.

### 차별점 5 — Dual-Use 적용성

본사의 가장 구조적인 차별점은 동일 기술 스택을 Civil 항공안전과 Defense CBRN-CADS 양쪽에 적용 가능하다는 것이다. 객체 인식·Habitat 프로파일·자산 오케스트레이션·KPI 학습이라는 4 모듈은 도메인 데이터셋만 교체하면 조류 위협 → CBRN 위협, 공항 버티포트 → 군 비행장으로 즉시 확장된다. 실제로 본사 CBRN-CADS는 동일 BSM 2.0 OS를 CBRN 도메인에 적용한 것이며, Anduril Lattice 통합도 양 사업에서 공통 활용된다.

이 Dual-Use 적용성은 단순한 마케팅 메시지가 아니라 실제 R&D 효율 측면의 구조적 우위이다. Civil 시장에서 축적되는 운영 데이터가 Defense 검증 단계의 시간·비용을 수년·수십억 원 단위로 단축시키며, Defense에서 검증된 표준(STANAG·DoD RFI)이 Civil 시장에서 신뢰 신호로 작용한다.

## 4. 시사점 — 5가지 차별점이 만드는 누적 효과

위 5가지 차별점은 개별적으로도 의미가 있지만, 누적 효과를 분석하면 본사 솔루션의 전략적 위치가 명확해진다. 첫째, 차별점 1과 4의 결합은 본사가 **국내 UAM 버티포트 시장에서 사실상 단독 공급자**가 될 가능성을 시사한다. K-UAM 2030 로드맵의 2027년 시범 운영 시점에 활주로형 공항용 외산 솔루션은 도시 종·수직 접근 기하·운영 템포 차이로 즉시 적용이 어렵다.

둘째, 차별점 2와 3의 결합은 본사가 **글로벌 표준 정합성**에서 구조적 우위를 확보하고 있음을 보여준다. Anduril Lattice gap-filling 기여 + OGC SensorThings API v1.1 정합 + 향후 한국공항공사·국토부 표준 즉시 적용 가능성이라는 3중 표준 정합성은 경쟁사가 단기간에 따라잡기 어려운 진입 장벽이다.

셋째, 차별점 5의 Dual-Use 적용성은 본사의 사업 구조에 **이중 매출 채널**을 부여한다. Civil 시장의 운영 매출(SaaS 구독 + 공공 조달)과 Defense 시장의 R&D 매출(국방 R&D 사업 + 방산 수출)이 동일 기술 스택을 공유하므로, 한 시장의 부진이 전체 사업의 위험으로 직결되지 않는 분산 효과를 갖는다.

## 5. 결론 및 다음 단계

본고는 UAM KoreaTech가 국내 최초로 적용한 UAM 버티포트 조류충돌 솔루션의 5가지 차별점을 분해 분석하였다. 5가지 차별점은 (1) 버티포트 특화 폐루프 OS, (2) Anduril Lattice gap-filling 19/19 PoC, (3) BSM 2.0 5단 폐루프 아키텍처, (4) AI 4 모듈 통합, (5) Dual-Use 적용성으로 정리되며, 각각이 독립적 진입 장벽이자 누적 결합 시 더 큰 전략적 우위로 확장된다.

다음 후속 분석 주제로는 (a) Anduril Lattice gap-filling 19/19 PoC의 기술적 상세, (b) BSM 2.0 폐루프 OS의 5단 순환 구조 다이어그램과 OGC SensorThings API 정합 검증, (c) 국내 공항 조류충돌 617건 / 10년 통계의 정책 변곡점 분석을 후속 발행할 예정이다.

---

**Related Reading**:
- 📱 [AVIX-AI 객체 인식에 적용한 전술 프롬프트 5종 — TPE-002 사례](https://tacticalprompt.blogspot.com/) (Spoke 1)
- 🛡️ [AVIX 폐루프 OS의 NATO STANAG 호환성 — Defense Track 분석](https://cbrntactical.com/) (Spoke 2)
- 📚 [Bird Strike Trilogy Vol.1~3 (Amazon Kindle)](https://uamkt.com/publications)

