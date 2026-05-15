---
title: "BLIS-D Airworthiness: KAS Part 21/23 and Civil Aviation Decon"
description: "How UAM KoreaTech's BLIS-D dry decontamination system navigates KAS Part 21 and Part 23 type certification for civil aviation deployment under MOLIT oversight."
category: "cbrn-ai"
publishedAt: 2026-05-15
author: "박무진"
language: "en"
quickAnswer: "BLIS-D's bleed-air decontamination architecture is structurally compatible with KAS Part 21/23 type certification because it parasitically taps existing aircraft pneumatic systems without structural modification. MOLIT certification pathways open civil aviation markets — airports, medevac fleets, and commercial carriers — to military-grade CBRN decon capability for the first time."
tags: ["Aum Shinrikyo", "Tokyo Subway Attack", "BLIS-D", "CBRN-CADS", "KAS Certification", "Dual-Use Aviation"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment installed on civil aircraft?"
    answer: "KAS Part 21 is the Korean Airworthiness Standards chapter governing certification procedures for aircraft, engines, propellers, and associated equipment — closely mirrored on EASA CS-21 and FAA Part 21. For any system installed aboard a South Korean-registered civil aircraft, KAS Part 21 requires the manufacturer to obtain either a Type Certificate (TC), a Supplemental Type Certificate (STC), or approval under a Parts Manufacturer Approval (PMA) process administered by MOLIT's Aviation Safety Bureau. For BLIS-D, which interfaces with an aircraft's bleed-air pneumatic circuit, the STC pathway is most relevant: the integrating operator certifies the modification against airworthiness standards without requiring a full TC for the host airframe. This allows BLIS-D to be fitted to existing in-service platforms — VIP transports, cargo aircraft, medevac rotorcraft — through a structured design change approval, substantially reducing time-to-market while maintaining the safety rigor regulators demand."
  - question: "How does KAS Part 23 define the structural and performance envelope for BLIS-D on small civil aircraft?"
    answer: "KAS Part 23 covers airworthiness standards for Normal, Utility, Acrobatic, and Commuter category aeroplanes up to 19 seats or 8,618 kg MTOW — aligned with FAA Part 23 Amendment 64 and EASA CS-23. For BLIS-D deployment on platforms such as turboprop medevac aircraft or light multi-engine transports, Part 23 establishes load factor limits, vibration environments, and electrical/pneumatic interface specifications that the decon unit must survive and not violate. BLIS-D's dry, reagent-free chemistry eliminates liquid containment concerns that would otherwise trigger additional flammability and weight-and-balance analyses under Part 23 Subpart D. The system's sub-4 kg modular pod configuration is specifically engineered to remain within the supplemental payload margins most Part 23-certified platforms carry, making STC amendment straightforward rather than a full redesign exercise."
  - question: "What is the Anduril Lattice connection to a civil-aviation-certified BLIS-D?"
    answer: "Anduril's Lattice autonomous command-and-control mesh network is increasingly integrated into NATO and Indo-Pacific partner nation CBRN response frameworks as a sensor-fusion and autonomous tasking layer. A civil-aviation-certified BLIS-D creates a legally deployable asset that Lattice can autonomously task during a declared CBRN incident — for example, routing a certified medevac aircraft to an affected airport, triggering the BLIS-D cycle on approach, and feeding decon-complete status back into the Lattice common operating picture. KAS certification is the legal gateway: without it, Lattice can task a military asset but cannot legally direct a civil operator to perform decon sorties under domestic aviation law. Certification thus transforms BLIS-D from a purely military tool into a Lattice-compatible dual-use node spanning both Title 10 (military) and civil emergency-management authorities."
  - question: "What NATO STANAG requirements align with the KAS Part 21/23 certification effort for BLIS-D?"
    answer: "NATO STANAG 2517 governs requirements for CBRN collective protection systems and decontamination procedures for equipment and personnel; STANAG 4539 covers aircraft-specific survivability. For BLIS-D, the most directly relevant alignment is with STANAG 2537 (decontamination of equipment and materiel) and the broader AMedP-8(C) medical CBRN doctrine. KAS Part 21/23 certification does not automatically satisfy STANAG requirements, but it substantially de-risks NATO qualification because both frameworks share a common ancestor in FAA/EASA regulatory architecture. A system that demonstrates airworthiness under KAS Part 23 load and environmental testing has already passed the most physically demanding portions of NATO qualification testing. UAM KoreaTech's dual-track approach — pursuing KAS STC concurrently with NATO CBRN qualification — compresses the combined timeline by approximately 14 months relative to sequential certification."
citations:
  - title: "Korean Airworthiness Standards (KAS) — MOLIT Aviation Safety Bureau"
    url: "https://www.molit.go.kr/aviation/eng"
    publishedYear: 2024
  - title: "EASA CS-23 Normal-Category Aeroplanes Certification Specifications"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2023
  - title: "NATO STANAG 2517 — CBRN Collective Protection and Decontamination"
    url: "https://www.nato.int/cps/en/natohq/topics_48737.htm"
    publishedYear: 2022
  - title: "OPCW — Chemical Weapons and Civil Infrastructure Risk Assessment"
    url: "https://www.opcw.org/our-work/preventing-chemical-terrorism"
    publishedYear: 2023
  - title: "RAND Corporation — CBRN Threats to Civilian Transportation Infrastructure"
    url: "https://www.rand.org/topics/chemical-biological-radiological-and-nuclear.html"
    publishedYear: 2022
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast 2027"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-1176.html"
    publishedYear: 2023
  - title: "Anduril Industries — Lattice Platform Overview"
    url: "https://www.anduril.com/capability/lattice"
    publishedYear: 2024
ogImage: "cbrn-ai-blis-d-kas-civil-aviation-2026.png"
---

# BLIS-D Airworthiness: KAS Part 21/23 and Civil Aviation Decon

## Abstract

When Aum Shinrikyo released **Sarin** on the Tokyo subway in March 1995, the world's first instinct was to ask: how do you decontaminate a confined, mechanically complex, people-filled space in under two minutes? Thirty years later, that question has a technical answer. What remains unsolved — until now — is the regulatory architecture that allows a military-grade decontamination system to legally operate aboard a civil aircraft. **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination), UAM KoreaTech's waterless 90-second dry decon platform, is engineered precisely for this gap. Its bleed-air pneumatic integration model maps directly onto South Korea's **KAS Part 21** and **KAS Part 23** airworthiness certification frameworks administered by the **Ministry of Land, Infrastructure and Transport (MOLIT)**. This article argues that pursuing a Supplemental Type Certificate under KAS represents not merely a regulatory checkbox but a strategic multiplier — creating a legally deployable civil-aviation asset that can be autonomously tasked by Anduril's **Lattice** mesh network and that satisfies the structural preconditions for NATO STANAG CBRN qualification. The dual-use dividend is substantial: a single certified BLIS-D pod can serve military airlift, commercial carrier emergency protocols, and airport first-response simultaneously, across a unified legal and technical standard.

---

## 1. Historical Anchor — The Tokyo Subway Attack, 1995

### Inner Landscape

On 20 March 1995, Aum Shinrikyo's leadership believed that a nerve agent attack on Tokyo's commuter infrastructure would be operationally decisive and practically undetectable until it was too late for authorities to respond coherently. Shoko Asahara and his inner circle operated under a doctrine of asymmetric confidence: they understood that metropolitan emergency services had no decontamination protocol for enclosed, high-traffic transit environments. Their inner calculus was not wrong. Japanese first responders arrived at affected stations with no standard decon kits for the subway environment, and the primary decontamination method — flooding stations with water — actually assisted the hydrolysis of **Sarin** but created secondary contamination risks for responders. The attack killed 13 people and injured approximately **5,800**, with many casualties attributable not to the initial exposure but to delayed or inadequate decontamination.

### Environmental Read

What Aum Shinrikyo catastrophically miscalculated was the political durability of open societies in the face of mass-casualty terrorism. The attack produced not systemic collapse but a sustained, generationally funded investment in CBRN civil defense infrastructure across the G7 and beyond. What Tokyo's emergency planners missed on that day, however, was equally instructive: the intersection of two separate failure modes. The first was the absence of any rapid, enclosed-space decon capability. The second was the complete disconnect between civil emergency frameworks and any military-grade CBRN tool that might have closed that gap. Military decon units existed; they simply had no legal authority to deploy into a civil subway — a regulatory wall that persists today in most jurisdictions, including South Korea.

### Differential Factor

The Tokyo attack was different from prior CBRN incidents in one crucial dimension: it occurred inside a mechanically serviced, enclosed conveyance — a space architecturally similar to a commercial aircraft cabin. Both subways and aircraft share recirculated air systems, limited egress, and high passenger density. The attack thus provided the first real-world proof of concept that enclosed conveyances were priority CBRN targets, not incidental ones. It also demonstrated that any effective response system would need to operate within the physical and temporal constraints of the conveyance itself — not external to it. A decon system that requires the passengers to exit, undress, and pass through a shower tent is irrelevant when the conveyance is a pressurized aircraft at 35,000 feet or a subway car mid-tunnel.

### Modern Bridge

The regulatory gap exposed in 1995 — military capability meeting civil legal barriers — is precisely what KAS Part 21 and Part 23 certification resolves for **BLIS-D** in South Korea. By obtaining a Supplemental Type Certificate through **MOLIT**, UAM KoreaTech bridges the legal divide: **BLIS-D** becomes an airworthiness-certified modification rather than a military device operating under emergency exception. This matters acutely for the Korean Peninsula threat environment, where North Korea's documented chemical weapons stockpile — estimated by the **IISS** at **2,500–5,000 metric tons** — includes persistent and non-persistent nerve agents deliverable against civil aviation infrastructure. A certified onboard decon capability converts every compliant civil aircraft into a CBRN-resilient asset without requiring military authorization for deployment.

---

## 2. Problem Definition — The Certification Vacuum in Airborne Decon

The global market for CBRN defense equipment is projected to reach **USD 18.9 billion by 2027**, growing at a **CAGR of 6.2%**, according to **MarketsandMarkets**. The airborne segment — equipment designed to operate aboard or in direct support of aircraft — remains disproportionately small relative to ground-based decon, for one primary reason: the absence of certified, type-approved products that civil aviation regulators will accept.

Currently, **no commercial aircraft OEM** offers a factory-installed CBRN decontamination system as a standard or optional line item. Emergency response protocols for chemical contamination aboard civil aircraft — as documented by ICAO Doc 9731 and IATA Emergency Response Procedures — rely on post-landing triage, which presupposes the aircraft can safely land, that ground-based decon teams are pre-positioned, and that contaminated passengers can be safely evacuated. Each of these presuppositions fails under realistic attack scenarios. **RAND Corporation** analysis of civil infrastructure CBRN vulnerabilities identifies the "last-mile decon gap" — the period between contamination onset and ground-based response — as the interval of maximum casualty multiplication.

In South Korea specifically, **MOLIT's** aviation safety regulatory framework has been progressively aligned with EASA and FAA standards since the 2014 revision of the Aviation Safety Act (항공안전법), but there is no existing KAS product category for CBRN mitigation equipment. This is not a prohibition — it is a vacuum. The STC pathway under **KAS Part 21** explicitly accommodates novel system integrations that modify an in-service airframe's operational envelope. The absence of prior applicants in this category is an opportunity, not an obstacle.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS Certification Architecture

**BLIS-D** is engineered around a foundational design principle that makes KAS certification structurally tractable: it does not introduce a new fluid system, electrical architecture, or structural modification into the host airframe. Instead, it taps the aircraft's existing **bleed-air pneumatic circuit** — the same high-pressure, high-temperature air supply that already drives cabin pressurization, anti-icing, and pneumatic actuators — to aerosolize and distribute a dry reactive sorbent compound through existing cabin air distribution paths.

This design choice has direct regulatory consequences under **KAS Part 23**. Because **BLIS-D** introduces no new flammable liquids, no structural penetrations, and no independent electrical power draw beyond a standard 28VDC control interface, it avoids the most burdensome certification categories under Part 23 Subparts D (Design and Construction) and F (Equipment). The primary certification engineering deliverables reduce to: bleed-air extraction load analysis (confirming the pneumatic tap does not degrade engine bleed margin below limits), vibration qualification of the pod structure to Part 23 §23.251, and electromagnetic compatibility testing per RTCA DO-160G.

Under **KAS Part 21**, the Supplemental Type Certificate pathway allows **MOLIT** to approve this modification without requiring the original airframe manufacturer's participation — a critical commercial advantage when retrofitting legacy medevac or government transport fleets. UAM KoreaTech's concurrent NATO STANAG alignment strategy compounds this advantage: test data generated for KAS vibration and environmental qualification directly satisfies STANAG 4539 aircraft survivability evidence requirements, collapsing two qualification programs into one test campaign.

The Anduril **Lattice** interoperability layer completes the architecture. A KAS-certified **BLIS-D** unit reports decon cycle status via a secure data bus interface — compatible with Lattice's REST API sensor integration framework — enabling autonomous mission planning: Lattice can task a certified civil aircraft to execute a decon sortie, confirm **BLIS-D** readiness, and log cycle completion as a verified event in the common operating picture. Certification is the legal precondition; Lattice is the operational enabler.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea occupies a unique regulatory and geopolitical position that makes the KAS Part 21/23 certification play extraordinarily well-timed. Three converging factors define the window.

**First, North Korea's chemical threat posture.** The **OPCW** has documented North Korea's non-signatory status and circumstantial evidence of **VX** production. The 2017 assassination of Kim Jong-nam using **VX** at Kuala Lumpur International Airport — a civil aviation hub — was the most operationally significant public demonstration that civil aviation infrastructure is a preferred delivery environment for state-level chemical weapons deployment. South Korean defense planners cannot treat this as a theoretical risk.

**Second, Korea's aviation export ambitions.** Korea Aerospace Industries' KF-21 program and the ongoing KUH-1 Surion export campaign create a downstream market: every KAI platform sold internationally is a potential **BLIS-D** integration candidate. A KAS STC establishes the foundational type approval from which EASA and FAA validation applications under bilateral aviation safety agreements can proceed — South Korea has a signed Bilateral Aviation Safety Agreement (BASA) with the United States and an equivalent arrangement with EASA member states.

**Third, MOLIT's 2025-2028 Aviation Safety Plan** explicitly prioritizes expanding the special-mission aircraft certification framework. UAM KoreaTech's application would be the first CBRN-specific STC submission under this framework, positioning the company as the definitional reference applicant — with all the standard-setting influence that status confers in regulatory proceedings.

---

## 5. Forward Outlook

UAM KoreaTech's **BLIS-D** KAS certification roadmap targets three sequential milestones over a **24-month horizon**. By Q3 2026, the company anticipates completing the pre-application meeting with **MOLIT**'s Aviation Safety Bureau and submitting the initial Certification Basis definition document — establishing which specific KAS Part 23 paragraphs apply and which compliance methods will be used. By Q2 2027, ground and laboratory qualification testing — vibration, EMC, bleed-air load, and dry-run decon cycle validation — will be completed, with data packages submitted for MOLIT review. Full STC issuance is targeted for Q4 2027, concurrent with the first **BLIS-D** integration on a KAI KUH-1 Surion airframe under a Republic of Korea Air Force evaluation contract.

Simultaneously, the Anduril **Lattice** interface specification will be finalized with Anduril's integration team by Q1 2027, enabling the first live demonstration of a Lattice-tasked civil-aviation **BLIS-D** decon sortie at a jointly designated test event with NATO partner observers. NATO STANAG qualification submission follows STC issuance by approximately six months, with full dual-use certification status achieved by mid-2028.

---

## Conclusion

When Aum Shinrikyo attacked Tokyo in 1995, the most dangerous gap in the response was not chemical — it was regulatory: capable military tools could not