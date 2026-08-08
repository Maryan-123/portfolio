import { motion } from "framer-motion";
import { journey } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";

export default function Journey() {
  return (
    <section className="section-container py-24">
      <SectionHeader number="06" label="JOURNEY" title="My Development Journey" />

      <div className="relative border-l border-border pl-8">
        {journey.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[2.28rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="text-xs font-mono text-accent">{item.year}</p>
            <h3 className="mt-1 font-semibold text-text">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
