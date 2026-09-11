import { useEffect, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useSpring(0, { stiffness: 1000, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 1000, damping: 50 });
  
  const trailX = useSpring(0, { stiffness: 200, damping: 30 });
  const trailY = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer');

      setIsHovering(isInteractive);
      
      const projectCard = target.closest('[data-cursor="view"]');
      setIsProjectHover(!!projectCard);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, trailX, trailY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[10000] shadow-sm"
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gold/40 rounded-full pointer-events-none z-[10000] flex items-center justify-center overflow-hidden"
        animate={{
          scale: isProjectHover ? 2.5 : isHovering ? 1.8 : isClicking ? 0.9 : 1,
          borderWidth: isHovering ? '1px' : '1px',
          borderColor: isProjectHover ? 'var(--color-gold)' : isHovering ? 'var(--color-gold)' : 'var(--color-gold)',
          backgroundColor: isProjectHover ? 'rgba(222, 117, 86, 0.1)' : 'transparent',
        }}
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <AnimatePresence>
          {isProjectHover && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[6px] font-bold tracking-widest text-gold uppercase"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Outer Glow (Subtle) */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none z-[9999]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
