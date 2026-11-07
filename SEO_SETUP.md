# SEO, AEO, GEO & LLM Discovery Architecture

The verified canonical origin is `https://nitindogra.space`. It is configured as default across site metadata, Schema.org entities, and sitemaps.

## Headless AI Discovery Layer (Zero Visual Clutter)

1. `/robots.txt`: Configured via Next.js `src/app/robots.ts` to explicitly allow AI search and index bots (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Claude-SearchBot`, `Google-Extended`, `Applebot-Extended`).
2. `/llms.txt`: Curated markdown summary following the llms.txt standard, linking canonical routes and project repositories.
3. `/llms-full.txt`: Deep context dossier containing full problem/architecture/metrics case studies, services and engagement tiers, technical stack matrix, and buyer FAQs for AI Answer Engines (ChatGPT, Perplexity, Claude, Gemini).
4. `/profile.json`: Machine-readable structured profile for autonomous AI browsing agents.
5. `/sitemap.xml`: Auto-generated for indexable routes (`/`, `/work`, `/experience`, `/contact`) with ISO-8601 `<lastmod>` timestamps and priorities.

## Schema.org Knowledge Graph

- Unified `@graph` in root layout (`src/lib/schema.ts`):
  - `WebSite`: Publisher reference and language tags.
  - `ProfilePage`: Author identity and canonical metadata.
  - `Person`: Identity (`#person`), job title, `knowsAbout`, verified `sameAs` social profiles, educational history.
  - `ProfessionalService`: Business identity (`#business`), `areaServed` (Worldwide, India, US, EU, APAC), and `OfferCatalog` services.
  - `SoftwareSourceCode`: Rich machine nodes for Infraly, GetMeChai, and LogoCraft (abstract, architecture, metrics, repository URLs).
  - `BreadcrumbList`: Injected into `<head>` across subroutes without visible DOM breadcrumbs.

## Micro-Copy & Conversion Attribution

- Bio and project descriptions refined in-place matching exact line length and CSS classes.
- Zero layout shifts (CLS < 0.1), preconnected fonts, and high-signal `aria-label` / `alt` tags.
- Lead attribution utility (`src/lib/attribution.ts`) capturing referrers (`chatgpt.com`, `perplexity.ai`, `claude.ai`, `google.com`) and passing them silently via contact form submissions.
