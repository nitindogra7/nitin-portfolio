import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { pageSocialMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nitin Dogra about full stack developer roles, web application projects, or collaboration.",
  alternates: { canonical: "/contact" },
  ...pageSocialMetadata("Contact Nitin Dogra", "Get in touch about full stack developer roles, projects, and collaboration.", "/contact"),
};

export default function ContactPage() {
  return (
    <>
      <main id="main" className="wrap">
        <ContactSection />
        <ContactForm />
      </main>
      <div className="wrap"><Footer /></div>
    </>
  );
}
