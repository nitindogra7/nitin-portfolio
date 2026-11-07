import { absoluteUrl, siteLastModified } from "./site";

export function generateRootSchemaGraph() {
  const websiteId = absoluteUrl("/#website");
  const personId = absoluteUrl("/#person");
  const businessId = absoluteUrl("/#business");
  const profilePageId = absoluteUrl("/#profilepage");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: "Nitin Dogra | Full Stack Developer",
        description:
          "Portfolio and technical case studies of Nitin Dogra, a Delhi-based Full Stack Developer specializing in Next.js, Node.js, and PostgreSQL.",
        inLanguage: "en-IN",
        publisher: {
          "@id": personId,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: absoluteUrl("/"),
        name: "Nitin Dogra — Full Stack Developer & Next.js Engineer",
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
        jobTitle: "Full Stack Developer",
        description:
          "Delhi-based full stack developer building high-performance web applications with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
        url: absoluteUrl("/"),
        image: absoluteUrl("/avatar.png"),
        email: "mailto:dogranitin579@gmail.com",
        telephone: undefined,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Maharishi University of Information Technology",
        },
        sameAs: [
          "https://github.com/nitindogra7",
          "https://linkedin.com/in/nitin-dogra-025497255",
          "https://x.com/nitindogra_77",
        ],
        knowsAbout: [
          "Full-Stack Web Development",
          "Next.js App Router & Server Components",
          "React 19",
          "TypeScript",
          "Node.js & Express.js",
          "PostgreSQL & Prisma ORM",
          "Supabase",
          "RESTful API Design & Integration",
          "Tailwind CSS",
          "Payment Systems (Razorpay)",
          "Authentication (JWT, Clerk)",
          "Web Performance & Core Web Vitals",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: "Nitin Dogra — Full Stack Web Engineering",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/avatar.png"),
        image: absoluteUrl("/avatar.png"),
        provider: {
          "@id": personId,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        areaServed: [
          "Worldwide",
          "India",
          "United States",
          "United Kingdom",
          "European Union",
          "Asia-Pacific",
        ],
        priceRange: "$$",
        sameAs: [
          "https://github.com/nitindogra7",
          "https://linkedin.com/in/nitin-dogra-025497255",
          "https://x.com/nitindogra_77",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Full Stack Engineering Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Full-Stack Web Application Development",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "Full-Stack Web Application Development",
                  description:
                    "End-to-end web application development from architecture and database modeling to high-performance Next.js frontends and verified cloud deployment.",
                  provider: { "@id": personId },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "API & Backend Systems Architecture",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "API & Backend Systems Architecture",
                  description:
                    "Scalable Node.js and Express RESTful API development, webhook processing pipelines, secure JWT/OAuth authentication, and PostgreSQL/Prisma query optimization.",
                  provider: { "@id": personId },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Next.js Frontend Architecture & Performance Tuning",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "Next.js Frontend Architecture & Performance Tuning",
                  description:
                    "Core Web Vitals remediation, server-side caching, bundle reduction, and responsive modern UI implementations using Tailwind CSS.",
                  provider: { "@id": personId },
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
        ],
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
        ],
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
        ],
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
