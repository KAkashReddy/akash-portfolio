
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
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-dark-800">
      <div
        style={{ width: `${scrollWidth}%` }}
        className="h-full bg-gradient-to-r from-accent-blue via-accent-red to-accent-orange transition-all duration-150 ease-out"
      />
    </div>
  );
}
