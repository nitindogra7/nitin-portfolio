import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ActivitySection from "@/components/ActivitySection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: siteUrl ? { canonical: "/" } : undefined,
};

export default function Home() {
  return (
    <>
      <main id="main" className="wrap">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ActivitySection />
        <EducationSection />
        <ContactSection />
      </main>
      <div className="wrap"><Footer /></div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Nitin Dogra | Full Stack Developer",
            url: absoluteUrl("/"),
            mainEntity: {
              "@type": "Person",
              "@id": absoluteUrl("/#person"),
              name: "Nitin Dogra",
              jobTitle: "Full Stack Developer",
              description: "Full stack developer building web applications from interface to database.",
              image: absoluteUrl("/avatar.png"),
              email: "mailto:dogranitin579@gmail.com",
              address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
              sameAs: ["https://github.com/nitindogra7", "https://linkedin.com/in/nitin-dogra-025497255"],
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
