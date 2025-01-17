import { statsData, titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import StatsCard from "./StatsCard";
export const Stats = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <TitleAndPara prop={titleParaInfo[3]} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mx-auto max-w-7xl px-4 lg:px-8 ">
        {statsData.map((stat, index) => (
          <StatsCard key={index} prop={stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
