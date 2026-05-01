"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CloudinarySearchResponse } from "@/type/cloundiarySearchRespoonse";

const YearGalery = ({ images }: { images: CloudinarySearchResponse }) => {
  return (
    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 md:px-32 gap-4 py-10 text-zinc-800">
      {images.resources.map((image) => (
        <motion.div
          key={image.public_id}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
          className="relative w-full h-auto aspect-3/4 rounded-2xl bg-muted overflow-hidden"
        >
          <Dialog>
            <DialogTrigger asChild className="w-full h-full">
              <CldImage
                alt={image.public_id}
                width={500}
                height={666}
                sizes="25vw"
                loading="lazy"
                className="object-center object-cover"
                src={image.public_id}
              />
            </DialogTrigger>
            <DialogContent
              aria-describedby=""
              className="flex items-center justify-center sm:max-w-8xl w-full h-full max-h-[calc(100%-2rem)]"
            >
              <DialogTitle className="hidden"></DialogTitle>
              <Image
                alt={image.public_id}
                fill
                loading="lazy"
                className="object-center object-contain"
                src={image.secure_url}
              />
            </DialogContent>
          </Dialog>
        </motion.div>
      ))}
    </div>
  );
};

export default YearGalery;
