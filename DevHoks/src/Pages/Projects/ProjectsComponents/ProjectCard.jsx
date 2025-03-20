import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden group h-60">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onClick}
            className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Details
          </button>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{project.date}</span>
          <button
            onClick={onClick}
            className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
          >
            Details
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    featured: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
