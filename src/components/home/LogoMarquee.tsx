"use client";

interface LogoMarqueeProps {
  logos: string[];
  direction?: "left" | "right";
}

export function LogoMarquee({ logos, direction = "left" }: LogoMarqueeProps) {
  const items = [...logos, ...logos, ...logos, ...logos];
  
  return (
    <div className="w-full overflow-hidden py-4">
      <div 
        className={`flex gap-6 min-w-full ${
          direction === "left" ? "animate-marquee-l" : "animate-marquee-r"
        }`}
      >
        {items.map((logo, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 px-10 py-4 bg-white border border-primary/40 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group min-w-[180px]"
          >
            <span className="text-xs font-bold text-[#6b5247] group-hover:text-primary whitespace-nowrap">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}