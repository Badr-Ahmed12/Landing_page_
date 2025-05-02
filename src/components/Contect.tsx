'use client';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaRegCommentDots } from 'react-icons/fa';
import { useContactForm } from '../hook/useContactForm';

const Contact = () => {
  const {
    formValues,
    isFormValid,
    isFormSubmitted,
    isSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 ">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 w-full bg-white rounded-2xl p-8 shadow-md"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Let's Connect 
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-indigo-600" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-indigo-600" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaRegCommentDots className="absolute top-4 left-4 text-indigo-600" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formValues.message}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="py-3 px-6 rounded-full font-semibold border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-50"
              disabled={!isFormValid || isFormSubmitted}
              whileTap={{ scale: 0.95 }}
            >
              {isFormSubmitted ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Feedback */}
            {isFormSubmitted && !isFormValid && (
              <p className="text-red-500 text-center text-sm">
                Please fill all fields correctly.
              </p>
            )}
            {isSuccess && (
              <p className="text-green-500 text-center text-sm">
                Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>

        {/* Right side: Info Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 w-full text-left lg:text-right text-indigo-700 flex flex-col justify-center gap-6"
        >
          <h3 className="text-4xl font-bold">Ready to Work Together?</h3>
          <p className="text-lg leading-relaxed">
            Whether you have a question, a project, or just want to say hi — I’d love to hear from you. 
            Drop your message and I’ll get back to you as soon as possible. Let’s build something amazing together .
          </p>
          <p className="text-base text-indigo-500">
             I usually respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

