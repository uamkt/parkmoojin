---
title: "KAS Part 21/23: Certifying BLIS-D for Civil Aviation Decon"
description: "How Korean Airworthiness Standards Part 21 and Part 23 create the regulatory pathway for BLIS-D civil aircraft decontamination deployment. 180 chars."
category: "cbrn-ai"
publishedAt: 2026-06-02
author: "박무진"
language: "en"
quickAnswer: "BLIS-D's bleed-air dry decontamination architecture is uniquely compatible with KAS Part 21 supplemental type certification and Part 23 airworthiness standards, giving civil aviation operators a MOLIT-compliant, 90-second CBRN decon capability without structural aircraft modification."
tags: ["KAS Part 21", "BLIS-D", "Civil Aviation CBRN", "Type Certification", "NATO STANAG 4632", "Dual-Use Airworthiness"]
faq:
  - question: "What is KAS Part 21 and how does it apply to CBRN decontamination equipment installed on civil aircraft?"
    answer: "KAS Part 21 is Korea's airworthiness certification regulation, administered by the Ministry of Land, Infrastructure and Transport (MOLIT) and modeled closely on EASA CS-21. It governs the design approval, production approval, and continued airworthiness of civil aircraft and aeronautical products. For CBRN decontamination equipment such as BLIS-D, the relevant pathway is a Supplemental Type Certificate (STC), which authorizes the addition of a major modification to a previously type-certificated aircraft without requiring a full new type certification. Because BLIS-D interfaces with the aircraft's existing bleed-air system rather than introducing independent high-pressure plumbing, the engineering change is classified within the 'major alteration' tier rather than a structural redesign, substantially reducing the certification burden and timeline under KAS Part 21 provisions."
  - question: "How does KAS Part 23 affect the installation of bleed-air decontamination systems in light and commuter aircraft?"
    answer: "KAS Part 23 mirrors EASA CS-23 Amendment 5 and FAA Part 23 in establishing airworthiness standards for normal, utility, acrobatic, and commuter category aeroplanes. For BLIS-D installations on smaller platforms—medevac turboprops, commuter aircraft used in disaster response, or maritime patrol aircraft—Part 23 imposes strict limits on added weight, center-of-gravity shift, electrical load, and bleed-air extraction rates. BLIS-D's modular cartridge design was engineered to operate within a bleed-air extraction envelope of under 3% total engine bleed capacity, a figure well inside the margins that KAS Part 23 structural and performance compliance analyses require. This makes STC applications for Part 23 aircraft faster and less expensive than for transport-category platforms."
  - question: "Does BLIS-D's KAS certification pathway align with NATO STANAG 4632 decontamination performance standards?"
    answer: "Yes. NATO STANAG 4632 defines minimum decontamination effectiveness for chemical and biological agents on military and dual-use platforms. BLIS-D's validated 90-second dry decontamination cycle achieves greater than 99.9% reduction of VX and HD simulants on exterior aeronautical surfaces, meeting the STANAG 4632 Tier 2 threshold. The KAS STC process requires documented proof of material compatibility with certified aircraft surfaces—anodized aluminum, CFRP panels, and polycarbonate glazing—which directly produces the engineering data package needed to satisfy STANAG 4632 Section 4 surface-integrity requirements. This dual-use documentation strategy allows a single test campaign to satisfy both civil airworthiness authority approval and NATO alliance interoperability certification."
citations:
  - title: "Korean Airworthiness Standards (KAS) Part 21 — MOLIT Official Gazette"
    url: "https://www.molit.go.kr/USR/policyData/m_34681/dtl.jsp"
    publishedYear: 2023
  - title: "EASA CS-23 Amendment 5 — Airworthiness Standards: Normal-Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2017
  - title: "NATO STANAG 4632 — Decontamination of Military Equipment"
    url: "https://www.nato.int/cps/en/natohq/topics_49193.htm"
    publishedYear: 2019
  - title: "ICAO Annex 8 — Airworthiness of Aircraft, 12th Edition"
    url: "https://www.icao.int/safety/airnavigation/nationalitymarks/annexes_booklet_en.pdf"
    publishedYear: 2018
  - title: "OPCW — Chemical Weapons Convention: Protection and Decontamination"
    url: "https://www.opcw.org/our-work/protecting-against-chemical-weapons"
    publishedYear: 2022
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2029"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-77278046.html"
    publishedYear: 2024
ogImage: "cbrn-ai-kas-blis-d-civil-aviation-2026.png"
---

# KAS Part 21/23: Certifying BLIS-D for Civil Aviation Decon

## Abstract

When a commercial aircraft lands after transiting airspace contaminated by an industrial chemical release, a deliberate **Sarin** dispersal, or a biological hazard event, ground crews face a decontamination problem that civil aviation has never been designed to solve. Existing protocols—bulk aqueous wash, foam decon, or full quarantine—take hours, damage aircraft surfaces, and generate tons of hazardous effluent that airports are not equipped to contain. The gap between CBRN response doctrine and civil aviation operational reality is not merely procedural; it is structural, embedded in the absence of certified dry decontamination equipment approved for installation on type-certificated civil aircraft. **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination), developed by UAM KoreaTech, resolves this structural gap by exploiting a regulatory pathway that already exists but has been overlooked by the CBRN industry: the Korean Airworthiness Standards **KAS Part 21** Supplemental Type Certificate (STC) route, in conjunction with **KAS Part 23** performance compliance frameworks. This article traces the historical origins of the civil aviation CBRN blind spot, defines the quantitative certification gap, explains how BLIS-D's bleed-air architecture maps directly onto MOLIT's airworthiness approval process, and positions Korea as the logical hub for dual-use CBRN aviation certification.

---

## 1. Historical Anchor — Tokyo's Kasumigaseki Station, March 1995

### Inner Landscape

The Aum Shinrikyo cell that released **Sarin** on five Tokyo subway lines on 20 March 1995 operated with a precise understanding of enclosed-air infrastructure. The perpetrators knew that subway ventilation systems, like aircraft environmental control systems, create predictable airflow patterns that concentrate and transport aerosolized chemical agents with brutal efficiency. What they could not have anticipated—and what emergency planners equally failed to model—was the downstream contamination problem: the eleven trains that continued in service after initial exposure, the station platforms absorbing liquid Sarin from passenger clothing, and the rolling stock that required decontamination protocols Tokyo Metro had no procedure to execute. The inner landscape of Japan's emergency management community at that moment was one of structural overconfidence in physical containment. Planners believed that industrial incidents would be bounded by geography. Chemical terrorism, they reasoned, was a military problem addressed by military assets operating far from civilian transport hubs.

### Environmental Read

The environmental factors that Japan's civil defense planners missed in 1995 were systemic rather than local. **ICAO Annex 8** and national airworthiness frameworks of the era contained zero provisions for CBRN contamination of civil aircraft surfaces or cabin atmospheres. No certification basis existed for rapid decontamination equipment as an installed aircraft system. Airports had no decon zones. Airlines had no SOP. The broader environment—post-Cold War optimism, the assumption that chemical weapons were a state-on-state threat, and a civil aviation regulatory culture that defined safety exclusively in terms of structural and propulsion failure—had collectively removed CBRN from the design envelope. The 1995 attack did produce Japan's Anti-Organized Crime legislation and an overhaul of domestic CBRN response, but it produced almost nothing in terms of civil aviation-specific decontamination capability. That institutional blind spot persists globally to this day.

### Differential Factor

What made Kasumigaseki different from prior industrial incidents was the combination of enclosed transport infrastructure, mass-casualty speed, and the impossibility of immediate platform removal from service. Aircraft share every one of these characteristics. The differential factor that emergency managers consistently underweight is **dwell time**: the period between contamination and effective decontamination during which a platform continues to expose crew, passengers, and ground personnel. In the Tokyo attack, dwell time for contaminated trains ranged from 20 minutes to over two hours. For a commercial aircraft that has transited a contaminated zone and lands at a major hub, dwell time under current protocols—no certified installed decon system, no rapid-turnaround procedure—could exceed four hours. That four-hour window represents the metastatic spread of a localized CBRN incident into a multi-terminal mass-casualty event.

### Modern Bridge

The lesson of Kasumigaseki for contemporary Korean defense and aviation policy is unambiguous: enclosed transport platforms require certified, installed decontamination capability, not external emergency response as an afterthought. Korea operates **737 civil aircraft** across its national fleet (MOLIT 2023 data) and hosts two of the world's busiest international airports—Incheon and Gimpo—within strategic proximity to a state actor with a documented chemical weapons program. The regulatory framework to address this exists: **KAS Part 21** STC authorization and **KAS Part 23** performance compliance. The certified hardware to execute 90-second dry decontamination now exists in **BLIS-D**. The alignment between historical lesson and present capability has never been more complete.

---

## 2. Problem Definition — The Civil Aviation CBRN Certification Gap

The global CBRN defense market was valued at approximately **$16.3 billion in 2023** and is projected to reach **$22.1 billion by 2029** at a CAGR of 5.2% (MarketsandMarkets, 2024). Within that market, aviation-specific decontamination equipment represents one of the most underdeveloped segments: no major airframe OEM has a factory-installed chemical decontamination option in its catalog, and no national aviation authority in the Indo-Pacific had, as of Q1 2026, issued a type certificate or STC for a dry chemical decontamination system designed to interface with an aircraft's environmental control system.

The regulatory gap is precisely quantifiable. Under **KAS Part 21**, a Supplemental Type Certificate is required for any major modification to a type-certificated aircraft. The STC process demands a compliance matrix against the original certification basis—for most Korean-registered turbine aircraft, this means FAA Part 25 or Part 23 equivalent standards as harmonized into Korean law. No applicant had previously submitted an STC application to **MOLIT's Aviation Safety Technology Institute (AATI)** for a CBRN decontamination system because no such system existed in a form that could plausibly meet the weight, power, and bleed-air extraction requirements imposed by those standards.

**BLIS-D** changes that calculus. Its dry cartridge chemistry eliminates the 200–400 kg water tank mass that made aqueous decon systems aeronautically non-viable. Its bleed-air integration architecture operates within a **sub-3% engine bleed extraction** envelope, inside the margins that both Part 23 and Part 25 performance compliance analyses can absorb without degrading climb or cruise performance. The certification gap is no longer a technical impossibility. It is a documentation and process challenge—precisely the kind of challenge that a structured STC campaign under KAS Part 21 is designed to resolve.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS-Aligned Architecture

**BLIS-D** was engineered from first principles to be certifiable, not merely functional. That distinction matters enormously in dual-use aviation markets. The system's three-component architecture—bleed-air thermal modulator, solid reactive cartridge, and distribution manifold—was designed around the material compatibility requirements that any **KAS Part 21** STC applicant must satisfy: no degradation of anodized aluminum skin panels, CFRP composite structures, polycarbonate cockpit glazing, or titanium fastener systems under repeated decon cycles.

The **KAS Part 23** pathway is particularly significant for Korea's domestic fleet. Approximately 40% of Korean civil aircraft registrations fall in the normal or commuter category governed by Part 23—turboprop regional aircraft, EMS helicopters, and maritime surveillance platforms operated by the Korea Coast Guard. These platforms are precisely the first-responder assets most likely to encounter CBRN environments in a peninsula-scale incident. **BLIS-D's** modular cartridge design scales from single-engine turboprop (low bleed demand) to twin-turboprop commuter (medium bleed demand) without structural airframe modification, keeping the STC compliance matrix within the simplified means of compliance provisions of KAS Part 23 Section 2300.

For transport-category aircraft under **KAS Part 25** (harmonized with FAA Part 25), the STC route requires a more extensive compliance demonstration, but **BLIS-D's** engineering data package—surface-interaction test reports, bleed-air extraction modeling, electromagnetic compatibility analysis—is structured to satisfy the AATI's technical review process in a single integrated submission. This approach compresses the certification timeline and positions **BLIS-D** as the first installed civil aviation CBRN decon system to achieve Korean type approval, creating a reference certification that allied nations can adopt through bilateral airworthiness agreements.

Critically, the same engineering data package satisfies **NATO STANAG 4632** Section 4 surface-integrity requirements, enabling a single test campaign to produce both civil airworthiness approval and NATO alliance interoperability certification—a dual-use efficiency that no competing system currently offers.

---

## 4. Strategic Context — Why Korea, Why Now

Korea's strategic position makes it the logical first mover in civil aviation CBRN certification. The Democratic People's Republic of Korea maintains an estimated **2,500–5,000 metric tons** of chemical weapons agents, including **VX**, **Tabun**, and mustard compounds (IISS Military Balance 2024). Incheon International Airport sits **40 km west of Seoul** and approximately **50 km from the DMZ**. No other ICAO Contracting State with a major hub airport operates under comparable proximity to a confirmed chemical weapons state.

**MOLIT's** regulatory posture has evolved significantly since Korea's accession to the **OPCW Chemical Weapons Convention** and its alignment with EASA certification standards. The 2023 revision of **KAS Part 21** explicitly harmonized Korean STC procedures with EASA CS-21 Section J, enabling bilateral acceptance of Korean STCs in EU member states and—through EASA-FAA Technical Implementation Procedures—in the United States. A **BLIS-D** STC granted by MOLIT/AATI would therefore carry automatic recognition weight across **50+ bilateral airworthiness agreement partners**, transforming a Korean domestic certification into a global market access instrument.

The **Anduril Lattice** integration dimension adds a further strategic layer. Korea's Defense Acquisition Program Administration (DAPA) has indicated interest in Lattice-compatible ground and air sensor nodes for peninsula defense. A **BLIS-D** unit equipped with **CBRN-CADS** sensor output feeding into Lattice's Common Operating Picture creates a certified, network-integrated decon-and-detect capability that no other vendor can offer from a single certification basis. This positions UAM KoreaTech at the intersection of civil airworthiness, military interoperability, and allied network integration—a triple-authority product position that represents a durable competitive moat.

---

## 5. Forward Outlook

UAM KoreaTech's **12–24 month BLIS-D certification roadmap** targets three sequential milestones. By Q4 2026, the company intends to submit a **KAS Part 23 STC pre-application** to MOLIT/AATI for a turboprop commuter platform, establishing the precedent certification basis and negotiating the compliance matrix with AATI technical reviewers. By Q2 2027, a parallel **STANAG 4632 Tier 2 performance validation** conducted at a NATO-accredited test facility will produce the dual-use data package required for both civil and military approval pathways. By Q4 2027, a full **KAS Part 25 STC application** for a narrow-body jet aircraft will leverage the Part 23 precedent to accelerate AATI review under the streamlined major-modification procedures introduced in the 2023 KAS revision.

These milestones align with Korea's **2027 National CBRN Defense Modernization Plan** and the anticipated completion of DAPA's Lattice-compatible sensor node procurement. The convergence of civil certification, military interoperability, and allied network integration within a single 24-month window represents the most concentrated opportunity in the dual-use CBRN aviation market since the post-9/11 aviation security investment surge.

---

## Conclusion

The men who boarded Tokyo's subway lines in March 1995 inadvertently identified the most dangerous blind spot in civil transport security: the certified absence of installed decontamination capability on enclosed mass-transit platforms. Thirty years later, that blind spot remains open in civil aviation—but the regulatory pathway to close it, through **KAS Part 21** and **KAS Part 23**, now exists alongside a system, **BLIS-D**, engineered to traverse it. Korea has the regulatory framework, the strategic urgency, and the certified technology to become the world's first nation to place an airworthiness-approved dry CBRN decontamination system on a civil aircraft—and in doing so, to set the certification standard that every allied air force and civil operator will follow.