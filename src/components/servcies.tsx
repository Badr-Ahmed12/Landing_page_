import { motion } from 'framer-motion';
import { services } from '../data';
import ServiceCard from './Ui/ServicesCard';

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 text-gray-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-blue-500 uppercase tracking-wide mb-4"
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We provide a wide range of digital services to help you grow your business online. Choose the right solution for your needs.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
