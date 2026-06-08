---
title: "BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified"
description: "How UAM KoreaTech's BLIS-D waterless decontamination system aligns with KAS Part 21/23 airworthiness standards for civil aviation deployment across Korea and NATO partners."
category: "cbrn-ai"
publishedAt: 2026-06-08
author: "박무진"
language: "en"
quickAnswer: "BLIS-D's bleed-air dry decontamination architecture is structurally compatible with KAS Part 21 and Part 23 airworthiness certification pathways under MOLIT oversight, enabling civil aviation deployment without structural aircraft modification. This makes BLIS-D the first Korean-origin decon system positioned for dual-use type certification across both military and civil aviation fleets."
tags: ["Tokyo Sarin Attack", "Salisbury Novichok", "BLIS-D", "CBRN-CADS", "KAS Certification", "Dual-Use Aviation"]
faq:
  - question: "What are KAS Part 21 and Part 23, and why do they matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 governs the certification procedures for civil aeronautical products, parts, and appliances in Korea, administered by the Ministry of Land, Infrastructure and Transport (MOLIT). KAS Part 23 sets airworthiness standards specifically for normal, utility, aerobatic, and commuter category airplanes. For CBRN decontamination equipment like BLIS-D, compliance with these standards is mandatory before any device that interfaces with aircraft systems—including bleed-air taps, electrical buses, or structural hard points—can be installed on a certificated civil aircraft. Achieving KAS Part 21 supplemental type certificate (STC) status unlocks commercial airline, medevac, and emergency-response aviation markets in Korea and potentially in bilateral-recognition partner nations, dramatically expanding BLIS-D's total addressable market beyond the military sector."
  - question: "How does BLIS-D's bleed-air architecture interact with existing aircraft pneumatic systems under airworthiness rules?"
    answer: "BLIS-D draws conditioned high-pressure air from the aircraft's bleed-air manifold—a pneumatic tap already present on turbine-powered aircraft—to activate and aerosolize its proprietary solid decontaminant matrix without requiring onboard water supplies. Under KAS Part 21 STC review, MOLIT engineering evaluators assess whether the bleed-air extraction rate falls within the margins certified for the host aircraft type, whether back-pressure effects could compromise pressurization or de-icing systems, and whether the BLIS-D unit's mounting complies with Part 23 structural load envelopes. Because BLIS-D is designed to operate within standard bleed-air pressure bands (nominally 35–50 psi extraction), it avoids the need for aircraft-level re-certification, targeting instead a parts-approval or STC addendum pathway—the fastest route to civil deployment under current MOLIT regulatory practice."
  - question: "What is the timeline and process for BLIS-D to obtain a Korean Supplemental Type Certificate (STC) under MOLIT?"
    answer: "A Korean STC under KAS Part 21, Subpart E, typically proceeds through five stages: (1) pre-application meeting with MOLIT's Aviation Safety Division to agree on certification basis; (2) submission of design data, failure mode and effects analysis (FMEA), and interface control documents; (3) ground and flight testing witnessed by MOLIT-designated airworthiness representatives; (4) conformity inspection of production articles; and (5) issuance of the STC and associated Instructions for Continued Airworthiness (ICA). For a system like BLIS-D—which does not alter primary flight structure or avionics—the process typically requires 18–30 months from formal application to certificate issuance, depending on applicant data readiness and MOLIT workload. Korea's bilateral aviation safety agreements with the FAA and EASA create pathways for derivative validation, potentially enabling BLIS-D's STC to be recognized in the US and EU markets with reduced independent testing."
citations:
  - title: "Korean Aviation Act and Korean Airworthiness Standards (KAS)"
    url: "https://www.molit.go.kr/USR/policyData/m_34681/dtl.jsp"
    publishedYear: 2024
  - title: "OPCW Technical Secretariat: Protection and Decontamination Guidance"
    url: "https://www.opcw.org/our-work/capacity-building/protection-and-decontamination"
    publishedYear: 2023
  - title: "NATO STANAG 4632: CBRN Collective Protection and Decontamination Standards"
    url: "https://www.nato.int/cps/en/natohq/topics_48737.htm"
    publishedYear: 2022
  - title: "IATA Guidance Material on Dangerous Goods and Emergency Procedures"
    url: "https://www.iata.org/en/programs/safety/dangerous-goods/"
    publishedYear: 2024
  - title: "MarketsandMarkets: CBRN Defense Market Global Forecast 2028"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-1176.html"
    publishedYear: 2023
  - title: "UK Health Security Agency: Salisbury Novichok Incident Review"
    url: "https://www.gov.uk/government/publications/salisbury-incident"
    publishedYear: 2018
ogImage: "cbrn-ai-blis-d-kas-civil-aviation-2026.png"
---

# BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified

## Abstract

The question of whether a military-grade decontamination system can traverse the boundary into certificated civil aviation is not merely regulatory housekeeping—it is a strategic inflection point. UAM KoreaTech's **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) system, engineered around aircraft bleed-air pneumatics and a waterless 90-second decontamination cycle, now faces exactly that crossing: alignment with KAS Part 21 and KAS Part 23 under the Ministry of Land, Infrastructure and Transport (**MOLIT**). Civil aviation represents a dramatically underserved CBRN decontamination theater. When a commercial aircraft lands at Incheon or Frankfurt with a suspected chemical or biological contamination event aboard, ground crews currently have no fast, aircraft-safe, certified decontamination option that does not risk damaging avionics, upholstery, or the pneumatic architecture itself. **BLIS-D**'s bleed-air-native design resolves that mismatch. This article anchors the certification challenge in a real-world decontamination failure—the 1995 Tokyo subway sarin attack's aviation aftershock—then maps the KAS Part 21/23 type certification pathway, quantifies the civil aviation decon market gap, and positions **BLIS-D** as Korea's first dual-use airworthiness-certified CBRN solution with NATO **STANAG** interoperability and Anduril Lattice integration potential.

---

## 1. Historical Anchor — The Tokyo Sarin Attack and Aviation's Forgotten Decontamination Crisis

### Inner Landscape

On 20 March 1995, Aum Shinrikyo operatives released **Sarin** on five Tokyo Metro lines, killing thirteen and injuring nearly six thousand. The decision-makers at the Metropolitan Police Department, Tokyo Fire Department, and JGSDF CBRN units shared a common cognitive frame: decontamination was a ground problem, a subway problem, a pedestrian problem. Aircraft did not figure in the immediate response calculus. That blind spot reflected a wider institutional belief—pervasive across most defense establishments at the time—that chemical agent attacks were kinetic, localized, and confined to the point of release. The idea that contaminated first responders, evacuees, or aerosol particulates could board aircraft within hours of the event, distributing secondary contamination across airport terminals and airframes, was not seriously war-gamed before the attack. Planners were optimizing for the subway car, not for the boarding gate three kilometers away.

### Environmental Read

What the decision-makers missed was the cascading mobility vector. Tokyo's rail and aviation infrastructure are deeply interlocked. Narita and Haneda process hundreds of thousands of passengers daily, many connecting directly from the metro system. In the hours after the 1995 attack, uncontaminated but panic-affected passengers flooded airport terminals with no CBRN screening in place. Had the agent been a persistent compound—**VX** or a **Novichok** precursor rather than the relatively volatile GB-series **Sarin**—secondary surface contamination of aircraft cabins, seat fabrics, lavatory surfaces, and air-recirculation filters would have created a transnational decontamination event. The environmental factor the planners failed to model was aviation as an amplifier of chemical agent reach, not merely a transport medium for evacuees.

### Differential Factor

What differentiated the 1995 event from a worst-case aviation contamination scenario was **Sarin**'s volatility. Its relatively high vapor pressure meant that open-air outdoor decontamination of affected individuals—even using improvised water sprays at station exits—was sufficient to prevent significant aircraft-cabin transfer. A less volatile, more persistent agent released in an enclosed aircraft cabin or terminal gate would have required a certified, rapid, aircraft-compatible decontamination protocol that did not exist in 1995 and, critically, still lacks a certificated hardware solution in most civil aviation regulatory frameworks today.

### Modern Bridge

The Salisbury **Novichok** poisoning of 2018 reopened precisely this vulnerability calculus. UK HESA and OPCW technical reviews confirmed that **Novichok** agents are persistent surface-contact hazards detectable weeks after initial exposure. If a **Novichok**-contaminated individual had transited Heathrow or Incheon before symptom onset—a realistic scenario given the 30-minute to four-hour latency—the receiving aircraft would have required a decontamination protocol its operators had no certified tool to execute. **BLIS-D**'s civil aviation certification pathway through KAS Part 21/23 is the direct institutional response to that gap, grounded in a lesson the aviation industry has been slow to internalize since 1995.

---

## 2. Problem Definition — The Uncertified Civil Aviation Decon Gap

The global CBRN defense market was valued at approximately **$16.7 billion USD** in 2022 and is projected to reach **$22.3 billion** by 2028, growing at a CAGR of roughly **4.9%** (MarketsandMarkets, 2023). Within that figure, the civil aviation decontamination sub-segment remains structurally underdeveloped. IATA's emergency response documentation acknowledges chemical and biological contamination scenarios but provides no certified hardware solution—only procedural guidance that defaults to "contact national CBRN authorities and quarantine the aircraft."

The operational consequence of that procedural gap is severe. A contaminated wide-body aircraft quarantined for specialist decontamination typically requires **72–120 hours** out of service using current wet-wash protocols, generating direct revenue losses exceeding **$500,000 USD per incident** for a long-haul carrier, plus terminal and gate disruption costs. For a hub airport like Incheon International—processing over **70 million passengers annually** pre-COVID levels—even a single confirmed contamination event could cascade into a **$50 million** economic disruption window within 48 hours.

Korean regulatory frameworks currently lack a specific airworthiness technical standard for CBRN decontamination equipment fitted to civil aircraft. KAS Part 21 provides the certification procedural framework; KAS Part 23 defines structural and systems airworthiness criteria for normal-category aircraft. Neither document explicitly addresses CBRN decon hardware, creating a regulatory white space that MOLIT's Aviation Safety Division must adjudicate case-by-case under general supplemental type certificate (STC) provisions. This ambiguity is not unique to Korea: the FAA's equivalent framework (14 CFR Part 21/23) and EASA's CS-23 face identical gaps. The first manufacturer to navigate a national airworthiness certification for a rapid civil-aircraft decon system will establish the de facto international standard.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS Part 21/23 Certification Architecture

**BLIS-D**'s core engineering insight is what makes its civil airworthiness pathway credible: it was designed around the aircraft, not bolted onto it. By sourcing its activation energy from the host aircraft's bleed-air manifold—operating within standard turbine bleed-air pressure bands of **35–50 psi**—**BLIS-D** avoids the installation of auxiliary power units, pressurized chemical tanks, or high-voltage electrical systems that would trigger the most demanding certification scrutiny under KAS Part 21 Subpart E and KAS Part 23 structural load provisions.

The system's waterless solid-matrix decontaminant eliminates corrosion risk to aluminum airframe structures, composite panels, avionics bays, and seat-track rails—a critical differentiator from wet-wash alternatives that can cause **$80,000–$200,000** in secondary aircraft damage per application. The **90-second** cycle time is operationally significant: it falls within the turnaround window for most commercial aircraft ground servicing procedures, meaning a contaminated aircraft could theoretically be decontaminated, inspected, and returned to service within a standard gate turn, pending regulatory confirmation of agent clearance.

The KAS Part 21/23 certification roadmap for **BLIS-D** targets three sequential milestones: (1) **Parts Manufacturer Approval (PMA)** for the bleed-air interface adapter under KAS Part 21 Subpart K, establishing hardware conformity without requiring full STC review; (2) **Supplemental Type Certificate (STC)** for integration on identified Korean Air and Asiana Airlines fleet types operating Boeing 737 and Airbus A321 families; and (3) **Instructions for Continued Airworthiness (ICA)** documentation enabling line maintenance crews to install, operate, and remove **BLIS-D** without specialized CBRN training beyond a one-day MOLIT-approved course. Simultaneously, **CBRN-CADS** sensor integration at the aircraft cabin level enables real-time agent confirmation before and after decontamination, creating a closed-loop detect-decon-verify workflow that no competing system currently offers in a single certificated package.

---

## 4. Strategic Context — Why Korea, Why Now

Korea occupies a unique strategic position for this certification initiative. As a Tier-1 aviation manufacturing and maintenance nation—home to Korean Air Aerospace Division, Korean Air Techops, and a growing MRO ecosystem—Korea has the industrial base to support airworthiness certification at scale. MOLIT's Aviation Safety Division has demonstrated regulatory agility in certifying UAM (Urban Air Mobility) platforms under emergency provisions, suggesting institutional appetite for novel aviation safety categories. The **KAS Part 21/23** framework is structurally bilateral-compatible with FAA and EASA through Korea's Aviation Safety Agreement (KASA), meaning a Korean STC for **BLIS-D** creates a derivative validation pathway into the world's two largest civil aviation markets.

Geopolitically, the threat environment justifies urgency. North Korea maintains one of the world's largest chemical weapons stockpiles, estimated by the **IISS Military Balance** at **2,500–5,000 metric tons** of agent, including persistent blister and nerve agents. The probability that a regional chemical event could generate contaminated aviation traffic through Korean civil airports is not theoretical. South Korea's National Security Strategy explicitly identifies CBRN terrorism against critical infrastructure—including aviation—as a Tier-1 threat.

From a NATO interoperability standpoint, **BLIS-D**'s alignment with **STANAG 4632** collective protection and decontamination standards positions Korea as a defense export candidate to the **36 NATO and partner nations** currently modernizing their CBRN decon fleets. The Anduril Lattice integration layer—providing sensor fusion and autonomous asset coordination—gives **BLIS-D** a command-and-control dimension that transforms it from a standalone decon tool into a node in a broader CBRN response network, attractive to NATO procurement officers evaluating interoperability under the Defence Investment Pledge framework.

---

## 5. Forward Outlook

The **12–24 month** certification roadmap for **BLIS-D** civil aviation deployment targets the following milestones: **Q3 2026**, submission of KAS Part 21 PMA application to MOLIT for bleed-air interface components with supporting FMEA and interface control documentation; **Q4 2026**, completion of ground demonstration testing at a Korean MRO facility with MOLIT airworthiness representative witnessing; **Q1 2027**, initiation of STC application for the first host aircraft type (targeted: Boeing 737-800 operated by Korean domestic carriers); **Q2 2027**, flight-condition bleed-air extraction testing and cabin simulation decontamination trials; **Q4 2027**, STC issuance and entry into service with at least one Korean carrier in an emergency-response standby role.

Parallel to the certification track, UAM KoreaTech is engaging IATA's Ground Operations Group to contribute **BLIS-D** operational data toward development of a new IATA AHM (Airport Handling Manual) chapter on CBRN aircraft decontamination—positioning the company as a standard-setter rather than merely a product vendor. Export licensing under Korea's Strategic Goods Control Act will be initiated in parallel for NATO-partner markets, targeting the UK, Germany, and Australia as first-wave validation partners.

---

## Conclusion

In 1995, Tokyo demonstrated that chemical agents do not respect the boundary between ground infrastructure and aviation networks—and that the absence of a certified, aircraft-compatible decontamination tool is not merely a procurement gap but a strategic vulnerability with transnational reach. Three decades later, **BLIS-D**'s pursuit of KAS Part 21/23 type certification under MOLIT represents Korea's answer to that unresolved lesson: a bleed-air-native, waterless, 90-second decon system that fits within the aircraft's existing pneumatic envelope, satisfies airworthiness structural criteria, and integrates with **CBRN-CADS** for closed-loop detect-decon-verify operations. The certification pathway is demanding, but the alternative—another generation of civil aviation operating without a certificated CBRN decontamination solution—is a risk no procurement officer, airline safety director, or NATO CBRN planner should be comfortable accepting.