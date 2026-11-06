# SEO deployment setting

Set `NEXT_PUBLIC_SITE_URL` in the production build environment to the verified portfolio origin, including the scheme and no path (for example, `https://your-confirmed-domain`). The production domain is not present in this repository's deployment configuration, so it is intentionally not guessed.

When configured, the site emits canonical URLs, absolute social preview image URLs, a `ProfilePage` JSON-LD block, and a sitemap for the five public routes. Until configured, canonical URLs and origin-dependent metadata are omitted, and the sitemap contains no guessed URLs. Production `robots.txt` permits public pages and includes its sitemap location when available. Vercel preview builds receive `noindex` metadata and a robots rule disallowing crawling; on another host, set `NEXT_PUBLIC_DEPLOYMENT_ENV=preview` for preview builds.

The public routes are `/`, `/work`, `/experience`, `/contact`, and `/blog`. No `lastModified` values are emitted because the repository does not provide reliable per-page modification dates.
