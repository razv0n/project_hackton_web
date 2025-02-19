import React from 'react';
import { Clock, Star, ChevronRight, BookOpen, Code, Target } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="bg-white rounded-lg p-6 shadow-md hover:scale-102 hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-blue-600"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-blue-600">
          {project.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          project.status === 'mandatory' 
            ? 'bg-blue-600 text-white'
            : 'bg-blue-100 text-blue-600'
        }`}>
          {project.status}
        </span>
      </div>

      <p className="text-gray-600 line-clamp-2 mb-4">
        {project.description}
      </p>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-gray-600">{project.duration}h</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < project.difficulty 
                  ? 'text-blue-500 fill-current'
                  : 'text-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-blue-500" />
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-blue-500 mt-1" />
          <div className="flex-1">
            <span className="text-xs font-medium text-gray-500 block mb-1">Skills you'll learn:</span>
            <div className="flex flex-wrap gap-1">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-gray-600"
                >
                  • {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.prerequisites.length > 0 && (
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">
              Prerequisites: {project.prerequisites.join(', ')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}