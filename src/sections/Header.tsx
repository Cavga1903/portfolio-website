'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { PERSONAL_INFO } from '@/data/personalInfo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımda' },
    { href: '#skills', label: 'Yetenekler' },
    { href: '#projects', label: 'Projeler' },
    { href: '#experience', label: 'Deneyim' },
    { href: '#ai-cv-generator', label: 'AI CV' },
    { href: '#contact', label: 'İletişim' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-spacing">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2 sm:space-x-3 mr-8 lg:mr-12">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">
                {PERSONAL_INFO.name.charAt(0)}
              </span>
            </div>
            <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white">
              {PERSONAL_INFO.name}
            </span>
          </Link>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-6">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium text-xs py-2 px-3 rounded-lg hover:bg-slate-800/50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="navbar-link text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium text-sm xl:text-base py-2 px-4 rounded-lg hover:bg-slate-800/50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {PERSONAL_INFO.cvUrl && (
              <Button
                variant="outline"
                size="sm"
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm px-4 py-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-green-400"
              >
                CV İndir
              </Button>
            )}
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="text-xs sm:text-sm px-5 py-2 bg-green-500 hover:bg-green-600 text-slate-900 font-semibold"
            >
              İletişime Geç
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-green-400 hover:bg-slate-800/50 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-slate-300 hover:text-green-400 transition-colors duration-200 py-4 px-6 rounded-lg hover:bg-slate-800/50 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-4 pt-6 border-t border-slate-800">
                {PERSONAL_INFO.cvUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    href={PERSONAL_INFO.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-green-400 py-3"
                  >
                    CV İndir
                  </Button>
                )}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-green-500 hover:bg-green-600 text-slate-900 font-semibold py-3"
                >
                  İletişime Geç
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;