"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import ProductAndProjectLink from "./productAndProjectLink/ProductAndProjectLink";
import Image from "next/image";

const ProductAndProject = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // const positionY = useTransform(scrollYProgress, [0, 0.1], ["100%", "0%"]);
  const positionScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div ref={container} className="relative w-full h-auto overflow-hidden">
      {/* <motion.img */}
      {/*   style={{ y: positionY, scale: positionScale }} */}
      {/*   className='w-full h-full object-cover object-center' */}
      {/*   src='bannerHome.jpg' */}
      {/* /> */}
      <motion.div style={{ scale: positionScale }}>
        <div className="flex items-center justify-center gap-3 flex-col font-bold text-2xl lg:text-4xl tracking-widest w-full h-auto py-30 text-center">
          <div className="w-full">
            <span className="text-purple-400">P</span>roduct And Projects
            <span className="text-purple-400">.</span>
          </div>
          <div className="w-1/2 lg:w-1/3 h-0.5 bg-purple-400 " />
        </div>
        <p className="px-6 py-6 md:px-16 text-xl font-semibold tracking-wide lg:text-2xl">
          <span className="text-purple-400 lg:text-sm">●</span> Products
          <span className="text-purple-400">.</span>
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
          <ProductAndProjectLink />
        </div>
      </motion.div>
      {/* làm xem thêm theo dòng thời gian ở đây  */}
      <div className="w-full text-center">See More in time line</div>
      <p className="px-6 py-6 md:px-16 text-xl font-semibold tracking-wide lg:text-2xl">
        <span className="text-purple-400 lg:text-sm">●</span> Projects
        <span className="text-purple-400">.</span>
      </p>
      <motion.div
        className="w-full h-auto px-12 md:px-20 font-medium tracking-wide lg:text-xl flex items-start justify-center flex-col gap-6"
        initial={{ x: "-100%", opacity: 0 }}
        // animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <p>
          <span className="text-purple-400 lg:text-xs">●</span> making wed with
          nextjs and django
        </p>

        <p>
          <span className="text-purple-400 lg:text-xs">●</span> Making this
          wedsite with reactjs and react router
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-6 flex-col font-bold text-2xl lg:text-4xl tracking-widest w-full h-auto py-30 text-center">
        <div className="w-full">
          <span className="text-purple-400">C</span>ertificate
          <span className="text-purple-400">.</span>
        </div>
        <div className="w-1/2 lg:w-1/5 h-0.5 bg-purple-400 " />
        <div className="px-4 lg:px-32 w-full">
          <div className="relative w-full h-auto aspect-640/495">
            <Image
              sizes=""
              alt="CS50x"
              loading="eager"
              src="/CS50x.png"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAndProject;
//TODO: làm thêm nút bấm xem thêm theo dòng thời gian
//TODO: làm thêm phần project làm lại animation cái này nha
