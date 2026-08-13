"use client"
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Magnetic } from "./Motion";
import { useTheme } from "./ThemeProvider";
import { NAV_LINKS } from "@/lib/data";
import { AuthButton } from "./AuthButton";

const themeToggleBtn =
  "flex h-9 w-9 md:h-[30px] md:w-[30px] items-center justify-center rounded-full border border-borderc dark:border-borderc-dark bg-transparent text-textSecondary dark:text-textSecondary-dark transition-all duration-[400ms] ease-smooth hover:rotate-[20deg] hover:border-borderStrong dark:hover:border-borderStrong-dark hover:text-textPrimary dark:hover:text-textPrimary-dark";

export default function FloatingNav() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastY.current;
    setScrolled(y > 20);
    if (y < 80) setVisible(true);
    else if (diff > 4 && !mobileOpen) setVisible(false);
    else if (diff < -4) setVisible(true);
    lastY.current = y;
  });

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex flex-col items-center p-3 sm:p-[14px_20px]">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto flex w-full max-w-shell items-center justify-between gap-0.5 rounded-full border border-borderc dark:border-borderc-dark p-2.5 px-3.5 sm:p-[6px_6px_6px_14px] backdrop-blur-[20px] transition-shadow duration-300 ${
          scrolled
            ? "bg-white/85 shadow-[0_10px_40px_rgba(0,0,0,0.12)] dark:bg-[#121212]/85 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            : "bg-white/60 shadow-none dark:bg-[#121212]/50"
        }`}
      >
        <Link
          href="/"
          onClick={closeMobile}
          className="flex items-center gap-2"
        >
          <div className="flex h-6 w-6 sm:h-5 sm:w-5 items-center justify-center rounded-[6px] sm:rounded-[5px] bg-textPrimary font-mono text-xs sm:text-[10px] font-bold text-bg dark:bg-textPrimary-dark dark:text-bg-dark">
            N
          </div>
          <span className="font-mono text-sm sm:text-xs font-semibold tracking-tight text-textPrimary dark:text-textPrimary-dark">
            nitindogra
          </span>
        </Link>

        <div
          className="relative hidden items-center md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHovered(link.label)}
                className={`relative z-[2] px-[11px] py-1.5 text-[11.5px] font-medium transition-colors duration-200 ${
                  hovered === link.label || active
                    ? "text-textPrimary dark:text-textPrimary-dark"
                    : "text-textSecondary dark:text-textSecondary-dark"
                }`}
              >
                {hovered === link.label && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 -z-10 rounded-full bg-borderc dark:bg-borderc-dark"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            className={themeToggleBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i
              className={`${theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"} text-xs`}
            />
          </button>
          <AuthButton variant="nav" />
        </div>

        <div className="flex items-center gap-2.5 md:hidden">
          <button
            className={themeToggleBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i
              className={`${theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"} text-sm sm:text-xs`}
            />
          </button>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-borderc dark:border-borderc-dark bg-transparent text-textPrimary dark:text-textPrimary-dark active:scale-95 transition-transform"
          >
            <i
              className={`${mobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} text-base sm:text-xs`}
            />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 z-[-1] bg-black/40 backdrop-blur-sm pointer-events-auto md:hidden"
            />
            <motion.div
              className="mt-2 flex w-full max-w-shell flex-col rounded-2xl border border-borderc dark:border-borderc-dark bg-white/95 p-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:bg-[#121212]/95 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] md:hidden pointer-events-auto"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="rounded-xl px-3.5 py-3 text-sm text-textSecondary dark:text-textSecondary-dark transition-all duration-200 hover:translate-x-0.5 hover:bg-borderc dark:hover:bg-borderc-dark hover:text-textPrimary dark:hover:text-textPrimary-dark active:bg-borderc dark:active:bg-borderc-dark"
                >
                  {link.label}
                </Link>
              ))}

              <AuthButton variant="mobile" onClickCallback={closeMobile} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
