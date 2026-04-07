import Homeapi from "@/api/homeapi";
import BannerProfile from "./bannerProfile/BannerProfile";
import HybirdSkill from "./hybridSkill/HybirdSkill";
import TheJourney from "./theJourney/TheJourney";

const page = () => {
  return (
    <div className="h-3000 w-full">
      <BannerProfile />
      <HybirdSkill
        imageBanner2={Homeapi[2].src}
        title="Bespoke Leather Goods"
      />
      <TheJourney />
    </div>
  );
};

export default page;
