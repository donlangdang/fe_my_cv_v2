"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SecondBannerType {
  imageBanner2: string;
  title: string;
}

const CallToAction = ({ imageBanner2, title }: SecondBannerType) => {
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
          <div className="flex flex-col gap-8 w-full h-auto backdrop-blur-md border border-purple-400 rounded-2xl p-5 md:p-15 shadow-2xl text-left md:w-2/3">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-wide">
              <span className="text-purple-400">L</span>et
              <span className="text-purple-400">’</span>s Craft Your Story
              <span className="text-purple-400">.</span>
            </h3>
            <p className="md:leading-8 font-light leading-6 md:text-xl text-left">
              <span className="text-purple-400">E</span>very piece of leather
              has a soul, and every design has a purpose. If you are looking for
              a bespoke item that is uniquely yours, I am here to bring that
              vision to life<span className="text-purple-400">.</span>
            </p>

            <Link className="w-full h-auto" href="/contact-me">
              <Button
                size="lg"
                className="bg-purple-400 w-full cursor-pointer hover:bg-purple-300 text-zinc-900 text-sm font-medium"
              >
                Start Your Bespoke Order
              </Button>
            </Link>
            <div className="grid grid-cols-2 w-full md:1/3 justify-between gap-4">
              <Link
                href="https://www.facebook.com/share/19zGeq2UDB/"
                target="_blank"
                className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
              >
                <FacebookLogoIcon
                  size={20}
                  className="hover:text-purple-400 cursor-pointer"
                />
                Đôn Đinh
              </Link>
              <Link
                href="https://www.instagram.com/bodon0211?igsh=anpvMTZwMXV1d3Vm"
                className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
                target="_blank"
              >
                <InstagramLogoIcon
                  size={20}
                  className="hover:text-purple-400 cursor-pointer"
                />
                @bodon0211
              </Link>

              <Link
                className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
                href="https://www.instagram.com/bun_leather?igsh=a3pybzg2eWRoZmJt"
                target="_blank"
              >
                <InstagramLogoIcon
                  size={20}
                  className="hover:text-purple-400 cursor-pointer"
                />
                @bun_leather
              </Link>
              <Link
                className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
                href="https://github.com/donlangdang"
                target="_blank"
              >
                <GithubLogoIcon
                  size={20}
                  className="hover:text-purple-400 cursor-pointer"
                />
                donlangdang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

//TODO: if you want to order custom product please contact me or email me with congdondev@gmail.com
