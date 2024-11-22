import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { projects } from '../../constants/projectsData';

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
    >
      {/* Image Section */}
      {project.images && project.images.length > 0 && (
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <img
            src={project.images[currentImage].src}
            alt={project.images[currentImage].caption}
            className="absolute top-0 left-0 w-full h-full object-contain bg-gray-100"
          />
          
          {/* Navigation Arrows - only show if there's more than one image */}
          {project.images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={() => setCurrentImage(prev => prev === 0 ? project.images.length - 1 : prev - 1)}
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentImage(prev => prev === project.images.length - 1 ? 0 : prev + 1)}
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          )}

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
            <p className="text-sm">{project.images[currentImage].caption}</p>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold flex-1">{project.title}</h3>
          {project.publication && (
            <ResearchButton href={`https://doi.org/${project.publication.doi}`} />
          )}
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {project.details.map((detail, detailIndex) => (
            <li key={detailIndex}>{detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ResearchButton = ({ href }) => {
  return (
    <div className="relative inline-block z-10">
      {/* Paper Icon Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center w-12 h-12 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full transition-all duration-300"
      >
        {/* Research Paper Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>

        {/* Hover Text - Improved alignment */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="relative bg-gray-800 text-white px-3 py-2 rounded-md whitespace-nowrap text-sm flex items-center">
            View Research Paper
            {/* Triangle Pointer */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-800"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
} 