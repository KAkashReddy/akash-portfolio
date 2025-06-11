
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { GlitchHeader } from '../components/GlitchHeader';
import { Timeline } from '../components/Timeline';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <ScrollProgressBar />
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <GlitchHeader 
          text="K AKASH REDDY" 
          className="mb-8"
        />
        
        <div className="text-center space-y-4 max-w-2xl">
          <p className="text-xl md:text-2xl text-cyber-cyan font-light tracking-wide">
            Software Developer & Tech Innovator
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Crafting digital experiences through code, one algorithm at a time. 
            Exploring the intersection of technology and human creativity.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-cyber-magenta rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="max-w-full">
        <Timeline />
      </div>
      
      {/* Footer */}
      <div className="text-center py-12 border-t border-cyber-purple/20">
        <p className="text-gray-500 text-sm">
          &copy; 2024 K Akash Reddy. Crafted with passion and caffeine.
        </p>
      </div>
    </div>
  );
};

export default Index;
