import { motion } from "framer-motion";
const SectionHeader=({eyebrow,title,copy})=><motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[.36em] text-neon">{eyebrow}</p><h2 className="text-4xl font-black tracking-tight text-white light:text-slate-950 md:text-6xl">{title}</h2>{copy&&<p className="mt-5 text-base leading-8 text-white/[.64] light:text-slate-600 md:text-lg">{copy}</p>}</motion.div>;
export default SectionHeader;
