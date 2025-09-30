'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';
import { Button } from '@/components/ui';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'featured' 
    ? PROJECTS.filter(project => project.featured)
    : PROJECTS;

  return (
    <section id="projects" className="section-spacing bg-slate-800">
      <div className="max-w-7xl mx-auto container-spacing">
        <div className="content-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Projelerim
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
            Geliştirdiğim projelerden bazılarını inceleyebilirsiniz. Her proje, 
            farklı teknolojiler ve yaklaşımlar kullanılarak oluşturulmuştur.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={filter === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              Tüm Projeler ({PROJECTS.length})
            </Button>
            <Button
              variant={filter === 'featured' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('featured')}
            >
              Öne Çıkanlar ({PROJECTS.filter(p => p.featured).length})
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="responsive-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Daha Fazla Proje Görmek İster misiniz?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              GitHub hesabımda daha fazla proje ve açık kaynak katkılarımı inceleyebilirsiniz. 
              Ayrıca yeni projeler hakkında güncel bilgi almak için beni takip edebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href="https://github.com/tolgacavga"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                GitHub&apos;da İncele
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Proje Önerisi Yap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
