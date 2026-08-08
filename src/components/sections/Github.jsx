import { useEffect, useState } from "react";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../icons/BrandIcons";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

const isConfigured =
  profile.githubUsername && profile.githubUsername !== "YOUR_GITHUB_USERNAME";

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState(isConfigured ? "loading" : "unconfigured");

  useEffect(() => {
    if (!isConfigured) return;

    fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub request failed");
        return res.json();
      })
      .then((data) => {
        setRepos(Array.isArray(data) ? data.slice(0, 6) : []);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="github" className="section-container py-24">
      <SectionHeader number="04" label="GITHUB" title="Explore My Code" />

      {status === "unconfigured" && (
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <GithubIcon className="mx-auto mb-4 text-text-muted" size={32} />
          <p className="text-text-secondary">Visit my GitHub to explore my repositories.</p>
        </div>
      )}

      {status === "loading" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-xl border border-border bg-card" />
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-text-secondary">Visit my GitHub to explore my repositories.</p>
        </div>
      )}

      {status === "ready" && repos.length === 0 && (
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-text-secondary">No public repositories to show yet.</p>
        </div>
      )}

      {status === "ready" && repos.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-start justify-between">
                <p className="font-medium text-text">{repo.name}</p>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-text-muted transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-text-muted">
                {repo.description || "No description provided."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Button
          as="a"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <GithubIcon size={16} /> View GitHub Profile
        </Button>
      </div>
    </section>
  );
}
