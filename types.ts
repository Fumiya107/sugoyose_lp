import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  variant?: 'light' | 'off' | 'white'; // Background strictly light, off-white, or white
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  // Variant removed: Only Primary is allowed for CTA
}

export interface BadgeProps {
  text: string;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}