
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
  
  // Memoize map generation with DARKER and BOLDER dots
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.35, // Increased radius for better visibility
      color: "#00000045", // Darker dots for better contrast
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
    const midY = Math.min(start.y, end.y) - 60; // Deeper curve
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Improved offsets for legibility
  const getLabelOffset = (label: string) => {
    switch (label) {
      case "Mumbai": return { dx: -15, dy: 20 };
      case "Hyderabad": return { dx: 20, dy: 10 };
      case "Visakhapatnam": return { dx: 15, dy: -15 };
      default: return { dx: 10, dy: 5 };
    }
  };

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-2xl relative font-sans shadow-2xl overflow-hidden border border-black/5">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full opacity-100 pointer-events-none select-none"
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
        {/* Paths with HIGHER visibility */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2.5" // Thicker lines
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.3 * i,
                  ease: "easeInOut",
                }}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.1" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Start Points (India Hubs) with Bolder Glow */}
        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="4"
                fill={lineColor}
              />
              {/* Outer Pulse */}
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="4"
                fill={lineColor}
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  from="4"
                  to="25"
                  dur="2s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            {/* Destination Points */}
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.8"
              />
            </g>
          </g>
        ))}

        {/* Highly Visible Bold Labels */}
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
              fontSize="12"
              fontWeight="1000"
              className="uppercase select-none pointer-events-none"
              style={{ 
                filter: "drop-shadow(0 1px 3px rgba(255,255,255,1))",
                paintOrder: "stroke",
                stroke: "white",
                strokeWidth: "2px",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }}
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
