"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blurUp } from "./Motion";

const cardBase =
  "group relative isolate flex flex-col h-full overflow-hidden rounded-[10px] border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark transition-all duration-[450ms] ease-smooth hover:-translate-y-1.5 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)]";

const thumbBase =
  "relative w-full aspect-[16/8.2] overflow-hidden bg-surfaceHover dark:bg-surfaceHover-dark border-b border-borderc dark:border-borderc-dark";

export function MediaCard({
  image,
  title,
  date,
  blurb,
  tag,
  href,
  i,
  linkTitle,
  internal,
}: {
  image: string;
  title: string;
  date: string;
  blurb: string;
  tag: string;
  href: string;
  i: number;
  linkTitle?: string;
  internal?: boolean;
}) {
  const Comp: any = internal ? motion.create(Link) : motion.a;
  const extra = internal ? {} : { target: "_blank", rel: "noreferrer" };
  return (
    <Comp
      href={href}
      {...extra}
      className={cardBase}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={blurUp}
      custom={i * 0.5}
    >
      <div className={thumbBase}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="block h-full w-full scale-100 object-cover grayscale-[45%] contrast-[1.02] transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform [backface-visibility:hidden] group-hover:scale-[1.035] group-hover:grayscale-0"
        />
      </div>
      <div className="flex flex-1 flex-col p-[18px_18px_20px]">
        <div className="mb-1 flex items-start justify-between gap-2.5">
          <h4 className="text-[15px] font-bold leading-tight tracking-tight text-textPrimary dark:text-textPrimary-dark">{title}</h4>
          <span
            title={linkTitle || "Open"}
            className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border border-borderc dark:border-borderc-dark text-textSecondary dark:text-textSecondary-dark transition-all duration-[400ms] ease-smooth group-hover:rotate-45 group-hover:border-borderStrong dark:group-hover:border-borderStrong-dark group-hover:bg-surfaceHover dark:group-hover:bg-surfaceHover-dark group-hover:text-textPrimary dark:group-hover:text-textPrimary-dark"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
          </span>
        </div>
        <p className="mb-2.5 font-mono text-[10.5px] text-textMuted dark:text-textMuted-dark">{date}</p>
        <p className="mb-3.5 flex-1 line-clamp-3 min-h-[58px] text-[11.5px] leading-relaxed text-textSecondary dark:text-textSecondary-dark">{blurb}</p>
        <span className="self-start rounded-full border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark px-[11px] py-[5px] text-[10px] font-bold text-textPrimary dark:text-textPrimary-dark transition-all duration-[350ms] ease-smooth group-hover:border-borderStrong dark:group-hover:border-borderStrong-dark group-hover:-translate-y-px">
          {tag}
        </span>
      </div>
    </Comp>
  );
}

export function ProjectMediaCard({ p, i, href }: { p: any; i: number; href?: string }) {
  return (
    <motion.div
      className={cardBase}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={blurUp}
      custom={i * 0.5}
    >
      {href && (
        <Link href={href} className="absolute inset-0 z-0" aria-label={`View ${p.name}`} />
      )}
      <div className={thumbBase}>
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="block h-full w-full scale-100 object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform [backface-visibility:hidden] group-hover:scale-[1.035]"
        />
        <div className="absolute right-2.5 top-2.5 z-20 flex gap-1.5 pointer-events-auto">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/85 px-3 py-1.5 text-[10.5px] font-bold text-white backdrop-blur-md transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5 hover:bg-black active:scale-95"
            >
              <i className="fa-brands fa-github" /> Code
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/85 px-3 py-1.5 text-[10.5px] font-bold text-white backdrop-blur-md transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5 hover:bg-black active:scale-95"
            >
              <i className="fa-solid fa-globe" /> Live
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-[18px_18px_20px] pointer-events-none">
        <div className="mb-1 flex items-start justify-between gap-2.5">
          <h4 className="text-[16px] font-bold leading-tight tracking-tight text-textPrimary dark:text-textPrimary-dark">{p.name}</h4>
          <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border border-borderc dark:border-borderc-dark text-textSecondary dark:text-textSecondary-dark transition-all duration-[400ms] ease-smooth group-hover:rotate-45 group-hover:border-borderStrong dark:group-hover:border-borderStrong-dark group-hover:text-textPrimary dark:group-hover:text-textPrimary-dark">
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
          </span>
        </div>
        <p className="mb-3 font-mono text-[10.5px] text-textMuted dark:text-textMuted-dark">{p.year}</p>
        <p className="mb-4 line-clamp-3 min-h-[58px] text-[11.5px] leading-[1.7] text-textSecondary dark:text-textSecondary-dark">{p.blurb}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {p.tags.map((t: string) => (
            <span
              key={t}
              className="rounded-full border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark px-[11px] py-[5px] text-[10px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-all duration-[350ms] ease-smooth group-hover:border-borderStrong dark:group-hover:border-borderStrong-dark group-hover:text-textPrimary dark:group-hover:text-textPrimary-dark"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
