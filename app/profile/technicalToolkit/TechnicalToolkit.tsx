"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface SecondBannerType {
  imageBanner2: string;
  title: string;
}

const TechnicalToolkit = ({ imageBanner2, title }: SecondBannerType) => {
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

          <div className="w-full h-auto backdrop-blur-md border border-purple-400 rounded-2xl p-5 md:p-15 shadow-2xl text-left md:w-2/3">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <span className="text-purple-400 font-medium">Frontend: </span>
                Next.Js, React, Tailwind CSS, TypeScript.
              </li>
              <li>
                <span className="text-purple-400 font-medium">
                  Backend & Tools:{" "}
                </span>
                Git, Django, ExpressJS, Node.Js.
              </li>
              <li>
                <span className="text-purple-400 font-medium">
                  Working environment:{" "}
                </span>
                Arch Linux, Sway, Neovim (LazyVim).
              </li>
              <li>
                <span className="text-purple-400 font-medium">Creative: </span>
                Lightroom.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalToolkit;
