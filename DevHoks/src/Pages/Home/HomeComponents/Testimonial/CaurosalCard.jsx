import propTypes from "prop-types";
export const CaurosalCard = ({prop}) => {
  return (
    <div className="w-full rounded-2xl bg-gray-100 border-none p-5 dark:bg-gray-100">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full bg-gray-50 border border-gray-200">
          <img src={prop.pic} alt="pic"></img>
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-lg uppercase text-gray-600 ">
            {prop.name}
          </h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-md leading-tight tracking-wide text-gray-700 ml-2">
          <span className="text-lg leading-none italic font-bold text-gray-500 mr-1">
            &quot;
          </span>
            {prop.review}
          <span className="text-lg leading-none italic font-bold text-gray-500 ml-1">
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
