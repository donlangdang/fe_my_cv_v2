"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HomeBannerImage = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const sc = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  return (
    <div ref={container} className="w-full h-screen overflow-hidden relative">
      <div className="w-full flex flex-col items-center justify-center gap-4 text-center z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg">
        <span className="text-7xl font-bold tracking-widest">
          I<span className="text-purple-400">&apos;</span>M
        </span>
        <h1 className="text-7xl font-bold tracking-widest">
          DON DINH<span className="text-purple-400">.</span>
        </h1>
        <div className="w-2/3 lg:w-1/3 h-0.5 bg-purple-400" />
        <p className="font-medium lg:text-lg">
          Leather CraftsMan, Bespoke Luxury Goods, Handmade Prototypes, Artisan
          fine leatherwork
        </p>
      </div>
      <motion.img
        style={{ y, scale: sc }}
        className=" w-full h-full lg:aspect-video object-cover object-center"
        src="/bannerHome.jpg"
      />
    </div>
  );
};

export default HomeBannerImage;
