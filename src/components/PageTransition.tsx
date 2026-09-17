import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode, forwardRef } from 'react';
import { SITE_NAME } from '../config/siteMode';

interface PageTransitionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const panelVariants = {
  initial: {
    scaleY: 1,
  },
  animate: (i: number) => ({
    scaleY: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.05,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
  exit: (i: number) => ({
    scaleY: 1,
    transition: {
      duration: 0.7,
      delay: (4 - i) * 0.05,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

const logoVariants = {
  initial: {
    opacity: 1,
    y: 0,
    scale: 1,
    letterSpacing: "0.8em",
  },
  animate: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    letterSpacing: "1.2em",
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 1,
    y: 0,
    scale: 1,
    letterSpacing: "0.8em",
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: 'blur(10px)',
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const pageVariants = {
  initial: {},
  animate: {},
  exit: {}
};

const PageTransition = forwardRef<HTMLDivElement, PageTransitionProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div 
        ref={ref}
        className="relative w-full"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        {...props}
      >
        <div className="fixed inset-0 z-[9999] pointer-events-none flex">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={panelVariants}
              className="flex-1 bg-gold origin-top relative overflow-hidden border-x border-ink/5"
            >
              {/* Shimmer Effect (CSS based) */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory/10 to-transparent skew-x-12 shimmer-anim" />
              {/* Grain Texture */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('/noise.svg')]" />
            </motion.div>
          ))}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              variants={logoVariants}
              className="text-ink font-brand font-semibold tracking-[0.18em] text-2xl sm:text-3xl md:text-5xl z-10"
            >
              {SITE_NAME}
            </motion.div>
          </div>
        </div>

        <motion.div variants={contentVariants}>
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

PageTransition.displayName = 'PageTransition';

export default PageTransition;
