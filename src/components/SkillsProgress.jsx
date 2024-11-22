import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SkillsProgress() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Data Engineering', level: 90 },
    { name: 'Python/PySpark', level: 85 },
    { name: 'Cloud Platforms (AWS/Azure)', level: 80 },
    { name: 'Machine Learning', level: 75 },
    { name: 'React/Web Development', level: 85 },
    { name: 'SQL/Database Design', level: 90 },
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
          Technical Proficiency
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-blue-500">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsProgress; 