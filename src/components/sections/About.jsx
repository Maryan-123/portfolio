import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <SectionHeader number="01" label="ABOUT" title="More Than Just Code." />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed text-text-secondary"
        >
          {profile.about}
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-6 rounded-xl border border-border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-text-muted">Name</p>
          <p className="mt-1 text-text">{profile.name}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-text-muted">Location</p>
          <p className="mt-1 text-text">{profile.location}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-text-muted">Email</p>
          <p className="mt-1 text-text">{profile.email}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-text-muted">Availability</p>
          <p className="mt-1 text-success">{profile.available ? "Available" : "Unavailable"}</p>
        </div>
      </div>
    </section>
  );
}
