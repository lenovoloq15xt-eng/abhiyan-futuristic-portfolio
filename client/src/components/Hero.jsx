import { motion } from "framer-motion";
import { ArrowDown, Code2, PenTool, Sparkles } from "lucide-react";

const Hero = () => (
  <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-void px-5 pt-28 light:bg-slate-50">
    <div className="absolute inset-0 bg-aurora bg-[length:160%_160%] opacity-70 animate-shimmer" />
    <div className="absolute inset-0 bg-cyber-grid bg-[size:44px_44px] opacity-30" />
    {Array.from({ length: 32 }).map((_, i) => <motion.span key={i} className="absolute h-1 w-1 rounded-full bg-neon shadow-glow" style={{ left: `${(i * 29) % 100}%`, top: `${(i * 47) % 100}%` }} animate={{ y: [0, -30, 0], opacity: [.2, 1, .2] }} transition={{ repeat: Infinity, duration: 4 + (i % 5) }} />)}
    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/[0.74] backdrop-blur"><Sparkles size={16} className="text-neon" /> Creative developer system online</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-black leading-[0.96] tracking-tight text-white light:text-slate-950 md:text-7xl lg:text-8xl">Hi, I'm <span className="cinematic-text animate-shimmer">Abhiyan</span></motion.h1>
        <p className="mt-6 max-w-2xl text-xl font-semibold text-white/80 light:text-slate-700 md:text-2xl">Programmer - Sketch Artist - Digital Designer</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.58] light:text-slate-600 md:text-lg">Building cinematic interfaces with the precision of code and the texture of hand-drawn imagination.</p>
        <div className="mt-9 flex flex-wrap gap-4"><a href="#projects" className="rounded-full bg-neon px-6 py-3 font-bold text-slate-950 shadow-glow">View Projects</a><a href="#gallery" className="rounded-full border border-violet/60 px-6 py-3 font-bold text-white light:text-slate-950">Explore Art</a><a href="#contact" className="rounded-full border border-white/15 px-6 py-3 font-bold text-white light:text-slate-950">Contact Me</a></div>
      </div>
      <div className="glass relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] p-5"><img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80" alt="Creative desk" className="h-full w-full rounded-[1.4rem] object-cover" /><div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">{[[Code2,"Code"],[PenTool,"Sketch"],[Sparkles,"Design"]].map(([Icon,label])=><div key={label} className="rounded-2xl border border-white/10 bg-black/35 p-3 text-center backdrop-blur"><Icon className="mx-auto mb-2 text-neon" size={18}/><span className="text-xs font-bold text-white">{label}</span></div>)}</div></div>
    </div><a href="#about" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60"><ArrowDown className="animate-bounce" /></a>
  </section>
);
export default Hero;
