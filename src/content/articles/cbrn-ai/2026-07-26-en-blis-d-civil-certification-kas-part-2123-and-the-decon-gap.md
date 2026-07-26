---
title: "BLIS-D Civil Certification: KAS Part 21/23 and the Decon Gap"
description: "How Korean Airworthiness Standards KAS Part 21/23 shape BLIS-D's path to civil aviation decontamination deployment and NATO dual-use integration."
category: "cbrn-ai"
publishedAt: 2026-07-26
author: "박무진"
language: "en"
quickAnswer: "KAS Part 21 and Part 23 type-certification frameworks create a viable but under-explored pathway for deploying BLIS-D waterless decontamination technology on civil aircraft, closing a critical gap in airport and aeromedical CBRN response that neither NATO STANAG 4703 nor ICAO Annex 8 currently addresses with hardware-level specificity."
tags: ["Tokyo Subway Sarin Attack", "Matsumoto Sarin Incident", "BLIS-D", "CBRN-CADS", "KAS Certification", "Dual-Use Aviation"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment on aircraft?"
    answer: "KAS Part 21 is the Korean Airworthiness Standards chapter governing type certification, supplemental type certificates (STC), and design organization approvals for civil aircraft and their components, administered by MOLIT (Ministry of Land, Infrastructure and Transport). For CBRN decontamination systems like BLIS-D, Part 21 establishes the legal and technical gateway to installing novel bleed-air-driven hardware on certified airframes. Without a KAS Part 21 STC or equivalent approval, no decon system—however effective—can be permanently or temporarily integrated into a registered Korean civil aircraft. This is critical because airport emergency response aircraft, aeromedical evacuation platforms, and government VIP transports represent the first-use civilian market for waterless, 90-second chemical and biological decontamination capability. The certification pathway requires demonstration of airworthiness, structural compatibility, systems safety analysis per ARP4761, and non-interference with primary aircraft systems—all achievable for a bleed-air-parasitic system like BLIS-D, which taps existing engine pneumatic architecture rather than adding independent power or fluid reservoirs."
  - question: "How does KAS Part 23 apply to smaller aircraft deploying BLIS-D for CBRN decontamination?"
    answer: "KAS Part 23 governs airworthiness standards for normal, utility, aerobatic, and commuter category aircraft with a maximum certificated takeoff weight of 8,618 kg (19,000 lb) or fewer, mirroring the FAA's restructured Part 23 means-based framework. For BLIS-D deployment, Part 23 is directly relevant to turboprop aeromedical evacuation platforms, regional emergency response aircraft, and military-adjacent government utility planes that fall below the transport-category threshold. The means-based approach introduced in the revised Part 23—adopted from ASTM F3083 and similar consensus standards—allows applicants to propose performance objectives rather than prescriptive compliance checklists, which is strategically advantageous for novel CBRN hardware. BLIS-D can be framed as a safety-enhancing auxiliary system that does not materially alter the aircraft's primary flight envelope, positioning its STC application for an expedited review pathway. MOLIT's Civil Aviation Safety Authority (CASA-Korea) has signaled openness to consensus-standard means of compliance, reducing time-to-certification for dual-use safety equipment."
  - question: "Is there a NATO STANAG that covers aircraft-mounted decontamination systems for CBRN response?"
    answer: "NATO STANAG 4703, which addresses liquid decontaminants for military ground equipment, and STANAG 2528, covering CBRN protection of vehicles and shelters, provide the closest analogues but neither explicitly governs airborne or aircraft-mounted decontamination hardware. NATO's CBRN Defence Working Group has acknowledged this gap in successive biennial reviews. STANAG 4632, pertaining to CBRN reconnaissance vehicle standards, offers partial guidance on sensor integration but not on decon system airworthiness. The practical result is that allied nations operating CBRN-capable airlift or aeromedical evacuation fleets must navigate national civil or military airworthiness authorities—such as Korea's MOLIT, the UK MAA, or the US FAA/MIL-HDBK-516C—independently. UAM KoreaTech's BLIS-D certification effort under KAS Part 21/23 therefore positions Korea as a potential standard-setter for an aircraft-mounted decon specification that NATO has not yet codified, creating first-mover advantage in allied procurement conversations."
citations:
  - title: "Korean Airworthiness Standards (KAS) Part 21 — MOLIT Notice"
    url: "https://www.molit.go.kr/USR/BORD0201/m_34871/DTL.jsp"
    publishedYear: 2023
  - title: "ICAO Annex 8 — Airworthiness of Aircraft, 12th Edition"
    url: "https://www.icao.int/safety/airworthiness/pages/annex-8.aspx"
    publishedYear: 2022
  - title: "NATO STANAG 4703 — Liquid Decontaminants"
    url: "https://www.nato.int/cps/en/natohq/topics_49142.htm"
    publishedYear: 2019
  - title: "FAA Part 23 Reorganization — Advisory Circular AC 23-1309-1"
    url: "https://rgl.faa.gov/Regulatory_and_Guidance_Library/rgAdvisoryCircular.nsf/0/c538b657ac9ead3f86258614006d1e83/$FILE/AC%2023-1309-1.pdf"
    publishedYear: 2019
  - title: "OPCW — Chemical Weapons Convention Implementation Report 2023"
    url: "https://www.opcw.org/sites/default/files/documents/2024/01/ec-105-3_e_.pdf"
    publishedYear: 2024
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2029"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-1111.html"
    publishedYear: 2024
  - title: "Anduril Industries — Lattice Platform Technical Overview"
    url: "https://www.anduril.com/lattice/"
    publishedYear: 2024
ogImage: "cbrn-ai-blis-d-kas-civil-certification-2026.png"
---

# BLIS-D Civil Certification: KAS Part 21/23 and the Decon Gap

## Abstract

On 20 March 1995, **Sarin** was released on five Tokyo subway lines during the morning rush hour. Twelve people died; nearly 1,000 required hospital admission; first-responder decontamination was improvised, slow, and water-dependent. Thirty-one years later, the procedural architecture for decontaminating aircraft that transport CBRN casualties—or that become contamination vectors themselves—remains conspicuously underdeveloped in civil aviation regulation. Korean Airworthiness Standards **KAS Part 21** and **KAS Part 23**, administered by MOLIT's Civil Aviation Safety Authority, provide an underutilized but technically coherent regulatory pathway for certifying novel decontamination hardware on registered civil aircraft. UAM KoreaTech's **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) system—a waterless, 90-second CBRN decon platform that parasitically taps aircraft bleed-air pneumatic architecture—is precisely the class of hardware these standards can accommodate. This article maps the certification logic, quantifies the operational gap, and argues that Korea's type-certification ecosystem positions **BLIS-D** as both a domestically certifiable asset and a template for an eventual NATO aircraft-mounted decon standard that does not yet exist.

---

## 1. Historical Anchor — The Tokyo Subway Sarin Attack (1995)

### Inner Landscape

The commanders of Aum Shinrikyo who planned the 1995 Tokyo attack operated on a simple battlefield assumption: civil transit infrastructure has no meaningful CBRN response layer. Their calculus was correct. Tokyo Metro staff had no personal protective equipment scaled for nerve agent exposure. Hospitals received walk-in casualties with no pre-notification of the agent involved. The attack's perpetrators understood that the decontamination void in civilian systems was not a gap—it was an operational certainty. Their inner logic was that civil infrastructure would always prioritize throughput and cost efficiency over CBRN resilience, making mass-casualty chemical events asymmetrically cheap to execute and expensive to mitigate. That belief, tragically validated in 1995, has changed only marginally in the aviation domain.

### Environmental Read

The environment the attackers exploited was one of institutional compartmentalization: Japan's chemical defense capabilities were entirely military, its civil emergency management was pre-CBRN-aware, and its transportation operators had no doctrine for chemical contamination. Critically, the aeromedical evacuation chain—the aircraft that would eventually move the most critically injured patients—operated with zero decontamination capability. Pilots and flight nurses aboard medevac helicopters transporting sarin-exposed patients became secondary casualties. The physical environment of an enclosed aircraft cabin, with recirculated bleed-air from engines, made contamination propagation a structural inevitability rather than a risk to be managed.

### Differential Factor

What differentiated the Tokyo attack's aftermath from theoretical response scenarios was the absence of any hardware solution compact, fast, and compatible enough with aircraft operations to be deployed in the transport chain. Water-based decontamination—the military default—is categorically incompatible with avionics, composites, and pressurization systems. The 1995 event thus revealed a differential factor that persists today: the decontamination problem aboard or adjacent to aircraft is not a doctrine problem or a training problem in the first instance. It is a hardware certification problem. No approved device existed. None could be installed legally. That fact shaped every response decision that followed.

### Modern Bridge

The Tokyo attack's legacy is directly relevant to UAM KoreaTech's certification strategy. The **BLIS-D** system addresses the hardware absence the 1995 incident exposed, using dry solid-state reactive media energized by engine bleed-air to achieve full surface and cabin atmosphere decontamination in under 90 seconds without water, without corrosive residue, and without incompatibility with avionics or airframe materials. Translating that capability into the civil aviation domain requires MOLIT type certification under **KAS Part 21**, with airworthiness compliance demonstrated under **KAS Part 23** for sub-8,618 kg platforms. Korea's regulatory architecture now makes that pathway navigable—and the strategic imperative to navigate it has never been clearer.

---

## 2. Problem Definition — The Unquantified Civil Aviation Decon Gap

The global CBRN defense market was valued at **$16.3 billion in 2023** and is projected to reach **$22.1 billion by 2029** at a CAGR of **5.2%**, according to MarketsandMarkets. Within that envelope, aircraft-compatible decontamination systems represent a nascent but rapidly expanding sub-segment driven by three converging pressures: the expansion of aeromedical evacuation doctrine to CBRN scenarios, the post-COVID reconfiguration of airport biosecurity infrastructure, and the increasing use of civil charter aircraft in military-adjacent operations by NATO partner nations.

Yet the regulatory landscape has not kept pace with operational demand. **ICAO Annex 8** governs aircraft airworthiness at the international level but contains no hardware-specific provisions for CBRN decontamination equipment. **NATO STANAG 4703**, the closest military analogue, addresses liquid decontaminants for ground vehicles and does not extend to airborne platforms. Korea's own MOLIT framework, grounded in **KAS Part 21** for design and production approvals and **KAS Part 23** for normal and utility category airworthiness, provides the procedural tools—but no applicant has yet filed an STC for a CBRN decontamination system under either standard.

The operational gap translates into quantifiable risk. The **OPCW's 2023 Implementation Report** documents **3 confirmed chemical weapons use incidents** in non-state conflict zones, each of which generated aeromedical evacuation requirements that exposed transport crews to secondary contamination risk. Korean Air Force HH-60P medevac helicopters operating in joint exercises with US PACOM partners have no certified onboard decon capability. MOLIT's own airport emergency response framework, updated in 2022, identifies chemical and biological agent release as a Tier 1 airport emergency category but cites no approved decontamination hardware for aircraft in its response matrix. **BLIS-D** certification under KAS Part 21/23 fills that void.

---

## 3. UAM KoreaTech Solution — BLIS-D Under KAS Part 21/23

**BLIS-D's** core engineering architecture is uniquely positioned for civil type certification. Unlike water-based or foam decon systems that require independent pressure vessels, pumps, and fluid management plumbing—all of which introduce structural, electrical, and maintenance complexity under **KAS Part 23**—**BLIS-D** is a bleed-air parasitic system. It draws pneumatic energy from the aircraft's existing engine compressor bleed ports, passes that air through a solid reactive media canister containing neutralizing compounds, and delivers decontaminated heated airflow to the target zone. The system adds no independent fluid mass, no high-pressure hydraulic lines, and no new electrical busbar loads above the threshold that would trigger a major alteration designation under **KAS Part 21** STC review.

This architecture has direct implications for MOLIT certification strategy. Under **KAS Part 21.113**, a Supplemental Type Certificate application requires demonstration that the proposed change does not adversely affect the airworthiness of the original type design. **BLIS-D's** bleed-air tap operates within the pneumatic system's existing margin allocation, making the non-interference case straightforwardly demonstrable through systems safety analysis per ARP4761 and functional hazard assessment per ARP4754A—both of which MOLIT's Civil Aviation Safety Authority accepts as means of compliance.

Under the revised **KAS Part 23** framework—aligned with FAA's means-based restructuring—**BLIS-D** qualifies as an auxiliary system in the utility category, subject to performance-based airworthiness objectives rather than prescriptive design rules. UAM KoreaTech can propose consensus standards from ASTM International's F39 Aircraft Systems committee as alternative means of compliance, further accelerating the MOLIT review timeline.

Integration with **CBRN-CADS**—UAM KoreaTech's multi-sensor detection platform combining IMS, Raman spectroscopy, gamma detection, and qPCR—creates a detect-to-decontaminate loop that can be certified as a functionally integrated system under a single STC package, enabling Anduril **Lattice** network ingestion of real-time contamination data from certified aircraft nodes.

---

## 4. Strategic Context — Why Korea, Why Now

Korea's dual position as a **KAS**-governed civil aviation authority and a US-allied defense partner with active CBRN threat exposure on the peninsula creates a regulatory and geopolitical environment uniquely favorable to **BLIS-D** civil certification. MOLIT has demonstrated institutional willingness to accept ASTM and FAA Advisory Circular means of compliance, reducing the delta between Korean and US certification standards to manageable levels. This matters because a **KAS Part 21** STC obtained in Korea can be leveraged through bilateral airworthiness agreements with EASA and the FAA as a validation basis, compressing the timeline for allied market entry.

Geopolitically, North Korea's documented **VX and Sarin** production capacity—confirmed in the **IISS Strategic Dossier on WMD** series—means Korean civil and military aviation operators face a credible, proximate chemical threat that most NATO member states do not. This is not a theoretical procurement justification. It is a present operational requirement. MOLIT's 2022 revision of the airport emergency response framework was itself partly driven by Ministry of National Defense threat assessments that cited chemical agent release at Incheon International Airport as a realistic adversarial scenario.

The economic rationale is equally concrete. Korea's defense export ambitions—reflected in the **K-Defense** initiative and the 2023 defense export target of **$20 billion by 2030**—require dual-use products with both civilian certification credibility and military pedigree. A **BLIS-D** system carrying a **KAS Part 21** STC is demonstrably safer, more legally deployable, and more procurement-ready for NATO partner air forces operating under civil airworthiness frameworks than an uncertified military-only device. The certification investment is therefore both a domestic market-access play and an export-enabling asset.

---

## 5. Forward Outlook

UAM KoreaTech's **BLIS-D** civil certification roadmap targets three milestones over the next 24 months. By **Q4 2026**, a pre-application meeting with MOLIT's Civil Aviation Safety Authority is planned to establish the certification basis under **KAS Part 21.113** and agree on Part 23 means of compliance for the initial platform—a King Air 350-class turboprop representing the aeromedical evacuation utility category. By **Q2 2027**, a functional hazard assessment and preliminary systems safety analysis submission is targeted, followed by a ground-based bleed-air integration demonstration at Korea Aerospace Research Institute (KARI) facilities. Final STC approval is projected for **Q4 2027**, enabling the first commercially operable **BLIS-D**-equipped civil aircraft in the Korean registry.

Parallel tracks include a STANAG engagement submission to NATO's CBRN Defence Working Group proposing an aircraft-mounted decon system annex to STANAG 4703, and an Anduril **Lattice** interoperability protocol for **CBRN-CADS** sensor data streaming from certified aircraft nodes. The combined certified hardware and networked sensor architecture will position UAM KoreaTech for the **2028 ROK Air Force aeromedical CBRN capability tender** and allied procurement conversations in Poland, Australia, and the United Kingdom.

---

## Conclusion

The Tokyo subway attack of 1995 proved that civil infrastructure's decontamination void is not an oversight—it is a structural vulnerability that adversaries actively exploit. Thirty-one years later, **KAS Part 21** and **KAS Part 23** offer the first credible regulatory architecture for closing that void in the aviation domain, and **BLIS-D's** bleed-air design philosophy is the only