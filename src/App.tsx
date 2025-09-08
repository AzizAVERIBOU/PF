import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProjectsPage from './pages/Projects'
import ProjectDetailPage from './pages/ProjectDetail'
import AboutPage from './pages/About'
import CVPage from './pages/CV'
import ContactPage from './pages/Contact'

function App() {
  return (
    <>
      <header>
        <h1>Aziz AVERIBOU</h1>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <section className="hero">
                  <div className="hero-photo" aria-label="Photo de profil" />
                  <h2 className="hero-name">Aziz AVERIBOU</h2>

                </section>
                <section className="home-bio">
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
