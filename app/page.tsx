import HomeBannerImage from "./homeComponents/HomeBannerImage";
import MyStory from "./homeComponents/MyStory";
import SecondBanner from "./homeComponents/SecondBanner";
import Homeapi from "@/api/homeapi";
import ProductAndProject from "./homeComponents/ProductAndProject";
import ContactHome from "./homeComponents/ContactHome";
import { getHomeImagesList } from "@/lib/cloundiaryAPI";
import { CloudinarySearchResponse } from "@/type/cloundiarySearchRespoonse";

export default async function Home() {
  const images: CloudinarySearchResponse = await getHomeImagesList();

  return (
    <main className="w-full h-auto">
      <HomeBannerImage />
      <MyStory />
      <SecondBanner
        imageBanner2={Homeapi[2].src}
        title="Bespoke Leather Goods"
        description="Tailored to your unique personality. Transform your ideas into one-of-a-kind leather masterpieces that tell your own story."
      />
      <SecondBanner
        imageBanner2={Homeapi[3].src}
        title="Made Entirely By Hand And Hand-sewn"
        description="Crafted with soul. Every stitch is meticulously hand-sewn using traditional techniques, ensuring a level of detail that machines simply cannot replicate."
      />
      <SecondBanner
        imageBanner2="https://res.cloudinary.com/dhadoo9ui/image/upload/v1776442156/PXL_20251125_062001550.RAW-02.ORIGINAL_jy2pcy.jpg"
        title="Finest Quality And Durability"
        description="Built to last a lifetime. Using only the world's premium leather, our products develop a beautiful patina over time, becoming better with age."
      />
      <ProductAndProject images={images} />
      <ContactHome />
    </main>
  );
}
