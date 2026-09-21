"use client";

import { ReactNode } from 'react';

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  key?: string | number;
}

export default function ParallaxElement({ children, className = "" }: ParallaxElementProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
