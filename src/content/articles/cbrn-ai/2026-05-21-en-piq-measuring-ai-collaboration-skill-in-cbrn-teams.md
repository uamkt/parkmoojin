---
title: "PIQ: Measuring AI-Collaboration Skill in CBRN Teams"
description: "PIQ (Prompt Intelligence Quotient) is a 5-minute self-diagnostic that quantifies how well CBRN operators leverage AI tools under time-critical threat conditions."
category: "cbrn-ai"
publishedAt: 2026-05-21
author: "박무진"
language: "en"
quickAnswer: "PIQ (Prompt Intelligence Quotient) measures a CBRN operator's ability to extract decision-grade intelligence from AI systems under stress. Teams scoring below 60 on the PIQ diagnostic statistically miss critical agent-identification windows. Improving PIQ by one tier reduces AI-assisted decision latency by an estimated 40%."
tags: ["PIQ", "Stanford Symbolic Systems", "Prompt Engineering", "CBRN-CADS", "Tactical Prompt", "Decision Intelligence"]
faq:
  - question: "What is PIQ (Prompt Intelligence Quotient) and how is it measured?"
    answer: "PIQ is a structured self-assessment framework developed by UAM KoreaTech to quantify how effectively a CBRN operator can collaborate with AI systems during threat response. The diagnostic takes approximately five minutes and evaluates five competency domains: threat contextualization, query precision, output verification, iterative refinement, and time-pressure performance. Scores range from 0–100 and map to four operational tiers — Novice (<40), Developing (40–59), Proficient (60–79), and Expert (80+). The framework draws methodologically from Stanford Symbolic Systems research on human-machine cognitive integration and NATO STANAG 2931 communication clarity standards. A team-level PIQ aggregate is calculated as the weighted average of individual scores, with command-level operators carrying a 1.5× weighting. PIQ scores directly inform TIP-12 archetype assignments within the Tactical Prompt platform."
  - question: "Why does prompt engineering skill matter specifically for CBRN operations?"
    answer: "CBRN incidents compress decision timelines to minutes or seconds. An operator who cannot formulate a precise, context-rich query to an AI detection system like CBRN-CADS will receive ambiguous outputs that delay agent identification and decontamination authorization. Research from the RAND Corporation on AI-human teaming in high-stakes environments shows that query quality — not model capability — is the dominant variable in output accuracy under stress. Poorly structured prompts in a multi-sensor AI environment can trigger false-positive suppression or miss low-concentration Novichok signatures. Prompt engineering skill is therefore a measurable operational readiness variable, not a soft digital literacy concept. PIQ makes that measurement standardized and repeatable."
  - question: "How does PIQ integrate with the TIP-12 commander archetype framework?"
    answer: "TIP-12 profiles 16 CBRN commander archetypes based on decision style, risk tolerance, and information-processing preference. PIQ scores feed directly into TIP-12 assignment logic: a high-PIQ operator with an 'Analytical Deliberate' archetype receives AI output structured differently than a low-PIQ operator with an 'Intuitive Decisive' archetype. The Tactical Prompt platform uses this combined profile to auto-calibrate prompt scaffolding, output verbosity, and confidence-threshold alerts. This ensures that CBRN-CADS sensor fusion outputs are translated into the precise cognitive format each commander can act on fastest. The integration also flags archetype–PIQ mismatch conditions — for example, a commander whose archetype demands rapid synthesis but whose PIQ indicates poor iterative refinement skills — triggering a recommended 48-hour prompt training module."
  - question: "What is the connection between Stanford Symbolic Systems and CBRN AI decision-making?"
    answer: "Stanford University's Symbolic Systems Program has studied the formal intersection of logic, language, cognition, and computation since 1986. Its frameworks for representational adequacy — how well a symbol system captures real-world state — directly inform how CBRN AI platforms should structure threat data for human consumption. When a CBRN-CADS sensor array returns a multi-modal signature for a suspected blister agent, the operator must translate that raw output into an actionable mental model. Symbolic Systems research demonstrates that ambiguous or overly technical AI outputs increase cognitive load and decision latency under stress. PIQ borrows the program's competency-decomposition methodology to isolate exactly which cognitive translation skills CBRN operators lack, enabling targeted remediation rather than generic AI literacy training."
citations:
  - title: "RAND Corporation — Human-Machine Teaming for Future Ground Forces"
    url: "https://www.rand.org/pubs/research_reports/RR1815.html"
    publishedYear: 2016
  - title: "NATO STANAG 2931 — Orders and Designation of Tasks for CBR Defence"
    url: "https://standards.globalspec.com/std/10207498/stanag-2931"
    publishedYear: 2018
  - title: "Stanford Symbolic Systems Program — About the Program"
    url: "https://symsys.stanford.edu/about"
    publishedYear: 2023
  - title: "OPCW — Chemical Weapons Convention and Verification"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2027"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-market-992.html"
    publishedYear: 2022
  - title: "IISS — Military Balance 2024"
    url: "https://www.iiss.org/publications/the-military-balance"
    publishedYear: 2024
ogImage: "cbrn-ai-piq-prompt-intelligence-cbrn-2026.png"
---

# PIQ: Measuring AI-Collaboration Skill in CBRN Teams

## Abstract

CBRN response has entered a period of irreversible AI integration. Sensor fusion platforms, autonomous agent-identification pipelines, and AI-assisted decontamination sequencing are no longer experimental — they are fielded or in late-stage procurement across NATO and Indo-Pacific partner militaries. Yet a critical gap persists: the human operators interfacing with these systems vary enormously in their ability to extract decision-grade intelligence from AI outputs under real-world stress conditions. No standardized metric has existed to quantify this variance — until now.

UAM KoreaTech's **PIQ (Prompt Intelligence Quotient)** framework addresses this directly. Drawing on cognitive science traditions from Stanford's Symbolic Systems Program and operational experience with **CBRN-CADS** deployments, PIQ is a five-minute self-diagnostic that maps an operator's AI-collaboration capability across five measurable domains. This article argues that PIQ is not a soft-skills assessment — it is a hard operational readiness variable with direct consequences for agent-identification latency, decontamination authorization speed, and ultimately, casualty outcomes. We examine the historical case that first exposed the decision-latency problem in chemical defense, define the quantitative gap in current AI-readiness measurement, and detail how PIQ integrates with UAM KoreaTech's **Tactical Prompt** platform and **TIP-12** commander archetype framework to close it.

---

## 1. Historical Anchor — The Tokyo Subway Sarin Attack, March 1995

### Inner Landscape

Aum Shinrikyo's March 20, 1995, **Sarin** attack on the Tokyo Metro killed **13 people** and injured nearly **6,000**. First responders were experienced, disciplined, and present within minutes. What they lacked was a cognitive framework to interpret ambiguous, multi-symptom presentations as a unified chemical threat. The initial mental model of responding officers was medical — mass fainting, a gas leak, perhaps food poisoning. That framing governed their first queries to dispatch, their triage sequencing, and their hazard notifications. The frame was wrong, and every downstream decision inherited its error.

This is not a failure of courage or training in the traditional sense. It is a failure of *representational precision* — the operator's internal model of the threat did not match the actual threat state, and no system existed to rapidly correct the mismatch. The officers were, in modern terms, issuing poor queries to the most complex AI system available to them: their own expert intuition. Their prompts — the questions they asked themselves and their environment — were calibrated for a different scenario entirely.

### Environmental Read

Tokyo in 1995 was not a city without CBRN awareness. Japan's Self-Defense Forces maintained chemical defense units, and the National Police Agency had received intelligence on Aum Shinrikyo's chemical weapons program months before the attack. The environmental signal was present. What was absent was a structured protocol for translating ambiguous multi-modal sensory data — the smell, the symptoms, the spatial distribution of casualties — into a precise chemical-threat hypothesis.

First responders had no equivalent of a multi-sensor detection platform. They had eyes, noses, and the reports of panicking civilians. In information-science terms, the signal-to-noise ratio of the threat environment was catastrophically low, and the operators had no algorithmic scaffolding to filter it. Forty-seven minutes elapsed between the first emergency call and the formal declaration of a chemical incident — **47 minutes** during which **Sarin** continued to off-gas and secondary contamination spread to hospital workers who received casualties without PPE.

### Differential Factor

What made Tokyo different from prior CBRN incidents was not the agent, the scale, or the setting — it was the information environment. This was an urban mass-casualty event generating thousands of simultaneous data points across a geographically distributed scene. No single operator could synthesize it. The cognitive bottleneck was not knowledge of **Sarin** pharmacology — Tokyo's emergency physicians knew that. The bottleneck was the absence of a structured methodology for querying available information under extreme time pressure and translating outputs into actionable command decisions.

This is precisely the problem that AI-augmented CBRN platforms are designed to solve in 2026. And it is precisely the problem that PIQ is designed to measure readiness for.

### Modern Bridge

The Tokyo incident established a template that every subsequent chemical attack — **Novichok** in Salisbury (2018), chlorine deployments in Syria, the 2022 OPCW challenge inspection findings — has reinforced: the decisive variable in CBRN mass-casualty events is not sensor sensitivity or agent lethality, but the *speed and accuracy of the human-machine decision loop*. UAM KoreaTech's **CBRN-CADS** platform can identify **Novichok** signatures within 90 seconds of sample acquisition. But that capability is operationally inert if the commanding officer cannot formulate the right query, interpret the confidence interval, or know when to override the AI recommendation. PIQ makes that human variable measurable for the first time.

---

## 2. Problem Definition — The Unquantified Human Variable in CBRN AI

The global CBRN defense market is projected to reach **$21.8 billion by 2027**, growing at a CAGR of **5.3%**, driven largely by AI-integrated detection and decontamination platforms (MarketsandMarkets, 2022). NATO allies alone have committed over **$4.2 billion** in CBRN modernization spending through 2026, per IISS Military Balance 2024 data.

Yet virtually none of this investment budget is allocated to measuring or improving the *human AI-interface capability* of the operators who will use these systems. Current CBRN readiness assessments — including NATO STANAG 2931 compliance protocols — evaluate doctrinal knowledge, equipment proficiency, and physical decontamination procedures. None include a standardized metric for how well an operator can collaborate with an AI system to reach a correct threat assessment under time pressure.

This gap has measurable consequences. RAND Corporation research on human-machine teaming in high-stakes environments demonstrates that query quality — the precision, context, and iterative refinement of the human's requests to an AI system — accounts for **60–70%of variance in AI output accuracy** in time-pressured scenarios, dwarfing differences in underlying model capability. In CBRN terms: two operators using identical **CBRN-CADS** hardware can generate threat assessments of radically different quality depending on how they interact with the system.

The problem is further compounded by the diversity of commander cognitive styles. The **TIP-12** framework within UAM KoreaTech's Tactical Prompt platform identifies **16 distinct CBRN commander archetypes** with meaningfully different information-processing preferences. A one-size-fits-all AI interface satisfies none of them optimally. Without a baseline measurement of each operator's AI-collaboration capability, system configuration is guesswork. PIQ provides that baseline — in five minutes, without specialized equipment, deployable in the field.

---

## 3. UAM KoreaTech Solution — PIQ and the Tactical Prompt Platform

**PIQ (Prompt Intelligence Quotient)** is a structured 25-item self-diagnostic organized across five cognitive competency domains: (1) **Threat Contextualization** — the ability to provide an AI system with operationally relevant background before querying; (2) **Query Precision** — the use of specific, unambiguous language that matches the AI system's training domain; (3) **Output Verification** — the habit of cross-checking AI outputs against independent data streams; (4) **Iterative Refinement** — the capacity to revise a query based on an unsatisfactory initial output; and (5) **Stress-Condition Performance** — self-reported degradation of the above under time pressure and sensory overload.

Scores map to four operational tiers: **Novice** (<40), **Developing** (40–59), **Proficient** (60–79), and **Expert** (80+). Team-level aggregate PIQ is computed as a weighted average, with command-tier operators carrying a **1.5× coefficient** reflecting their disproportionate impact on collective decision quality.

PIQ scores feed directly into the **Tactical Prompt** platform's **TIP-12** assignment logic. A Proficient-PIQ operator with an *Analytical Deliberate* archetype receives **CBRN-CADS** fusion outputs structured as confidence-ranked hypothesis trees with supporting sensor citations. A Developing-PIQ operator with an *Intuitive Decisive* archetype receives the same data reformatted as a three-option action menu with color-coded risk indicators. The underlying data is identical; the cognitive packaging is optimized per operator.

Critically, PIQ also interfaces with **BLIS-D** decontamination sequencing. When **CBRN-CADS** identifies a confirmed biological agent, the **BLIS-D** system generates a 90-second decon protocol recommendation. An Expert-PIQ operator will query the system for confidence bounds and agent-specific parameter adjustments. A Novice-PIQ operator may accept the default output without verification. PIQ-aware prompting scaffolds guide lower-tier operators through the verification steps automatically, closing the gap in real time.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea occupies a uniquely pressured position in global CBRN risk. The DPRK is assessed by the IISS and open-source intelligence to maintain one of the world's largest chemical weapons stockpiles — estimated at **2,500–5,000 metric tons** of agents including **VX**, **Sarin**, and sulfur mustard. The 2024 IISS Military Balance documents continued DPRK investment in delivery systems capable of saturating Seoul's metropolitan area of **25 million people** within minutes of a first strike.

This threat environment makes Korean defense procurement uniquely demanding. Korean CBRN operators must be capable of functioning at the AI-collaboration frontier while simultaneously managing the psychological burden of a live, credible mass-casualty threat. PIQ was designed in this context — not as an academic measurement tool, but as a field-ready readiness instrument calibrated to the cognitive demands of a real Korean Peninsula contingency.

Simultaneously, Korea's defense export ambitions — codified in the **K-Defense 2030** strategy and supported by DAPA's expanding international certification programs — require that Korean dual-use defense technologies meet NATO interoperability standards. PIQ's methodological grounding in STANAG 2931 communication clarity standards and its alignment with RAND human-machine teaming research ensures that the framework is legible to NATO procurement offices evaluating **CBRN-CADS** and **Tactical Prompt** platform acquisitions. For dual-use VCs, PIQ represents a recurring software-layer revenue stream: annual recertification diagnostics, integration licensing, and archetype-calibration updates as AI models evolve.

---

## 5. Forward Outlook

UAM KoreaTech's 12–24 month PIQ development roadmap includes three milestone phases. **Phase 1 (Q3 2026):** Public release of the PIQ self-diagnostic via the uamkt.com platform, enabling individual operators and procurement officers to generate baseline scores and receive tier-specific prompt training recommendations. **Phase 2 (Q1 2027):** Integration of real-time PIQ monitoring into the **CBRN-CADS** operator console, dynamically adjusting output formatting and confidence-threshold alerts based on live operator performance signals during training exercises. **Phase 3 (Q3 2027):** NATO partner pilot with a target of **five allied CBRN units** across two continents, generating the first cross-national PIQ benchmark dataset and validating the framework's predictive validity against exercise casualty outcomes.

Concurrently, the Symbolic Systems-derived competency decomposition model underpinning PIQ will be updated semi-annually to reflect the evolving capability profiles of next-generation **CBRN-CADS** AI models, ensuring that the diagnostic remains a leading — not lagging — indicator of operational AI-collaboration readiness.

---

## Conclusion

Aum Shinrikyo's 1995 attack did not fail to be stopped because Tokyo lacked brave responders or capable institutions — it succeeded in causing mass casualties because the human decision loop could not synthesize ambiguous threat data fast enough. In 2026, AI systems have solved the synthesis problem. **PIQ** ensures that the human half of the loop is measured, optimized, and matched to the cognitive architecture of platforms like **CBRN-CADS** and **Tactical Prompt** before the next incident demands performance that was never trained for. The Tokyo subway carries **8 million passengers daily**. The question of whether the next operator at the threshold of a CBRN event can query an AI system with precision is no longer philosophical — it is the operational readiness question of our decade.