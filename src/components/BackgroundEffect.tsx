import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Dynamic color shift based on mouse position
  const glowColor = useTransform(
    [springX, springY],
    ([x, y]) => {
      const ratioX = (x as number) / (windowSize.width || 1);
      const ratioY = (y as number) / (windowSize.height || 1);
      // Shift between gold and a deeper bronze/amber
      const r = Math.floor(227 + ratioX * 12);
      const g = Math.floor(184 - ratioY * 20);
      const b = Math.floor(94 + ratioX * 8);
      return `rgba(${r}, ${g}, ${b}, 0.15)`;
    }
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsPointerMotion = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    if (prefersReducedMotion || !supportsPointerMotion) {
      return () => window.removeEventListener('resize', handleResize);
    }

    window.addEventListener('mousemove', handleMouseMove);

    // Particle System Logic
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const curMouseX = mouseX.get();
      const curMouseY = mouseY.get();

      particles.forEach((p) => {
        // Subtle drift
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse interaction: subtle attraction
        const dx = curMouseX - p.x;
        const dy = curMouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 300) {
          p.x += dx * 0.001;
          p.y += dy * 0.001;
        }

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const alpha = distance < 200 ? p.opacity * 1.5 : p.opacity;
        ctx.fillStyle = `rgba(227, 184, 94, ${alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-ink">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />

      {/* Dynamic Light Source */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[120px]"
        style={{
          background: glowColor,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Ambient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/80" />
      
      {/* Subtle Grid Interaction */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #E3B85E 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          x: useTransform(springX, (x) => (x as number) * -0.02),
          y: useTransform(springY, (y) => (y as number) * -0.02),
        }} 
      />
    </div>
  );
}
