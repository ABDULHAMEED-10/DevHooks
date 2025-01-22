import propTypes from "prop-types";

export const CaurosalCard = ({ prop }) => {
  return (
    <div className="w-full rounded-2xl border p-5 shadow-md hover:scale-105 transition duration-300">
      <div className="w-full">
        <div className="flex items-center justify-start mb-4">
          <img
            src={prop.pic}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <h2 className="text-lg font-bold text-gray-800">{prop.name}</h2>
            <p className="text-sm text-gray-500">{prop.designation}</p>
          </div>
        </div>
        <p className="text-base leading-relaxed tracking-wide text-gray-700 ml-2">
          <span className="text-lg leading-none italic font-bold text-gray-500 mr-1">
            “
          </span>
          {prop.review}
          <span className="text-lg leading-none italic font-bold text-gray-500 ml-1">
            ”
          </span>
        </p>
      </div>
    </div>
  );
};

CaurosalCard.propTypes = {
  prop: propTypes.object.isRequired,
};

export default CaurosalCard;
