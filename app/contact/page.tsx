"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Reveal, Magnetic } from "@/components/Motion";
import { CONTACT_FACTS, CONTACT_FAQS } from "@/lib/data";

function openCalendly() {
  if (typeof window !== "undefined") {
    if ((window as any).Calendly) {
      const isDark = document.documentElement.classList.contains("dark");
      const bg = isDark ? "121212" : "fafafa";
      const text = isDark ? "f2f2f2" : "121212";
      (window as any).Calendly.initPopupWidget({
        url: `https://calendly.com/your-link-here?background_color=${bg}&text_color=${text}&primary_color=121212`,
      });
    } else {
      window.open("https://calendly.com/your-link-here", "_blank", "noreferrer");
    }
  }
  return false;
}

const fieldClass =
  "w-full rounded-[9px] border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark px-3 py-2.5 text-[11px] text-textPrimary dark:text-textPrimary-dark transition-all duration-200 hover:border-borderStrong dark:hover:border-borderStrong-dark focus:border-textPrimary dark:focus:border-textPrimary-dark focus:outline-none focus:ring-4 focus:ring-borderc dark:focus:ring-borderc-dark";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        index="06. Contact"
        title="Get in touch"
        subtitle="Reach out about full-time roles, freelance projects, or just to talk shop. I read everything that lands here."
      />

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CONTACT_FACTS.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-5 transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:shadow-[0_14px_28px_rgba(0,0,0,0.2)]"
              >
                <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark">
                  <i className={`${f.icon} text-[13px] text-textPrimary dark:text-textPrimary-dark`} />
                </div>
                <div>
                  <p className="text-[9.5px] uppercase tracking-wider text-textMuted dark:text-textMuted-dark">
                    {f.label}
                  </p>
                  <p className="text-[11.5px] font-semibold text-textPrimary dark:text-textPrimary-dark">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <h3 className="mb-3.5 text-sm font-bold text-textPrimary dark:text-textPrimary-dark">Frequently asked</h3>
          <div>
            {CONTACT_FAQS.map((f, i) => (
              <div
                key={f.q}
                className="cursor-pointer border-b border-borderc py-4 last:border-none dark:border-borderc-dark"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-textPrimary dark:text-textPrimary-dark">{f.q}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-[10px] text-textMuted transition-transform duration-300 dark:text-textMuted-dark ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openFaq === i && (
                  <p className="mt-2.5 text-[11.5px] leading-[1.7] text-textSecondary dark:text-textSecondary-dark">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <h3 className="mb-3.5 text-sm font-bold text-textPrimary dark:text-textPrimary-dark">Send a message</h3>
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
            <input className={`${fieldClass} mb-2.5`} type="text" placeholder="Subject" />
            <textarea className={`${fieldClass} mb-3 h-[100px] resize-none`} placeholder="Message" required />
            <button
              type="submit"
              className="cursor-pointer rounded-[9px] border-none bg-textPrimary px-[18px] py-2.5 text-[11px] font-semibold text-bg transition-all duration-[400ms] ease-smooth hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-[0.98] dark:bg-textPrimary-dark dark:text-bg-dark"
            >
              {sent ? "Sent" : "Send message"}
            </button>
          </form>
        </Reveal>
      </section>

      <section className="py-2.5 pb-10">
        <Reveal>
          <div className="relative flex flex-col items-start gap-3.5 overflow-hidden rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-[26px_22px] transition-all duration-[450ms] ease-smooth hover:-translate-y-1 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]">
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
    </>
  );
}
