import { Route, Routes } from 'react-router-dom';
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
      <Route path="*" element={<PortfolioPage />} />
    </Routes>
  );
}
