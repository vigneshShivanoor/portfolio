import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONFIG } from '../../config/portfolio.config'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'var(--surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-lg gradient-text"
        >
          &lt;Vignesh /&gt;
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: 'var(--muted)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Resume */}
          <a
            href={CONFIG.personal.resumeUrl}
            download
            className="hidden md:inline-block btn-primary text-sm py-2 px-4"
          >
            Resume ↓
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span
              className="block h-0.5 w-5 transition-all duration-300"
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }}
            />
            <span
              className="block h-0.5 w-5 transition-all duration-300"
              style={{
                background: 'var(--text)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-5 transition-all duration-300"
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-sm"
                  style={{ color: 'var(--muted)' }}
                >
                  {l.label}
                </a>
              ))}
              <a href={CONFIG.personal.resumeUrl} download className="btn-primary text-center text-sm py-2">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
