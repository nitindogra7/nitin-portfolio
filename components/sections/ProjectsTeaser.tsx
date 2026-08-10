import Link from "next/link";
import { Reveal, SectionTitle } from "../Motion";
import { ProjectMediaCard } from "../Cards";
import { PROJECTS } from "@/lib/data";

export default function ProjectsTeaser() {
  return (
    <section className="py-[26px]" id="projects">
      <Reveal>
        <div className="mb-3.5 flex items-center justify-between">
          <SectionTitle index="03.">Deployed Systems</SectionTitle>
          <Link href="/projects" className="text-[10.5px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70">
            View more <i className="fa-solid fa-arrow-right text-[9px]" />
          </Link>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectMediaCard p={p} i={i} key={p.slug} href={`/projects/${p.slug}`} />
        ))}
      </div>
    </section>
  );
}
