---
title: "PIQ: Measuring AI-Collaboration Readiness in CBRN Teams"
description: "The Prompt Intelligence Quotient (PIQ) gives CBRN operators a 5-minute self-diagnostic to measure AI-collaboration capability and close the human-machine decision gap."
category: "cbrn-ai"
publishedAt: 2026-05-13
author: "박무진"
language: "en"
quickAnswer: "PIQ (Prompt Intelligence Quotient) is a structured self-assessment that measures how effectively CBRN operators collaborate with AI systems under time pressure. Teams scoring below the operational threshold misframe AI queries during crises, degrading detection and triage speed. A 5-minute PIQ diagnostic identifies that gap before it becomes a casualty."
tags: ["Stanford Symbolic Systems", "Prompt Engineering", "PIQ", "TIP-12", "Decision Intelligence", "CBRN AI Readiness"]
faq:
  - question: "What is PIQ (Prompt Intelligence Quotient) in the context of CBRN response?"
    answer: "PIQ is a psychometric-style self-assessment developed within UAM KoreaTech's Tactical Prompt platform that measures an operator's ability to formulate precise, context-rich queries for AI detection and decision-support systems under operational stress. It evaluates five dimensions: situational framing accuracy, constraint specification, output format clarity, iterative refinement speed, and cross-sensor query integration. A score is returned in under five minutes, producing a profile that maps directly onto the TIP-12 commander archetypes. CBRN units can use PIQ scores to assign operators to specific human-machine teaming roles during a live incident, matching high-PIQ personnel to AI-augmented sensor fusion nodes where query quality most directly affects agent identification time."
  - question: "Why does prompt engineering skill matter for CBRN detection outcomes?"
    answer: "Modern CBRN detection platforms like CBRN-CADS combine ion mobility spectrometry, Raman spectroscopy, gamma detection, and qPCR into a single AI-driven interface. The AI layer must be queried correctly to prioritize sensor outputs and generate actionable threat assessments. Poorly structured operator queries — vague context, missing environmental parameters, ambiguous agent classes — force the AI into lower-confidence inference paths, increasing false-negative risk. Research from Stanford's Symbolic Systems program and published human-AI teaming studies consistently show that task performance in AI-augmented workflows correlates strongly with the user's ability to decompose problems into structured prompts. In a Sarin or Novichok release scenario, that correlation has lethal implications: a 90-second misclassification window can determine whether a decontamination protocol is initiated in time."
  - question: "How does the TIP-12 framework interact with PIQ scores?"
    answer: "TIP-12 (Tactical Intelligence Profile, 16 commander archetypes) maps cognitive decision styles onto operational roles. PIQ scores add a second axis — AI-collaboration fluency — to that profile. A commander with a high-autonomy TIP-12 archetype but a low PIQ score may over-rely on unverified AI outputs without knowing how to challenge or refine them, creating overconfidence bias. Conversely, a consensus-seeking archetype with a high PIQ can use structured iterative prompting to rapidly build shared situational awareness across a CBRN response team. Pairing TIP-12 and PIQ allows unit commanders to map both the decision-making temperament and the AI-fluency level of every operator, enabling deliberate human-machine teaming design rather than ad-hoc assignment under duress."
  - question: "What does the 5-minute PIQ self-diagnostic actually measure?"
    answer: "The diagnostic presents operators with four scenario fragments drawn from real chemical, biological, and radiological incident typologies. For each fragment, the operator constructs an AI query as they would in the field, selects environmental constraint tags, and specifies desired output formats. Responses are scored against a rubric derived from prompt engineering research and validated against CBRN-CADS query logs from tabletop exercises. The total session runs under five minutes and returns a score on a 0–100 scale across the five PIQ dimensions, a recommended TIP-12 role alignment, and a targeted micro-training queue of three prompts the operator should practice before the next exercise cycle."
citations:
  - title: "Artificial Intelligence and National Security"
    url: "https://sgp.fas.org/crs/natsec/R45178.pdf"
    publishedYear: 2023
  - title: "Human-AI Teaming: State-of-the-Art and Research Gaps (RAND)"
    url: "https://www.rand.org/pubs/research_reports/RRA1028-1.html"
    publishedYear: 2022
  - title: "NATO CBRN Defence Concept and Principles"
    url: "https://www.nato.int/cps/en/natohq/topics_48895.htm"
    publishedYear: 2024
  - title: "OPCW Report on the Identification of the Chemical Agent Used in Salisbury"
    url: "https://www.opcw.org/media-centre/news/2018/04/opcw-issues-report-technical-secretariat-salisbury-incident"
    publishedYear: 2018
  - title: "Stanford Symbolic Systems Program — Cognitive Science and AI"
    url: "https://symsys.stanford.edu"
    publishedYear: 2024
  - title: "Global CBRN Defense Market — MarketsandMarkets"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-227460154.html"
    publishedYear: 2024
ogImage: "cbrn-ai-piq-prompt-intelligence-cbrn-2026.png"
---

# PIQ: Measuring AI-Collaboration Readiness in CBRN Teams

## Abstract

When a Novichok-class nerve agent is released in a confined transit node, the responding CBRN team's first decisive action is rarely a tactical maneuver — it is a query. The operator at a multi-sensor detection console must correctly interrogate an AI-driven system, frame the environmental context, and extract an actionable threat assessment in seconds. Whether they succeed depends on a skill set that military training pipelines have historically ignored: the capacity to collaborate fluently with artificial intelligence under pressure.

The **Prompt Intelligence Quotient (PIQ)** is UAM KoreaTech's answer to that capability gap. Developed within the **Tactical Prompt** platform alongside the **TIP-12** commander archetype framework, PIQ offers a structured, five-minute self-assessment that scores an operator's AI-collaboration fluency across five operational dimensions. This article grounds the PIQ concept in a historical case of catastrophic decision-intelligence failure, quantifies the cost of low human-machine teaming capability in modern CBRN operations, and explains how PIQ — integrated with **CBRN-CADS** sensor intelligence — converts a latent organizational vulnerability into a measurable, trainable variable.

---

## 1. Historical Anchor — The 1995 Tokyo Subway Sarin Attack: The Query That Was Never Made

### Inner Landscape

On the morning of March 20, 1995, Aum Shinrikyo operatives released **Sarin** on five lines of the Tokyo subway system, killing 13 people and hospitalizing nearly 1,000. First responders arrived at scenes of mass casualty collapse with no confirmed chemical identification for the first critical 30 minutes. The inner landscape of the responding commanders was shaped by a single governing assumption: mass-casualty events in Tokyo subways were structural or criminal, not chemical. That prior ruled out the correct diagnostic frame before any evidence was examined. Commanders filtered incoming sensor data — anomalous odor reports, simultaneous miotic pupil presentations, the geographic clustering of collapses — through a lens that could not produce "nerve agent" as an output. The belief architecture was intact; the world had simply changed around it.

### Environmental Read

What the commanders missed was an environment that had been quietly signaling chemical threat for months. Aum Shinrikyo had already deployed Sarin in Matsumoto in June 1994, killing eight people. Japanese intelligence services had received fragmentary warnings about the group's chemical program. The subway system itself, as a semi-enclosed high-flow transit environment, was a textbook high-consequence release node for volatile agents. Every environmental variable pointed toward the possibility of chemical release; none of it was synthesized into the operational decision frame because no structured process existed to weight and integrate heterogeneous threat signals in real time. The environment was legible. The read was not made.

### Differential Factor

What made the Tokyo attack uniquely instructive was not the tactical failure of individual responders but the systemic absence of a human-machine decision framework. By 1995, computational tools capable of cross-referencing symptom clusters, agent databases, and environmental sensor data existed in academic and early defense research contexts. Stanford's **Symbolic Systems** program — which formalizes the integration of cognitive science, linguistics, and AI into human decision architectures — had been producing relevant foundational work for a decade. The differential was institutional: there was no protocol that told an operator *how* to query an information system under uncertainty, and no metric that assessed whether any given operator was capable of doing so effectively. The gap was not in data availability. It was in structured query capability.

### Modern Bridge

The Tokyo case remains the canonical reference for CBRN decision-intelligence failure precisely because it was not a technology failure. Thirty years later, CBRN response units are fielding AI-driven multi-sensor platforms with the computational power to identify **Sarin**, **Novichok**, and radiological signatures in near-real time. Yet the same structural vulnerability persists: the quality of the AI's output is bounded by the quality of the operator's input. **PIQ** is the direct institutional response to that 1995 lesson. It asks: before the incident occurs, do we know which operators on this team can effectively query an AI system under pressure — and which ones will freeze, over-simplify, or misframe the problem in ways that delay identification and response?

---

## 2. Problem Definition — The Unquantified Human-Machine Gap in CBRN Operations

The global CBRN defense market is projected to reach **$17.6 billion by 2028**, growing at a CAGR of approximately 5.4%, driven primarily by sensor and detection system procurement (MarketsandMarkets, 2024). NATO alliance members are collectively accelerating investment in AI-augmented detection platforms following the 2018 Salisbury Novichok incident, which demonstrated that even high-resource democracies with mature CBRN infrastructure could face a **72-hour identification delay** when human decision processes failed to integrate available evidence efficiently (OPCW, 2018).

Despite this investment wave, a critical capability gap is going unmeasured. RAND's 2022 analysis of human-AI teaming across defense contexts found that operational performance in AI-augmented workflows is highly sensitive to user prompt quality, yet fewer than **15% of surveyed military units** had any formal assessment mechanism for AI-collaboration fluency (RAND, 2022). In CBRN-specific contexts, where sensor fusion platforms are queried under extreme time pressure with life-safety consequences, this gap translates directly into degraded detection fidelity.

The problem compounds across the TIP-12 archetype distribution. A CBRN unit's commander population includes operators with highly divergent decision styles — rapid-inference archetypes that may over-trust AI outputs, deliberative archetypes that may under-utilize them, and consensus archetypes that may query AI systems for social validation rather than operational intelligence. Without a PIQ baseline, unit commanders cannot see this variance, cannot assign operators to human-machine teaming roles that match their fluency level, and cannot design targeted training interventions. The gap is invisible — until it becomes a casualty count.

---

## 3. UAM KoreaTech Solution — PIQ Within the Tactical Prompt Platform

**PIQ (Prompt Intelligence Quotient)** is the quantification layer of UAM KoreaTech's **Tactical Prompt** platform. It operationalizes insights from cognitive science and prompt engineering research into a five-minute self-diagnostic that any CBRN operator can complete on a tablet or field terminal before an exercise cycle or deployment rotation.

The diagnostic presents four incident scenario fragments — chemical vapor release, biological aerosol indicator, radiological point source, and combined CBRN ambiguity — and asks the operator to construct AI queries as they would against a live **CBRN-CADS** interface. Responses are scored across five dimensions: **(1) situational framing accuracy**, **(2) constraint specification completeness**, **(3) output format clarity**, **(4) iterative refinement speed**, and **(5) cross-sensor query integration**. The scoring rubric was developed against prompt engineering frameworks drawn from the computational linguistics tradition institutionalized at Stanford's Symbolic Systems program and validated against **CBRN-CADS** query log data from tabletop exercises.

Output is a 0–100 PIQ score with dimension-level granularity, a TIP-12 archetype alignment recommendation, and a three-item micro-training queue. Unit commanders receive an aggregate team PIQ heat map that immediately surfaces high-variance pairing risks — for example, a low-PIQ operator assigned to the primary **CBRN-CADS** sensor fusion console. The diagnostic requires no external proctor, no network connectivity in assessment mode, and no prior AI training — making it operationally viable in forward-deployed contexts. The entire pipeline, from diagnostic completion to team heat map generation, runs in under eight minutes.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea's strategic CBRN exposure profile is among the highest of any NATO partner-equivalent nation. The **Korean People's Army** maintains an estimated **2,500–5,000 metric tons** of chemical weapons agents, including nerve agents, blister agents, and blood agents, representing one of the world's largest declared chemical arsenals (IISS Military Balance, 2024). North Korea has additionally demonstrated a willingness to deploy chemical agents in targeted assassination operations, as confirmed in the 2017 VX nerve agent attack at Kuala Lumpur International Airport. This threat environment makes AI-augmented CBRN detection and structured decision intelligence not a procurement aspiration but an operational necessity.

Korea's domestic defense technology ecosystem is simultaneously maturing to meet that requirement. The Defense Acquisition Program Administration (DAPA) has accelerated dual-use technology pathways, and the **K-방산 (K-Defense)** export wave has created international market access for Korean CBRN solutions that would have been structurally impossible a decade ago. NATO's 2024 CBRN Defence Concept explicitly calls for AI integration in detection and decision support systems, creating a standards-alignment opportunity for Korean vendors already building to that specification.

UAM KoreaTech's positioning at the intersection of **CBRN-CADS** hardware, **BLIS-D** decontamination, and **Tactical Prompt** decision intelligence reflects a deliberate systems-integration thesis: detection, decontamination, and decision capability must scale together. PIQ ensures that as sensor platforms become more powerful, the human layer that queries them keeps pace. That is a defensible and differentiated position in a procurement market increasingly focused on total CBRN response capability rather than point solutions.

---

## 5. Forward Outlook

Over the next **12–24 months**, UAM KoreaTech's PIQ development roadmap targets three capability milestones. By Q3 2026, PIQ will be integrated directly into the **CBRN-CADS** operator interface, enabling real-time query quality scoring during live exercises and automatically flagging under-specified queries before they reach the AI inference layer. By Q1 2027, a longitudinal PIQ tracking module will allow unit commanders to monitor operator development curves across exercise cycles, generating training ROI data for defense procurement justification packages.

The third milestone, targeted for mid-2027, is NATO interoperability certification of the PIQ assessment protocol, enabling allied CBRN units to adopt a common AI-collaboration readiness standard that facilitates joint operations staffing decisions. Ongoing collaboration with Korean defense research institutes and external validation partnerships with European CBRN training centers will support that certification pathway. Simultaneously, the **TIP-12** archetype database will expand from 16 to 24 archetypes, incorporating additional decision-style variance observed across multinational exercise datasets. Each archetype expansion directly improves PIQ role-assignment recommendation precision.

---

## Conclusion

The operators who failed to identify **Sarin** in the Tokyo subway in 1995 did not lack intelligence or training — they lacked a structured framework for querying the information environment around them. Three decades later, that environment has been replaced by AI-driven sensor fusion platforms of extraordinary power, and the query problem has become both more tractable and more consequential. **PIQ** exists because measuring AI-collaboration capability before a crisis is the only rational response to a world where the speed of a correctly framed question can determine whether a decontamination protocol is initiated in 90 seconds or 90 minutes.