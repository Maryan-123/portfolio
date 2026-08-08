import { motion } from "framer-motion";
import { Code, Layers, Smartphone, Plug } from "lucide-react";
import { services } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";

const ICONS = [Code, Layers, Smartphone, Plug];

export default function Services() {
  return (
    <section className="section-container py-24">
      <SectionHeader number="05" label="SERVICES" title="What I Can Build" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-text">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
