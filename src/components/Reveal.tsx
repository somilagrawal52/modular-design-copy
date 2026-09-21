"use client";

import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  fullWidth?: boolean;
  key?: string | number;
}

export default function Reveal({ children, className = "", fullWidth = false }: RevealProps) {
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {children}
    </div>
  );
}
