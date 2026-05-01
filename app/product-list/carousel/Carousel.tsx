import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const CarouselListImages = () => {
  return (
    <Carousel className="w-full sm:w-2/3 h-auto">
      <CarouselContent>
        <CarouselItem className="relative w-full h-auto aspect-square">
          <Image
            alt="product and project image"
            fill
            loading="lazy"
            className="object-center object-contain"
            src="/bannerHome2.1.jpg"
          />
        </CarouselItem>
        <CarouselItem className="relative w-full h-auto aspect-square">
          <Image
            alt="product and project image"
            fill
            loading="lazy"
            className="object-center object-contain"
            src="/bannerHome2.1.jpg"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselListImages;
