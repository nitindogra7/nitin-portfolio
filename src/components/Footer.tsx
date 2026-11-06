"use client";

import { useSyncExternalStore } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const emptySubscribe = () => () => {};

export default function Footer() {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="footer">
      <span>
        © <span id="current-year" suppressHydrationWarning>{year}</span> Nitin Dogra{" "}
        <span style={{ margin: "0 6px" }}>/</span> Built with intention.
      </span>
      <div className="footer-links">
        <a
          href="https://github.com/nitindogra7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={13} aria-hidden="true" />{" "}GitHub{" "}
          <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/nitin-dogra-025497255"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={13} aria-hidden="true" />{" "}LinkedIn{" "}
          <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
        </a>

        <a
          href="https://x.com/nitindogra_77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiX size={13} aria-hidden="true" />{" "}X{" "}
          <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}










