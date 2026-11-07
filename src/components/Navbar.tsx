"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { useNavigation } from "@/context/NavigationContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function Navbar() {
  const { activeSection } = useNavigation();
  const pathname = usePathname();
  const currentPage = pathname === "/" ? activeSection : pathname.replace(/^\//, "").replace(/\/$/, "");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="top">
      <nav className="nav" aria-label="Main navigation" ref={navRef}>
        <Link className="mark" href="/" aria-label="Nitin Dogra home">
          nd<span>.</span>
        </Link>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="primary-navigation">
          <Link
            href="/work"
            className={currentPage === "work" ? "active" : undefined}
            aria-current={currentPage === "work" ? "page" : undefined}
            aria-label="View selected web projects and architecture"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/experience"
            className={currentPage === "experience" ? "active" : undefined}
            aria-current={currentPage === "experience" ? "page" : undefined}
            aria-label="View software engineering and internship experience"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className={currentPage === "contact" ? "active" : undefined}
            aria-current={currentPage === "contact" ? "page" : undefined}
            aria-label="Get in touch with Nitin Dogra"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={currentPage === "blog" ? "active" : undefined}
            aria-current={currentPage === "blog" ? "page" : undefined}
            aria-label="Read technical articles and notes from the build"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <span className="nav-divider" />
        </div>
        <div className="nav-actions">
          <div className="nav-social-links">
            <a className="icon-button nav-social-link" href="https://github.com/nitindogra7" target="_blank" rel="noopener noreferrer" aria-label="Nitin Dogra on GitHub" title="Nitin Dogra on GitHub">
              <SiGithub aria-hidden="true" />
            </a>

          </div>
          <button
            ref={menuButtonRef}
            className="icon-button menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-icons" aria-hidden="true">
              <Menu className="menu-open-icon" size={16} />
              <X className="menu-close-icon" size={16} />
            </span>
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}







