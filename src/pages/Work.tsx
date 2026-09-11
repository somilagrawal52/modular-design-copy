import { motion } from "motion/react";
import { useState } from "react";
import { PROJECTS } from "../constants";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Filter } from "lucide-react";
import Reveal from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import StaggerText from "../components/StaggerText";
import ParallaxElement from "../components/ParallaxElement";
import CinematicSection from "../components/CinematicSection";
import SEO from "../components/SEO";
import { MANAGER_DEMO_MODE, demoItems } from "../config/siteMode";

const CATEGORIES = [
  "All",
  "Residential",
  "Hospitality",
  "Commercial",
  "Workplace",
  "Community",
  "Amenities",
];
const INITIAL_PROJECT_COUNT = 11;
const CAPSULE_PROJECT_ORDER = [
  "modular-capsule-riverside-resort",
  "modular-capsule-cloudline-observatory",
  "modular-capsule-mangrove-retreat",
  "modular-capsule-stone-spring-lodge",
  "modular-capsule-canyon-skywalk-lodge",
  "modular-capsule-meadow-studio",
  "modular-capsule-rainforest-villa",
  "modular-capsule-stargazer-lodge",
  "modular-capsule-dune-courtyard",
  "modular-rounded-cabin-courtyard-village",
  "modular-capsule-mountain-panorama-suite",
  "modular-capsule-rounded-garden-suite",
  "modular-capsule-coastal-resort",
  "modular-capsule-coliving-courtyard",
  "modular-capsule-creative-studio-office",
  "modular-capsule-orchard-farmhouse",
  "modular-capsule-garden-family-residence",
  "modular-capsule-lakeside-wellness-deck",
  "modular-capsule-mountain-trail-basecamp",
  "modular-capsule-coastal-leisure-pavilion",
  "modular-capsule-exhibition-pavilion",
  "modular-capsule-retail-kiosk",
  "modular-capsule-brand-experience-gallery",
  "modular-capsule-micro-library-hub",
  "modular-capsule-visitor-gateway",
  "modular-capsule-ev-charging-lounge",
  "modular-capsule-wellness-pavilion",
  "modular-capsule-coworking-studio",
  "modular-capsule-courtyard-residence",
  "modular-capsule-lake-retreat",
  "modular-capsule-island-retreat",
  "modular-capsule-tea-estate-retreat",
  "modular-capsule-alpine-retreat",
  "modular-capsule-desert-retreat",
  "modular-capsule-forest-retreat",
];

const orderProjectsForPortfolio = (projects: typeof PROJECTS) =>
  [...projects].sort((first, second) => {
    const firstOrder = CAPSULE_PROJECT_ORDER.indexOf(first.id);
    const secondOrder = CAPSULE_PROJECT_ORDER.indexOf(second.id);
    const firstIsCapsule = firstOrder !== -1;
    const secondIsCapsule = secondOrder !== -1;

    if (firstIsCapsule && secondIsCapsule) return firstOrder - secondOrder;
    if (firstIsCapsule) return -1;
    if (secondIsCapsule) return 1;
    return Number(second.year) - Number(first.year);
  });

export default function Work() {
  const [filter, setFilter] = useState(
    MANAGER_DEMO_MODE ? "Residential" : "All",
  );
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECT_COUNT);
  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);
  const orderedProjects = orderProjectsForPortfolio(filteredProjects);
  const visibleProjects = demoItems(orderedProjects, [orderedProjects[0]]);
  const limitedProjects = visibleProjects.slice(0, visibleCount);
  const featuredProject = limitedProjects[0];
  const gridProjects = limitedProjects.filter(
    (project) => project.id !== featuredProject?.id,
  );
  const hasMoreProjects = visibleCount < visibleProjects.length;
  const projectSummary = (project: (typeof PROJECTS)[number]) => ({
    type:
      project.details.find((detail) => detail.label === "Type")?.value ??
      project.category,
    system: project.technicalSpecs?.[0]?.value ?? "Off-site Modular",
    status:
      project.details.find((detail) => detail.label === "Status")?.value ===
      "Reference Proposal"
        ? "Concept Study"
        : (project.details.find((detail) => detail.label === "Status")?.value ??
          "Concept Study"),
  });

  return (
    <div className="bg-light text-stone min-h-screen pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-28 relative overflow-hidden">
      <SEO
        title="Capsule Models & Modular Applications"
        description="Explore premium capsule models and modular applications for hospitality, private retreats, commercial spaces, workplaces, and community amenities."
      />
      <CinematicSection parallax={false} minHeight={false} overlay={false}>
        <div className="site-container relative z-10">
          {/* Editorial Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="max-w-4xl md:col-span-5 lg:col-span-5">
              <ParallaxElement speed={0.02}>
                <Reveal direction="right">
                  <span className="text-xs uppercase tracking-[0.12em] text-gold-text font-semibold mb-5 block">
                    Capsule model collection
                  </span>
                </Reveal>
                <StaggerText
                  el="h1"
                  text={'Explore\u00a0capsule models.'}
                  className="type-display type-collection-title"
                  delay={0.2}
                  stagger={0.08}
                />
              </ParallaxElement>
            </div>

            <div className="md:col-span-7 lg:col-span-7 md:justify-self-end">
              <ParallaxElement speed={-0.02}>
                <Reveal direction="left" delay={0.4}>
                  <div className="flex flex-col items-start md:items-end gap-4">
                    <div className="flex items-center gap-3 text-stone/65 text-xs uppercase tracking-[0.1em] font-semibold">
                      <Filter size={12} /> Browse by application
                    </div>
                    <div className="flex flex-wrap justify-start md:justify-end gap-x-5 gap-y-2">
                      {CATEGORIES.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setFilter(category);
                            setVisibleCount(INITIAL_PROJECT_COUNT);
                          }}
                          className={`inline-flex min-h-11 items-center px-1 text-xs uppercase tracking-[0.08em] font-semibold border-b-2 transition-all duration-500 relative group ${
                            filter === category
                            ? "border-gold text-gold-text"
                              : "border-transparent text-stone/65 hover:text-stone"
                          }`}
                        >
                          {category}
                          <span
                    className={`absolute -right-3 -top-1 hidden text-[9px] opacity-40 sm:inline ${filter === category ? "text-gold-text" : "text-stone/50"}`}
                          >
                            {category === "All"
                              ? PROJECTS.length
                              : PROJECTS.filter(
                                  (project) => project.category === category,
                                ).length}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </ParallaxElement>
            </div>
          </div>

          {/* Featured Model */}
          {featuredProject && (
            <motion.div
              key={`featured-${featuredProject.id}`}
              layout
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-20 md:mb-28"
            >
              <Link
                to={`/work/${featuredProject.id}`}
                className="block group/featured"
              >
                <div className="relative overflow-hidden p-3 bg-stone/5 transition-shadow duration-700 group-hover/featured:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/7]">
                    <div
                      className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <ParallaxImage
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      speed={0.08}
                      sizes="100vw"
                      className="w-full h-full group-hover/featured:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 z-30 p-6 md:p-10">
                      <div className="flex items-center justify-between gap-8 mb-5">
                        <span className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                          Featured model — {featuredProject.category}
                        </span>
                        <span className="hidden md:block text-xs uppercase tracking-[0.08em] text-ivory/60">
                          {projectSummary(featuredProject).type}
                        </span>
                      </div>
                      <div className="flex items-end justify-between gap-8">
                        <div>
                          <h2 className="type-section text-ivory group-hover/featured:text-gold transition-colors duration-500">
                            {featuredProject.title}
                          </h2>
                          <p className="hidden md:block mt-5 max-w-3xl text-base lg:text-lg text-ivory/70 font-light leading-relaxed">
                            {featuredProject.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={48}
                          className="hidden md:block shrink-0 text-ivory/30 group-hover/featured:text-gold group-hover/featured:translate-x-2 group-hover/featured:-translate-y-2 transition-all duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Consistent Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 md:gap-y-20">
            {gridProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(i * 0.04, 0.24),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  to={`/work/${project.id}`}
                  className="block group/card h-full"
                >
                  <div className="relative overflow-hidden mb-8 p-2 bg-stone/5 transition-shadow duration-700 group-hover/card:shadow-[0_0_40px_rgba(212,175,55,0.08)]">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <ParallaxImage
                        src={project.image}
                        alt={project.title}
                        speed={0.04}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="w-full h-full group-hover/card:scale-105 transition-all duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70 group-hover/card:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-6 px-1">
                    <div>
                      <span className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold mb-3 block">
                        {project.category}
                      </span>
                      <h3 className="type-card group-hover/card:text-gold transition-colors duration-500">
                        {project.title}
                      </h3>
                      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-5 border-t border-stone/15 pt-5 text-xs uppercase tracking-[0.06em] text-stone/65 font-semibold">
                        {[
                          ["Product type", projectSummary(project).type],
                          ["Model system", projectSummary(project).system],
                          ["Application", project.category],
                          ["Availability", "Enquire for details"],
                        ].map(([label, value]) => (
                          <div key={label} className="min-w-0">
                              <span className="block text-gold-text mb-2">
                              {label}
                            </span>
                            <span className="block min-h-[2.5rem] text-stone/80 normal-case tracking-normal text-xs font-medium leading-relaxed line-clamp-2 break-words">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <span className="mt-5 block text-xs uppercase tracking-[0.08em] text-gold">
                        View model →
                      </span>
                    </div>
                    <ArrowUpRight
                      size={28}
                      className="mt-7 shrink-0 text-stone/30 group-hover/card:text-gold group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-500"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {hasMoreProjects && (
            <div className="mt-20 md:mt-28 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount(visibleProjects.length)}
                className="group flex items-center gap-5 px-8 py-5 border border-stone/20 bg-stone/5 hover:border-gold/50 hover:bg-gold/5 transition-all duration-500"
              >
                <span className="text-xs uppercase tracking-[0.1em] font-semibold text-stone group-hover:text-gold transition-colors">
                  Load more models
                </span>
                <ArrowDown
                  size={15}
                  className="text-gold group-hover:translate-y-1 transition-transform duration-500"
                />
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 md:mt-20 text-center">
            <Reveal direction="up">
              <Link to="/contact" className="inline-block relative group">
                <h2 className="type-section mb-4">
                  Find the right model.
                </h2>
                <div className="w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <p className="mt-5 text-stone/65 uppercase tracking-[0.1em] text-xs font-semibold">
                  Discuss your modular space
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </CinematicSection>
    </div>
  );
}
