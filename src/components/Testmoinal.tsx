import { testimonials } from "../data/index";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";


export default function Testimonial() {
  return (
    <motion.section
      className="bg-gradient-to-b from-blue-100 to-white py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-center text-blue-600"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are proud of our work and the results we deliver. Our clients are happy with our services and we have a proven track record of success.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mb-4">
                  <FaQuoteLeft className="text-9xl text-blue-600 mr-8" />
                  <p className="text-lg text-center">{testimonial.quote}</p>
                  <FaQuoteRight className="text-9xl text-blue-600 ml-8" />
                </div>
                <p className="text-sm text-blue-600 mt-4">
                  {testimonial.author}, {testimonial.position} at {testimonial.company}
                </p>
                <div className="flex items-center mt-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalfAlt className="text-yellow-500" />
                  <span className="ml-2 text-gray-700">4.5/5</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

