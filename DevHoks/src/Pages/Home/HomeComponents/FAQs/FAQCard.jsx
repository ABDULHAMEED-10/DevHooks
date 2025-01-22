import React from "react";
import PropTypes from "prop-types";

export const FAQCard = ({ prop }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-8 border border-green-700 p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
      <div className="flex items-center justify-center bg-green-200 text-green-700 rounded-lg w-12 h-12 md:w-16 md:h-12">
        <i className={`${prop.icon} text-2xl `}></i>
      </div>
      <div className="leading-relaxed tracking-wide text-gray-700 flex flex-col gap-4">
        <h3
          className={`text-2xl font-bold ${
            prop.id == 1 ? "text-green-700" : "text-gray-900"
          }`}
        >
          {prop.question}
        </h3>
        <p className="text-base text-gray-600">{prop.answer}</p>
      </div>
    </div>
  );
};

FAQCard.propTypes = {
  prop: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

export default FAQCard;
