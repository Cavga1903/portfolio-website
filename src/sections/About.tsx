import React from 'react';
import { PERSONAL_INFO } from '@/data/personalInfo';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hakkımda
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Teknoloji tutkunu bir yazılım geliştiricisi olarak, kullanıcı deneyimini ön planda tutan 
            ve modern web teknolojileri ile performanslı çözümler üretmeye odaklanıyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {PERSONAL_INFO.description}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kariyerim boyunca farklı projelerde çalışarak, frontend ve backend teknolojilerinde 
                derinlemesine deneyim kazandım. Özellikle React ekosistemi, Node.js ve modern 
                veritabanı teknolojileri konularında uzmanlaştım.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sürekli öğrenmeye ve kendimi geliştirmeye odaklanırım. Yeni teknolojileri takip eder, 
                projelerimde uygular ve toplulukla paylaşırım. Açık kaynak projelere katkıda bulunmayı 
                ve teknik yazılar yazmayı seviyorum.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Yıl Deneyim
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Tamamlanan Proje
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  20+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Mutlu Müşteri
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
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
