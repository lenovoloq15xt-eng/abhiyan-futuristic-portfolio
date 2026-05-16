import { motion, useScroll, useSpring } from "framer-motion";
const ScrollProgress=()=>{const{scrollYProgress}=useScroll();const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:24});return <motion.div className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-neon via-violet to-fuchsia-400" style={{scaleX}}/>};
export default ScrollProgress;
