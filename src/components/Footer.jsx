import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import portfolio from '../data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-500/50 bg-dark-900/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>&copy; {currentYear} {portfolio.personal.name}. Built with</span>
            <FaHeart className="text-red-500 text-xs" />
            <span>and React</span>
          </div>

          <div className="flex items-center gap-4">
            {portfolio.personal.github && (
              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}
            {portfolio.personal.linkedin && (
              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
