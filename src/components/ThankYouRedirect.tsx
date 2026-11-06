"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankYouRedirect() {
  const router = useRouter();
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    const redirectTimer = window.setTimeout(() => router.replace("/"), 5000);
    const countdownTimer = window.setInterval(() => {
      setSecondsRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownTimer);
    };
  }, [router]);

  return (
    <section className="section" aria-labelledby="thank-you-title">
      <div className="section-head">
        <h1 className="title" id="thank-you-title">Thanks for your message</h1>
      </div>
      <p className="muted">Your message has been submitted successfully.</p>
      <p className="muted" aria-live="polite">
        Returning to the homepage in {secondsRemaining} {secondsRemaining === 1 ? "second" : "seconds"}.
      </p>
      <Link className="btn primary" href="/">Back home now</Link>
    </section>
  );
}
