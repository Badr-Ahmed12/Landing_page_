import { cards } from '../data';
import useSeemore from '../hook/useSeemore';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const { openStates, toggle } = useSeemore<boolean>(cards.length, false);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 text-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 uppercase tracking-wide mb-4">
            About Our Company
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We empower businesses with cutting-edge digital solutions — from world-class UI/UX designs to powerful, scalable systems that drive real growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
                {card.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                {card.description}
              </p>
              <button
                type="button"
                className="mt-4 text-sm md:text-base font-semibold text-blue-600 hover:underline flex items-center gap-2"
                onClick={() => toggle(index, !openStates[index])}
                aria-expanded={openStates[index] ? 'true' : 'false'}
              >
                {openStates[index] ? (
                  <>
                    Show Less <FaArrowUp className="text-xs" />
                  </>
                ) : (
                  <>
                    Learn More <FaArrowDown className="text-xs" />
                  </>
                )}
              </button>
              <AnimatePresence>
                {openStates[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-sm md:text-base leading-relaxed text-gray-600 overflow-hidden"
                  >
                    {card.more}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

