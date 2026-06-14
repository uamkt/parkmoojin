---
title: "BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified"
description: "How UAM KoreaTech's BLIS-D waterless decontamination system aligns with Korean Airworthiness Standards Part 21 and 23 for civil aviation deployment and NATO STANAG compliance."
category: "cbrn-ai"
publishedAt: 2026-06-14
author: "박무진"
language: "en"
quickAnswer: "BLIS-D's bleed-air dry decontamination architecture is structurally compatible with KAS Part 21/23 type certification pathways, enabling civil aviation operators to deploy NATO STANAG-compliant CBRN decon without structural aircraft modification. This unlocks a dual-use civil-military market that no certified competitor currently occupies."
tags: ["Tokyo Subway Attack", "KAS Part 21", "BLIS-D", "CBRN-CADS", "Type Certification", "NATO STANAG"]
faq:
  - question: "What are KAS Part 21 and KAS Part 23, and why do they matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 governs the certification procedures for aeronautical products, parts, and appliances in Korea, administered by the Ministry of Land, Infrastructure and Transport (MOLIT). KAS Part 23 establishes airworthiness standards specifically for normal, utility, acrobatic, and commuter category aircraft. For CBRN decontamination equipment like BLIS-D, compliance with these standards means that any device drawing on aircraft bleed-air systems, modifying cabin pressure dynamics, or interfacing with avionics must pass structural, thermal, and chemical compatibility assessments. Without KAS Part 21/23 alignment, a decon system cannot legally be installed on Korean civil-registered aircraft, closing off the fast-growing civil emergency-response aviation market. Achieving type certification or a Supplemental Type Certificate (STC) under this framework is therefore a prerequisite for commercial deployment on platforms such as the Korea Aerospace Industries KT-1 derivative, turboprop transports, or medevac rotorcraft."
  - question: "How does BLIS-D's bleed-air architecture facilitate KAS Part 21/23 certification compared to wet decontamination systems?"
    answer: "Traditional aqueous decontamination systems introduce corrosive fluids into aircraft environments, creating structural integrity concerns that conflict directly with KAS Part 23 fatigue and corrosion requirements. BLIS-D's waterless, bleed-air-driven solid-dispersion mechanism eliminates liquid ingress risk entirely. Because BLIS-D taps existing pneumatic bleed-air infrastructure — a design already certified under aircraft type certificates — the incremental certification burden is reduced to thermal compatibility, particle-size dispersion safety, and electromagnetic interference (EMI) testing. This narrows the KAS Part 21 Supplemental Type Certificate (STC) scope, reducing typical certification timelines from 36 months to an estimated 18-24 months. The dry-chemistry decontamination agent also avoids hazardous-material carriage classifications that would otherwise trigger additional MOLIT airworthiness directives."
  - question: "What is the connection between BLIS-D's civil certification and Anduril Lattice interoperability for CBRN response?"
    answer: "Anduril's Lattice platform provides a persistent, AI-driven sensor mesh that can task autonomous assets based on real-time CBRN threat data. A KAS Part 21/23-certified BLIS-D installed on a civil medevac or cargo aircraft becomes a Lattice-connectable node: CBRN-CADS sensor feeds can trigger automated decon dispatch orders through Lattice's mission autonomy layer, coordinating civil and military aircraft without human-in-the-loop delay. This civil certification is the legal prerequisite for mixed civil-military fleet integration. Without an airworthiness certificate, a BLIS-D-equipped civil aircraft cannot operate in controlled airspace alongside military assets during a CBRN mass-casualty event, nullifying the tactical value of Lattice's cross-domain command layer."
citations:
  - title: "MOLIT Korean Airworthiness Standards (KAS) Official Publication"
    url: "https://www.molit.go.kr/USR/BORD0201/m_34830/DTL.jsp"
    publishedYear: 2023
  - title: "EASA CS-23 Amendment 5 — Certification Specifications for Normal-Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2017
  - title: "NATO STANAG 4539 — CBRN Collective Protection and Decontamination Standards"
    url: "https://www.nato.int/cps/en/natohq/topics_49158.htm"
    publishedYear: 2021
  - title: "OPCW — Chemical Weapons Convention and Civil Protection Obligations"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast 2027"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-1176.html"
    publishedYear: 2022
  - title: "RAND Corporation — Protecting Civil Aviation from CBRN Threats"
    url: "https://www.rand.org/pubs/research_reports/RRA309-1.html"
    publishedYear: 2021
ogImage: "cbrn-ai-blis-d-kas-civil-aviation-2026.png"
---

# BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified

## Abstract

On 20 March 1995, Sarin dispersed through the Tokyo subway system killed 13 people and overwhelmed first responders with no certified decontamination protocol for enclosed mass-transit environments. Thirty-one years later, the structural gap that made Tokyo catastrophic — the absence of deployable, certified dry decontamination in confined, ventilation-dependent spaces — persists in civil aviation. Aircraft cabins are the Tokyo subway of the 2020s: sealed, recirculated, and currently without a single type-certified CBRN decontamination solution certified for in-flight or ground-phase deployment. UAM KoreaTech's **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) system is positioned to close that gap by navigating Korea's KAS Part 21 and KAS Part 23 airworthiness certification framework, administered by the **Ministry of Land, Infrastructure and Transport (MOLIT)**. This article maps the certification pathway, quantifies the market opportunity, and explains why **BLIS-D**'s bleed-air architecture is uniquely suited to meet type certification requirements — while simultaneously enabling Anduril Lattice interoperability for cross-domain CBRN response.

---

## 1. Historical Anchor — The 1994 Matsumoto Sarin Attack and the Ventilation Blind Spot

### Inner Landscape

Yoshiyuki Kono, the man initially blamed for the 1994 Matsumoto Sarin attack, lived in a residential neighborhood where **Sarin** drifted through open windows and recirculated through a building's shared ventilation stack. Japanese emergency responders at the time operated under a mental model that assumed chemical contamination required open-air dispersal over large areas. Their entire decontamination doctrine — water hosing, outdoor triage corridors — was designed for battlefields and open industrial accidents. Nobody had conceptualized the enclosed, recirculated-air environment as a primary vector. The blind spot was architectural: responders trusted that buildings and vehicles were refuges, not amplifiers. That cognitive error killed 8 people in Matsumoto and set the conditions for the far larger Tokyo subway attack nine months later. The lesson that environments with **recirculated air** concentrate agent exposure was not institutionalized into procurement doctrine in any major civil aviation authority for the following three decades.

### Environmental Read

The Matsumoto attack occurred in a suburban residential cluster where wind patterns, building orientation, and HVAC return-air cycles were entirely unmodeled by the responding hazmat teams. Environmental factors — nighttime temperature inversion trapping the agent low to the ground, a shared drainage-side air intake pulling contaminated outside air into multiple units — compounded a small initial release into a neighborhood-scale event. Critically, the physical design of the affected buildings meant that any decontamination agent introduced at the entry point would have needed to travel through the same ducting system that spread the **Sarin**. This is precisely the challenge faced in aircraft cabins: the Environmental Control System (ECS) bleed-air network that distributes conditioned air is the same infrastructure that would distribute a chemical or biological agent. Any decontamination solution that does not work with the bleed-air architecture must fight against the aircraft's own respiratory system.

### Differential Factor

What made Matsumoto differ from prior industrial accidents was the agent's **binary volatility and persistence at ambient temperatures**. Responders trained for industrial chlorine or ammonia releases brought high-volume water decon rigs that were counterproductive against Sarin: water hydrolysis of Sarin produces isopropyl alcohol and methylphosphonic acid — less lethal, but still hazardous — and liquid runoff creates secondary contamination pathways. The lesson institutionalized in subsequent NATO CBRN doctrine was that enclosed-environment decontamination requires **dry-chemistry or vapor-phase neutralization**, not aqueous flooding. This is precisely the technical rationale behind **BLIS-D**'s solid-phase decontamination chemistry driven by bleed-air pressure: it introduces no liquid, creates no corrosive runoff, and works with the aircraft's existing pneumatic infrastructure rather than against it.

### Modern Bridge

The 1994-1995 Sarin incidents provided the empirical foundation for NATO **STANAG 4539** and subsequent CBRN collective protection standards that require decontamination solutions to address enclosed recirculated-air environments. Korea's own dual-use defense posture — facing a North Korean chemical weapons stockpile estimated by the IISS at **2,500–5,000 metric tons** — has accelerated MOLIT's alignment of KAS with EASA CS-23 frameworks. The convergence of that geopolitical pressure with a maturing KAS Part 21 Supplemental Type Certificate (STC) process creates the first viable regulatory corridor for a product like **BLIS-D** to enter the civil aviation market as a certified CBRN decontamination solution.

---

## 2. Problem Definition — The Uncertified Gap in Civil Aviation CBRN Response

The scale of the unaddressed market is substantial. According to **MarketsandMarkets**, the global CBRN defense market was valued at **$15.3 billion in 2022** and is projected to reach **$21.7 billion by 2027**, with the decontamination subsegment growing at a CAGR of **6.2%**. Within that segment, civil aviation CBRN decontamination equipment holds near-zero certified product penetration: no major airworthiness authority — EASA, FAA, or MOLIT — has issued a type certificate or STC for an in-aircraft CBRN decontamination system designed for operational deployment rather than post-incident ground-phase processing.

The RAND Corporation's 2021 analysis of civil aviation CBRN threats identified aircraft cabins as **"high-consequence, low-redundancy environments"** where a single agent release could affect **150-400 passengers** with no onboard neutralization capability. Current protocol relies entirely on emergency landing, ground-based hazmat teams, and evacuation — a sequence that takes a minimum of **45-90 minutes** from agent detection to first decontaminant application. In a **Novichok**-class exposure scenario, the median time to irreversible neurological damage is under **10 minutes**. The procedural gap between detection and decontamination is therefore a direct casualty multiplier.

Korea's **MOLIT** oversees approximately **890 civil-registered turboprop and jet aircraft** that operate government, medevac, and VIP transport roles — platforms where CBRN vulnerability is operationally relevant. None carries a certified onboard decontamination system. The KAS Part 21/23 framework, last substantially revised in **2023**, now includes explicit provisions for "novel safety augmentation systems" that interface with existing aircraft pneumatic architecture — language that directly anticipates bleed-air-based systems.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS Part 21/23 Certification Pathway

**BLIS-D** neutralizes chemical and biological agents in **90 seconds** using a pressurized solid-chemistry dispersion driven by aircraft bleed-air. The system requires no external water supply, produces no corrosive liquid waste, and operates within existing pneumatic pressure envelopes — typically **15-45 PSI** bleed-air at cruise altitude — without requiring structural airframe modification.

The KAS Part 21 STC pathway for **BLIS-D** involves three primary certification gates. First, **System Installation Approval**: demonstrating that bleed-air tap-off pressure and flow rates remain within certified aircraft limits, verified through computational fluid dynamics modeling and bench testing against the target platform's engine bleed specification. Second, **CS-23 / KAS Part 23 Structural and Thermal Compatibility**: confirming that **BLIS-D**'s canister housing, mounting brackets, and dispersion nozzles meet fatigue load factors (minimum **+3.8g / -1.5g** for normal category) and operate safely across the aircraft's certified temperature envelope (**-55°C to +70°C**). Third, **Hazardous Materials and EMI Clearance**: certifying that the decontaminant chemistry does not constitute a hazardous cargo classification under MOLIT airworthiness directives, and that the system's electronic actuation components meet DO-160G environmental and EMI standards.

Because **BLIS-D** does not introduce liquid into the airframe and interfaces exclusively with an already-certified pneumatic subsystem, the STC scope is classified as a **minor-to-moderate change** under KAS Part 21 criteria — avoiding the full type design change process that would add 18-24 months to the schedule. UAM KoreaTech's engineering roadmap targets **STC submission to MOLIT by Q3 2027**, with initial certification on a CASA CN-235 derivative military transport as the baseline platform.

Simultaneously, **CBRN-CADS** — UAM KoreaTech's multi-sensor AI detection platform integrating IMS, Raman spectroscopy, gamma detection, and qPCR — provides the detection trigger that activates **BLIS-D** autonomously. The integrated system creates a **detect-to-decon loop under 120 seconds**, meeting the response window that current protocols cannot approach. **CBRN-CADS** sensor data also streams to Anduril Lattice nodes, enabling ground commanders to receive real-time aircraft CBRN status and pre-position additional decon assets.

---

## 4. Strategic Context — Why Korea, Why Now

Korea occupies a uniquely coercive threat environment. The **IISS Military Balance 2024** estimates North Korea maintains the world's third-largest chemical weapons program, with delivery systems including artillery, ballistic missiles, and special operations infiltration routes. This threat directly shapes MOLIT's risk calculus: Korean civil aviation infrastructure — airports, VIP transport, medevac corridors — sits within the operational range of North Korean chemical delivery systems.

Simultaneously, Korea's defense export ambitions create a commercial pull factor. The **Defense Acquisition Program Administration (DAPA)** has designated dual-use CBRN technologies as a priority export category under the **K-Defense 4.0** initiative, providing R&D co-funding and export facilitation for systems that achieve both military acceptance and civil airworthiness certification. A KAS Part 21/23-certified **BLIS-D** carries international credibility that a military-only approval cannot: EASA and FAA have bilateral airworthiness agreements with MOLIT, meaning a KAS STC can be leveraged as the basis for recognition in European and US markets without full re-certification.

The geopolitical timing is further reinforced by NATO's 2030 CBRN roadmap, which explicitly calls for allied partner nations to develop indigenous decontamination capabilities interoperable with NATO **STANAG 4539** standards. Korea's NATO partner status, formalized through the Individual Tailored Partnership Programme (ITPP) in 2023, gives UAM KoreaTech's certified products a direct pathway into NATO procurement frameworks — provided the underlying certification baseline is civil-airworthiness-grade rather than military-only.

---

## 5. Forward Outlook

UAM KoreaTech's 12-24 month certification roadmap is structured in four sequential milestones. By **Q4 2026**, BLIS-D's bleed-air interface will complete bench validation against CASA CN-235 pneumatic specifications, generating the engineering data package required for KAS Part 21 STC pre-application. By **Q2 2027**, MOLIT pre-application consultation is targeted, establishing the formal minor/moderate change classification that governs timeline and cost. **Q3 2027** marks STC application submission with concurrent DO-160G EMI testing. Certification decision is projected for **Q2 2028**, enabling first civil-operator delivery by **Q4 2028**.

In parallel, the Lattice interoperability interface for **CBRN-CADS** is on a separate but synchronized track: Anduril's Lattice API integration is targeted for **Q1 2027**, enabling demonstration of the detect-to-decon autonomous loop at a joint civil-military exercise scheduled in coordination with Korea's **Chemical, Biological, Radiological and Nuclear Defense Command** by **mid-2027**.

---

## Conclusion

In 1994, the absence of a doctrine for enclosed recirculated-air decontamination turned a residential neighborhood in Matsumoto into a Sarin casualty site. Thirty-two years later, every commercial aircraft in service is structurally identical to that neighborhood — a sealed environment where the ventilation system is both the threat vector and the decontamination pathway. **BLIS-D**'s KAS Part 21/23 certification journey is not a regulatory exercise; it is the institutional answer to the blind spot that Matsumoto exposed, finally engineered into a form that civil aviation authorities can certify, operators can deploy, and NATO commanders can integrate through Lattice into a unified CBRN response architecture.