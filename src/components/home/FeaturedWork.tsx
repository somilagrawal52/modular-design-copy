import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { PROJECTS } from "../../constants";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import ParallaxImage from "../ParallaxImage";
import StaggerText from "../StaggerText";
import ParallaxElement from "../ParallaxElement";
import { demoItems } from "../../config/siteMode";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const productType =
    project.details?.find(
      (detail: { label: string }) => detail.label === "Type",
    )?.value ?? project.category;
  const modelSystem =
    project.technicalSpecs?.find(
      (s: { label: string }) => s.label.toLowerCase().includes("system") || s.label.toLowerCase().includes("capsule"),
    )?.value ?? "Modular Capsule";

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal
      direction="up"
      delay={index * 0.1}
      className={`group cursor-pointer ${index % 2 === 1 ? "md:mt-20" : ""}`}
    >
      <Link
        to={`/work/${project.id}`}
        data-cursor="view"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="block"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[16/10] overflow-hidden mb-8 md:mb-10 rounded-[2px] bg-stone/5 transition-all duration-700 group-hover:shadow-[0_8px_32px_rgba(177,138,71,0.12)]"
        >
          <div
            style={{ transform: "translateZ(50px)" }}
            className="w-full h-full relative overflow-hidden"
          >
            <ParallaxImage
              src={project.image}
              alt={project.title}
              speed={0.05}
              className="w-full h-full transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-stone/15 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />

            {/* Model Badge on Render */}
            <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 pointer-events-none">
              <span className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold text-light bg-dark/75 backdrop-blur-md border border-light/15 rounded-[2px]">
                {modelSystem}
              </span>
              {project.diurnalExperience && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] uppercase font-mono tracking-wider font-semibold text-gold bg-dark/85 backdrop-blur-md border border-gold/35 rounded-[2px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  Day-to-Night
                </span>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-700">
                <ArrowUpRight size={22} className="text-stone" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4 px-1">
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-gold-text font-mono text-xs font-semibold">
                0{index + 1}
              </span>
              <span className="text-stone/30">/</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-gold font-semibold font-mono">
                {modelSystem}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.08em] text-stone/55 font-medium">
              {productType}
            </span>
          </div>

          <div className="rule-metallic-bronze opacity-60 group-hover:opacity-100 transition-opacity" />

          <StaggerText
            el="h3"
            text={project.title}
            className="type-card group-hover:text-gold transition-colors duration-500 font-semibold"
            delay={0.2}
          />

          {project.scaleMetrics && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-stone/60">
              {project.scaleMetrics.footprint && <span>{project.scaleMetrics.footprint.split(' ')[0]} {project.scaleMetrics.footprint.split(' ')[1]}</span>}
              {project.scaleMetrics.clearHeight && <span>· Ceiling {project.scaleMetrics.clearHeight.split(' ')[0]}</span>}
              {project.scaleMetrics.capacity && <span>· {project.scaleMetrics.capacity.split('(')[0].trim()}</span>}
            </div>
          )}

          <div className="pt-1 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] font-medium text-stone/65 group-hover:text-gold transition-colors">
              View model details <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function FeaturedWork() {
  const featuredCapsuleIds = [
    "modular-capsule-riverside-resort",
    "modular-capsule-tea-estate-retreat",
    "modular-capsule-island-retreat",
    "modular-capsule-coworking-studio",
  ];
  const featuredProjects = featuredCapsuleIds.flatMap((id) => {
    const project = PROJECTS.find((item) => item.id === id);
    return project ? [project] : [];
  });
  const visibleProjects = demoItems(featuredProjects, featuredProjects);
  return (
    <section
      id="models"
      className="section-space desktop-transition-tight-top relative overflow-hidden bg-light text-stone"
    >
      {/* Background Parallax */}
      <ParallaxElement
        speed={-0.05}
        className="absolute top-20 left-[-5%] text-[12vw] font-sans font-semibold text-stone/[0.02] pointer-events-none select-none leading-none z-0"
      >
        CAPSULE
      </ParallaxElement>

      <div className="site-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal direction="right">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold-text font-mono text-xs font-semibold">02</span>
                <div className="rule-metallic-bronze w-12" />
                <span className="text-xs uppercase tracking-[0.1em] text-stone/60 font-semibold">
                  Featured models
                </span>
              </div>
            </Reveal>
            <StaggerText
              el="h2"
              text="Explore the collection."
              className="type-section"
              delay={0.2}
              stagger={0.08}
            />
          </div>
          <Reveal direction="left">
            <Link
              to="/work"
              className="group flex min-h-11 items-center gap-4 text-xs uppercase tracking-[0.1em] font-semibold text-gold-text hover:text-gold transition-all duration-500 pb-1 border-b border-stone/20"
            >
              View models{" "}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>

        <div
          className={`grid grid-cols-1 gap-16 ${visibleProjects.length > 1 ? "md:grid-cols-2 md:gap-20 lg:gap-24" : "max-w-xl"}`}
        >
          {visibleProjects.map((project, i) => (
            <div key={project.id}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
