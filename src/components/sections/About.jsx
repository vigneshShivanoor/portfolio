import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { CONFIG } from '../../config/portfolio.config'
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'

const STATS = [
  { value: '1+',  label: 'Year AI Engineering' },
  { value: '6+',  label: 'Projects Built'      },
  { value: '3+',  label: 'Internships'         },
  { value: '8.48',label: 'B.Tech CGPA'         },
]

export default function About() {
  const { about, resumeUrl, email } = CONFIG.personal
  const { github, linkedin }        = CONFIG.social

  return (
    <SectionWrapper id="about" className="section-pad">
      <SectionHeading label="Who I Am" title="About Me" highlight="Me" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          {about.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4 leading-relaxed text-sm md:text-base" style={{ color: 'var(--muted)' }}>
              {para}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 mt-6">
            <a href={resumeUrl} download className="btn-primary flex items-center gap-2 text-sm">
              <FiDownload /> Download Resume
            </a>
            <a href={github}   target="_blank" rel="noreferrer"
               className="btn-outline flex items-center gap-2 text-sm">
              <FiGithub /> GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer"
               className="btn-outline flex items-center gap-2 text-sm">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map(s => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="font-display font-bold text-3xl gradient-text mb-1"
              >
                {s.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
