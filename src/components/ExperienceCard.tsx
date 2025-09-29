import React from 'react';
import { Experience } from '@/types';
import { Card } from './ui';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long' 
    });
  };
  
  return (
    <Card className="relative">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">
              {experience.company.charAt(0)}
            </span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {experience.position}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {experience.company}
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(experience.startDate)} - {experience.current ? 'Devam Ediyor' : formatDate(experience.endDate!)}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map(tech => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            📍 {experience.location}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
export { ExperienceCard };
