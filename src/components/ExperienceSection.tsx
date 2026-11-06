"use client";

import { useNavigation } from "@/context/NavigationContext";
import { usePathname } from "next/navigation";

export default function ExperienceSection() {
  const { activeSection } = useNavigation();
  const pathname = usePathname();
  const SectionTitle = pathname === "/experience" ? "h1" : "h2";

  return (
    <section
      className={`section ${activeSection === "experience" || pathname === "/experience" ? "is-current" : ""}`}
      id="experience"
    >
      <div className="section-head">
        <SectionTitle className="title">
          <span className="section-number">02 /</span>Where I’ve worked
        </SectionTitle>
        <span className="mono muted">BUILDING IN THE REAL WORLD</span>
      </div>
      <div className="timeline">
        <article className="job">
          <div className="job-icon">S.</div>
          <div>
            <div className="job-header">
              <h3>Sponso Pvt Ltd</h3>
              <span className="date mono">Jun 2026 — Present</span>
            </div>
            <div className="job-role">Full Stack Developer Intern · Remote</div>
            <p>
              Building production features across Next.js, Express, and Supabase.
              Connecting thoughtful interfaces to secure backend services.
            </p>
            <details>
              <summary>A closer look</summary>
              <ul>
                <li>RESTful APIs with JWT authentication and authorization.</li>
                <li>
                  Frontend integration, debugging, code reviews, and performance
                  optimization.
                </li>
                <li>Team delivery through Git branches and pull requests.</li>
              </ul>
            </details>
          </div>
        </article>

        <article className="job">
          <div className="job-icon">N.</div>
          <div>
            <div className="job-header">
              <h3>Navitas EduServices Pvt Ltd</h3>
              <span className="date mono">Mar 2026 — May 2026</span>
            </div>
            <div className="job-role">Full Stack Engineer Intern · New Delhi</div>
            <p>
              Delivered frontend UI and backend API features for the Global E-Marketing team, working across the stack in an Agile environment.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
