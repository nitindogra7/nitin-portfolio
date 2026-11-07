import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ActivitySection from "@/components/ActivitySection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
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
              description:
                "Delhi-based full stack developer building web applications from interface to database.",
              url: absoluteUrl("/"),
              image: absoluteUrl("/avatar.png"),
              email: "mailto:dogranitin579@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/nitindogra7",
                "https://linkedin.com/in/nitin-dogra-025497255",
                "https://x.com/nitindogra_77",
              ],
              knowsAbout: [
                "Full-stack web development",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
              ],
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
