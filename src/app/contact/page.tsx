import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { internationalAlternates, pageSocialMetadata } from "@/lib/site";
import { generateBreadcrumbsJsonLd } from "@/lib/schema";

const title = "Hire Nitin Dogra | Full-Stack Developer & SaaS MVP Engineer";
const description =
  "Hire Nitin Dogra for full-stack web applications, SaaS MVP builds, and Next.js engineering. Based in New Delhi, Delhi NCR, India, working with clients worldwide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: internationalAlternates("/contact"),
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
