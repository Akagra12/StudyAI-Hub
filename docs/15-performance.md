# 15 - Performance Optimization & Core Web Vitals Engineering

## Core Web Vitals Standards
Google's Core Web Vitals evaluate real-world user experience across three key metrics:
1. **Largest Contentful Paint (LCP):** Measures perceived load speed (Target: $\le$ 2.5s).
2. **Interaction to Next Paint (INP):** Measures page responsiveness and interactivity (Target: $\le$ 200ms).
3. **Cumulative Layout Shift (CLS):** Measures visual layout stability (Target: $\le$ 0.1).

## Implementation Strategies on StudyAI Hub

### 1. Zero Bloat Architecture
- No heavy JavaScript frameworks (React runtime, Angular) on static pages.
- Pure Vanilla CSS design system (<15KB), avoiding massive utility frameworks like full Tailwind or Bootstrap bundles.
- Result: Instant document parsing and 0ms main-thread render blocking.

### 2. Elimination of Layout Shifts (CLS = 0.00)
- All structural cards and tables use strict CSS Grid and Flexbox with defined minimum heights.
- SVGs and icons include explicit width/height attributes in CSS.
- Web fonts utilize `font-display: swap` with system fallback stacks (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto`).

### 3. Caching & Compression
- Nginx Gzip level 6 compression enabled for HTML, CSS, JS, and JSON.
- Cloudflare edge caching for static assets with 1-year cache headers (`Cache-Control: public, max-age=31536000`).
- HTTP/2 multiplexing allows simultaneous asset streaming across a single TCP handshake.
