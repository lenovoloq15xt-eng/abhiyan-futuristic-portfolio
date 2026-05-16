import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const Loader=()=>{const[loading,setLoading]=useState(true);useEffect(()=>{const t=setTimeout(()=>setLoading(false),900);return()=>clearTimeout(t)},[]);return <AnimatePresence>{loading&&<motion.div className="fixed inset-0 z-[100] grid place-items-center bg-void" exit={{opacity:0}}><div className="text-xl font-black tracking-[.28em] text-white">ABHIYAN</div></motion.div>}</AnimatePresence>};
export default Loader;
