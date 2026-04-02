import YearGalery from "./yearGalery/YearGalery";

const page = () => {
  return (
    <div className="h-3000 pt-21 px-6 md:px-16 md:pt-24">
      <YearGalery />
      <div className="w-auto ">2025</div>
      <div className="w-auto ">2024</div>
      <div className="w-auto ">2023</div>
      <div className="w-auto ">2022</div>
      <div className="w-auto ">2021</div>
      <div className="w-auto ">2020</div>
      <div className="w-auto ">2019</div>
    </div>
  );
};

export default page;
