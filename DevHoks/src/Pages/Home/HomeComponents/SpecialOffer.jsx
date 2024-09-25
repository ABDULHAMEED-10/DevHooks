import DiscountCard from "./SpecialOfferCard";
import { discountData } from "../../../demoData";
export const SpecialOffer = () => {
  return (
    <div className="bg-white py-10 sm:py-14 ">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <div className="mx-auto text-center mb-5">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600">
              SPECIAL DISCOUNTS
            </div>
          </div>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 items-center sm:text-6xl">
            Special Offers for Special People by Devhoks.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-2">
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
    </div>
  );
};

export default SpecialOffer;
