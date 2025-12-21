import Image from "next/image";

const MyStory = () => {
  return (
    <div className=" w-full h-auto bg-zinc-900 flex items-center justify-center flex-col lg:flex-row gap-6 p-6 md:p-16 md:gap-16">
      <div className="text-center rounded-sm overflow-hidden w-full h-auto flex-1 aspect-3/4 lg:aspect-square flex items-center justify-center gap-6 flex-col">
        <h2 className="font-bold bg-zinc-800 px-6 py-4 rounded-sm text-2xl">
          <span className="text-purple-400">M</span>y Story
          <span className="text-purple-400">.</span>
        </h2>
        <p className="w-full lg:w-2/3">
          I&apos;m a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you. This is a great
          space to write long text about your company and your services. You can
          use this space to go into a little more detail about your company.
          <br />
          <br />
          Talk about your team and what services you provide. Tell your visitors
          the story of how you came up with the idea for your business and what
          makes you different from your competitors. Make your company stand out
          and show your visitors who you are.
        </p>
      </div>
      <div className="relative rounded-sm border-4 border-gray-200 overflow-hidden bg-purple-200 w-full h-auto flex-1 aspect-3/4 lg:aspect-square">
        <Image
          alt="Avatar"
          fill
          className="object-center object-cover"
          src="/avatar.jpg"
        />
      </div>
    </div>
  );
};

export default MyStory;

//TODO: add card from shadcnui here
