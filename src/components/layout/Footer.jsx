import { CONFIG } from '../../config/portfolio.config'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex justify-center gap-5 mb-4">
        <a href={CONFIG.social.github}   target="_blank" rel="noreferrer" aria-label="GitHub"
           className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
          <FiGithub size={20} />
        </a>
        <a href={CONFIG.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
           className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
          <FiLinkedin size={20} />
        </a>
        <a href={`mailto:${CONFIG.personal.email}`} aria-label="Email"
           className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
          <FiMail size={20} />
        </a>
      </div>
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        © {year} {CONFIG.personal.name} · Built with React + Vite + Tailwind
      </p>
    </footer>
  )
}
