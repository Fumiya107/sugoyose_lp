import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  variant = 'light' 
}) => {
  const bgClass = variant === 'off' ? 'bg-bg-off' : 'bg-bg-light';

  return (
    <section 
      id={id} 
      className={`w-full section-padding ${bgClass} ${className}`}
    >
      <div className="layout-container">
        {children}
      </div>
    </section>
  );
};