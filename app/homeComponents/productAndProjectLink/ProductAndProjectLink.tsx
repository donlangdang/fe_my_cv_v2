"use client";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CloudinaryResource } from "@/type/cloundiarySearchRespoonse";

const ProductAndProjectLink = ({ image }: { image: CloudinaryResource }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      className="relative w-full h-auto aspect-3/4 overflow-hidden rounded-2xl"
    >
      <Dialog>
        <DialogTrigger asChild className="w-full h-full">
          <CldImage
            alt={image.public_id}
            width={600}
            height={800}
            loading="lazy"
            className="object-center object-cover"
            src={image.public_id}
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-8xl w-full h-full max-h-[calc(100%-2rem)]">
          <DialogTitle></DialogTitle>
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
  );
};

export default ProductAndProjectLink;
