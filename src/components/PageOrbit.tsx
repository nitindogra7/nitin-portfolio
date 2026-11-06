"use client";

import { useNavigation } from "@/context/NavigationContext";
import { Code2, Briefcase, Clock, Mail, Layers } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PageOrbit() {
  const { activeSection } = useNavigation();
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <nav className="page-orbit" aria-label="Quick section navigation">
      <svg className="orbit-track" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="51" />
        <circle className="orbit-inner" cx="60" cy="60" r="35" />
        <circle className="orbit-progress" cx="60" cy="60" r="51" pathLength="100" />
      </svg>
      <span className="orbit-satellite" aria-hidden="true" />
      <a
        className={`orbit-core ${activeSection === "home" ? "active" : ""}`}
        href="#home"
        aria-label="Back to introduction"
        aria-current={activeSection === "home" ? "location" : undefined}
      >
        <Code2 className="ui-icon" size={14} aria-hidden="true" />
        <span className="orbit-tip" aria-hidden="true">
          Back to intro
        </span>
      </a>
      <a
        className={`orbit-link ${activeSection === "work" ? "active" : ""}`}
        data-direction="top"
        href="#work"
        aria-label="Jump to selected work"
        aria-current={activeSection === "work" ? "location" : undefined}
      >
        <Briefcase className="ui-icon" size={14} aria-hidden="true" />
        <span className="orbit-tip" aria-hidden="true">
          Selected work
        </span>
      </a>
      <a
        className={`orbit-link ${activeSection === "experience" ? "active" : ""}`}
        data-direction="right"
        href="#experience"
        aria-label="Jump to experience"
        aria-current={activeSection === "experience" ? "location" : undefined}
      >
        <Clock className="ui-icon" size={14} aria-hidden="true" />
        <span className="orbit-tip" aria-hidden="true">
          Experience
        </span>
      </a>
      <a
        className={`orbit-link ${activeSection === "contact" ? "active" : ""}`}
        data-direction="bottom"
        href="#contact"
        aria-label="Jump to contact"
        aria-current={activeSection === "contact" ? "location" : undefined}
      >
        <Mail className="ui-icon" size={14} aria-hidden="true" />
        <span className="orbit-tip" aria-hidden="true">
          Say hello
        </span>
      </a>
      <a
        className={`orbit-link ${activeSection === "skills" ? "active" : ""}`}
        data-direction="left"
        href="#skills"
        aria-label="Jump to technology stack"
        aria-current={activeSection === "skills" ? "location" : undefined}
      >
        <Layers className="ui-icon" size={14} aria-hidden="true" />
        <span className="orbit-tip" aria-hidden="true">
          Tech stack
        </span>
      </a>
    </nav>
  );
}
