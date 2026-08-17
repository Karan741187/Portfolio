import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { about } from "../data/portfolioData";

const iconMap = {
  LeetCode: SiLeetcode,
  GFG: SiGeeksforgeeks,
  GitHub: SiGithub,
};

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <h2 className="mb-12 text-center font-display text-3xl font-bold">
        {about.heading}
      </h2>

      <div className="overflow-hidden rounded-2xl glass shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        <div className="space-y-4 p-6 font-mono text-sm leading-relaxed text-muted sm:p-8">
          <p>
            <span className="text-accent">aboutMe</span>{" "}
            <span className="text-white/60">(main)</span>{" "}
            <span className="text-accent-2">$</span>{" "}
            {about.paragraphs[0]}
          </p>
          {about.paragraphs.slice(1).map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <p className="pt-2 text-accent">
            you % <span className="text-white/80">cd ~/profiles</span>
          </p>
          <p className="text-accent">
            you/profiles % <span className="text-white/80">ls</span>
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {about.profiles.map((p) => {
              const Icon = iconMap[p.label];
              return (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-white/90 transition-colors hover:border-accent hover:text-accent"
                >
                  {Icon && <Icon />} {p.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
