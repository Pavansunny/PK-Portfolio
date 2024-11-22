import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    "Python", "Apache Spark", "SQL", "AWS", "Azure",
    "Data Engineering", "ETL Pipeline", "Machine Learning",
    "React", "Node.js", "MongoDB"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Versatile computer science graduate with experience in data processing,
                data pipelines, and machine learning seeking to leverage problem-solving
                and analytical skills in a data engineering role.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Proven ability to design, develop, and implement scalable data solutions
                across various cloud platforms (Azure, AWS, GCP).
              </p>
            </div>

            {/* Skills Grid */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Timeline */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard number="5+" text="Years Experience" />
            <StatCard number="20+" text="Projects Completed" />
            <StatCard number="3+" text="Cloud Platforms" />
            <StatCard number="10+" text="Technologies" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const StatCard = ({ number, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
  >
    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
      {number}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2">{text}</p>
  </motion.div>
);

export default About; 