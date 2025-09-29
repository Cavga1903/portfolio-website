import React from 'react';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };
  
  const getLevelText = (level: string) => {
    switch (level) {
      case 'expert':
        return 'Uzman';
      case 'advanced':
        return 'İleri';
      case 'intermediate':
        return 'Orta';
      case 'beginner':
        return 'Başlangıç';
      default:
        return level;
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(skill.level)}`}>
          {getLevelText(skill.level)}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${getLevelColor(skill.level)}`}
          style={{
            width: skill.level === 'expert' ? '100%' :
                   skill.level === 'advanced' ? '80%' :
                   skill.level === 'intermediate' ? '60%' : '40%'
          }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
export { SkillCard };
