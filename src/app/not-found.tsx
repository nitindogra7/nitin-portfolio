import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="wrap">
      <section className="section" aria-labelledby="not-found-title">
        <div className="section-head">
          <h1 className="title" id="not-found-title">Page not found</h1>
        </div>
        <p>The page you’re looking for doesn’t exist.</p>
        <Link className="btn" href="/">Back to Nitin Dogra’s portfolio</Link>
      </section>
    </main>
  );
}
