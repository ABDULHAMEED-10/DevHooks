import DiscountCard from "./SpecialOfferCard";
import { discountData, titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
export const SpecialOffer = () => {
  return (
    <div className="bg-white py-10 sm:py-14 ">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <TitleAndPara prop={titleParaInfo[2]} />
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-center flex-wrap  rounded-lg gap-4 lg:gap-8 mx-auto max-w-8xl px-4 lg:px-8 ">
        {discountData.map((service, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center"
          >
            <DiscountCard prop={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
