"use client";

import { useNavigation } from "@/context/NavigationContext";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Copy } from "lucide-react";

export default function ContactSection() {
  const { activeSection } = useNavigation();
  const pathname = usePathname();
  const SectionTitle = pathname === "/contact" ? "h1" : "h2";

  const handleCopyEmail = async () => {
    const email = "dogranitin579@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      window.dispatchEvent(
        new CustomEvent("nd-toast", { detail: "Email copied to clipboard" })
      );
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch {}
      field.remove();
      window.dispatchEvent(
        new CustomEvent("nd-toast", {
          detail: ok ? "Email copied to clipboard" : email,
        })
      );
    }
  };

  return (
    <section
      className={`section contact ${activeSection === "contact" || pathname === "/contact" ? "is-current" : ""}`}
      id="contact"
    >
      <div className="eyebrow mono" style={{ marginBottom: "14px" }}>
        <span className="dot" /> LET’S BUILD SOMETHING
      </div>
      <SectionTitle>Good work starts with a hello.</SectionTitle>
      <p>Have a role or a project in mind? I’d love to hear about it.</p>
      <div className="actions flex flex-wrap items-center gap-2.5">
        <a className="btn primary" href="mailto:dogranitin579@gmail.com">
          Get in touch{" "}
          <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
        </a>
        <button
          className="btn"
          id="copy-email"
          type="button"
          onClick={handleCopyEmail}
        >
          <Copy className="ui-icon" size={14} aria-hidden="true" />
          <span>Copy email</span>
        </button>
      </div>
    </section>
  );
}
