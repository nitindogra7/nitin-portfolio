import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { internationalAlternates, pageSocialMetadata } from "@/lib/site";
import { generateBreadcrumbsJsonLd } from "@/lib/schema";

const title = "Writing on Web Development & Architecture | Nitin Dogra";
const description =
  "Technical notes and practical insights on full-stack web engineering, Next.js App Router patterns, and reliable database architectures.";

export const metadata: Metadata = {
  title,
  description,
  alternates: internationalAlternates("/blog"),
  robots: { index: false, follow: true },
  ...pageSocialMetadata(title, description, "/blog"),
};

export default function BlogPage() {
  const breadcrumbsJsonLd = generateBreadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <main id="main" className="wrap">
        <section className="section blog-page" id="blog" aria-label="Technical writing and notes from the build">
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
            <Link className="btn" href="/contact" aria-label="Suggest a topic for upcoming web development articles">
              Suggest a topic <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <div className="wrap">
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
