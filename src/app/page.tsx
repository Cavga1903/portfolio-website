'use client';

import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import AICVGenerator from '@/sections/AICVGenerator';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AICVGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
