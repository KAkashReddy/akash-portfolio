
import { ReactNode } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  technologies?: string[];
  icon?: ReactNode;
  index: number;
}

export function TimelineItem({ year, title, description, technologies, icon, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const animationClass = isEven ? 'animate-slide-in-left' : 'animate-slide-in-right';
  
  return (
    <div className={`relative flex items-center gap-8 ${animationClass}`} style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline line */}
      <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-accent-blue to-accent-red opacity-60"></div>
      
      {/* Timeline dot */}
      <div className="relative z-10 w-16 h-16 bg-dark-800 border-2 border-accent-blue rounded-lg flex items-center justify-center text-accent-blue text-xl">
        {icon}
      </div>
      
      {/* Content card */}
      <div className="flex-1 tech-card rounded-lg p-6">
        {/* Year badge */}
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent-blue to-accent-red text-white text-sm font-bold rounded mb-4">
          {year}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 font-pixel">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-dark-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 text-xs bg-dark-700 text-accent-blue border border-dark-600 rounded-full hover:border-accent-blue transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
