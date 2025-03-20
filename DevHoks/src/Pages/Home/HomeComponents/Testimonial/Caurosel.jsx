import "./../Home.css";
import { reviewsData, titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import CaurosalCard from "./CaurosalCard";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide icons

export const Caurosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2); // Default to 2 items

  const totalItems = reviewsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1); // 1 item for mobile
      } else {
        setVisibleItems(2); // 2 items for larger screens
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - visibleItems : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (totalItems - visibleItems + 1)
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
  });

  const getTransformValue = () =>
    `translateX(-${(currentIndex * 100) / visibleItems}%)`;

  return (
    <div {...handlers} className="py-10" id="reviews">
      {/* Title Section */}
      <div className="w-full mx-auto max-w-8xl px-4 lg:px-8 text-center mb-8">
        <TitleAndPara prop={titleParaInfo[4]} />
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-10">
        {/* Left Navigation Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" /> {/* Lucide icon */}
        </button>

        {/* Right Navigation Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3   hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" /> {/* Lucide icon */}
        </button>

        {/* Carousel Content */}
        <div
          className="flex transition-transform duration-700 ease-in-out py-3"
          style={{ transform: getTransformValue() }}
        >
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 ${
                /* Adjust width for visible items using Tailwind's responsive classes */
                visibleItems === 1 ? "w-full" : "w-full sm:w-1/2"
              }`}
            >
              <CaurosalCard prop={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalItems - visibleItems + 1 }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          )
        )}
      </div>

      {/* Testimonial count */}
      <div className="text-center mt-10 text-sm text-gray-500">
        <p>Based on {totalItems} verified customer reviews</p>
      </div>
    </div>
  );
};

export default Caurosel;
