
import { TimelineItem } from './TimelineItem';
import { GraduationCap, Code, Award, BookOpen, Brain, Database } from 'lucide-react';

const timelineData = [
  {
    year: "2021",
    title: "Started Bachelor's in Computer Science Engineering",
    description: "Began my journey in Information Science and Engineering at Nagarjuna College of Engineering & Technology, Bangalore. Building strong foundation in programming and software development.",
    technologies: ["Java", "Python", "C++", "Data Structures"],
    icon: <GraduationCap />
  },
  {
    year: "2022",
    title: "Programming Fundamentals",
    description: "Mastered core programming languages and development tools. Started working with databases and web development technologies.",
    technologies: ["Python", "Java", "SQL", "Visual Studio Code"],
    icon: <Code />
  },
  {
    year: "2023",
    title: "Advanced Programming & Certifications",
    description: "Completed Python Programming and Application Development certification. Gained expertise in development environments and project management.",
    technologies: ["Python Libraries", "Eclipse", "Jupyter Notebook", "Git"],
    icon: <BookOpen />
  },
  {
    year: "2023",
    title: "Machine Learning & AI Specialization",
    description: "Deep dive into Python libraries and real-world machine learning applications. Learned about development and deployment of AI systems.",
    technologies: ["Machine Learning", "AI", "Data Science", "Python Libraries"],
    icon: <Brain />
  },
  {
    year: "2024",
    title: "Real-Time Project Development",
    description: "Completed end-to-end development course using AI & Data Science applications. Currently focusing on web development and cybersecurity.",
    technologies: ["AI Applications", "Data Science", "Web Development", "Cybersecurity"],
    icon: <Database />
  },
  {
    year: "2024",
    title: "Present - Seeking Opportunities",
    description: "Actively seeking internship or entry-level positions to leverage technical skills and academic knowledge in real-world projects.",
    technologies: ["Full Stack", "Problem Solving", "Team Collaboration", "Innovation"],
    icon: <Award />
  }
];

export function Timeline() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-pixel text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
          My Journey
        </h2>
        <p className="text-dark-300 text-lg max-w-2xl mx-auto">
          From student to aspiring software developer - a timeline of my growth in technology and programming
        </p>
      </div>
      
      <div className="space-y-8">
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
  );
}
