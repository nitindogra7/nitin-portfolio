import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Motion";
import { BLOG } from "@/lib/data";

export function generateStaticParams() {
  return BLOG.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = BLOG.find((x) => x.slug === slug);
  if (!b) return {};
  return { title: `${b.title} | Nitin Dogra`, description: b.blurb };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG.find((b) => b.slug === slug);
  if (!post) return notFound();

  const related = BLOG.filter((b) => b.slug !== post.slug && b.tag === post.tag).slice(0, 2);

  return (
    <>
      <section className="pb-2.5 pt-[118px]">
        <Reveal>
          <Link
            href="/blog"
            className="mb-[18px] inline-flex items-center gap-1.5 font-mono text-[11px] text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70"
          >
            <i className="fa-solid fa-arrow-left text-[10px]" /> All posts
          </Link>
          <span className="mb-3 ml-3 inline-block rounded-full border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark px-[11px] py-[5px] text-[10px] font-bold text-textPrimary dark:text-textPrimary-dark">
            {post.tag}
          </span>
          <h1 className="mb-2.5 text-[26px] font-bold leading-[1.2] tracking-tight text-textPrimary dark:text-textPrimary-dark">
            {post.title}
          </h1>
          <p className="font-mono text-[10.5px] text-textMuted dark:text-textMuted-dark">
            {post.date} · {post.readTime}
          </p>
        </Reveal>
      </section>

      <section className="py-5">
        <Reveal>
          <div className="aspect-[16/8] overflow-hidden rounded-xl border border-borderc dark:border-borderc-dark">
            <img src={post.image} alt={post.title} className="block h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="max-w-[560px] py-2.5 pb-[30px]">
        <Reveal>
          <div className="flex flex-col gap-4">
            {post.content.map((para, i) => (
              <p key={i} className="text-[13px] leading-[1.85] text-textSecondary dark:text-textSecondary-dark">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="py-2.5 pb-10">
          <Reveal>
            <h3 className="mb-3.5 text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
              More on {post.tag}
            </h3>
          </Reveal>
          <div className="flex flex-col gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="flex items-center justify-between rounded-xl border border-borderc dark:border-borderc-dark p-[11px_10px] transition-all duration-[400ms] ease-smooth hover:bg-borderc dark:hover:bg-borderc-dark"
              >
                <span className="text-xs font-semibold text-textPrimary dark:text-textPrimary-dark">{r.title}</span>
                <i className="fa-solid fa-arrow-right text-[10px] text-textMuted dark:text-textMuted-dark" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
