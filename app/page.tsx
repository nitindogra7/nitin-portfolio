import Hero from "@/components/sections/Hero";
import { About, TechSection, ExperienceSection } from "@/components/sections/AboutTechExperience";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import GuestbookTeaser from "@/components/sections/GuestbookTeaser";
import BlogTeaser from "@/components/sections/BlogTeaser";
import ContactTeaser from "@/components/sections/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechSection />
      <ExperienceSection />
      <ProjectsTeaser />
      <GuestbookTeaser />
      <BlogTeaser />
      <ContactTeaser />
    </>
  );
}
