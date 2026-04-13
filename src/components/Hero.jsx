import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import portfolio from '../data/portfolio'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="font-mono text-primary text-sm md:text-base mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {portfolio.personal.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gradient mb-6">
            {portfolio.personal.position}
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            {portfolio.personal.tagline}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {portfolio.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="tag animate-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {portfolio.personal.github && (
            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          )}
          {portfolio.personal.linkedin && (
            <a
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          )}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="text-gray-500 hover:text-primary transition-colors animate-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll down"
        >
          <HiChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
