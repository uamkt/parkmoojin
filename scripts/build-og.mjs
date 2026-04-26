/**
 * scripts/build-og.mjs
 * Day 4 deliverable — pre-build OG image generator
 *
 * 입력: src/content/articles/**\/*.md (frontmatter title/description/category/ogImage)
 * 출력: public/og-images/<derived from frontmatter ogImage>.png
 *       public/og-default.png  (홈/about/articles index 기본)
 *
 * 1200x630 표준 OG 사이즈, 한국어 글리프 = Apple SD Gothic Neo (TTC) 사용 불가 →
 *   AppleGothic.ttf (단일 TTF) 사용. 빌드 환경에 macOS 시스템 폰트가 없으면 ENV
 *   `OG_FONT_PATH` 로 다른 TTF 경로 지정.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const ARTICLES_DIR = join(ROOT, "src/content/articles");
const OUTPUT_DIR = join(ROOT, "public/og-images");
const DEFAULT_OUTPUT = join(ROOT, "public/og-default.png");

const FONT_PATH =
  process.env.OG_FONT_PATH || "/System/Library/Fonts/Supplemental/AppleGothic.ttf";

if (!existsSync(FONT_PATH)) {
  console.error(`[build-og] Font not found: ${FONT_PATH}`);
  console.error("[build-og] Set OG_FONT_PATH=/path/to/font.ttf and re-run.");
  process.exit(1);
}
const FONT = readFileSync(FONT_PATH);

mkdirSync(OUTPUT_DIR, { recursive: true });

/** Walk directory recursively, return absolute paths of *.md files. */
function walkMd(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walkMd(p));
    else if (entry.endsWith(".md")) out.push(p);
  }
  return out;
}

/** Tiny frontmatter parser — only needs title/description/category/ogImage. */
function parseFrontmatter(text) {
  if (!text.startsWith("---")) return {};
  const end = text.indexOf("\n---", 3);
  if (end < 0) return {};
  const fm = text.slice(3, end);
  const out = {};
  for (const raw of fm.split("\n")) {
    const m = raw.match(/^(\w+):\s*(.+)$/);
    if (!m) continue;
    let [, key, val] = m;
    val = val.trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const CATEGORY_LABELS = {
  "market-trends": "시장 동향 리포트",
  papers: "미니 논문",
  "business-models": "사업 모델 분석",
  "cbrn-ai": "CBRN AI 전술 분석",
  policy: "정책 분석",
  "case-studies": "케이스 스터디",
};

/** Build a JSX-tree-as-plain-object that Satori accepts. */
function ogTree({ title, category, organizationName }) {
  const categoryLabel = CATEGORY_LABELS[category] ?? "Article";
  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "linear-gradient(135deg, #0a1628 0%, #142a4c 100%)",
        color: "#ffffff",
        fontFamily: "Korean",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              fontSize: "32px",
              color: "#c9a449",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            },
            children: categoryLabel,
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.25,
              maxWidth: "1040px",
            },
            children: title,
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "28px",
              color: "#c9d4e8",
            },
            children: [
              { type: "div", props: { children: organizationName } },
              { type: "div", props: { style: { color: "#c9a449" }, children: "uamkt.com" } },
            ],
          },
        },
      ],
    },
  };
}

async function renderPng(tree, outPath) {
  const svg = await satori(tree, {
    width: 1200,
    height: 630,
    fonts: [{ name: "Korean", data: FONT, weight: 400, style: "normal" }],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  writeFileSync(outPath, png);
}

const ORG_NAME = "UAM KoreaTech";

let count = 0;
for (const path of walkMd(ARTICLES_DIR)) {
  const fm = parseFrontmatter(readFileSync(path, "utf8"));
  if (!fm.ogImage || !fm.title) continue;
  const filename = basename(fm.ogImage);
  const out = join(OUTPUT_DIR, filename);
  await renderPng(
    ogTree({ title: fm.title, category: fm.category, organizationName: ORG_NAME }),
    out
  );
  console.log(`[build-og] ✓ ${filename}`);
  count += 1;
}

await renderPng(
  ogTree({
    title: "K-방산 CBRN AI 의사결정 지원의 한국 등가물",
    category: "default",
    organizationName: ORG_NAME,
  }),
  DEFAULT_OUTPUT
);
console.log(`[build-og] ✓ og-default.png`);
console.log(`[build-og] generated ${count + 1} OG images.`);
