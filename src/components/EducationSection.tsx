"use client";

import { useNavigation } from "@/context/NavigationContext";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const { activeSection } = useNavigation();

  return (
    <section
      className={`section ${activeSection === "education" ? "is-current" : ""}`}
      id="education"
    >
      <div className="section-head">
        <h2 className="title">
          <span className="section-number">05 /</span>Education
        </h2>
      </div>
      <div className="job">
        <div className="job-icon" aria-hidden="true">
          <GraduationCap className="ui-icon" size={18} />
        </div>
        <div>
          <div className="job-header">
            <h3>Maharishi University of Information Technology</h3>
            <span className="date mono">2023 — 2027</span>
          </div>
          <div className="job-role">B.Tech · Computer Science · Noida</div>
          <p>
            Expected graduation in 2027. Coursework in data structures, full
            stack development, and object-oriented programming.
          </p>
        </div>
      </div>
    </section>
  );
}
