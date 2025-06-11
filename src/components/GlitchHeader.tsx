
interface GlitchHeaderProps {
  text: string;
  className?: string;
}

export function GlitchHeader({ text, className = "" }: GlitchHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="font-pixel text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-white animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-accent-blue animate-blink">
        {text}
      </h1>
      <div className="mt-4 w-24 h-1 bg-gradient-to-r from-accent-blue via-accent-red to-accent-orange mx-auto"></div>
    </div>
  );
}
