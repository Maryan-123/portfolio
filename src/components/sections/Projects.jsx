import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-container py-24">
      <SectionHeader
        number="03"
        label="PROJECTS"
        title="Selected Work"
        subtitle="A selection of projects where design, functionality and problem-solving come together."
      />

      {featuredProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} featured />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-text-muted">Projects coming soon.</p>
      )}

      {otherProjects.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-text">More Projects</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
