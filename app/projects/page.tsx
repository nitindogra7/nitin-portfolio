import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ProjectMediaCard } from "@/components/Cards";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Nitin Dogra",
  description: "Full case studies of Nitin Dogra's deployed projects, including GetMeChai and LogoCraft AI.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="03. Projects"
        title="Deployed systems"
        subtitle="Full case studies for the products I've shipped end to end — architecture decisions, metrics, and what I'd do differently."
      />
      <section className="py-2.5 pb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectMediaCard p={p} i={i} key={p.slug} href={`/projects/${p.slug}`} />
          ))}
        </div>
      </section>
    </>
  );
}
