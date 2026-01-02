import React from 'react';
import { BadgeProps } from '../types';

export const Badge: React.FC<BadgeProps> = ({ text, className = '' }) => {
  // Design Guidelines: border-radius 20px for tags/badges
  // Uses Primary Color accent
  return (
    <span
      className={`
        inline-block px-3 py-1 bg-accent/20 text-text-main
        text-xs font-bold rounded-md border border-accent/30
        ${className}
      `}
    >
      {text}
    </span>
  );
};