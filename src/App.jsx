import Skills from './components/Skills'
import About from "./components/About";
import CursorFollower from "./components/CursorFollower";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App () {
  return (
    <main>
      <Navbar />
      <CursorFollower />
      <Hero />
      <About />
      <Skills />
    </main>
  )
}
