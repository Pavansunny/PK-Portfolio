import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiCode, FiTarget } from 'react-icons/fi';

function Achievements() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: FiAward,
      title: "Best Data Engineering Project",
      description: "Recognized for innovative data pipeline solution",
      date: "2023",
    },
    {
      icon: FiCode,
      title: "100+ Contributions",
      description: "Active open-source contributor on GitHub",
      date: "2022",
    },
    {
      icon: FiBook,
      title: "AWS Certification",
      description: "Certified AWS Solutions Architect",
      date: "2022",
    },
    {
      icon: FiTarget,
      title: "Project Success",
      description: "Led successful implementation of enterprise data lake",
      date: "2021",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Key Achievements
        </h2>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500">
                <achievement.icon className="absolute -left-3 top-0 w-6 h-6 bg-white dark:bg-gray-800 text-blue-500 rounded-full p-1" />
              </div>

              {/* Content */}
              <div className="ml-8">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <span className="text-blue-500 text-sm">{achievement.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Achievements; 