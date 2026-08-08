import { GraduationCap } from "lucide-react";
import { education } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";

export default function Education() {
  return (
    <section className="section-container py-24">
      <SectionHeader number="07" label="EDUCATION" title="Education" />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="flex gap-4 rounded-xl border border-border bg-card p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={18} />
            </div>
            <div>
              <p className="font-semibold text-text">{edu.institution}</p>
              <p className="mt-1 text-sm text-text-secondary">{edu.program}</p>
              <p className="mt-2 text-xs text-text-muted">
                {edu.location} · {edu.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
