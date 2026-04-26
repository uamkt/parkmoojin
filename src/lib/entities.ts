/**
 * src/lib/entities.ts — 엔티티 단일 진실원 (Single Source of Truth)
 *
 * 본 파일은 schema.org JSON-LD 생성의 canonical source입니다.
 * 모든 페이지의 schema는 이 파일의 export를 import하여 생성합니다.
 *
 * 박무진 대표 1회 확인 완료 (2026-04-26)
 *  - 설립일·연락처·학력·소셜 핸들 모두 검증값 입력
 *  - 잔여 TODO: PATENTS[*].datePublished (KR×2 + US PCT) — Tier 2 (D+1) 전 보강
 */

export const SITE_URL = "https://uamkt.com" as const;

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "UAM KoreaTech",
  legalName: "유에이엠코리아텍 주식회사",
  alternateName: ["유에이엠코리아텍", "UAM Korea Tech"],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "민간 항공안전을 폐루프 AI(BSM 2.0 + AVIX-AI)로 자동 차단하고, 동일 기술 스택을 BLIS-D 고온건식 제독·CBRN-CADS 지휘결심으로 dual-use 적용하는 한국의 항공우주 기술 기업. 17건 IP · 19/19 Lattice 실증 · 글로벌 buy-back 1건(BOX O3, Switzerland) 보유.",
  foundingDate: "2024-05-27",
  founder: { "@id": `${SITE_URL}/#founder` },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 7,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressLocality: "서울특별시",
  },
  email: "ceo@uamkt.com",
  telephone: "+82-10-3000-6980",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+82-2-795-2024",
      email: "ceo@uamkt.com",
      areaServed: "KR",
      availableLanguage: ["Korean", "English"],
    },
  ],
  knowsAbout: [
    "Civil Aviation Safety",
    "Bird Strike Mitigation",
    "BSM 2.0 Closed-Loop OS",
    "Wildlife Intelligence Platform",
    "Vertiport Licensing",
    "Dual-Use Aerospace",
    "CBRN Defense",
    "Chemical Warfare AI",
    "Decision Support Systems",
    "Tactical Prompt Engineering",
    "NATO STANAG 2103",
    "JWARN",
    "Anduril Lattice",
    "MUM-T",
    "Active Resilience Deterrence",
    "Green Technology",
  ],
  sameAs: [
    "https://tacticalprompt.com/",
    "https://cbrntactical.com/",
    "https://github.com/uamkt",
  ],
} as const;

export const FOUNDER = {
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: "박무진",
  alternateName: ["Park Moojin", "Moojin Park"],
  jobTitle: "Chief Executive Officer",
  description:
    "유에이엠코리아텍(주) 대표이사. 버티포트 인허가 및 녹색기술 전담 사업 총괄, CBRN AI 의사결정 시스템 아키텍트.",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  founderOf: { "@id": `${SITE_URL}/#organization` },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "육군3사관학교",
      description: "군사사학 학사 졸업",
    },
    {
      "@type": "EducationalOrganization",
      name: "서강대학교",
      description: "심리학 학사 졸업",
    },
    {
      "@type": "EducationalOrganization",
      name: "서강대학교 경제대학원",
      description: "ESG경제학 석사 재학 중 (as of 2026-04)",
    },
  ],
  knowsAbout: [
    "CBRN AI",
    "Tactical Prompt Engineering",
    "Defense Decision Support",
    "Military Doctrine",
    "Vertiport Licensing",
    "ESG Economics",
  ],
  sameAs: [
    "https://www.linkedin.com/in/moojin-park",
  ],
} as const;

export const PRODUCTS = [
  {
    "@type": "Product",
    additionalType: "https://schema.org/SoftwareApplication",
    "@id": `${SITE_URL}/products/cbrn-cads/#product`,
    name: "CBRN-CADS",
    alternateName: "Chemical Biological Radiological Nuclear Combat Decision Support",
    description:
      "한국군 대대급 CBRN 지휘결심 AI. NATO JWARN 등가물. OODA Loop 33배 단축.",
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    applicationCategory: "Defense Decision Support",
    operatingSystem: "Linux (Ubuntu 22.04), Windows",
    softwareVersion: "1.0",
    url: `${SITE_URL}/products/cbrn-cads`,
  },
  {
    "@type": "Product",
    additionalType: "https://schema.org/SoftwareApplication",
    "@id": `${SITE_URL}/products/avix-ai/#product`,
    name: "AVIX-AI V3",
    alternateName: "Avian Intersection AI · 4-way Fusion Brain",
    description:
      "AI 영상·음향·레이더·드론 4중 융합 두뇌. Anduril Lattice 통합 19/19 HTTP 200 실증 완료. Edge AI Gen 3 (Dual-Use).",
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    applicationCategory: "Bird Strike Detection · 4-way Sensor Fusion",
    operatingSystem: "Linux (Ubuntu 22.04)",
    softwareVersion: "5.1",
    url: `${SITE_URL}/products/avix-ai`,
  },
  {
    "@type": "Product",
    additionalType: "https://schema.org/SoftwareApplication",
    "@id": `${SITE_URL}/products/avix-ai-civil/#product`,
    name: "AVIX-AI Civil",
    alternateName: "Wildlife Intelligence Platform",
    description:
      "공항·UAM 버티포트·풍력·농업·국립공원·스마트시티 6 세그먼트 야생동물 인텔리전스 플랫폼. BSM 2.0 폐루프 OS 기반. 7개 공항 적용 가능.",
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    applicationCategory: "Civil Aviation Safety · Wildlife Intelligence",
    operatingSystem: "Linux (Ubuntu 22.04) · Edge Devices",
    softwareVersion: "1.0",
    url: `${SITE_URL}/products/avix-ai-civil`,
  },
  {
    "@type": "Product",
    additionalType: "https://schema.org/SoftwareApplication",
    "@id": `${SITE_URL}/products/blis-d/#product`,
    name: "BLIS-D",
    alternateName: "BLISTER Drone Anti-Decontamination System",
    description: "고온 건식 제독 드론 통합 시스템.",
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    applicationCategory: "Decontamination",
    operatingSystem: "Linux (Embedded)",
    softwareVersion: "1.0",
    url: `${SITE_URL}/products/blis-d`,
  },
  {
    "@type": "Product",
    additionalType: "https://schema.org/Service",
    "@id": `${SITE_URL}/services/tactical-prompt/#service`,
    name: "TacticalPrompt (TPE)",
    alternateName: "Tactical Prompt Engineering",
    description: "방산 도메인 특화 프롬프트 엔지니어링 컨설팅 서비스.",
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    applicationCategory: "Defense AI Consulting",
    url: `${SITE_URL}/services/tactical-prompt`,
  },
] as const;

/**
 * IP 포트폴리오 — 박무진 대표 1차 자료 기준 (2026-04-26 갱신)
 * 총 17건: 자체 등록특허 4 + 자체 출원특허 9 + 기술이전 특허 3 + 출원 상표 1
 * status: "granted" | "pending" | "transferred-in" | "trademark-pending"
 * jurisdiction: KR | US | CN | etc.
 */
export const PATENTS = [
  // ── 자체 등록 특허 4건 ───────────────────────────────────────
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent",
    "@id": `${SITE_URL}/ip/patents/#kr-2816245`,
    name: "공기조화장치 및 이를 포함하는 도심항공모빌리티",
    identifier: "KR 10-2816245",
    status: "granted",
    jurisdiction: "KR",
    datePublished: "2025-05-29",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent",
    "@id": `${SITE_URL}/ip/patents/#kr-2816307`,
    name: "소방용 도심항공모빌리티",
    identifier: "KR 10-2816307",
    status: "granted",
    jurisdiction: "KR",
    datePublished: "2025-05-29",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent",
    "@id": `${SITE_URL}/ip/patents/#kr-2828256`,
    name: "CCTV를 이용한 경계 및 관측을 통해 공중 부유물의 접근을 제어하는 에어분사 드론",
    identifier: "KR 10-2828256",
    status: "granted",
    jurisdiction: "KR",
    datePublished: "2025-06-27",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent",
    "@id": `${SITE_URL}/ip/patents/#kr-2828254`,
    name: "공중풍력발전 정전기 유도를 통한 오물 풍선 안내 시스템",
    identifier: "KR 10-2828254",
    status: "granted",
    jurisdiction: "KR",
    datePublished: "2025-06-27",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },

  // ── 자체 출원 특허 9건 (CBRN-CADS·BLIS-D·AVIX-AI 등 핵심 IP) ──
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#kr-0055778`,
    name: "GPS 거부 오염환경에서 유·무인 복합(MUM-T) 작전을 위한 자율 CBRN 제독 의사결정 시스템 및 방법",
    identifier: "KR 10-2026-0055778",
    status: "pending",
    jurisdiction: "KR",
    datePublished: "2026-03-27",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#us-pct-568797`,
    name: "블리드에어 기반 오존·플라즈마·자외선·열 분해 하이브리드 오염 물질 건식 제독 장치 및 방법 (PCT/US)",
    identifier: "US 19/568,797",
    status: "pending",
    jurisdiction: "US",
    datePublished: "2026-03-17",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://patents.uspto.gov/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#kr-0046421`,
    name: "블리드에어 기반 오존·플라즈마·자외선·열 분해 하이브리드 오염 물질 건식 제독 장치 및 방법",
    identifier: "KR 10-2026-0046421",
    status: "pending",
    jurisdiction: "KR",
    datePublished: "2026-03-16",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#kr-0019244`,
    name: "드론 관제용 듀얼 모니터링 헤드업 디스플레이",
    identifier: "KR 10-2025-0019244",
    status: "pending",
    jurisdiction: "KR",
    datePublished: "2025-02-14",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#cn-2025112645458`,
    name: "드론 관제용 듀얼 모니터링 헤드업 디스플레이 (PCT/CN)",
    identifier: "CN 2025112645458",
    status: "pending",
    jurisdiction: "CN",
    datePublished: "2025-09-05",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://www.cnipa.gov.cn/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#kr-0080047`,
    name: "의료폐기물 중간처리시설용 가스 멸균 시스템 및 그 운전 방법",
    identifier: "KR 10-2025-0080047",
    status: "pending",
    jurisdiction: "KR",
    datePublished: "2025-06-18",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#kr-0080035`,
    name: "차량을 이용한 의료 폐기물의 멸균 및 분쇄 처리 시스템",
    identifier: "KR 10-2025-0080035",
    status: "pending",
    jurisdiction: "KR",
    datePublished: "2025-06-18",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#kr-0080029`,
    name: "의료기기용 전력 변환을 제어하기 위한 장치 및 방법",
    identifier: "KR 10-2025-0080029",
    status: "pending",
    jurisdiction: "KR",
    datePublished: "2025-06-18",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent_application",
    "@id": `${SITE_URL}/ip/patents/#kr-0113907`,
    name: "화재 연기 제거 공기조화기",
    identifier: "KR 10-2024-0113907",
    status: "pending",
    jurisdiction: "KR",
    datePublished: "2025-03-20",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },

  // ── 기술이전 특허 3건 (대기업 IP 인수) ──────────────────────
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent",
    "@id": `${SITE_URL}/ip/patents/#kr-1875181`,
    name: "멀티터치 디스플레이 장치 및 그 터치 인식 방법",
    identifier: "KR 10-1875181",
    status: "transferred-in",
    jurisdiction: "KR",
    datePublished: "2018-06-29",
    transferredFrom: "SK텔레콤",
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent",
    "@id": `${SITE_URL}/ip/patents/#kr-2485717`,
    name: "공기조화기",
    identifier: "KR 10-2485717",
    status: "transferred-in",
    jurisdiction: "KR",
    datePublished: "2023-01-03",
    transferredFrom: "삼성전자",
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Patent",
    "@id": `${SITE_URL}/ip/patents/#kr-1137476`,
    name: "강재 피복 합성부재 제조방법",
    identifier: "KR 10-1137476",
    status: "transferred-in",
    jurisdiction: "KR",
    datePublished: "2012-04-10",
    transferredFrom: "POSCO",
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://kpat.kipris.or.kr/",
  },

  // ── 출원 상표 1건 ──────────────────────────────────────────
  {
    "@type": "CreativeWork",
    additionalType: "https://en.wikipedia.org/wiki/Trademark",
    "@id": `${SITE_URL}/ip/patents/#tm-0065458`,
    name: "멀티허드 (09류)",
    identifier: "40-2025-0065458",
    status: "trademark-pending",
    jurisdiction: "KR",
    datePublished: "2025-04-18",
    creator: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    url: "https://www.kipris.or.kr/",
  },
] as const;

// IP 포트폴리오 통계 (about.astro 카드 그룹화용)
export const IP_STATS = {
  granted: 4,
  pending: 9,
  transferredIn: 3,
  trademarkPending: 1,
  total: 17,
} as const;

export const SPOKES = [
  { url: "https://tacticalprompt.com/", name: "tacticalprompt.com", relation: "saas-platform" },
  { url: "https://cbrntactical.com/", name: "cbrntactical.com", relation: "spoke-cbrn" },
  { url: "https://github.com/uamkt", name: "github.com/uamkt", relation: "code-spoke" },
] as const;

/**
 * V2.0 — Connected Sites (Web 3) — D-1 of Digital Ecosystem 섹션
 * Removed: yongyumee.com, godeok.yongyumee.com (V2.0 §H-3 비핵심 자산)
 * Added: tacticalprompt.com (★ 본사 핵심 SaaS)
 */
export const CONNECTED_SITES = [
  {
    name: "UAMKoreaTech",
    url: "https://uamkt.com/",
    type: "Corporate",
    note: "본 리뉴얼 대상 플래그십 포털",
    status: "active",
  },
  {
    name: "Tactical Prompt",
    url: "https://tacticalprompt.com/",
    type: "SaaS Platform",
    note: "★ 본사 핵심 자산 — 전술 프롬프트 엔지니어링 플랫폼 (TPE-001~006 6단계 패키지)",
    tagline: "방산·보안 분야 LLM 프롬프트 엔지니어링",
    status: "released",
    highlight: true,
  },
  {
    name: "CBRN Tactical",
    url: "https://cbrntactical.com/",
    type: "Knowledge Hub",
    note: "CBRN 전술 정보 + 전술형 블로그 포털",
    status: "active",
  },
] as const;

/**
 * V2.0 — Hero KPI 4종 (변경: OODA 어휘 제거, 사회문제 통계로 대체)
 */
export const HERO_KPI = [
  { value: "17", unit: "IP", label: "특허·출원·이전·상표 합계" },
  { value: "617", unit: "건/10년", label: "조류충돌 사회문제 (국토부·공항공사 통계 2014–2024)" },
  { value: "19/19", unit: "Lattice 실증", label: "RKSI 시나리오 PoC (커밋 fbcb327)" },
  { value: "2/14", unit: "Tracks/Programs", label: "Defense 8 + Civil 6" },
] as const;

/**
 * V2.0 — Recent Milestones 6건 (Civil 우선 + Defense 병행)
 */
export const MILESTONES = [
  {
    date: "2026-04-26",
    track: "Civil",
    title: "BSM 2.0 폐루프 OS 아키텍처 통합",
    description: "지능형 CCTV·Habitat·자산 오케스트레이션·KPI 폐루프 4 모듈 명시. OGC SensorThings v1.1 표준 기반.",
  },
  {
    date: "2026-04-20",
    track: "Defense",
    title: "Anduril Lattice 19/19 HTTP 200 실증 완료",
    description: "인천테크노파크 공고 제2026-177호 (RKSI 시나리오) 커밋 fbcb327. 글로벌 항공안전 플랫폼 도메인 공백 자체 PoC 빌드업.",
  },
  {
    date: "2026-04-18",
    track: "Civil",
    title: "BOX O3 AG (Switzerland) Buy-back Agreement 체결",
    description: "오존 기반 멸균 시스템의 BLIS-D 통합 — Development AND Purchase Agreement 완료.",
  },
  {
    date: "2026-04-17",
    track: "Defense",
    title: "Anduril Developer Zone V5.1 번들 발송",
    description: "BLIS-D · CBRN-CADS · AVIX-AI V3 통합 번들. Partner Track 응답 대기 중 (~2026-05-08).",
  },
  {
    date: "2026-04",
    track: "Dual-Use",
    title: "AVIX-AI V5.1 Animal/HAE 카탈로그 진입",
    description: "Anduril Lattice Dashboard에 Animal 플랫폼 + HAE 고도 필드 공식 편입.",
  },
  {
    date: "2026-04",
    track: "Civil",
    title: "AbriIndex Vol.1 출간 (Bird Strike Trilogy 파운데이션)",
    description: "공항 조류 위험 인덱스 방법론 EN+KR. Amazon Kindle.",
  },
] as const;

/**
 * V2.0 — Strategic Partners 5+1사 (정부지원사업 명칭 일체 제거)
 */
export const PARTNERS = [
  {
    tier: 1,
    name: "BOX O3 AG",
    country: "Switzerland",
    stage: "Contract Signed",
    badge: "Buy-back Agreement Confirmed",
    badgeColor: "gold",
    technology: "오존 기반 멸균 시스템 (BLIS-D 통합)",
    document: "Development AND Purchase Agreement",
  },
  {
    tier: 1,
    name: "VistaLink",
    country: "—",
    stage: "Contract Signed",
    badge: "Technical Cooperation MOU",
    badgeColor: "gold",
    technology: "오존 기술 통합 협력 (with BOX O3)",
    document: "Technical Cooperation MOU",
  },
  {
    tier: 2,
    name: "Anduril Industries",
    country: "USA",
    stage: "Lattice Partner Track",
    badge: "V5.1 Bundle Submitted",
    badgeColor: "blue",
    technology: "Lattice SDK 통합 (BLIS-D · CBRN-CADS · AVIX-AI V3)",
    document: "Developer Zone V5.1 번들 발송 완료 · 응답 대기",
  },
  {
    tier: 3,
    name: "Tesla",
    country: "USA",
    stage: "Active Discussion",
    badge: "Consortium Executive Summary",
    badgeColor: "gray",
    technology: "Dual-use 항공우주 통합 (BOX O3 + Taktys 컨소시엄)",
    document: "Executive Summary 송부 완료",
  },
  {
    tier: 3,
    name: "Taktys",
    country: "EU",
    stage: "Active Discussion",
    badge: "Tesla Consortium Co-Member",
    badgeColor: "gray",
    technology: "항공우주 통합 솔루션",
    document: "공동 멤버 합류 완료",
  },
  {
    tier: 3,
    name: "Genasys",
    country: "USA",
    stage: "Active Discussion",
    badge: "AVIX-AI Audio Asset Discussion",
    badgeColor: "gray",
    technology: "음향 자산 오케스트레이션",
    document: "협력 미팅 진행",
  },
] as const;

/**
 * V2.0 — Apps 카탈로그 6종 (Released 2 + Beta 1 + Dev 2 + Planning 1)
 */
/**
 * V2.1 검증판 — Apple App Store Connect 등록 앱 8종
 * 출처: App Store Connect 실측 (2026-04-26 16:30 KST · UAM Korea Tech Co., Ltd.)
 *
 * 상태 분류 (외부 노출용 라벨)
 * - Available  : 배포 준비됨 (5종) — 골드 배지
 * - Coming Soon: 제출 준비 중 (1종) — 회색 배지
 * - In Review  : 심사 중 (2종) — 청색 배지 ※ "심사 미통과"는 외부 노출하지 않음
 *
 * V2.0 대비 변경
 * - tacticalPrompt → TacticalPrompt (In Review)
 * - CBRN-UAM → K-UAM (iOS 1.1) 명칭 확정
 * - CBRN Strike (게임) 제거 — App Store 외 채널
 * - AVIX Companion → AVIX-AI (Available)
 * - Wildlife Watch → Bird Strike (In Review)
 * - EcoSteward 제거 — 별도 채널 또는 PWA 검토 (V2.2)
 * - 신규 추가: CBRN Tactical, CBRN-CADS, K-UAM, 근접항공제독지원 CADS
 */
export const APPS = [
  {
    name: "CBRN Tactical",
    version: "iOS 1.0",
    status: "Available",
    track: "Defense",
    role: "CBRN 전술 정보 — Knowledge Hub 앱",
    eta: null,
  },
  {
    name: "AVIX-AI",
    version: "iOS 1.0",
    status: "Available",
    track: "Civil",
    role: "조류충돌 탐지 AI — BSM 2.0 폐루프 OS 모바일 인터페이스",
    eta: null,
  },
  {
    name: "BLIS-D",
    version: "iOS 1.0",
    status: "Available",
    track: "Defense",
    role: "BLIS-D 운용자 컴패니언 — 4-Mode 하이브리드 제독 모니터링",
    eta: null,
  },
  {
    name: "CBRN-CADS",
    version: "iOS 1.0",
    status: "Available",
    track: "Defense",
    role: "근접항공제독지원 시스템 — Lattice 연동 알림",
    eta: null,
  },
  {
    name: "K-UAM",
    version: "iOS 1.1",
    status: "Available",
    track: "Civil",
    role: "한국형 UAM 운용 절차 + 버티포트 안전 가이드",
    eta: null,
  },
  {
    name: "근접항공제독지원 CADS",
    version: "iOS 1.0",
    status: "Coming Soon",
    track: "Defense",
    role: "CBRN-CADS 한국 시장 한글 별칭 버전",
    eta: "2026-Q2",
  },
  {
    name: "TacticalPrompt",
    version: "iOS 1.0",
    status: "In Review",
    track: "Dual",
    role: "전술 프롬프트 라이브러리 — tacticalprompt.com 연동",
    eta: null,
  },
  {
    name: "Bird Strike",
    version: "iOS 1.0",
    status: "In Review",
    track: "Civil",
    role: "조류충돌 위험 모니터링 — Bird Strike Trilogy 도서 컴패니언",
    eta: null,
  },
] as const;

/**
 * V2.1 KDP 검증판 — Amazon Kindle Direct Publishing 출간 도서 10종 (모두 Live)
 *
 * 출처: KDP Bookshelf 실측 (2026-04-26) — Author Park Moojin
 * ASIN 19개 검증 완료 → Schema.org Book JSON-LD + Amazon 직링크 즉시 적용 가능
 *
 * 시리즈 분류
 * - ASERI 3권 (Aerospace ESG Rating Initiative)
 * - Bird Strike Trilogy + AbriIndex 4권
 * - BLIS-D Engineering 시리즈 3권
 *
 * 주의: 저자명 4종 혼재 (Moojin Park / UAM Korea Tech / UAM KoreaTech Research Institute / MOOJIN PARK)
 *      → V2.2에서 KDP 측 일괄 통일 예정. 현재는 KDP 표기 그대로 보존.
 */
export const BOOKS = [
  // ── ASERI 시리즈 (3권) ─────────────────────────────────
  {
    "@type": "Book",
    series: "ASERI",
    volume: "Vol.2",
    title: "Aerospace Industry ESG Evaluation Methodology",
    subtitle: "Building a Framework for Aerospace ESG Rating",
    author: "Moojin Park",
    asinEbook: "B0GJTJKBGX",
    asinPaperback: null,
    priceEbook: 9.99,
    pricePaperback: null,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-08",
  },
  {
    "@type": "Book",
    series: "ASERI",
    volume: "Vol.3",
    title: "Building the ASERI ESG Evaluation Portal",
    subtitle: "Designing the Digital ESG Assessment Platform for Aerospace",
    author: "Moojin Park",
    asinEbook: "B0FXV9J4QN",
    asinPaperback: "B0GWJLSGX7",
    priceEbook: 9.99,
    pricePaperback: 19.99,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-08",
  },
  {
    "@type": "Book",
    series: "ASERI",
    volume: "별권",
    title: "The Tragedy of the Space Commons",
    subtitle: "ESG Accountability Economics in the Aerospace Industry",
    author: "Moojin Park",
    asinEbook: "B0G3KCX7XW",
    asinPaperback: "B0GW9713J3",
    priceEbook: 9.99,
    pricePaperback: 19.99,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-06",
  },
  // ── Bird Strike Trilogy + AbriIndex (4권) ────────────────
  {
    "@type": "Book",
    series: "Bird Strike Trilogy",
    volume: "Vol.1",
    title: "The AbriIndex Era",
    subtitle: "The Future of Quantifying Bird Strike Risk — Threat Analysis and Evaluation Framework",
    author: "Moojin Park",
    asinEbook: "B0FL29FQQM",
    asinPaperback: null,
    priceEbook: 9.99,
    pricePaperback: null,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04",
  },
  {
    "@type": "Book",
    series: "Bird Strike Trilogy",
    volume: "Vol.2",
    title: "Kill Chain for the Sky",
    subtitle: "Integrated Kill Chain Architecture for Airfield Bird Strike Defense",
    author: "UAM Korea Tech",
    asinEbook: "B0GGYF77B9",
    asinPaperback: null,
    priceEbook: 9.99,
    pricePaperback: null,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04",
  },
  {
    "@type": "Book",
    series: "Bird Strike Trilogy",
    volume: "Vol.3",
    title: "Vertiport Zero",
    subtitle: "Bird Strike Zero Design for Urban Air Mobility Vertiports",
    author: "UAM Korea Tech",
    asinEbook: "B0F2ZKFQRN",
    asinPaperback: "B0GX55FK1R",
    priceEbook: 9.99,
    pricePaperback: 9.99,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-08",
  },
  {
    "@type": "Book",
    series: "Standalone",
    volume: "—",
    title: "The Architecture of Command",
    subtitle: "Decoding Tactical Intelligence Through AI System Design",
    author: "MOOJIN PARK",
    asinEbook: "B0GWT9SZ4C",
    asinPaperback: "B0GWTC15L3",
    priceEbook: 9.99,
    pricePaperback: 19.99,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-11",
  },
  // ── BLIS-D Engineering 시리즈 (3권) ──────────────────────
  {
    "@type": "Book",
    series: "BLIS-D Engineering",
    volume: "Vol.1",
    title: "BLIS-D — Engineering the Future of Airborne CBRN Decontamination",
    subtitle: "개념권",
    author: "Moojin Park",
    asinEbook: "B0FQ1X1TD3",
    asinPaperback: "B0GWD8GYDF",
    priceEbook: 29.99,
    pricePaperback: 34.99,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-07",
  },
  {
    "@type": "Book",
    series: "BLIS-D Engineering",
    volume: "Vol.2",
    title: "BLIS-D Vol. 2 — Threat Detection and Operational Response",
    subtitle: "Advanced Countermeasures for Bird-Aircraft Strike Incidents",
    author: "UAM KoreaTech Research Institute",
    asinEbook: "B0GWVQYJ17",
    asinPaperback: "B0GXRZ5RTL",
    priceEbook: 9.99,
    pricePaperback: 34.99,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-19",
  },
  {
    "@type": "Book",
    series: "BLIS-D Engineering",
    volume: "Vol.3",
    title: "BLIS-D Vol. 3 — Integration and Future Deployment",
    subtitle: "UAM Ecosystem Integration and Next-Generation Safety Architecture",
    author: "UAM KoreaTech Research Institute",
    // V2.1 실측: eBook B0GWWNV9W4 (BLOCKED — Amazon 콘텐츠 검토 회신 대기) · PB B0GX296XQT (Live)
    asinEbook: null,
    asinPaperback: "B0GX296XQT",
    priceEbook: null,
    pricePaperback: 34.99,
    languages: ["EN"],
    status: "published",
    publishedAt: "2026-04-13",
    note: "eBook 차단 해결 중 (Amazon 콘텐츠 검토)",
  },
] as const;

/**
 * V2.0 — BSM 2.0 폐루프 OS · 5단 순환 구조 + 4 핵심 모듈
 */
export const BSM_LOOP_STAGES = [
  { stage: "IN", description: "CCTV·열화상·음향·Habitat·기상·ATC 다중 센서 데이터 수집" },
  { stage: "PROCESS", description: "AI 객체 인식·이동 예측·위험도 산정" },
  { stage: "OUT", description: "관제·현장·모바일 다채널 알림 발령" },
  { stage: "SOLUTION", description: "음향 스피커 × 에어분사 드론 동시 운영 (충격파 2배) 자산 오케스트레이션" },
  { stage: "KPI", description: "조치 결과·효과·비용 측정 → IN 단계로 폐루프 피드백 → 모델 재학습" },
] as const;

export const BSM_MODULES = [
  {
    id: "M1",
    name: "지능형 CCTV 조류 객체 인식",
    description: "안면인식·인원 카운팅 기술의 조류 객체 역응용. Re-ID 트래킹 포함.",
  },
  {
    id: "M2",
    name: "Airfield Habitat Profile Engine",
    description: "공항별 LULC·수목·수계·먹이 DB + 시계열 조류 방문 패턴.",
  },
  {
    id: "M3",
    name: "제압자산 오케스트레이션 라이브러리",
    description: "음향 × 에어분사 × 신호탄 자산 조합·타이밍 직교 설계.",
  },
  {
    id: "M4",
    name: "KPI 폐루프 학습",
    description: "조치 결과 데이터 자동 수집 → AI·오케스트레이션 가중치 강화학습.",
  },
] as const;

/**
 * V2.3 — 5장 서사 카피 (Hero + Story Card 4종)
 * 출처: 박무진 대표 직접 구술 (2026-04-26 저녁) + Claude 카피·구조화
 * 모든 슬로건은 10~15자 한글 기준
 */
export const NARRATIVE_CHAPTERS = [
  {
    id: "hero",
    chapter: 1,
    headline: "조류충돌 솔루션 운영기업",
    subheadline: null,
    bullets: [
      "Anduril Lattice가 인정한 공백 발견자",
      "UAM 버티포트 \"버드스트라이크\" 녹색기술 적용",
    ],
  },
  {
    id: "story-1",
    chapter: 2,
    headline: "블리드에어 기반 사업모델",
    subheadline: "조류 서식지 제거 + CBRN-CADS",
    bullets: [
      "고온건식제독 무인헬기 플랫폼 개발 구축 중",
      "사업모델 1: 조류 서식지 제거 (Civil 항공안전)",
      "사업모델 2: 근접항공제독지원 CBRN-CADS (Defense)",
    ],
  },
  {
    id: "story-2",
    chapter: 3,
    headline: "스위스 40년 기술",
    subheadline: "BOXO3 가스멸균, 하이브리드 챔버",
    bullets: [
      "스위스 BOXO3 가스멸균 원천 기술 이전",
      "모빌리티 탑재 가스멸균챔버 — 공동R&D 진행",
      "신제품 개발 출시 LOI 및 BUY BACK 체결 완료",
    ],
  },
  {
    id: "story-3",
    chapter: 4,
    headline: "AI로 완성하는 두 사업",
    subheadline: "저작권 등록 완료 라인업",
    bullets: [
      "AI 기반 소프트웨어 저작권 등록 프로그램 라인업 보유",
      "조류충돌: AVIX-AI 시리즈 (어플리케이션 + 소프트웨어)",
      "근접항공제독지원: CBRN 지휘결심 AI 프로그램",
    ],
  },
  {
    id: "story-4",
    chapter: 5,
    headline: "전쟁사가 설계한 AI",
    subheadline: "TP-IQ · 전술 판단의 코드화",
    bullets: [
      "자체 개발 전술지능지수(Tactical Prompt Intelligence Quotient)",
      "인공지능 의사결정 지원 모델 — 데이터 학습 이전에 \"전략적 구조 설계\" 선 반영",
      "타 기업에서 볼 수 없는 독창성: D/B 수용 학습 단계 이전의 전략적 판단 지능 코드화",
    ],
  },
] as const;

/**
 * V2.3 — 3 Pillar 정보 아키텍처
 * V2.0의 4 제품 카드를 3 Pillar 카드로 통합 — 메시지 분산 방지
 */
export const PILLARS = [
  {
    id: "pillar-1",
    slogan: "조류와 항공의 공존",
    headline: "AVIX · 폐루프로 지키다",
    summary: "국내 최초 UAM 버드스트라이크 솔루션. AI 기반 폐루프 OS로 공항·버티포트 위험 자동 차단.",
    href: "/avix",
    accent: "var(--color-teal)",
    accentSoft: "var(--color-teal-soft)",
    track: "Civil",
    cards: [
      { name: "AVIX-AI V3 (Defense)", desc: "4-way Fusion · Lattice 통합 · BSM 2.0 폐루프 OS", href: "/products/avix-ai" },
      { name: "AVIX-AI Civil", desc: "6 Segments · 7 Airports · UAM 버티포트 적용", href: "/products/avix-ai-civil" },
      { name: "BSM 2.0 OS", desc: "IN→PROCESS→OUT→SOLUTION→KPI 폐루프 + 4 모듈", href: "/products/avix-ai-civil#bsm" },
      { name: "조류충돌 백서", desc: "AVIX 조류행동서식 실험설계서 + 통합운용체계 백서", href: "/articles/category/papers" },
      { name: "Bird Strike Trilogy (Amazon)", desc: "AbriIndex Vol.1 + Kill Chain + Vertiport Zero (3권)", href: "/books/bird-strike-trilogy" },
    ],
  },
  {
    id: "pillar-2",
    slogan: "폐열로 지키는 전장",
    headline: "블리드에어, 두 미래를 연다",
    summary: "블리드에어 + 스위스 BOXO3 가스멸균 융합. 무인헬기 플랫폼 + CBRN 지휘결심 AI.",
    href: "/cbrn-cads",
    accent: "var(--color-gold)",
    accentSoft: "var(--color-gold-soft)",
    track: "Defense",
    cards: [
      { name: "BLIS-D Platform", desc: "블리드에어 기반 4-Mode 하이브리드 무인헬기 플랫폼", href: "/products/blis-d" },
      { name: "CBRN-CADS 시스템", desc: "NATO JWARN 등가물 · OODA 33× · STANAG 2103 호환", href: "/products/cbrn-cads" },
      { name: "BOXO3 Hybrid Chamber", desc: "스위스 40년 가스멸균 원천기술 + 모빌리티 탑재", href: "/cbrn-cads#boxo3" },
      { name: "CBRN 지휘결심 AI", desc: "Lattice 19/19 PoC · 자율 의사결정 프로그램", href: "/cbrn-cads#decision-ai" },
      { name: "BLIS-D Engineering (Amazon)", desc: "BLIS-D Vol.1 + Vol.2 + Vol.3 (3권)", href: "/books/blis-d-engineering" },
    ],
  },
  {
    id: "pillar-3",
    slogan: "전쟁사가 설계한 AI",
    headline: "TP-IQ · 판단의 코드화",
    summary: "전술지능지수. 데이터 학습 이전 단계의 전략적 구조 설계 코드화. 9 단독 특허 기반.",
    href: "/tp-iq",
    accent: "var(--color-navy)",
    accentSoft: "#e8eef5",
    track: "Dual",
    cards: [
      { name: "TP-IQ 평가 모듈", desc: "전술지능지수 6 평가 도메인 — 박무진 대표 자체 개발", href: "/tp-iq#evaluation" },
      { name: "박무진 대표 프로필", desc: "전쟁사 + 심리학 전공 · 방산기술특허 9건 단독 1저자", href: "/about" },
      { name: "독창성 — 전략적 구조 선반영", desc: "데이터 학습 이전 단계 코드화 (타 기업 차별점)", href: "/tp-iq#originality" },
      { name: "tacticalprompt.com 연동", desc: "전술 프롬프트 엔지니어링 SaaS — TPE-001~006", href: "/services/tactical-prompt" },
      { name: "ASERI + Architecture (Amazon)", desc: "4권 (ESG 평가 + 전술 AI 시스템 디자인)", href: "/books/aseri" },
    ],
  },
] as const;

/**
 * V2.3 §D-1 — Strategic Partners 6사 → 2사 응축
 * Anduril (기술 제안) + BOXO3 (LOI) 만 진열. 메시지 분산 방지.
 */
export const PARTNERS_V23 = [
  {
    name: "Anduril Industries",
    country: "USA",
    badge: "Lattice Partner Track — V5.1 Bundle Submitted",
    relation: "기술 제안 (Lattice Partner Track)",
    note: "AVIX-AI · CBRN-CADS · BLIS-D 19/19 HTTP 200 PoC · Developer Zone V5.1 번들 발송 완료",
    accent: "var(--color-gold)",
  },
  {
    name: "BOX O3 AG",
    country: "Switzerland",
    badge: "LOI · Development AND Purchase Agreement",
    relation: "원천 기술 이전 + 구매 협약",
    note: "40년 전통 스위스 BOXO3 가스멸균 시설 원천기술 → 하이브리드 챔버 모빌리티 탑재",
    accent: "var(--color-teal)",
  },
] as const;

/**
 * V2.3 §C-4 — Section Slogans (광고 카피, 10~15자)
 * (사용자 수정: Partners "글로벌 기업과의 기술개발", Digital "유에이엠코리아텍 고유 IP")
 */
export const SECTION_SLOGANS = {
  partners: { title: "글로벌 기업과의 기술개발", caption: "Strategic Partners" },
  digital: { title: "유에이엠코리아텍 고유 IP", caption: "Digital Portfolio" },
  articles: { title: "5분 인사이트, 매주 발행", caption: "Recent Articles" },
  contact: { title: "대표가 직접 응답합니다", caption: "Civil + Defense Dual Routing" },
} as const;

export const FAQS_ABOUT = [
  {
    question: "What is UAM KoreaTech?",
    answer:
      "UAM KoreaTech (유에이엠코리아텍 주식회사) is a South Korean defense technology company founded on May 27, 2024 by CEO Park Moojin. With 7 staff members, the company specializes in CBRN (Chemical, Biological, Radiological, Nuclear) AI decision support systems. Its IP portfolio comprises 17 assets: 4 granted Korean patents, 9 pending applications (7 KR + 1 US PCT + 1 CN PCT including KR 10-2026-0055778 and US 19/568,797), 3 patents transferred-in from SK Telecom, Samsung Electronics, and POSCO, and 1 pending trademark. The company develops CBRN-CADS, the only Korean equivalent of NATO JWARN.",
  },
  {
    question: "What is CBRN-CADS?",
    answer:
      "CBRN-CADS (Chemical Biological Radiological Nuclear Combat Decision Support) is the only Korean equivalent of NATO JWARN, providing AI-driven decision support for battalion-level CBRN operations. It compresses the OODA Loop by 33x through schema-grounded tactical prompts.",
  },
  {
    question: "Who is Park Moojin?",
    answer:
      "Park Moojin (박무진) is the CEO and Founder of UAM KoreaTech. Educated at the Korea Army Academy at Yeongcheon (military history, B.A.) and Sogang University (psychology, B.A.), and currently pursuing an ESG Economics master's degree at Sogang Graduate School of Economics. He oversees vertiport licensing, green technology business, and CBRN AI doctrine architecture.",
  },
  {
    question: "Has UAM KoreaTech demonstrated NATO interoperability?",
    answer:
      "Yes. UAM KoreaTech successfully demonstrated 19/19 HTTP 200 entity API submissions on the Anduril Lattice SDK (Incheon Technopark notice 2026-177, committed 2026-04-20), validating STANAG 2103 compatibility for chemical hazard control areas and animal-class entity tracking.",
  },
  {
    question: "What is TacticalPrompt?",
    answer:
      "TacticalPrompt (TPE) is UAM KoreaTech's defense-domain prompt engineering service, applying tactical doctrine to AI decision systems. TPE-001~006 reference implementations are scheduled for public release on github.com/uamkt under Apache 2.0.",
  },
] as const;
