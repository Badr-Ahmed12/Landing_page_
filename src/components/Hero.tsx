import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 mt-10 ">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Digital Presence
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We craft tailored solutions that boost your brand and captivate your audience.
        </motion.p>
        <motion.a
          href="#services"
          className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Services <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;