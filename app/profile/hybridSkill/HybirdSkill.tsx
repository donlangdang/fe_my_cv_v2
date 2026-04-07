"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface SecondBannerType {
  imageBanner2: string;
  title: string;
}

const HybirdSkill = ({ imageBanner2, title }: SecondBannerType) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const positionY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <div ref={container} className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <motion.img
          style={{ y: positionY }}
          className="w-full h-full object-cover object-center"
          src={imageBanner2}
        />
        <div className="flex items-center justify-center gap-3 flex-col text-center w-3/4 lg:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg font-bold text-2xl lg:text-4xl tracking-widest">
          <h2>
            <span className="text-purple-400">{title[0]}</span>
            {title.slice(1)}
            <span className="text-purple-400">.</span>
          </h2>
          <div className="lg:w-96 w-70 h-0.5 bg-purple-400 " />
        </div>
      </div>
    </div>
  );
};

export default HybirdSkill;
