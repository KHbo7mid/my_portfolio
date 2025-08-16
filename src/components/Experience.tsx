import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    
   {
    title: 'Full Stack Developer Intern',
    company: 'Nachd IT',
    location: 'Sousse,Tunisia',
    period: 'June-August 2025',
    type: 'Internship',
    description: [
      'Developed a robust admin dashboard using the Filament Laravel starter kit.',
      'Integrated and customized Filament plugins, to build dynamic form builder aligned with  business logic.',
      'Implemented role-based access control and permission management for secure, scalable administration.',
      'Collaborated in a Scrum team, participating in sprints, code reviews, and feature planning.',
      'Optimized workflows and database interactions, improving overall platform efficiency.'
    ]
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Designet Web Agency',
    location: 'Nabeul,Tunisia',
    period: 'July-August 2024',
    type: 'Internship',
    description: [
      'Created a digital business card web application with QR code functionality to enhance networking and sharing.',
      'Built responsive and interactive frontend components using React.js and connected them to a Laravel backend for seamless data handling.',
      'Implemented real-time updates, notifications, and secure API communication for a smooth user experience.',
      'Collaborated with designers and backend developers to ensure cohesive UI/UX and functional integration.'
    ]
  },
  {
    title: 'Web Developer Intern',
    company: 'Designet Web Agency',
    location: 'Nabeul,Tunisia',
    period: 'July-August 2023',
    type: 'Internship',
    description: [
      'Designed and developed an e-learning platform using Laravel and Blade templates, focusing on usability and performance.',
      'Implemented course management, student registration, progress tracking, and certificate generation features.',
      'Built responsive interfaces and interactive UI elements to enhance student engagement.',
      'Optimized backend queries and workflows, ensuring fast content delivery and reliable platform performance.'
    ]
  }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here's a timeline of my professional journey and the experiences that have shaped my career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-gray-800"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.type === 'Full-time' ? 'bg-green-500/20 text-green-400' :
                        exp.type === 'Internship' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center text-purple-400 mb-2">
                      <Building size={16} className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;