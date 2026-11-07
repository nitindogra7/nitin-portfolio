"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useNavigation } from "@/context/NavigationContext";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Code2, Coffee } from "lucide-react";
import { SiRazorpay } from "react-icons/si";
import type { IconType } from "react-icons";

interface ProjectTag {
  name: string;
  icon?: string | null;
  CustomIcon?: IconType;
  colors: [string, string];
}

interface ProjectItem {
  title: string;
  description: string;
  tags: ProjectTag[];
  liveUrl: string;
  sourceUrl: string;
  thumbnail: string;
  imageAlt: string;
  visual: React.ReactNode;
}

const projectsData: ProjectItem[] = [
  {
    title: "Infraly",
    description:
      "Developer-first form backend and lead CRM that captures website enquiries, automates notifications, and cuts response latency.",
    tags: [
      { name: "Next.js 16", icon: "devicon-nextjs-plain", colors: ["#5077d1", "#9bb5ff"] },
      { name: "Express 5", icon: "devicon-express-original", colors: ["#c49817", "#edcc58"] },
      { name: "TypeScript", icon: "devicon-typescript-plain", colors: ["#3178c6", "#60a5fa"] },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", colors: ["#336791", "#72a9d5"] },
      { name: "Prisma", icon: "devicon-prisma-original", colors: ["#4c5b74", "#9fb3d8"] },
      { name: "Clerk", icon: null, colors: ["#6c47ff", "#a78bfa"] },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", colors: ["#06b6d4", "#67e8f9"] },
    ],
    liveUrl: "https://infraly.online",
    sourceUrl: "https://github.com/nitindogra7/crm",
    thumbnail: "/projects/infraly.png",
    imageAlt: "Nitin Dogra — Full-Stack Developer in Delhi — Infraly developer form backend and lead CRM built with Next.js and TypeScript",
    visual: <div className="mini-app"><div className="mini-top"><b>infraly.</b><span className="mini-dots">...</span></div><p style={{ fontSize: "11px", fontWeight: 600, margin: "12px 0 0" }}>Turn website enquiries into your next customers.</p></div>,
  },
  {
    title: "GetMeChai",
    description:
      "Creator community platform enabling direct reader contributions with one-click Razorpay checkout and live updates.",
    tags: [
      { name: "Next.js", icon: "devicon-nextjs-plain", colors: ["#5077d1", "#9bb5ff"] },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", colors: ["#336791", "#72a9d5"] },
      { name: "Razorpay", icon: null, CustomIcon: SiRazorpay, colors: ["#3377e0", "#76a9fa"] },
    ],
    liveUrl: "https://get-me-chai-seven.vercel.app",
    sourceUrl: "https://github.com/nitindogra7/getMeChai",
    thumbnail: "/projects/getmechai.png",
    imageAlt: "Nitin Dogra — Full-Stack Developer in Delhi — GetMeChai creator platform with Razorpay payments built with Next.js and PostgreSQL",
    visual: (
      <div className="mini-app">
        <div className="mini-top">
          <b><Coffee className="mini-symbol" aria-hidden="true" /> getmechai</b>
          <span className="mini-dots">···</span>
        </div>
        <div className="mini-profile">
          <div className="avatar"><Coffee className="mini-symbol" aria-hidden="true" /></div>
          <b style={{ fontSize: "10px" }}>A little support. A lot of possibility.</b>
          <div className="mini-line" />
          <div className="mini-button">
            Support a creator{" "}
            <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "LogoCraft",
    description:
      "AI-driven vector identity generator with credit-based billing, custom prompt synthesis, and instant export workflows.",
    tags: [
      { name: "React", icon: "devicon-react-original", colors: ["#079bc1", "#61dafb"] },
      { name: "Express", icon: "devicon-express-original", colors: ["#c49817", "#edcc58"] },
      { name: "Hugging Face", icon: null, colors: ["#f4a261", "#ffc66d"] },
    ],
    liveUrl: "https://logocraft.nitindogra.space/",
    sourceUrl: "https://github.com/nitindogra7/logoCraft",
    thumbnail: "/projects/logocraft.png",
    imageAlt: "Nitin Dogra — Full-Stack Developer in Delhi — LogoCraft AI vector logo generator built with React and Express",
    visual: (
      <div className="mini-app">
        <div className="mini-top">
          <b>✳ LogoCraft</b>
          <span className="mini-dots">···</span>
        </div>
        <p style={{ fontSize: "11px", fontWeight: 600, margin: "12px 0 0" }}>
          An idea. A new identity.
        </p>
        <div className="logo-tiles">
          <div className="logo-tile">⌘</div>
          <div className="logo-tile">✳</div>
          <div className="logo-tile">◈</div>
        </div>
        <div
          className="mini-button"
          style={{ background: "var(--ink)", color: "var(--bg)" }}
        >
          Generate your logo ✧
        </div>
      </div>
    ),
  },
];

export default function ProjectsSection() {
  const { activeSection } = useNavigation();
  const pathname = usePathname();
  const SectionTitle = pathname === "/work" ? "h1" : "h2";

  return (
    <section
      className={`section ${activeSection === "work" || pathname === "/work" ? "is-current" : ""}`}
      id="work"
      aria-label="Full-Stack Web Apps & SaaS Projects by Nitin Dogra"
    >
      <div className="section-head">
        <SectionTitle className="title">
          <span className="section-number">01 /</span>Selected work
        </SectionTitle>
        <a
          className="text-link"
          href="https://github.com/nitindogra7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all open source repositories by Nitin Dogra on GitHub"
          title="View all repositories on GitHub"
        >
          All repositories{" "}
          <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="project-grid">
        {projectsData.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-visual">
              <Image
                className="project-thumbnail"
                src={project.thumbnail}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 600px) calc(100vw - 50px), 420px"
              />
            </div>
            <div className="project-body">
              <h3>
                {project.title}{" "}
                <span className="muted" style={{ fontWeight: 400 }}>
                  ↗
                </span>
              </h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag.name}>
                    {tag.icon ? (
                      <i
                        className={tag.icon}
                        aria-hidden="true"
                        style={
                          {
                            "--tech-color": tag.colors[0],
                            "--tech-dark": tag.colors[1],
                          } as CSSProperties
                        }
                      />
                    ) : tag.CustomIcon ? (
                      <i
                        aria-hidden="true"
                        style={
                          {
                            "--tech-color": tag.colors[0],
                            "--tech-dark": tag.colors[1],
                          } as CSSProperties
                        }
                      >
                        <tag.CustomIcon className="ui-icon" />
                      </i>
                    ) : (
                      <i
                        aria-hidden="true"
                        style={
                          {
                            "--tech-color": tag.colors[0],
                            "--tech-dark": tag.colors[1],
                          } as CSSProperties
                        }
                      >
                        <Code2 className="ui-icon" size={13} aria-hidden="true" />
                      </i>
                    )}
                    {tag.name}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live production deployment of ${project.title} by Nitin Dogra`}
                  title={`Visit live deployment of ${project.title} by Nitin Dogra`}
                >
                  Live website{" "}
                  <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code repository by Nitin Dogra on GitHub`}
                  title={`View ${project.title} source code repository by Nitin Dogra on GitHub`}
                >
                  Source code{" "}
                  <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
