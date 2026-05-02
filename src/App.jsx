import { Toaster } from 'react-hot-toast'
import Navbar        from './components/layout/Navbar'
import Footer        from './components/layout/Footer'
import Hero          from './components/sections/Hero'
import About         from './components/sections/About'
import Skills        from './components/sections/Skills'
import Experience    from './components/sections/Experience'
import Projects      from './components/sections/Projects'
import Education     from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Contact       from './components/sections/Contact'
import { useTheme }  from './hooks/useTheme'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <div className="relative min-h-screen noise">
      <Toaster
        position="top-right"
        toastOptions={{ className: 'font-body text-sm', duration: 4000 }}
      />
      <Navbar dark={dark} toggle={toggle} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
