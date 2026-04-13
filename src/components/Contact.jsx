import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import portfolio from '../data/portfolio'

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center gap-4 group">
    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-primary transition-colors font-medium"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-200 font-medium">{value}</p>
      )}
    </div>
  </div>
)

const Contact = () => (
  <section id="contact" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaboration, opportunities, or just to say hi
        </p>
      </motion.div>

      <motion.div
        className="glass-card glow-border p-8 md:p-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="space-y-6">
          <ContactItem
            icon={FaEnvelope}
            label="Email"
            value={portfolio.personal.email}
            href={`mailto:${portfolio.personal.email}`}
          />

          {portfolio.personal.phone && (
            <ContactItem
              icon={FaPhone}
              label="Phone"
              value={portfolio.personal.phone}
              href={`tel:${portfolio.personal.phone}`}
            />
          )}

          {portfolio.personal.location && (
            <ContactItem
              icon={FaMapMarkerAlt}
              label="Location"
              value={portfolio.personal.location}
            />
          )}

          {portfolio.personal.linkedin && (
            <ContactItem
              icon={FaLinkedin}
              label="LinkedIn"
              value={portfolio.personal.linkedin.replace('https://', '')}
              href={portfolio.personal.linkedin}
            />
          )}

          {portfolio.personal.github && (
            <ContactItem
              icon={FaGithub}
              label="GitHub"
              value={portfolio.personal.github.replace('https://', '')}
              href={portfolio.personal.github}
            />
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-dark-500/30 text-center">
          <a
            href={`mailto:${portfolio.personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <FaEnvelope size={14} />
            Send Me an Email
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Contact
