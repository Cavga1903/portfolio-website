import React from 'react';
import { PERSONAL_INFO } from '@/data/personalInfo';

const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing bg-slate-800">
      <div className="max-w-7xl mx-auto container-spacing">
        <div className="content-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Hakkımda
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Teknoloji tutkunu bir yazılım geliştiricisi olarak, kullanıcı deneyimini ön planda tutan 
            ve modern web teknolojileri ile performanslı çözümler üretmeye odaklanıyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Content */}
          <div className="content-left space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 leading-relaxed responsive-text">
                {PERSONAL_INFO.description}
              </p>
              
              <p className="text-gray-300 leading-relaxed responsive-text">
                Kariyerim boyunca farklı projelerde çalışarak, frontend ve backend teknolojilerinde 
                derinlemesine deneyim kazandım. Özellikle React ekosistemi, Node.js ve modern 
                veritabanı teknolojileri konularında uzmanlaştım.
              </p>
              
              <p className="text-gray-300 leading-relaxed responsive-text">
                Sürekli öğrenmeye ve kendimi geliştirmeye odaklanırım. Yeni teknolojileri takip eder, 
                projelerimde uygular ve toplulukla paylaşırım. Açık kaynak projelere katkıda bulunmayı 
                ve teknik yazılar yazmayı seviyorum.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-12">
              <div className="content-center p-3 sm:p-4 lg:p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                  5+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Yıl Deneyim
                </div>
              </div>
              <div className="content-center p-3 sm:p-4 lg:p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Tamamlanan Proje
                </div>
              </div>
              <div className="content-center p-3 sm:p-4 lg:p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                  20+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Mutlu Müşteri
                </div>
              </div>
              <div className="content-center p-3 sm:p-4 lg:p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                  10+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Teknoloji
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tutkularım</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Modern web teknolojileri</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Kullanıcı deneyimi tasarımı</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Performans optimizasyonu</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Açık kaynak projeler</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Teknik yazı yazma</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Mentorluk ve eğitim</span>
                </li>
              </ul>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
