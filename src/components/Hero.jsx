import { useState } from "react";
import { profile } from "../data/portfolioData";

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[auto_1fr]">
        <div className="flex justify-center">
          <div className="relative flex h-56 w-56 items-center justify-center md:h-64 md:w-64">
            {/* soft aurora glow behind the avatar */}
            <div className="absolute inset-0 m-auto h-[145%] w-[145%] rounded-[3rem] bg-gradient-to-br from-emerald-500/40 via-teal-500/25 to-blue-500/30 blur-3xl" />

            <div className="relative h-full w-full animate-float-slow rounded-[2.25rem] bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 p-[3px] shadow-[0_20px_60px_-15px_rgba(16,185,129,0.55)]">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[calc(2.25rem-3px)] bg-bg">
                {profile.avatarUrl && !imgFailed ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    onError={() => setImgFailed(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-display text-6xl font-bold text-gradient">
                    {initials}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up text-center md:text-left">
          <p className="glass mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white/80">
            {profile.greeting}
          </p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            {profile.name.split(" ").map((word, i) => (
              <span key={i} className={i === profile.name.split(" ").length - 1 ? "text-gradient" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-xl font-semibold text-white/90">{profile.role}</p>
          <p className="mt-2 text-muted">{profile.subrole}</p>
        </div>
      </div>
    </section>
  );
}
