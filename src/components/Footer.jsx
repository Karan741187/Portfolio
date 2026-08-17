import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
