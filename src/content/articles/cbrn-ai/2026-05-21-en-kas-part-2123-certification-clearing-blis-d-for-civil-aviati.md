---
title: "KAS Part 21/23 Certification: Clearing BLIS-D for Civil Aviation"
description: "How Korean Airworthiness Standards Part 21 and Part 23 create a dual-use certification pathway for BLIS-D dry decontamination on civil aircraft platforms."
category: "cbrn-ai"
publishedAt: 2026-05-21
author: "박무진"
language: "en"
quickAnswer: "KAS Part 21 and Part 23, administered by MOLIT, provide a type-certification pathway that enables BLIS-D's bleed-air dry decontamination system to be integrated into civil aircraft, bridging military-grade CBRN protection and FAA/EASA-equivalent airworthiness compliance for dual-use operators."
tags: ["KAS Part 21", "KAS Part 23", "BLIS-D", "CBRN Decontamination", "Dual-Use Airworthiness", "NATO STANAG"]
faq:
  - question: "What are KAS Part 21 and KAS Part 23, and why do they matter for CBRN equipment?"
    answer: "KAS Part 21 (Certification Procedures for Products, Parts, and Appliances) and KAS Part 23 (Airworthiness Standards for Normal-Category Aircraft) are Korean Airworthiness Standards administered by Korea's Ministry of Land, Infrastructure and Transport (MOLIT). They are structurally harmonized with FAA FAR Part 21/23 and EASA CS-21/CS-23, creating mutual recognition pathways with allied aviation authorities. For CBRN equipment like BLIS-D, achieving KAS Part 21 Supplemental Type Certificate (STC) status means the system meets structural, electrical, and fluid-integrity standards required for installation on certified airframes. This is critical for operators—such as emergency medical aviation, border patrol, and special mission aircraft—who require airworthy decontamination capability without compromising aircraft certification status."
  - question: "How does BLIS-D's bleed-air architecture support KAS Part 23 compliance?"
    answer: "BLIS-D draws on the aircraft's existing bleed-air supply—typically 250–400 kPa, 150–200 °C regulated extraction—rather than introducing independent pressurized tanks or liquid reservoirs that would add weight, flammability risk, and certification burden. This architecture aligns with KAS Part 23's weight-and-balance, flammability, and structural load requirements for normal-category aircraft. The absence of aqueous agents eliminates drain-and-containment provisions that KAS Part 23 Subpart D would otherwise mandate for liquid systems. By leveraging certified pneumatic infrastructure already present on the airframe, BLIS-D minimizes the delta between the baseline Type Certificate and the Supplemental Type Certificate scope, reducing MOLIT review cycles and airworthiness directive risk."
  - question: "What is the relationship between KAS Part 21/23 certification and NATO STANAG 4632 for CBRN decontamination?"
    answer: "NATO STANAG 4632 establishes minimum performance standards for collective protection and decontamination systems on military platforms, while KAS Part 21/23 governs the airworthiness installation standards on civil-registered aircraft. These are complementary, not competing, frameworks. For dual-use operators—national guard aviation units flying civil-registered aircraft, or humanitarian response platforms—a system must satisfy both regimes. BLIS-D's design philosophy targets STANAG 4632 efficacy thresholds (≥99.9% agent reduction on critical surfaces within 90 seconds) while its bleed-air integration approach is architected to minimize the airworthiness footprint assessed under KAS Part 21 STC procedures. This dual compliance posture is UAM KoreaTech's primary market differentiator in the MOLIT-regulated civil-defense aviation segment."
citations:
  - title: "Korean Airworthiness Standards (KAS) — Ministry of Land, Infrastructure and Transport"
    url: "https://www.molit.go.kr/english/index.do"
    publishedYear: 2024
  - title: "FAA FAR Part 23 — Airworthiness Standards: Normal Category Airplanes"
    url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23"
    publishedYear: 2023
  - title: "EASA CS-23 Certification Specifications for Normal, Utility, Aerobatic and Commuter Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2023
  - title: "NATO STANAG 4632 — Collective Protection Systems in Military Vehicles and Shelters"
    url: "https://www.nato.int/cps/en/natohq/topics_48895.htm"
    publishedYear: 2022
  - title: "OPCW — Chemical Weapons Convention and Decontamination Standards"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2028"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-215.html"
    publishedYear: 2023
ogImage: "cbrn-ai-blis-d-kas-civil-aviation-2026.png"
---

# KAS Part 21/23 Certification: Clearing BLIS-D for Civil Aviation

## Abstract

Civil aviation and CBRN defense have historically occupied separate regulatory universes. Airworthiness authorities govern structural integrity, flammability, and weight margins; CBRN standards govern agent-reduction efficacy and crew survivability. For a decade, that separation meant any serious decontamination system installed on a certified aircraft required either a military registration exemption or a costly, custom Supplemental Type Certificate (STC) with no reusable framework for future operators.

Korea's Ministry of Land, Infrastructure and Transport (MOLIT) has changed that calculus. Korean Airworthiness Standards **KAS Part 21** and **KAS Part 23**—harmonized with FAA FAR 21/23 and EASA CS-21/CS-23—now provide a structured, precedent-building STC pathway for mission equipment on normal-category aircraft. For **BLIS-D**, UAM KoreaTech's waterless, 90-second bleed-air decontamination system, this pathway is not a regulatory obstacle; it is a strategic moat. A system designed from the ground up to exploit existing pneumatic architecture rather than introduce new pressurized fluids is exactly the profile MOLIT's STC reviewers are most likely to approve quickly, and allied airworthiness authorities are most likely to validate by mutual recognition.

This article traces the regulatory architecture, uses the 1994 Tokyo subway sarin precursor incidents as a historical anchor for why civil-platform decon matters, and maps the specific technical features of **BLIS-D** onto the KAS certification framework.

---

## 1. Historical Anchor — Matsumoto Sarin Attack, 1994

### Inner Landscape

Ikuo Hayashi, the physician who became one of the Aum Shinrikyo operatives, was medically trained to believe in systemic, controllable interventions. His worldview treated human bodies as biochemical systems that could be precisely modulated—a mental model that, grotesquely inverted, informed the cult's belief that sarin could be deployed with calibrated lethality. This is not atypical of technically educated CBRN actors: they understand the chemistry but systematically underestimate the contamination persistence and secondary-transfer problem. They assume exposure ends when dispersal stops.

That blind spot—the false boundary between primary and secondary contamination—is the analytical failure that explains why first responders at Matsumoto suffered casualties from skin contact with victims' clothing. The attackers did not plan for the contamination surface to extend beyond the immediate plume footprint. First responders did not plan for it either.

### Environmental Read

The Matsumoto attack occurred on **June 27, 1994**, in a residential district, not a transit hub. Eight people died; **600 were injured**. Japanese emergency services had no established civil CBRN protocol. The vehicles that transported victims to hospitals became secondary contamination vectors. Hospital intake areas received undecontaminated patients, exposing staff. The environmental factor Aum Shinrikyo's planners missed—and that responders discovered lethally—was that sarin's vapor pressure and dermal persistence made every contaminated surface a re-exposure risk for hours after the primary release.

When the Tokyo subway attack followed in **March 1995**, the same failure mode recurred at scale: **13 dead, nearly 1,000 requiring hospital treatment**, with documented secondary exposure among hospital staff. Aircraft used in subsequent emergency response sorties had no standardized decontamination protocols and no certified equipment to execute them.

### Differential Factor

What differentiated Matsumoto from a contained incident was the absence of any rapid, field-deployable decontamination capability for non-military responders. Military units in Japan had some organic CBRN decon capability, but the interface between civilian emergency aviation and military decon assets was undefined. Civil-registered medevac helicopters transported victims without any surface decontamination. The contamination chain was unbroken.

This is the structural gap that persists globally in **2026**: civil aviation assets—air ambulances, border surveillance aircraft, disaster response platforms—operate in environments where CBRN exposure is a credible threat, but their airworthiness certifications do not accommodate the installation of effective decontamination systems. The certification gap is as dangerous as the capability gap.

### Modern Bridge

Thirty-two years after Matsumoto, the regulatory architecture to close that gap now exists in Korea. **MOLIT's KAS Part 21 STC process** provides the legal instrument; **KAS Part 23** provides the technical standards. What was missing in 1994—a certified, lightweight, non-aqueous decontamination system that could be integrated into a civil-registered airframe without triggering a full re-certification—is now technically achievable with **BLIS-D's** bleed-air architecture. The historical lesson is not merely cautionary; it is a product specification.

---

## 2. Problem Definition — The Certification Gap in Civil CBRN Aviation

The global CBRN defense market was valued at approximately **$16.3 billion in 2022** and is projected to reach **$24.2 billion by 2028**, growing at a CAGR of **6.8%**, according to MarketsandMarkets. Within that envelope, airborne CBRN response is among the fastest-growing subsegments, driven by dual-use demand from national guard aviation, border security, and civil emergency management.

Yet the majority of civil-registered aircraft operating in CBRN-capable roles carry no certified decontamination equipment. The technical reason is straightforward: conventional liquid-based decontamination systems—those using DS2, CASCAD foam, or aqueous hypochlorite solutions—require pressurized tanks, containment drains, and corrosion-resistant plumbing that imposes structural modifications well beyond what a standard Supplemental Type Certificate covers easily. Under **KAS Part 21**, any modification affecting primary structure, fuel systems, or weight-and-balance by more than approved margins triggers a Major Alteration classification, requiring independent Designated Engineering Representative (DER) review and extended MOLIT validation timelines.

For operators in Korea's civil defense aviation network—Korea Forest Service air assets, National Fire Agency rotary-wing units, Coast Guard surveillance aircraft—this certification burden has historically meant a binary choice: fly without decon capability, or accept military registration with its operational restrictions. Neither option is satisfactory for **MOLIT-regulated operators** who must maintain civil airworthiness certificates for insurance, liability, and international flight operations.

The regulatory harmonization between KAS Part 23 and EASA CS-23 (formalized through Korea–EU aviation safety bilateral agreements) means that a **KAS Part 21 STC** achieved in Korea carries significant weight in EASA member-state approval processes, and vice versa. A Korean operator that achieves STC approval for **BLIS-D** on a Cessna Caravan or AW139 airframe creates a template that European civil protection operators can reference—compressing their own approval timelines and expanding the addressable market for UAM KoreaTech substantially.

---

## 3. UAM KoreaTech Solution — BLIS-D's Airworthiness-Native Architecture

**BLIS-D** was engineered with a specific constraint that most CBRN system designers treat as a limitation but that proves to be a certification asset: it uses no liquid decontaminant reservoirs. The system taps the aircraft's existing **bleed-air supply**—extracted post-compressor at regulated temperatures of **150–200 °C** and pressures of **250–400 kPa**—to drive a thermochemical dry-vapor decontamination cycle. Solid precursor media, not aqueous agents, are activated by the bleed-air stream, generating reactive species that achieve **≥99.9% reduction** of G-series and V-series nerve agents, as well as documented efficacy against Bacillus anthracis spore simulants, within a **90-second cycle**.

From a **KAS Part 23** compliance perspective, this architecture eliminates several of the most burdensome certification challenges:

- **No fluid containment modifications**: KAS Part 23 Subpart D flammability and drainage requirements for liquid systems do not apply to a solid-media, dry-vapor system.
- **Minimal weight delta**: Solid media cartridges weigh **less than 2.1 kg per full mission load**, well within normal-category aircraft Major Alteration weight thresholds.
- **No independent pressure vessels**: The system uses the certified pneumatic architecture of the host airframe; no new pressure vessel qualification under KAS Part 23 Subpart E is required.
- **Electrical interface**: **BLIS-D's** control logic interfaces with the aircraft's 28VDC bus via a standard avionics connector, consistent with KAS Part 23.1353 electrical equipment standards.

For **KAS Part 21 STC** purposes, this profile means the modification scope is classified as a **Minor Alteration** in most normal-category airframe applications—a dramatically shorter MOLIT review timeline compared to liquid-based competitors. UAM KoreaTech's certification roadmap targets initial STC approval on two reference airframes (one fixed-wing, one rotary) by Q2 2027, establishing the precedent dataset that accelerates subsequent platform approvals.

Critically, the same bleed-air integration logic that supports **KAS Part 23** compliance also maps directly onto **NATO STANAG 4632** performance validation protocols, because the decontamination efficacy is independent of platform type. A single test campaign can generate data satisfying both MOLIT airworthiness reviewers and NATO CBRN certification panels simultaneously.

---

## 4. Strategic Context — Why Korea, Why Now

Korea's position in 2026 is uniquely configured for this certification push. Three converging factors create a narrow but durable window.

**Regulatory maturity**: MOLIT completed its latest harmonization revision of KAS Part 21 and Part 23 in **2024**, aligning more closely with FAA's 2017 Part 23 rewrite (which shifted from prescriptive to performance-based standards). Performance-based standards are structurally more accommodating of novel system architectures—precisely the environment in which **BLIS-D's** non-conventional bleed-air approach can be assessed on efficacy outcomes rather than legacy prescriptive checklists.

**Threat environment**: North Korea's documented chemical weapons stockpile—estimated by the **IISS Military Balance** at **2,500–5,000 metric tons** of agent, including VX, sarin, and mustard—creates a persistent, credible threat to civil aviation operating along the Korean Peninsula's border regions. National Fire Agency and Coast Guard aviation assets operate in potential first-response roles where CBRN exposure is a mission-credible scenario, not a theoretical contingency. MOLIT has a legitimate public safety mandate to enable these operators.

**Defense export strategy**: Korea's **K-Defense** export push—anchored by K2 tank, K9 howitzer, and FA-50 successes—is explicitly expanding into dual-use and CBRN domains under the **Defense Acquisition Program Administration (DAPA)** roadmap. A domestically certified, export-ready civil decon system strengthens Korea's positioning in Southeast Asian and Middle Eastern civil defense aviation markets where neither FAA nor EASA certification is a prerequisite, but where Korean certification carries growing credibility.

**Anduril Lattice interoperability**: **BLIS-D's** integration roadmap includes sensor-fusion handshake with **CBRN-CADS** detection outputs, and both systems are being architected for data-layer compatibility with Anduril's Lattice platform. A civil-certified **BLIS-D** installation that can receive detection cueing from Lattice-connected ground sensors and auto-initiate a decon cycle represents a capability threshold no competitor has yet demonstrated.

---

## 5. Forward Outlook

UAM KoreaTech's certification roadmap for **BLIS-D** civil aviation deployment proceeds in four phases through mid-2028.

**Q3 2026**: Completion of KAS Part 21 pre-application meeting with MOLIT Aircraft Certification Office; submission of System Safety Assessment (SSA) and Failure Mode and Effects Analysis (FMEA) documentation for reference airframe one.

**Q4 2026**: Ground-based bleed-air integration testing at Korea Aerospace Research Institute (KARI) facilities; parallel NATO STANAG 4632 efficacy testing at a certified chemical defense test range, generating dual-use validation data.

**Q2 2027**: Target STC approval on first reference airframe; simultaneous submission to EASA for Validation of Foreign Approval under the Korea–EU bilateral aviation safety agreement, targeting EASA validation by Q4 2027.

**2028**: Expansion of STC coverage to three additional airframe types; launch of operator training and cartridge logistics network in Korea, with international operator licensing framework for Southeast Asian civil defense aviation customers.

The 12-month critical path item is FMEA depth: MOLIT reviewers will scrutinize the failure consequences of bleed-air supply interruption during an active decon cycle. UAM KoreaTech's engineering team has designed a passive-safe shutdown mode that defaults to ambient pressure venting—a design choice made explicitly to satisfy this anticipated review concern.

---

## Conclusion

The Matsumoto responders who became secondary casualties in 1994 were not failed by their courage or their training—they were failed by the absence of certified, deployable decontamination equipment on the civil platforms they operated. **KAS Part 21 and Part 23**,