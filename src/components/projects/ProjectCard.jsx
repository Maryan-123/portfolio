import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../icons/BrandIcons";
import TechTag from "../ui/TechTag";

export default function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${
        featured ? "" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden bg-card-elevated">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-text-muted">
            Screenshot coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-text">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p>

        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <GithubIcon size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              Live Demo
            </a>
          )}
          {project.caseStudy && (
            <Link
              to={`/projects/${project.slug}`}
              className="group/link ml-auto flex items-center gap-1 text-sm font-medium text-accent"
            >
              Case Study
              <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
