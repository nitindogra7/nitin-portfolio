import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { pageSocialMetadata } from "@/lib/site";
import { generateBreadcrumbsJsonLd } from "@/lib/schema";

const title = "Contact Nitin Dogra | Full Stack Developer Roles & Projects";
const description =
  "Get in touch with Nitin Dogra for full stack developer roles, web application contracts, and engineering collaboration. Based in Delhi, working remotely worldwide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  ...pageSocialMetadata(title, description, "/contact"),
};

export default function ContactPage() {
  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <main id="main" className="wrap">
        <ContactSection />
        <ContactForm />
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
