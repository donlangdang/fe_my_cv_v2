"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface SecondBannerType {
  imageBanner2: string;
  title: string;
}

const TheJourney = ({ imageBanner2, title }: SecondBannerType) => {
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
        <div className="flex items-center justify-center gap-8 flex-col text-center w-3/4 lg:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg ">
          <h2 className="text-4xl font-extrabold tracking-wider text-balance">
            <span className="text-purple-400">{title[0]}</span>
            {title.slice(1)}
            <span className="text-purple-400">.</span>
          </h2>
          <div className="lg:w-96 w-70 h-0.5 bg-purple-400 " />
          <div className="w-full h-auto backdrop-blur-md border border-purple-400 rounded-2xl p-5 md:p-15 shadow-2xl">
            <p className="md:leading-8 font-light leading-6 not-first:mt-6 md:text-xl text-left">
              <span className="text-purple-400">M</span>y story began in 2019
              with a simple piece of leather and a desire to create something
              lasting. Over the past 7 years, I have dedicated myself to
              mastering the art of hand-sewn leather craft, focusing on the
              patience and precision that only manual work can provide.
              <span className="text-purple-400">.</span>
              <br />
              <br />
              <span className="text-purple-400">I</span>n 2024, driven by
              curiosity and a desire to learn something new in my free time, I
              started diving into computer science. After completing
              Harvard&apos;s CS50x, I taught myself web development. This
              website is the result of that curiosity built with Next.js and
              TypeScript to showcase my craft
              <span className="text-purple-400">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheJourney;
