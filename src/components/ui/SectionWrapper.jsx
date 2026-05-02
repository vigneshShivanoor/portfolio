import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Wraps any section with a fade+slide-up animation triggered by scroll.
 * Props:
 *   id        – nav anchor id
 *   className – additional classes on the outer <section>
 *   children
 */
export default function SectionWrapper({ id, className = '', children }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id={id} className={className}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
