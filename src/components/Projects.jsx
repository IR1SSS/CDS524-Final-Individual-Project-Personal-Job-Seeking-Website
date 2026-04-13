import { motion } from 'framer-motion'
import { FaExclamationCircle, FaDatabase, FaCogs, FaChartLine, FaUser, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import portfolio from '../data/portfolio'

const ProjectField = ({ icon: Icon, label, children }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex items-center gap-2 mb-1.5">
      <Icon className="text-primary text-xs" />
      <h5 className="text-primary font-mono text-xs uppercase tracking-wider">{label}</h5>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed pl-5">{children}</p>
  </div>
)

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="glass-card glow-border overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    {/* Header */}
    <div className="p-6 pb-4 border-b border-dark-500/30">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium w-fit ${
          project.type === 'Team Project'
            ? 'bg-secondary/10 text-secondary border border-secondary/20'
            : 'bg-primary/10 text-primary border border-primary/20'
        }`}>
          {project.type}
        </span>
      </div>
      <p className="text-gray-500 font-mono text-sm">{project.period}</p>
    </div>

    {/* Body */}
    <div className="p-6 space-y-1">
      <ProjectField icon={FaExclamationCircle} label="Problem">
        {project.problem}
      </ProjectField>
      <ProjectField icon={FaDatabase} label="Data">
        {project.data}
      </ProjectField>
      <ProjectField icon={FaCogs} label="Approach">
        {project.approach}
      </ProjectField>
      <ProjectField icon={FaChartLine} label="Outcome">
        {project.outcome}
      </ProjectField>
      <ProjectField icon={FaUser} label="My Contribution">
        {project.contribution}
      </ProjectField>
    </div>

    {/* Links */}
    {project.links && project.links.length > 0 && (
      <div className="px-6 pb-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-600/50 border border-dark-500/50 text-gray-300 text-sm hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            {link.label === 'GitHub' ? <FaGithub size={14} /> : <FaExternalLinkAlt size={12} />}
            {link.label}
          </a>
        ))}
      </div>
    )}
  </motion.div>
)

const Projects = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real-world projects showcasing my problem-solving abilities and technical expertise
        </p>
      </motion.div>

      <div className="space-y-8">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
)

export default Projects
