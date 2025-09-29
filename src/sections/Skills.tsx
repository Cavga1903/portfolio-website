import React from 'react';
import { SkillCard } from '@/components/SkillCard';
import { SKILLS } from '@/data/skills';

const Skills: React.FC = () => {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Veritabanı',
    tool: 'Araçlar',
    language: 'Diller'
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Yeteneklerim
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Modern web geliştirme teknolojileri konusunda kapsamlı deneyime sahibim. 
            Sürekli öğrenmeye ve kendimi geliştirmeye odaklanırım.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Sürekli Öğrenme
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Teknoloji dünyası hızla değişiyor ve ben bu değişime ayak uydurmak için 
              sürekli öğrenmeye devam ediyorum. Yeni teknolojileri takip eder, 
              projelerimde uygular ve toplulukla paylaşırım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                Online Kurslar
              </div>
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                Açık Kaynak Katkıları
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                Teknik Blog Yazıları
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium">
                Konferans ve Etkinlikler
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
