import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    price: string;
    reviews: string;
    image: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <img src={service.image} alt={service.title} className="h-40 w-full object-cover rounded-xl mb-6" />
      <motion.h3 className="text-lg font-bold text-blue-500 mb-4">
        {service.title}
      </motion.h3>
      <motion.p className="text-sm md:text-base leading-relaxed">
        {service.description}
      </motion.p>
      <motion.p className="mt-2 text-blue-600 font-semibold">
        {service.price}
      </motion.p>
      <motion.p className="mt-1 text-gray-600">
        {service.reviews}
      </motion.p>
      <motion.button
        type="button"
        className="mt-4 bg-gradient-to-r from-white to-blue-100 py-2 px-4 rounded-full text-sm md:text-base font-semibold text-blue-600 hover:bg-blue-200 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        onClick={() => alert('You bought ' + service.title)}
      >
        Buy Now
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
