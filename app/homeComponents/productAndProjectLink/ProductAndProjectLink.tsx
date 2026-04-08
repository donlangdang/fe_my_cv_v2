"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductAndProjectLink = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      className="relative w-full h-auto aspect-3/4 overflow-hidden rounded-2xl"
    >
      <Link href="#" className=" w-full h-full overflow-hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Image
              alt="product and project Link"
              fill
              loading="lazy"
              className="object-center object-cover"
              src="/bannerHome2.1.jpg"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-8xl w-full h-full max-h-[calc(100%-2rem)]">
            <DialogTitle></DialogTitle>
            <Image
              alt="product and project image"
              fill
              loading="lazy"
              className="object-center object-contain"
              src="/bannerHome2.1.jpg"
            />
          </DialogContent>
        </Dialog>
      </Link>
    </motion.div>
  );
};

export default ProductAndProjectLink;
