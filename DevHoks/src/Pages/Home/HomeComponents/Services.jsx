import { servicesData } from "../../../demoData";
import ServicesCard from "./ServicesCard";
export const Services = () => {
  return (
    <div className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <div className="mx-auto lg:text-center mb-5">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
            <div className="relative rounded-full px-3 py-1 text-md leading-6 font-medium text-green-500 ring-1 ring-green-500">
              Top Featured Services
              
            </div>
          </div>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Experience Top Services of Our Agency
          </p>
          <p className="mt-3 text-lg font-medium tracking-wide leading-8 text-gray-600">
          These are the Special services of Devhoks,Guaranteed Satisfaction and Professionalism.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {servicesData.map((service, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center"
            >
              <ServicesCard prop={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
