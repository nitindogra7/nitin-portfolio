export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Logs", href: "/logs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const TECH_GROUPS = [
  {
    label: "Languages & Frameworks",
    items: [
      { name: "TypeScript", badge: "TS", color: "#3178c6" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      { name: "Vercel", icon: "devicon-vercel-original colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Stripe", icon: "devicon-stripe-original colored" },
    ],
  },
];

export const EXPERIENCE = [
  {
    name: "Sponzo Pvt Ltd",
    role: "Software Engineer Intern",
    time: "June 2026 – Present",
    icon: "fa-solid fa-briefcase",
    points: [
      "Built and maintained internal tooling used across product and growth teams.",
      "Shipped customer-facing features end to end, from schema design to deployed UI.",
      "Worked closely with design to translate Figma files into production React components.",
    ],
  },
  {
    name: "Freelance",
    role: "Software Engineer",
    time: "2025 – Present",
    icon: "fa-solid fa-code",
    points: [
      "Delivered full-stack products for independent clients, including LogoCraft AI and GetMeChai.",
      "Owned architecture decisions across frontend, backend, and infrastructure.",
      "Managed deployments, monitoring, and iteration cycles directly with clients.",
    ],
  },
];

export const EDUCATION = {
  school: "Maharishi University of Information Technology",
  degree: "B.Tech, Computer Science & Engineering",
  time: "2023 – 2027",
  details: "Coursework spanning data structures, distributed systems, databases, and applied machine learning.",
};

export const CERTIFICATIONS = [
  { name: "Full-Stack Web Development", issuer: "Self-directed / Project-based", year: "2025" },
  { name: "Modern React & Next.js Patterns", issuer: "Self-directed / Project-based", year: "2025" },
  { name: "Cloud Fundamentals", issuer: "Self-directed / Project-based", year: "2026" },
];

export const SKILL_LEVELS = [
  { name: "TypeScript / JavaScript", level: 92 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB / PostgreSQL", level: 80 },
  { name: "System Design", level: 72 },
  { name: "DevOps / Docker", level: 68 },
];

export const PROJECTS = [
  {
    slug: "getmechai",
    name: "GetMeChai Platform",
    blurb:
      "A full-stack social platform on Next.js 15 letting creators build a following and receive direct fan payments via Razorpay.",
    longBlurb:
      "GetMeChai is a creator-economy platform inspired by 'buy me a coffee' style tools, rebuilt for the Indian market with native Razorpay payments. Creators get a public profile page, supporter wall, and a dashboard to track earnings in real time.",
    tags: ["Next.js", "MongoDB", "Razorpay", "Tailwind", "Framer Motion"],
    year: "2026",
    icon: "fa-solid fa-diagram-project",
    github: "https://github.com/nitindogra7",
    live: "https://get-me-chai-seven.vercel.app",
    image:
      "/assets/test1.png",
    gallery: [
      "/assets/test1.png",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&auto=format&fit=crop",
    ],
    highlights: [
      "Real-time payment webhooks reconciled against a MongoDB ledger for accurate creator balances.",
      "Public creator pages generated dynamically with ISR for fast loads and fresh content.",
      "Supporter wall with optimistic UI updates for instant feedback after a payment.",
      "Role-based dashboard separating creator analytics from public-facing profile data.",
    ],
    metrics: [
      { label: "Avg. page load", value: "1.2s" },
      { label: "Payment success rate", value: "98.7%" },
      { label: "Creators onboarded", value: "40+" },
    ],
    stack: ["Next.js 15", "MongoDB", "Razorpay API", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    slug: "logocraft-ai",
    name: "LogoCraft AI SaaS",
    blurb: "An AI-powered SaaS generating custom logos on demand, built on a Hugging Face image model.",
    longBlurb:
      "LogoCraft AI turns a short brand description into a set of logo concepts in seconds, using a fine-tuned diffusion model served through a Hugging Face inference endpoint. Includes credits, export formats, and a brand-kit generator.",
    tags: ["React", "Node.js", "Hugging Face", "Stripe", "PostgreSQL"],
    year: "2026",
    icon: "fa-solid fa-microchip",
    github: "https://github.com/nitindogra7",
    live: "https://logocraft.nitindogra.space",
    image:
      "/assets/test2.png",
    gallery: [
      "/assets/test2.png",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1200&q=80&auto=format&fit=crop",
    ],
    highlights: [
      "Queued generation jobs with progress polling so users never hit a blocked UI.",
      "Stripe-metered credits system supporting one-off packs and monthly subscriptions.",
      "Automatic export to SVG, PNG, and a packaged brand-kit ZIP.",
      "Prompt-engineering layer that maps brand adjectives to model-friendly style tokens.",
    ],
    metrics: [
      { label: "Avg. generation time", value: "8.4s" },
      { label: "Logos generated", value: "3,200+" },
      { label: "Paying customers", value: "120+" },
    ],
    stack: ["React", "Node.js / Express", "Hugging Face Inference API", "PostgreSQL", "Stripe", "Docker"],
  },
];

export const BLOG = [
  {
    slug: "optimizing-mongodb-aggregations",
    date: "Oct 12, 2026",
    title: "Optimizing MongoDB Aggregations",
    blurb: "Writing efficient aggregation pipelines for scale and speed in NoSQL.",
    tag: "Engineering",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    content: [
      "Aggregation pipelines are where most MongoDB performance problems either get solved or get born. The order of stages, the shape of your indexes, and how early you can discard documents all compound quickly at scale.",
      "The single highest-leverage habit is pushing $match stages as early as possible, ideally as the very first stage, so the query planner can use an index before any documents are transformed. Every stage after a $project that reshapes fields loses the ability to use indexes on those fields for the rest of the pipeline.",
      "For GetMeChai's creator dashboard, moving a $match ahead of a $lookup cut aggregate response times from around 900ms to under 150ms on the payments collection, because the lookup no longer had to join against the full unfiltered set.",
      "$facet is powerful for building dashboards that need multiple shapes of the same underlying data (totals, breakdowns, and a paginated list) in a single round trip, but it runs each sub-pipeline independently, so it is not a shortcut around indexing each branch correctly.",
      "Finally, explain plans are non-negotiable. Running .explain('executionStats') on any pipeline touching more than a few thousand documents should be part of the review checklist before it ships.",
    ],
  },
  {
    slug: "nextjs-15-server-components",
    date: "Sep 05, 2026",
    title: "Next.js 15 Server Components",
    blurb: "Moving GetMeChai to fully use React Server Components for performance.",
    tag: "Notes",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80&auto=format&fit=crop",
    content: [
      "Migrating GetMeChai's creator profile pages to Server Components removed almost all client-side JavaScript from the initial render, which mattered a lot given how many profiles are viewed once by a supporter who never returns.",
      "The mental model that helped most: default to a server component, and only reach for 'use client' when a piece of UI genuinely needs interactivity, state, or a browser API. Everything else, especially data fetching and formatting, belongs on the server.",
      "Streaming with Suspense boundaries let the shell of a profile page (avatar, name, bio) paint instantly while the supporter wall and recent activity stream in slightly behind it.",
      "The biggest gotcha was prop serialization: passing functions or class instances from server to client components fails silently in some setups and loudly in others, so keeping the boundary data-only avoided a lot of debugging.",
    ],
  },
  {
    slug: "deploying-ai-models-in-node",
    date: "Aug 22, 2026",
    title: "Deploying AI Models in Node",
    blurb: "Wiring Hugging Face endpoints into an Express backend cleanly.",
    tag: "Engineering",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop",
    content: [
      "LogoCraft AI's generation pipeline calls a hosted Hugging Face inference endpoint from an Express backend, and the reliability of that integration mattered more than raw model quality once real users showed up.",
      "Queueing was the first fix: instead of holding an HTTP request open while a model generates, requests get queued as jobs with a status the client polls, so slow generations never trip a gateway timeout.",
      "Retrying with backoff on 5xx responses from the inference endpoint, combined with a dead-letter queue for jobs that fail repeatedly, turned an unreliable third-party dependency into a system with a predictable failure mode.",
      "On the cost side, batching same-size requests where the model allowed it, and caching identical prompts for a short window, reduced inference spend meaningfully without changing output quality.",
    ],
  },
  {
    slug: "designing-for-dark-mode-first",
    date: "Jul 30, 2026",
    title: "Designing for Dark Mode First",
    blurb: "Why building the dark theme first made the light theme easier, not harder.",
    tag: "Design",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=80&auto=format&fit=crop",
    content: [
      "This portfolio, like both LogoCraft AI and GetMeChai, was designed dark-first. Starting there forces every color decision to be relative rather than absolute, which pays off the moment a light theme gets added.",
      "Instead of hardcoding hex values, every surface, border, and text color routes through CSS custom properties. Flipping a single data-theme attribute on the root element swaps the entire palette without touching a single component.",
      "The hardest part isn't the backgrounds, it's border and shadow intensity: a border that reads as a subtle 8% white line on a near-black background needs a completely different opacity on a near-white one to feel equivalent.",
    ],
  },
  {
    slug: "razorpay-webhooks-that-dont-lie",
    date: "Jul 08, 2026",
    title: "Razorpay Webhooks That Don't Lie",
    blurb: "Building an idempotent payment ledger for GetMeChai.",
    tag: "Engineering",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format&fit=crop",
    content: [
      "Payment webhooks arrive out of order, sometimes twice, and occasionally not at all. GetMeChai's ledger had to be idempotent from day one, or creator balances would eventually drift from reality.",
      "Every incoming webhook is written to an events table keyed by Razorpay's event id before any balance mutation happens. If the same event id arrives twice, the second write is a no-op, which makes replays and retries safe by construction.",
      "Balances themselves are never mutated directly. They're derived by summing the events table, so a bug in the derivation logic can be fixed and replayed against history instead of leaving corrupted state behind.",
    ],
  },
  {
    slug: "typewriter-effects-without-jank",
    date: "Jun 14, 2026",
    title: "Typewriter Effects Without Jank",
    blurb: "The small details that make a hero-section typewriter feel intentional.",
    tag: "Notes",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80&auto=format&fit=crop",
    content: [
      "A typewriter effect looks trivial until it has to loop through several phrases, delete cleanly, and respect prefers-reduced-motion without a layout shift on every keystroke.",
      "Reserving a fixed min-height for the typing line prevents the rest of the hero from jumping vertically as words of different lengths type in and out.",
      "Slightly randomizing type speed per character, rather than using a perfectly even interval, is a small touch that reads as noticeably more natural.",
    ],
  },
];

export const LOGS = [
  { name: "Alex Chen", initial: "A", color: "#3b82f6", time: "2 hours ago", msg: "Awesome portfolio design. Loving the terminal vibes!" },
  { name: "Sarah Dev", initial: "S", color: "#a855f7", time: "Yesterday", msg: "Great projects. Did you use Next.js for all of these?" },
  { name: "Priya Sharma", initial: "P", color: "#22c55e", time: "2 days ago", msg: "GetMeChai is such a clever idea for Indian creators. Well executed." },
  { name: "Marcus Webb", initial: "M", color: "#f97316", time: "3 days ago", msg: "The Razorpay webhook post saved me hours of debugging, thank you." },
  { name: "Riya Kapoor", initial: "R", color: "#ec4899", time: "5 days ago", msg: "LogoCraft AI is genuinely useful, generated a full brand kit in a minute." },
  { name: "Devon Park", initial: "D", color: "#06b6d4", time: "1 week ago", msg: "Clean codebase and clean design to match. Inspiring stuff." },
];

export const WORDS = ["Building the Web.", "Optimizing Backends.", "Architecting Systems.", "Writing Clean Code."];

export const CONTACT_FAQS = [
  {
    q: "What kind of work are you looking for?",
    a: "Full-stack roles or freelance projects involving React/Next.js on the frontend and Node.js or similar on the backend. Open to both product companies and focused contract work.",
  },
  {
    q: "What's your typical response time?",
    a: "Usually within 24 to 48 hours. For anything urgent, booking a call directly via Calendly is the fastest path.",
  },
  {
    q: "Do you take on freelance projects?",
    a: "Yes. Most freelance work is scoped as fixed projects with clear milestones, similar to how GetMeChai and LogoCraft AI were built.",
  },
  {
    q: "Where are you based?",
    a: "Based in India, working comfortably across time zones for remote-first teams.",
  },
];

export const CONTACT_FACTS = [
  { icon: "fa-solid fa-location-dot", label: "Location", value: "India (Remote-friendly)" },
  { icon: "fa-solid fa-graduation-cap", label: "Currently", value: "B.Tech @ MUIT" },
  { icon: "fa-solid fa-briefcase", label: "Available for", value: "Full-time & Freelance" },
  { icon: "fa-solid fa-clock", label: "Response time", value: "Within 24–48 hrs" },
];
