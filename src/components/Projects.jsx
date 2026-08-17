import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";

const gradients = [
  "from-emerald-500/30 to-blue-600/20",
  "from-teal-500/30 to-emerald-600/20",
  "from-blue-500/30 to-teal-500/20",
  "from-emerald-500/30 to-teal-600/20",
  "from-teal-500/30 to-blue-600/20",
  "from-blue-500/30 to-emerald-600/20",
];

export default function Projects() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-28">
      <h2 className="mb-16 text-center font-display text-3xl font-bold">
        My Work
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl glass transition-colors hover:border-accent/50"
          >
            <div
              className={`flex h-40 items-center justify-center bg-gradient-to-br ${gradients[i % gradients.length]} font-display text-2xl font-semibold text-white/90`}
            >
              {project.title}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="flex-1 text-sm text-muted">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-accent-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-accent"
                >
                  <HiOutlineExternalLink /> Live
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-accent"
                >
                  <FiGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
