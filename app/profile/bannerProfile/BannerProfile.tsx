"use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
//
// const BannerProfile = () => {
//   const container = useRef(null);
//
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end start"],
//   });
//
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   return (
//     <div
//       ref={container}
//       className="w-full h-screen overflow-hidden relative flex items-center justify-center"
//     >
//       <div className="w-full h-full flex flex-col items-center justify-between px-4 pt-24 pb-20 md:pb-10 gap-4 text-center z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg">
//         <h1 className="font-medium lg:text-4xl text-lg tracking-wide backdrop-blur-2xl border border-purple-400 shadow-2xl p-4 rounded-2xl">
//           <span className="text-purple-400">7</span> Years of Leather
//           Craftsmanship
//         </h1>
//         <p className="font-medium lg:text-lg md:w-1/2 backdrop-blur-2xl border border-purple-400 shadow-2xl p-4 rounded-2xl">
//           Leather CraftsMan, Bespoke Luxury Goods, Handmade Prototypes, Artisan
//           fine leatherwork Leather CraftsMan, Bespoke Luxury Goods, Handmade
//           Prototypes, Artisan fine leatherwork Leather CraftsMan, Bespoke Luxury
//           Goods, Handmade Prototypes, Artisan fine leatherwork Leather
//           CraftsMan, Bespoke Luxury Goods, Handmade Prototypes, Artisan fine
//           leatherwork
//         </p>
//       </div>
//       <motion.img
//         style={{ y }}
//         className="w-full h-full lg:aspect-video object-cover object-center"
//         src="https://res.cloudinary.com/dhadoo9ui/image/upload/v1777129245/PXL_20260408_094221616.RAW-02.ORIGINAL_v0vzvc.jpg"
//       />
//     </div>
//   );
// };
//

import { CldImage } from "next-cloudinary";

// export default BannerProfile;
const BannerProfile = () => {
  return (
    <div className="w-full h-auto p-5 md:p-10">
      <div className="rounded-2xl w-full h-auto md:p-20 md:gap-20 p-5 flex items-center justify-between gap-5 flex-col md:flex-row bg-zinc-700">
        <CldImage
          alt="avatar"
          width={1200}
          height={1600}
          sizes="25vw"
          loading="lazy"
          className="object-center object-cover rounded-2xl md:w-2/5"
          src="PXL_20260408_094221616.RAW-02.ORIGINAL_v0vzvc"
        />
        <div className="w-full h-full flex items-start justify-center flex-col md:w-3/5 md:pt-20 gap-4">
          <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <span className="text-purple-400">L</span>eather Craftsman &{" "}
            <span className="text-purple-400">W</span>eb Developer
            <span className="text-purple-400">.</span>
          </h2>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance">
            <span className="text-purple-400">H</span>i, I am Don Dinh
            <span className="text-purple-400">.</span>
          </h1>
          <p className="md:leading-8 font-light leading-6 not-first:mt-6 md:text-lg">
            <span className="text-purple-400">I</span>&nbsp; craft leather goods
            for those who appreciate unique values where they can find a piece
            of their own personality in every product
            <span className="text-purple-400">.</span>
            <br />
            <br />
            <span className="text-purple-400">F</span>or me, the most important
            thing is creating &quot;real&quot; items: simple, durable, and free
            from unnecessary details that distract from the core essence. I work
            with patience and absolute precision, ensuring every hand-sewn
            stitch is perfectly placed to create a product that lasts a lifetime
            <span className="text-purple-400">.</span>
            <br />
            <br />
            <span className="text-purple-400">W</span>
            hether it is a bespoke wallet or a handcrafted bag, my core mission
            remains the same: creating craftwork with depth, authenticity, and
            understated elegance
            <span className="text-purple-400">.</span>
            <br />
            <br />
            <p className="mt-6 border-l-2 pl-6 italic">
              <span className="text-purple-400">A</span>
              nd when I am not in the leather workshop, I trade my awl for a
              keyboard. As a web developer, I build technical solutions with the
              same meticulousness and rigorous structure that I bring to every
              piece of handcrafted leather
              <span className="text-purple-400">.</span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerProfile;
