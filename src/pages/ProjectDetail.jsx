import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/icons/BrandIcons";
import { projects } from "../data/projects";
import TechTag from "../components/ui/TechTag";
import Button from "../components/ui/Button";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) return <Navigate to="/404" replace />;

  const { caseStudy } = project;

  return (
    <div className="section-container py-32">
      <Link
        to="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <p className="text-xs font-medium uppercase tracking-wide text-accent">{project.category}</p>
      <h1 className="mt-2 text-3xl font-bold text-text sm:text-4xl">{project.name}</h1>
      <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.github && (
          <Button as="a" href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary">
            <GithubIcon size={16} /> GitHub Repository
          </Button>
        )}
        {project.demo && (
          <Button as="a" href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Live Website
          </Button>
        )}
      </div>

      <div className="relative mt-12 aspect-video overflow-hidden rounded-xl border border-border bg-card-elevated">
        {project.image ? (
          <img src={project.image} alt={`${project.name} screenshot`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-text-muted">
            Screenshots coming soon
          </div>
        )}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <DetailBlock title="Project Overview" text={caseStudy.overview} />
        <DetailBlock title="Problem" text={caseStudy.problem} />
        <DetailBlock title="Solution" text={caseStudy.solution} />

        <div>
          <h2 className="mb-3 text-xl font-semibold text-text">Main Features</h2>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <DetailBlock title="Challenges" text={caseStudy.challenges} />
        <DetailBlock title="What I Learned" text={caseStudy.learned} />

        <div>
          <h2 className="mb-3 text-xl font-semibold text-text">Future Improvements</h2>
          <ul className="space-y-2">
            {caseStudy.future.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-10 text-center">
        <Link to="/#projects" className="text-sm font-medium text-accent hover:underline">
          Explore More Projects →
        </Link>
      </div>
    </div>
  );
}

function DetailBlock({ title, text }) {
  return (
    <div>
      <h2 className="mb-3 text-xl font-semibold text-text">{title}</h2>
      <p className="text-sm leading-relaxed text-text-secondary">{text}</p>
    </div>
  );
}
