import Link from "next/link";
import Image from "next/image";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ImageGalleryHome = () => {
  const ImageDemo: string =
    "https://res.cloudinary.com/dhadoo9ui/image/upload/v1764168332/PXL_20250930_034312004_vkpgkf.jpg";

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="gap-4 p-4 w-full h-auto">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <Link href={ImageDemo} className="relative">
          <Image alt="demo" src={ImageDemo} fill className="" />
        </Link>
      </LightGallery>
    </div>
  );
};

export default ImageGalleryHome;
