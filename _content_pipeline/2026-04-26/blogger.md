---
title: "AVIX-AI 객체 인식에 적용한 전술 프롬프트 5종 — TPE-002 사례"
labels: ["TPE-002", "Object Recognition", "AVIX-AI", "BSM 2.0", "Tactical Prompt"]
custom_html: true
---
<!--
Spoke 1 — Google Blogger (tacticalprompt.blogspot.com)
Week 1 · Pillar 1 (Civil) · 2026-04-26
약 1,820 단어 · 코드 블록 + Before/After
-->

<div style="font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif; max-width: 800px; margin: 0 auto; line-height: 1.75; color: #1F2937;">

<div style="display: flex; gap: 12px; align-items: center; font-size: 13px; color: #6B7280; padding-bottom: 18px; border-bottom: 1px solid #E5E7EB; margin-bottom: 28px;">
  <span style="background: #6D28D9; color: white; padding: 4px 12px; border-radius: 12px; font-weight: 700; font-size: 11px; letter-spacing: 0.05em;">TPE-002 · OBJECT RECOGNITION</span>
  <span>2026-04-26</span> · <span>박무진 (CEO)</span>
</div>

<h1 style="font-size: 32px; font-weight: 800; line-height: 1.3; color: #0E1626; margin: 16px 0 12px;">AVIX-AI 객체 인식에 적용한 전술 프롬프트 5종 — TPE-002 사례</h1>

<p style="font-size: 16px; color: #4B5563; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #6D28D9;">
공항 CCTV에서 조류 객체를 정확히 인식하는 AI 모듈을 구축할 때, 어떤 프롬프트 구조를 사용해야 할까요? 본사가 AVIX-AI에 실제로 적용한 5가지 전술 프롬프트(TPE-002 패키지)를 LLM 응답 비교와 함께 공개합니다.
</p>

<h2 style="font-size: 24px; font-weight: 700; color: #0E1626; margin: 40px 0 16px; padding-left: 14px; border-left: 4px solid #6D28D9;">1. 왜 객체 인식에 전술 프롬프트가 필요한가</h2>

<p>일반적인 이미지 분류 LLM은 "이 사진에 새가 있나요?" 같은 단순 질문에 잘 답합니다. 하지만 공항·UAM 버티포트 운영 환경에서는 그것만으로 부족해요. 다음과 같은 복잡한 질문에 답해야 합니다.</p>

<ul>
  <li>이 새는 어떤 종이며, 활주로 위협 등급은 무엇인가?</li>
  <li>비행 패턴이 일시 통과인지, 영구 서식인지?</li>
  <li>현재 시간대·기상 조건에서 이 종이 출현하는 것이 비정상인가?</li>
  <li>군집 크기·이동 방향이 어떤 위협 시나리오와 일치하는가?</li>
</ul>

<p>이런 복합 판단을 LLM이 안정적으로 수행하려면 프롬프트 구조 자체를 전술적으로 설계해야 합니다. 본사 TPE-002(Tactical Prompt Engineering — Object Recognition) 패키지는 이 문제를 5가지 프롬프트 패턴으로 해결합니다.</p>

<h2 style="font-size: 24px; font-weight: 700; color: #0E1626; margin: 40px 0 16px; padding-left: 14px; border-left: 4px solid #6D28D9;">2. TPE-002 5가지 프롬프트 패턴</h2>

<h3 style="font-size: 18px; font-weight: 700; color: #6D28D9; margin: 24px 0 10px;">패턴 1 — Threat-Tier Classification (위협 등급 분류)</h3>
<p>일반 LLM은 "Black-headed Gull (붉은부리갈매기)"처럼 종 이름을 답합니다. 하지만 운영자는 "이게 위협 1등급인가?"를 알고 싶어 합니다. 패턴 1은 종 식별 직후 ICAO Doc 9137 위협 등급을 함께 출력하도록 강제합니다.</p>

<pre style="background: #1A1A2E; color: #E5E7EB; padding: 20px; border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 13px; overflow-x: auto; border-left: 4px solid #4AD6B5;"><code>You are an aviation wildlife threat classifier compliant with ICAO Doc 9137 Part 3.

Given the image, output ONLY in this JSON schema:
{
  "species_kor": "한글 종명",
  "species_eng": "English species name",
  "icao_threat_tier": "Tier 1 (severe) | Tier 2 (significant) | Tier 3 (moderate) | Tier 4 (minor)",
  "tier_rationale": "1-sentence explanation",
  "confidence": 0.0~1.0
}</code></pre>

<h3 style="font-size: 18px; font-weight: 700; color: #6D28D9; margin: 24px 0 10px;">패턴 2 — Habitat Context Injection (서식지 컨텍스트 주입)</h3>
<p>같은 종이라도 공항 환경에 따라 위험도가 다릅니다. 패턴 2는 BSM 2.0 M2 모듈의 Habitat Profile 데이터를 프롬프트에 주입합니다.</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0;">
<div style="background: #FEF2F2; border: 1px solid #FECACA; padding: 16px; border-radius: 8px; font-size: 13px;">
<strong style="color: #DC2626;">BEFORE (컨텍스트 없음)</strong>
<p style="margin: 8px 0 0;">"흰뺨검둥오리 — 일반적 위협. Tier 2."</p>
</div>
<div style="background: #ECFDF5; border: 1px solid #A7F3D0; padding: 16px; border-radius: 8px; font-size: 13px;">
<strong style="color: #059669;">AFTER (컨텍스트 주입)</strong>
<p style="margin: 8px 0 0;">"흰뺨검둥오리 — 본 사이트에서 7일 내 3회 관찰, 380m 수계 인접. Tier 2 → 사이트 특화 Tier 1.5로 격상 권장."</p>
</div>
</div>

<h3 style="font-size: 18px; font-weight: 700; color: #6D28D9; margin: 24px 0 10px;">패턴 3 — Multi-Object Trajectory (다중 객체 궤적)</h3>
<p>조류는 단일 객체로 출현하기보다 군집(flock)으로 움직입니다. 패턴 3은 동일 프레임 내 다중 객체의 위치·속도·방향 벡터를 추출하여 군집 행동 패턴을 분류합니다.</p>

<h3 style="font-size: 18px; font-weight: 700; color: #6D28D9; margin: 24px 0 10px;">패턴 4 — Asset Orchestration Trigger (자산 발령 트리거)</h3>
<p>BSM 2.0의 M3 모듈은 위협 인식 → 자산 명령으로 직결되는 폐루프 구조입니다. 패턴 4는 LLM이 위협을 인식한 직후 어떤 자산 조합을 발령할지 추천하도록 합니다.</p>

<h3 style="font-size: 18px; font-weight: 700; color: #6D28D9; margin: 24px 0 10px;">패턴 5 — KPI Loopback (KPI 환류)</h3>
<p>조치 결과(성공·실패·비용)를 LLM이 다시 학습할 수 있도록 KPI 데이터를 환류시키는 패턴입니다. 이는 BSM 2.0의 M4 폐루프 학습과 직접 연동됩니다.</p>

<h2 style="font-size: 24px; font-weight: 700; color: #0E1626; margin: 40px 0 16px; padding-left: 14px; border-left: 4px solid #6D28D9;">3. 5 패턴 통합 운영 효과</h2>

<p>본사 AVIX-AI는 위 5 패턴을 순차적으로 적용하는 단일 추론 파이프라인으로 구성되어 있어요. 통합 운영 시 측정된 효과는 다음과 같습니다.</p>
<ul>
  <li><strong>위협 인식 정확도</strong>: 단일 패턴 대비 +23%</li>
  <li><strong>오탐 감소율</strong>: 12% → 4.2% (3배 개선)</li>
  <li><strong>자산 발령 적정성</strong>: 인간 운영자 동의율 89%</li>
  <li><strong>KPI 환류 후 학습 효과</strong>: 동일 사이트 30일 운영 후 +15% 추가 상승</li>
</ul>

<div style="background: linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%); color: white; padding: 28px; border-radius: 12px; margin: 36px 0; text-align: center;">
<h4 style="color: white; font-size: 22px; margin: 0 0 10px;">TPE-002 객체 인식 패키지 신청</h4>
<p style="color: #E0E7FF; margin: 0 0 16px;">5가지 프롬프트 패턴 + AVIX-AI 통합 가이드 + 30일 사이트 적응 컨설팅을 패키지로 제공합니다.</p>
<a href="https://tacticalprompt.com" style="display: inline-block; background: #4AD6B5; color: #064E3B; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700;">TPE-002 신청하기 →</a>
</div>

<div style="margin-top: 24px; padding: 16px 20px; background: #FAFAFA; border-radius: 8px; font-size: 13px;">
<strong>📚 Related Hub Article</strong> · <a href="https://uamkt.com/articles/case-studies/2026-04-26-uam-birdstrike-5-differentiators" style="color: #2E5077; font-weight: 600; text-decoration: none;">국내 최초 UAM 버드스트라이크 솔루션의 5가지 차별점 →</a>
</div>

</div>
