import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Stack from "./components/Stack"

function App() {

  return (
    <div className="container-fluid pt-md-5 pt-4 px-4">
      <AboutMe />
      <Stack />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
