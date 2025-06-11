
interface GlitchHeaderProps {
  text: string;
  className?: string;
}

export function GlitchHeader({ text, className = "" }: GlitchHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 
        className="glitch text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider"
        data-text={text}
      >
        {text}
      </h1>
      <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-cyan mx-auto animate-glow-pulse"></div>
    </div>
  );
}
