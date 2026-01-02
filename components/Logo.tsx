import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg 
      viewBox="0 0 42 42" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFB366', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FF9A56', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF8053', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Main speech bubble */}
      <path
        d="M 7 14 Q 7 9 12 9 L 30 9 Q 35 9 35 14 L 35 26 Q 35 31 30 31 L 18 31 L 10 38 Q 9 39 8 38.5 Q 7 38 7 37 L 7 14 Z"
        fill="url(#logoGradient)"
      />
      {/* Inner rectangle for depth */}
      <rect
        x="11"
        y="13"
        width="18"
        height="13"
        rx="2"
        fill="#FF8053"
        opacity="0.5"
      />
    </svg>
  );
};

export const LogoText: React.FC = () => {
  return (
    <span className="text-h4 font-bold text-text-main tracking-tight">スゴヨセ</span>
  );
};

