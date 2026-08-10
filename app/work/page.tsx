import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal, SectionTitle } from "@/components/Motion";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILL_LEVELS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work & Skills | Nitin Dogra",
  description: "Experience, education, certifications, and skill proficiency for Nitin Dogra.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        index="02. Work"
        title="Experience, education & skills"
        subtitle="A closer look at where I've worked, what I studied, and how I'd rate my own proficiency across the stack — updated as things change."
      />

      <section className="relative py-2.5 pb-[26px]">
        <Reveal>
          <SectionTitle index="02a.">Experience</SectionTitle>
        </Reveal>
        <div className="relative pl-[46px]">
          <div className="absolute bottom-0 left-[14px] top-0 w-px bg-borderc dark:bg-borderc-dark" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.4}>
              <div className="relative mb-[26px]">
                <div className="absolute -left-[46px] top-0.5 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark">
                  <i className={`${e.icon} text-[11px] text-textPrimary dark:text-textPrimary-dark`} />
                </div>
                <p className="text-[13px] font-bold text-textPrimary dark:text-textPrimary-dark">{e.name}</p>
                <p className="mb-0.5 text-[11px] text-textSecondary dark:text-textSecondary-dark">{e.role}</p>
                <p className="mb-2.5 font-mono text-[10px] text-textMuted dark:text-textMuted-dark">{e.time}</p>
                <ul className="flex flex-col gap-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="relative pl-3.5 text-[11.5px] leading-[1.6] text-textSecondary dark:text-textSecondary-dark">
                      <span className="absolute left-0 text-textPrimary dark:text-textPrimary-dark">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <SectionTitle index="02b.">Education</SectionTitle>
          <div className="rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-5 transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:shadow-[0_14px_28px_rgba(0,0,0,0.2)]">
            <p className="mb-0.5 text-[13px] font-bold text-textPrimary dark:text-textPrimary-dark">{EDUCATION.school}</p>
            <p className="mb-0.5 text-[11px] text-textSecondary dark:text-textSecondary-dark">{EDUCATION.degree}</p>
            <p className="mb-2.5 font-mono text-[10px] text-textMuted dark:text-textMuted-dark">{EDUCATION.time}</p>
            <p className="text-[11.5px] leading-[1.7] text-textSecondary dark:text-textSecondary-dark">{EDUCATION.details}</p>
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <SectionTitle index="02c.">Certifications</SectionTitle>
        </Reveal>
        <div className="flex flex-col gap-2">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.4}>
              <div className="flex items-center gap-3 rounded-xl border border-borderc dark:border-borderc-dark p-[11px_10px] transition-all duration-[400ms] ease-smooth hover:bg-borderc dark:hover:bg-borderc-dark">
                <i className="fa-solid fa-certificate text-[13px] text-textPrimary dark:text-textPrimary-dark" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-textPrimary dark:text-textPrimary-dark">{c.name}</p>
                  <p className="text-[10.5px] text-textSecondary dark:text-textSecondary-dark">{c.issuer}</p>
                </div>
                <span className="font-mono text-[10px] text-textMuted dark:text-textMuted-dark">{c.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-2.5 pb-10">
        <Reveal>
          <SectionTitle index="02d.">Proficiency</SectionTitle>
        </Reveal>
        <div className="flex flex-col gap-4">
          {SKILL_LEVELS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.3}>
              <div>
                <div className="mb-1.5 flex justify-between">
                  <span className="text-[11.5px] font-semibold text-textPrimary dark:text-textPrimary-dark">{s.name}</span>
                  <span className="font-mono text-[10.5px] text-textMuted dark:text-textMuted-dark">{s.level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark">
                  <div
                    className="h-full rounded-full bg-textPrimary dark:bg-textPrimary-dark"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
