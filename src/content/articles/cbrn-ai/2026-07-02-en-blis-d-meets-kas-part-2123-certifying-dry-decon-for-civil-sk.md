---
title: "BLIS-D Meets KAS Part 21/23: Certifying Dry Decon for Civil Skies"
description: "How UAM KoreaTech's BLIS-D waterless decontamination system aligns with Korean Airworthiness Standards Parts 21 and 23 to unlock civil aviation deployment."
category: "cbrn-ai"
publishedAt: 2026-07-02
author: "박무진"
language: "en"
quickAnswer: "BLIS-D can achieve civil aviation certification under KAS Part 21 (design approval) and Part 23 (airworthiness for normal-category aircraft) by classifying its bleed-air decon module as a supplemental type certificate amendment — enabling rapid deployment on commercial and medevac platforms without structural redesign."
tags: ["KAS Part 21", "KAS Part 23", "BLIS-D", "CBRN-CADS", "Type Certification", "Dual-Use Aviation"]
faq:
  - question: "What is KAS Part 21 and why does it matter for CBRN decontamination equipment installed on aircraft?"
    answer: "KAS Part 21 is the Korean Airworthiness Standards regulation governing the certification of aircraft designs and associated products, issued by the Ministry of Land, Infrastructure and Transport (MOLIT). It mirrors FAA FAR Part 21 and EASA Part 21 in structure, providing pathways for Type Certificates (TC), Supplemental Type Certificates (STC), and Parts Manufacturer Approvals (PMA). For CBRN decontamination equipment such as BLIS-D, KAS Part 21 is the legal gateway: any modification to a certified aircraft — including installation of a bleed-air-fed decontamination module — requires either a new TC or an STC amendment validated by the Korea Civil Aviation Safety Authority (CASA Korea). Failing to obtain this approval renders the aircraft non-airworthy, exposing operators to grounding risk. The STC pathway under KAS Part 21 is therefore the most commercially viable route for integrating BLIS-D onto existing civil platforms such as the ATR 72, King Air C90, or domestic cargo variants."
  - question: "How does KAS Part 23 define the structural and performance envelope for BLIS-D integration on normal-category aircraft?"
    answer: "KAS Part 23 sets airworthiness standards for normal, utility, acrobatic, and commuter-category aircraft with a maximum certificated takeoff weight up to 19,000 lb (8,618 kg) or up to 19 passenger seats. Aligned with FAA FAR Part 23 Amendment 64 and EASA CS-23, the standard governs structural loads, electrical system interfaces, pressurization compatibility, and emergency egress. For BLIS-D, the critical compliance nodes are: (1) bleed-air extraction rates must not reduce engine bleed margins below KAS 23.1043 limits; (2) the solid decontaminant canister must pass containment testing under KAS 23.561 emergency landing conditions; and (3) the system's electrical draw must be integrated within KAS 23.1351 electrical load analysis tolerances. UAM KoreaTech's engineering approach — modular canister design with a mass below 8 kg and a bleed-air tap rated at less than 2% engine bleed — is specifically architected to sit within these envelopes without requiring structural reinforcement of the airframe."
  - question: "What is the certification timeline and MOLIT process for obtaining an STC for BLIS-D on a civil aircraft platform?"
    answer: "Under MOLIT's current STC process, applicants submit a Certification Basis document to Korea CASA identifying the applicable KAS provisions, followed by a Compliance Plan, ground and flight test evidence, and a Designated Engineering Representative (DER) review. For a self-contained, non-pressurization-altering modification like BLIS-D, MOLIT typically processes STC applications within 12 to 18 months under the normal-category streamlined pathway introduced in the 2022 KAS Part 21 revision. UAM KoreaTech can accelerate this timeline by leveraging bilateral aviation safety agreements between Korea and the United States (BASA, signed 2009) and Korea and the European Union (bilateral 2011), which allow FAA/EASA test data to be accepted as partial compliance evidence, potentially reducing duplicative ground testing by an estimated 30 to 40 percent. The targeted milestone for BLIS-D's first civil STC approval is Q4 2027, contingent on completion of bleed-air extraction validation testing on a King Air B200 surrogate platform in Q1 2027."
citations:
  - title: "Korean Airworthiness Standards (KAS) Part 21 — MOLIT Official Gazette"
    url: "https://www.molit.go.kr/USR/I0204/m_45/dtl.jsp"
    publishedYear: 2022
  - title: "FAA FAR Part 23 — Airworthiness Standards: Normal Category Airplanes"
    url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23"
    publishedYear: 2023
  - title: "EASA CS-23 Amendment 5 — Certification Specifications for Normal-Category Aeroplanes"
    url: "https://www.easa.europa.eu/en/document-library/certification-specifications/cs-23-amendment-5"
    publishedYear: 2022
  - title: "OPCW — Chemical Weapons Convention Verification and Decontamination Standards"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "NATO STANAG 4632 — Minimum Requirements for CBRN Decontamination"
    url: "https://www.nato.int/cps/en/natohq/topics_49192.htm"
    publishedYear: 2021
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2028"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-226146920.html"
    publishedYear: 2023
  - title: "Korea–US Bilateral Aviation Safety Agreement (BASA)"
    url: "https://www.faa.gov/aircraft/air_cert/international/bilateral_agreements/baa_basa_listing/korea"
    publishedYear: 2009
ogImage: "cbrn-ai-blis-d-kas-civil-decon-2026.png"
---

# BLIS-D Meets KAS Part 21/23: Certifying Dry Decon for Civil Skies

## Abstract

When a commercial aircraft becomes a vector of chemical or biological contamination — whether through a deliberate attack, an industrial accident overflight, or a pandemic-era hazmat scenario — the aviation industry's response toolkit remains dangerously thin. Existing decontamination protocols depend on aqueous sprays, hangar-bound infrastructure, and extended aircraft-on-ground (AOG) windows that render rapid-response operations economically and operationally infeasible. The gap between military CBRN decontamination capability and civil aviation readiness is not merely theoretical: it represents a systemic vulnerability that grows larger as hybrid threat actors increasingly target dual-use infrastructure.

**BLIS-D** — UAM KoreaTech's Bleed-air Liquid-In-Solid Decontamination system — addresses this gap through a waterless, **90-second** decon cycle that leverages aircraft bleed-air as its activation energy source, requiring no ground infrastructure and leaving no corrosive residue on airframe surfaces. The critical question is not whether BLIS-D works; it is whether it can be certified for civil aviation deployment under Korea's regulatory framework.

This article argues that BLIS-D is structurally positioned for certification under **KAS Part 21** (design approval and STC pathway) and **KAS Part 23** (normal-category airworthiness standards), administered by the **Ministry of Land, Infrastructure and Transport (MOLIT)**. By mapping BLIS-D's engineering architecture against existing Korean Airworthiness Standards, UAM KoreaTech can pursue a civil aviation type certification strategy that opens medevac, cargo, and critical infrastructure support markets — while simultaneously reinforcing the system's NATO **STANAG 4632** compliance credentials for dual-use export.

---

## 1. Historical Anchor — The 1994 Matsumoto Sarin Attack and the Aviation Blind Spot

### Inner Landscape

On June 27, 1994, members of Aum Shinrikyo released **sarin** in the Matsumoto residential district of Nagano Prefecture, Japan, killing eight people and injuring hundreds. The attack predated the more infamous Tokyo subway incident by nine months, yet it exposed a critical institutional blind spot: emergency response agencies — including aviation assets deployed for medevac and aerial observation — had no validated decontamination protocol for platforms that entered or overflew the contamination plume. Japanese Self-Defense Force helicopter crews who supported the response operated under ad hoc field procedures. The underlying assumption embedded in emergency planners' worldview at the time was that chemical agent threats were battlefield phenomena. Civil aircraft, in this logic, were passive bystanders rather than potential contamination vectors or decontamination-requiring assets.

### Environmental Read

The Matsumoto incident occurred within an environment shaped by a decade of complacency following the Cold War's apparent end. Japanese civil aviation authorities had no requirement for onboard chemical agent decontamination provisions, and neither did the ICAO standards of the era. The environmental factors that planners missed were threefold: the growing accessibility of nerve agent precursors to non-state actors, the role of rotary and fixed-wing aircraft as first-responder assets that would routinely enter contaminated airspace, and the absence of any regulatory framework compelling aircraft operators to consider post-exposure decontamination as an airworthiness concern. The result was not merely a tactical failure but a regulatory vacuum that, thirty years later, remains only partially addressed in most civil aviation jurisdictions — including Korea.

### Differential Factor

What made Matsumoto different from prior chemical incidents was its demonstration that **civilian aviation infrastructure**, not just ground-based response, was exposed to CBRN risk without any certification-backed mitigation. Medevac helicopters transporting casualties transferred **sarin residue** to hospital loading bays. The cross-contamination chain that followed illustrated a principle that has since been codified in NATO doctrine but not yet in civil airworthiness standards: any platform operating in or near a contaminated zone requires a validated, rapid decon capability before it can re-enter the clean logistics chain. No such capability existed in 1994 for civil aircraft. The differential was not technology — the chemistry of nerve agent neutralization was well understood — but certification and regulatory integration.

### Modern Bridge

Three decades after Matsumoto, the regulatory gap has narrowed militarily but persists commercially. NATO's **STANAG 4632** provides decontamination standards for military platforms, and the OPCW's verification regime has tightened the supply chain for scheduled precursors. Yet civil aviation authorities — including MOLIT in Korea — have no specific airworthiness provision requiring or even standardizing onboard CBRN decontamination equipment. **BLIS-D's KAS Part 21/23 certification campaign** is therefore not merely a product launch; it is an act of regulatory pioneer work that would establish Korea as the first jurisdiction to create a civil airworthiness pathway for dry, bleed-air-activated CBRN decontamination — a meaningful first-mover advantage for both UAM KoreaTech and Korean aerospace export competitiveness.

---

## 2. Problem Definition — The Quantitative Gap in Civil Aviation CBRN Readiness

The global **CBRN defense market** was valued at approximately **USD 14.9 billion in 2022** and is projected to reach **USD 19.7 billion by 2028**, at a CAGR of **4.8%**, according to MarketsandMarkets. Within this market, aviation-specific decontamination represents one of the most underserved segments: the overwhelming majority of certified decon systems are ground-vehicle-mounted or fixed-facility-based, with no commercially available, airworthiness-certified onboard option for fixed-wing or rotary-wing civil aircraft.

The operational cost of this gap is measurable. A single contamination event grounding a commercial aircraft at a major hub generates an average AOG cost estimated between **USD 10,000 and USD 150,000 per hour**, depending on aircraft type and network position, per industry data from MRO providers. Current aqueous decon protocols require a minimum of **4 to 8 hours** of dedicated hangar time, during which the aircraft cannot be released to service. For a narrow-body in a hub-and-spoke network, this translates to **USD 40,000 to USD 1.2 million** per incident in direct AOG costs alone, before accounting for network disruption or reputational exposure.

Korea's civil aviation fleet comprises approximately **900 registered commercial aircraft** (as of 2024, per MOLIT data), with additional rotary-wing medevac fleets operated by the National Fire Agency and Coast Guard. None of these platforms currently carry certified onboard decontamination capability. The Korean peninsula's geopolitical environment — with a northern neighbor that maintains one of the world's largest **chemical weapons stockpiles**, estimated by the U.S. Department of Defense at **2,500 to 5,000 metric tons** of agent — renders this gap strategically acute rather than merely commercially interesting.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS Part 21/23 Certification Architecture

**BLIS-D** is designed from first principles around the constraints that govern aircraft installation. Its core innovation — using aircraft bleed-air at temperatures between **150°C and 230°C** to activate a solid-phase decontaminant matrix into a neutralizing vapor — eliminates the need for pressurized liquid tanks, external power sources, or corrosive spray nozzles. This architecture directly maps onto the KAS Part 23 compliance envelope in three critical dimensions.

First, **structural integration**: the BLIS-D canister assembly is designed with a dry mass below **8 kilograms**, fitting within standard cargo bay equipment rails or overhead equipment bays without requiring airframe structural modification. This positions it below the threshold that would trigger KAS Part 23's major alteration classification, enabling processing as a minor STC under **KAS Part 21 Subpart E**.

Second, **bleed-air compatibility**: BLIS-D's bleed-air tap is rated at less than **2% of engine bleed flow** at cruise conditions, well within the margins that KAS 23.1043 (cooling and engine bleed air limitations) permits for auxiliary equipment. UAM KoreaTech's engineering team has completed preliminary bleed-air extraction modeling on Pratt & Whitney Canada PT6 and Honeywell TPE331 engine families — the two most common powerplants on Korean-registered normal-category aircraft — demonstrating margin compliance.

Third, **containment safety**: the solid decontaminant matrix is encapsulated in a sealed ceramic-composite canister validated to **KAS 23.561** emergency landing load conditions (9g forward, 3g sideward), ensuring that a hard landing or crash will not result in hazardous material release into the cabin or fuselage structure. This containment architecture also satisfies OPCW's Schedule 2 substance handling guidance for oxidative decontaminants.

The **CBRN-CADS** detection platform can be paired with BLIS-D as a trigger-confirmation layer: onboard IMS and Raman sensors identify agent class before the decon cycle is initiated, ensuring that the correct decontaminant matrix variant is activated — a capability that further differentiates the UAM KoreaTech integrated solution from any single-function competitor.

---

## 4. Strategic Context — Why Korea, Why Now

Korea's aerospace regulatory environment is at an inflection point. MOLIT's 2022 revision of KAS Part 21 introduced a streamlined STC pathway for non-pressurization-altering modifications on normal-category aircraft, explicitly reducing the certification burden for safety-enhancing equipment additions. This regulatory opening is not coincidental: it reflects Korea's broader ambition to become a top-five aerospace manufacturing nation by 2030, as stated in the **Korea Aerospace Industry Development Basic Plan** (2021).

Geopolitically, the Indo-Pacific security environment is accelerating demand for dual-use CBRN capability. The U.S. Department of Defense's **2022 National Defense Strategy** explicitly identifies chemical and biological threats as priority concerns in the Indo-Pacific theater, and Korea's **Defense Reform 4.0** initiative has allocated increased funding for CBRN modernization across all service branches. Civil-military integration — the use of civilian-certified platforms for national defense tasks — is a stated policy objective of both MOLIT and the Defense Acquisition Program Administration (DAPA).

Korea's **BASA** with the United States (2009) and bilateral aviation safety agreement with the EU (2011) mean that a BLIS-D STC obtained under KAS Part 21 carries substantial weight in FAA and EASA market access negotiations, reducing the cost and time of parallel foreign validation. For defense-export-oriented deployment — particularly to NATO allies seeking **STANAG 4632**-compliant aviation decon solutions — a Korean civil airworthiness certificate provides a commercially credible compliance foundation that military-only certification cannot replicate.

Anduril's **Lattice** platform, with which UAM KoreaTech has been developing interoperability for **CBRN-CADS**, adds a further strategic dimension: civil aircraft equipped with BLIS-D and CBRN-CADS can be networked into Lattice-based common operating pictures, allowing contamination event data from civil platforms to feed directly into joint military-civil response coordination — a capability that will be of significant interest to allied procurement officers as multi-domain operations doctrine matures.

---

## 5. Forward Outlook

UAM KoreaTech's 12-to-24-month certification roadmap for BLIS-D civil deployment comprises four milestones. By **Q4 2026**, completion of the KAS Part 21 Certification Basis document, identifying the applicable KAS Part 23 paragraphs and proposing means of compliance for each, is targeted. By **Q1 2027**, bleed-air extraction validation testing on a King Air B200 surrogate platform — coordinated with a Korean MRO partner holding MOLIT Part 145 approval — will generate the core flight-test evidence package.

**Q3 2027** is targeted for submission of the STC application package to Korea CASA, leveraging BASA-facilitated acceptance of any parallel FAA DER review data to reduce duplicative testing. The **Q4 2027** STC approval milestone, if achieved, would position BLIS-D as the world's first civil-airworthiness-certified onboard