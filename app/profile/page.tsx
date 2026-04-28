import profileAPI from "@/api/profileAPI";
import BannerProfile from "./bannerProfile/BannerProfile";
// import HybirdSkill from "./hybridSkill/HybirdSkill";
import TheJourney from "./theJourney/TheJourney";
import TechnicalToolkit from "./technicalToolkit/TechnicalToolkit";
import CallToAction from "./callToAction/CallToAction";

const page = () => {
  return (
    <div className="h-auto w-full">
      <BannerProfile />
      <TheJourney imageBanner2={profileAPI[0].src} title="The Journey" />
      {/* <HybirdSkill imageBanner2={Homeapi[2].src} title="Hybird Skill" /> */}
      <TechnicalToolkit
        imageBanner2={profileAPI[1].src}
        title="Technical Toolkit"
      />
      <CallToAction imageBanner2={profileAPI[2].src} title="Call To Action" />
    </div>
  );
};

export default page;
