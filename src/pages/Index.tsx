
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { GlitchHeader } from '../components/GlitchHeader';
import { Timeline } from '../components/Timeline';
import { ContactSection } from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <ScrollProgressBar />
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <GlitchHeader 
          text="K AKASH REDDY" 
          className="mb-8 animate-fade-in-scale"
        />
        
        <div className="text-center space-y-4 max-w-2xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="font-pixel text-xl md:text-2xl text-accent-blue font-light tracking-wide">
            Information Science & Engineering Student
          </p>
          <p className="text-dark-300 text-lg leading-relaxed">
            Motivated CSE student with expertise in software development, data analysis, cybersecurity, and machine learning. 
            Seeking opportunities to leverage technical skills and academic knowledge in real-world projects.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-bounce-subtle"></div>
            <div className="w-3 h-3 bg-accent-red rounded-full animate-bounce-subtle" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-accent-orange rounded-full animate-bounce-subtle" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-bounce-subtle" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <div className="text-center py-12 border-t border-dark-700">
        <p className="text-dark-400 text-sm">
          &copy; 2024 K Akash Reddy. Ready to innovate and build the future.
        </p>
      </div>
    </div>
  );
};

export default Index;
