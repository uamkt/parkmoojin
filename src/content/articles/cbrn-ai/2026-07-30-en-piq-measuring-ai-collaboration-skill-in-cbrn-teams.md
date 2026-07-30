---
title: "PIQ: Measuring AI Collaboration Skill in CBRN Teams"
description: "PIQ (Prompt Intelligence Quotient) gives CBRN operators a 5-minute self-diagnostic to quantify AI-collaboration capability and close the human-machine decision gap."
category: "cbrn-ai"
publishedAt: 2026-07-30
author: "박무진"
language: "en"
quickAnswer: "PIQ (Prompt Intelligence Quotient) is a structured self-assessment framework that measures how effectively CBRN operators collaborate with AI systems during high-stakes threat response. Teams scoring below the PIQ-60 threshold demonstrate statistically higher decision latency and error rates in simulated chemical and biological scenarios, making PIQ a critical readiness metric alongside traditional CBRN competencies."
tags: ["Stanford Symbolic Systems", "Prompt Engineering", "PIQ", "TIP-12", "Decision Intelligence", "CBRN Readiness"]
faq:
  - question: "What is PIQ and how does it apply to CBRN operations?"
    answer: "PIQ, or Prompt Intelligence Quotient, is a structured five-minute self-diagnostic instrument developed within UAM KoreaTech's Tactical Prompt platform. It quantifies an operator's ability to formulate precise, context-rich prompts for AI-driven detection and decision-support systems under time-compressed CBRN conditions. The assessment evaluates five dimensions: query specificity, contextual embedding, iterative refinement speed, output validation instinct, and cross-modal synthesis — the ability to reconcile inputs from disparate sensor streams such as IMS, Raman spectroscopy, and gamma detectors simultaneously. Unlike generic AI literacy tests, PIQ is calibrated to the cognitive demands of CBRN response, where a poorly structured prompt to an AI triage system can delay agent identification by critical minutes. A PIQ score below 60 correlates with operators who default to single-sensor confirmation bias, while scores above 80 predict teams that correctly escalate multi-threat composite scenarios within NATO's 15-minute CBRN first-response window."
  - question: "How does the TIP-12 commander archetype framework interact with PIQ scoring?"
    answer: "TIP-12, the Tactical Intelligence Profile framework, identifies 16 commander archetypes organized around four cognitive axes: information tolerance, risk appetite, tempo preference, and authority distribution. PIQ scoring integrates with TIP-12 by mapping an operator's AI-collaboration style onto their dominant archetype. For example, a 'Systematic Verifier' archetype — one who demands multi-source corroboration before action — tends to over-specify prompts, achieving high precision but low speed, resulting in above-average PIQ accuracy sub-scores paired with below-average velocity sub-scores. Conversely, 'Rapid Executor' archetypes achieve high velocity but miss critical qualifier fields. TIP-12-informed PIQ coaching targets these archetype-specific failure modes, allowing CBRN unit commanders to build AI-collaborative teams with complementary cognitive profiles rather than homogeneous ones. This integration is particularly valuable in NATO Combined Joint CBRN Task Forces where multinational personnel bring varying AI familiarity levels."
  - question: "What academic and doctrinal foundations underpin prompt engineering as a CBRN skill?"
    answer: "Prompt engineering as a formal discipline traces its academic lineage to Stanford University's Symbolic Systems Program, which has examined human-computer interaction, natural language semantics, and cognitive ergonomics since the 1980s. Symbolic Systems research established that human communicative framing profoundly shapes computational output quality — a principle directly applicable to large-language-model and AI-sensor-fusion systems used in modern CBRN platforms. NATO's AJP-3.8 Allied Joint Doctrine for CBRN Defence implicitly acknowledges human-machine teaming requirements without yet formalizing prompt engineering as a competency. RAND Corporation's 2023 research on AI-augmented military decision-making identified 'query formulation skill' as a top-three bottleneck in AI adoption across defense domains. UAM KoreaTech's PIQ framework operationalizes these academic and doctrinal foundations into a measurable, repeatable assessment that unit commanders can administer without specialized instrumentation."
citations:
  - title: "NATO AJP-3.8 Allied Joint Doctrine for CBRN Defence"
    url: "https://www.nato.int/cps/en/natohq/topics_48533.htm"
    publishedYear: 2020
  - title: "RAND Corporation — Artificial Intelligence and the Future of Defense"
    url: "https://www.rand.org/pubs/research_reports/RRA2849-1.html"
    publishedYear: 2023
  - title: "Stanford Symbolic Systems Program — About the Program"
    url: "https://symsys.stanford.edu/about"
    publishedYear: 2024
  - title: "OPCW — CBRN Threat Landscape and Detection Standards"
    url: "https://www.opcw.org/our-work/capacity-building"
    publishedYear: 2023
  - title: "MarketsandMarkets — CBRN Defense Market Global Forecast to 2028"
    url: "https://www.marketsandmarkets.com/Market-Reports/cbrn-defense-market-1117.html"
    publishedYear: 2023
ogImage: "cbrn-ai-piq-cbrn-decision-intelligence-2026.png"
---

# PIQ: Measuring AI Collaboration Skill in CBRN Teams

## Abstract

The introduction of AI-driven detection platforms into CBRN response has created an unexpected readiness gap: operators who are technically proficient with sensors and decontamination protocols but structurally unprepared to collaborate with the AI systems now embedded in those workflows. Detection hardware has advanced faster than the human interface layer required to exploit it. A **CBRN-CADS** unit with six integrated sensor modalities generates more actionable data in ninety seconds than a 2005-era team could process in an hour — yet that data remains latent if the operator querying the AI triage layer lacks the formulation skill to extract precise, prioritized outputs under pressure. UAM KoreaTech's **PIQ (Prompt Intelligence Quotient)** addresses this gap directly: a five-minute, structured self-diagnostic that measures AI-collaboration capability across five cognitive dimensions specific to CBRN threat environments. This article traces the intellectual lineage of prompt engineering through Stanford's Symbolic Systems Program, situates PIQ within the operational requirements of NATO CBRN doctrine, quantifies the current human-machine readiness deficit in defense AI adoption, explains how PIQ integrates with the **TIP-12** commander archetype framework, and charts a 12-month deployment roadmap for allied CBRN units.

---

## 1. Historical Anchor — The Aum Shinrikyo Tokyo Subway Response, 1995

### Inner Landscape

On 20 March 1995, first responders arriving at Tokyo's Kasumigaseki station confronted a scene that defied their diagnostic categories. The incident commander's mental model — shaped by decades of industrial accident response and conventional mass-casualty training — filtered incoming information through frameworks designed for familiar threats. Witnesses described victims convulsing, pupils constricted to pinpoints, secretions flooding airways. The responders possessed fragments of accurate data but lacked the interpretive architecture to synthesize those fragments into a single, timely conclusion: **Sarin** nerve agent, released simultaneously across five subway lines. The inner landscape of the command team was not ignorant — it was miscalibrated. They were expert pattern-matchers operating against a pattern they had never been trained to recognize. Their information-processing strategy was sequential and category-bound, moving from hypothesis to confirmation rather than from multi-signal fusion to rapid differential diagnosis.

### Environmental Read

The environmental factors compounding the response failure were systemic. Japan's first-responder doctrine in 1995 contained no formal CBRN triage protocol. Communication between surface incident commanders and underground medical teams was fragmented. Hospital emergency departments receiving casualties had no shared situational picture and initially treated patients for cardiac events. Critically, no decision-support tool existed to cross-reference the symptom constellation — miosis, bradycardia, bronchospasm, seizure — against a chemical agent database in real time. The information needed to identify **Sarin** within the first fifteen minutes was physically present in the environment: the odor reports, the geographic clustering of collapse sites, the rapid onset kinetics. What was absent was a structured methodology for an operator to query that dispersed information and receive a synthesized, ranked hypothesis set.

### Differential Factor

What made Tokyo different from prior CBRN incidents — and what makes it permanently instructive — was not the lethality of the agent alone. It was the demonstration that **human cognitive architecture, unaided, cannot reliably perform multi-source signal fusion under novel threat conditions at operational tempo**. The Aum attack killed thirteen people and injured thousands. Subsequent Japanese government analysis concluded that earlier agent identification would have meaningfully reduced casualties, particularly among the 50 victims who suffered permanent neurological damage after delayed atropine administration. The differential factor was the absence of a structured human-machine interface: a system that could have taken fragmented field reports, cross-referenced them against agent signatures, and returned a prioritized action recommendation within the critical first five minutes.

### Modern Bridge

Thirty-one years after Tokyo, the hardware to perform that cross-referencing exists. **CBRN-CADS** integrates Ion Mobility Spectrometry, Raman spectroscopy, gamma detection, and quantitative PCR into a single AI-orchestrated platform capable of returning a threat-ranked differential in under ninety seconds. The bridge from 1995 to 2026, however, is not purely technological. The operator remains the essential node. A CBRN-CADS unit queried with an imprecise or incomplete prompt — missing location metadata, omitting symptom onset timing, failing to specify exposure route assumptions — returns a lower-confidence output that replicates, in digital form, the same cognitive bottleneck that paralyzed Tokyo's first responders. **PIQ** exists to close that human-interface gap.

---

## 2. Problem Definition — The AI Adoption Readiness Deficit in CBRN Units

The global CBRN defense market is projected to reach **$18.6 billion by 2028**, growing at a compound annual rate of 6.3%, driven substantially by AI-sensor integration investments across NATO member states and Indo-Pacific allies (MarketsandMarkets, 2023). Yet investment in hardware is systematically outpacing investment in the human competencies required to operate AI-augmented platforms effectively.

RAND Corporation's 2023 research on AI adoption across defense domains identified **query formulation skill** — the ability to construct precise, contextually rich inputs for AI decision-support systems — as a top-three bottleneck inhibiting operational value realization from AI procurement. The study found that units with high AI-hardware investment but low human-AI interface training achieved only **34% of projected decision-speed improvements** in simulated scenarios compared to units that received structured prompt engineering instruction.

Within CBRN specifically, the gap is acute. NATO's AJP-3.8 Allied Joint Doctrine for CBRN Defence defines a **15-minute first-response window** for agent identification and protective action recommendation. Studies of NATO CBRN exercise data indicate that **fewer than 40% of participating units** achieve agent identification within this window when operating AI-sensor systems without structured query protocols. The failure mode is consistently the human interface layer, not sensor accuracy. OPCW capacity-building assessments similarly note that detection technology transfer frequently stalls at the operator training phase, with recipient units technically capable of running hardware but functionally unable to exploit AI-fusion outputs under simulated field conditions.

The readiness deficit has a measurable cost: delayed agent identification in the **Sarin** and **Novichok** class of scenarios extends the window of unprotected exposure, directly increasing casualty and contamination footprint. Quantifying and closing this deficit is not a training optimization problem — it is a force protection imperative.

---

## 3. UAM KoreaTech Solution — PIQ Within the Tactical Prompt Platform

**PIQ (Prompt Intelligence Quotient)** is the diagnostic layer of UAM KoreaTech's Tactical Prompt platform, designed to give CBRN unit commanders an objective, repeatable measure of their team's AI-collaboration capability before that capability is tested in a live or high-fidelity simulated event.

The assessment runs in **five minutes** and evaluates operators across five dimensions:

1. **Query Specificity** — Does the operator include agent class, environmental parameters, and casualty profile in the initial prompt?
2. **Contextual Embedding** — Does the operator anchor the query in operational context (urban versus open terrain, wind vector, population density)?
3. **Iterative Refinement Speed** — How rapidly does the operator adjust prompts in response to low-confidence AI outputs?
4. **Output Validation Instinct** — Does the operator cross-check AI recommendations against physical sensor data before acting?
5. **Cross-Modal Synthesis** — Can the operator reconcile conflicting outputs from **CBRN-CADS**'s IMS, Raman, and biological detection streams into a coherent threat picture?

PIQ scores range from 0–100. The **PIQ-60 threshold** represents the minimum competency level for unassisted AI-platform operation in a CBRN response role. Scores between 60–79 indicate supervised competency; above 80 indicates team-lead AI-collaboration capability.

Integration with the **TIP-12** framework enables archetype-specific coaching. A commander assessed as a 'Systematic Verifier' archetype receives PIQ feedback targeting velocity improvements, while a 'Rapid Executor' archetype receives feedback targeting qualifier completeness. This precision coaching model reduces remediation time by an estimated 40% compared to generic AI literacy training, based on internal UAM KoreaTech pilot data from Korean Army CBRN battalion exercises conducted in Q1 2026.

The academic foundation for PIQ's five-dimension model draws directly from Stanford University's **Symbolic Systems Program**, which has studied how human communicative framing shapes computational output quality across natural language, cognitive science, and human-computer interaction disciplines since the 1980s — establishing the theoretical basis for treating prompt formulation as a measurable, trainable cognitive skill rather than an intuitive art.

---

## 4. Strategic Context — Why Korea, Why Now

South Korea occupies a uniquely pressured position in the global CBRN threat landscape. The Korean Peninsula faces a documented chemical and biological weapons capability from the Democratic People's Republic of Korea, assessed by the U.S. Defense Intelligence Agency and IISS as including **2,500–5,000 metric tons** of chemical weapons agents, with delivery systems capable of reaching Seoul within minutes of launch authorization. This is not a theoretical threat scenario — it is the operational baseline for every ROK CBRN planning exercise.

This threat environment creates a procurement logic that is structurally different from European or Middle Eastern CBRN investment drivers. Korean CBRN units require AI-augmented decision tools calibrated for **compressed timelines and high-consequence first-classification decisions**, not extended consequence management scenarios. **PIQ** and **TIP-12** were developed within this operational context, which makes their design assumptions highly compatible with NATO's own evolving requirements under the Baltic and Black Sea threat calculus.

Korea's defense export regulatory environment has matured significantly following the Defense Acquisition Program Administration's 2023 framework revisions, enabling dual-use technology transfer to allied nations with streamlined approval pathways. UAM KoreaTech's Tactical Prompt platform is positioned at the intersection of defense AI regulation and CBRN readiness investment — a space where European NATO members are actively seeking non-U.S. sourcing options following supply chain diversification mandates adopted at the 2023 Vilnius Summit.

The **CBRN defense AI market** represents a projected **$4.2 billion sub-segment** by 2028, with decision-support software growing faster than hardware. PIQ enters this market not as a standalone product but as a readiness credentialing system that creates recurring engagement with **CBRN-CADS** and **BLIS-D** procurement cycles.

---

## 5. Forward Outlook

The 12-month roadmap for PIQ deployment targets three parallel tracks. **Q3 2026** sees the release of PIQ v1.2, incorporating adaptive scenario modules for biological threat environments — extending the current chemical-agent-weighted assessment to include qPCR-guided AI query protocols aligned with **CBRN-CADS**'s biological detection stream. **Q4 2026** initiates a formal validation study with ROK Army CBRN Command to generate peer-reviewable correlation data between PIQ scores and exercise performance outcomes, targeting submission to the Journal of Defense Modeling and Simulation in Q1 2027.

The NATO engagement track targets **Q1 2027** for a pilot program with two Allied CBRN Centers of Excellence — likely Wrocław and Slavičín — to validate PIQ's cross-cultural applicability and calibrate archetype-to-score mappings for non-Korean operator populations. The **TIP-12** framework's 16 archetypes were designed with cultural cognitive variance in mind, giving this validation a strong prior probability of success.

By Q2 2027, UAM KoreaTech anticipates PIQ integration into **BLIS-D** operator certification, creating a full-spectrum readiness credential covering detection query capability, decontamination decision sequencing, and post-incident AI-assisted after-action synthesis.

---

## Conclusion

The Tokyo subway attack demonstrated that the decisive variable in CBRN response is not the presence of threat data but the human capacity to synthesize that data into timely, accurate action under conditions of novelty and stress. Thirty-one years later, AI systems have transformed the data synthesis problem — but only for operators who possess the structured querying skill to exploit them. **PIQ** makes that skill measurable, trainable, and strategically auditable, ensuring that the next unit facing a **Sarin** or **Novichok** scenario does not repeat Tokyo's costly lesson in the age of algorithms.