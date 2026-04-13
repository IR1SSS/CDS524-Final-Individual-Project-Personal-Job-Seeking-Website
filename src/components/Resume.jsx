import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaBriefcase, FaCertificate, FaFileAlt } from 'react-icons/fa'
import portfolio from '../data/portfolio'

const Resume = () => (
  <section id="resume" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          A concise summary of my professional background and qualifications
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Summary */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass-card glow-border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <FaFileAlt size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {portfolio.resume.summary}
            </p>

            {/* Experience */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <FaBriefcase size={16} />
                </div>
                <h4 className="text-lg font-semibold text-white">Experience</h4>
              </div>
              {portfolio.resume.experience.map((exp) => (
                <div key={exp.title} className="ml-4 pl-4 border-l-2 border-dark-500 mb-4 last:mb-0">
                  <h5 className="text-white font-medium">{exp.title}</h5>
                  <p className="text-primary text-sm font-mono">{exp.company} | {exp.period}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">&#9656;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Education */}
          <div className="glass-card glow-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FaGraduationCap size={18} />
              </div>
              <h4 className="text-lg font-semibold text-white">Education</h4>
            </div>
            <div className="space-y-4">
              {portfolio.resume.education.map((edu, index) => (
                <div key={index} className={index > 0 ? 'pt-3 border-t border-dark-500/30' : ''}>
                  <h5 className="text-white font-medium">{edu.degree}</h5>
                  <p className="text-gray-300 text-sm">{edu.school}</p>
                  <p className="text-gray-500 font-mono text-sm mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card glow-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <FaCertificate size={18} />
              </div>
              <h4 className="text-lg font-semibold text-white">Certifications</h4>
            </div>
            <ul className="space-y-2">
              {portfolio.resume.certifications.map((cert) => (
                <li key={cert} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-secondary mt-1 text-xs">&#9656;</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Download Button */}
          <a
            href={portfolio.personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <FaDownload size={14} />
            Download Full Resume (PDF)
          </a>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Resume
