import { statsData, titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import StatsCard from "./StatsCard";
export const Stats = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <TitleAndPara prop={titleParaInfo[3]} />
      </div>
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <div className="rounded-2xl py-10 mx-3 md:mx-0 md:py-0 bg-gray-100 flex items-center justify-between flex-col gap-4 md:gap-5 lg:gap-16 md:flex-row">
          <div className="hidden py-4 w-full md:w-60 md:block bg-green-700 rounded-l-2xl ">
            <h2 className="text-4xl font-bold text-gray-100 mb-3 text-center md:text-left">
              Our Stats
            </h2>
            <p className="text-sm mx-3 text-gray-200 leading-6 text-center lg:text-left md:text-md">
              Happy to share our stats with you. We are growing day by day
            </p>
          </div>
          <div className="w-full md:w-4/5">
            <div className="flex flex-col flex-1 gap-8 md:gap-0 md:flex-row md:justify-around">
              {statsData.map((stat, i) => (
                <StatsCard key={i} prop={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
