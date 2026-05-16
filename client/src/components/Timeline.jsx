import { timelineItems } from "../utils/fallbackData.js";
import SectionHeader from "./SectionHeader.jsx";
const Timeline=()=> <section className="bg-void px-5 py-24 light:bg-slate-50"><div className="mx-auto max-w-5xl"><SectionHeader eyebrow="Timeline" title="Progression through code and art" copy="A compact map of the milestones shaping Abhiyan's creative developer direction."/><div className="space-y-5">{timelineItems.map(i=><div key={i.title} className="glass rounded-[1.25rem] p-6"><span className="font-black text-neon">{i.year}</span><h3 className="mt-2 text-xl font-black text-white light:text-slate-950">{i.title}</h3><p className="mt-2 text-white/60 light:text-slate-600">{i.body}</p></div>)}</div></div></section>;
export default Timeline;
