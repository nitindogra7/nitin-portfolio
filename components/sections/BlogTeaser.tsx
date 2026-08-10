import Link from "next/link";
import { Reveal, SectionTitle } from "../Motion";
import { MediaCard } from "../Cards";
import { BLOG } from "@/lib/data";

export default function BlogTeaser() {
  return (
    <section className="py-[26px]" id="blog">
      <Reveal>
        <div className="mb-3.5 flex items-center justify-between">
          <SectionTitle index="05.">Writing</SectionTitle>
          <Link href="/blog" className="text-[10.5px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70">
            View more <i className="fa-solid fa-arrow-right text-[9px]" />
          </Link>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {BLOG.slice(0, 4).map((b, i) => (
          <MediaCard
            key={b.slug}
            i={i}
            href={`/blog/${b.slug}`}
            internal
            linkTitle="Read article"
            image={b.image}
            title={b.title}
            date={b.date}
            blurb={b.blurb}
            tag={b.tag}
          />
        ))}
      </div>
    </section>
  );
}
