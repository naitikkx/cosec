"use client";
import React from 'react';

// Simple SVG Candle with Flame
const Candle = ({ style, className }: { style?: React.CSSProperties, className?: string }) => (
  <svg
    width="15" // Narrower candle
    height="60" // Taller candle
    viewBox="0 0 15 60"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    data-ai-hint="candle birthday"
  >
    {/* Candle Body */}
    <rect x="2.5" y="15" width="10" height="45" fill="#FFFACD" rx="2" /> {/* LemonChiffon */}
    {/* Wick */}
     <line x1="7.5" y1="15" x2="7.5" y2="12" stroke="black" strokeWidth="1" />
    {/* Flame */}
    <ellipse
        cx="7.5" // Centered on wick
        cy="8"  // Positioned above wick
        rx="3"
        ry="7"
        fill="orange"
        className="animate-flicker" // Apply flickering animation
     />
      <ellipse
        cx="7.5"
        cy="9" // Slightly lower, smaller inner part
        rx="1.5"
        ry="4"
        fill="yellow"
        className="animate-flicker delay-1" // Slightly different flicker
     />
  </svg>
);


const AnimatedCandles = ({ count = 5 }: { count?: number }) => {
  return (
    <div className="flex items-end space-x-1">
      {Array.from({ length: count }).map((_, i) => (
         // Add slight random height variation if desired
        <Candle key={i} className={`delay-${i % 3}`} style={{ height: `${55 + Math.random() * 10}px` }} />
      ))}
    </div>
  );
};

export default AnimatedCandles;
