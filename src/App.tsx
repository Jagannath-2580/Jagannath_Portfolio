import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CustomCursor, Loader, Navbar, ScrollProgress } from './components/Layout';
import { ProjectDetails } from './components/ProjectDetails';
import { About, Contact, Education, Experience, Projects, Resume, Skills } from './components/Sections';

function PortfolioPage() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}
