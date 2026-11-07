import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ActivitySection from "@/components/ActivitySection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { internationalAlternates } from "@/lib/site";

export const metadata: Metadata = {
  alternates: internationalAlternates("/"),
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
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
