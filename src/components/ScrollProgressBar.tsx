
import { useEffect, useState } from 'react';

export function ScrollProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollWidth(scroll * 100);
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-cyber-darker/80 backdrop-blur-sm">
      <div
        style={{ 
          width: `${scrollWidth}%`,
          boxShadow: `0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.4)`
        }}
        className="h-full bg-gradient-to-r from-cyber-purple via-cyber-magenta to-cyber-cyan transition-all duration-150 ease-out shadow-lg"
      />
    </div>
  );
}
