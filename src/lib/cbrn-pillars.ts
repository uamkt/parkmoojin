/**
 * CBRN Syndicate Pillar Definitions
 *
 * V2.4 (2026-05-18) — 박 대표 사업 전략 키워드 통합:
 *   E: UAM Korea Market (한국 UAM 시장 + 섬에어·본에어·인천 UAM 버티포트 사전 노출)
 *   F: Aerospace (전세계 항공우주 동향)
 *   G: Defense (전세계 방산 동향)
 *
 * 7 pillars × 2 daily slots → 더 다양한 콘텐츠 rotation
 * Topic selection: dayOfYear % topics.length within selected pillar
 */

export type PillarId = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export interface PillarTopic {
  topic: string;
  angle: string;
  keyEntities: string[];
}

export interface Pillar {
  id: PillarId;
  name: string;
  focus: string;
  topics: PillarTopic[];
}

export const PILLARS: Record<PillarId, Pillar> = {
  A: {
    id: "A",
    name: "Historical CBRN Anchors",
    focus: "Real CBRN incidents framed as dual-use lessons for the K-defense market",
    topics: [
      {
        topic: "Tokyo Subway Sarin Attack 1995",
        angle: "Aum Shinrikyo's chemical attack and what it teaches about urban CBRN response gaps",
        keyEntities: ["Aum Shinrikyo", "Sarin", "Tokyo", "Kasumigaseki", "JSDF"],
      },
      {
        topic: "Salisbury Novichok Incident 2018",
        angle: "GRU's nerve agent strike and NATO's wet-decontamination doctrine failure in urban terrain",
        keyEntities: ["Sergei Skripal", "Novichok A-234", "OPCW", "MI6", "Salisbury"],
      },
      {
        topic: "Halabja Chemical Attack 1988",
        angle: "Saddam-era CWA strike against Kurdish civilians and the precedent for civil-targeting CBRN deterrence",
        keyEntities: ["Halabja", "Mustard gas", "Sarin", "Kurdistan", "Iran-Iraq War"],
      },
      {
        topic: "Goiania Radiological Accident 1987",
        angle: "Cesium-137 source exposure in Brazil and the dual-use case for civilian radiation detection",
        keyEntities: ["Cs-137", "IAEA", "Goiania", "Orphan source", "Radiological dispersal"],
      },
      {
        topic: "Anthrax Letters Bioterrorism 2001",
        angle: "Post-9/11 anthrax attacks and the gap in biological agent stand-off detection",
        keyEntities: ["Bacillus anthracis", "FBI Amerithrax", "USPS", "BioWatch", "Bruce Ivins"],
      },
      {
        topic: "Bhopal Industrial Disaster 1984",
        angle: "Methyl isocyanate release at Union Carbide as the largest civilian chemical mass-casualty event",
        keyEntities: ["Bhopal", "Methyl isocyanate", "Union Carbide", "TLV", "Mass casualty"],
      },
      {
        topic: "Three Mile Island Partial Meltdown 1979",
        angle: "TMI-2 incident as a study in radiological emergency response and public-trust collapse",
        keyEntities: ["TMI-2", "NRC", "Iodine-131", "Containment", "INES Level 5"],
      },
      {
        topic: "Aum Shinrikyo Matsumoto Sarin 1994",
        angle: "The forgotten precursor attack 9 months before Tokyo subway and the intelligence failure",
        keyEntities: ["Matsumoto", "Aum Shinrikyo", "Sarin", "Japanese police", "Cult intelligence"],
      },
    ],
  },

  B: {
    id: "B",
    name: "CBRN-CADS Detection Technology",
    focus: "Sensor stack, AI classification, and field deployment of UAM KoreaTech's CBRN-CADS platform",
    topics: [
      {
        topic: "Ion Mobility Spectrometry vs Raman for CWA Field Detection",
        angle: "Comparative analysis of IMS and Raman spectroscopy in mobile CBRN scenarios",
        keyEntities: ["IMS", "Raman", "FT-IR", "CWA", "JCAD", "M-22"],
      },
      {
        topic: "Edge AI for Real-Time CBRN Classification",
        angle: "On-device inference reducing CBRN-CADS false-positive rates from 12% to under 2%",
        keyEntities: ["TensorRT", "Edge inference", "TPU", "False positive", "ROC curve"],
      },
      {
        topic: "Drone-Based Stand-off CBRN Detection",
        angle: "UAV-mounted sensor arrays vs human reconnaissance teams for hot-zone characterization",
        keyEntities: ["UAV", "Stand-off", "LIDAR", "Hot zone", "Reconnaissance"],
      },
      {
        topic: "Wearable CBRN Sensors for First Responders",
        angle: "Civilian fire-EMS dosimetry and chemical badge integration with municipal command",
        keyEntities: ["Dosimeter", "Wearable sensor", "EMS", "Bluetooth Low Energy", "Municipal C2"],
      },
      {
        topic: "Bayesian Threat Fusion in Multi-Sensor CBRN Networks",
        angle: "Combining IMS, Raman, gamma spectroscopy, and biological PCR for sub-second threat consensus",
        keyEntities: ["Bayesian fusion", "Multi-modal sensor", "Gamma spectroscopy", "qPCR"],
      },
      {
        topic: "5G-Enabled CBRN Mesh Networks for Mass Events",
        angle: "Distributed sensor mesh deployed at stadiums, airports, and political conventions",
        keyEntities: ["5G mesh", "Mass event security", "URLLC", "Edge computing"],
      },
    ],
  },

  C: {
    id: "C",
    name: "BLIS-D Decontamination & Lattice Integration",
    focus: "Bleed-air dry decontamination, NATO STANAG compliance, and Anduril Lattice interoperability",
    topics: [
      {
        topic: "BLIS-D vs Wet Decon: 30:1 Efficiency in Urban Scenarios",
        angle: "Quantitative comparison: water consumption, time-to-clear, and infrastructure footprint",
        keyEntities: ["BLIS-D", "Wet decontamination", "DS2", "STB", "Urban CBRN"],
      },
      {
        topic: "NATO STANAG 2103 Compliance Roadmap for Korean Industry",
        angle: "Technical bridge between K-defense product certification and NATO interoperability requirements",
        keyEntities: ["STANAG 2103", "NATO certification", "AAP-21", "Interoperability"],
      },
      {
        topic: "Anduril Lattice Entity Schema for CBRN Hazmat Sources",
        angle: "Publishing CBRN-CADS detections as Lattice Entities with platform_type:Animal+ and Hazmat extensions",
        keyEntities: ["Lattice", "Anduril", "Entity schema", "AbriIndex", "TEMPLATE_TRACK"],
      },
      {
        topic: "KAS Part 21/23 for Civil Aircraft Decon Equipment",
        angle: "Korean Airworthiness Standards alignment for BLIS-D civil aviation deployment",
        keyEntities: ["KAS Part 21", "KAS Part 23", "MOLIT", "Type certification"],
      },
      {
        topic: "Mass Casualty Decon: BLIS-D Throughput at 1000+ Casualties",
        angle: "Real-world scenario modeling for stadium attack response with BLIS-D mobile units",
        keyEntities: ["Mass casualty", "Triage", "Decon throughput", "Mobile decon"],
      },
      {
        topic: "Bleed-Air Engineering: From Aircraft ECS to CBRN Decon",
        angle: "How aircraft environmental control systems' bleed-air principles transfer to chemical neutralization",
        keyEntities: ["Bleed air", "Environmental control system", "Pressure ratio", "Heat exchanger"],
      },
    ],
  },

  D: {
    id: "D",
    name: "Tactical Prompt & Decision Intelligence",
    focus: "TIP-12 framework, PPF (Persona Profiling Framework), and AI-augmented CBRN decision-making",
    topics: [
      {
        topic: "Sergei Skripal as Risk-Blind Persona: TIP-12 Case Study",
        angle: "Applying TIP-12's 16-character framework to historical CBRN target's blind spots",
        keyEntities: ["TIP-12", "Risk-blind", "PPF", "Persona Profiling", "Skripal"],
      },
      {
        topic: "PIQ (Prompt Intelligence Quotient) for CBRN Operators",
        angle: "Measuring AI-collaboration capability in CBRN response teams - 5-minute self-diagnostic",
        keyEntities: ["PIQ", "Prompt engineering", "Stanford Symbolic Systems", "Self-assessment"],
      },
      {
        topic: "Cognitive Load in CBRN Officer Decision-Making",
        angle: "Studies on 30-second decision windows in chemical alarms and AI co-pilot interventions",
        keyEntities: ["Cognitive load", "Decision window", "AI co-pilot", "C2 system"],
      },
      {
        topic: "TIP-12 16 Characters Mapped to CBRN Roles",
        angle: "From Sun Tzu to Hannibal: matching commander archetypes to CBRN crisis roles",
        keyEntities: ["TIP-12", "16 characters", "Sun Tzu", "Hannibal", "Yi Sun-sin"],
      },
      {
        topic: "AI-Augmented NATO RFI Response: Tactical Prompting at Scale",
        angle: "Using structured prompts to accelerate Request-For-Information cycles in multinational CBRN ops",
        keyEntities: ["NATO RFI", "Tactical prompting", "Structured query", "Multinational ops"],
      },
      {
        topic: "Aum Shinrikyo Decision Pattern Analysis via Persona Framework",
        angle: "Reverse-engineering cult command structure with TIP-12 Visionary-Aggressor-Operator typology",
        keyEntities: ["Aum Shinrikyo", "Asahara", "PPF", "Cult command structure", "TIP-12"],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────
  // V2.4 NEW PILLARS — 박 대표 사업 전략 키워드 (2026-05-18)
  // ───────────────────────────────────────────────────────────────────

  E: {
    id: "E",
    name: "Korea UAM Market & Strategic Partners",
    focus: "한국 UAM 시장 근황 + 섬에어·본에어·인천국제공항 UAM 버티포트 사전 노출 (협업·제휴 기반)",
    topics: [
      {
        topic: "인천국제공항 UAM 버티포트 2027-2028 준공 로드맵",
        angle: "한국 최초 국제공항 직결 UAM hub — RKSI 환승객 도심 직접 연결 모델과 인프라 준비 단계",
        keyEntities: ["인천국제공항", "RKSI", "UAM 버티포트", "MOLIT", "K-UAM Grand Challenge"],
      },
      {
        topic: "섬에어 김포-사천 프로펠러 노선 2026 런칭",
        angle: "단거리 도서·지방 항공의 새 모델 — 향후 eVTOL 전환 시 검증된 운항 기준점",
        keyEntities: ["섬에어", "김포공항", "사천공항", "프로펠러 항공", "지역 항공"],
      },
      {
        topic: "본에어 잠실 ↔ 인천국제공항 헬기 노선 운영 사례",
        angle: "도심 ↔ 공항 헬기 운항의 검증된 모델 — UAM 시대로의 자연스러운 transition 케이스",
        keyEntities: ["본에어", "잠실", "인천국제공항", "헬기 운항", "도심 모빌리티"],
      },
      {
        topic: "K-UAM Grand Challenge 도시 테스팅 단계 진입",
        angle: "비도시 phase 1 → 도시 phase 2 진입 — KAS Part 21·23 인증 데이터셋 누적",
        keyEntities: ["K-UAM Grand Challenge", "KAS Part 21", "KAS Part 23", "도시 테스팅", "MOLIT"],
      },
      {
        topic: "Hyundai Supernal × KAI MoU — 자동차 양산과 항공우주의 결합",
        angle: "Supernal-KAI 2028 상용 운항 목표 — eVTOL 양산 단가 글로벌 우위 가능성",
        keyEntities: ["Hyundai Supernal", "KAI", "AAM", "eVTOL 양산", "Type Certification"],
      },
      {
        topic: "Joby × K-UAM Dream Team — 4축 통합 컨소시엄",
        angle: "Joby·SK텔레콤·한화시스템·TMAP·KAC 5각 컨소시엄 — 한국형 reference architecture",
        keyEntities: ["Joby Aviation", "SK텔레콤", "한화시스템", "TMAP", "한국공항공사"],
      },
      {
        topic: "여의도 Floating Hotel + UAM Hub — Korean Air 종합 시스템",
        angle: "한강변 floating hotel + UAM hub 인프라 — 도시 hospitality × UAM 융합 모델 (2028 완공)",
        keyEntities: ["Korean Air", "여의도", "Floating hotel", "UAM hub", "한강"],
      },
      {
        topic: "KINTEX-김포공항 corridor — 한국 최초 도심권 상용 노선",
        angle: "Hyundai Supernal 주관 시연 사업 — 15분 corridor 의 운항 안정화 단계",
        keyEntities: ["KINTEX", "김포공항", "Hyundai Supernal", "도심 corridor", "Seoul UAM"],
      },
    ],
  },

  F: {
    id: "F",
    name: "Aerospace (전세계 항공우주)",
    focus: "글로벌 항공우주 동향 — KAI, Boeing, Airbus, SpaceX, 누리호, 한·미 우주 협력",
    topics: [
      {
        topic: "KAI KF-21 보라매 양산 로드맵",
        angle: "한국 차세대 다목적 전투기 KF-21 의 양산 일정과 글로벌 수출 가능성",
        keyEntities: ["KAI", "KF-21 보라매", "Type Certification", "양산", "수출"],
      },
      {
        topic: "KAI KUH-1 수리온 글로벌 수출 전략",
        angle: "한국형 다목적 헬기 KUH-1 의 동남아·중동·중남미 수출 동향",
        keyEntities: ["KAI", "KUH-1 수리온", "다목적 헬기", "수출", "방산 외교"],
      },
      {
        topic: "Boeing 737 MAX 안전 인증 동향과 한국 영향",
        angle: "FAA·EASA 의 737 MAX 재인증 절차와 한국 항공사 도입 영향",
        keyEntities: ["Boeing", "737 MAX", "FAA", "EASA", "Type Certification"],
      },
      {
        topic: "Airbus A350-1000 후속 모델 동향",
        angle: "Airbus 의 차세대 와이드바디 후속 모델 개발과 한국 항공사 도입 계획",
        keyEntities: ["Airbus", "A350", "Wide-body", "한국 항공사", "Long-haul"],
      },
      {
        topic: "SpaceX Starship 발사 — 한국 우주 산업 영향",
        angle: "Starship 의 reusable launch capability 가 한국 위성·우주 산업에 미치는 영향",
        keyEntities: ["SpaceX", "Starship", "Reusable launch", "한국 위성", "우주 산업"],
      },
      {
        topic: "누리호 차세대 발사체 KSLV-III 개발 동향",
        angle: "한국형 발사체 차세대 모델 KSLV-III 의 개발 일정과 commercial launch 진입 전략",
        keyEntities: ["누리호", "KSLV-III", "KARI", "발사체", "Commercial launch"],
      },
      {
        topic: "한·미 우주 협력 — Artemis 프로그램 한국 참여",
        angle: "한국이 Artemis 프로그램에 참여하는 의미와 달 탐사 기술 협력 로드맵",
        keyEntities: ["NASA", "Artemis", "KARI", "달 탐사", "Lunar Gateway"],
      },
      {
        topic: "글로벌 위성통신 (Starlink, OneWeb) — 한국 도입 동향",
        angle: "Starlink·OneWeb LEO 위성통신의 한국 진입과 6G·UAM 연계 가능성",
        keyEntities: ["Starlink", "OneWeb", "LEO satellite", "6G", "Satellite communication"],
      },
    ],
  },

  G: {
    id: "G",
    name: "Defense (전세계 방산)",
    focus: "글로벌 방산 동향 — K-Defense, EDF, DoD RFI, 한·미 연합, AUKUS, 사이버 방산",
    topics: [
      {
        topic: "K-Defense 글로벌 수출 — K2 흑표·FA-50 동향",
        angle: "한국 방산의 폴란드·이집트·말레이시아 등 글로벌 수출 동향과 향후 전망",
        keyEntities: ["K2 흑표", "FA-50", "Hyundai Rotem", "KAI", "K-Defense"],
      },
      {
        topic: "EDF (European Defence Fund) 한국 참여 가능성",
        angle: "EDF 의 외부 국가 협력 프레임워크와 한국 방산 기업의 EU 시장 진입 전략",
        keyEntities: ["EDF", "European Defence Fund", "EU 방산", "PESCO", "한국 방산"],
      },
      {
        topic: "DoD RFI 대응 전략 — 한국 방산 기업의 미국 진출",
        angle: "미국 국방부 RFI(Request for Information) 응답 프로세스와 한국 기업의 진입 모델",
        keyEntities: ["DoD RFI", "Pentagon", "한국 방산", "FMS", "DTC"],
      },
      {
        topic: "한·미 연합 CBRN 작전 — Lattice 통합 시나리오",
        angle: "Anduril Lattice 플랫폼을 통한 한·미 연합 CBRN 작전 데이터 통합 가능성",
        keyEntities: ["한·미 연합", "Lattice", "Anduril", "CBRN-CADS", "Coalition operations"],
      },
      {
        topic: "AUKUS 협정 한국 영향",
        angle: "Australia-UK-US 3국 안보협정의 한국 방산·기술 협력 영향",
        keyEntities: ["AUKUS", "Australia", "Pillar 2", "한국 방산", "Indo-Pacific"],
      },
      {
        topic: "사이버 방산 — 양자 암호 기술 동향",
        angle: "QKD(Quantum Key Distribution) 와 양자내성암호의 방산 적용 동향",
        keyEntities: ["Quantum cryptography", "QKD", "Post-quantum", "사이버 방산", "암호 모듈"],
      },
      {
        topic: "한화시스템 통신·관제 모듈 — Lattice 호환",
        angle: "한화시스템의 K-UAM Dream Team 컨소시엄 통신 모듈과 Lattice entity-publish 호환",
        keyEntities: ["한화시스템", "Lattice", "C4I", "K-UAM", "Entity publish"],
      },
      {
        topic: "북한 CBRN 위협 시나리오 — NK_Hazmat_Seoul",
        angle: "북한의 CBRN 사용 시나리오와 한·미 연합 도시 작전 시뮬레이션",
        keyEntities: ["North Korea", "CBRN threat", "Hazmat", "Seoul scenario", "Coalition response"],
      },
    ],
  },
};

/**
 * V2.4 Pillar Rotation (7 pillars × 2 slots = 14 slot/week)
 *
 * 박 대표 사업 전략 반영:
 *  - E (Korea UAM Market): 매주 정기 노출 — 섬에어·본에어·인천 UAM 버티포트 사전 노출
 *  - F (Aerospace): 글로벌 항공우주 동향 cycle
 *  - G (Defense): 글로벌 방산 동향 cycle
 *  - A/B/C/D: 기존 CBRN 콘텐츠 (유지)
 */
export function selectPillar(date: Date, slot: "morning" | "evening"): Pillar {
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / 86400000);
  const slotOffset = slot === "morning" ? 0 : 1;
  const index = (dayOfYear * 2 + slotOffset) % 7;
  const order: PillarId[] = ["A", "B", "C", "D", "E", "F", "G"];
  const pillarId = order[index];
  return PILLARS[pillarId];
}

/**
 * Selects topic within pillar based on day-of-year.
 * Topics rotate at the pillar's natural cadence.
 */
export function selectTopic(pillar: Pillar, date: Date): PillarTopic {
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / 86400000);
  const topicIndex = dayOfYear % pillar.topics.length;
  return pillar.topics[topicIndex];
}
