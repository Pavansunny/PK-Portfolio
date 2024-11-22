import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import portfolioDesign from '/assets/images/portfolio-design.webp';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left space-y-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>

              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
                  Hi, I'm <span className="text-blue-600">Pavan</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600">
                  Data Engineer & Developer
                </h2>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <SocialLink href="https://github.com/yourusername" icon={FiGithub} />
                <SocialLink href="https://linkedin.com/in/yourusername" icon={FiLinkedin} />
                <SocialLink href="mailto:your@email.com" icon={FiMail} />
              </div>
            </div>

            {/* Right Column */}
            <div className="relative group">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={portfolioDesign}
                  alt="Portfolio Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add the SocialLink component definition
const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default Hero;