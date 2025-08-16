import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJava, FaPhp, FaLaravel, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiSpring, SiMysql, SiPostgresql, SiScikitlearn, SiTensorflow, SiNumpy, SiPandas } from 'react-icons/si';
import { Code, Palette, Wind, Box, Smartphone, Server, Database } from 'lucide-react';

const skills = [
  // Frontend
  { name: 'HTML', icon: Code, color: 'text-orange-400' }, // Palette as HTML icon
  { name: 'CSS', icon: Palette, color: 'text-blue-400' },
  { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: Wind, color: 'text-cyan-400' },
  { name: 'Bootstrap', icon: Box, color: 'text-purple-400' },
  { name: 'Flutter', icon: Smartphone, color: 'text-blue-300' },

  // Backend
  { name: 'Laravel', icon: FaLaravel, color: 'text-red-400' },
  { name: 'Spring Boot', icon: SiSpring, color: 'text-green-500' },
  { name: 'Node.js', icon: Server, color: 'text-green-400' },
  { name: 'PHP', icon: FaPhp, color: 'text-purple-500' },
  { name: 'Java', icon: FaJava, color: 'text-red-500' },

  // Databases
  { name: 'SQL', icon: Database, color: 'text-purple-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-400' },

  // Programming Languages
  { name: 'Python', icon: FaPython, color: 'text-indigo-500' },
  { name: 'JAVA', icon: FaJava, color: 'text-blue-300' },

  // DevOps / Tools
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-300' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },

  // Data / Machine Learning
  { name: 'Pandas', icon: SiPandas, color: 'text-green-300' },
  { name: 'NumPy', icon: SiNumpy, color: 'text-green-400' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-purple-300' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-400' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const categories = [
    { title: 'Frontend', items: ['HTML','CSS','JavaScript','React','Tailwind CSS','Bootstrap','Flutter'] },
    { title: 'Backend', items: ['Laravel','Spring Boot','PHP'] },
    { title: 'Databases', items: ['SQL','MySQL','PostgreSQL'] },
    { title: 'Programming Languages', items: ['Python','JAVA'] },
    { title: 'DevOps / Tools', items: ['Git','Docker'] },
    { title: 'Data / Machine Learning', items: ['Pandas','NumPy','Scikit-Learn','TensorFlow'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know more about who I am, what I do, and my skills in programming, development, and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-2">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/picture.webp"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>

            <div className="text-center lg:text-left space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate <strong className="text-white">Software Engineer</strong> who loves building web applications and exploring technologies like data analysis, machine learning, and AI.
              </p>
              <p>
                My journey in tech started with curiosity, and now I focus on solving problems and creating practical, user-friendly digital solutions.
              </p>
              <p>
                When I'm not coding, I enjoy experimenting with new tools, tackling challenges, and sharpening my problem-solving skills.
              </p>

              {/* What I bring to the table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-800 rounded-xl p-6 mt-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4">How I Make an Impact</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { text: 'Full-stack development expertise', color: 'bg-purple-400' },
                    { text: 'Clean, maintainable code practices', color: 'bg-blue-400' },
                    { text: 'Agile development mindset', color: 'bg-green-400' },
                    { text: 'Strong problem-solving skills', color: 'bg-yellow-400' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-sm"
                    >
                      <span className={`w-3 h-3 ${item.color} rounded-full flex-shrink-0`}></span>
                      <p className="text-gray-200">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {categories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">{category.title}</h4>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {category.items.map((skillName) => {
                    const skill = skills.find((s) => s.name === skillName);
                    if (!skill) return null;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-3 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        <skill.icon className={`w-8 h-8 ${skill.color}`} />
                        <span className="text-white font-medium text-center">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
