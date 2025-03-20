import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce Solutions",
  "SEO Optimization",
  "Digital Marketing",
  "Cloud Solutions",
  "Maintenance & Support",
];

const ServicesTab = () => {
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
      animate="visible"
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Our Services
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of digital services to help your
          business grow and succeed in the digital landscape.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                {service}
              </h4>
              <p className="text-gray-600">
                We deliver custom {service.toLowerCase()} solutions tailored to
                your specific business needs and goals.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="text-center mt-12">
        <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300">
          View All Services
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ServicesTab;
