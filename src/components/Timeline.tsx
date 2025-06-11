
import { TimelineItem } from './TimelineItem';
import { GraduationCap, Code, Briefcase, Award, Rocket } from 'lucide-react';

const timelineData = [
  {
    year: "2019",
    title: "Started Programming Journey",
    description: "Began learning programming fundamentals and discovered my passion for creating digital solutions.",
    technologies: ["Python", "JavaScript", "HTML", "CSS"],
    icon: <Code />
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Built my first full-stack web application, learning about databases, APIs, and user experience design.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    icon: <Rocket />
  },
  {
    year: "2021",
    title: "University Studies",
    description: "Pursued computer science education while working on various freelance projects and open-source contributions.",
    technologies: ["Java", "C++", "Data Structures", "Algorithms"],
    icon: <GraduationCap />
  },
  {
    year: "2022",
    title: "Professional Experience",
    description: "Started working as a software developer, gaining experience in enterprise-level applications and agile methodologies.",
    technologies: ["TypeScript", "React", "AWS", "Docker"],
    icon: <Briefcase />
  },
  {
    year: "2023",
    title: "Technical Leadership",
    description: "Took on leadership roles, mentoring junior developers and architecting scalable solutions for complex problems.",
    technologies: ["Next.js", "GraphQL", "Kubernetes", "CI/CD"],
    icon: <Award />
  },
  {
    year: "2024",
    title: "Present Day",
    description: "Continuing to innovate and build cutting-edge applications while exploring emerging technologies and AI integration.",
    technologies: ["AI/ML", "Blockchain", "WebAssembly", "Edge Computing"],
    icon: <Rocket />
  }
];

export function Timeline() {
  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-glow text-cyber-cyan">
          Journey Timeline
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A chronological look at my evolution in the world of technology and software development
        </p>
      </div>
      
      <div className="overflow-x-auto pb-8">
        <div className="flex items-start min-w-max px-8">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Scroll hint */}
      <div className="text-center mt-8">
        <p className="text-cyber-purple text-sm animate-pulse">
          ← Scroll horizontally to explore the timeline →
        </p>
      </div>
    </div>
  );
}
