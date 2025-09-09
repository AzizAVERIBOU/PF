import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useRef, type MouseEvent as ReactMouseEvent } from 'react'
import './App.css'
import ProjectsPage from './pages/Projects'
import ProjectDetailPage from './pages/ProjectDetail'
import AboutPage from './pages/About'
import CVPage from './pages/CV'
import ContactPage from './pages/Contact'
import ProfileImage from './assets/Image.jpg'
import CodeBackground from './components/CodeBackground'

function App() {
  const location = useLocation()
  const bioSectionRef = useRef<HTMLElement | null>(null)
  const lastDustSpawnTimeRef = useRef(0)

  const handleBioMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    target.style.setProperty('--mx', `${x}px`)
    target.style.setProperty('--my', `${y}px`)

    const now = performance.now()
    if (now - lastDustSpawnTimeRef.current < 40) return
    lastDustSpawnTimeRef.current = now

    const dust = document.createElement('span')
    dust.className = 'dust'
    const size = 4 + Math.random() * 6
    dust.style.width = `${size}px`
    dust.style.height = `${size}px`
    dust.style.left = `${x - size / 2}px`
    dust.style.top = `${y - size / 2}px`
    const angle = Math.random() * Math.PI * 2
    const distance = 12 + Math.random() * 18
    const tx = Math.cos(angle) * distance
    const ty = Math.sin(angle) * distance
    dust.style.setProperty('--tx', `${tx}px`)
    dust.style.setProperty('--ty', `${ty}px`)
    target.appendChild(dust)
    window.setTimeout(() => {
      dust.remove()
    }, 700)
  }
  return (
    <>
      <CodeBackground />
      <header>
        <div className="header-left">
          <h1>Aziz AVERIBOU</h1>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link></li>
              <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projets</Link></li>
              <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>À propos</Link></li>
              <li><Link to="/cv" className={location.pathname === "/cv" ? "active" : ""}>CV</Link></li>
              <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <section className="hero">
                  <img src={ProfileImage} alt="Photo de profil d'Aziz AVERIBOU" className="hero-photo" />
                  <h2 className="hero-name">Aziz AVERIBOU</h2>
                </section>
                <section
                  ref={bioSectionRef}
                  className="home-bio"
                  onMouseMove={handleBioMouseMove}
                >
                  <p>
                    Je m’appelle <strong>Weni Aristide Abdoul Aziz AVERIBOU</strong>, étudiant en informatique à
                    l’Université du Québec à Rimouski (UQAR), actuellement en cinquième session et en fin de formation.
                  </p>
                  <p>
                    Passionné par les technologies et le développement logiciel, j’ai travaillé sur des projets
                    académiques tels que <strong>UqarLive</strong> et un <strong>système de gestion de garage</strong>, en utilisant
                    des outils modernes comme <strong>C#</strong>, <strong>.NET</strong>, <strong>React</strong>, <strong>Django</strong>, <strong>WPF</strong>,
                    <strong> JavaScript</strong> et autres.
                  </p>
                  <p>
                    Je me définis comme un <strong>développeur full‑stack</strong>, avec une préférence marquée pour le
                    <strong> backend</strong> et une grande aisance avec des technologies variées. Je m’intéresse particulièrement
                    au <strong>développement logiciel</strong>, au <strong>cloud</strong>, à <strong>l’IA</strong> et à la <strong>data</strong>.
                  </p>
                  <p>
                    Sérieux, adaptable et doté d’un fort esprit d’équipe, je suis reconnu pour ma capacité à apprendre
                    rapidement et à m’intégrer efficacement dans de nouveaux environnements.
                  </p>
                  <h3>Objectif</h3>
                  <p>
                    Je suis actuellement à la recherche d’un <strong>stage pour l’hiver 2026</strong>, dans la région de
                    <strong> Québec</strong> ou <strong>Lévis</strong>, en présentiel, hybride ou à distance. Mon objectif est de mettre
                    mes compétences et mon énergie au service d’une entreprise innovante, tout en poursuivant mon
                    développement professionnel.
                  </p>
                </section>
              </>
            )}
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Aziz AVERIBOU</p>
      </footer>
    </>
  )
}

export default App
