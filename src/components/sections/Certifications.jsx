import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { CONFIG } from '../../config/portfolio.config'

function CertCard({ title, issuer, date, icon, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="glass rounded-2xl p-5 flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300"
    >
      <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
      <div>
        <h3 className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text)' }}>
          {title}
        </h3>
        <p className="text-xs" style={{ color: 'var(--accent)' }}>{issuer}</p>
        <p className="text-xs mt-1 font-mono" style={{ color: 'var(--muted)' }}>{date}</p>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="section-pad">
      <SectionHeading label="Achievements" title="Certifications" highlight="Certifications" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONFIG.certifications.map((cert, i) => (
          <CertCard key={cert.title} {...cert} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
