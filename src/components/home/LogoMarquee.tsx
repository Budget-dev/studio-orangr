"use client";

interface LogoMarqueeProps {
  logos: string[];
  direction?: "left" | "right";
}

export function LogoMarquee({ logos, direction = "left" }: LogoMarqueeProps) {
  const items = [...logos, ...logos, ...logos]; // Triple for continuous effect
  
  return (
    <div className="w-full overflow-hidden py-8">
      <div 
        className={`flex gap-6 min-w-full ${
          direction === "left" ? "animate-marquee-l" : "animate-marquee-r"
        }`}
      >
        {items.map((logo, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 px-10 py-5 bg-card border border-primary/20 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
          >
            <span className="text-sm font-bold text-muted-foreground group-hover:text-primary whitespace-nowrap">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}