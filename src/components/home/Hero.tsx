import { motion, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import StaggerText from "../StaggerText";
import { MANAGER_DEMO_MODE, SITE_NAME } from "../../config/siteMode";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [0, 2000], [-10, 10]);
  const moveY = useTransform(springY, [0, 1000], [-8, 8]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const supportsPointerMotion = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (prefersReducedMotion || !supportsPointerMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative isolate flex min-h-[620px] h-[100svh] max-h-[900px] items-center overflow-hidden bg-ink sm:min-h-[680px]">
      <motion.div className="absolute inset-0 z-0">
        <motion.img
          src="/images/modular-capsule-forest-retreat-hero-v2.png"
          alt="Premium modular space capsule residence in a forest landscape"
          className="h-full w-full scale-[1.025] object-cover object-[62%_center] md:object-[66%_center]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          style={{ x: moveX, y: moveY }}
          initial={{ scale: 1.025 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(13, 14, 14, 0.9) 0%, rgba(13, 14, 14, 0.72) 35%, rgba(13, 14, 14, 0.28) 61%, rgba(13, 14, 14, 0.08) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[42%] bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-0 z-10 bg-ink/10 md:hidden" />
      </motion.div>

      <div className="site-container relative z-20 w-full pt-24 sm:pt-28 md:pt-24">
        <motion.div className="max-w-[43rem] text-left">
          <Reveal delay={0.2}>
            <div
              className={
                MANAGER_DEMO_MODE
                  ? "hidden"
                  : "mb-7 flex items-center gap-4 md:mb-9"
              }
            >
              <div className="h-[1px] w-8 md:w-12 bg-gold/40" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gold sm:text-xs md:tracking-[0.12em]">
                Premium space capsules · modular living solutions
              </span>
              <div className="hidden h-[1px] w-8 bg-gold/40 sm:block md:w-12" />
            </div>
          </Reveal>

          <h1 className="mb-6 max-w-[16ch] font-display font-semibold leading-[0.98] tracking-[-0.035em] md:mb-7">
            <span className="block type-hero-title text-ivory md:whitespace-nowrap">
              Turning Dreams
            </span>
            <span className="block type-hero-title text-ivory md:whitespace-nowrap">
              into <span className="text-gold">Reality</span>
            </span>
          </h1>

          <div className="max-w-[36rem]">
            <span className="mb-5 block text-[clamp(1.25rem,2vw,1.75rem)] font-medium tracking-[-0.025em] text-ivory/95 md:mb-6">
              Breaking the Imagination Barriers
            </span>
            <StaggerText
              text={`${SITE_NAME} (DVR) presents premium capsule models and modular living solutions for hospitality, resorts, commercial developments, and private projects.`}
              className="max-w-[35rem] text-sm font-light leading-relaxed tracking-[0.005em] text-ivory/80 sm:text-base md:text-lg"
              delay={1.2}
              stagger={0.02}
            />
          </div>

          <Reveal delay={1.45}>
            <Link
              to="/work"
              className="group mt-8 inline-flex min-h-12 items-center gap-4 border border-gold/55 bg-ink/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ivory transition-colors duration-300 hover:bg-gold hover:text-ink md:mt-10"
            >
              View models
              <ArrowUpRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}
