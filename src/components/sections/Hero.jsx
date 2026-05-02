import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { CONFIG } from '../../config/portfolio.config'

// Build the TypeAnimation sequence from config
function buildSequence(titles) {
  return titles.flatMap(t => [t, 2200])
}

export default function Hero() {
  const { name, shortBio, titles } = CONFIG.personal
  const { github, linkedin } = CONFIG.social

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* ── Background glow blobs ────────────────────────────── */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(0,115,230,0.18)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(34,211,238,0.14)' }}
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl"
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass"
          style={{ fontSize: '0.75rem', color: 'var(--muted)' }}
        >
          <span
            className="w-2 h-2 rounded-full bg-green-400 glow-dot"
            style={{ animation: 'pulse 2s infinite' }}
          />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <h1
          className="font-display font-extrabold text-5xl md:text-7xl mb-4 leading-tight"
          style={{ color: 'var(--text)' }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">{name.split(' ')[0]}</span>
          <br />
          <span style={{ color: 'var(--text)' }}>{name.split(' ')[1]}</span>
        </h1>

        {/* Typed role */}
        <div
          className="font-display font-semibold text-xl md:text-2xl mb-6"
          style={{ color: 'var(--accent)', minHeight: '2rem' }}
        >
          <TypeAnimation
            sequence={buildSequence(titles)}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Bio */}
        <p
          className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: 'var(--muted)' }}
        >
          {shortBio}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-5">
          {[
            { icon: <FiGithub size={20} />, href: github,   label: 'GitHub'   },
            { icon: <FiLinkedin size={20} />, href: linkedin, label: 'LinkedIn' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-xs"
        style={{ color: 'var(--muted)' }}
      >
        <span>Scroll</span>
        <FiArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  )
}
