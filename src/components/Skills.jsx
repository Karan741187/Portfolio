import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { HiCode } from "react-icons/hi";
import { skills } from "../data/portfolioData";

const iconMap = {
  HTML: SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Python: SiPython,
  "C++": SiCplusplus,
  SQL: SiPostgresql,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  DSA: TbBinaryTree,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
};

const levelStyles = {
  Experienced: "text-accent",
  Intermediate: "text-accent-2",
  Beginner: "text-muted",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <h2 className="mb-16 text-center font-display text-3xl font-bold">
        Skills I Have
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl glass p-8"
          >
            <h3 className="mb-6 text-center font-display text-xl font-semibold">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {group.items.map((item) => {
                const Icon = iconMap[item.name] || HiCode;
                return (
                  <div key={item.name} className="flex items-start gap-3">
                    <Icon className="mt-0.5 shrink-0 text-xl text-white/80" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className={`text-xs ${levelStyles[item.level] || "text-muted"}`}>
                        {item.level}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
