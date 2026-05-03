/**
 * CBRN English Article Publisher
 *
 * 1. Build prompt from selected Pillar + Topic
 * 2. Call Claude Sonnet 4.6 API
 * 3. Validate generated content (basic frontmatter check)
 * 4. Commit MDX file to GitHub via REST API
 */

import Anthropic from "@anthropic-ai/sdk";
import type { Pillar, PillarTopic } from "./cbrn-pillars";

const SYSTEM_PROMPT = `You are a senior CBRN (Chemical, Biological, Radiological, Nuclear) defense analyst writing for UAM KoreaTech's English-language thought-leadership blog at uamkt.com.

UAM KoreaTech is a Korean dual-use defense startup whose flagship products are:
- BLIS-D (Bleed-air Liquid-In-Solid Decontamination): waterless, 90-second chemical/biological decon system using aircraft bleed-air principles
- CBRN-CADS (CBRN Chemical Agent Detection System): multi-sensor AI-driven detection platform (IMS + Raman + gamma + qPCR)
- Tactical Prompt platform: TIP-12 (Tactical Intelligence Profile, 16 commander archetypes) and PIQ (Prompt Intelligence Quotient)

Your task: generate ONE complete article in the company's PPF (Persona Profiling Framework) + AEO (Answer Engine Optimization) format.

OUTPUT FORMAT (strict YAML frontmatter + Markdown body, NOTHING before --- or after final paragraph):

---
title: "60-80 char hook-driven English title"
description: "150-200 char meta description in English"
category: "cbrn-ai"
publishedAt: YYYY-MM-DD
author: "박무진"
language: "en"
quickAnswer: "2-3 sentence direct answer to article's core question. 100-500 chars. Used by ChatGPT/Perplexity/Google AIO."
tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6"]
faq:
  - question: "Q1?"
    answer: "Answer 1 (80-200 words, factual, citation-friendly)"
  - question: "Q2?"
    answer: "Answer 2"
  - question: "Q3?"
    answer: "Answer 3"
citations:
  - title: "Real source name"
    url: "https://verifiable-url"
    publishedYear: YYYY
  - title: "Second real source"
    url: "https://..."
    publishedYear: YYYY
ogImage: "cbrn-ai-{slug-portion}-2026.png"
---

# Article Title

## Abstract

[150-250 word executive summary: hook → context → claim → preview]

## 1. Historical Anchor — [Real Person or Event Name]

### Inner Landscape

[Persona's beliefs, blind spots, decision logic — 150-200 words]

### Environmental Read

[Environmental factors persona missed — 150-200 words]

### Differential Factor

[What made this case different — 150-200 words]

### Modern Bridge

[Connection from historical incident to today's K-defense / dual-use opportunity — 150-200 words]

## 2. Problem Definition — [Quantitative Gap Today]

[Numbers, sources, market size, casualty data — 200-300 words]

## 3. UAM KoreaTech Solution — [Specific Product Angle]

[Technical advantage of BLIS-D / CBRN-CADS / Tactical Prompt platform — 200-300 words]

## 4. Strategic Context — [Why Korea, Why Now]

[Geopolitical, regulatory, economic rationale — 200-300 words]

## 5. Forward Outlook

[12-24 month roadmap and milestones — 150-200 words]

## Conclusion

[2-3 sentence memorable closing tying back to the historical anchor]

WRITING RULES:
1. ENGLISH ONLY in body and frontmatter values, EXCEPT: keep author "박무진" in Korean Hangul.
2. Total length: 1500-2200 words.
3. Citations must be REAL and VERIFIABLE: UK Government, NATO, OPCW, IAEA, MarketsandMarkets, IISS, RAND, Janes, etc. NEVER fabricate URLs.
4. Use **bold** for product names (BLIS-D, CBRN-CADS), key entities (Sarin, Novichok), and critical numbers.
5. Every section must connect back to UAM KoreaTech's positioning at least implicitly.
6. Audience: defense procurement officers, NATO CBRN officers, dual-use VCs.
7. Tone: authoritative, sober, evidence-driven. NO marketing fluff.
8. The <slug-portion> in ogImage should be 3-5 lowercase hyphenated keywords from the topic.
9. Tags should mix: 2 historical anchors + 2 product names + 2 strategic concepts.
10. quickAnswer must directly answer "What is the article's core insight?" — start with the answer, not setup.

Output the COMPLETE article now. Begin with --- and end with the final Conclusion paragraph. No preamble, no postscript.`;

export interface GeneratedArticle {
  slug: string;
  filename: string;
  fullContent: string;
  date: string;
  title: string;
}

export async function generateArticle(
  pillar: Pillar,
  topic: PillarTopic,
  date: Date,
  apiKey: string
): Promise<GeneratedArticle> {
  const client = new Anthropic({ apiKey });

  const dateStr = date.toISOString().split("T")[0]; // YYYY-MM-DD

  const userPrompt = `Generate today's CBRN English article.

PILLAR: ${pillar.name} (${pillar.id})
PILLAR FOCUS: ${pillar.focus}

TODAY'S TOPIC: ${topic.topic}
ANGLE: ${topic.angle}
KEY ENTITIES TO INCLUDE: ${topic.keyEntities.join(", ")}

PUBLISH DATE (use exactly): ${dateStr}

Generate the complete article in the exact format specified. Output starts with --- and ends with the final Conclusion paragraph.`;

  // max_tokens 6000 -> 4500: Vercel 함수 120s 한도 + Phase 1-A syndication
  // 1500-2000 단어 수준 (4500 토큰 ~ 90초 → 65초)
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4500,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => (block as { type: "text"; text: string }).text)
    .join("")
    .trim();

  // Validate: must start with --- and contain a title
  if (!text.startsWith("---")) {
    throw new Error(`Generated article missing frontmatter delimiter. Got: ${text.slice(0, 100)}`);
  }

  const titleMatch = text.match(/^title:\s*"([^"]+)"/m);
  if (!titleMatch) {
    throw new Error("Generated article missing title field in frontmatter");
  }

  const title = titleMatch[1];
  const slug = generateSlug(title);
  const filename = `${dateStr}-en-${slug}.md`;

  return {
    slug,
    filename,
    fullContent: text,
    date: dateStr,
    title,
  };
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[—–]/g, "-")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
    .replace(/-$/, "");
}

export interface CommitResult {
  url: string;
  sha: string;
  path: string;
}

export async function commitArticleToGitHub(
  article: GeneratedArticle,
  config: {
    token: string;
    repo: string; // "owner/repo"
    branch?: string;
  }
): Promise<CommitResult> {
  const branch = config.branch || "main";
  const path = `src/content/articles/cbrn-ai/${article.filename}`;
  const message = `feat(cbrn-en): ${article.title} [auto]\n\nGenerated by Vercel Cron CBRN Publisher.\nDate: ${article.date}\nSlug: ${article.slug}`;

  const contentBase64 = Buffer.from(article.fullContent, "utf-8").toString("base64");

  const apiUrl = `https://api.github.com/repos/${config.repo}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`;

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `token ${config.token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      "User-Agent": "uamkt-cbrn-publisher",
    },
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch,
      committer: {
        name: "Vercel CBRN Publisher",
        email: "vercel-cron-noreply@uamkt.com",
      },
      author: {
        name: "Vercel CBRN Publisher",
        email: "vercel-cron-noreply@uamkt.com",
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`GitHub API ${response.status}: ${errorBody.slice(0, 500)}`);
  }

  const data = (await response.json()) as {
    content: { html_url: string };
    commit: { sha: string };
  };

  return {
    url: data.content.html_url,
    sha: data.commit.sha,
    path,
  };
}
