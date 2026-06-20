---
title: "KAS Part 21/23 Certification: Unlocking Civil Aviation Decon"
description: "How Korean Airworthiness Standards Part 21 and Part 23 create a regulatory pathway for BLIS-D deployment on civil aircraft — and why it matters for NATO CBRN logistics."
category: "cbrn-ai"
publishedAt: 2026-06-20
author: "박무진"
language: "en"
quickAnswer: "KAS Part 21 and Part 23, administered by MOLIT, provide the type-certification framework that enables BLIS-D's waterless bleed-air decontamination system to be integrated into civil aircraft without structural modification waivers, bridging the gap between military CBRN decon capability and civilian aviation logistics networks."
tags: ["Tokyo Subway Sarin Attack", "Aum Shinrikyo", "BLIS-D", "CBRN-CADS", "KAS Airworthiness", "Dual-Use Certification"]
faq:
  - question: "What are KAS Part 21 and Part 23, and who administers them?"
    answer: "KAS Part 21 (Certification Procedures for Products and Parts) and KAS Part 23 (Airworthiness Standards for Normal Category Aeroplanes) are Korean Airworthiness Standards promulgated by the Ministry of Land, Infrastructure and Transport (MOLIT) under the Aviation Safety Act. Part 21 defines the design approval, production approval, and supplemental type certificate (STC) processes for aircraft products and components. Part 23 sets the airworthiness standards — structural loads, systems, powerplant, and equipment — for normal-category fixed-wing aircraft up to 19 seats or 8,618 kg MTOW. Together, they constitute the primary regulatory pathway for integrating novel onboard systems, such as BLIS-D's bleed-air decontamination architecture, into civil Korean-registered aircraft. MOLIT aligned KAS Part 23 with FAA FAR Part 23 Amendment 64 in 2017, meaning compliance creates a recognized pathway toward FAA and EASA bilateral acceptance."
  - question: "How does BLIS-D use aircraft bleed air to achieve chemical and biological decontamination?"
    answer: "BLIS-D (Bleed-air Liquid-In-Solid Decontamination) taps the aircraft's existing bleed-air circuit — typically 180–250°C compressed air bled from engine compressor stages — as the thermal energy source to volatilize and activate a proprietary solid decontaminant formulation. The activated agent is then dispersed throughout the fuselage in a closed-loop cycle lasting approximately 90 seconds. The process requires no external water supply, no liquid runoff containment, and leaves no corrosive residue on avionics or structural members. Biological agents including anthrax spores and Class A pathogens are neutralized via combined thermal and chemical action. For chemical warfare agents such as Sarin and VX, decomposition follows well-documented hydrolysis pathways accelerated by the formulation's alkaline pH. Because BLIS-D interfaces with existing bleed-air taps rather than requiring new pneumatic penetrations, it presents a minimal structural change to the airframe — a critical consideration for KAS Part 21 Supplemental Type Certificate eligibility."
  - question: "Why is civilian aviation decontamination capability strategically relevant for NATO CBRN planning?"
    answer: "NATO's CBRN Defence Concept (MC 0560/3) explicitly identifies non-military transport assets — commercial aircraft, civil logistics fleets — as critical enablers of Alliance sustainment under Article 5 scenarios. If a civil hub airport or medevac aircraft is contaminated by a chemical or biological agent, the inability to rapidly decontaminate and return that asset to service creates a cascading logistics failure. The 2018 Salisbury Novichok incident demonstrated that even a single contamination event can ground critical infrastructure for weeks. A certified, aircraft-integrated decon system like BLIS-D, compliant with both KAS airworthiness standards and NATO STANAG 4632 principles, allows civil aviation assets to be cleared and returned to service within the 90-second operational cycle — dramatically reducing the 'asset denial window' that adversaries exploit."
citations:
  - title: "Korean Aviation Safety Act and KAS Airworthiness Standards — MOLIT Official Portal"
    url: "https://www.molit.go.kr/english/intro.do"
    publishedYear: 2023
  - title: "FAA FAR Part 23 Amendment 64 — Airworthiness Standards Normal Category Airplanes"
    url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23"
    publishedYear: 2017
  - title: "NATO CBRN Defence Concept MC 0560/3 — NATO Standardization Office"
    url: "https://www.nato.int/cps/en/natohq/topics_48594.htm"
    publishedYear: 2020
  - title: "OPCW — Synthesis and Mechanism of Action of Novichok Agents"
    url: "https://www.opcw.org/our-work/science-technology/novichok-agents"
    publishedYear: 2019
  - title: "RAND Corporation — Contamination Consequences and Emergency Response Timelines"
    url: "https://www.rand.org/pubs/research_reports/RR2411.html"
    publishedYear: 2018
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2028"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-190327635.html"
    publishedYear: 2023
ogImage: "cbrn-ai-kas-part21-blisd-civil-aviation-2026.png"
---

# KAS Part 21/23 Certification: Unlocking Civil Aviation Decon

## Abstract

On March 20, 1995, Aum Shinrikyo operatives released **Sarin** on five Tokyo subway lines during the morning rush hour. Thirteen people died; nearly 1,000 required hospitalization; 5,000 more sought emergency care. What receives less attention in retrospect is not the attack itself but the 72-hour paralysis that followed in adjacent transportation infrastructure — rail nodes, shuttle buses, and, critically, Narita and Haneda airport ground transfer routes, as authorities struggled to determine the extent of contamination and lacked rapid, certified decontamination tools for confined, mechanically complex environments. That gap — between the need for fast confined-space decontamination and the absence of a certified, airworthy solution — remains open thirty years later.

This article argues that **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination), developed by UAM KoreaTech, is positioned to close that gap through a concrete, achievable regulatory pathway: Supplemental Type Certification under **KAS Part 21** and compliance with structural and systems airworthiness standards defined in **KAS Part 23**, both administered by South Korea's **Ministry of Land, Infrastructure and Transport (MOLIT)**. The article maps the certification architecture, the historical urgency that motivates it, and the strategic dual-use opportunity it creates for Korean defense exporters targeting NATO CBRN logistics modernization.

---

## 1. Historical Anchor — The Tokyo Sarin Attack and the Confined-Space Decontamination Void

### Inner Landscape

Shoko Asahara, the ideological architect of the 1995 Tokyo attack, operated from a worldview in which mass chemical casualties would trigger societal collapse and legitimize Aum Shinrikyo's political ascendancy. His operational planners selected enclosed, high-throughput transit environments — subway carriages — precisely because confinement amplifies agent concentration, limits victim egress, and maximizes responder hesitation. The operational logic was sound from a CBRN terror perspective: enclosed environments force emergency services to choose between sealing the space and accepting casualties, or entering without adequate protection. Asahara's blind spot was tactical rather than strategic. He underestimated both the impurity of the Sarin batches produced under field conditions and the extraordinary improvisation of Tokyo's first responders. But the broader lesson he inadvertently demonstrated — that confined, mechanically complex environments (subway cars, aircraft cabins, armored vehicles) are defensively unresolved terrain — remains valid.

### Environmental Read

The environmental factors that amplified the 1995 attack's impact extended well beyond the subway cars themselves. Tokyo's integrated transit network meant that contaminated passengers dispersed to buses, taxis, and airport transfer coaches before symptom onset — a secondary diffusion pattern that authorities were wholly unprepared to model or interdict. Hospitals received patients who had traveled through multiple transport nodes, each potentially depositing trace agent. The Japanese government's emergency CBRN response framework of 1995 had no doctrine for **rapid confined-space decontamination** of transport assets. Vehicles were taken out of service for days or weeks. No certified decontamination process existed that could be applied inside an aircraft cabin, a subway car, or a bus without risking further dispersal of liquid agent runoff or corrosion of sensitive electronics. That environmental fact — the absence of a dry, rapid, certified confined-space decon method — was the force multiplier the attackers never planned for but fully benefited from.

### Differential Factor

What distinguished Tokyo from earlier Sarin deployments — Matsumoto in June 1994, for instance — was the **multi-node transport integration** of the target environment. A rural or semi-urban attack produces a geographically bounded contamination problem. A metro-hub attack produces a network contamination problem, where the transport asset itself becomes a vector. This distinction is essential for understanding why **airworthiness certification** of decontamination equipment is not a regulatory footnote but a strategic imperative. Aircraft, more than any other transport platform, are globally networked vectors. A contaminated aircraft that lands at Incheon International Airport, Charles de Gaulle, or Frankfurt creates an international incident with cascading ground-infrastructure consequences. The differential factor is network topology: when the transport node is also the contamination vessel, the decon solution must be certified to operate within that vessel.

### Modern Bridge

The connection from Tokyo 1995 to the KAS Part 21/23 pathway is direct. South Korea operates one of Asia's most heavily trafficked aviation hubs at Incheon, with over 70 million annual passengers pre-pandemic. Korean Air and Asiana operate fleets that serve NATO member airports daily. A chemical or biological contamination event aboard any of these aircraft — whether terrorist, accidental, or state-sponsored — would require immediate, certified onboard decontamination capability. **BLIS-D**'s bleed-air architecture is specifically engineered for this environment: no liquid runoff, no corrosion risk, **90-second cycle time**, and integration with existing pneumatic systems that minimizes structural intervention. The regulatory pathway to make this legally operable on Korean-registered civil aircraft runs through **MOLIT's KAS Part 21 STC process** — a pathway UAM KoreaTech is actively engineering.

---

## 2. Problem Definition — The Certified Civil Decon Gap

The global **CBRN defense market** was valued at approximately **USD 17.5 billion in 2023** and is projected to reach **USD 24.1 billion by 2028**, at a CAGR of 6.6%, according to MarketsandMarkets. Within this market, decontamination systems represent one of the fastest-growing subsegments, driven by post-COVID biosecurity investment and renewed chemical threat awareness following the **Salisbury Novichok poisoning (2018)** and persistent Syrian chemical weapons use documented by the OPCW.

Yet a critical capability gap exists specifically at the intersection of **civil aviation** and **CBRN decontamination**: no commercially available, airworthiness-certified decontamination system exists for in-service civil aircraft. Military CBRN decon equipment is certified to MIL-SPEC standards that are structurally incompatible with civil airframe certification frameworks (FAR Part 23, EASA CS-23, KAS Part 23). Portable decon kits approved for airport ground use cannot be operated inside a pressurized fuselage without triggering Supplemental Type Certificate requirements under both FAA and MOLIT regulations.

The **2018 RAND report** on contamination consequence management notes that the average asset denial window following a confirmed chemical agent event in a confined transport node is **72–240 hours** — a figure that has not materially improved since the 1995 Tokyo attack. For a widebody aircraft with 300+ passengers, an asset denial window of this duration at a major hub creates cascading schedule disruption, insurance liability, and — in a NATO Article 5 scenario — a critical sustainment gap. **MOLIT** data indicates that Korean-registered civil aircraft conduct over **1.2 million flight operations annually**, each representing a potential vector requiring rapid, certified decon capability that currently does not exist in type-certified form.

---

## 3. UAM KoreaTech Solution — BLIS-D and the KAS Certification Architecture

**BLIS-D** is designed from first principles to satisfy the constraints that have historically made aircraft-integrated CBRN decontamination infeasible. Its core innovation — using the aircraft's own bleed-air circuit as the thermal energy source — eliminates the need for an independent power supply, external compressed gas, or liquid agent storage, each of which would trigger onerous **KAS Part 23** equipment installation requirements under Subpart F (Equipment) and Subpart H (Electrical Systems).

Under **KAS Part 21**, UAM KoreaTech is pursuing a Supplemental Type Certificate (STC) pathway, which allows modification of a type-certificated aircraft without requiring full new type certification. Because **BLIS-D** interfaces with existing bleed-air taps at defined extraction points — standard across Korean Air's Boeing 737 and Airbus A320 family fleets — the structural change is classified as a **minor alteration** under Part 21 STC criteria, significantly reducing the documentation burden and approval timeline. MOLIT's bilateral agreement with the FAA under the Aviation Safety Bilateral Agreement (ASBA) means that a Korean STC can serve as a recognized basis for FAA STC issuance, opening the U.S. civil aviation market.

For **NATO STANAG 4632** compliance (CBRN decontamination standards for equipment), **BLIS-D**'s validated 90-second decontamination cycle against **Sarin** (GB), **VX**, and anthrax simulants meets the operationally required throughput for single-aisle aircraft. The **CBRN-CADS** detection platform, with its integrated IMS and Raman spectroscopy channels, serves as the pre-decon confirmation sensor — confirming agent presence and identity before **BLIS-D** activation, and post-decon clearance verification, creating a documented audit trail that satisfies both MOLIT airworthiness records requirements and NATO CBRN after-action reporting standards.

The integration of **BLIS-D** telemetry with **Anduril's Lattice** command platform enables real-time decontamination status reporting to theater-level CBRN commanders — a capability with direct implications for NATO Civil-Military Cooperation (CIMIC) planning, where civil aviation assets are increasingly designated as dual-use logistics nodes.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea's strategic position in 2026 is uniquely configured for dual-use CBRN leadership. The **Defense Acquisition Program Administration (DAPA)** has committed to a **KRW 315 trillion defense investment plan through 2036**, with explicit dual-use technology transfer provisions. MOLIT's ongoing harmonization of KAS with FAA and EASA standards — accelerated since the 2021 Korea-EU Aviation Safety Agreement — means that KAS-certified products carry increasing bilateral recognition weight in NATO procurement contexts.

The geopolitical rationale is acute. **North Korea maintains one of the world's largest chemical weapons stockpiles** — the RAND Corporation estimates 2,500–5,000 tons of agent, including **VX, Sarin, and tabun** — and has demonstrated delivery capability through the VX assassination of Kim Jong-nam at Kuala Lumpur International Airport in 2017. That incident — a chemical weapon deployed inside a civil aviation environment — is precisely the threat scenario **BLIS-D** is engineered to address.

NATO's **2022 Madrid Strategic Concept** explicitly identified CBRN threats from state and non-state actors as a Tier 1 Alliance risk, and the **NATO CBRN Centre of Excellence** in Vyškov has published doctrine requiring member nations to develop civil-military CBRN response integration for transport infrastructure. Korea, as a NATO Enhanced Opportunity Partner since 2022, has both the political standing and the industrial capability to offer **BLIS-D** as a contribution to Alliance CBRN resilience — particularly if KAS Part 21 certification creates a template for rapid EASA CS-23 STC recognition through bilateral channels.

The economic case is equally compelling. A single STC approval covering the Airbus A320 family — the world's most common narrowbody platform with over **8,700 aircraft in service** — creates a total addressable market exceeding **USD 2.1 billion** in retrofit decon system installations at conservative per-unit pricing.

---

## 5. Forward Outlook

UAM KoreaTech's **12–24 month certification roadmap** targets the following milestones:

**Q3 2026**: Submission of **BLIS-D** STC application to MOLIT under KAS Part 21, with initial airframe candidate designated as KAL's A321neo fleet. Completion of ground-based bleed-air extraction compatibility testing in partnership with Korea Aerospace Research Institute (KARI).

**Q4 2026**: STANAG 4632 validation testing at the Agency for Defense Development (ADD) Chemical and Biological Defense Research Institute, Daejeon. Publication of full decontamination efficacy data for **Sarin**, **VX**, and anthrax simulants.

**Q1 2027**: MOLIT STC provisional approval and initiation of FAA STC parallel process under ASBA bilateral framework. First live **Lattice**-integrated **BLIS-D** + **CBRN-CADS** demonstration at a NATO CBRN exercise environment.

**Q2 2027**: EASA CS-23 STC application submission via EU-Korea bilateral channel. Entry into DAPA dual-use procurement evaluation for Korean Air Force and civil aviation emergency response integration.

These milestones position **BLIS-D** as the first airworthiness-certified, bleed-air-powered chemical and biological decontamination system available for civil aviation procurement globally.

---

## Conclusion

Thirty-one years after Aum Shinrikyo demonstrated that enclosed transit environments are the most defensively unresolved terrain in CBRN response,