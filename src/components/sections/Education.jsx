import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { CONFIG } from '../../config/portfolio.config'

function EduCard({ degree, institution, location, period, score, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-display font-bold text-base" style={{ color: 'var(--text)' }}>
          {degree}
        </h3>
        <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{period}</span>
      </div>
      <p className="text-sm mb-1" style={{ color: 'var(--accent)' }}>{institution}</p>
      <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>{location}</p>
      <span
        className="inline-block text-xs px-3 py-1 rounded-full font-bold"
        style={{ background: 'rgba(0,115,230,0.12)', color: 'var(--accent)' }}
      >
        {score}
      </span>
    </motion.div>
  )
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="section-pad">
      <SectionHeading label="Academic Background" title="Education" highlight="Education" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {CONFIG.education.map((edu, i) => (
          <EduCard key={edu.institution} {...edu} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
