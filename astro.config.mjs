// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://uamkt.com',
  trailingSlash: 'never',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: false,
    // Phase 1-A 통합 후 약 124초 소요 (Phase 0 ~90s + 재가공 ~30s + WP POST ~3s)
    // Vercel Pro 최대 300초까지 허용 → 안전 마진 2배 확보
    maxDuration: 300,
  }),
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
});
