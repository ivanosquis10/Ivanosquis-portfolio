import Header from './components/Header'
// import AboutMe from './components/AboutMe'
// import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="container mx-auto text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
