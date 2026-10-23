import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExperienceEducation from './components/ExperienceEducation';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-surface text-ink flex flex-col font-sans">
          <Navbar />
          <main className="flex-1">
            <Hero />
            <Projects />
            <Skills />
            <ExperienceEducation />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}