import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Motion";
import { PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} | Nitin Dogra`, description: p.blurb };
}

const pillBtn =
  "inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-[11px] font-semibold transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      <section className="pb-2.5 pt-[118px]">
        <Reveal>
          <Link
            href="/projects"
            className="mb-[18px] inline-flex items-center gap-1.5 font-mono text-[11px] text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70"
          >
            <i className="fa-solid fa-arrow-left text-[10px]" /> All projects
          </Link>
          <p className="mb-2.5 font-mono text-[11px] text-textPrimary dark:text-textPrimary-dark">{project.year}</p>
          <h1 className="mb-2.5 text-[28px] font-bold tracking-tight text-textPrimary dark:text-textPrimary-dark">
            {project.name}
          </h1>
          <p className="mb-4 max-w-[520px] text-[12.5px] leading-[1.7] text-textSecondary dark:text-textSecondary-dark">
            {project.longBlurb}
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`${pillBtn} border-borderc bg-surface text-textPrimary dark:border-borderc-dark dark:bg-surface-dark dark:text-textPrimary-dark hover:border-borderStrong dark:hover:border-borderStrong-dark`}
            >
              <i className="fa-brands fa-github" /> View code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className={`${pillBtn} border-textPrimary bg-textPrimary text-bg dark:border-textPrimary-dark dark:bg-textPrimary-dark dark:text-bg-dark`}
            >
              <i className="fa-solid fa-globe" /> Visit live site
            </a>
          </div>
        </Reveal>
      </section>

      <section className="py-5">
        <Reveal>
          <div className="relative aspect-[16/8.2] overflow-hidden rounded-xl border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark">
            <img src={project.image} alt={project.name} className="block h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-4.5 text-center transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:shadow-[0_14px_28px_rgba(0,0,0,0.2)]"
              >
                <p className="mb-1 text-xl font-bold text-textPrimary dark:text-textPrimary-dark">{m.value}</p>
                <p className="text-[10px] text-textMuted dark:text-textMuted-dark">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <h3 className="mb-3.5 text-sm font-bold text-textPrimary dark:text-textPrimary-dark">Highlights</h3>
          <ul className="flex flex-col gap-2.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="relative pl-4 text-xs leading-[1.7] text-textSecondary dark:text-textSecondary-dark"
              >
                <span className="absolute left-0 text-textPrimary dark:text-textPrimary-dark">—</span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <h3 className="mb-3.5 text-sm font-bold text-textPrimary dark:text-textPrimary-dark">Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-borderc dark:border-borderc-dark bg-surface px-[15px] py-[9px] text-xs font-semibold text-textPrimary dark:bg-surface-dark dark:text-textPrimary-dark"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-10">
        <Reveal>
          <h3 className="mb-3.5 text-sm font-bold text-textPrimary dark:text-textPrimary-dark">Gallery</h3>
          <div className="grid grid-cols-3 gap-2.5">
            {project.gallery.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-[10px] border border-borderc dark:border-borderc-dark">
                <img src={g} alt="" className="block h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
