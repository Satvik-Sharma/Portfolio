import Contact from './components/Contact';
import Skills from './components/Skills'
import About from "./components/About";
import CursorFollower from "./components/CursorFollower";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from './components/Projects';

export default function App () {
  return (
    <main>
      <Navbar />
      <CursorFollower />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
