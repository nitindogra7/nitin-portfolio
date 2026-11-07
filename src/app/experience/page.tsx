import type { Metadata } from "next";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import { pageSocialMetadata } from "@/lib/site";
import { generateBreadcrumbsJsonLd } from "@/lib/schema";

const title = "Full Stack Development Experience | Nitin Dogra";
const description =
  "Review Nitin Dogra’s engineering internships across Next.js, Express, Supabase, and REST APIs. Production feature delivery, JWT auth, and frontend performance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  ...pageSocialMetadata(title, description, "/experience"),
};

export default function ExperiencePage() {
  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
  ]);

  return (
    <>
      <main id="main" className="wrap">
        <ExperienceSection />
      </main>
      <div className="wrap">
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
