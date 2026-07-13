import useScrollFadeIn from './hooks/useScrollFadeIn';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './index.css';

function App() {
  const mainRef = useScrollFadeIn();

  return (
    <div ref={mainRef}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
