import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="skills" className="section-spacing bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,241,149,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,241,149,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto container-spacing relative z-10">
        <div className="content-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Yeteneklerim
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Modern web geliştirme teknolojileri konusunda kapsamlı deneyime sahibim. 
            Sürekli öğrenmeye ve kendimi geliştirmeye odaklanırım.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <div key={category} className="content-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-6 sm:mb-8 lg:mb-10">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="responsive-grid max-w-6xl mx-auto">
                {skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-3xl p-10 shadow-2xl max-w-5xl mx-auto">
            <motion.h3 
              className="text-3xl font-display font-bold text-slate-200 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">Sürekli Öğrenme</span>
            </motion.h3>
            <motion.p 
              className="text-lg text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Teknoloji dünyası hızla değişiyor ve ben bu değişime ayak uydurmak için 
              sürekli öğrenmeye devam ediyorum. Yeni teknolojileri takip eder, 
              projelerimde uygular ve toplulukla paylaşırım.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {[
                { text: "Online Kurslar", color: "bg-green-500/20 text-green-400 border-green-500/30" },
                { text: "Açık Kaynak Katkıları", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
                { text: "Teknik Blog Yazıları", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
                { text: "Konferans ve Etkinlikler", color: "bg-green-500/20 text-green-400 border-green-500/30" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.color} px-6 py-3 rounded-full text-sm font-medium border backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
