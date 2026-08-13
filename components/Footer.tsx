"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "./Motion";

const socials = [
  { icon: "fa-brands fa-github", href: "https://github.com/nitindogra7" },
  { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/in/nitin-dogra" },
  { icon: "fa-brands fa-x-twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-2.5 flex flex-col items-center border-t border-borderc dark:border-borderc-dark p-[30px_0_40px]">
      <div className="mb-3.5 flex gap-2.5">
        {socials.map((s) => (
          <Magnetic
            key={s.icon}
            as={motion.a}
            strength={0.45}
            maxOffset={9}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.6 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-borderc dark:border-borderc-dark text-[12.5px] text-textSecondary dark:text-textSecondary-dark transition-colors duration-300 hover:text-textPrimary dark:hover:text-textPrimary-dark"
          >
            <i className={s.icon} />
          </Magnetic>
        ))}
      </div>

      <div className="mb-3 flex items-center gap-4 text-[11px] font-mono text-textSecondary dark:text-textSecondary-dark">
        <Link href="/privacy" className="hover:underline hover:text-textPrimary dark:hover:text-textPrimary-dark">
          Privacy Policy
        </Link>
        <span>•</span>
        <Link href="/terms" className="hover:underline hover:text-textPrimary dark:hover:text-textPrimary-dark">
          Terms of Service
        </Link>
      </div>

      <p className="font-mono text-[10px] text-textMuted dark:text-textMuted-dark">
        nitindogra — Designed and built in 2026
      </p>
    </footer>
  );
}
