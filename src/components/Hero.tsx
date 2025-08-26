import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Palette, Zap } from 'lucide-react';
const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Container animation: stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
    >
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-2xl"
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
            className="absolute w-2 h-2 bg-emerald-400/60 rounded-full blur-sm"
            style={{ left: `${20 + i * 12}%`, top: `${30 + i * 8}%` }}
          />
        ))}
      </div>

     

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
       

        {/* Heading */}
        <motion.h1
          variants={containerVariants}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight mt-20"
        >
         Hi I'm{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
             Ahmed Khiari
            </span>
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center items-center gap-4 mb-8"
        >
          {[
            { icon: Code, label: 'Software Engineer', color: 'emerald-400' },
            { icon: Palette, label: 'Full Stack Developer', color: 'teal-400' },
            { icon: Zap, label: 'AI Enthusiast', color: 'cyan-400' },
          ].map(({ icon: Icon, label, color }, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon className={`w-5 h-5 text-${color}`} />
                <span className="text-xl sm:text-2xl font-light">{label}</span>
              </div>
              {i < 2 && <div className="w-2 h-2 bg-gray-500 rounded-full"></div>}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={containerVariants}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mb-12 mx-auto leading-relaxed font-light"
        >
          Transforming ideas into elegant digital experiences through{' '}
          <span className="text-emerald-400 font-medium">clean code</span>,{' '}
          <span className="text-teal-400 font-medium">innovative design</span>, and{' '}
          <span className="text-cyan-400 font-medium">cutting-edge technology</span>. Passionate about creating solutions that make a difference.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToAbout}
            className="group relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 flex items-center gap-3"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                'https://drive.google.com/drive/folders/1dc9CE-MY7aC6m_rDJ-3Q9oSxrm6FA0UD',
                '_blank'
              )
            }
            className="group border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
