import React from "react";
import image from "../../../../assets/fun-6.png";
export const CallToAction = () => {
  return (
    <div className="absolute  w-[85%] -top-24 left-1/2 transform -translate-x-1/2 border-2 border-green-700 py-10 bg-green-700  z-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-center justify-between px-10 lg:px-36 py-12 lg:py-14">
      <div className="flex items-center gap-6 lg:gap-10">
        <div className="hidden lg:flex items-center justify-center rounded-full w-16 h-16">
          <img src={image} alt="fun" className="" />
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl text-white font-extrabold mb-2">
            Level Up With Rixon Bit
          </h2>
          <p className="text-md lg:text-lg text-gray-200">
            Elevating businesses, executing ideas, delivering swift experiences.
          </p>
        </div>
      </div>
      <div>
        <button className="bg-gray-900 text-gray-100 px-6 py-3 rounded-lg mt-4 hover:bg-gray-800 transition duration-300 transform hover:scale-105 dark:bg-gray-100 dark:text-gray-900 ">
          <a href="/contact">Get Started Now</a>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
