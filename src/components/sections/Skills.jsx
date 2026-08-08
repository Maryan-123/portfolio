import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { skillCategories } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <SectionHeader number="02" label="SKILLS" title="Technologies I Work With" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, ci) =>
          cat.skills.map((skill, si) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (ci * cat.skills.length + si) * 0.04 }}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card-elevated text-accent transition-colors group-hover:bg-accent/10">
                <Code2 size={18} />
              </div>
              <p className="mt-4 font-medium text-text">{skill}</p>
              <p className="mt-1 text-xs text-text-muted">{cat.category}</p>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
