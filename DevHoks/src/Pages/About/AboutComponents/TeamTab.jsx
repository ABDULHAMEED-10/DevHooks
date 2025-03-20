import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "10+ years of experience in software development and business leadership.",
  },
  {
    name: "Sarah Williams",
    role: "Lead Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Award-winning designer with expertise in UI/UX and brand identity.",
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Full-stack developer specialized in scalable architecture and performance optimization.",
  },
  {
    name: "Jessica Parker",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Certified project manager with a track record of on-time, on-budget deliveries.",
  },
];

const TeamTab = () => {
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
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Meet Our Team
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our talented team of experts is passionate about creating innovative
          digital solutions.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative overflow-hidden group">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-1 text-gray-900">
                {member.name}
              </h4>
              <p className="text-green-600 font-medium mb-4">{member.role}</p>
              <div className="flex space-x-3">
                {/* Social media icons would go here */}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="text-center mt-12">
        <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300">
          Join Our Team
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TeamTab;
