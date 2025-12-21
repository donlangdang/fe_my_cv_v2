"use client";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="h-0.5 bg-amber-50 fixed bottom-0 left-0 z-50 w-full origin-bottom-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
