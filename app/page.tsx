import ProgressBar from "@/components/progressBar/ProgressBar";
import HomeBannerImage from "./homeComponents/HomeBannerImage";
import MyStory from "./homeComponents/MyStory";
import SecondBanner from "./homeComponents/SecondBanner";
import Homeapi from "@/api/homeapi";
import ProductAndProject from "./homeComponents/ProductAndProject";
import ContactHome from "./homeComponents/ContactHome";

export default async function Home() {
  // test loading.tsx
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("wait 3s");
  //   }, 3000);
  // });

  return (
    <main className="w-full h-auto">
      <HomeBannerImage />
      <MyStory />
      <SecondBanner
        imageBanner2={Homeapi[2].src}
        title="Bespoke Leather Goods"
      />
      <SecondBanner
        imageBanner2={Homeapi[3].src}
        title="Made entirely by hand and hand-sewn"
      />
      <SecondBanner
        imageBanner2={Homeapi[4].src}
        title="Bespoke Leather Goods"
      />
      <ProductAndProject />
      <ContactHome />
      <ProgressBar />
    </main>
  );
}
