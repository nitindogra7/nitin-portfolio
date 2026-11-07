import type { Metadata } from "next";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import { pageSocialMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Full Stack Development Experience",
  description:
    "Review Nitin Dogra’s full stack development internships, including work with Next.js, Express, Supabase, REST APIs, and frontend delivery.",
  alternates: { canonical: "/experience" },
  ...pageSocialMetadata("Full Stack Development Experience", "Internship experience in full stack engineering, APIs, and frontend development.", "/experience"),
};

export default function ExperiencePage() {
  return (
    <>
      <main id="main" className="wrap"><ExperienceSection /></main>
      <div className="wrap"><Footer /></div>
    </>
  );
}
