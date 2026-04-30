"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react";
import LinkSocialMedia from "@/components/linkSocialMedia/LinkSocialMedia";
import ContactMeReSend from "@/components/contactMe/ContactMeReSend";

const ContactMe = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  return (
    <div ref={container} className="w-full h-screen overflow-hidden relative">
      <ContactMeReSend />
      <motion.img
        style={{ y }}
        className="w-full h-full lg:aspect-video object-cover object-center"
        src="https://res.cloudinary.com/dhadoo9ui/image/upload/v1765121663/PXL_20251202_002612211.RAW-02.ORIGINAL_zij5dq.jpg"
      />
    </div>
  );
};

export default ContactMe;
