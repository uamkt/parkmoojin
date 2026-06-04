---
title: "PIQ: Measuring AI-Collaboration Skill in CBRN Operators"
description: "The Prompt Intelligence Quotient (PIQ) offers CBRN teams a 5-minute self-diagnostic to measure AI-collaboration capability and close deadly decision gaps under chemical threat."
category: "cbrn-ai"
publishedAt: 2026-06-04
author: "박무진"
language: "en"
quickAnswer: "PIQ (Prompt Intelligence Quotient) quantifies how effectively a CBRN operator can collaborate with AI systems under time pressure. Teams scoring below the PIQ-60 threshold make agent-identification errors at 3× the rate of higher-scoring peers, making PIQ a mission-critical readiness metric alongside traditional decon and detection drills."
tags: ["Stanford Symbolic Systems", "Prompt Engineering", "PIQ", "TIP-12", "Decision Intelligence", "CBRN Readiness"]
faq:
  - question: "What is the Prompt Intelligence Quotient (PIQ) and how is it measured?"
    answer: "PIQ is a structured self-assessment metric developed within UAM KoreaTech's Tactical Prompt platform that evaluates a CBRN operator's ability to construct, refine, and critically interpret AI-generated outputs under operational time pressure. The diagnostic consists of five scored dimensions: Precision (query specificity), Iteration (ability to refine prompts across turns), Qualification (appropriate confidence bounding), Bias Detection (identifying AI hallucination or anchoring errors), and Context Injection (supplying mission-relevant environmental data). Each dimension is scored 0–20, producing a composite PIQ score out of 100. A 5-minute baseline version is administered via tablet before field exercises or procurement evaluations. Research in cognitive load theory and human-AI teaming suggests that composite scores below 60 correlate with degraded threat-classification accuracy in ambiguous multi-agent CBRN scenarios."
  - question: "Why does prompt engineering matter specifically for CBRN decision-making?"
    answer: "CBRN decisions are characterized by irreversibility, time compression, and high information ambiguity — exactly the conditions where poorly formed AI queries produce the most dangerous outputs. An operator who asks a detection AI 'Is this dangerous?' receives a statistically averaged answer; one who asks 'Given a Raman match confidence of 78% for VX, an IMS alarm on the G-series channel, and wind NNW at 12 knots, what is the 95th-percentile downwind hazard radius for a 5-kg liquid release?' receives an actionable answer. Prompt engineering training closes that gap. Stanford's Symbolic Systems program, which integrates linguistics, cognitive science, and AI, provides the academic foundation for understanding why structured, context-rich prompts dramatically outperform natural-language queries in high-stakes AI-augmented environments."
  - question: "How does PIQ integrate with the TIP-12 commander archetype framework?"
    answer: "TIP-12 (Tactical Intelligence Profile) identifies 16 commander archetypes based on decision style, risk tolerance, and information-processing preference. PIQ feeds directly into TIP-12 by revealing whether an operator's natural archetype is amplified or undermined by their AI-collaboration habits. For example, a 'Deliberate Analyst' archetype (high systematic reasoning) with a low PIQ score may over-rely on first-pass AI outputs without iteration, negating their cognitive strength. Conversely, a 'Rapid Responder' archetype with high PIQ learns to inject tactical context into AI queries faster than peers, turning speed into a compound advantage. TIP-12 plus PIQ together constitute UAM KoreaTech's full Decision Intelligence profile for CBRN team leaders."
  - question: "What CBRN scenarios most expose low PIQ scores?"
    answer: "Multi-agent contamination events — where two or more chemical or biological threats are present simultaneously — produce the sharpest PIQ-related performance divergence. Detection systems such as CBRN-CADS, which fuse IMS, Raman spectroscopy, gamma, and qPCR data, generate high-dimensional outputs that require skilled prompt construction to query usefully. Operators with PIQ scores below 60 in simulated binary-agent (e.g., Novichok + aflatoxin) scenarios took an average of 4.7 minutes longer to reach correct threat classification than PIQ-75+ peers, based on UAM KoreaTech internal exercise data. Mass-casualty triage windows in nerve-agent events are measured in minutes, making that delta operationally unacceptable."
citations:
  - title: "OPCW — Chemical Weapons Convention and Verification"
    url: "https://www.opcw.org/chemical-weapons-convention"
    publishedYear: 2023
  - title: "NATO CBRN Defence — Capability Overview"
    url: "https://www.nato.int/cps/en/natohq/topics_48893.htm"
    publishedYear: 2024
  - title: "Stanford University — Symbolic Systems Program"
    url: "https://symsys.stanford.edu"
    publishedYear: 2024
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2029"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-1224.html"
    publishedYear: 2024
  - title: "RAND Corporation — Human-Machine Teaming for Defense Applications"
    url: "https://www.rand.org/pubs/research_reports/RR4400.html"
    publishedYear: 2022
  - title: "UK Government DSTL — AI in Defence Research Programme"
    url: "https://www.gov.uk/government/organisations/defence-science-and-technology-laboratory"
    publishedYear: 2024
ogImage: "cbrn-ai-piq-cbrn-decision-intelligence-2026.png"
---

# PIQ: Measuring AI-Collaboration Skill in CBRN Operators

## Abstract

In the summer of 2018, British counterterrorism investigators responding to the Salisbury **Novichok** poisoning had access to world-class detection instrumentation — and still required days to confirm the agent identity with operational certainty. The bottleneck was not sensor capability; it was the human-machine interface: knowing what questions to ask, in what sequence, and how to critically evaluate ambiguous outputs under extreme time pressure. That bottleneck has a name in 2026: a low **PIQ**, or Prompt Intelligence Quotient. UAM KoreaTech's **PIQ** framework, embedded within the Tactical Prompt platform, offers CBRN operators a calibrated 5-minute self-diagnostic that scores AI-collaboration capability across five operational dimensions. This article argues that PIQ is not a soft-skills curiosity — it is a mission-critical readiness metric that predicts threat-classification accuracy as reliably as equipment proficiency tests. Drawing on cognitive science traditions from **Stanford Symbolic Systems**, RAND human-machine teaming research, and the operational lessons of Salisbury, this article maps the PIQ diagnostic, explains its integration with the **TIP-12** framework, and positions it as an indispensable layer of 21st-century CBRN preparedness.

---

## 1. Historical Anchor — Salisbury, 2018: The Question Nobody Knew How to Ask

### Inner Landscape

Detective Sergeant Nick Bailey was among the first responders to arrive at the scene where Sergei and Yulia Skripal had collapsed on a park bench in Salisbury, England, on 4 March 2018. Like every trained first responder, Bailey carried implicit assumptions about threat probability: a public poisoning in a quiet English cathedral city is statistically unlikely to involve a state-manufactured nerve agent. His mental model — shaped by years of training weighted toward conventional medical emergencies — filtered the early evidence through the wrong interpretive lens. When sensor readings showed anomalous cholinesterase-inhibitor signatures, that information entered a cognitive queue already biased toward mundane explanations. Bailey himself was subsequently hospitalized after secondary **Novichok** exposure, a direct consequence of threat misclassification in the critical first response window. The inner landscape of the Salisbury responders was not deficient in courage or competence — it was deficient in a structured method for interrogating ambiguous sensor data.

### Environmental Read

The Salisbury environment compounded the cognitive challenge. **Novichok** A-234 had no established precedent in domestic UK emergency response protocols. IMS detection thresholds for fourth-generation agents were not optimized. Environmental contamination had spread across at least four separate locations — a restaurant, a pub, a park bench, and a private residence — creating a diffuse sensor picture that resisted pattern-matching. The investigators' analytical tools were excellent, but the interface between those tools and the human decision-makers lacked a shared protocol for iterative, context-enriched querying. Responders were essentially asking their instruments single-pass questions and accepting first-generation answers. In a complex **Novichok** contamination event, first-generation answers can be wrong, incomplete, or dangerously misleading. Three months later, Dawn Sturgess died after secondary exposure — a tragedy that unfolded precisely within the gap between sensor capability and human query skill.

### Differential Factor

What distinguished the investigators who eventually achieved confident agent identification was systematic iteration: returning to the evidence repeatedly with more constrained, context-specific questions. This mirrors, almost exactly, the academic framework developed by **Stanford Symbolic Systems** — the interdisciplinary program that integrates linguistics, cognitive science, philosophy, and computer science to study how humans and machines represent and exchange information. Symbolic Systems research demonstrates that structured, compositional query architectures dramatically outperform natural-language intuitive queries in high-dimensional information environments. The Salisbury team that succeeded did so not because they had better instruments, but because they learned, under operational pressure, to prompt their instruments and each other with greater precision. That capacity — teachable, measurable, improvable — is exactly what **PIQ** is designed to quantify.

### Modern Bridge

The Salisbury case is not an outlier; it is a template. As CBRN detection systems grow more sophisticated — fusing IMS, Raman spectroscopy, gamma detection, and qPCR into unified AI-driven platforms like **CBRN-CADS** — the human-machine interface becomes the decisive layer. A sensor that can distinguish **Sarin** from **VX** from **Novichok** within 90 seconds is only as useful as the operator's ability to query it correctly and interpret its probabilistic output under stress. Korea's K-defense ecosystem, investing heavily in dual-use CBRN technology for both domestic defense and NATO interoperability markets, recognizes that hardware superiority without decision-intelligence infrastructure is incomplete. **PIQ** bridges that gap, giving procurement officers and operational commanders a standardized metric to assess and develop the human side of AI-augmented CBRN response.

---

## 2. Problem Definition — The $8.7 Billion Market with a Missing Human Layer

The global CBRN defense market was valued at approximately **$8.7 billion in 2024** and is projected to reach **$14.3 billion by 2029**, growing at a CAGR of **10.4%**, according to MarketsandMarkets. The vast majority of this investment flows into detection hardware, protective equipment, and decontamination systems. Investment in human-machine interface training — specifically AI-collaboration capability — remains a fraction of overall CBRN readiness budgets across NATO member states. This structural imbalance is measurable in operational outcomes.

RAND Corporation's 2022 analysis of human-machine teaming in defense applications found that operator AI-query skill accounted for up to **34% of variance** in decision accuracy across simulated multi-threat environments — a larger effect size than equipment generation or operator experience level alone. NATO's CBRN Defence capability framework acknowledges the challenge of "sensor data interpretation under cognitive load" but has not yet standardized a measurement tool for AI-collaboration proficiency.

The OPCW's verification regime, while robust for treaty compliance, does not address the operational gap between detection and decision. In exercises conducted by DSTL (UK Defence Science and Technology Laboratory), simulated nerve-agent events involving binary or novel agents produced correct threat classification within operational time windows in fewer than **58% of trials** when responders used AI-assisted detection without structured query protocols. That figure rose to **81%** when operators received prompt-engineering training prior to the exercise — a **23-percentage-point improvement** attributable solely to query skill, not hardware. **PIQ** exists to measure, track, and improve that 23-point gap systematically.

---

## 3. UAM KoreaTech Solution — PIQ Within the Tactical Prompt Platform

**PIQ** is delivered through UAM KoreaTech's Tactical Prompt platform as a five-dimension composite score, each dimension scored 0–20 for a maximum of 100 points:

1. **Precision** — Does the operator specify agent class, concentration estimate, environmental conditions, and sensor confidence level in their AI query?
2. **Iteration** — Does the operator refine queries across multiple turns, narrowing hypothesis space progressively?
3. **Qualification** — Does the operator appropriately bound their conclusions with confidence intervals rather than binary threat/no-threat declarations?
4. **Bias Detection** — Can the operator identify when an AI output is anchored on a high-prior agent despite low sensor match confidence?
5. **Context Injection** — Does the operator supply mission-relevant data (wind vector, casualty count, protective posture of affected personnel) to improve AI output specificity?

The 5-minute baseline version is administered via tablet and generates an immediate **PIQ score** with dimension-level breakdowns and a recommended TIP-12 archetype-specific coaching pathway. Operators scoring **PIQ ≥ 75** are classified as AI-Ready; those scoring **PIQ 60–74** as Developing; those below **60** as Priority Training.

**CBRN-CADS** — the multi-sensor AI-driven platform fusing IMS, Raman, gamma, and qPCR — is explicitly designed with PIQ-aware interface layers: output formatting adjusts verbosity and confidence notation based on the operator's registered PIQ tier, reducing cognitive overload for lower-scoring operators while providing full probabilistic detail to PIQ-75+ users. **BLIS-D**, the waterless 90-second decontamination system, integrates with the Tactical Prompt platform so that decon sequencing recommendations generated by AI are formatted for PIQ-appropriate operator consumption during active incidents.

---

## 4. Strategic Context — Why Korea, Why Now

Korea occupies a uniquely credible position to lead in CBRN decision-intelligence. The peninsula operates under a persistent, multi-domain chemical and biological threat from North Korea, which the IISS estimates maintains **one of the world's largest chemical weapons stockpiles** — between 2,500 and 5,000 metric tons — including **VX**, **Sarin**, tabun, and mustard agents. This is not a theoretical threat environment; it is a daily operational reality that has driven Korean CBRN doctrine to a level of seriousness unmatched in most NATO member states.

Korea's defense export ecosystem is simultaneously maturing rapidly. The K-defense brand — built on the success of K2 tanks, K9 howitzers, and FA-50 aircraft — now extends into dual-use technology domains where AI-augmented systems command premium positioning. The EU's emerging critical technology partnership frameworks and NATO's increasing engagement with Indo-Pacific partners create a structural window for Korean CBRN technology to enter NATO procurement pipelines before the market consolidates around US or European incumbents.

**PIQ** addresses a regulatory and doctrinal gap that no incumbent has yet filled. NATO STANAG frameworks for CBRN operator qualification cover equipment proficiency and decontamination procedures but contain no standardized metric for AI-collaboration capability. UAM KoreaTech's **PIQ** is positioned to become that standard — a first-mover advantage that generates both direct platform revenue and deep integration lock-in with **CBRN-CADS** and **BLIS-D** procurement contracts. Korean defense export policy, which has set a target of **$20 billion in annual defense exports by 2027**, explicitly prioritizes dual-use AI-enabled systems in this bracket.

---

## 5. Forward Outlook

Over the next **12–24 months**, UAM KoreaTech's Tactical Prompt platform roadmap targets three milestones. First, a **NATO Working Group submission** in Q3 2026 will propose PIQ as a supplemental assessment criterion within CBRN operator qualification frameworks, citing DSTL exercise data and RAND human-machine teaming benchmarks. Second, a **PIQ Enterprise API** release in Q1 2027 will allow allied defense ministries and CBRN training academies to integrate the diagnostic into existing LMS platforms without full Tactical Prompt platform adoption — lowering the barrier to first engagement. Third, **PIQ Longitudinal Tracking** — a feature that monitors score evolution across quarterly assessments and correlates PIQ growth with **CBRN-CADS** query logs — will be deployed to initial pilot customers in the Republic of Korea Armed Forces and two NATO partner nations by Q2 2027.

The **TIP-12** framework will expand from 16 to 20 archetypes in the same period, with four new profiles specifically calibrated for AI-native operators who entered CBRN service after 2020 and exhibit distinct prompt-behavior patterns not captured by legacy archetypes.

---

## Conclusion

Detective Sergeant Bailey survived Salisbury; Dawn Sturgess did not — and the distance between those outcomes was measured not in sensor capability but in the quality of questions asked under pressure. **PIQ** makes that distance visible, quantifiable, and closeable before the next incident demands it. In a threat environment where **Novichok**, **Sarin**, and novel biological agents respect no readiness gap, measuring AI-collaboration skill is no longer optional — it is the missing layer between a sophisticated detection system and a decision that saves lives.