"use client";

import { ReactNode } from 'react';

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  parallax?: boolean;
  minHeight?: boolean;
  overlay?: boolean;
  key?: string | number;
}

export default function CinematicSection({ children, className = "", minHeight = false, overlay = true }: CinematicSectionProps) {
  return (
    <section className={`relative overflow-hidden ${minHeight ? 'min-h-screen' : ''} ${className}`}>
      <div className="w-full h-full">
        {children}
      </div>
      
      {/* Cinematic Overlay (Subtle) */}
      {overlay && <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-ink/20 via-transparent to-ink/20 z-10" />}
    </section>
  );
}
