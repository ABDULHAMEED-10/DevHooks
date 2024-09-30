import { servicesData,titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import ServicesCard from "./ServicesCard";
export const Services = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <TitleAndPara prop={titleParaInfo[0]} />
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-3 md:gap-5 lg:gap-8">
          {servicesData.map((service, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center"
            >
              <ServicesCard prop={service} />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium tracking-wide leading-8 text-gray-600 md:text-lg md:mt-10">
          Looking for Other Iconic Services ? - Check Them in Menu
        </p>
      </div>
    </div>
  );
};

export default Services;
