import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { CONFIG } from '../../config/portfolio.config'

const CONTACTS = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: CONFIG.personal.email,
    href: `mailto:${CONFIG.personal.email}`,
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: CONFIG.personal.phone,
    href: `tel:${CONFIG.personal.phone}`,
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'vigneshShivanoor',
    href: CONFIG.social.github,
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'shivanoor-vignesh',
    href: CONFIG.social.linkedin,
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const { serviceId, templateId, publicKey } = CONFIG.emailjs

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending]   = useState(false)

  function handleChange(e) {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!serviceId || !templateId || !publicKey) {
      toast.error('EmailJS not configured. Add VITE_EMAILJS_* vars to your .env file.')
      return
    }
    setSending(true)
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      toast.success('Message sent! I\'ll get back to you soon 🚀')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error('Failed to send. Please email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <SectionWrapper id="contact" className="section-pad">
      <SectionHeading label="Let's Talk" title="Get In Touch" highlight="In Touch" />

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Left — contact info */}
        <div>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
            Whether you have a project in mind, want to collaborate on AI/LLM systems, or just want to say hello — my inbox is always open.
          </p>

          <div className="space-y-4">
            {CONTACTS.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: '1px solid var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[var(--accent)]"
                  style={{ background: 'rgba(0,115,230,0.1)', color: 'var(--accent)' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                    {c.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — contact form */}
        <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--muted)' }}>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--muted)' }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--muted)' }}>Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--muted)' }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project or opportunity…"
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <FiSend size={16} /> Send Message
              </>
            )}
          </button>

          <p className="text-center text-xs" style={{ color: 'var(--muted)' }}>
            Or email directly:{' '}
            <a href={`mailto:${CONFIG.personal.email}`} className="underline" style={{ color: 'var(--accent)' }}>
              {CONFIG.personal.email}
            </a>
          </p>
        </form>
      </div>
    </SectionWrapper>
  )
}
