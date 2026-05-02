import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { CONFIG } from '../../config/portfolio.config'

function SkillCard({ category, icon, items, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-display font-bold text-base" style={{ color: 'var(--text)' }}>
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-full font-mono font-medium transition-all duration-200 hover:scale-105 cursor-default"
            style={{ background: 'rgba(0,115,230,0.1)', color: 'var(--accent)', border: '1px solid rgba(0,115,230,0.2)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-pad">
      <SectionHeading label="What I Know" title="Technical Skills" highlight="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CONFIG.skills.map((cat, i) => (
          <SkillCard key={cat.category} {...cat} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
