import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServicesCard = ({ prop }) => {
return (
    <div className="px-8 py-10 bg-white border border-white rounded-lg card">
        <i className={`mb-4 text-4xl text-green-700 ${prop.icon}`}></i>
        <Link to={prop.lnk}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {prop.title}
            </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            {prop.description}
        </p>
        <Link
            to={prop.lnk}
            className="flex items-center text-md font-medium text-center text-green-700 hover:text-black hover:transition duration-300 focus:text-black dark:hover:text-black"
        >
            Let&apos;s do it
            <i className="ml-2 fas fa-arrow-right"></i>
        </Link>
    </div>
);
};

ServicesCard.propTypes = {
  prop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
      lnk: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesCard;
