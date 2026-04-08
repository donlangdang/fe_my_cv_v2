import Homeapi from "@/api/homeapi";
import BannerProfile from "./bannerProfile/BannerProfile";
import HybirdSkill from "./hybridSkill/HybirdSkill";
import TheJourney from "./theJourney/TheJourney";
import TechnicalToolkit from "./technicalToolkit/TechnicalToolkit";
import CallToAction from "./callToAction/CallToAction";

const page = () => {
  return (
    <div className="h-auto w-full">
      <BannerProfile />
      <HybirdSkill imageBanner2={Homeapi[2].src} title="Hybird Skill" />
      <TheJourney imageBanner2={Homeapi[2].src} title="The Journey" />
      <TechnicalToolkit
        imageBanner2={Homeapi[2].src}
        title="Technical Toolkit"
      />
      <CallToAction imageBanner2={Homeapi[2].src} title="Call To Action" />
    </div>
  );
};

export default page;
