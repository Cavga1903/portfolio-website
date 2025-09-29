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
    <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {skill.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm ${getLevelColor(skill.level)}`}>
          {getLevelText(skill.level)}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
        <div
          className={`h-3 rounded-full transition-all duration-700 ease-out shadow-sm ${getLevelColor(skill.level)}`}
          style={{
            width: skill.level === 'expert' ? '100%' :
                   skill.level === 'advanced' ? '85%' :
                   skill.level === 'intermediate' ? '70%' : '55%'
          }}
        />
      </div>
      
      <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        {skill.category === 'frontend' && '🎨 Frontend'}
        {skill.category === 'backend' && '⚙️ Backend'}
        {skill.category === 'database' && '🗄️ Database'}
        {skill.category === 'tool' && '🛠️ Tool'}
        {skill.category === 'language' && '🌍 Language'}
      </div>
    </div>
  );
};

export default SkillCard;
export { SkillCard };
