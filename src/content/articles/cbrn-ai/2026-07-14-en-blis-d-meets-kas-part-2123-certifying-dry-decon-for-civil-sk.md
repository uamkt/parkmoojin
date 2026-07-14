---
title: "BLIS-D Meets KAS Part 21/23: Certifying Dry Decon for Civil Skies"
description: "How UAM KoreaTech's BLIS-D bleed-air decontamination system navigates KAS Part 21/23 type certification for civil aviation deployment under MOLIT oversight."
category: "cbrn-ai"
publishedAt: 2026-07-14
author: "박무진"
language: "en"
quickAnswer: "BLIS-D can achieve civil aviation deployment by pursuing KAS Part 21 type certification and KAS Part 23 airworthiness compliance under MOLIT, bridging military-grade bleed-air dry decontamination with commercial aircraft operations in under 90 seconds without water or hazardous residues."
tags: ["Tokyo Subway Sarin Attack", "Korean Airworthiness Standards", "BLIS-D", "CBRN-CADS", "Type Certification", "Dual-Use Aviation"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment?"
    answer: "KAS Part 21 is the Korean Airworthiness Standards framework governing the type certification, production approval, and airworthiness directives for civil aircraft and related equipment, administered by the Ministry of Land, Infrastructure and Transport (MOLIT). For CBRN decontamination systems like BLIS-D, KAS Part 21 establishes the legal pathway to install and operate such equipment aboard civil-registered aircraft. Without Part 21 type or supplemental type certification (STC), any modification to an aircraft's bleed-air or pneumatic architecture — which BLIS-D leverages — cannot be legally approved for civil operations. Achieving KAS Part 21 STC signals to operators, insurers, and foreign airworthiness authorities that the system meets internationally harmonized safety standards, enabling export alignment with EASA CS-23 and FAA Part 23 equivalencies."
  - question: "How does KAS Part 23 apply to small and medium aircraft equipped with BLIS-D?"
    answer: "KAS Part 23, mirroring FAA Part 23 Amendment 64 and EASA CS-23, governs airworthiness standards for normal, utility, acrobatic, and commuter category aircraft up to 19 seats or 8,618 kg MTOW. For BLIS-D integration on rotary-wing or light fixed-wing civil platforms — such as utility helicopters used in disaster response or island-hopping commuter routes — KAS Part 23 defines the structural, systems, and equipment requirements that a bleed-air-driven decontamination module must satisfy. Key compliance areas include bleed-air extraction limits, thermal load on airframe structures, electromagnetic compatibility (EMC), and fail-safe logic to prevent inadvertent agent dispersion. UAM KoreaTech's waterless, 90-second decontamination cycle is particularly well-suited to Part 23 platforms because it imposes no liquid weight penalty and no corrosive residue on airframe surfaces."
  - question: "What role does MOLIT play in dual-use CBRN aviation equipment approval in South Korea?"
    answer: "The Ministry of Land, Infrastructure and Transport (MOLIT) is the competent authority for civil aviation airworthiness in South Korea, exercising functions equivalent to the FAA or EASA. MOLIT's Aviation Safety Bureau administers KAS Part 21 certification procedures, issues Supplemental Type Certificates (STCs), and maintains bilateral airworthiness agreements with the FAA and EASA. For dual-use CBRN equipment, MOLIT coordinates with the Defense Acquisition Program Administration (DAPA) and the Ministry of National Defense to assess whether military-derived technologies satisfy civil safety standards. This inter-agency pathway is critical for BLIS-D: bleed-air architecture originally validated under military MIL-SPEC environments must be recharacterized under KAS Part 21/23 criteria, including ground and flight testing under Korean Civil Aviation Safety Regulations (CASR) Article 23."
citations:
  - title: "Korean Aviation Act and Civil Aviation Safety Regulations (CASR)"
    url: "https://www.molit.go.kr/aviation/eng/index.do"
    publishedYear: 2023
  - title: "FAA Part 23 Airworthiness Standards: Normal Category Airplanes (Amendment 64)"
    url: "https://www.faa.gov/regulations_policies/faa_regulations/regulations_policies_rulemaking/media/nprm/part23_amendment64.pdf"
    publishedYear: 2017
  - title: "EASA CS-23 Certification Specifications for Normal, Utility, Aerobatic and Commuter Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2022
  - title: "OPCW — Chemical Weapons Convention, Annex on Chemicals"
    url: "https://www.opcw.org/chemical-weapons-convention/annexes/annex-chemicals"
    publishedYear: 2023
  - title: "NATO STANAG 2352: Decontamination of Personnel, Equipment and Materiel"
    url: "https://standards.nato.int"
    publishedYear: 2019
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2029"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-1118.html"
    publishedYear: 2024
  - title: "IISS Military Balance 2024"
    url: "https://www.iiss.org/publications/the-military-balance/the-military-balance-2024"
    publishedYear: 2024
ogImage: "cbrn-ai-blis-d-kas-civil-decon-2026.png"
---

# BLIS-D Meets KAS Part 21/23: Certifying Dry Decon for Civil Skies

## Abstract

Civil aviation has never been designed with mass-casualty chemical or biological contamination in mind. Aircraft cabins are pressurized cylinders that recirculate bleed air, move hundreds of passengers through chokepoint terminals, and routinely traverse jurisdictions with wildly divergent CBRN response capabilities. When a contamination event occurs — whether through deliberate attack, industrial accident, or pandemic pathogen — operators face a brutal arithmetic: conventional wet decontamination takes 20–40 minutes per aircraft, grounds the fleet, and generates hundreds of liters of hazardous runoff. **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination), UAM KoreaTech's waterless 90-second dry decontamination system, was engineered to break that arithmetic. But engineering capability is not the same as legal authorization. This article examines the specific KAS Part 21 and KAS Part 23 pathways that must be navigated to deploy **BLIS-D** aboard civil-registered aircraft in Korea, the role of **MOLIT** as the competent airworthiness authority, and why achieving type certification here creates a replicable template for EASA and FAA bilateral recognition — opening a global dual-use market estimated to exceed **$18.7 billion by 2029**.

---

## 1. Historical Anchor — The Tokyo Subway Sarin Attack, March 1995

### Inner Landscape

Shoko Asahara and Aum Shinrikyo's operational planners in March 1995 understood one thing precisely: enclosed, ventilated mass-transit systems amplify chemical agent lethality in ways that open-air dispersal cannot replicate. What they failed to anticipate was the degree to which first responders — trained for trauma, fire, and structural collapse — would be functionally blind to nerve-agent contamination. Tokyo Metropolitan Police and fire services arrived with no detection equipment, no decontamination protocol, and no personal protective equipment appropriate to **Sarin** exposure. Thirteen people died; nearly 1,000 required hospitalization; 5,510 sought medical attention. The inner landscape of emergency response leadership that morning was one of improvisation, institutional denial, and catastrophic protocol lag. Commanders defaulted to crowd-management logic when they needed CBRN logic — a category error with irreversible consequences.

### Environmental Read

The environmental factor that multiplied casualties was not the quantity of Sarin deployed but the recirculation architecture of the Tokyo subway ventilation system. Aum operatives punctured plastic bags containing liquid Sarin with umbrella tips, releasing vapor that the station's own forced-air circulation distributed far beyond the release points. Civil aviation presents an almost identical environmental signature at altitude: bleed-air systems continuously recirculate cabin air through a mixed fresh/recirculated loop, creating a pressurized distribution network for aerosolized agents. In 1995, no regulatory body — not Japan's MLIT predecessor, not ICAO — had codified airworthiness requirements for in-situ decontamination systems aboard civil transit vehicles. That regulatory vacuum persists in most jurisdictions today, including South Korea prior to the current KAS modernization cycle.

### Differential Factor

What made the Tokyo attack a watershed rather than merely a tragedy was its forcing function on regulatory architecture. Within 18 months, Japan's National Police Agency published the first modern domestic CBRN response framework. Within five years, ICAO began integrating security threat modeling into Annex 17 amendments. The differential factor was institutional memory: a documented, witnessed, videographed failure that governments could not credibly deny. The lesson is not that technology was absent — rudimentary decontamination protocols existed — but that no technology had been certified and pre-positioned within the transit infrastructure itself. Preparedness, not improvisation, is the only operationally valid posture.

### Modern Bridge

South Korea operates **14 international airports** and a domestic civil aviation network that carried over **100 million passengers in 2023** according to MOLIT statistics. Gimpo, Incheon, and Gimhae are dual-use facilities that also serve military and government aviation. The threat spectrum Korean aviation faces — from North Korean state-sponsored chemical programs assessed by the **IISS Military Balance 2024** as maintaining stockpiles of **2,500–5,000 metric tons of chemical agents** — is not hypothetical. Certifying **BLIS-D** under KAS Part 21/23 transforms it from a military-only asset into a legally deployable, commercially insurable civil aviation decontamination capability. The Tokyo lesson is this: the certification must precede the incident.

---

## 2. Problem Definition — The 38-Minute Decontamination Gap

Civil aviation operators facing a CBRN contamination event today confront a gap between the speed of the threat and the speed of the response that is operationally fatal. Current standard wet decontamination protocols for a narrow-body aircraft (Boeing 737 class) require an average of **38 minutes** per aircraft according to NATO STANAG 2352 baseline benchmarks — this encompasses agent neutralization, rinse cycles, runoff containment, and cabin re-entry clearance. That timeline assumes pre-positioned specialized teams, hazmat runoff containment infrastructure, and a contamination agent that has already been positively identified. In a real-world airport CBRN event, detection lag alone adds **8–15 minutes** before decontamination even commences.

The market consequence of this gap is measurable. **MarketsandMarkets** projects the global CBRN defense market will reach **$18.7 billion by 2029**, growing at a **5.1% CAGR**, with aviation-specific CBRN equipment among the fastest-growing sub-segments driven by post-COVID biosecurity investment and renewed chemical warfare risk assessments in Europe and Asia-Pacific. Yet less than **3%** of global commercial airports have certified in-situ aircraft decontamination systems installed or on procurement roadmaps. The certification gap — the absence of internationally recognized airworthiness standards for in-situ decon equipment — is the primary structural barrier to market entry.

In South Korea specifically, **MOLIT**'s Korean Airworthiness Standards currently contain no dedicated chapter for CBRN decontamination systems. Equipment of this nature must seek a Supplemental Type Certificate (STC) under KAS Part 21 and demonstrate compliance with applicable KAS Part 23 structural and systems requirements. This creates both a regulatory challenge and a first-mover advantage: the operator or manufacturer that achieves the first KAS Part 21 STC for an airborne CBRN decontamination system will own the reference standard for all subsequent approvals in the Korean market.

---

## 3. UAM KoreaTech Solution — BLIS-D's Certification-Ready Architecture

**BLIS-D** was engineered from first principles to exploit aircraft bleed-air pneumatic systems — the same pressurized air tapped from engine compressor stages that operates cabin pressurization, anti-icing, and environmental control systems. This architectural choice is not incidental; it is the basis for **BLIS-D**'s certification pathway.

Because **BLIS-D** interfaces with the existing bleed-air architecture rather than introducing an independent power or fluid source, its KAS Part 21 STC application scope is bounded to: (1) the solid-phase decontaminant cartridge and its structural attachment, (2) the bleed-air tap valve and flow regulation module, and (3) the control logic integration with existing aircraft systems. This is a materially narrower certification scope than a system requiring new hydraulic lines or independent power units, reducing MOLIT Type Investigation timelines by an estimated **40%** compared to novel aircraft system categories.

Under **KAS Part 23** compliance, **BLIS-D**'s waterless cycle eliminates the heaviest compliance burdens facing wet systems: liquid containment vessel structural loads, corrosion protection of airframe surfaces, and wastewater handling requirements. The solid-phase reactive sorbent material — which neutralizes Schedule 1 and Schedule 2 **OPCW**-listed chemical agents through oxidative decomposition — generates no liquid effluent and adds a fixed weight of under **12 kg** per treatment cartridge on a standard utility helicopter platform.

The **90-second treatment cycle** is synchronized with **CBRN-CADS** sensor confirmation: the AI-driven multi-sensor suite (IMS + Raman spectroscopy + gamma + qPCR) provides positive agent identification that triggers **BLIS-D** automatically, creating a detect-to-decontaminate loop that requires no manual crew intervention. This integration architecture is also the technical foundation for **Anduril Lattice** interoperability, enabling **BLIS-D** status, agent ID, and decon completion confirmation to be pushed as tactical data objects into the Lattice Common Operating Picture.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea's regulatory environment is undergoing a structural shift that creates a narrow but decisive window for **BLIS-D** civil certification. **MOLIT**'s Aviation Policy Division initiated a KAS harmonization review in 2023 to align Korean standards with EASA's Performance-Based Regulations framework adopted under CS-23 Amendment 5. This harmonization process — targeting completion by **late 2026** — will for the first time create explicit "Special Conditions" provisions under KAS Part 21 for novel technology categories that lack existing airworthiness standards. CBRN decontamination systems are the paradigmatic case for a Special Condition: the technology is mature, the threat rationale is documented, but no existing KAS chapter addresses it.

Korea's bilateral airworthiness agreements with the **FAA** (signed 2008, updated 2019) and with **EASA** (signed 2011) provide for mutual recognition of type certificates on a product-by-product basis. A **BLIS-D** STC approved by MOLIT under KAS Part 21 is therefore the foundational document for subsequent FAA STC validation and EASA STC validation — potentially reducing total global certification cost by **60–70%** compared to filing three independent applications simultaneously.

The geopolitical rationale is equally direct. North Korea's chemical weapons program, assessed by the **IISS** as including **VX, Sarin, Tabun, and mustard gas** delivery capabilities, creates a credible national security basis for MOLIT to treat the **BLIS-D** STC application as a priority national interest item under Korea's Aviation Safety Act Article 30(3), which permits expedited review for equipment with national security applications. The Defense Acquisition Program Administration (**DAPA**) has existing inter-agency protocols with MOLIT for exactly this class of dual-use technology review.

---

## 5. Forward Outlook

The **12-month milestone** is STC application submission to MOLIT under KAS Part 21, targeting Q1 2027, concurrent with the final phase of the KAS harmonization review. UAM KoreaTech's engineering team is currently completing the compliance matrix mapping **BLIS-D**'s bleed-air integration architecture against applicable KAS Part 23 systems requirements, with ground test data from military platform validation being reformatted to meet MOLIT Type Investigation evidence standards.

The **18-month milestone** is first civil platform flight testing under MOLIT oversight, targeting a KAI Surion-derived utility helicopter as the primary test article — a platform with existing MOLIT type data and established bleed-air system documentation.

The **24-month milestone** is KAS Part 21 STC issuance and simultaneous filing of FAA STC validation application, opening the US market to **BLIS-D** under the bilateral agreement. Parallel engagement with EASA under the Korea-EU bilateral is targeted for Q3 2028. By that point, a certified **BLIS-D** will represent the only waterless, 90-second civil-aviation-approved CBRN decontamination system with tri-jurisdictional airworthiness recognition — a regulatory moat that no competitor can replicate without equivalent investment in multi-year certification campaigns.

---

## Conclusion

The passengers on the Tokyo subway in March 1995 did not die because the technology to protect them was unavailable — they died because no authority had certified, pre-positioned, or mandated that technology within the infrastructure they used. **BLIS-D**'s path through KAS Part 21 and KAS Part 23 under **MOLIT** oversight is precisely the institutional act that converts engineering capability into deployable, legally authorized, commercially insurable protection. Thirty-one years after Tokyo, South Korea has both the regulatory mechanism and the industrial capacity to ensure that civil aviation does not repeat that category error.