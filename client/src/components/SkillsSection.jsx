import { useEffect, useState } from "react";
import api from "../utils/api.js";
import { fallbackSkills } from "../utils/fallbackData.js";
import SectionHeader from "./SectionHeader.jsx";
const SkillsSection=()=>{const[skills,setSkills]=useState(fallbackSkills);useEffect(()=>{api.get('/skills').then(({data})=>setSkills(data.length?data:fallbackSkills)).catch(()=>{})},[]);return <section id="skills" className="bg-[#070707] px-5 py-24 light:bg-white"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Skills" title="Hybrid craft stack" copy="The toolkit spans production code, visual design, sketching, and brand systems."/><div className="grid gap-4 md:grid-cols-2">{skills.map(s=><div key={s._id} className="glass rounded-[1.25rem] p-5"><div className="flex justify-between"><b className="text-white light:text-slate-950">{s.name}</b><span className="text-neon">{s.level}%</span></div><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-gradient-to-r from-neon to-violet" style={{width:`${s.level}%`}}/></div></div>)}</div></div></section>};
export default SkillsSection;
