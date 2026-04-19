"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  ThreadsLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  return (
    <div
      ref={container}
      className="w-full lg:-96 h-80 overflow-hidden relative"
    >
      <div className="w-full lg:w-1/2 px-6 flex flex-col items-center justify-center gap-10 lg:gap-10 z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-lg">
        <div className="text-center flex flex-col gap-4">
          <h2 className="font-bold text-xl lg:text-2xl tracking-widest">
            <span className="text-purple-400">E</span>mail Me
            <span className="text-purple-400">.</span>
          </h2>
          <p className="tracking-widest font-medium">congdondev@gmail.com</p>
        </div>
        <p className="font-semibold text-lg tracking-widest">Follow Along</p>
        <div className="flex items-center w-full justify-between">
          <Link
            href="https://www.facebook.com/share/19zGeq2UDB/"
            target="_blank"
          >
            <FacebookLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="#" target="_blank">
            <InstagramLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="#" target="_blank">
            <LinkedinLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="#" target="_blank">
            <GithubLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
          <Link href="" target="_blank">
            <ThreadsLogoIcon
              size={32}
              className="hover:text-purple-400 cursor-pointer"
            />
          </Link>
        </div>
        <p className="font-normal text-xs">© 2026 Don Dinh v1.2.1</p>
      </div>
      <motion.img
        style={{ y }}
        className="w-full h-full lg:aspect-video object-cover object-center"
        src="https://res.cloudinary.com/dhadoo9ui/image/upload/v1764170598/.trashed-1766503912-PXL_20251105_075313394.RAW-02.ORIGINAL_pyt5cw.jpg"
      />
    </div>
  );
};

export default Footer;

//TODO: lấy 1 ảnh làm backgroud rồi trên ảnh đó làm blur các thành phần nằm trên đó xem thử shadow có đẹp thì để luôn email me và folow along các trang mạng xã hôi làm © 2026 Don Dinh
