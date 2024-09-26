import propTypes from "prop-types";
export const CaurosalCard = ({prop}) => {
  return (
    <div className="w-full mx-auto rounded-lg bg-white border border-green-800 p-5 text-gray-800 font-light mb-6 dark:bg-white">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
          <img src={prop.pic} alt="pic"></img>
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-green-700 text-lg uppercase text-gray-600 dark:text-green-700">
            {prop.name}
          </h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-md leading-tight dark:text-black text-justify">
          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
            &quot;
          </span>
            {prop.review}
          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
            &quot;
          </span>
        </p>
      </div>
    </div>
  );
};

CaurosalCard.propTypes = {
    prop: propTypes.object,
};
    

export default CaurosalCard;
