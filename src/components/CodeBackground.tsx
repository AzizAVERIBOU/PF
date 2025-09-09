import { useEffect, useRef } from 'react'

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const currentTextRef = useRef<string>('')
  const fullTextRef = useRef<string>('Je suis étudiant en informatique à l\'Université du Québec à Rimouski, campus de Lévis, et je me distingue par un parcours académique solide allant de la classe préparatoire en mathématiques et sciences au Burkina Faso jusqu\'à mon baccalauréat en cours. Je maîtrise plusieurs langages de programmation tels que C#, Python, JavaScript, PHP, Django, React JS et ASM, ainsi que les bases de données MySQL et SQL Server et différents environnements de développement modernes comme Visual Studio, VS Code, Eclipse et GitHub. Mes expériences professionnelles variées, allant du soutien et de la sécurité au CISSS Chaudière-Appalaches à la production chez Teknion, en passant par le service à la clientèle chez Maxi et la logistique chez Dylane Service, m\'ont permis de développer des compétences en communication, en gestion de situations complexes et en travail d\'équipe. Courtois, patient et engagé, je combine ma passion pour la technologie à ma volonté de contribuer à des projets innovants et dynamiques, tout en cultivant des intérêts pour le sport, la lecture, les jeux de stratégie et l\'apprentissage de nouvelles langues.')
  const charIndexRef = useRef<number>(0)
  const lastCharTimeRef = useRef<number>(0)


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const now = Date.now()
      
      // Ajouter un caractère toutes les 0.2 secondes
      if (now - lastCharTimeRef.current >= 200 && charIndexRef.current < fullTextRef.current.length) {
        currentTextRef.current += fullTextRef.current[charIndexRef.current]
        charIndexRef.current++
        lastCharTimeRef.current = now
      }

      // Dessiner le texte avec retour à la ligne automatique
      ctx.font = '16px "Fira Code", "Courier New", monospace'
      ctx.fillStyle = 'rgba(34, 197, 94, 0.8)' // Vert terminal
      
      const maxWidth = canvas.width - 200 // Largeur maximale
      const lineHeight = 25
      let x = 100
      let y = 150
      
      // Diviser le texte en lignes
      const words = currentTextRef.current.split(' ')
      let currentLine = ''
      
      for (let i = 0; i < words.length; i++) {
        const testLine = currentLine + words[i] + ' '
        const metrics = ctx.measureText(testLine)
        
        if (metrics.width > maxWidth && currentLine !== '') {
          // Dessiner la ligne actuelle
          ctx.fillText(currentLine, x, y)
          y += lineHeight
          currentLine = words[i] + ' '
        } else {
          currentLine = testLine
        }
      }
      
      // Dessiner la dernière ligne
      if (currentLine) {
        ctx.fillText(currentLine, x, y)
      }
      
      // Dessiner le curseur à la fin du texte
      const cursorMetrics = ctx.measureText(currentLine)
      ctx.fillStyle = 'rgba(34, 197, 94, 1)'
      ctx.fillRect(x + cursorMetrics.width, y - 15, 3, 20)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  )
}
