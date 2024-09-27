import { servicesData } from "../../../../demoData";
import ServicesCard from "./ServicesCard";
export const Services = () => {
  return (
    <div className="py-10 sm:py-14 ">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <div className="mx-auto text-center mb-5">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
              Top Featured Services
              
            </div>
          </div>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-6xl">
          Experience Top Services of Our Agency
          </p>
          <p className="mt-3 text-lg font-medium tracking-wide leading-8 text-gray-600">
          These are the Special services of Devhoks,Guaranteed Satisfaction and Professionalism.
          </p>
      </div>
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
