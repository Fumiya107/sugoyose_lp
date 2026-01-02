import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  fullWidth = false,
  icon
}) => {
  // Design Guidelines: border-radius 80px, padding 20px, min-width 200px, font-size 1.4rem (14px)
  // Primary Button with Primary Color (#ff8053)
  return (
    <button
      className={`
        py-5 px-5 rounded-btn bg-primary text-white font-bold
        min-w-[240px] md:min-w-[200px] text-body tracking-wider
        transition-opacity hover:opacity-70 flex items-center justify-center
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
      style={{ letterSpacing: '0.08em' }}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};