import "./../Home.css";
import { reviewsData } from "../../../../demoData";
import CaurosalCard from "./CaurosalCard";
import  { useState } from "react";
import { useSwipeable } from 'react-swipeable';
import { useEffect } from "react";

export const Caurosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000);
  
    return () => clearInterval(interval);
  }, []);
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
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
  });
  return (
    <div  {...handlers} className="flex items-center justify-center py-10">
      <div className="w-full px-1 text-gray-800">
        <div className="flex flex-col items-center">
          <div className="text-center w-full max-w-6xl mx-auto">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
                Reviews of happy clients
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 md:text-5xl lg:text-6xl">
              What people are saying.
            </h1>
            <h3 className="text-md mb-5 font-light md:text-lg">
              See why people like you choose Devhoks
            </h3>
          </div>

          <div className="relative flex items-center justify-center w-full max-w-2xl  lg:max-w-3xl px-3 overflow-hidden">
            
            <button
              className="border-none bg-gray-200 text-gray-500 ml-2 p-3 text-xl md:p-4 md:text-2xl lg:p-5 lg:text-4xl text-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 z-10 dark:bg-gray-200 dark:text-gray-500 flex items-center "
              onClick={goToPrevious}
            >
              &#8249;
            </button>

            <div className="flex items-cetner justify-cetner w-full ">
              <CaurosalCard prop={reviewsData[currentIndex]} />
            </div>

            <button
              className="border-none bg-gray-200 text-gray-500 mr-2  p-3 text-xl md:p-4 md:text-2xl lg:p-5 lg:text-4xl text-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 z-10 dark:bg-gray-200 dark:text-gray-500  flex items-center"
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

