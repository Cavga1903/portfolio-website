import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { Button, Card } from './ui';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Öne Çıkan
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              Canlı Demo
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
