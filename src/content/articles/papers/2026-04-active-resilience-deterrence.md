---
title: "Active Resilience Deterrence: A Tactical Doctrine for CBRN AI Decision Support"
description: "수동적 방어를 넘어선 능동 회복탄력성 억제(ARD) 독트린의 이론적 정의와 CBRN-CADS 적용 사례"
category: "papers"
publishedAt: 2026-04-22
author: "박무진"
language: "en"
quickAnswer: "Active Resilience Deterrence (ARD) is a tactical doctrine that reframes CBRN response from passive damage limitation to active denial of adversary objectives. By compressing the decide-act phase of the OODA Loop through AI decision support, ARD restores the offensive optionality that conventional CBRN doctrine concedes. UAM KoreaTech's CBRN-CADS implements ARD at the battalion level with documented 33x OODA compression."
tags: ["Doctrine", "CBRN", "OODA", "Decision Support", "Resilience"]
faq:
  - question: "What problem does Active Resilience Deterrence solve?"
    answer: "Conventional CBRN doctrine treats contamination as a defensive problem — detect, decontaminate, restore. ARD reframes it as an offensive denial problem: by acting faster than the adversary expects, the defender denies the adversary the operational benefit of the CBRN attack itself."
  - question: "How is ARD measured?"
    answer: "Two primary metrics: (1) OODA compression ratio (CBRN-CADS demonstrates 33x), and (2) Adversary-perceived response uncertainty (probabilistic; measured via red-team simulation)."
  - question: "Is ARD compatible with NATO doctrine?"
    answer: "Yes. ARD is consistent with NATO AJP-3.8 (Allied Joint Doctrine for Comprehensive Approach to Crisis Response) and operationalizes STANAG 2103 reporting at machine speed."
citations:
  - title: "NATO AJP-3.8 Allied Joint Doctrine for CBRN Defence"
    url: "https://nso.nato.int/"
    publishedYear: 2018
  - title: "Boyd, J. — A Discourse on Winning and Losing"
    url: "https://www.dnipogo.org/boyd/"
    publishedYear: 1987
  - title: "DoD Joint Publication 3-11 — Operations in CBRN Environments"
    url: "https://www.jcs.mil/Doctrine/"
    publishedYear: 2018
doi: "10.0000/uamkt.papers.ard.2026"
ogImage: "/og-images/papers-ard-2026.png"
---

# Active Resilience Deterrence

## Abstract

This paper proposes **Active Resilience Deterrence (ARD)** as a tactical doctrine for CBRN response in the AI-augmented battlefield. ARD reframes the defender's posture from passive damage limitation to active denial of adversary objectives by compressing the decide-act phase of the OODA Loop. The CBRN-CADS implementation demonstrates a 33x OODA compression at the battalion level, validating the doctrine's operational feasibility.

## 1. Problem Statement

Conventional CBRN doctrine inherits an industrial-age assumption: that the defender's task is to absorb the attack and restore baseline operations. This concedes the adversary's primary objective — the temporary degradation of the defender's offensive capacity — by definition. The defender wins the *long* fight (decontamination, medical response) while losing the *short* fight (operational tempo).

This concession is no longer tenable for three reasons:

1. **Contemporary adversaries optimize for the short fight.** Mission planning explicitly accounts for the defender's CBRN response window and schedules follow-on action within it.
2. **Dual-use threats blur the attribution boundary.** The defender wastes critical decide cycles on attribution rather than action.
3. **AI-augmented adversaries compress their own OODA.** The defender's OODA must compress in proportion or the relative tempo gap widens.

## 2. Definition

> **Active Resilience Deterrence (ARD)** is the doctrine of denying the adversary the operational benefit of a CBRN action by acting faster than the adversary's planning model anticipates.

Three constituent elements:

1. **AI-compressed decide phase** — The decide phase is automated for the most common 80% of scenarios, with human-in-the-loop escalation for the rest.
2. **Predetermined response cards** — A library of pre-approved tactical responses indexed by hazard signature, environmental conditions, and unit posture.
3. **Adversary-facing signaling** — Deliberate communication of response speed back to the adversary, recursively shifting their planning model.

## 3. Implementation: CBRN-CADS

UAM KoreaTech's **CBRN-CADS** (Chemical Biological Radiological Nuclear Combat Decision Support) implements ARD at the battalion level. The system ingests sensor telemetry (chemical detectors, biosurveillance, radiological monitors) and produces three outputs:

- **Hazard classification** (NATO STANAG 2103 categories)
- **Recommended tactical action** (selected from the response card library)
- **Confidence band** (with explicit uncertainty quantification)

Patent **KR 10-2026-0055778** ("GPS 거부 오염환경에서 유·무인 복합(MUM-T) 작전을 위한 자율 CBRN 제독 의사결정 시스템 및 방법") covers the autonomous decision logic for GPS-denied contamination environments.

### 3.1 OODA Compression Measurement

Baseline (manual battalion CBRN response): observed 22–28 minutes from sensor trigger to first defensive action.

CBRN-CADS pilot: observed 38–48 seconds from sensor trigger to first defensive action.

Compression ratio: **~33x**.

## 4. Compatibility with Existing Doctrine

ARD is not a replacement for NATO AJP-3.8 or DoD JP 3-11; it is a tempo accelerator that operates within their authority structures. The escalation thresholds, rules of engagement, and human-in-the-loop requirements are preserved.

## 5. Limitations

- **Training data scarcity** — Real CBRN events are rare, so the response card library is necessarily seeded with synthetic scenarios. Validation against red-team exercises is ongoing.
- **Adversary adaptation** — Once ARD becomes known, adversaries will adapt. The doctrine assumes continuous re-tuning of the response card library.

## 6. Conclusion

ARD reframes CBRN response from a defensive problem to a denial problem. CBRN-CADS demonstrates the operational feasibility of the doctrine at the battalion level. Future work will extend ARD to brigade and corps levels and validate the adversary-signaling element through allied red-team exercises.
