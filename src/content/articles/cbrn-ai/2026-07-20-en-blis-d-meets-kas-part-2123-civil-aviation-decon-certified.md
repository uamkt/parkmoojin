---
title: "BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified"
description: "How UAM KoreaTech's BLIS-D waterless decontamination system aligns with Korean Airworthiness Standards Part 21 and Part 23 for civil aircraft deployment."
category: "cbrn-ai"
publishedAt: 2026-07-20
author: "박무진"
language: "en"
quickAnswer: "BLIS-D's bleed-air dry decontamination architecture is structurally compatible with KAS Part 21 and Part 23 certification pathways under MOLIT oversight, enabling dual-use civil aviation deployment without compromising NATO STANAG 4677 decon efficacy standards."
tags: ["Tokyo-Sarin-1995", "Matsumoto-Incident", "BLIS-D", "CBRN-CADS", "KAS-Certification", "Dual-Use-Aviation"]
faq:
  - question: "What are KAS Part 21 and Part 23, and why do they matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 (Certification Procedures for Aircraft and Related Products) and KAS Part 23 (Airworthiness Standards for Normal-Category Aeroplanes) are Korean Airworthiness Standards administered by the Ministry of Land, Infrastructure and Transport (MOLIT). Part 21 governs the type certification and supplemental type certificate (STC) process for any modification or equipment added to a certified aircraft, while Part 23 defines the structural, systems, and performance envelope for normal-category fixed-wing platforms. For CBRN decontamination equipment like BLIS-D, achieving compliance means the system's bleed-air tapping architecture, thermal load profile, and mounting hardware must be demonstrated not to degrade airframe structural integrity, pressurization margins, or engine performance. Without STC approval under KAS Part 21, operating BLIS-D on a civil-registered aircraft would constitute an unapproved modification — a regulatory barrier that UAM KoreaTech is directly addressing through structured engineering validation aligned with MOLIT's accepted means of compliance."
  - question: "How does BLIS-D's bleed-air principle interact with civil aircraft pressurization and engine bleed systems?"
    answer: "BLIS-D draws conditioned high-pressure air from the aircraft's existing pneumatic bleed circuit — the same circuit that feeds environmental control systems (ECS) on most turbine-powered platforms. The decontamination cycle uses this thermally elevated, low-humidity air stream to volatilize and neutralize chemical and biological agents on surfaces within the cabin or cargo hold in approximately 90 seconds. On civil aircraft, the engineering challenge is quantifying bleed-air extraction mass flow against available engine bleed capacity at critical flight phases (takeoff, climb, go-around) to ensure no thrust or pressurization deficit. KAS Part 23 AMC (Acceptable Means of Compliance) requires demonstrated margin analysis; BLIS-D's modular flow-control valve enables precise extraction throttling, making this margin documentation tractable within standard certification test campaigns."
  - question: "What is the pathway for BLIS-D to receive a Supplemental Type Certificate (STC) under MOLIT oversight?"
    answer: "The STC pathway under KAS Part 21 Subpart E requires an applicant to submit a certification basis proposal to MOLIT's Aviation Safety Division, agree on special conditions if the equipment is novel or unusual, and then execute a compliance demonstration plan covering design, analysis, ground test, and flight test phases. For BLIS-D, UAM KoreaTech would define the installation as a minor or major alteration depending on bleed-air extraction volume and structural attachment loads. A major alteration triggers full STC review. Key compliance items include FAR/KAS 23.1309 equipment, systems and installation; pressurization integrity under 23.841; and fire protection per 23.1182 given the thermal decon cycle. Bilateral agreements between MOLIT and EASA or FAA can accelerate validation acceptance for allied export markets once the Korean STC is granted."
citations:
  - title: "Korean Airworthiness Standards (KAS) — Ministry of Land, Infrastructure and Transport"
    url: "https://www.molit.go.kr/USR/policyData/m_34681/dtl?id=4541"
    publishedYear: 2023
  - title: "NATO STANAG 4677 — Collective Protection and Decontamination Interoperability"
    url: "https://www.nato.int/cps/en/natohq/topics_48895.htm"
    publishedYear: 2021
  - title: "OPCW — Aum Shinrikyo Tokyo Subway Attack Chemical Weapons Use"
    url: "https://www.opcw.org/our-work/prevention/non-state-actors/aum-shinrikyo"
    publishedYear: 2022
  - title: "IATA — Guidance on Aircraft Decontamination Procedures (Doc 9966)"
    url: "https://www.iata.org/en/publications/store/guidance-material-for-aircraft-decontamination/"
    publishedYear: 2020
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2029"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-232130040.html"
    publishedYear: 2024
  - title: "RAND Corporation — Proliferation of Chemical Weapons: Risks and Responses"
    url: "https://www.rand.org/pubs/research_reports/RR2070.html"
    publishedYear: 2018
ogImage: "cbrn-ai-blis-d-kas-civil-aviation-2026.png"
---

# BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified

## Abstract

When the first responders entered Tokyo's Kasumigaseki subway station in March 1995, they had no protocol for decontaminating the dozens of commuters who had absorbed **Sarin** through skin and mucosa in an enclosed transit environment. Thirty years later, the regulatory architecture for deploying certified, fast-cycle decontamination equipment aboard civil aircraft remains incomplete — including in Korea, one of Asia's most aviation-intensive economies. This article examines how UAM KoreaTech's **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) system can navigate the Korean Airworthiness Standards (**KAS Part 21** and **KAS Part 23**) certification pathway administered by the Ministry of Land, Infrastructure and Transport (**MOLIT**) to achieve legally deployable status on civil-registered platforms. The argument proceeds from a historical anchoring in the 1995 Aum Shinrikyo attacks through a structured analysis of today's regulatory gap, **BLIS-D**'s technical compliance posture, Korea's dual-use defense market dynamics, and a 12–24 month certification roadmap. The conclusion is that the bleed-air architecture of **BLIS-D** is not merely compatible with KAS certification — it was, by engineering design, conceived to be.

---

## 1. Historical Anchor — Ikuo Hayashi and the Kasumigaseki Failure (1995)

### Inner Landscape

Dr. Ikuo Hayashi, the Aum Shinrikyo operative who released **Sarin** aboard the Chiyoda Line on the morning of March 20, 1995, was a trained cardiovascular surgeon. His decision calculus was shaped by a belief system in which mass-casualty chemical deployment was both technically feasible and institutionally unpunishable — in part because he correctly assessed that no civil authority had a rapid, scalable decontamination protocol for enclosed transit platforms. Hayashi's inner logic was not simply ideological; it was operationally rational. He understood, as any trained clinician would, that the vector of exposure — a sealed, recirculating-air environment — would amplify casualty dispersion and overwhelm triage capacity. His blind spot was personal moral accountability, but his tactical read of institutional unpreparedness was accurate.

### Environmental Read

The environmental factors Hayashi exploited were structural, not incidental. Tokyo's subway network in 1995 carried approximately **8 million passengers per day** through sealed rolling-stock compartments with limited fresh-air exchange — an ideal aerosol dispersion medium. First responders arriving at Kasumigaseki had no chemical-specific decontamination equipment staged at the station. Hospital emergency departments received **over 1,000 patients within three hours**, many of whom arrived as secondary contamination vectors, exposing clinical staff. The Japanese Self-Defense Force CBRN units, trained for battlefield scenarios, had no jurisdictional authority in urban civil infrastructure. The recirculating-air architecture of the subway cars — analogous in principle to aircraft environmental control systems — was never evaluated as a contamination amplifier in any civilian emergency planning document prior to the attack.

### Differential Factor

What distinguished the Tokyo attack from earlier chemical incidents — including Aum's own **Matsumoto** nerve agent deployment in June 1994 — was the target's airframe-like containment characteristics. Enclosed, pressurized, or semi-pressurized environments with recirculated air do not merely expose occupants; they sustain and redistribute aerosolized agents across the entire internal volume. This is precisely the threat scenario that civil aviation has never fully operationalized a decontamination response for. An aircraft cabin at cruise altitude, with **ECS recirculation rates of 50% or higher**, is thermodynamically and fluid-dynamically comparable to the subway car environments that killed **13 people and injured over 5,000** in 1995.

### Modern Bridge

The 1995 attacks catalyzed military CBRN doctrine globally but left a regulatory lacuna in civil aviation. IATA's guidance material for aircraft decontamination (Doc 9966) provides procedural frameworks but does not specify certified hardware. No major airworthiness authority — FAA, EASA, or **MOLIT** — has yet issued a standing type certificate for an onboard CBRN decontamination system integrated into aircraft bleed-air infrastructure. This gap is the precise market and regulatory space that **BLIS-D** is engineered to occupy. The bleed-air principle that powers **BLIS-D**'s 90-second dry decon cycle draws on the same pneumatic architecture that recirculated contaminated air in Tokyo's subway cars — and transforms it into the decontamination solution.

---

## 2. Problem Definition — The $8.7 Billion Gap in Civil Aviation CBRN Readiness

The global CBRN defense market was valued at approximately **$17.6 billion in 2023** and is projected to reach **$26.3 billion by 2029**, growing at a CAGR of **6.9%**, according to MarketsandMarkets. Within this aggregate, the civil aviation decontamination segment remains structurally underdeveloped. Current decon protocols for civil aircraft rely overwhelmingly on **wet chemical decontamination** — chlorine-based sprays, aqueous foam, or hydrogen peroxide vapor systems — all of which require aircraft to be grounded, depressurized, and cleared of occupants for decon cycles measured in **hours, not minutes**.

In a mass-casualty CBRN event involving commercial aviation — an airport attack, an airborne dispersal scenario, or contamination of cargo aircraft — the operational consequence of wet-decon dependency is fleet grounding at exactly the moment surge airlift capacity is most critical. South Korea's aviation infrastructure compounds this risk: **Incheon International Airport** handles over **70 million passengers annually**, making it the fourth-busiest cargo hub in the world. A single declared CBRN contamination event without an on-platform certified decon system would trigger cascading groundings across all Korean Air and Asiana fleets under current MOLIT emergency protocols.

RAND's 2018 analysis of chemical weapons proliferation risks explicitly flagged non-state actors' growing interest in civil infrastructure targeting, noting the **asymmetric leverage** that a single contamination event at a major hub airport would generate relative to the cost of execution. Despite this documented risk, no Korean civil aircraft currently carries a type-certified onboard CBRN decontamination system. The regulatory pathway — **KAS Part 21** STC and **KAS Part 23** compliance — exists but has not been traversed for this equipment category. This is the gap **BLIS-D** is positioned to close.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS-Aligned Certification Architecture

**BLIS-D** is a waterless, **90-second** decontamination system that integrates with an aircraft's existing bleed-air pneumatic circuit to generate a thermally conditioned, low-humidity decon atmosphere within the cabin or cargo hold. The system uses a proprietary solid-sorbent neutralization matrix — no liquid spray, no secondary waste stream — making it operationally compatible with pressurized environments where wet-decon methods are structurally prohibited.

From a **KAS Part 23** compliance perspective, **BLIS-D**'s design architecture addresses the three principal certification risk areas for installed CBRN equipment: **structural integrity** (mounting loads within FAR/KAS 23.561 emergency landing factors), **systems interference** (bleed-air extraction quantified against engine bleed availability per KAS 23.1301 and 23.1309), and **fire protection** (thermal decon cycle contained below KAS 23.1182 compartment temperature limits). The modular flow-control valve assembly enables precise extraction throttling, allowing applicants to generate the bleed-margin analysis documentation that **MOLIT**'s Aviation Safety Division requires under KAS Part 21 Subpart E STC review.

Beyond domestic certification, **BLIS-D**'s technical documentation package is structured to support bilateral validation under MOLIT-EASA and MOLIT-FAA technical agreements, accelerating export STC acceptance for NATO-allied operators. Critically, the system's demonstrated compatibility with **NATO STANAG 4677** decontamination efficacy standards means that military-variant **BLIS-D** units already meet the performance benchmarks that civil certification is being designed around — a reversed but defensible compliance vector that procurement officers in both domains should note.

---

## 4. Strategic Context — Why Korea, Why MOLIT, Why 2026

Korea's dual-use defense posture has shifted materially since the 2023 publication of the Defense Acquisition Program Administration (DAPA) K-Defense Export Strategy, which explicitly identified **CBRN systems** and **aviation dual-use platforms** as priority export categories. **MOLIT**'s concurrent push to align KAS with EASA CS-23 Amendment 5 — a regulatory harmonization process that began in earnest in 2022 — creates a narrow certification window in which a first-mover KAS STC for onboard CBRN decon equipment would carry bilateral recognition weight in European markets by 2027–2028.

Geopolitically, the **North Korean chemical weapons stockpile** — estimated by the IISS at **2,500–5,000 tonnes** of agents including **VX**, **Sarin**, and mustard gas — represents a persistent threat to Korean civil infrastructure that no allied nation faces at comparable proximity. This is not a theoretical risk calculus; it is a procurement driver that Korean aviation authorities, airport operators, and airline security planners are actively engaged with at the classified level. The civil aviation CBRN certification gap is therefore not merely a regulatory inconvenience but a national security exposure.

Anduril Lattice interoperability adds a further strategic dimension: **BLIS-D** units deployed on civil logistics aircraft operating in contested or dual-use airspace can be integrated as sensor-actuator nodes within the Lattice mesh, providing real-time decon status, agent detection correlation via **CBRN-CADS**, and mission-level contamination data to theater commanders — a capability set that neither EASA nor FAA certification frameworks yet address, but which **MOLIT**'s emerging smart-aviation regulatory sandbox may accommodate under experimental STC provisions.

---

## 5. Forward Outlook

UAM KoreaTech's **BLIS-D** KAS certification roadmap targets the following milestones across the 12–24 month horizon:

**Q3 2026**: Submission of Certification Basis Proposal to MOLIT Aviation Safety Division; agreement on special conditions for novel bleed-air CBRN integration under KAS Part 21 Subpart E.

**Q4 2026**: Completion of bleed-air extraction margin analysis and structural load documentation; initiation of ground-test campaign on representative Part 23 testbed aircraft at Korea Aerospace Research Institute (KARI) facilities.

**Q1 2027**: MOLIT conformity inspection of first production-representative **BLIS-D** civil installation; initiation of KAS 23.1309 systems-safety assessment review.

**Q2 2027**: Flight-test demonstration of decon cycle at cruise and descent conditions; generation of compliance findings package for STC issuance.

**Q3–Q4 2027**: STC granted; initiation of EASA bilateral validation process; first civil-operator integration on Korean Air cargo fleet under approved installation manual.

Parallel to certification, **CBRN-CADS** integration testing on the same testbed platform will generate the detection-to-decon latency data required to validate the combined system's performance against OPCW CWC Schedule 1 agent simulants.

---

## Conclusion

Thirty years after Ikuo Hayashi exploited the decontamination blindspot of a sealed transit environment, the civil aviation sector remains without a type-certified onboard CBRN decontamination solution. **BLIS-D**'s bleed-air architecture, aligned with **KAS Part 21** and **KAS Part 23** under **MOLIT** oversight, is the first technically credible pathway to close that gap within Korean regulatory jurisdiction — and, through bilateral agreements, across allied aviation markets. The threat Hayashi demonstrated in Tokyo's tunnels lives on in every pressurized cabin; the answer, at last, is being certified.