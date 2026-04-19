import { getSortedImages } from "@/lib/cloundiaryAPI";
import YearGalery from "./yearGalery/YearGalery";
import { CloudinarySearchResponse } from "@/type/cloundiarySearchRespoonse";

const page = async () => {
  const images: CloudinarySearchResponse = await getSortedImages();

  return (
    <div className="h-auto w-full pt-24 px-6 md:px-16 md:pt-24">
      <h1 className="w-full h-auto text-center font-semibold tracking-wide lg:text-2xl">
        <span className="text-purple-400">F</span>
        eatured Products
        <span className="text-purple-400">.</span>
      </h1>
      <YearGalery images={images} />
    </div>
  );
};

export default page;
