import { motion } from "framer-motion";
import { ArrowRight, Users, Briefcase, Award, Clock } from "lucide-react";

const stats = [
  { icon: <Users className="h-6 w-6" />, value: "60+", label: "Happy Clients" },
  {
    icon: <Briefcase className="h-6 w-6" />,
    value: "120+",
    label: "Projects Completed",
  },
  { icon: <Award className="h-6 w-6" />, value: "15+", label: "Awards Won" },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "10+",
    label: "Years Experience",
  },
];

const CompanyTab = () => {
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
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-100 rounded-full"></div>
        <img
          src="/placeholder.svg?height=600&width=800"
          alt="Our office"
          className="rounded-lg shadow-xl relative w-full object-cover h-[400px] md:h-[500px]"
        />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full"></div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Our Story
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Founded in 2013, we started with a simple mission: to help businesses
          thrive in the digital world. What began as a small team of passionate
          developers has grown into a full-service digital agency with expertise
          across web development, mobile applications, and digital marketing.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We believe in creating long-term partnerships with our clients,
          understanding their unique challenges, and delivering solutions that
          exceed expectations. Our collaborative approach and commitment to
          excellence have earned us the trust of clients across industries.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-full text-green-600">
                {stat.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          variants={itemVariants}
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CompanyTab;
