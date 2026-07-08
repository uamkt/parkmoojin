---
title: "BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified"
description: "How UAM KoreaTech's BLIS-D bleed-air decontamination system aligns with KAS Part 21 and Part 23 airworthiness standards for civil aviation deployment in Korea and NATO markets."
category: "cbrn-ai"
publishedAt: 2026-07-08
author: "박무진"
language: "en"
quickAnswer: "BLIS-D's waterless bleed-air decontamination architecture is structurally compatible with KAS Part 21 type certification and Part 23 airworthiness requirements governed by MOLIT, enabling civil aviation deployment pathways alongside existing military STANAG compliance and Anduril Lattice integration."
tags: ["KAS Part 21", "Tokyo Subway Attack", "BLIS-D", "CBRN-CADS", "Type Certification", "NATO STANAG"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 is South Korea's airworthiness certification regulation, administered by MOLIT (Ministry of Land, Infrastructure and Transport), governing the design approval and production of aircraft and aeronautical products. For CBRN decontamination equipment like BLIS-D, achieving KAS Part 21 type certification means the system has been formally evaluated for structural integrity, operational safety, and compatibility with host aircraft systems — including bleed-air interfaces. This certification is not merely a regulatory checkbox; it is a market-access gateway for civil aviation operators in Korea and a recognized equivalency basis under bilateral aviation safety agreements with EASA and the FAA. Without it, dual-use decon equipment remains confined to military platforms. With it, commercial airlines, air ambulance fleets, and government transport operators can legally integrate BLIS-D into their airworthiness baseline, dramatically expanding the addressable market and creating persistent revenue streams outside defense procurement cycles."
  - question: "How does KAS Part 23 apply to BLIS-D integration on smaller civil aircraft?"
    answer: "KAS Part 23 governs airworthiness standards for normal, utility, acrobatic, and commuter category aeroplanes — broadly analogous to FAR Part 23 in the United States and CS-23 under EASA. For BLIS-D, Part 23 compliance is relevant when the system is installed on light transport aircraft, turboprop commuters, or government liaison platforms that fall below the large-aircraft threshold defined under KAS Part 25. The regulation specifies structural load limits, electrical system compatibility, emergency procedures integration, and human factors requirements that any supplemental type certificate (STC) applicant must satisfy. BLIS-D's compact form factor and bleed-air-native architecture — drawing thermally conditioned pressurized air already present in the aircraft's pneumatic system rather than carrying independent propellant — reduces the electrical and weight penalty typically associated with wet decon systems, making Part 23 compliance technically achievable without major airframe modification."
  - question: "How does BLIS-D's NATO STANAG compliance relate to Korean civil airworthiness certification?"
    answer: "NATO STANAG 4632 and associated CBRN defense standards define operational performance requirements for decontamination systems used on military platforms, including throughput rates, agent coverage, and personnel safety margins. KAS Part 21 and Part 23 address a different but partially overlapping domain: structural integration safety, system reliability, and airworthiness maintenance. The two frameworks are not redundant — they are complementary layers. A system that satisfies STANAG performance criteria but lacks civil airworthiness certification cannot legally operate on civil-registered aircraft, even in crisis conditions. Conversely, a certified system with no STANAG validation cannot be procured under NATO defense contracts. BLIS-D is engineered to satisfy both simultaneously, giving procurement officers a single hardware solution that crosses the civil-military divide — critical for dual-use platforms such as head-of-state transport aircraft, medevac turboprops, and government VIP jets that operate under civil registration but face military-grade CBRN threat environments."
citations:
  - title: "Korean Aviation Act and KAS Airworthiness Standards — MOLIT"
    url: "https://www.molit.go.kr/USR/policyData/m_34681/dtl?id=4434"
    publishedYear: 2023
  - title: "EASA CS-23 Amendment 5 — Certification Specifications for Normal-Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2017
  - title: "NATO STANAG 4632 — Decontamination Standards for Military Equipment"
    url: "https://www.nato.int/cps/en/natohq/topics_49192.htm"
    publishedYear: 2021
  - title: "OPCW — Chemical Weapons Convention Implementation and Verification"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast 2027"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-989.html"
    publishedYear: 2022
  - title: "1995 Tokyo Subway Sarin Attack — National Security Archive"
    url: "https://nsarchive.gwu.edu/briefing-book/japan-nuclear-vault/2017-04-18/aum-shinrikyo-japanese-governments-failure-stop-sarin-attacks"
    publishedYear: 2017
ogImage: "cbrn-ai-blis-d-kas-civil-aviation-2026.png"
---

# BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified

## Abstract

When **Sarin** vapor filled the Tokyo subway carriages on March 20, 1995, emergency responders faced a decontamination crisis that no civil aviation authority had anticipated: how do you decontaminate an enclosed, aerodynamically sensitive platform — a vehicle built for precision rather than washdown — without destroying its operational integrity? Three decades later, that question has migrated from subway cars to aircraft cabins, and the regulatory answer in South Korea is taking shape through **KAS Part 21** and **KAS Part 23** airworthiness certification frameworks administered by **MOLIT** (Ministry of Land, Infrastructure and Transport). UAM KoreaTech's **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) system addresses this gap with a waterless, 90-second decon architecture that draws on aircraft bleed-air principles already embedded in the host platform's type design. This article examines the regulatory pathway from military STANAG compliance to civil type certification, the technical compatibility between BLIS-D's bleed-air mechanism and KAS structural requirements, and why the convergence of Korean airworthiness standards with NATO CBRN doctrine creates a uniquely defensible dual-use market position for Korean defense exporters targeting both allied procurement offices and commercial aviation operators.

---

## 1. Historical Anchor — The 1995 Tokyo Subway Sarin Attack

### Inner Landscape

Aum Shinrikyo's operational planners in 1995 understood a fundamental principle that many defense establishments still underweight: **enclosed, pressurized, or ventilated transport systems are force-multipliers for chemical agent dispersion**. The cult's leadership believed that a coordinated multi-line release would saturate Tokyo's emergency response capacity before detection algorithms — such as they existed — could generate actionable warnings. Their model was not wrong in its logic; it was wrong only in assuming that responders would remain paralyzed. What the planners did not account for was the ad hoc heroism of station workers using plastic bags as improvised collection vessels, and the fact that impure **Sarin** synthesis degraded agent persistence. Their inner landscape was one of certainty about system vulnerability and certainty about response incapacity. Both assumptions carried partial truth, which is precisely what made the attack so instructive for subsequent doctrine development.

### Environmental Read

The environmental factors that shaped the attack's lethality were architectural and institutional simultaneously. Tokyo's subway infrastructure in 1995 had no chemical detection sensors, no automated ventilation override protocols, and no decontamination equipment staged at interchange stations. MOLIT's Korean counterpart agencies were watching. The broader regional lesson — absorbed differently by Japan, South Korea, and Taiwan — was that mass transit and aviation systems share a critical vulnerability: their mechanical ventilation and pressurization systems, designed to sustain human life, can also distribute chemical agents with exceptional efficiency. For aviation specifically, bleed-air systems that circulate conditioned air through the cabin are both the threat vector and, as UAM KoreaTech would later demonstrate, the decontamination solution.

### Differential Factor

What differentiated the Tokyo attack's aftermath from earlier industrial chemical incidents was the forced confrontation between military CBRN doctrine and civilian infrastructure law. Military decon procedures — typically involving large volumes of water, reactive foam, or DS2 solution — were structurally incompatible with subway rolling stock and entirely incompatible with aircraft fuselage materials, avionics, and composite structures. Wet decontamination corrodes aluminum alloys, shorts avionics buses, and voids aircraft maintenance manuals. The differential factor was not agent lethality alone but the **incompatibility between available decon technology and the platform requiring decontamination**. This gap remained institutionally unaddressed in civil aviation regulatory frameworks for nearly three decades.

### Modern Bridge

The modern bridge from Tokyo 1995 to Seoul 2026 runs directly through aviation regulatory architecture. South Korea's **MOLIT**, building on ICAO Annex 8 provisions and harmonized with EASA's certification specifications, has codified in **KAS Part 21** and **KAS Part 23** the precise requirements that any equipment installed on a civil aircraft must satisfy. BLIS-D's bleed-air architecture — which uses the aircraft's own thermally conditioned pneumatic supply to carry solid-phase decontaminant particles through the cabin volume — is designed from first principles to be airworthiness-compatible. It imposes no corrosive liquid burden, no structural overload, and no avionics interference. The Tokyo lesson, reframed as a regulatory challenge, finds its answer in an engineering approach that treats the aircraft's existing systems as the decontamination delivery mechanism.

---

## 2. Problem Definition — The Civil Aviation CBRN Certification Gap

The scale of the unaddressed problem is quantifiable. According to **MarketsandMarkets**, the global CBRN defense market was valued at approximately **$15.3 billion in 2022** and is projected to reach **$19.8 billion by 2027**, growing at a CAGR of **5.3%**. Within that figure, aircraft-compatible decontamination systems represent a demonstrably underserved segment: virtually all certified decon solutions on the market today are designed for ground vehicles or fixed facilities and carry explicit airworthiness exclusions in their product documentation.

The civil aviation exposure is not theoretical. ICAO's member states collectively operate over **28,000 commercial aircraft** in revenue service as of 2024. Government aviation fleets — VIP transport, air ambulance, border patrol — add several thousand more civil-registered platforms. Each of these aircraft is, in principle, vulnerable to CBRN contamination events arising from deliberate attack, industrial accident, or biocontamination (as COVID-19 demonstrated operationally for aircraft decontamination logistics).

Korea's specific regulatory environment adds urgency. **MOLIT's KAS Part 21** requires formal type design approval for any equipment that interfaces with an aircraft's certified systems — including bleed-air pneumatic supply. **KAS Part 23** establishes the airworthiness baseline for the normal and commuter category platforms most likely to serve as first-responder, medevac, or government liaison aircraft. Currently, no CBRN decontamination system holds a Korean type certificate or supplemental type certificate (STC) under either part. The gap between demonstrated operational need and regulatory certification is the precise space that **BLIS-D** is engineered to occupy.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS-Compatible Architecture

**BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) is UAM KoreaTech's flagship decontamination platform, designed to deliver full chemical and biological surface decontamination in **90 seconds** without introducing liquid agents into the platform environment. Its core operating principle — using aircraft bleed-air as the carrier medium for a dry solid-phase decontaminant — is not merely a product differentiator; it is a regulatory enabler.

Under **KAS Part 21**, type certification applicants must demonstrate that installed equipment does not adversely affect the aircraft's type design baseline. BLIS-D's integration with the bleed-air system is read-only in terms of structural loading: it draws from the pneumatic supply downstream of existing pressure regulation valves without adding structural penetrations or modifying load paths. This design philosophy significantly reduces the compliance burden for STC applicants.

Under **KAS Part 23**, the relevant compliance domains include electrical system load analysis, human factors for crew interface, and emergency procedure integration. BLIS-D's control architecture is designed to present as a single-line-replaceable avionics module with a crew alert system interface compatible with ARINC 429 data bus standards commonly found in Part 23 commuter platforms. Its **90-second cycle time** is short enough to be incorporated into existing emergency checklists without procedural redesign.

Critically, BLIS-D is also designed for **NATO STANAG 4632** compliance on military platforms and for interoperability with the **Anduril Lattice** mesh network, enabling decontamination status reporting to feed directly into tactical common operating pictures. The same hardware therefore satisfies military procurement requirements while pursuing civil airworthiness certification — a dual-use architecture with genuine regulatory depth on both sides of the civil-military divide.

---

## 4. Strategic Context — Why Korea, Why Now

Three converging forces make 2026 the inflection point for civil aviation CBRN certification in Korea.

First, **geopolitical threat elevation**. The IISS Military Balance 2024 documents continued North Korean investment in chemical weapons delivery systems, including air-dispersible munitions. South Korea's National Intelligence Service has publicly assessed that state-sponsored CBRN threats to aviation infrastructure are a Category 1 priority. This assessment directly influences MOLIT's regulatory posture: the agency has accelerated review timelines for aviation safety equipment that addresses asymmetric threats.

Second, **regulatory harmonization momentum**. Korea's bilateral aviation safety agreement with the United States and its technical working relationship with EASA create a certification multiplier: a KAS Part 21 type certificate achieved in Korea provides the evidentiary foundation for FAA STC and EASA STC applications, potentially opening **NATO member state** civil aviation markets through a single primary certification effort. For UAM KoreaTech, Korea is not merely a domestic market — it is the regulatory beachhead.

Third, **defense export policy alignment**. Korea's Defense Acquisition Program Administration (DAPA) has identified dual-use defense technology as a priority export category under the Defense Industry Promotion Act. BLIS-D's civil airworthiness certification pathway directly supports this policy objective by creating a commercially certified product that can be exported under MOLIT mutual recognition agreements rather than solely under military export controls — reducing procurement friction for allied civil aviation authorities and airport operators.

---

## 5. Forward Outlook

UAM KoreaTech's 12-to-24-month certification roadmap for BLIS-D under KAS Part 21 and Part 23 proceeds through four phases. In Q3 2026, the company targets submission of a Stage 1 certification basis application to MOLIT's Aviation Safety Bureau, establishing the applicable KAS Part 23 amendment level and identifying means of compliance for each relevant requirement. Q4 2026 is targeted for completion of ground-level environmental qualification testing — vibration, temperature cycling, EMI — at a KOLAS-accredited laboratory. By Q2 2027, BLIS-D is positioned for aircraft-level integration testing on a Part 23 commuter-category testbed, generating the compliance data package required for STC issuance. The EASA CS-23 validation application is planned to follow within 90 days of KAS STC issuance under existing bilateral procedures. Simultaneously, BLIS-D's **Anduril Lattice** interoperability protocol will be updated to include civil aviation platform metadata, ensuring that decontamination status telemetry is compatible with both military tactical networks and civil aviation authority reporting systems. The **CBRN-CADS** detection platform, already validated for Lattice integration, will be positioned as the companion detection layer for civil aviation operators adopting BLIS-D.

---

## Conclusion

The Tokyo subway attack of 1995 exposed a gap that regulators and engineers took three decades to fully articulate: enclosed transport platforms need decontamination solutions that respect their mechanical and regulatory architecture, not solutions designed for open-air military vehicles. **BLIS-D**'s pursuit of **KAS Part 21 and Part 23** type certification under **MOLIT** oversight is the institutionalized answer to that lesson — a system engineered from first principles to be airworthy, STANAG-compliant, and Lattice-interoperable simultaneously. The certification is not merely a market-access document; it is proof that the civil-military CBRN capability gap can be closed by design.