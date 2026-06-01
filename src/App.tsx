import { useState } from 'react';
import { ModalContext } from './context/ModalContext';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Career from './components/Career';
import KeyProjects from './components/KeyProjects';
import ProjectList from './components/ProjectList';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import useMainAnimations from './hooks/useMainAnimations';

export default function App() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useMainAnimations();

  return (
    <ModalContext.Provider
      value={{
        activeId,
        openModal: setActiveId,
        closeModal: () => setActiveId(null),
      }}
    >
      <SmoothScrollProvider>
        <div className={`local-body main-body${activeId ? ' modal-open' : ''}`}>
          <div id="grain"></div>
          <ScrollProgress />
          <Nav />

          <Hero />
          <About />
          <Skills />
          <Career />
          <KeyProjects />
          <ProjectList />
          <Education />
          <Contact />

          <Footer />
          <ProjectModal />
        </div>
      </SmoothScrollProvider>
    </ModalContext.Provider>
  );
}
