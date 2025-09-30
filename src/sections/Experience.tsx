import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard } from '@/components/ExperienceCard';
import { EXPERIENCES } from '@/data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,241,149,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(20,241,149,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Deneyimim</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kariyerim boyunca farklı şirketlerde ve projelerde çalışarak kapsamlı deneyim kazandım. 
            Her pozisyonda yeni beceriler öğrendim ve kendimi sürekli geliştirdim.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 timeline-dot transform md:-translate-x-2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 w-full ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <ExperienceCard experience={experience} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6",
              title: "Kurumsal Deneyim",
              description: "Büyük ekiplerde çalışma ve karmaşık projeleri yönetme deneyimi",
              color: "green"
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Hızlı Öğrenme",
              description: "Yeni teknolojileri hızla öğrenme ve projelerde uygulama yeteneği",
              color: "cyan"
            },
            {
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              title: "Takım Çalışması",
              description: "Farklı rollerde çalışma ve ekip liderliği deneyimi",
              color: "purple"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-20 h-20 bg-${item.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border border-${item.color}/30`}>
                <svg className={`w-10 h-10 text-${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-200 mb-3 group-hover:text-green-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
