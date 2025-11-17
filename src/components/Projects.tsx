import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Product Analyzer',
      description: 'An intelligent E-commerce Product Scraper & Analyzer.t automatically scrapes product data (titles, prices, and specifications) from Tunisian online stores, then sends them to a Local LLM  to generate smart buying recommendations and market insights',
     
      tech: ['Python', 'FastAPI', 'Web Scraping', 'Ollama LLM', 'Data Analysis'],
      github: 'https://github.com/KHbo7mid/Tech_Product_Analyser',
      demo: '/assets/videos/smartBuy.mp4',
      
    },
    {
      title: 'LinguaLink - Smart OCR Translator',
      description: 'A powerful Streamlit application that extracts text from images using OCR and translates it into multiple languages. Perfect for translating documents, signs, menus, and any image containing text.',
     
      tech: ['Python', 'Streamlit', 'OCR', 'Google Translate API','OpenCV','EasyOCR'],
      github: 'https://github.com/KHbo7mid/LinguaLink',
      demo: '/assets/videos/ocr_project.mp4',
      
    },
    
    {
      title: 'University Management Dashboard',
      description: 'A full-stack application for automatically generating exam and surveillance schedules in academic settings. It includes an intelligent backend, an AI-powered planner, and a modern frontend for administration and teachers.',
    
      tech: ['Java', 'Spring Boot', 'RESTful APIs','React','Tailwind CSS', 'MySQL', 'Python','AI'],
      github: 'https://github.com/KHbo7mid/university_dashboard',
      demo: '/assets/videos/university.mp4',
      
    },
    {
      title: 'Supadata - Digital Business Cards',
      description: 'Web application for creating and sharing digital business cards with QR codes. Includes responsive design, real-time updates, and secure user authentication.',
      
      tech: ['React.js', 'Laravel', 'Tailwind CSS', 'MySQL', 'QR Code'],
      github: 'https://github.com/KHbo7mid/supadata',
      demo: '/assets/videos/supadata.mp4',
      
    },
    {
      title: 'E-Constat',
      description: 'Mobile app to create standardized vehicle accident reports and submit them directly to insurers. Includes a guided step-by-step flow, GPS location, photo capture with annotations, and secure claim submission.',
     
      tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'Google Maps', 'REST APIs'],
      github: 'https://github.com/KHbo7mid/e_constat',
      demo: '/assets/videos/econstat.mp4',
      
    },
   
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 ${
                'md:col-span-2 lg:col-span-1' 
              }`}
            >
              <div className="relative group">
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                  <Code2 className="text-gray-600" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/KHbo7mid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;