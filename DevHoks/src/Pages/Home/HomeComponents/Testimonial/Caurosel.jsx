import "./../Home.css";
import { reviewsData } from "../../../../demoData";
import CaurosalCard from "./CaurosalCard";
import  { useState } from "react";

export const Caurosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center ">
      <div className="w-full px-5 py-16 md:py-24 text-gray-800">
        <div className="flex flex-col items-center">
          <div className="text-center w-full max-w-6xl mx-auto">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
                Reviews of happy clients
              </div>
            </div>
            <h1 className="text-6xl md:text-6xl font-bold mb-2   text-gray-900">
              What people are saying.
            </h1>
            <h3 className="text-lg mb-5 font-light">
              See why people like you choose Devhoks
            </h3>
          </div>

          <div className="relative flex items-center justify-center w-full lg:  max-w-3xl  overflow-hidden">
            <button
              className="ring-1 ring-green-700 border-none bg-green-700 text-white ml-2 p-2 text-lg text-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 z-10 dark:bg-green-700 dark:text-white md:p-4 md:text-xl lg:p-4 lg:text-3xl flex items-center "
              onClick={goToPrevious}
            >
              &#8249;
            </button>

            <div className="flex items-cetner justify-cetner transition-transform duration-500 ease-in-out w-full ">
              <CaurosalCard prop={reviewsData[currentIndex]} />
            </div>

            <button
              className="ring-1 ring-green-700 border-none bg-green-700 text-white mr-2  p-2 text-lg text-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 z-10 dark:bg-green-700  md:p-4 md:text-xl lg:p-4 lg:text-3xl flex items-center"
              onClick={goToNext}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caurosel;
