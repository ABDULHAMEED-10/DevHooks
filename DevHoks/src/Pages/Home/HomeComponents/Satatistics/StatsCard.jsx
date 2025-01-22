import React from "react";
import PropTypes from "prop-types";

const StatsCard = ({ prop }) => {
  return (
    <div className="flex flex-row justify-center p-5 rounded-lg border border-green-700 gap-4 shadow-sm">
      <div className="hidden md:flex items-center justify-center bg-green-200 text-green-700 rounded-full w-12 h-12">
        <i
          className={`${prop.icon} text-3xl text-green-700 bg-green-200 p-3 rounded-full`}
        ></i>
      </div>
      <div className="leading-relaxed tracking-wide text-gray-700 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-gray-900">{prop.title}</h3>
        <p className="text-md text-gray-700 ">{prop.description}</p>
      </div>
    </div>
  );
};
StatsCard.propTypes = {
  prop: PropTypes.any.isRequired,
};

export default StatsCard;
