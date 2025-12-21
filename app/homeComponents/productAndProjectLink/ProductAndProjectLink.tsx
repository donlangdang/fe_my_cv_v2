import Image from "next/image";
import Link from "next/link";

const ProductAndProjectLink = () => {
  return (
    <Link
      href="#"
      className="relative w-auto h-auto aspect-square overflow-hidden cursor-pointer"
    >
      <Image
        alt="product and project Link"
        fill
        loading="lazy"
        className="object-center object-cover hover:scale-110 transition-all duration-500"
        src="/bannerHome2.1.jpg"
      />
    </Link>
  );
};

export default ProductAndProjectLink;
