
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
  
  return (
    <div className="relative flex-shrink-0 w-80 md:w-96 mx-8">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyber-purple to-cyber-cyan opacity-60"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 bg-cyber-magenta rounded-full border-2 border-cyber-purple shadow-lg animate-glow-pulse z-10"></div>
      
      {/* Content card */}
      <div className={`relative ${isEven ? 'pt-24' : 'pt-8'}`}>
        <div className="cyber-border rounded-lg p-6 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group">
          {/* Year badge */}
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyber-purple to-cyber-cyan text-black text-sm font-bold rounded-full mb-4">
            {year}
          </div>
          
          {/* Icon */}
          {icon && (
            <div className="text-cyber-cyan mb-4 text-2xl">
              {icon}
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 neon-glow text-cyber-cyan group-hover:text-cyber-magenta transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
          
          {/* Technologies */}
          {technologies && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
