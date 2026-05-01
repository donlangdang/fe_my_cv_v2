"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CldImage } from "next-cloudinary";
import ContactMeReSend from "@/components/contactMe/ContactMeReSend";

const MotionCldImage = motion.create(CldImage);

const ContactHome = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  return (
    <div ref={container} className="w-full h-screen overflow-hidden relative">
      <ContactMeReSend />
      <MotionCldImage
        style={{ y }}
        alt="contactMe"
        fill
        sizes="100vw"
        className="w-full h-full lg:aspect-video object-cover object-center"
        src="PXL_20251202_002612211.RAW-02.ORIGINAL_zij5dq"
        loading="lazy"
      />
    </div>
  );
};

export default ContactHome;

//TODO: làm lại cái này nha không ổn lắm nha
