import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

const ProjectsGrid = ({ projects, visibleProjects, onProjectClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence>
        {projects.slice(0, visibleProjects).map((project) => (
          <motion.div key={project.id} variants={itemVariants} layout>
            <ProjectCard
              project={project}
              onClick={() => onProjectClick(project)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibleProjects: PropTypes.number.isRequired,
  onProjectClick: PropTypes.func.isRequired,
};

export default ProjectsGrid;
