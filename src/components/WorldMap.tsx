
"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#f89b34",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Memoize map generation for strictly light mode (white background)
  // Increased radius and darkened color for better visibility
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.28,
      color: "#00000025", 
      shape: "circle",
      backgroundColor: "white",
    });
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Helper to get manual offsets for labels to prevent overlapping
  const getLabelOffset = (label: string) => {
    switch (label) {
      case "Mumbai": return { dx: -10, dy: 15 };
      case "Hyderabad": return { dx: 15, dy: 5 };
      case "Visakhapatnam": return { dx: 10, dy: -10 };
      default: return { dx: 8, dy: 4 };
    }
  };

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-2xl relative font-sans shadow-2xl overflow-hidden border border-black/5">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full opacity-80 pointer-events-none select-none"
        alt="world map"
        height="400"
        width="800"
        draggable={false}
        priority
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2 * i,
                  ease: "easeInOut",
                }}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Global Connection Points */}
        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {/* Start Points (India) */}
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="15"
                  dur="2.5s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2.5s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            {/* End Points (Global) */}
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2.5"
                fill={lineColor}
                opacity="0.6"
              />
            </g>
          </g>
        ))}

        {/* Unique Labels for Indian Cities with Anti-Overlap Offsets */}
        {Array.from(new Set(dots.map(d => d.start.label))).map((label, idx) => {
          const dot = dots.find(d => d.start.label === label);
          if (!dot || !label) return null;
          const point = projectPoint(dot.start.lat, dot.start.lng);
          const offset = getLabelOffset(label);
          return (
            <text
              key={`city-label-${idx}`}
              x={point.x + offset.dx}
              y={point.y + offset.dy}
              fill={lineColor}
              fontSize="10"
              fontWeight="900"
              className="uppercase select-none pointer-events-none"
              style={{ filter: "drop-shadow(0 1px 2px rgba(255,255,255,0.8))" }}
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
