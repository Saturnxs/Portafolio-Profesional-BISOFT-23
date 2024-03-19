import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Stack from "./components/Stack"

const App: React.FC = () => {
  return (
    <div className="container-fluid px-4 position-relative" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
      <AboutMe />
      <Stack />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
