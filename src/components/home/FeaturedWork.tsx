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

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
      className={`group cursor-pointer ${index % 2 === 1 ? "md:mt-16" : ""}`}
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
          className="relative aspect-[4/3] overflow-hidden mb-7 md:mb-9 p-2 bg-stone/5 transition-colors duration-500"
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
            <div className="absolute inset-0 bg-stone/15 group-hover:bg-transparent transition-colors duration-1000 z-10" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-700">
                <ArrowUpRight size={24} className="text-stone" />
              </div>
            </div>
          </div>

        </motion.div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-gold-text font-mono text-xs">
              0{index + 1}
            </span>
            <div className="h-[1px] flex-1 bg-stone/10" />
            <span className="text-xs uppercase tracking-[0.1em] text-stone/60 font-semibold">
              {productType}
            </span>
          </div>
          <StaggerText
            el="h3"
            text={project.title}
            className="type-card group-hover:text-gold transition-colors"
            delay={0.2}
          />
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] font-medium text-stone/65 group-hover:text-gold transition-colors">
            View model <ArrowUpRight size={14} />
          </span>
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
                <span className="text-gold-text font-mono text-xs">02</span>
                <div className="h-[1px] w-12 bg-gold" />
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
          className={`grid grid-cols-1 gap-14 ${visibleProjects.length > 1 ? "md:grid-cols-2 md:gap-16 lg:gap-20" : "max-w-xl"}`}
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
