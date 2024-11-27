import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServicesCard = ({ prop }) => {
return (
    <div className="px-8 py-10 bg-white border border-white rounded-lg service_card">
        <i className={`service_icon mb-4 text-4xl bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center text-white ${prop.icon}`}></i>
        <Link className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-900 md:text-3xl service_title" to={prop.lnk}>
            <h1 className="inline border_line pb-0.5">
                {prop.title}
            </h1>
        </Link>
        <p className="my-2 font-normal text-gray-700 dark:text-gray-700 text-balance">
            {prop.description}
        </p>
        <Link
            to={prop.link}
            className="flex items-center text-md font-semibold text-center text-green-700 hover:text-black hover:transition duration-300 focus:text-black dark:hover:text-black"
        >
            Let&apos;s do it
            <i className="ml-2 fas fa-arrow-right"></i>
        </Link>
    </div>
);
};

ServicesCard.propTypes = {
prop: PropTypes.object.isRequired,
};
export default ServicesCard;
