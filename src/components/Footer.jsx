import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E07A5F] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">Get in Touch</h3>
            <p>your@email.com</p>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-[#F2E9E4]">LinkedIn</a>
            <a href="#" className="hover:text-[#F2E9E4]">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    whileHover={{ y: -2 }}
    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
  >
    {children}
  </motion.a>
);

const SocialLink = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2 }}
    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

export default Footer; 