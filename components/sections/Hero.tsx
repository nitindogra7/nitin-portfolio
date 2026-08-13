"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Magnetic } from "../Motion";
import { WORDS } from "@/lib/data";
import nitinAvatar from "@/public/assets/nitin_avatar.jpeg";
import { LiveStatus } from "../LiveStatus";

function useTypewriter(words: string[], typeSpeed = 90, deleteSpeed = 45, pause = 1600) {
  const [text, setText] = useState("");
  useEffect(() => {
    let wordIndex = 0,
      charIndex = 0,
      deleting = false,
      timer: any;
    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

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

const pillBtn =
  "inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-borderc dark:border-borderc-dark px-3.5 py-2 text-[11px] font-semibold transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5 hover:border-borderStrong dark:hover:border-borderStrong-dark";
const pillBtnAccent = `${pillBtn} border-textPrimary dark:border-textPrimary-dark bg-textPrimary text-bg dark:bg-textPrimary-dark dark:text-bg-dark`;
const pillBtnGhost = `${pillBtn} bg-surface text-textPrimary dark:bg-surface-dark dark:text-textPrimary-dark`;

export default function Hero() {
  const typed = useTypewriter(WORDS);
  return (
    <section className="relative pb-1.5 pt-[118px]">
      <div className="relative z-[1] flex flex-col-reverse items-start gap-4.5 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0 flex-1"
        >
          <p className="mb-2.5 font-mono text-[11px] text-textPrimary dark:text-textPrimary-dark">
            &gt; System ready. Initializing profile...
          </p>
          <h1 className="mb-2 text-[26px] font-bold leading-[1.08] tracking-tight text-textPrimary dark:text-textPrimary-dark sm:text-[32px]">
            Hi, I&apos;m Nitin
          </h1>
          <h2 className="mb-2.5 min-h-[1.4em] font-mono text-[11.5px] font-semibold text-textSecondary dark:text-textSecondary-dark sm:text-[13px]">
            {typed}
            <span className="ml-0.5 inline-block h-[0.95em] w-0.5 animate-blink bg-textPrimary align-text-bottom dark:bg-textPrimary-dark" />
          </h2>
          <p className="mb-[18px] max-w-[420px] text-[11.5px] leading-[1.6] text-textSecondary dark:text-textSecondary-dark sm:text-[12.5px]">
            I engineer scalable, secure, and production-ready architectures — turning complex problems into elegant,
            high-performance solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <Magnetic as={motion.create(Link)} strength={0.25} maxOffset={5} href="/projects" className={pillBtnAccent} whileTap={{ scale: 0.96 }}>
              <i className="fa-solid fa-terminal" /> View Work
            </Magnetic>
            <Magnetic as={motion.button} strength={0.25} maxOffset={5} onClick={openCalendly} className={pillBtnGhost} whileTap={{ scale: 0.96 }}>
              <i className="fa-regular fa-calendar-check" /> Book a Meet
            </Magnetic>
            <Magnetic as={motion.a} strength={0.25} maxOffset={5} href="/nitin_dogra_resume.pdf" target="_blank" className={pillBtnGhost} whileTap={{ scale: 0.96 }}>
              <i className="fa-solid fa-file-download" /> Resume
            </Magnetic>
            <Magnetic as={motion.a} strength={0.25} maxOffset={5} href="https://github.com/nitindogra7" target="_blank" rel="noreferrer" className={pillBtnGhost} whileTap={{ scale: 0.96 }}>
              <i className="fa-brands fa-github" /> GitHub
            </Magnetic>
          </div>
          <LiveStatus />
        </motion.div>
        <motion.div
          className="flex-shrink-0 rounded-full bg-gradient-to-br from-borderStrong to-transparent p-0.5 dark:from-borderStrong-dark"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          <img
            src={nitinAvatar.src}
            alt="Nitin Dogra avatar"
            className="block h-16 w-16 rounded-full bg-surface object-cover dark:bg-surface-dark sm:h-[72px] sm:w-[72px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
