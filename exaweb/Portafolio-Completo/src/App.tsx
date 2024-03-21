import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Cover from "./components/Cover"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Stack from "./components/Stack"

const App: React.FC = () => {
  return (
    <div className="container-fluid position-relative main-content" data-bs-spy="scroll" data-bs-target="#navbarTop" data-bs-offset="50">
      <Cover />
      <AboutMe />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
