import { HiAcademicCap } from "react-icons/hi2";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-28">
      <h2 className="mb-16 text-center font-display text-3xl font-bold">
        Academic Journey
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
        <div className="absolute left-4 top-0 h-full w-px bg-border md:hidden" />

        <div className="space-y-10">
          {education.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row md:items-center ${
                item.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full glass text-accent md:left-1/2">
                <HiAcademicCap className="text-base" />
              </div>

              <div className="w-full pl-14 md:w-1/2 md:pl-0 md:px-10">
                <div className="rounded-2xl glass p-6 transition-colors hover:border-accent/50">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.degree}</p>
                  <p className="mt-3 text-sm font-medium text-accent-2">{item.detail}</p>
                </div>
              </div>

              <div className="hidden w-1/2 md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
