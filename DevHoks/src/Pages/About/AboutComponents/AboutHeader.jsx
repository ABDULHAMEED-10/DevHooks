import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          We&apos;re a team of digital{" "}
          <span className="text-green-600">innovators</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We combine creativity, technical expertise, and strategic thinking to
          deliver exceptional digital solutions that drive business growth.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutHeader;
