import YearGalery from "./yearGalery/YearGalery";

const page = () => {
  return (
    <div className="h-auto w-full pt-21 px-6 md:px-16 md:pt-24">
      <h1 className="w-full h-auto text-center font-semibold tracking-wide lg:text-2xl">
        <span className="text-purple-400">F</span>
        eatured Products
        <span className="text-purple-400">.</span>
      </h1>
      <p className="md:px-32 text-xl font-semibold tracking-wide lg:text-2xl">
        <span className="text-purple-400 lg:text-sm">●</span> 2026
      </p>
      <YearGalery />
      <p className="md:px-32 text-xl font-semibold tracking-wide lg:text-2xl">
        <span className="text-purple-400 lg:text-sm">●</span> 2025
      </p>
      <YearGalery />
    </div>
  );
};

export default page;
