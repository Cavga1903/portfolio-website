import React from 'react';
import { PERSONAL_INFO } from '@/data/personalInfo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {PERSONAL_INFO.name.charAt(0)}
                </span>
              </div>
              <span className="font-bold text-xl">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, 
              performanslı ve ölçeklenebilir uygulamalar geliştiren yazılım geliştiricisi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Ana Sayfa
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Hakkımda
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Yetenekler
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Projeler
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Deneyim
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                İletişim
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-2">
              <p className="text-gray-400">{PERSONAL_INFO.email}</p>
              <p className="text-gray-400">{PERSONAL_INFO.location}</p>
              {PERSONAL_INFO.phone && (
                <p className="text-gray-400">{PERSONAL_INFO.phone}</p>
              )}
            </div>
            
            <div className="flex space-x-4">
              {PERSONAL_INFO.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-gray-400 hover:text-white font-semibold">
                    {social.icon === 'github' && 'G'}
                    {social.icon === 'linkedin' && 'L'}
                    {social.icon === 'twitter' && 'T'}
                    {social.icon === 'email' && '@'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {PERSONAL_INFO.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Next.js & Tailwind CSS ile geliştirilmiştir</span>
              <div className="flex items-center space-x-2">
              <span>❤️</span>
              <span>İstanbul&apos;da yapıldı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
