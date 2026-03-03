import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <img
      src="/images/logo.png"
      alt="スゴヨセ"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export const LogoText: React.FC = () => {
  // The new logo image already includes the text, so we return null here to avoid duplication.
  return null;
};

