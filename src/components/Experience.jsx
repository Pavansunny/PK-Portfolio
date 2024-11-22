import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../constants';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional Journey
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
              </div>

              {/* Content */}
              <div className="ml-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FiBriefcase className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{experience.date}</span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {experience.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience; 