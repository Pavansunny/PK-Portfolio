import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "John Doe",
      role: "Senior Data Engineer at Tech Corp",
      image: "https://via.placeholder.com/100",
      text: "Working with Pavan was an incredible experience. His expertise in data engineering and problem-solving skills are outstanding.",
    },
    {
      name: "Jane Smith",
      role: "Project Manager at Data Inc",
      image: "https://via.placeholder.com/100",
      text: "Pavan's ability to handle complex data pipelines and deliver solutions on time is remarkable. A true professional!",
    },
    // Add more testimonials as needed
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What People Say
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                <h4 className="font-bold text-xl mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-500">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials; 