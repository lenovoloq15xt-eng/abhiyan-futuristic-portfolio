import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../utils/api.js";
import { fallbackGallery } from "../utils/fallbackData.js";
import SectionHeader from "./SectionHeader.jsx";
const GallerySection=()=>{const[items,setItems]=useState(fallbackGallery);useEffect(()=>{api.get('/gallery').then(({data})=>setItems(data.length?data:fallbackGallery)).catch(()=>{})},[]);return <section id="gallery" className="bg-[#070707] px-5 py-24 light:bg-white"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Art Gallery" title="Sketches, digital art, and visual experiments" copy="A living archive of pencil studies, UI concepts, character explorations, and polished digital compositions."/><div className="masonry">{items.map((item,i)=><motion.div key={item._id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="group mb-4 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5"><img src={item.image} alt={item.title} className="w-full object-cover transition duration-700 group-hover:scale-110"/><div className="p-4"><p className="font-black text-white">{item.title}</p><p className="text-sm text-white/60">{item.category}</p></div></motion.div>)}</div></div></section>};
export default GallerySection;
