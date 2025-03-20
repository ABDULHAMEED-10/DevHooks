import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectFilter = ({ filter, setFilter }) => {
  const categories = ["all", "featured", "web", "mobile"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === category
              ? "bg-green-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </motion.div>
  );
};

ProjectFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ProjectFilter;
