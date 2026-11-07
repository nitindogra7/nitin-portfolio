"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { SiX } from "react-icons/si";

const heroTechStack = [
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain",
    colorLight: "#5077d1",
    colorDark: "#9bb5ff",
  },
  {
    name: "React",
    icon: "devicon-react-original",
    colorLight: "#079bc1",
    colorDark: "#61dafb",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    colorLight: "#3178c6",
    colorDark: "#60a5fa",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain",
    colorLight: "#4d9c30",
    colorDark: "#83cd5c",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain",
    colorLight: "#336791",
    colorDark: "#72a9d5",
  },
  {
    name: "Git",
    icon: "devicon-git-plain",
    colorLight: "#f05032",
    colorDark: "#ff795e",
  },
];

export default function HeroSection() {
return (
    <section
      className="hero"
      id="home"
    >
      <svg className="hero-branches" aria-hidden="true" viewBox="0 0 295 205">
        <path className="branch" d="M25 53H280M25 143H280M152 53C191 53 174 17 217 17H280" />
        <path className="branch branch-accent" d="M65 53C110 53 92 98 133 98H203C247 98 230 143 270 143" />
        <path className="branch-flow" pathLength="100" style={{ "--flow-duration": "5s", "--flow-delay": "-1.2s" } as CSSProperties} d="M25 53H280" />
        <path className="branch-flow" pathLength="100" style={{ "--flow-duration": "6s", "--flow-delay": "-2.6s" } as CSSProperties} d="M65 53C110 53 92 98 133 98H203C247 98 230 143 270 143" />
        <path className="branch-flow" pathLength="100" style={{ "--flow-duration": "4.5s", "--flow-delay": "-.8s" } as CSSProperties} d="M152 53C191 53 174 17 217 17H280" />
        <path className="branch-flow" pathLength="100" style={{ "--flow-duration": "5.5s", "--flow-delay": "-3.5s" } as CSSProperties} d="M25 143H280" />
        <circle className="commit" cx="65" cy="53" r="4" />
        <circle className="commit" cx="152" cy="53" r="4" />
        <circle className="commit" cx="245" cy="53" r="4" />
        <circle className="commit" cx="155" cy="98" r="4" />
        <circle className="commit" cx="203" cy="98" r="4" />
        <circle className="commit" cx="111" cy="143" r="4" />
        <circle className="commit" cx="270" cy="143" r="4" />
      </svg>

      <div className="hero-copy">
        <div className="hero-portrait-frame">
          <figure className="hero-portrait">
            <Image
              src="/avatar.png"
              alt="Portrait of Nitin Dogra"
              width={100}
              height={100}
              priority
            />
          </figure>
        </div>

        <h1>Hi, I’m Nitin Dogra<span className="muted">.</span></h1>
        <h2 className="hero-subtitle">Full-stack developer in Delhi, India.</h2>
        <p className="intro">
          I build web applications from the interface to the database, with a focus on
          clean experiences, reliable APIs, and the details that make a product feel right.
        </p>

        <div className="actions flex flex-wrap items-center gap-2.5">
          <a className="btn primary" href="#work">
            Explore my work{" "}
            <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
          </a>
          <a
            className="btn"
            href="/resume.pdf"
            download="Nitin_Dogra_Resume.pdf"
            aria-label="Download Nitin Dogra resume in PDF format"
          >
            <Download className="ui-icon" size={14} aria-hidden="true" />
            Download resume
          </a>
        </div>

        <div className="hero-bottom">
          <MapPin className="icon" size={16} aria-hidden="true" />
          <span>Delhi, India</span>
          <span style={{ margin: "0 5px" }}>{"\u00b7"}</span>
                    <a
            className="hero-social-link"
            href="https://x.com/nitindogra_77"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nitin Dogra on X"
          >
            <span>@nitindogra_77</span>
            <SiX size={13} aria-hidden="true" />
            <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-stack" aria-label="Core technologies">
          <span className="hero-stack-label">MY STACK</span>
          <div className="hero-stack-chips">
            {heroTechStack.map((tech) => (
              <span
                key={tech.name}
                className="tech-mark"
                tabIndex={0}
                role="img"
                aria-label={tech.name}
                style={
                  {
                    "--tech-color": tech.colorLight,
                    "--tech-dark": tech.colorDark,
                  } as CSSProperties
                }
              >
                <i className={tech.icon} aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






