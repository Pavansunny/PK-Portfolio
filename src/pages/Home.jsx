import Layout from '../components/Layout';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import portfolioDesign from '/assets/images/portfolio-design.webp';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8 text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-[#81B29A] text-white rounded-full text-sm">
                Welcome to my portfolio
              </span>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#2C3639]">
                  Hi, I'm <span className="text-[#E07A5F]">Pavan</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-[#81B29A]">
                  Data Engineer & Developer
                </h2>
                <p className="text-lg text-[#2C3639] max-w-xl">
                  Specializing in building scalable data solutions and creating efficient data pipelines.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-4 bg-[#E07A5F] hover:bg-[#C65D45] text-white rounded-lg">
                    View Projects
                  </button>
                  <button className="px-8 py-4 border-2 border-[#81B29A] text-[#81B29A] hover:bg-[#81B29A] hover:text-white rounded-lg">
                    Contact Me
                  </button>
                </div>

                <div className="flex gap-6 justify-center lg:justify-start">
                  {[FiGithub, FiLinkedin, FiMail].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-[#81B29A] hover:text-[#E07A5F] transform hover:scale-110"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:block">
              <div className="relative w-[450px] h-[450px] mx-auto">
                <div className="absolute -inset-4 bg-[#81B29A]/20 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#E07A5F]">
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
      </main>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2C3639] mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#E07A5F] mb-2">Project {project}</h3>
                  <p className="text-[#2C3639]">
                    Description of project {project}. Brief overview of what it does.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Your contact content */}
        </div>
      </section>
    </Layout>
  );
} 