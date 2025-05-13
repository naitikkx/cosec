"use client";
import React from 'react';

// Simple SVG Balloon Component
const Balloon = ({ color, style, className }: { color: string, style?: React.CSSProperties, className?: string }) => (
  <svg
    width="50"
    height="70"
    viewBox="0 0 100 140"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    data-ai-hint="balloon celebration"
  >
    <ellipse cx="50" cy="50" rx="45" ry="50" fill={color} />
    <path d="M50 100 Q 50 110, 45 120 T 55 120 Q 50 110, 50 100 Z" fill={color} />
    {/* String */}
     <path d="M50 120 Q 50 130, 40 140" stroke="grey" strokeWidth="2" fill="none" />
     {/* Highlight */}
     <ellipse cx="40" cy="35" rx="15" ry="8" fill="white" opacity="0.5" transform="rotate(-20 40 35)" />
  </svg>
);

const AnimatedBalloons = ({ count = 3 }: { count?: number }) => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#97F9F9']; // Cheerful colors
  const positions = [
    { top: '5%', left: '10%' },
    { top: '15%', left: '85%' },
    { top: '60%', left: '5%' },
    { top: '70%', left: '90%' },
    { top: '30%', left: '50%' },
     { top: '80%', left: '30%' },
     { top: '10%', left: '60%' },
  ];

  // Ensure we don't request more positions than available
   const numBalloons = Math.min(count, positions.length);


  return (
    <>
      {Array.from({ length: numBalloons }).map((_, i) => (
        <Balloon
          key={i}
          color={colors[i % colors.length]}
          className={`absolute animate-float delay-${i % 4} opacity-80`} // Use animation and delays
          style={{
             top: positions[i].top,
             left: positions[i].left,
             transform: 'translateX(-50%)', // Adjust positioning
             zIndex: 5 // Ensure balloons are behind the card
           }}
        />
      ))}
    </>
  );
};

export default AnimatedBalloons;
