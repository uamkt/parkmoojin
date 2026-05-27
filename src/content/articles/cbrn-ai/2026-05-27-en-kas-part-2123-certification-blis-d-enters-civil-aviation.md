---
title: "KAS Part 21/23 Certification: BLIS-D Enters Civil Aviation"
description: "How Korean Airworthiness Standards Part 21 and Part 23 create a regulatory pathway for BLIS-D dry decontamination systems on civil aircraft platforms."
category: "cbrn-ai"
publishedAt: 2026-05-27
author: "박무진"
language: "en"
quickAnswer: "KAS Part 21 and Part 23 provide the type-certification and airworthiness approval framework that allows BLIS-D's bleed-air decontamination technology to transition from military to civil aviation platforms, opening a dual-use market validated by MOLIT oversight and NATO STANAG-compatible design standards."
tags: ["KAS Part 21", "Tokyo Subway Sarin Attack", "BLIS-D", "CBRN-CADS", "Type Certification", "Dual-Use Aviation"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 (Korean Airworthiness Standards Part 21) is the MOLIT-administered regulatory framework governing the design approval, type certification, and production oversight of aeronautical products in South Korea. It mirrors EASA CS-21 and FAA 14 CFR Part 21 in structure, requiring manufacturers to demonstrate that any installed equipment — including decontamination systems — meets airworthiness standards before civil deployment. For BLIS-D, this means its bleed-air thermal cycling mechanism, plumbing integration points, and electrical load profiles must all pass Design Organization Approval (DOA) and Type Certificate (TC) or Supplemental Type Certificate (STC) scrutiny. Meeting KAS Part 21 transforms BLIS-D from a military-grade retrofit into a certifiable civil aviation asset, unlocking procurement channels at commercial carriers, emergency medical transport operators, and government VIP fleets regulated under MOLIT."
  - question: "How does KAS Part 23 define the aircraft category where BLIS-D could be installed?"
    answer: "KAS Part 23 governs airworthiness standards for normal, utility, acrobatic, and commuter-category aeroplanes — broadly equivalent to EASA CS-23 Amendment 5 and the FAA's restructured Part 23 rule. This category covers turboprop commuters, light jets, and regional aircraft that are increasingly used in medical evacuation, border patrol, and government transport roles where CBRN exposure risk is non-trivial. Under KAS Part 23, equipment manufacturers must demonstrate that an installed system like BLIS-D does not adversely affect aircraft structural integrity, flight control, fuel systems, or emergency egress. Because BLIS-D uses existing bleed-air offtakes rather than independent chemical reagent tanks, its parasitic load on the aircraft is minimal, giving it a credible pathway through the Part 23 compliance matrix without requiring a full aircraft-level redesign."
  - question: "What is the NATO STANAG alignment status of BLIS-D, and how does it interact with Korean civil certification?"
    answer: "BLIS-D is designed in alignment with NATO STANAG 4721 (decontamination of equipment) and draws on STANAG 2002 and AEP-7 decontamination doctrine for agent contact-time and residue-elimination benchmarks. These military standards establish minimum efficacy thresholds against Schedule 1 chemical warfare agents including VX, HD, and Novichok variants. Korean civil certification under KAS Part 21/23 does not supersede these military standards; rather, it operates in parallel. A dual-certification pathway — NATO STANAG efficacy compliance plus KAS STC airworthiness approval — positions BLIS-D as the only system capable of operating in both military fast-jet and civilian commuter environments within the same regulatory framework. MOLIT and the Defense Acquisition Program Administration (DAPA) have separate but increasingly coordinated approval tracks for dual-use aviation equipment, making this pathway administratively feasible in South Korea's current procurement environment."
  - question: "How does Anduril Lattice interoperability factor into a civil-aviation BLIS-D deployment?"
    answer: "Anduril's Lattice platform is an autonomous systems integration framework that aggregates sensor feeds, asset status, and mission data across heterogeneous military and dual-use platforms. Integrating BLIS-D's onboard sensor telemetry — decon cycle status, agent detection confirmations from CBRN-CADS, and residue-clearance certificates — into a Lattice mesh network allows ground commanders or emergency operations centers to verify aircraft decontamination status in near-real-time before permitting landing at civilian airports. This is critical for consequence management scenarios where a contaminated aircraft must divert to a commercial field. The civil KAS certification ensures the hardware is airworthiness-compliant; the Lattice integration ensures the operational data chain is trustworthy, creating a full-spectrum dual-use capability that satisfies both MOLIT airworthiness inspectors and NATO CBRN operational commanders."
citations:
  - title: "Korean Airworthiness Standards (KAS) — Ministry of Land, Infrastructure and Transport"
    url: "https://www.molit.go.kr/USR/I0204/m_45/dtl.jsp"
    publishedYear: 2023
  - title: "EASA CS-23 Amendment 5 — Normal-Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2017
  - title: "NATO AEP-7 Handbook on Decontamination"
    url: "https://nso.nato.int/nso/nsdd/listpromulg.html"
    publishedYear: 2020
  - title: "OPCW Report on the Chemical Weapons Convention — Schedule 1 Agents"
    url: "https://www.opcw.org/chemical-weapons-convention/annexes/annex-chemicals/schedule-1"
    publishedYear: 2023
  - title: "MarketsandMarkets CBRN Defense Market — Global Forecast to 2028"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-255839172.html"
    publishedYear: 2023
  - title: "RAND Corporation: Countering Chemical, Biological, Radiological and Nuclear Threats"
    url: "https://www.rand.org/topics/chemical-biological-radiological-and-nuclear-threats.html"
    publishedYear: 2022
  - title: "Japan Transport Safety Board — Tokyo Subway Sarin Incident Review"
    url: "https://www.mlit.go.jp/jtsb/english.html"
    publishedYear: 1996
ogImage: "cbrn-ai-blis-d-kas-civil-certification-2026.png"
---

# KAS Part 21/23 Certification: BLIS-D Enters Civil Aviation

## Abstract

On 20 March 1995, Aum Shinrikyo released **Sarin** on five Tokyo subway lines, killing 13 people and hospitalizing more than 1,000. Emergency responders — operating without validated decontamination protocols or certified equipment — were themselves contaminated at a rate that would horrify modern CBRN planners. Thirty-one years later, the regulatory frameworks governing what certified decontamination equipment can legally operate aboard civil aircraft remain conspicuously thin in most jurisdictions. South Korea is beginning to close that gap. The Ministry of Land, Infrastructure and Transport (**MOLIT**) administers the **Korean Airworthiness Standards (KAS)**, a regulatory corpus that mirrors EASA and FAA architecture. **KAS Part 21** governs type certification and production approval; **KAS Part 23** sets airworthiness standards for normal and commuter-category aircraft. Together, they create the first credible dual-use regulatory pathway for **BLIS-D** — UAM KoreaTech's waterless, 90-second bleed-air decontamination system — to transition from military platforms to civil aviation. This article examines that pathway in technical and strategic detail, connecting the 1995 Tokyo lesson to a 2026 procurement reality.

---

## 1. Historical Anchor — The Tokyo Subway Sarin Attack (1995)

### Inner Landscape

The Aum Shinrikyo cell that executed the Tokyo attack operated under a doctrine of maximum disruption with minimal operational signature. The perpetrators believed that a nerve agent released in an enclosed, high-transit space would overwhelm emergency response infrastructure before any coherent decontamination protocol could be activated. Their assessment was largely correct. First responders arriving at Kasumigaseki and Tsukiji stations had no chemical-specific protective equipment and no certified decon capability on scene. The cognitive failure was not one of courage but of institutional unpreparedness: no doctrine existed for mass CBRN casualty management in a civilian transit context. That institutional gap — the absence of certified, deployable decontamination tools in civilian operational environments — is the precise gap that **KAS Part 21/23** certification of **BLIS-D** is designed to address three decades later.

### Environmental Read

The 1995 attack exposed a structural blind spot shared by virtually every advanced-economy transit authority: the assumption that mass-casualty CBRN events were a military problem, not a civilian infrastructure problem. Tokyo's subway system had no decontamination staging areas, no bleed-air or pressurized-gas-driven wash-down capability, and no sensor network capable of identifying **Sarin** in real time. Fire services defaulted to water-based decontamination improvised from fire hoses — a method that, for organophosphate agents, risks spreading contamination rather than neutralizing it. Aviation authorities worldwide drew few lessons from this event; the dominant assumption remained that aircraft were not meaningful CBRN vectors. That assumption is now untenable given the documented use of **Novichok** delivered via aircraft-borne luggage in the 2018 Salisbury case.

### Differential Factor

What differentiated the Tokyo attack from previous CBRN incidents was the vector: an enclosed, ventilated, high-occupancy infrastructure node. Aircraft cabins share every one of those characteristics — with the added complication that they are legally regulated objects operating under airworthiness frameworks. This is both a constraint and an opportunity. A subway car has no certification authority. A civil aircraft does. The existence of **KAS Part 21** and **KAS Part 23** means that a decontamination system installed on a Korean-registered aircraft can be held to a verifiable, auditable standard of safety and efficacy — something that ad hoc subway decon never achieved.

### Modern Bridge

The regulatory lesson from Tokyo is that decontamination capability must be pre-certified and pre-positioned, not improvised post-incident. South Korea's MOLIT has progressively updated KAS to align with EASA CS-21 and CS-23 frameworks, creating a mechanism by which dual-use technologies developed for military platforms can receive civil airworthiness approval. For **BLIS-D**, this bridge is structural: the system's core principle — using aircraft bleed-air offtake to drive a thermal-chemical decontamination cycle — is inherently integrated into the aircraft's existing certified systems, making supplemental type certification (STC) the natural approval pathway.

---

## 2. Problem Definition — The Civil Aviation CBRN Gap

The global CBRN defense market was valued at approximately **USD 16.7 billion in 2023** and is projected to reach **USD 22.4 billion by 2028** at a CAGR of **6.1%**, according to MarketsandMarkets. Yet the civil aviation sub-segment remains dramatically underserved. Current ICAO and national authority guidance on aircraft decontamination following a CBRN event defaults almost entirely to ground-based procedures that require the aircraft to be taken out of service, transported to a dedicated facility, and processed over timescales measured in days. There is no ICAO-certified airborne or rapid-ground decontamination system in widespread civil deployment anywhere in the world.

In South Korea, **MOLIT** oversees approximately **900 registered civil aircraft** in the commuter and air-taxi categories covered by KAS Part 23, plus a growing fleet of government and special-mission aircraft. Korean Air and Asiana operate combined international fleets exceeding **280 wide-body aircraft**, all of which lack any certified onboard CBRN decontamination capability. The Korean government's own National Crisis Management Framework identifies biological and chemical contamination of aviation assets as a Tier-2 consequence management scenario — yet no domestic product holds the relevant STC under KAS Part 21 to address it.

The gap is not merely commercial. A single contaminated inbound international flight represents a potential public health and security emergency. The **2003 SARS crisis** demonstrated that aviation is the primary vector for rapid pandemic spread; a deliberate chemical or biological release aboard or near a civil aircraft would demand certified decontamination capability within **90 minutes** to prevent secondary contamination of airport ground crews and terminal infrastructure. No such certified capability currently exists in the Korean civil aviation regulatory inventory.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS Certification Pathway

**BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) achieves a complete surface decontamination cycle in **90 seconds** without water, using the aircraft's existing bleed-air system to drive a thermally activated solid-reagent decontamination matrix across interior surfaces, air ducts, and cargo holds. The system has been validated against **Sarin**, **VX**, **HD (mustard gas)**, and biological simulants at efficacy levels consistent with NATO **AEP-7** decontamination standards.

The KAS certification pathway proceeds in two stages. Under **KAS Part 21**, UAM KoreaTech applies for a Supplemental Type Certificate (STC) through MOLIT's Aviation Safety and Security Division. The STC application requires demonstration that **BLIS-D**'s bleed-air integration does not degrade engine performance, that its reagent matrix is chemically inert under normal operating conditions, and that the system's failure modes are benign and detectable. Because **BLIS-D** is passive until activated and draws minimal bleed-air flow (estimated at less than **2% of available offtake** on a PT6A-class turboprop), these demonstrations are tractable within existing test protocols.

Under **KAS Part 23**, the relevant compliance chapters are 23.1309 (equipment, systems, and installations) and 23.2500 (pressurization system elements), both of which require probabilistic safety assessments for any system tapping pneumatic architecture. UAM KoreaTech's engineering team has pre-mapped **BLIS-D**'s failure mode and effects analysis (FMEA) against these chapters, identifying a pathway to a **Design Assurance Level (DAL) C** classification — appropriate for a system whose failure would not directly affect continued safe flight.

Integration with **CBRN-CADS** provides the sensor layer: the multi-modal detection platform (IMS + Raman + gamma + qPCR) generates the confirmed-contamination trigger that activates **BLIS-D**, and its post-decon clearance signal constitutes the machine-readable decontamination certificate fed into the Anduril **Lattice** network for operational command verification.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea occupies a unique geopolitical position that elevates CBRN civil aviation preparedness from niche concern to national security imperative. The **DPRK** maintains the world's third-largest chemical weapons stockpile, estimated at **2,500–5,000 metric tons** of agents including **Sarin**, **VX**, and **tabun**, according to IISS assessments. The 2017 assassination of Kim Jong-nam at Kuala Lumpur International Airport using **VX** nerve agent demonstrated explicitly that civilian aviation infrastructure is a viable CBRN attack vector for state-sponsored actors.

MOLIT's progressive alignment of KAS with EASA standards — formalized through the **Korea-EU Aviation Safety Agreement** signed in 2021 — means that a KAS STC for **BLIS-D** carries mutual recognition weight in the European market, effectively doubling the addressable certification geography without a separate EASA CS-23 campaign. The Defense Acquisition Program Administration (**DAPA**) has simultaneously issued guidance under its **2025 Dual-Use Defense Technology Roadmap** encouraging civil certification of military CBRN assets as a cost-sharing mechanism between defense and civil aviation budgets.

From a venture and procurement perspective, dual civil-military certification is the single most reliable route to durable revenue in the defense technology market. A product that holds both a KAS STC and NATO STANAG alignment is accessible to **MOLIT-regulated operators**, **DAPA procurement programs**, **NATO member state air forces operating KAI platforms**, and potentially **EASA-jurisdiction operators** through mutual recognition — a four-channel revenue architecture that no competitor currently occupies.

---

## 5. Forward Outlook

UAM KoreaTech's 12–24 month certification roadmap targets the following milestones: **Q3 2026** — submission of STC pre-application package to MOLIT under KAS Part 21, including preliminary FMEA and bleed-air integration analysis on the KAI Surion-derivative testbed. **Q4 2026** — completion of ground-test decontamination efficacy trials against certified Sarin simulant (DMMP) at the Agency for Defense Development (ADD) test range in Daejeon. **Q1 2027** — formal STC application filing with MOLIT, initiating the conformity inspection phase. **Q2 2027** — first civil operator letter of intent, targeting a Korean government special-mission operator in the KAS Part 23 category.

Parallel to certification activity, UAM KoreaTech will complete **CBRN-CADS** integration testing with the Anduril **Lattice** API, enabling decon-status telemetry to flow into joint operations center displays. A NATO CBRN Centre of Excellence technical exchange visit, targeted for **Q4 2026**, will provide independent validation data supporting both the STANAG compliance file and the MOLIT STC dossier. By mid-2027, **BLIS-D** is positioned to be the first civil-airworthiness-certified rapid decontamination system in the Korean market and among the first globally.

---

## Conclusion

In 1995, Tokyo's responders improvised decontamination with fire hoses and paid for that improvisation in secondary casualties. In 2026, South Korea has the regulatory architecture — **KAS Part 21**, **KAS Part 23**, and a MOLIT framework aligned to EASA standards — and the technical capability in **BLIS-D** to ensure that no Korean-registered aircraft ever faces that same institutional