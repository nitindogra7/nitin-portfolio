"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, SectionTitle, Magnetic } from "../Motion";

function openCalendly() {
  if (typeof window !== "undefined" && (window as any).Calendly) {
    const isDark = document.documentElement.classList.contains("dark");
    const bg = isDark ? "121212" : "fafafa";
    const text = isDark ? "f2f2f2" : "121212";
    (window as any).Calendly.initPopupWidget({
      url: `https://calendly.com/your-link-here?background_color=${bg}&text_color=${text}&primary_color=121212`,
    });
  }
  return false;
}

const fieldClass =
  "w-full rounded-[9px] border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark px-3 py-2.5 text-[11px] text-textPrimary dark:text-textPrimary-dark transition-all duration-200 hover:border-borderStrong dark:hover:border-borderStrong-dark focus:border-textPrimary dark:focus:border-textPrimary-dark focus:outline-none focus:ring-4 focus:ring-borderc dark:focus:ring-borderc-dark";

export default function ContactTeaser() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-[26px] pb-[50px]" id="contact">
      <Reveal>
        <div className="mb-3.5 flex items-center justify-between">
          <SectionTitle index="06.">Get in touch</SectionTitle>
          <Link href="/contact" className="text-[10.5px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70">
            View more <i className="fa-solid fa-arrow-right text-[9px]" />
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mb-4 max-w-[480px] text-[11.5px] leading-[1.7] text-textSecondary dark:text-textSecondary-dark">
          Currently pursuing a B.Tech at Maharishi University of Information Technology. My inbox is open for new
          full-stack opportunities or tech discussions.
        </p>
      </Reveal>
      <Reveal delay={0.5}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="mb-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <input className={fieldClass} type="text" placeholder="Your name" required />
            <input className={fieldClass} type="email" placeholder="Your email" required />
          </div>
          <textarea className={`${fieldClass} mb-3 h-[84px] resize-none`} placeholder="Message" required />
          <button
            type="submit"
            className="cursor-pointer rounded-[9px] border-none bg-textPrimary px-[18px] py-2.5 text-[11px] font-semibold text-bg transition-all duration-[400ms] ease-smooth hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-[0.98] dark:bg-textPrimary-dark dark:text-bg-dark"
          >
            {sent ? "Sent" : "Send message"}
          </button>
        </form>
      </Reveal>
      <Reveal delay={0.6}>
        <div className="relative mt-5 flex flex-col items-start gap-3.5 overflow-hidden rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-[26px_22px] transition-all duration-[450ms] ease-smooth hover:-translate-y-1 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(0,0,0,0.32)_1px,transparent_1.4px)] bg-[length:16px_16px] opacity-55 [mask-image:radial-gradient(ellipse_90%_100%_at_100%_0%,#000_0%,transparent_72%)] [-webkit-mask-image:radial-gradient(ellipse_90%_100%_at_100%_0%,#000_0%,transparent_72%)] dark:bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1.4px)]" />
          <div className="relative z-[1] flex items-center gap-3">
            <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border border-borderc dark:border-borderc-dark bg-surfaceHover text-textPrimary dark:bg-surfaceHover-dark dark:text-textPrimary-dark">
              <i className="fa-solid fa-calendar-day text-sm" />
            </div>
            <div>
              <p className="mb-0.5 text-[12.5px] font-bold text-textPrimary dark:text-textPrimary-dark">
                Prefer to talk it through?
              </p>
              <p className="font-mono text-[10px] text-textMuted dark:text-textMuted-dark">
                /* schedule a face-to-face meet */
              </p>
            </div>
          </div>
          <Magnetic
            as={motion.button}
            strength={0.3}
            maxOffset={5}
            type="button"
            onClick={openCalendly}
            whileTap={{ scale: 0.96 }}
            className="relative z-[1] inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-textPrimary bg-textPrimary px-3.5 py-2 text-[11px] font-semibold text-bg transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5 dark:border-textPrimary-dark dark:bg-textPrimary-dark dark:text-bg-dark"
          >
            <i className="fa-regular fa-calendar-check" /> Schedule via Calendly
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
