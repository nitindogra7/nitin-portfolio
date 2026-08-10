import Link from "next/link";
import { Reveal, SectionTitle } from "../Motion";
import { TECH_GROUPS, EXPERIENCE } from "@/lib/data";

const linkUnderline =
  "font-semibold text-textPrimary underline decoration-1 underline-offset-2 transition-opacity duration-300 hover:opacity-70 dark:text-textPrimary-dark";

export function About() {
  return (
    <section className="py-[26px]" id="about">
      <Reveal>
        <SectionTitle>About</SectionTitle>
        <p className="text-xs leading-[1.8] text-textSecondary dark:text-textSecondary-dark">
          I&apos;m Nitin, a software developer who builds scalable things — currently shipping{" "}
          <a href="https://get-me-chai-seven.vercel.app" target="_blank" rel="noreferrer" className={linkUnderline}>
            GetMeChai
          </a>
          , a creator payments platform, and{" "}
          <a href="https://logocraft.nitindogra.space" target="_blank" rel="noreferrer" className={linkUnderline}>
            LogoCraft AI
          </a>
          , an AI-driven logo generator. I work across product direction, interface, frontend, backend, and
          infrastructure. I care more about{" "}
          <span className={linkUnderline}>building useful software that sticks around</span> than chasing quick
          launches. Currently pursuing a B.Tech at Maharishi University of Information Technology.
        </p>
      </Reveal>
    </section>
  );
}

export function TechSection() {
  return (
    <section className="py-[26px]" id="tech">
      <Reveal>
        <SectionTitle index="01.">Core Architecture</SectionTitle>
      </Reveal>
      <div className="flex flex-col gap-5 pb-2">
        {TECH_GROUPS.map((group, gi) => (
          <Reveal key={group.label} delay={gi * 0.4}>
            <div>
              <p className="mb-2.5 text-[10.5px] font-semibold uppercase tracking-wider text-textMuted dark:text-textMuted-dark">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((t: any) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full border border-borderc dark:border-borderc-dark bg-surface px-[15px] py-[9px] text-xs font-semibold text-textPrimary transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:bg-surfaceHover dark:bg-surface-dark dark:text-textPrimary-dark dark:hover:bg-surfaceHover-dark"
                  >
                    {t.badge ? (
                      <span
                        className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] border border-borderc dark:border-borderc-dark bg-surfaceHover text-[9px] font-extrabold dark:bg-surfaceHover-dark"
                        style={{ color: t.color, borderColor: t.color ? t.color + "55" : undefined }}
                      >
                        {t.badge}
                      </span>
                    ) : (
                      <i className={t.icon} style={{ fontSize: 14 }} />
                    )}
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-[26px]" id="work-teaser">
      <Reveal>
        <div className="mb-3.5 flex items-center justify-between">
          <SectionTitle index="02.">Work Experience</SectionTitle>
          <Link href="/work" className="text-[10.5px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70">
            View more <i className="fa-solid fa-arrow-right text-[9px]" />
          </Link>
        </div>
      </Reveal>
      <div className="flex flex-col">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.name} delay={i * 0.5}>
            <div className="flex items-center gap-3 rounded-xl p-[11px_10px] transition-all duration-[400ms] ease-smooth hover:rounded-xl hover:bg-borderc dark:hover:bg-borderc-dark">
              <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark">
                <i className={`${e.icon} text-[11px] text-textPrimary dark:text-textPrimary-dark`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-textPrimary dark:text-textPrimary-dark">{e.name}</p>
                <p className="text-[10.5px] text-textSecondary dark:text-textSecondary-dark">{e.role}</p>
              </div>
              <span className="hidden flex-shrink-0 font-mono text-[10px] text-textMuted dark:text-textMuted-dark sm:inline">
                {e.time}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
