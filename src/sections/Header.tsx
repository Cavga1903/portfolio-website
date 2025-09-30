'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Ana Sayfa', href: '#home' },
  { name: 'Hakkımda', href: '#about' },
  { name: 'Yetenekler', href: '#skills' },
  { name: 'Projeler', href: '#projects' },
  { name: 'Deneyim', href: '#experience' },
  { name: 'AI CV', href: '#ai-cv-generator' },
  { name: 'İletişim', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıkken body'nin scroll olmasını engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">
                T
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white font-sora">
              Tolga Çavga
            </span>
          </Link>

          {/* Desktop Menü */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-300 hover:text-green-400 transition-colors duration-300 font-medium text-sm xl:text-base py-2 px-3 rounded-lg hover:bg-slate-800/50"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CV Butonu - Desktop */}
          <div className="hidden lg:block">
            <a
              href="/TolgaCavgaENCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-slate-900 transition-all duration-300 font-semibold"
            >
              CV İndir
            </a>
          </div>

          {/* Mobil Menü Butonu (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white z-50 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl sm:text-3xl text-slate-200 hover:text-green-400 transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.button>
            ))}
            <motion.a
              href="/TolgaCavgaENCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-green-500 text-green-500 px-6 py-3 rounded-md hover:bg-green-500 hover:text-slate-900 transition-all duration-300 font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              CV İndir
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;