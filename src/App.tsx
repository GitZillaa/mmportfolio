
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main className="space-y-20 px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center text-gray-500 py-4">
        © 2025 Dein Name
      </footer>
    </div>
  )
}

export default App
