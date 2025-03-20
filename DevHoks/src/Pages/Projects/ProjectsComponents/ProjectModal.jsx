import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import PropTypes from "prop-types";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 md:h-96">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Project Details
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Client:</span>{" "}
                      {project.client}
                    </li>
                    <li>
                      <span className="font-medium">Date:</span> {project.date}
                    </li>
                    <li>
                      <span className="font-medium">Category:</span>{" "}
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Technologies Used
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {project.tags.map((tag, index) => (
                      <li key={index}>• {tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300"
                >
                  View Live
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full font-medium shadow-md hover:bg-gray-900 transition-colors duration-300"
                >
                  Source Code
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    client: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    link: PropTypes.string,
    github: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
