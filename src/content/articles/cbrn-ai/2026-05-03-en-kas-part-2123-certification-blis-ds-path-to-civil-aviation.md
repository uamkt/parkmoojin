---
title: "KAS Part 21/23 Certification: BLIS-D's Path to Civil Aviation"
description: "How Korean Airworthiness Standards Part 21 and Part 23 create a regulatory pathway for BLIS-D dry decontamination systems in civil aircraft and dual-use platforms."
category: "cbrn-ai"
publishedAt: 2026-05-03
author: "박무진"
language: "en"
quickAnswer: "KAS Part 21 and Part 23, administered by MOLIT, provide the type-certification framework enabling BLIS-D's bleed-air dry decontamination technology to be integrated into civil aircraft as qualified airborne equipment—bridging NATO STANAG 4632 compliance with commercial aviation safety standards."
tags: ["KAS Part 21", "Type Certification", "BLIS-D", "CBRN-CADS", "NATO STANAG", "Dual-Use Aviation"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 is South Korea's airworthiness certification regulation, administered by the Ministry of Land, Infrastructure and Transport (MOLIT), governing the design approval and production of aircraft and aircraft components. For CBRN decontamination systems like BLIS-D, KAS Part 21 provides the legal pathway to achieve a Supplemental Type Certificate (STC), which authorises installation of the decon unit on an already type-certified airframe. Without an STC issued under Part 21 procedures, no hardware modification—regardless of operational merit—may be permanently installed on a civil-registered aircraft. This matters enormously for dual-use operators such as air ambulance services, border-surveillance platforms, and government-use turboprops that require on-board decontamination capability without sacrificing airworthiness status."
  - question: "How does KAS Part 23 define the structural and performance envelope for equipment like BLIS-D?"
    answer: "KAS Part 23, aligned with FAA 14 CFR Part 23 Amendment 64 and EASA CS-23, sets airworthiness standards for normal-category, commuter, and utility aircraft up to 19 seats or 8,618 kg MTOW. For integrated equipment such as BLIS-D, Part 23 dictates load limits, vibration profiles, emergency egress clearances, and fire protection requirements that any installed system must satisfy. BLIS-D's bleed-air architecture—drawing compressed air from the engine to drive thermochemical decontamination without liquid agents—must demonstrate compliance with flammability standards under Part 23.863 and pressurisation integrity under Part 23.841. This aeronautical design heritage actually accelerates certification because the bleed-air circuit already maps onto existing aircraft system documentation."
  - question: "What is the relationship between KAS certification and NATO STANAG 4632 for airborne decontamination?"
    answer: "NATO STANAG 4632 defines minimum performance requirements for collective protection and decontamination of military aircraft, covering chemical agent contact hazards and decontamination throughput. KAS certification and STANAG 4632 address overlapping but distinct domains: KAS ensures the equipment does not compromise airworthiness, while STANAG 4632 validates operational efficacy against threat agents such as Sarin and VX. For dual-use platforms operated by Korea's government or allied forces, both standards must be satisfied simultaneously. UAM KoreaTech's BLIS-D is engineered from the outset to meet both regimes—the bleed-air mechanism satisfies the pressurisation and flammability requirements demanded by KAS Part 23, while the thermochemical decontamination cycle is validated against STANAG 4632 agent-neutralisation benchmarks."
citations:
  - title: "Korean Airworthiness Standards (KAS) — MOLIT Notification"
    url: "https://www.molit.go.kr/USR/WPGE0201/m_35402/DTL.jsp"
    publishedYear: 2023
  - title: "FAA 14 CFR Part 23 — Airworthiness Standards: Normal Category Airplanes"
    url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23"
    publishedYear: 2017
  - title: "OPCW — Chemical Weapons Convention Implementation"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "NATO STANAG 4632 — Collective Protection of Military Aircraft"
    url: "https://standards.globalspec.com/std/1011470/NATO%20STANAG%204632"
    publishedYear: 2009
  - title: "EASA CS-23 Amendment 5 — Certification Specifications for Normal-Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2017
  - title: "RAND Corporation — Chemical and Biological Terrorism Threats to Aviation"
    url: "https://www.rand.org/pubs/monographs/MG545.html"
    publishedYear: 2007
ogImage: "cbrn-ai-kas-part-21-blisd-civil-aviation-2026.png"
---

# KAS Part 21/23 Certification: BLIS-D's Path to Civil Aviation

## Abstract

The threat of chemical and biological contamination to civilian aircraft is no longer a contingency confined to military doctrine. As state and non-state actors have demonstrated through multiple incidents since 2001, aircraft cabins represent high-value, confined environments where even nanogram quantities of a Schedule 1 chemical agent can produce mass casualties. Yet the civil aviation sector remains largely without certified, airframe-integrated decontamination capability. South Korea's Korean Airworthiness Standards—specifically **KAS Part 21** and **KAS Part 23**, administered by the **Ministry of Land, Infrastructure and Transport (MOLIT)**—now provide the regulatory architecture to change that. This article examines how **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination), UAM KoreaTech's waterless 90-second decontamination system, can navigate the type-certification pathway to achieve legal installation on civil-registered aircraft. Drawing on the 1994 Tokyo subway planning episode as a historical anchor, the article argues that the convergence of KAS regulatory maturity, NATO STANAG interoperability requirements, and Anduril Lattice integration standards creates a decisive window for a Korean dual-use solution to set the global benchmark for airborne CBRN protection.

---

## 1. Historical Anchor — Aum Shinrikyo's Pre-Attack Aviation Reconnaissance, 1993–1994

### Inner Landscape

In 1993 and 1994, Aum Shinrikyo operatives conducted systematic reconnaissance of Japanese transport infrastructure, including commercial airports, as potential delivery vectors for Sarin. The group's leadership, operating under an apocalyptic worldview, evaluated aircraft cabins as multiplier environments: enclosed, recirculated air systems, dense passenger loads, and global connectivity. Their internal logic was coherent within its own dark framework — a single contamination event aboard a wide-body aircraft could generate casualties across multiple continents within 24 hours. What the leadership failed to model accurately was the detection and response timeline. They assumed institutional response would be slow, fragmented, and technically unsophisticated. That assumption was not entirely wrong at the time.

### Environmental Read

In 1993, civil aviation CBRN preparedness was institutionally invisible. Airport security focused almost exclusively on explosives and firearms. There were no certified airborne decontamination systems. Aircraft Environmental Control Systems (ECS) were designed solely for passenger comfort, not agent filtration. MOLIT's predecessor agencies had no regulatory category for CBRN-protective aircraft equipment. The OPCW did not yet exist — the Chemical Weapons Convention entered into force only in **1997**. This regulatory and technical vacuum was not unique to Japan or Korea; it was global. Aum's planners read the environment correctly: aviation was a soft vector with no hardened decontamination layer.

### Differential Factor

What ultimately prevented an aviation-based Sarin attack was not a technical countermeasure but a cascade of operational failures within Aum's own production chain, combined with Japanese law enforcement interdiction following the **1995 Tokyo subway attack**. The differential was human intelligence and criminal prosecution — not a CBRN defense system. This is the critical lesson: the absence of a certified onboard decontamination capability was never tested to destruction, but the vulnerability it represented remained structurally intact. Thirty years later, that structural gap in civil aviation CBRN preparedness has narrowed only marginally. No major civil aviation authority has mandated or even standardised airborne decontamination equipment.

### Modern Bridge

The regulatory environment has transformed since 1995. Korea's adoption of KAS Part 21 and Part 23, closely harmonised with FAA and EASA frameworks, now provides the legal architecture to certify integrated decontamination hardware on civil aircraft for the first time. The threat environment has simultaneously intensified: the 2018 Salisbury Novichok incident demonstrated that persistent organophosphate agents can be deployed in densely populated public spaces with residual contamination lasting weeks. An aircraft cabin presents an analogous confinement problem. **BLIS-D's** waterless, bleed-air-driven decontamination cycle — requiring no liquid stockpiles, no crew hazmat training, and only **90 seconds** per cycle — directly addresses the operational constraints that have historically made airborne decon impractical.

---

## 2. Problem Definition — The Unquantified Airborne CBRN Gap

The civil aviation CBRN protection market is characterised less by competition than by near-total absence. A **2007 RAND Corporation** assessment of chemical and biological terrorism threats to aviation identified aircraft cabins as critical vulnerabilities but found no commercial decontamination solutions meeting aviation airworthiness standards. Nearly two decades later, that assessment remains substantively accurate.

Global passenger air traffic reached **4.3 billion passengers** in 2023 (ICAO data), recovering fully from COVID-19 suppression. The attack surface has correspondingly expanded. Yet a survey of major civil aviation authority databases — FAA STC registry, EASA product list, MOLIT type-certificate records — reveals zero dedicated chemical agent decontamination systems certified for installation on commercial or utility aircraft. The regulatory category effectively does not exist in most jurisdictions.

The financial exposure is asymmetric. A single confirmed chemical contamination event aboard a commercial aircraft would conservatively ground the affected carrier's fleet pending investigation, triggering losses in the range of **$200–500 million** in direct costs and multiples of that in market capitalisation impact, based on comparable biosecurity grounding events (e.g., Ebola-related groundings, 2014–2015). Insurance underwriters are beginning to price this risk explicitly into aviation war-risk premiums, but the market for preventive hardware remains undefined.

Korea-specific exposure is acute. **Korean Air** and **Asiana Airlines** together operate over **200 wide-body aircraft** on routes transiting threat-elevated corridors, including Northeast Asian airspace proximate to the Korean Peninsula, where the OPCW has documented ongoing concerns regarding legacy CBRN stockpile accountability. MOLIT's current airworthiness framework has the technical capacity to certify a solution. The commercial incentive and the regulatory pathway are both present. The missing element is a certified product.

---

## 3. UAM KoreaTech Solution — BLIS-D Under KAS Part 21/23

**BLIS-D** is architecturally suited for civil aviation certification in ways that no previously proposed decontamination technology has been. Its core principle — extracting bleed air from the aircraft's existing engine compressor stages to drive a thermochemical decontamination reaction through a solid-phase reactive medium — means the system imposes minimal additional weight, requires no external fluid reservoirs, and integrates directly into the aircraft's existing ECS documentation structure.

Under **KAS Part 21**, UAM KoreaTech would pursue a Supplemental Type Certificate (STC) for BLIS-D installation on target airframes, beginning with utility-class and government-operated turboprops that fall within the **KAS Part 23** envelope (normal-category aircraft up to **8,618 kg MTOW**). The Part 23 compliance matrix for BLIS-D maps as follows: flammability of the reactive solid medium is addressed under Part 23.863 (fire protection in designated fire zones); bleed-air circuit integration is documented under Part 23.1091 (air induction); and the system's electromagnetic compatibility is certified under Part 23.1353. Crucially, because BLIS-D introduces no hydraulic or fuel-system interface, the certification scope is substantially narrower than a full avionics suite modification.

The **90-second cycle time** is operationally decisive. Civil aviation Emergency Response Procedures require that contamination response begin before aircraft doors are opened to prevent agent migration to the terminal environment. A system requiring extended setup or liquid agent preparation is incompatible with this constraint. BLIS-D's solid-phase, bleed-air-activated cycle meets the response-time window without any pre-positioning of consumables.

Integration with the **CBRN-CADS** detection platform provides the triggering intelligence layer. When **CBRN-CADS**'s IMS and Raman spectroscopy modules detect a Schedule 1 agent signature at actionable confidence levels, an automated handshake to BLIS-D initiates the decon cycle — a closed-loop response that reduces crew decision latency from minutes to seconds. This sensor-to-effector architecture is directly analogous to the Anduril Lattice framework's autonomy stack, positioning **BLIS-D** and **CBRN-CADS** as native Lattice-compatible nodes for defence operators requiring both civil airworthiness and military network integration.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea's regulatory and industrial position is uniquely advantageous for this certification initiative. MOLIT's **KAS framework** is among the most FAA/EASA-harmonised in Asia, having undergone a comprehensive revision cycle completed in **2023** that aligned Korean airworthiness standards with FAA 14 CFR Amendment 64 and EASA CS-23 Amendment 5. This harmonisation means an STC granted by MOLIT under KAS Part 21 carries strong reciprocal-recognition weight in negotiations with the FAA Bilateral Aviation Safety Agreement (BASA) and EASA's Technical Implementation Procedures with Korea.

Geopolitically, the **ROK-US Combined Defense posture** and Korea's deepening NATO IP4 partnership create procurement pull for dual-use certified equipment. NATO's emerging requirement for CBRN-resilient mobility platforms — articulated in the Alliance's 2022 Strategic Concept and operationalised through STANAG 4632 compliance programmes — explicitly includes non-military-registered aircraft used in government and humanitarian operations. A MOLIT-certified BLIS-D STC that simultaneously satisfies STANAG 4632 performance benchmarks would be the first product globally to occupy both regulatory spaces at once.

The Korean defense export market context reinforces the commercial logic. Korea's defense exports reached a record **$17.3 billion** in 2023 (DAPA data), driven by artillery, armoured vehicles, and trainer aircraft. CBRN protection equipment remains a minor but fast-growing component. The **MarketsandMarkets** CBRN defense market report projects the global CBRN protection segment to reach **$18.5 billion by 2027**, with airborne decontamination identified as a nascent high-growth sub-segment. A KAS-certified BLIS-D would enter that market with a regulatory credential that no competitor currently holds.

---

## 5. Forward Outlook

UAM KoreaTech's KAS certification roadmap for **BLIS-D** targets the following milestones across a **24-month horizon**:

**Q3 2026**: Submission of STC application to MOLIT under KAS Part 21 Subpart E, with initial airframe target being the Korea Aerospace Industries (KAI) KC-100 Naraon utility aircraft — a KAS Part 23-certified platform already in government service.

**Q4 2026**: Completion of ground-based thermochemical performance validation against Sarin simulant (DMMP) and VX simulant (DEVX) under OPCW-auditable laboratory conditions, generating the agent-efficacy dossier required for STANAG 4632 compliance submission.

**Q1 2027**: Flight-test programme for ECS bleed-air integration, addressing Part 23.841 pressurisation integrity and Part 23.863 fire protection compliance in a representative flight envelope.

**Q2 2027**: MOLIT STC issuance (targeted), followed by BASA notification to FAA and EASA Technical Implementation Procedure submission, opening the US and European civil aviation markets to **BLIS-D** without full re-certification.

**Q3 2027**: First export customer delivery — targeted at a NATO IP4-partner government aviation authority, with Anduril Lattice integration protocol documentation submitted in parallel for military-variant qualification.

---

## Conclusion

Aum Shinrikyo's 1993 reconnaissance of aviation infrastructure exposed a structural vulnerability that civil aviation regulators spent the subsequent three decades not solving. The convergence of KAS Part 21 and Part 23 regulatory maturity, MOLIT's harmonisation with global airworthiness standards, and **BLIS-D's** bleed-air architecture that maps naturally onto existing aircraft system documentation means that the first certified airborne chemical decontamination system is now a matter of engineering execution and regulatory process — not conceptual breakthrough. The ghost of 1993 has waited thirty years for a technically credible, institutionally navigable answer; UAM KoreaTech intends to file that answer with MOLIT before the year is out.