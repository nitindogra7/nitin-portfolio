"use client";
import { useState } from "react";
import { MediaCard } from "@/components/Cards";
import { BLOG } from "@/lib/data";
import { Reveal } from "@/components/Motion";

const CATEGORIES = ["All", ...Array.from(new Set(BLOG.map((b) => b.tag)))];

export default function BlogList() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? BLOG : BLOG.filter((b) => b.tag === active);

  return (
    <>
      <section className="py-2.5 pb-5">
        <Reveal>
          <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`cursor-pointer rounded-full border px-3.5 py-[7px] text-[11px] font-semibold transition-all duration-300 ease-smooth ${
                active === c
                  ? "border-textPrimary bg-textPrimary text-bg dark:border-textPrimary-dark dark:bg-textPrimary-dark dark:text-bg-dark"
                  : "border-borderc bg-surface text-textSecondary hover:border-borderStrong hover:text-textPrimary dark:border-borderc-dark dark:bg-surface-dark dark:text-textSecondary-dark dark:hover:border-borderStrong-dark dark:hover:text-textPrimary-dark"
              }`}
            >
              {c}
            </button>
          ))}
          </div>
        </Reveal>
      </section>
      <section className="py-2.5 pb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filtered.map((b, i) => (
            <MediaCard
              key={`${b.slug}-${active}`}
              i={i}
              href={`/blog/${b.slug}`}
              internal
              linkTitle="Read article"
              image={b.image}
              title={b.title}
              date={`${b.date} · ${b.readTime}`}
              blurb={b.blurb}
              tag={b.tag}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-xs text-textMuted dark:text-textMuted-dark">No posts in this category yet.</p>
        )}
      </section>
    </>
  );
}
