import { motion } from 'framer-motion'
import { FaGraduationCap, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'
import portfolio from '../data/portfolio'

const highlightIcons = [FaRocket, FaLightbulb, FaUsers, FaGraduationCap]

const About = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my background and what drives me</p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Introduction */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card glow-border p-6 md:p-8">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {portfolio.about.introduction}
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card glow-border p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-5">
              {portfolio.about.education.map((edu, index) => (
                <div key={index} className={index > 0 ? 'pt-4 border-t border-dark-500/30' : ''}>
                  <h4 className="text-primary font-medium text-lg mb-1">{edu.degree}</h4>
                  <p className="text-gray-300 mb-1">{edu.school}</p>
                  <p className="text-gray-500 font-mono text-sm">{edu.period}</p>
                  {edu.courses && (
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                      <span className="text-gray-400">Courses:</span> {edu.courses}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlights */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {portfolio.about.highlights.map((item, index) => {
          const Icon = highlightIcons[index % highlightIcons.length]
          return (
            <motion.div
              key={item.title}
              className="glass-card glow-border p-5"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
                <Icon size={20} />
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  </section>
)

export default About
