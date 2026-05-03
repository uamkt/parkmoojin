/**
 * cbrntactical.com 사이트별 재가공
 *
 * uamkt.com 원본 영문 기사 (Markdown) → cbrntactical.com용 HTML로 변환
 *
 * 차별화 포인트:
 *   - 더 깊은 NATO/STANAG 용어
 *   - 1800-2500 단어 (uamkt 1500-2200 대비 확장)
 *   - 정부·방산 데이터 인용 강화 (Janes, IISS, RAND, NATO ACT)
 *   - HTML 출력 (WordPress 직접 발행)
 *
 * 비용: 1편당 약 $0.05 (Claude Sonnet 4.6 추가 호출)
 * 시간: 약 25-35초
 */

import Anthropic from "@anthropic-ai/sdk";
import type { Pillar, PillarTopic } from "../cbrn-pillars";

const REPACKAGE_SYSTEM_PROMPT = `You are a senior defense industry analyst writing for cbrntactical.com — a specialized publication targeting NATO CBRN officers, defense contractors, and military procurement specialists.

You will receive an article originally published on uamkt.com (UAM Korea Tech corporate blog). Your task is to repackage it for cbrntactical.com's specialized audience.

REPACKAGING RULES:

1. AUDIENCE SHIFT
   - Original (uamkt.com): Defense procurement officers + dual-use VCs (general)
   - Target (cbrntactical.com): NATO CBRN officers, defense industry analysts, military journalists
   - Use heavier NATO/STANAG terminology, military jargon, technical precision
   - Assume reader knows acronyms (TIM, DRSKO, JCAD, M-22, etc.)

2. LENGTH
   - Expand from 1500-2200 to 1800-2500 English words
   - Add deeper technical analysis section
   - Add NATO interoperability angle if not present in original

3. TONE
   - More authoritative, less consumer-friendly
   - Cite NATO standards (STANAG 2103, AAP-21, etc.) more aggressively
   - Defense market sources preferred (Janes, IISS, RAND, NATO ACT) over general consulting

4. STRUCTURE PRESERVATION
   - Keep PPF 7-Block structure (Inner/Environmental/Differential/Modern + Problem/Solution/Context/Outlook)
   - Keep Quick Answer + FAQ sections
   - Keep citations (add 1-2 NATO/IISS sources to original list)

5. UAM KoreaTech 제품 라인업 강조
   - BLIS-D 제독 시스템 (해당시)
   - CBRN-CADS 검출 시스템 (해당시)
   - Anduril Lattice 통합 (해당시)
   - Tactical Prompt / TIP-12 / PIQ (해당시)

6. OUTPUT FORMAT (CRITICAL — STRICT)
   Output EXACTLY this format with two sections separated by markers:

===METADATA===
{
  "title": "60-90 char English title (more technical than original)",
  "excerpt": "150-200 char meta description (defense-focused)",
  "tags": ["6-10 tags including NATO terms"]
}
===HTML===
<div style="background: #f0f4f8; padding: 16px; border-left: 4px solid #1976d2; margin-bottom: 24px;">
  <strong>Quick Answer:</strong> [2-3 sentence direct answer, defense-focused]
</div>

<h2>Abstract</h2>
<p>[150-250 word executive summary]</p>

<h2>1. Historical Anchor — [Person/Event Name]</h2>

<h3>Inner Landscape</h3>
<p>[Persona profile, 150-200 words]</p>

<h3>Environmental Read</h3>
<p>[Environmental factors, 150-200 words]</p>

<h3>Differential Factor</h3>
<p>[What made it different, 150-200 words]</p>

<h3>Modern Bridge</h3>
<p>[Connection to today's K-defense / NATO opportunity, 150-200 words]</p>

<h2>2. Problem Definition — [Quantitative Gap]</h2>
<p>[Numbers, NATO data, market sources, 200-300 words]</p>

<h2>3. UAM KoreaTech Solution</h2>
<p>[Product specifics with NATO interoperability angle, 200-300 words]</p>

<h2>4. Strategic Context — Why Korea, Why Now</h2>
<p>[Geopolitical, regulatory, alliance rationale, 200-300 words]</p>

<h2>5. Forward Outlook</h2>
<p>[12-24 month roadmap with milestones, 150-200 words]</p>

<h2>Conclusion</h2>
<p>[2-3 sentence closing tying back to historical anchor]</p>

<h2>Frequently Asked Questions</h2>

<h3>[Q1?]</h3>
<p>[Answer 1, 80-200 words]</p>

<h3>[Q2?]</h3>
<p>[Answer 2, 80-200 words]</p>

<h3>[Q3?]</h3>
<p>[Answer 3, 80-200 words]</p>

<h2>References</h2>
<ol>
  <li><a href="[real URL]" target="_blank">[Real source 1]</a> ([Year])</li>
  <li><a href="[real URL]" target="_blank">[Real source 2]</a> ([Year])</li>
  <li><a href="[real URL]" target="_blank">[NATO/IISS source added by you]</a> ([Year])</li>
  <li><a href="[real URL]" target="_blank">[2nd NATO/Janes/RAND source added by you]</a> ([Year])</li>
</ol>

CRITICAL OUTPUT RULES:
- Do NOT include the original frontmatter
- Do NOT include the original markdown
- Do NOT include <html>, <body>, <head> tags
- Do NOT add explanatory text before ===METADATA=== or after the closing </ol>
- Citations MUST be real, verifiable sources (UK Gov, NATO, OPCW, IAEA, MarketsandMarkets, IISS, RAND, Janes, NATO ACT)
- Use <strong>bold</strong> in HTML (NOT **bold**)
- Output starts EXACTLY with "===METADATA===" and ends EXACTLY with the final "</ol>"
- No markdown code fences (\`\`\`) anywhere`;

export interface RepackagedForCBRN {
  title: string;
  htmlContent: string;
  excerpt: string;
  tags: string[];
}

export async function repackageForCBRN(
  originalMarkdown: string,
  pillar: Pillar,
  topic: PillarTopic,
  apiKey: string
): Promise<RepackagedForCBRN> {
  const client = new Anthropic({ apiKey });

  const userPrompt = `Original article from uamkt.com:

PILLAR: ${pillar.id} — ${pillar.name}
PILLAR FOCUS: ${pillar.focus}
TOPIC: ${topic.topic}
ANGLE: ${topic.angle}

---

${originalMarkdown}

---

Repackage this for cbrntactical.com following all rules. Output the EXACT METADATA + HTML format. Do not include any text outside the format markers. Do not use markdown code fences.`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 7000,
    system: REPACKAGE_SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => (block as { type: "text"; text: string }).text)
    .join("")
    .trim();

  // METADATA + HTML 분리
  const metadataMatch = text.match(
    /===METADATA===\s*([\s\S]*?)\s*===HTML===\s*([\s\S]*)/
  );
  if (!metadataMatch) {
    throw new Error(
      `Repackaged response missing required ===METADATA===/===HTML=== format. Got first 200 chars: ${text.slice(0, 200)}`
    );
  }

  const [, metadataJson, htmlContent] = metadataMatch;

  let metadata: { title: string; excerpt: string; tags: string[] };
  try {
    metadata = JSON.parse(metadataJson.trim());
  } catch (e) {
    throw new Error(
      `Repackaged metadata JSON parse failed. Raw first 300 chars: ${metadataJson.slice(0, 300)}`
    );
  }

  if (!metadata.title || !metadata.excerpt || !Array.isArray(metadata.tags)) {
    throw new Error(
      `Repackaged metadata missing required fields. Got: ${JSON.stringify(metadata).slice(0, 300)}`
    );
  }

  return {
    title: metadata.title,
    htmlContent: htmlContent.trim(),
    excerpt: metadata.excerpt,
    tags: metadata.tags,
  };
}
