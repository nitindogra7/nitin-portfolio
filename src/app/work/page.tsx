import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { pageSocialMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Selected Web Projects",
  description:
    "Explore web applications built by Nitin Dogra, including a creator support platform and an AI powered logo generation product.",
  alternates: { canonical: "/work" },
  ...pageSocialMetadata("Selected Web Projects", "Web applications built by Nitin Dogra, with project details, technologies, live demos, and source code.", "/work"),
};

export default function WorkPage() {
  return (
    <>
      <main id="main" className="wrap"><ProjectsSection /></main>
      <div className="wrap"><Footer /></div>
    </>
  );
}
