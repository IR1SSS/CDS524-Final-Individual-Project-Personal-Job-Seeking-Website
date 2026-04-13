import { motion } from 'framer-motion'
import { FaCode, FaBriefcase, FaTools } from 'react-icons/fa'
import portfolio from '../data/portfolio'

const SkillBar = ({ name, level, icon: Icon }) => (
  <div className="group">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="text-primary/70 text-sm" />}
        <span className="text-gray-300 text-sm font-medium group-hover:text-primary transition-colors">
          {name}
        </span>
      </div>
      <span className="text-gray-500 text-xs font-mono">{level}%</span>
    </div>
    <div className="h-1.5 bg-dark-500/50 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      />
    </div>
  </div>
)

const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }) => (
  <motion.div
    className="glass-card glow-border p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </motion.div>
)

const Skills = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          My technical capabilities, business skills, and the tools I work with daily
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <SkillCategory
          title="Technical Skills"
          icon={FaCode}
          skills={portfolio.skills.technical}
          delay={0.1}
        />
        <SkillCategory
          title="Business Skills"
          icon={FaBriefcase}
          skills={portfolio.skills.business}
          delay={0.2}
        />
        <SkillCategory
          title="Tools & Platforms"
          icon={FaTools}
          skills={portfolio.skills.tools}
          delay={0.3}
        />
      </div>
    </div>
  </section>
)

export default Skills
