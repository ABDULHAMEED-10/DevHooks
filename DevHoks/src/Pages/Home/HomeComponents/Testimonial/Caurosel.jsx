import "./../Home.css";
import { reviewsData, titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import CaurosalCard from "./CaurosalCard";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useEffect } from "react";

export const Caurosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);
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
    <div
      {...handlers}
      className="flex flex-col items-center py-10"
      id="reviews"
    >
      <div className="w-full mx-auto max-w-8xl px-4 lg:px-8 ">
        <TitleAndPara prop={titleParaInfo[4]} />
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-full max-w-2xl lg:max-w-3xl px-3 overflow-hidden">
          <button
            className="hidden md:flex border-none bg-gray-200 text-gray-500 ml-2 p-3 text-xl md:p-4 md:text-2xl lg:p-5 lg:text-4xl text-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 z-10 dark:bg-gray-200 dark:text-gray-500 items-center"
            onClick={goToPrevious}
          >
            &#8249;
          </button>

          <div className="flex items-center justify-center w-full rounded-b-lg border-b-8 border-green-600 dark:border-green-600 relative overflow-hidden">
            <CaurosalCard prop={reviewsData[currentIndex]} />
          </div>

          <button
            className="hidden md:flex border-none bg-gray-200 text-gray-500 mr-2 p-3 text-xl md:p-4 md:text-2xl lg:p-5 lg:text-4xl text-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0 z-10 dark:bg-gray-200 dark:text-gray-500 items-center"
            onClick={goToNext}
          >
            &#8250;
          </button>
          <div className="absolute bottom-0 flex justify-center w-full pb-3">
            {reviewsData.map((_, index) => (
              <div
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caurosel;
