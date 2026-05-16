import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { stiffness: 260, damping: 28 });
  const y = useSpring(cursorY, { stiffness: 260, damping: 28 });

  useEffect(() => {
    const move = (event) => {
      setVisible(true);
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[90] hidden h-9 w-9 rounded-full border border-neon/70 mix-blend-screen shadow-glow lg:block"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    />
  );
};

export default CustomCursor;

