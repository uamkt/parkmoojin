---
title: "KAS Part 21/23 Certification: BLIS-D Enters Civil Aviation"
description: "How Korean Airworthiness Standards Part 21 and Part 23 unlock BLIS-D dry decontamination for civil aircraft, airports, and dual-use NATO deployment."
category: "cbrn-ai"
publishedAt: 2026-05-09
author: "박무진"
language: "en"
quickAnswer: "KAS Part 21 and Part 23 type-certification pathways, administered by MOLIT's KDCA, are the regulatory gateway for deploying BLIS-D dry decontamination technology on civil Korean aircraft. Achieving these approvals validates bleed-air decon hardware for both domestic civil aviation and NATO-aligned dual-use operations."
tags: ["Tokyo Subway Sarin Attack", "Bhopal Gas Tragedy", "BLIS-D", "CBRN-CADS", "KAS Type Certification", "NATO STANAG 4101"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 is the Korean Airworthiness Standards chapter governing the certification of aeronautical products, parts, and appliances, modeled closely on EASA CS-21 and FAA 14 CFR Part 21. It establishes the legal and technical framework under which any new or modified aircraft system — including onboard decontamination hardware — must receive a Type Certificate (TC) or Supplemental Type Certificate (STC) before operational deployment. For CBRN decontamination equipment like BLIS-D, KAS Part 21 is the mandatory regulatory gateway: without a valid STC issued by Korea's Aviation Safety Technology Institute (KASTI) under the Ministry of Land, Infrastructure and Transport (MOLIT), no bleed-air decon system may legally be installed on a certificated civil aircraft. This matters strategically because South Korea operates over 400 registered civil transport aircraft and hundreds of rotary-wing platforms that could serve as first-responder or mass-casualty decon assets in a CBRN contingency, but none can be legally retrofitted without this approval pathway."
  - question: "How does KAS Part 23 apply to smaller aircraft and rotary platforms carrying BLIS-D?"
    answer: "KAS Part 23, aligned with FAA 14 CFR Part 23 and EASA CS-23, governs airworthiness standards for normal, utility, acrobatic, and commuter category aircraft — typically those with a maximum certificated takeoff weight at or below 19,000 kg and no more than 19 passenger seats. For BLIS-D integration, Part 23 is critical because light utility aircraft and rotary-wing platforms in this weight class are precisely the tactical assets most likely to perform forward-area CBRN decontamination in a conflict or mass-casualty scenario. Part 23 amendments introduce performance-based standards rather than prescriptive ones, mirroring the 2017 FAA Part 23 rewrite, which creates flexibility for novel bleed-air system architectures. UAM KoreaTech's BLIS-D hardware, drawing engine bleed air to generate dry thermal decontamination cycles, must demonstrate compliance with structural, thermal, and pneumatic load requirements under KAS Part 23 to receive an STC on applicable platforms."
  - question: "What is the timeline and process for obtaining a BLIS-D STC under KAS Part 21?"
    answer: "The Supplemental Type Certificate process under KAS Part 21 typically involves five phases: (1) pre-application meeting with KASTI to define certification basis and means of compliance; (2) project-specific certification plan agreement; (3) compliance demonstration through ground and flight testing, analysis, and inspection; (4) conformity inspection of production articles; and (5) issuance of the STC by MOLIT/KASTI. For complex pneumatic-thermal systems like BLIS-D, applicants should anticipate an 18-to-36-month process depending on platform complexity, test article availability, and the novelty of the decontamination function relative to existing regulatory guidance material. Bilateral Aviation Safety Agreements (BASAs) between Korea and the United States and between Korea and the EU mean that a KAS STC can serve as the basis for streamlined FAA or EASA validation, significantly accelerating international deployment — a critical consideration for NATO interoperability use cases."
  - question: "How does Anduril Lattice interoperability relate to BLIS-D's civil aviation certification path?"
    answer: "Anduril's Lattice platform functions as an autonomous systems integration and command-and-control mesh, increasingly adopted by U.S. and allied military operators to coordinate heterogeneous assets in contested environments. A BLIS-D system installed on a KAS-certificated civil or dual-use aircraft can transmit decontamination status, agent detection triggers from co-located CBRN-CADS sensors, and bleed-air cycle telemetry directly into a Lattice node, enabling real-time CBRN picture compilation at the operational level. Civil certification is not merely a domestic regulatory box-check — it establishes the airworthiness baseline that NATO acquisition officers and allied defense ministries require before accepting a dual-use platform into a multinational exercise or operational deployment. KAS STC equivalence with FAA and EASA approvals therefore functions as the technical trust anchor for Lattice integration at the allied level."
citations:
  - title: "Korean Aviation Safety Act and Korean Airworthiness Standards (KAS) — MOLIT"
    url: "https://www.molit.go.kr/english/USR/WPGE0201/m_37465/DTL.jsp"
    publishedYear: 2023
  - title: "FAA Part 23 Reorganization Final Rule — Federal Register"
    url: "https://www.federalregister.gov/documents/2016/12/30/2016-30246/revision-of-airworthiness-standards-for-normal-utility-acrobatic-and-commuter-category-airplanes"
    publishedYear: 2016
  - title: "OPCW — Aum Shinrikyo Tokyo Subway Sarin Attack Technical Report Reference"
    url: "https://www.opcw.org/our-work/preventing-chemical-terrorism"
    publishedYear: 2022
  - title: "NATO STANAG 4101 — Collective Protection of Land Forces in NBC Environments"
    url: "https://www.nato.int/cps/en/natohq/topics_48895.htm"
    publishedYear: 2021
  - title: "RAND Corporation — Chemical and Biological Terrorism: The Threat According to the Open Literature"
    url: "https://www.rand.org/pubs/monograph_reports/MR1Chemical.html"
    publishedYear: 2000
  - title: "EASA CS-21 — Certification Specifications for Aeronautical Products"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-21-amendment-5"
    publishedYear: 2021
ogImage: "cbrn-ai-blis-d-kas-civil-cert-2026.png"
---

# KAS Part 21/23 Certification: BLIS-D Enters Civil Aviation

## Abstract

In March 1995, **Sarin** nerve agent released inside Tokyo's subway system killed 13 people, injured nearly 1,000, and paralyzed one of the world's densest transit corridors for hours. Emergency responders lacked any rapid, standardized decontamination protocol for enclosed, mechanically ventilated spaces. Thirty years later, the regulatory architecture for deploying effective decontamination hardware on certificated aircraft — precisely the confined, bleed-air-fed environments that matter most in a CBRN incident — remains incomplete in most jurisdictions. South Korea is now positioned to close that gap. Korean Airworthiness Standards **KAS Part 21** and **KAS Part 23**, administered by the Ministry of Land, Infrastructure and Transport (**MOLIT**), define the type-certification pathways that will determine whether UAM KoreaTech's **BLIS-D** waterless decontamination system can be legally integrated into civil and dual-use aircraft operating in Korean airspace and, through bilateral airworthiness agreements, into NATO-allied operational theaters. This article maps that regulatory journey, quantifies the strategic opportunity, and explains why civil type certification is not a bureaucratic distraction but the foundational trust credential that unlocks both domestic deployment and Anduril Lattice interoperability at the allied level.

---

## 1. Historical Anchor — The Tokyo Subway Sarin Attack (1995)

### Inner Landscape

Aum Shinrikyo's operational planners selected the Tokyo subway because it was enclosed, mechanically ventilated, and extremely dense — a force-multiplier for aerosolized chemical agents. Their internal logic was grimly rational: ventilation systems that normally protect passengers would instead redistribute contaminated air across multiple stations and train cars. What neither the attackers nor emergency responders adequately modeled was the decontamination problem that would follow. First responders used water from fire hoses, inadvertently spreading liquid **Sarin** secondary contamination. The incident exposed a belief system among emergency managers that water-based decon — the 1960s-era military standard — was universally applicable. It was not. In an enclosed aircraft or transit environment, water decontamination is logistically catastrophic: it damages avionics, compromises structural materials, and produces contaminated runoff that creates secondary hazard zones.

### Environmental Read

The environmental factors that amplified Tokyo's casualty count were structural, not incidental. Mechanically recirculated air in subway cars mirrors bleed-air systems in pressurized aircraft: both draw from a common plenum and distribute throughout the enclosed volume. Emergency responders in 1995 had no doctrine for decontaminating these systems in place. OPCW analysis of the Tokyo incident subsequently influenced development of international chemical terrorism response frameworks, but the hardware gap — a decontamination system compatible with aircraft pneumatic architecture — persisted for decades. Regulatory bodies in the United States, Europe, and Asia had not yet defined airworthiness standards for active decontamination subsystems because no credible hardware candidate existed to prompt a rulemaking process.

### Differential Factor

What made Tokyo different from prior industrial chemical incidents such as Bhopal in 1984 was intentionality combined with infrastructure targeting. Bhopal was an industrial accident whose lessons drove process safety regulation. Tokyo was a deliberate attack on transportation infrastructure, and its lessons should have driven airworthiness-adjacent CBRN protection standards. They largely did not — until the post-9/11 period generated renewed interest in aviation CBRN vulnerabilities. Even then, regulatory responses focused on detection and passenger screening rather than onboard decontamination capability. The hardware-regulatory gap that Tokyo revealed in 1995 remains incompletely addressed in civil aviation certification frameworks worldwide, including Korea's.

### Modern Bridge

The Tokyo attack's most durable lesson for Korean defense and civil aviation planners is architectural: any enclosed, mechanically ventilated space is a CBRN vulnerability, and the decontamination solution must be compatible with that architecture rather than imposed upon it. **BLIS-D** was engineered precisely from this insight. By harnessing existing engine bleed-air infrastructure to drive a dry thermal decontamination cycle, BLIS-D requires no external water supply, generates no contaminated runoff, and operates within the pneumatic envelope that aircraft platforms already possess. The regulatory challenge is now not engineering but certification: **KAS Part 21** and **KAS Part 23** must accommodate this novel decon function within existing airworthiness frameworks.

---

## 2. Problem Definition — The Unregulated Decon Hardware Gap

The global CBRN decontamination equipment market was valued at approximately **USD 12.5 billion in 2023** and is projected to reach **USD 18.4 billion by 2028**, growing at a CAGR of **8.0%**, according to MarketsandMarkets sector analysis. Yet within that market, onboard aircraft decontamination systems represent a near-zero commercial segment — not because demand is absent, but because no airworthiness certification pathway has been formally defined for active chemical or biological decontamination hardware in civil aviation.

The gap is measurable. South Korea's registered civil aviation fleet includes over **400 transport-category aircraft** and approximately **800 rotary-wing platforms** across commercial, utility, and government operators. Following a credible CBRN event at Incheon International Airport — ranked among the world's top ten busiest airports by passenger volume — the absence of certificated onboard decon capability would force ground-based responses that are inherently slower and that risk secondary contamination of terminal infrastructure.

NATO doctrine, specifically **STANAG 4101**, establishes collective protection standards for military platforms in NBC environments but does not govern civil aviation hardware. EASA and the FAA have published no specific acceptable means of compliance (AMC) for chemical decontamination subsystems under their respective CS-21 or 14 CFR Part 21 frameworks. South Korea's **MOLIT** and its technical arm **KASTI** are therefore in a unique position: by developing KAS-specific guidance material for active decontamination systems — drawing on both the EASA CS-21 architecture and U.S. Part 23 performance-based standards — Korea can establish the first nationally recognized airworthiness framework for this hardware class, creating a first-mover regulatory advantage that directly benefits **BLIS-D** commercialization.

---

## 3. UAM KoreaTech Solution — BLIS-D on the KAS Certification Path

**BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) achieves a **90-second full-cycle waterless decontamination** of enclosed aircraft interiors by routing engine bleed air through a solid reagent matrix that volatilizes decontaminant compounds, distributes them through the existing air distribution plenum, and neutralizes chemical and biological agents without liquid residue. The system adds no external water supply requirement, no contaminated effluent stream, and no corrosive exposure to avionics or structural composites.

Under **KAS Part 21**, UAM KoreaTech's certification strategy is to pursue a **Supplemental Type Certificate (STC)** on identified host platforms — beginning with medium utility rotary-wing aircraft in the KAS Part 23 weight class — rather than a standalone appliance approval. This platform-specific STC approach allows BLIS-D to be validated against actual aircraft structural loads, bleed-air flow rates, thermal cycling envelopes, and pneumatic system interaction effects. Compliance demonstrations will address: (a) structural integrity of the reagent matrix housing under FAR/KAS Part 23 flight load factors; (b) thermal compatibility of bleed-air delivery temperatures with existing pneumatic ducting materials; (c) absence of adverse interaction between decontaminant vapors and avionics or wiring bundles; and (d) pilot interface and crew alerting requirements.

**CBRN-CADS** (CBRN Chemical Agent Detection System), UAM KoreaTech's multi-sensor AI-driven detection platform combining IMS, Raman spectroscopy, gamma detection, and qPCR, is designed to serve as the trigger system that initiates a BLIS-D decontamination cycle. In a KAS-certificated installation, CBRN-CADS sensor outputs would feed an onboard controller that autonomously activates BLIS-D upon confirmed agent detection above threshold, reducing human-decision latency in a time-critical scenario. The integrated system's telemetry — detection event, agent class, decon cycle status — is architected for transmission into Anduril **Lattice** nodes, enabling real-time CBRN common operating picture at the operational command level.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea's regulatory timing is structurally advantageous. **MOLIT** completed a comprehensive revision of KAS standards between 2020 and 2023, aligning them with EASA CS-21 Amendment 5 and the post-2016 performance-based architecture of FAA Part 23. This alignment means that a KAS STC achieved for BLIS-D on a Korean-registered platform carries direct validation weight under Korea's **Bilateral Aviation Safety Agreement (BASA)** with the United States and its working arrangement with EASA — significantly reducing the additional test burden required for FAA or EASA STC validation. For NATO procurement officers evaluating BLIS-D as a dual-use asset for allied exercises or operational theater deployment, FAA or EASA validation derived from the Korean STC provides the airworthiness trust credential required by national acquisition regulations in the United States, United Kingdom, Germany, and France.

Geopolitically, the Korean Peninsula's threat environment — North Korea's documented chemical weapons stockpile, estimated by the U.S. Department of Defense at **2,500–5,000 metric tons** of chemical agents — creates a genuine operational demand signal that accelerates domestic acquisition interest. The **ROK Air Force** operates both transport-category and rotary-wing platforms that would benefit directly from certificated onboard decon capability. Civil-military dual-use certification under KAS Part 21/23 allows a single STC to serve both commercial operators and ROK military platform operators under a military type certificate derivative, maximizing return on the certification investment.

For venture capital and strategic investors, KAS type certification represents a significant technical and regulatory moat. The STC process, once completed, creates an asset that cannot be easily replicated by a new entrant without equivalent time and capital investment in flight testing and KASTI engagement.

---

## 5. Forward Outlook

UAM KoreaTech's **12-to-24-month BLIS-D certification roadmap** targets the following milestones: pre-application meeting with KASTI (Q3 2026); certification basis agreement and certification plan approval (Q4 2026); ground test article completion and structural compliance demonstration (Q1 2027); bleed-air system integration testing on host rotary-wing platform (Q2 2027); flight test program initiation under KASTI surveillance (Q3 2027); STC issuance (Q4 2027). In parallel, UAM KoreaTech is engaging MOLIT's Aviation Policy Bureau to contribute to the development of KAS-specific Advisory Circular material on active decontamination systems — a regulatory shaping effort that would establish BLIS-D's design principles as the normative technical baseline for the entire emerging hardware class. FAA validation application is planned for Q1 2028, leveraging BASA streamlining, followed by NATO dual-use qualification testing under STANAG 4101 protocols by Q3 2028.

---

## Conclusion

In 1995, the Tokyo subway's own ventilation system became a vector for mass casualties because no decontamination technology existed that could operate within rather than against the enclosed pneumatic environment. Thirty years later, **BLIS-D** is engineered to reverse that architectural vulnerability — but only if it earns the regulatory credentials that civil aviation demands. **KAS