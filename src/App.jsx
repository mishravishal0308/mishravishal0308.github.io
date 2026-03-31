import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Pipeline from './sections/Pipeline';
import Architecture from './sections/Architecture';
import TerminalSection from './sections/TerminalSection';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import BlogPost from './pages/BlogPost';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <AnimatedBackground />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Certifications />
              <Projects />
              <Experience />
              <Pipeline />
              <Architecture />
              <TerminalSection />
              <Blog />
              <Contact />
            </main>
          }
        />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
