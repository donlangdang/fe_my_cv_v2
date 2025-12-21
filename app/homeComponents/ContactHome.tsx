"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  EnvelopeIcon,
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  ThreadsLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const ContactHome = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  return (
    <div ref={container} className="w-full h-screen overflow-hidden relative">
      <div className="w-full lg:w-1/2 px-6 flex flex-col items-center justify-center gap-10 lg:gap-14 z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg">
        <div className="flex items-center w-full justify-between">
          <Link href="#">
            <FacebookLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="#">
            <InstagramLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="#">
            <LinkedinLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="#">
            <GithubLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="">
            <ThreadsLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
        </div>
        <h2 className="font-bold text-2xl lg:text-4xl tracking-widest">
          <span className="text-purple-400">C</span>ontact Me
          <span className="text-purple-400">.</span>
        </h2>
        <div className="w-full flex items-center justify-between gap-4">
          <Input
            className="backdrop-blur-md w-1/2 border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
            placeholder="First name"
          />
          <Input
            className="backdrop-blur-md w-1/2 border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
            placeholder="Last name"
          />
        </div>
        <Input
          className="backdrop-blur-md w-full border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
          placeholder="Email"
        />
        <Input
          className="backdrop-blur-md w-full border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
          placeholder="How can I help !"
        />
        <Textarea
          className="backdrop-blur-md w-full border border-purple-400 placeholder:text-zinc-900 placeholder:text-sm placeholder:font-medium"
          placeholder="Message"
        />
        <Button
          size="lg"
          className="bg-purple-400 cursor-pointer hover:bg-purple-300 text-zinc-900 text-sm font-medium"
        >
          Submit
        </Button>
        <div className="w-full h-auto flex flex-col gap-6">
          <div className="flex items-center gap 2">
            <MapPinIcon />
            <p className="text-xs">
              Ea Ktur Commune, Cu Kuin District, Dak Lak Province, Vietnam
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <p className="text-xs">+84 846414579</p>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon />
            <p className="text-xs">congdondev@gmail.com</p>
          </div>
        </div>
      </div>
      <motion.img
        style={{ y }}
        className="w-full h-full lg:aspect-video object-cover object-center"
        src="https://res.cloudinary.com/dhadoo9ui/image/upload/v1765121663/PXL_20251202_002612211.RAW-02.ORIGINAL_zij5dq.jpg"
      />
    </div>
  );
};

export default ContactHome;
