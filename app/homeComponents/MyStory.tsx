"use client";
import { CldImage } from "next-cloudinary";

const MyStory = () => {
  return (
    <div className=" w-full h-auto bg-zinc-900 flex items-center justify-center flex-col lg:flex-row gap-6 p-6 md:p-16 md:gap-16">
      <div className="text-center rounded-sm overflow-hidden w-full h-auto flex-1 aspect-3/4 lg:aspect-square flex items-center justify-center gap-6 flex-col">
        <h2 className="font-bold bg-zinc-800 px-6 py-4 rounded-2xl text-2xl">
          <span className="text-purple-400">M</span>y Story
          <span className="text-purple-400">.</span>
        </h2>
        <p className="w-full lg:w-2/3 leading-7">
          I&apos;m <span className="font-bold text-purple-400">Don Dinh</span>.
          My journey with leathercraft began in{" "}
          <span className="font-bold text-purple-400">2019</span>, fueled by a
          passion for creating enduring products by hand. Every product is a
          testament to patience meticulously hand-stitched and finished to
          highlight the natural beauty of premium leather
          <span className="font-bold text-purple-400">.</span>
          <br />
          <br />
          For me, it&apos;s not just about making a product; it&apos;s about
          crafting products of the&#160;
          <span className="font-bold text-purple-400">
            finest quality and durability
          </span>{" "}
          that tell your story over time
          <span className="font-bold text-purple-400">.</span>
        </p>
      </div>
      <div className="relative rounded-2xl border-2 border-purple-400 overflow-hidden bg-muted w-full h-auto flex-1 aspect-3/4 lg:aspect-square">
        <CldImage
          alt="Avatar"
          fill
          sizes="50vw"
          className="object-center object-cover"
          src="https://res.cloudinary.com/dhadoo9ui/image/upload/v1777129245/PXL_20260408_094221616.RAW-02.ORIGINAL_v0vzvc.jpg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MyStory;

//TODO: add card from shadcnui here
