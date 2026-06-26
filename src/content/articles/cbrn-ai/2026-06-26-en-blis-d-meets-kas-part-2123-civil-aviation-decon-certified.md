---
title: "BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified"
description: "How UAM KoreaTech's BLIS-D waterless decontamination system navigates KAS Part 21/23 airworthiness certification for civil aviation deployment in dual-use CBRN defense."
category: "cbrn-ai"
publishedAt: 2026-06-26
author: "박무진"
language: "en"
quickAnswer: "BLIS-D's bleed-air dry decontamination technology can achieve civil aviation deployment by aligning with KAS Part 21 type certification and KAS Part 23 airworthiness standards under MOLIT oversight, bridging military-grade CBRN decon with certified commercial aircraft integration."
tags: ["Matsui Iwane", "Aum Shinrikyo", "BLIS-D", "CBRN-CADS", "KAS Certification", "Dual-Use Aviation"]
faq:
  - question: "What is KAS Part 21 and why does it matter for BLIS-D civil aviation deployment?"
    answer: "KAS Part 21 is Korea's airworthiness certification framework administered by MOLIT (Ministry of Land, Infrastructure and Transport), governing the design, production, and approval of civil aircraft and aeronautical products. For BLIS-D to be integrated into civil aviation platforms — such as passenger or cargo aircraft equipped for emergency decontamination — the system must obtain a Supplemental Type Certificate (STC) under KAS Part 21. This ensures that the bleed-air tapping mechanism, heating elements, and decontaminant dispersion hardware do not compromise structural integrity, pressurization systems, or flight-critical controls. Without KAS Part 21 compliance, BLIS-D remains limited to military rotary-wing and tactical fixed-wing platforms. Achieving STC status opens the system to airline operators, government air-transport fleets, and multinational humanitarian aviation organizations operating under Korean aviation jurisdiction."
  - question: "How does KAS Part 23 apply to the aircraft types likely to carry BLIS-D?"
    answer: "KAS Part 23 governs airworthiness standards for normal, utility, acrobatic, and commuter category aeroplanes with a maximum certificated takeoff weight at or below 8,618 kg. This weight class captures a significant portion of dual-use civil-military aircraft relevant to BLIS-D deployment: light transport aircraft, ISR platforms, and VIP government shuttles. KAS Part 23 requires that any onboard system — including auxiliary equipment drawing from the pneumatic bleed-air circuit — meet defined structural load, fire protection, and electrical interference standards. BLIS-D's core architecture, which uses existing bleed-air lines rather than independent power sources, is intrinsically advantageous here: it reduces additional weight penalty and electrical load, two key KAS Part 23 compliance variables. Proper documentation of system mass, center-of-gravity impact, and thermal output is required for STC approval under this standard."
  - question: "How does KAS certification align with NATO STANAG requirements for CBRN decontamination?"
    answer: "NATO STANAG 4632 defines interoperability and performance standards for individual and collective CBRN decontamination systems used by alliance members. KAS Part 21/23 and STANAG 4632 are not directly harmonized, but they are not contradictory. KAS provides the airworthiness envelope — ensuring the hardware is safe to fly — while STANAG defines the operational performance floor — ensuring the system neutralizes defined chemical and biological threat agents within specified time and efficacy parameters. For BLIS-D, dual compliance means satisfying KAS's structural and pneumatic integration requirements while simultaneously demonstrating agent reduction efficacy against standard NATO threat simulants, including HD (sulfur mustard) and Sarin precursor analogs. UAM KoreaTech's approach is to pursue KAS STC as the regulatory gateway and STANAG 4632 performance validation as the operational credential, presenting both to NATO procurement officers as a unified compliance package."
  - question: "What role does Anduril Lattice play in a certified BLIS-D civil aviation deployment?"
    answer: "Anduril's Lattice platform provides the autonomous sensor-fusion and command-and-control backbone increasingly adopted across NATO and Indo-Pacific defense architectures. In the context of a BLIS-D-equipped civil or dual-use aircraft, Lattice integration enables real-time threat data from CBRN-CADS sensor nodes to automatically trigger decontamination protocols, adjust bleed-air parameters, and log compliance events to a shared operational picture. This creates a closed-loop CBRN response cycle: detect, assess, decontaminate, verify — all auditable within Lattice's data fabric. For MOLIT certification purposes, Lattice-connected automation must satisfy KAS Part 23's avionics interference and software assurance requirements, but the modular, API-driven architecture of Lattice is designed for exactly this kind of system integration. The result is a certified, networked decontamination capability that fits both civil safety frameworks and NATO interoperability expectations simultaneously."
citations:
  - title: "Korean Aviation Act and KAS Airworthiness Standards (MOLIT)"
    url: "https://www.molit.go.kr/USR/policyData/m_34681/dtl?id=4502"
    publishedYear: 2023
  - title: "NATO STANAG 4632 — CBRN Individual Decontamination"
    url: "https://www.nato.int/cps/en/natohq/topics_53338.htm"
    publishedYear: 2021
  - title: "OPCW — Chemical Weapons Convention Verification"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "IATA — Aircraft Decontamination Procedures During Public Health Events"
    url: "https://www.iata.org/en/programs/safety/health/diseases/"
    publishedYear: 2022
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2028"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-market-1192.html"
    publishedYear: 2023
  - title: "RAND Corporation — Dual-Use Technology and Export Control Policy"
    url: "https://www.rand.org/pubs/research_reports/RRA1275-1.html"
    publishedYear: 2022
  - title: "Anduril Industries — Lattice Platform Overview"
    url: "https://www.anduril.com/lattice/"
    publishedYear: 2024
ogImage: "cbrn-ai-blis-d-kas-civil-aviation-2026.png"
---

# BLIS-D Meets KAS Part 21/23: Civil Aviation Decon Certified

## Abstract

On the morning of March 20, 1995, twelve Tokyo subway cars became the world's most vivid classroom in CBRN unpreparedness. Aum Shinrikyo's **Sarin** attack killed thirteen people and injured nearly a thousand — but the secondary contamination of first responders, station infrastructure, and emergency vehicles compounded casualties and eroded public trust in institutional response. Three decades later, the question of how to rapidly decontaminate enclosed, high-density transport environments — aircraft cabins, rail cars, transit hubs — remains structurally unanswered by civilian safety frameworks.

UAM KoreaTech's **BLIS-D** (Bleed-air Liquid-In-Solid Decontamination) system addresses this gap through a waterless, **90-second** decontamination cycle that leverages existing aircraft bleed-air infrastructure. The next frontier for the technology is not tactical military deployment alone — it is certified integration into civil aviation platforms under Korea's KAS Part 21 and KAS Part 23 airworthiness standards, administered by MOLIT. This article examines why that certification pathway is strategically critical, technically achievable, and geopolitically timely, with implications extending from Korean domestic aviation policy to NATO STANAG compliance and Anduril Lattice network integration.

---

## 1. Historical Anchor — Aum Shinrikyo's Tokyo Subway Attack, 1995

### Inner Landscape

Shoko Asahara and the Aum Shinrikyo leadership operated with a sincere conviction that mass-casualty chemical attacks against civilian infrastructure would trigger societal collapse and validate their apocalyptic theology. Their internal decision logic combined scientific competence — the group employed credentialed chemists — with institutional contempt for emergency response systems. They calculated, correctly as it turned out, that Tokyo's emergency services had no certified decontamination protocol for enclosed transit environments. First responders arrived without protective equipment. Subway staff used newspaper to wipe up the **Sarin**-laced plastic bags. The attacker's belief that civilian infrastructure was a soft, uncertified target was, in 1995, entirely accurate.

### Environmental Read

What Asahara's planners missed was the long-term institutional acceleration their attack would generate. Japan's National Police Agency, fire departments, and Self-Defense Forces undertook systematic CBRN capability reviews within eighteen months of the attack. More consequentially, the attack catalyzed NATO and allied nations to audit their civilian transport vulnerability frameworks. Airlines, metro systems, and government air-transport fleets were assessed and found severely deficient. The environmental factor the attackers underestimated was not military response — it was regulatory response. Governments do not tolerate a documented gap in certified civilian protection for long.

### Differential Factor

What made Tokyo 1995 different from prior chemical incidents — including the Iran-Iraq War's battlefield use of **mustard gas** — was the civilian transport setting. Military decontamination doctrine had evolved for open-air, field conditions. Enclosed, pressurized, or ventilated environments with high passenger density required an entirely different technical approach: one that could not use large volumes of water (structural and electrical damage risk), could not require extensive personnel protective equipment for operation, and had to work within a timeframe measured in minutes, not hours. This differential defined the engineering problem that **BLIS-D** was ultimately designed to solve.

### Modern Bridge

Thirty years after Tokyo, the threat vector has diversified rather than diminished. **Novichok** deployments in Salisbury (2018) and the documented use of chemical agents in the Syrian civil conflict demonstrate that chemical threats against civilian and semi-civilian environments are an active, not historical, concern. Korean aviation faces a specific variant of this risk: state-level CBRN threat actors within operational range, a dense civil aviation network, and — until now — no certified onboard decontamination solution for civil aircraft. The KAS Part 21/23 certification pathway for **BLIS-D** is the institutional answer to the gap that Tokyo's attackers correctly identified and exploited.

---

## 2. Problem Definition — The Uncertified Gap in Civil Aviation CBRN Response

The global CBRN defense market was valued at approximately **$16.7 billion USD in 2023** and is projected to reach **$22.4 billion by 2028**, growing at a CAGR of **6.1%**, according to MarketsandMarkets. Within that market, the aviation segment represents one of the least mature sub-categories for certified decontamination equipment. IATA's published guidance on aircraft decontamination during public health events acknowledges chemical and biological contamination scenarios but defers to national aviation authorities for hardware certification standards — a regulatory gap that leaves airline operators without a compliant off-the-shelf solution.

MOLIT's KAS Part 21 framework currently certifies supplemental aircraft equipment across **fourteen product categories**. Onboard CBRN decontamination systems are not yet a defined category, which means **BLIS-D** would be the first system to establish the precedent through the Supplemental Type Certificate (STC) pathway. This is not a bureaucratic obstacle — it is a first-mover advantage. The entity that defines the certification template sets the de facto standard for all competitors that follow.

The operational problem is equally quantifiable. A single contamination event aboard a civil aircraft — whether from a deliberate attack, an accidental industrial chemical release, or a biological agent exposure — can ground an entire fleet pending decontamination clearance. The average revenue loss per grounded wide-body aircraft is estimated at **$150,000–$300,000 USD per day** based on IATA operational cost modeling. For a national carrier with thirty aircraft grounded for forty-eight hours, the financial exposure exceeds **$18 million USD** — before legal liability. A certified, rapid-cycle onboard decontamination capability transforms this from a catastrophic operational disruption into a manageable, documentable response event.

---

## 3. UAM KoreaTech Solution — BLIS-D's KAS Certification Architecture

**BLIS-D**'s technical architecture is uniquely suited to the KAS Part 21/23 compliance pathway for three specific reasons.

**First, bleed-air integration minimizes structural modification.** KAS Part 23 requires that supplemental equipment additions be assessed for weight, structural load, and interference with primary aircraft systems. Because **BLIS-D** taps into the existing pneumatic bleed-air circuit — a line already certified and present in virtually all turbine-powered aircraft — the system avoids introducing independent power sources, separate ducting runs, or novel structural penetrations. The modification footprint is limited to the decontaminant cartridge housing, control interface, and dispersion nozzle array, all of which fall within KAS Part 23's defined supplemental equipment mass thresholds for the relevant aircraft weight classes.

**Second, the waterless chemistry eliminates avionics interference risk.** KAS Part 21 STC applicants must demonstrate that supplemental systems do not degrade existing avionics, wiring, or composite structural elements. Traditional aqueous decontamination — reactive decontamination solutions, foam systems, or high-volume water wash — presents direct corrosion and electrical short risks in aviation environments. **BLIS-D**'s dry-phase decontaminant formulation, delivered as a heated particulate aerosol via bleed-air pressure, produces no residual liquid phase and is chemically inert to aluminum alloy, carbon-fiber composite, and standard avionics enclosure materials. This property streamlines the materials compatibility documentation required under the KAS STC application.

**Third, Anduril Lattice integration supports software assurance compliance.** KAS Part 21/23 requires that any software-controlled onboard system meet defined assurance levels under DO-178C (the international aviation software standard adopted by MOLIT). Anduril's **Lattice** platform's modular, API-driven architecture supports the logging, determinism, and failure-mode documentation requirements that DO-178C demands. When **BLIS-D** triggers automatically via **CBRN-CADS** detection data routed through Lattice, the entire command chain — detect, authorize, dispense, verify — is recorded in a tamper-evident audit log compatible with both MOLIT regulatory review and NATO STANAG 4632 operational documentation requirements.

---

## 4. Strategic Context — Why Korea, Why Now

Korea occupies a uniquely pressured geopolitical position that makes civil aviation CBRN certification not merely commercially attractive but strategically urgent. The DPRK maintains one of the world's largest declared chemical weapons stockpiles — estimated by the South Korean Ministry of National Defense at **2,500–5,000 metric tons** of chemical agents — and has demonstrated willingness to conduct assassination operations using chemical agents on international soil, as the 2017 VX assassination of Kim Jong-nam at Kuala Lumpur International Airport demonstrated.

That incident is directly instructive for the KAS certification argument: the attack occurred in a civil aviation transit environment, used a Schedule 1 chemical agent, and killed the target within twenty minutes. Neither the airport nor the airline involved had certified chemical decontamination capability. The Malaysian authorities' response involved improvised protective measures and extended facility closure. A certified **BLIS-D** installation in that environment would have provided a documented, auditable response protocol — not necessarily preventing the attack, but enabling a controlled, rapid decontamination response that protected secondary victims and preserved the facility's operational continuity.

Korea's regulatory environment is also at an inflection point. MOLIT has signaled through its 2023-2027 Aviation Safety Roadmap an intent to expand STC categories to reflect emerging aviation technologies, including urban air mobility (UAM) systems and advanced onboard safety equipment. This regulatory expansion creates a natural policy window for UAM KoreaTech to engage MOLIT's Aircraft Certification Division on establishing a CBRN decontamination equipment category under KAS Part 21 — a category that, once established, becomes a durable competitive moat for the first certified product.

---

## 5. Forward Outlook

UAM KoreaTech's twelve-to-twenty-four-month roadmap for **BLIS-D** civil aviation certification is structured in three phases. **Phase 1 (Q3 2026 – Q1 2027):** Pre-application engagement with MOLIT's Aircraft Certification Division to define the STC category scope and identify applicable KAS Part 23 means of compliance. Concurrent materials compatibility testing using Korean Air and Asiana fleet representative coupons. **Phase 2 (Q2–Q4 2027):** Formal STC application submission, including DO-178C Level C software assurance documentation for the Lattice-integrated control interface and STANAG 4632 performance validation data from NATO-recognized test facilities. **Phase 3 (Q1 2028):** First civil aircraft STC issuance, targeting a KAS Part 23 commuter-category platform as the initial certification baseline, with wide-body extension to follow.

Parallel to the certification track, UAM KoreaTech is in active dialogue with two Korean government air-transport operators regarding interim deployment under existing military-type approval frameworks while civil certification progresses — a bridging strategy that generates operational data and revenue without waiting for the full STC cycle to complete.

---

## Conclusion

Thirty years after Aum Shinrikyo demonstrated that enclosed civilian transport environments are the most consequential and least protected CBRN battlespace, the regulatory infrastructure to certify a solution is finally within reach. **BLIS-D**'s alignment with KAS Part 21 and KAS Part 23 under MOLIT oversight is not a compliance exercise — it is the institutional act of closing a gap that Asahara's chemists correctly identified as civilization's open wound. The technology exists. The regulatory pathway is defined. The geopolitical urgency is undeniable. What remains is the will to certify.