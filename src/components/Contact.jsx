import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { contact } from "../data/portfolioData";

const methods = [
  {
    icon: HiOutlineMail,
    label: "Email",
    sub: "send a mail",
    href: `mailto:${contact.email}`,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    sub: "let's connect",
    href: contact.linkedin,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    sub: "check out my code",
    href: contact.github,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <h2 className="text-center font-display text-3xl font-bold">Get in Touch</h2>
      <p className="mx-auto mt-4 max-w-md text-center text-muted">
        ohh wow !! You made it through here — let's connect then 🤝
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {methods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl glass p-6 text-center transition-colors hover:border-accent/50"
            >
              <m.icon className="mx-auto mb-2 text-2xl text-accent" />
              <p className="font-semibold text-white">{m.label}</p>
              <p className="text-sm text-accent-2">{m.sub}</p>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="rounded-xl glass px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="rounded-xl glass px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="resize-none rounded-xl glass px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl border border-accent bg-accent/10 px-4 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
