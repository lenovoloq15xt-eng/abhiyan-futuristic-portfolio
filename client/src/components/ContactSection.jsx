import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Palette, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../utils/api.js";
import SectionHeader from "./SectionHeader.jsx";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
  { icon: Palette, label: "Behance", href: "https://behance.net/" }
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || form.message.trim().length < 10) {
      toast.error("Please enter a valid name, email, and message.");
      return;
    }

    try {
      setLoading(true);
      await api.post("/contact", form);
      toast.success("Message transmitted.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Message could not be sent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#070707] px-5 py-24 light:bg-white">
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Start a project signal"
          copy="For collaborations, commissions, product ideas, and art-forward web builds."
        />
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[1.75rem] p-8"
          >
            <Mail className="mb-5 text-neon" size={34} />
            <h3 className="text-3xl font-black text-white light:text-slate-950">Tell Abhiyan what you're building.</h3>
            <p className="mt-4 leading-8 text-white/60 light:text-slate-600">
              Share the spark, the sketch, the product, or the half-formed idea that needs a sharper visual system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-white transition hover:-translate-y-1 hover:border-neon hover:text-neon light:text-slate-950"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[1.75rem] p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/70 light:text-slate-700">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/30 light:bg-white light:text-slate-950"
                  placeholder="Abhiyan admirer"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/70 light:text-slate-700">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  className="focus-ring w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/30 light:bg-white light:text-slate-950"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-white/70 light:text-slate-700">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows="7"
                className="focus-ring w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/30 light:bg-white light:text-slate-950"
                placeholder="A few details about the project, artwork, or idea..."
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-black text-slate-950 shadow-glow transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending" : "Send Message"} <Send size={17} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
