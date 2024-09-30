import {statsData} from "../../../../demoData"
import StatsCard from "./StatsCard";
export const Stats = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
      <div className="mx-auto max-w-2xl lg:max-w-7xl text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
              Why People Choose Us
            </div>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 items-center md:text-4xl lg:text-6xl">
            Over 600+ satisfied customers!
          </h1>
      
          <h3 className="mt-3 text-lg font-medium tracking-wide leading-8 text-gray-600 items-center">
            With over 1 million agencies out there, here&apos;s what sets us
            apart and keeps clients winning
          </h3>
       
        </div>
        </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20  flex items-center justify-between flex-col gap-8 lg:gap-16 lg:flex-row">
          <div className="hidden w-full lg:w-60 lg:block">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Our Stats
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left md:text-md">
              We help you to unleash the power within your business
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              {statsData.map((stat, i) => (
                <StatsCard key={i} prop={stat} />
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
