import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { pageSocialMetadata } from "@/lib/site";
import { generateBreadcrumbsJsonLd } from "@/lib/schema";

const title = "Selected Web Projects & SaaS MVPs | Nitin Dogra";
const description =
  "Production web applications and SaaS MVPs built by Nitin Dogra with Next.js, Express, PostgreSQL, Supabase, and TypeScript. Featuring Infraly, GetMeChai, and LogoCraft.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  ...pageSocialMetadata(title, description, "/work"),
};

export default function WorkPage() {
  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ]);

  return (
    <>
      <main id="main" className="wrap">
        <ProjectsSection />
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
