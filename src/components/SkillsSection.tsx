"use client";

import { useNavigation } from "@/context/NavigationContext";
import type { CSSProperties } from "react";
import { Code2 } from "lucide-react";

const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "SQL", "HTML & CSS"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT & OAuth"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "MongoDB", "Prisma"] },
  { label: "Tools", items: ["Git & GitHub", "Vercel", "Postman", "Razorpay", "Cloudinary"] },
];

const technologyIcons: Record<string, string> = {
  JavaScript: "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  SQL: "devicon-azuresqldatabase-plain",
  "HTML & CSS": "devicon-html5-plain",
  React: "devicon-react-original",
  "Next.js": "devicon-nextjs-plain",
  "Tailwind CSS": "devicon-tailwindcss-original",
  "Node.js": "devicon-nodejs-plain",
  Express: "devicon-express-original",
  PostgreSQL: "devicon-postgresql-plain",
  Supabase: "devicon-supabase-plain",
  MongoDB: "devicon-mongodb-plain",
  Prisma: "devicon-prisma-original",
  "Git & GitHub": "devicon-github-original",
  Vercel: "devicon-vercel-original",
  Postman: "devicon-postman-plain",
};

const technologyColors: Record<string, [string, string]> = {
  JavaScript: ["#c49c00", "#f7df1e"],
  TypeScript: ["#3178c6", "#60a5fa"],
  SQL: ["#0088c2", "#55b9ee"],
  "HTML & CSS": ["#e34f26", "#f57955"],
  React: ["#079bc1", "#61dafb"],
  "Next.js": ["#5077d1", "#9bb5ff"],
  "Tailwind CSS": ["#06a8bd", "#38d6e8"],
  "Node.js": ["#4d9c30", "#83cd5c"],
  Express: ["#c49817", "#edcc58"],
  PostgreSQL: ["#336791", "#72a9d5"],
  Supabase: ["#209e6e", "#3ecf8e"],
  MongoDB: ["#419b35", "#6ac45d"],
  Prisma: ["#6353b7", "#b4a3ff"],
  "Git & GitHub": ["#8055c4", "#ba94f3"],
  Vercel: ["#5373c4", "#91adf4"],
  Postman: ["#ff6c37", "#ff926d"],
  Razorpay: ["#3377e0", "#76a9fa"],
  Cloudinary: ["#478bdb", "#8bbdff"],
};

export default function SkillsSection() {
  const { activeSection } = useNavigation();

  return (
    <section
      className={`section ${activeSection === "skills" ? "is-current" : ""}`}
      id="skills"
    >
      <div className="section-head">
        <h2 className="title">
          <span className="section-number">03 /</span>Tools of the trade
        </h2>
      </div>
      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.label}>
            <span className="skill-category">{group.label}</span>
            <div className="tags">
              {group.items.map((item) => (
                <span
                  className="tag"
                  key={item}
                  style={
                    {
                      "--tech-color": technologyColors[item]?.[0] ?? "#5576c9",
                      "--tech-dark": technologyColors[item]?.[1] ?? "#91b0ff",
                    } as CSSProperties
                  }
                >
                  <i className={technologyIcons[item]} aria-hidden="true">
                    {!technologyIcons[item] && <Code2 className="ui-icon" size={13} />}
                  </i>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
