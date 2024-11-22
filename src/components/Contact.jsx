import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      description: 'Drop me a line',
      action: 'pavankurapati21@gmail.com',
      href: 'mailto:pavankurapati21@gmail.com',
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      description: 'Let\'s connect',
      action: 'View Profile',
      href: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      description: 'Check my repos',
      action: 'View Projects',
      href: 'https://github.com/yourusername',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <ContactCard key={index} {...method} index={index} inView={inView} />
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

const ContactCard = ({ icon: Icon, title, description, action, href, index, inView }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ delay: index * 0.1 }}
    className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
  >
    <Icon className="w-8 h-8 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    <span className="text-blue-500 group-hover:text-blue-600 font-medium">
      {action} →
    </span>
  </motion.a>
);

export default Contact; 