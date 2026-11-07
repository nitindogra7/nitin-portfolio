# SEO deployment setting

The verified canonical origin is `https://nitindogra.space`. It is the default in the site configuration; set `NEXT_PUBLIC_SITE_URL` only when intentionally changing the canonical domain.

The site emits canonical URLs, absolute social preview image URLs, a `ProfilePage`/`Person` JSON-LD block, and a sitemap for the four indexable routes. The `/blog` route is excluded from indexing and the sitemap until it has published articles; `/thank-you` is also excluded because it is a form confirmation page. Production `robots.txt` permits crawling and points to the sitemap. Vercel preview builds receive `noindex` metadata and a robots rule disallowing crawling; on another host, set `NEXT_PUBLIC_DEPLOYMENT_ENV=preview` for preview builds.

`public/llms.txt` provides AI systems with a concise, factual profile, project links, and ways to verify details on the site.

The indexable routes are `/`, `/work`, `/experience`, and `/contact`. No `lastModified` values are emitted because the repository does not provide reliable per-page modification dates. After deployment, verify `https://nitindogra.space/robots.txt` and `https://nitindogra.space/sitemap.xml`, then submit the sitemap in Google Search Console and verify the site there. Search ranking cannot be guaranteed; useful, original content and accurate local details matter more than adding keyword lists or unsupported schema.
