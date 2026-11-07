import { absoluteUrl, siteLastModified } from "./site";

export function generateRootSchemaGraph() {
  const websiteId = absoluteUrl("/#website");
  const personId = absoluteUrl("/#nitin-dogra");
  const businessId = absoluteUrl("/#business");
  const profilePageId = absoluteUrl("/#profilepage");

  const verifiedSameAs = [
    "https://contra.com/nitin_dogra_pxqoz8k2",
    "https://contra.com/nitin_dogra_pxqoz8k2/about",
    "https://github.com/nitindogra7",
    "https://linkedin.com/in/nitin-dogra-025497255",
    "https://x.com/nitindogra_77",
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: "Nitin Dogra Portfolio",
        alternateName: "Nitin — Full Stack Developer Delhi",
        description:
          "Official portfolio of Nitin Dogra (Nitin), Full-Stack Developer and SaaS MVP Engineer in New Delhi, India building fast web applications with Next.js, React, Node.js, and Supabase.",
        inLanguage: "en-IN",
        publisher: {
          "@id": personId,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: absoluteUrl("/"),
        name: "Nitin Dogra — Full-Stack Developer & SaaS MVP Engineer",
        isPartOf: {
          "@id": websiteId,
        },
        mainEntity: {
          "@id": personId,
        },
        dateCreated: "2024-01-15T00:00:00+05:30",
        dateModified: siteLastModified,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Nitin Dogra",
        givenName: "Nitin",
        familyName: "Dogra",
        alternateName: [
          "Nitin",
          "Nitin Dogra Full Stack Developer",
          "Nitin Developer Delhi",
          "nitin_dogra",
          "Nitin Dogra Developer",
          "Nitin Web Developer",
          "Nitin Software Engineer India",
        ],
        jobTitle: "Full-Stack Developer & SaaS MVP Engineer",
        description:
          "Independent Full-Stack Developer based in New Delhi, Delhi NCR, India, building high-converting websites, SaaS MVPs, Micro-SaaS products, web automation, and scalable full-stack web applications using Next.js, React, Node.js, TypeScript, Tailwind CSS, and Supabase for startups and businesses worldwide.",
        url: absoluteUrl("/"),
        image: absoluteUrl("/avatar.png"),
        email: "mailto:dogranitin579@gmail.com",
        homeLocation: {
          "@type": "Place",
          name: "New Delhi, Delhi NCR, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New Delhi",
            addressRegion: "Delhi",
            addressCountry: "IN",
          },
        },
        workLocation: {
          "@type": "Place",
          name: "New Delhi, Delhi NCR, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New Delhi",
            addressRegion: "Delhi",
            addressCountry: "IN",
          },
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Maharishi University of Information Technology",
        },
        sameAs: verifiedSameAs,
        knowsAbout: [
          "Next.js",
          "Next.js App Router",
          "React.js",
          "TypeScript",
          "Node.js",
          "Supabase",
          "Tailwind CSS",
          "PostgreSQL",
          "Prisma ORM",
          "SaaS MVP Development",
          "Micro-SaaS Development",
          "Full-Stack Web Applications",
          "Web Automation",
          "Figma to Next.js",
          "Figma to React",
          "Serverless Web App Development",
          "Vercel Deployment & Performance Optimization",
          "REST & GraphQL API Development",
          "NextAuth / Auth.js Integration",
          "Stripe & Razorpay Payment Integration",
          "Real-time Web Applications",
          "Modern JavaScript ES6+",
          "Shadcn UI & Radix UI",
          "Framer Motion",
          "Core Web Vitals & Technical SEO",
          "AI API Integration (OpenAI, Claude, LLM apps)",
          "Web Automation & Workflow Engineering",
          "Headless CMS (Sanity, Strapi)",
          "Progressive Web Apps (PWA)",
          "B2B SaaS Dashboard Development",
          "Clean UI and Design Systems",
          "High-Converting Landing Pages",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: "Nitin Dogra — Full-Stack Developer & SaaS MVP Engineering",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/avatar.png"),
        image: absoluteUrl("/avatar.png"),
        provider: {
          "@id": personId,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        areaServed: [
          "New Delhi",
          "Delhi NCR",
          "Gurgaon",
          "Noida",
          "India",
          "United States",
          "United Kingdom",
          "Worldwide",
        ],
        priceRange: "$$",
        sameAs: verifiedSameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Full Stack & SaaS MVP Engineering Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Full-Stack Web App Development",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "Full-Stack Web App Development",
                  description:
                    "End-to-end web applications with Next.js App Router, TypeScript, Node.js, and PostgreSQL/Supabase. High performance, sub-second loads, resilient database schemas, and cloud deployment.",
                  provider: { "@id": personId },
                  areaServed: "Worldwide",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: absoluteUrl("/contact"),
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "SaaS MVP & Micro-SaaS Development",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "SaaS MVP & Micro-SaaS Development",
                  description:
                    "Turn ideas into revenue-generating SaaS MVPs in 2-4 weeks. Complete with user authentication (Clerk/Auth.js), payment integration (Stripe/Razorpay), database modeling, and billing dashboards.",
                  provider: { "@id": personId },
                  areaServed: "Worldwide",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: absoluteUrl("/contact"),
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Landing Page Design & Development (Figma to Next.js)",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "Landing Page Design & Development (Figma to Next.js)",
                  description:
                    "High-converting marketing landing pages converted pixel-perfectly from Figma designs into fast Next.js & Tailwind CSS code with top Core Web Vitals and SEO performance.",
                  provider: { "@id": personId },
                  areaServed: "Worldwide",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: absoluteUrl("/contact"),
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Web Automation & AI Integration",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "Web Automation & AI Integration",
                  description:
                    "Custom backend automation workflows, webhook processing pipelines, web scraping solutions, and LLM/AI integrations (OpenAI, Claude, Hugging Face) for modern web applications.",
                  provider: { "@id": personId },
                  areaServed: "Worldwide",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: absoluteUrl("/contact"),
                  },
                },
              ],
            },
          ],
        },
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": absoluteUrl("/work#infraly"),
        name: "Infraly",
        headline: "Developer Form Backend & Lightweight Lead CRM",
        description:
          "A developer-first form backend and lightweight CRM that turns website enquiries into an organized lead inbox with instant notification pipelines.",
        abstract:
          "Problem: Jamstack and portfolio sites lose leads when mailto links fail or heavy CRMs add friction. Architecture: Next.js 16, Express 5, TypeScript, PostgreSQL, Prisma, Clerk. Result: Sub-100ms API ingestion pipeline and zero dropped leads.",
        codeRepository: "https://github.com/nitindogra7/crm",
        url: "https://infraly.online",
        programmingLanguage: ["TypeScript", "JavaScript", "SQL"],
        keywords: [
          "Next.js 16",
          "Express 5",
          "PostgreSQL",
          "Prisma",
          "Form Backend",
          "CRM",
          "Clerk Auth",
          "SaaS MVP",
          "Developer Tooling",
        ],
        author: {
          "@id": personId,
        },
        creator: {
          "@id": personId,
        },
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": absoluteUrl("/work#getmechai"),
        name: "GetMeChai",
        headline: "Creator Patronage & Community Platform",
        description:
          "A home for creators and their community enabling direct reader support, live updates, and frictionless Razorpay payments.",
        abstract:
          "Problem: Independent creators require low-fee, local payment options to receive direct support. Architecture: Next.js App Router, React 19, PostgreSQL, Razorpay checkout with webhook reconciliation. Result: 1-click payment settlement and responsive supporter feeds.",
        codeRepository: "https://github.com/nitindogra7/getMeChai",
        url: "https://get-me-chai-seven.vercel.app",
        programmingLanguage: ["TypeScript", "JavaScript", "SQL"],
        keywords: [
          "Next.js",
          "React 19",
          "PostgreSQL",
          "Razorpay",
          "Creator Economy",
          "Payments",
          "Micro-SaaS",
        ],
        author: {
          "@id": personId,
        },
        creator: {
          "@id": personId,
        },
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": absoluteUrl("/work#logocraft"),
        name: "LogoCraft",
        headline: "AI-Driven Vector Identity Generator",
        description:
          "Turn an idea into a visual identity. AI-powered logo generation with secure accounts and credit-based token billing.",
        abstract:
          "Problem: Early startups need quick visual branding marks without agency delays. Architecture: React, Express, Hugging Face AI diffusion inference, and token billing ledger. Result: Under 8 seconds per vector brand mark and instant asset downloads.",
        codeRepository: "https://github.com/nitindogra7/logoCraft",
        url: "https://logocraft.nitindogra.space/",
        programmingLanguage: ["JavaScript", "React", "Node.js"],
        keywords: [
          "React",
          "Express",
          "Hugging Face",
          "AI Logo Generator",
          "Vector Branding",
          "AI API Integration",
        ],
        author: {
          "@id": personId,
        },
        creator: {
          "@id": personId,
        },
      },
    ],
  };
}

export function generateBreadcrumbsJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
