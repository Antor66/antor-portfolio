
import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="p-12 glass-pink rounded-[3.5rem] apple-shadow-pink hover:bg-white transition-all duration-700 group border border-white">
      <div className="w-20 h-20 bg-white rounded-3xl apple-shadow flex items-center justify-center mb-10 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight group-hover:text-pink-600 transition-colors">{title}</h3>
      <ul className="space-y-5">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center text-gray-600 group/item">
            <div className="w-2.5 h-2.5 bg-pink-500/20 rounded-full mr-5 group-hover/item:bg-pink-500 group-hover/item:scale-125 transition-all duration-300"></div>
            <span className="font-medium group-hover/item:text-gray-900 transition-colors">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
