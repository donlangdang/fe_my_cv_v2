"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BannerProfile = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={container} className="w-full h-screen overflow-hidden relative">
      <div className="w-full h-full flex flex-col items-center justify-between px-4 pt-24 pb-20 md:pb-10 gap-4 text-center z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg">
        <h1 className="font-medium lg:text-4xl text-lg tracking-wide backdrop-blur-2xl border border-purple-400 shadow-2xl p-4 rounded-2xl">
          <span className="text-purple-400">7</span> Years of Leather
          Craftsmanship
        </h1>
        <p className="font-medium lg:text-lg md:w-1/2 backdrop-blur-2xl border border-purple-400 shadow-2xl p-4 rounded-2xl">
          Leather CraftsMan, Bespoke Luxury Goods, Handmade Prototypes, Artisan
          fine leatherwork Leather CraftsMan, Bespoke Luxury Goods, Handmade
          Prototypes, Artisan fine leatherwork Leather CraftsMan, Bespoke Luxury
          Goods, Handmade Prototypes, Artisan fine leatherwork Leather
          CraftsMan, Bespoke Luxury Goods, Handmade Prototypes, Artisan fine
          leatherwork
        </p>
      </div>
      <motion.img
        style={{ y }}
        className=" w-full h-full lg:aspect-video object-cover object-center"
        src="/bannerHome.jpg"
      />
    </div>
  );
};

export default BannerProfile;
