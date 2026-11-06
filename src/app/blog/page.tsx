import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { pageSocialMetadata, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing on Web Development",
  description:
    "Notes from Nitin Dogra on web development, projects, tools, and lessons learned. More writing is in progress.",
  alternates: siteUrl ? { canonical: "/blog" } : undefined,
  ...pageSocialMetadata("Writing on Web Development", "Notes from Nitin Dogra on web development, projects, and tools.", "/blog"),
};

export default function BlogPage() {
  return (
    <>
      <main id="main" className="wrap">
      <section className="section blog-page" id="blog">
        <div className="section-head">
          <h1 className="title">Writing</h1>
          <span className="mono muted">NOTES FROM THE BUILD</span>
        </div>
        <div className="blog-intro">
          <div className="eyebrow mono">
            <span className="dot" /> IN PROGRESS
          </div>
          <h2>Thoughts on building useful things for the web.</h2>
          <p>
            I’m putting together practical notes on projects, tools, and lessons
            learned along the way. New posts are on the way.
          </p>
          <Link className="btn" href="/contact">
            Suggest a topic <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
      </main>
      <div className="wrap"><Footer /></div>
    </>
  );
}
