/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const EigenkernLogo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'light',
  size = 'md' 
}) => {
  const isDarkBg = variant === 'dark';
  
  const iconSizes = {
    sm: 'w-5 h-5 sm:w-6 sm:h-6',
    md: 'w-6 h-6 sm:w-7 sm:h-7',
    lg: 'w-8 h-8 sm:w-9 sm:h-9',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Precise isometric cube technical emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer isometric hexagon */}
          <polygon 
            points="18,3 32,11 32,27 18,35 4,27 4,11" 
            stroke={isDarkBg ? '#FFFFFF' : '#102A3A'} 
            strokeWidth="2.2" 
            strokeLinejoin="round" 
            fill="none"
          />
          {/* Inner 3D cube edges */}
          <line 
            x1="18" y1="19" x2="18" y2="35" 
            stroke={isDarkBg ? '#FFFFFF' : '#102A3A'} 
            strokeWidth="2.2" 
            strokeLinecap="round" 
          />
          <line 
            x1="18" y1="19" x2="32" y2="11" 
            stroke={isDarkBg ? '#FFFFFF' : '#102A3A'} 
            strokeWidth="2.2" 
            strokeLinecap="round" 
          />
          <line 
            x1="18" y1="19" x2="4" y2="11" 
            stroke={isDarkBg ? '#FFFFFF' : '#102A3A'} 
            strokeWidth="2.2" 
            strokeLinecap="round" 
          />
          {/* Center petrol glowing core ('Kern') */}
          <polygon 
            points="18,13 23,16 23,22 18,25 13,22 13,16" 
            fill="#087F83" 
            fillOpacity="0.85"
            stroke="#087F83"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <span className={`font-semibold tracking-wider uppercase font-sans ${textSizes[size]} ${isDarkBg ? 'text-white' : 'text-[#122635]'}`}>
        EIGENKERN
      </span>
    </div>
  );
};
