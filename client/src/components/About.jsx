import { motion } from "framer-motion";
import { Brush, Layers3, Rocket, TerminalSquare } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { fadeUp, stagger } from "../animations/variants.js";

const cards = [
  {
    icon: TerminalSquare,
    title: "Engineering",
    copy: "Full-stack systems with clean APIs, reusable components, and production-minded structure."
  },
  {
    icon: Brush,
    title: "Sketchcraft",
    copy: "Graphite studies, character shapes, and expressive marks that feed the visual language."
  },
  {
    icon: Layers3,
    title: "Design",
    copy: "Interfaces built around hierarchy, rhythm, micro-interactions, and a strong first impression."
  },
  {
    icon: Rocket,
    title: "Experience",
    copy: "Motion and responsiveness tuned so pages feel alive without getting in the way."
  }
];

const About = () => (
  <section id="about" className="relative overflow-hidden bg-void px-5 py-24 light:bg-slate-50">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        eyebrow="About"
        title="A developer with an artist's nervous system"
        copy="Abhiyan treats code, sketches, and digital interfaces as parts of the same practice: observe deeply, simplify carefully, and make the final work feel inevitable."
      />
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-[1.75rem] p-8"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-neon/15 blur-3xl" />
          <h3 className="text-3xl font-black text-white light:text-slate-950">Code with texture. Art with structure.</h3>
          <p className="mt-5 leading-8 text-white/[0.64] light:text-slate-600">
            Abhiyan builds modern web products with a visual artist's sense of contrast and a developer's respect for maintainable systems.
            The work moves from pencil thumbnails to polished React interfaces, from backend data models to glowing motion details.
          </p>
          <p className="mt-5 leading-8 text-white/[0.64] light:text-slate-600">
            The philosophy is simple: every interaction should have a reason, every composition should guide the eye, and every project should
            carry a little evidence that a real person cared about the finish.
          </p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {cards.map(({ icon: Icon, title, copy }) => (
            <motion.div
              variants={fadeUp}
              key={title}
              className="glass group rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-neon/40 hover:shadow-glow"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-neon/10 text-neon transition group-hover:bg-neon group-hover:text-slate-950">
                <Icon size={22} />
              </div>
              <h4 className="text-xl font-black text-white light:text-slate-950">{title}</h4>
              <p className="mt-3 text-sm leading-7 text-white/[0.58] light:text-slate-600">{copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
