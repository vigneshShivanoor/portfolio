import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { CONFIG } from '../../config/portfolio.config'

function ExperienceCard({ role, company, location, period, type, current, bullets, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div
        className="absolute left-0 top-2 bottom-0 w-px"
        style={{ background: 'var(--border)' }}
      />
      {/* Timeline dot */}
      <div
        className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2"
        style={{
          background: current ? 'var(--accent)' : 'var(--surface)',
          borderColor: 'var(--accent)',
          boxShadow: current ? '0 0 10px var(--glow)' : 'none',
        }}
      />

      <div
        className="glass rounded-2xl p-6 ml-4 hover:-translate-y-1 transition-transform duration-300"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text)' }}>
              {role}
            </h3>
            <p className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
              {company} · {location}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span
              className="block text-xs font-mono mb-1"
              style={{ color: 'var(--muted)' }}
            >
              {period}
            </span>
            <span
              className="inline-block text-xs px-2 py-0.5 rounded-full font-semibold"
              style={
                current
                  ? { background: 'rgba(0,115,230,0.15)', color: 'var(--accent)' }
                  : { background: 'var(--border)', color: 'var(--muted)' }
              }
            >
              {current ? '● ' : ''}{type}
            </span>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="section-pad">
      <SectionHeading label="Career Path" title="Work Experience" highlight="Experience" />
      <div className="max-w-3xl mx-auto">
        {CONFIG.experience.map((exp, i) => (
          <ExperienceCard key={exp.id} {...exp} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
