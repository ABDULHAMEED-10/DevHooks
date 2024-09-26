import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DiscountCard = ({ prop }) => {
    const getBackgroundColor = (id) => {
        switch (id) {
            case 1:
                return "bg-yellow-500/75";
            case 2:
                return "bg-purple-500/75";
            case 3:
                return "bg-green-500/75";
            default:
                return "bg-black/75";
        }
    };
return (
    <div className="overflow-hidden px-18 py-10 bg-white border border-white rounded-lg flex flex-col items-center justify-center">
        <div className={`mb-4 w-24 h-24 text-5xl rounded-lg flex items-center justify-center text-white ${getBackgroundColor(prop.id)}`}>
        <i className={`text-5xl mix-blend-screen ${prop.icon}`}></i>

        </div>
        <Link className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-900" to={prop.lnk}>
            <h5 className="inline">
                {prop.title}
            </h5>
        </Link>
        <p className="text-center text-md font-normal text-gray-500 dark:text-gray-500">
            {prop.description}
        </p>
    </div>
);
};

DiscountCard.propTypes = {
  prop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
      lnk: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default DiscountCard;
