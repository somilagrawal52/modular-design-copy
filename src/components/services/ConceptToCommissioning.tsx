import { motion } from "motion/react";
import CinematicSection from "../CinematicSection";
import Reveal from "../Reveal";
import ParallaxElement from "../ParallaxElement";
import StaggerText from "../StaggerText";

const projectStages = [
  {
    step: "01",
    title: "Concept",
    descriptor: "Vision + Site + Requirements",
    image: "/images/concept-capsule-consultation.webp",
    alt: "Architect discussing a modular capsule house blueprint with prospective clients",
    copy: "Every project starts with the site, intended experience and client vision. The initial capsule configuration is considered around use, layout and project requirements.",
  },
  {
    step: "02",
    title: "Design & Engineering",
    descriptor: "Design Development + Coordination",
    image: "/images/capsule-design-engineering.webp",
    alt: "Engineer reviewing a digital capsule model and technical drawings",
    copy: "The selected concept is developed into a coordinated modular solution, aligning spatial planning, product systems and project-specific requirements.",
  },
  {
    step: "03",
    title: "Factory Manufacturing",
    descriptor: "Structure + Systems + Fit-Out",
    image: "/images/capsule-factory-manufacturing.webp",
    alt: "Technicians assembling a panoramic modular capsule in a controlled factory",
    copy: "Structural, envelope, interior and building-system components are coordinated within a controlled production environment before delivery to site.",
  },
  {
    step: "04",
    title: "Site Preparation & Landscape",
    descriptor: "Ground + Utilities + Landscape",
    image: "/images/capsule-site-preparation.webp",
    alt: "Prepared mountain resort site with supports and landscaped access ready for a capsule",
    copy: "Site preparation and landscape requirements are coordinated according to the project scope, including positioning, access, utilities and the surrounding setting.",
  },
  {
    step: "05",
    title: "Delivery & Installation",
    descriptor: "Transport + Positioning + Connection",
    image: "/images/capsule-installation.webp",
    alt: "Modular capsule being positioned by crane on prepared supports",
    copy: "Once the site is prepared, the modular unit is transported, positioned and connected in line with the project installation plan.",
  },
  {
    step: "06",
    title: "Commissioning & Handover",
    descriptor: "Final Checks + Handover",
    image: "/images/capsule-commissioning.webp",
    alt: "Completed illuminated capsule in a finished landscaped setting with clients and representative",
    copy: "Final checks and system coordination are completed before handover, helping ensure the finished capsule is ready for its intended use.",
  },
];

function StageHeading({
  stage,
  compact = false,
}: {
  stage: (typeof projectStages)[number];
  compact?: boolean;
}) {
  return (
    <div>
      <span
        className={
          compact
            ? "font-sans text-4xl font-semibold leading-none text-gold-text/70"
            : "font-sans text-[clamp(3rem,5vw,4.25rem)] font-semibold leading-[0.82] tracking-tight text-gold/25"
        }
      >
        {stage.step}
      </span>
      <div className={compact ? "mt-5" : "mt-8 xl:mt-10"}>
        <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-gold-text">
          {stage.descriptor}
        </span>
        <h3
          className={
            compact
              ? "mt-3 text-[clamp(1.625rem,5vw,1.875rem)] font-semibold leading-[1.05] text-balance"
              : "mt-4 text-[clamp(1.75rem,2.5vw,2.25rem)] font-semibold leading-[1.05] tracking-tight text-balance"
          }
        >
          {stage.title}
        </h3>
      </div>
    </div>
  );
}

export default function ConceptToCommissioning() {
  return (
    <section
      id="concept-stages"
      className="section-space border-y border-stone/15 bg-light text-stone relative overflow-hidden"
    >
      <div className="site-container relative z-20">
        <div className="max-w-4xl border-b border-stone/20 pb-14 md:pb-16">
          <Reveal direction="up">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.1em] text-gold-text">
              One Journey. Six Coordinated Stages.
            </span>
          </Reveal>
          <StaggerText
            el="h2"
            text="Concept to commissioning."
            className="type-section max-w-3xl"
            delay={0.1}
            stagger={0.035}
          />
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-stone/75 md:mt-10 md:text-lg">
            From the first sketch to final handover, each stage is coordinated to turn a modular concept into a complete, site-ready experience.
          </p>
        </div>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16 lg:space-y-20">
          {projectStages.map((stage, index) => {
            const imageOnLeft = index % 2 === 0;
            const imagePlacement = imageOnLeft
              ? "lg:col-start-1"
              : "lg:col-start-6";
            const textPlacement = imageOnLeft
              ? "lg:col-start-9"
              : "lg:col-start-1";

            return (
              <motion.article
                key={stage.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.14 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid grid-cols-1 gap-y-6 pt-8 md:gap-y-8 md:pt-10 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-0 xl:gap-x-16"
              >
                <div className="order-1 lg:hidden">
                  <StageHeading stage={stage} compact />
                </div>

                <motion.figure
                  className={`order-2 overflow-hidden bg-light border border-stone/10 lg:row-span-2 lg:col-span-7 ${imagePlacement}`}
                  initial={{ clipPath: "inset(8% 0 8% 0)" }}
                  whileInView={{ clipPath: "inset(0% 0 0% 0)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={stage.image}
                      alt={stage.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-stone/10" />
                    <span className="absolute bottom-4 left-4 border border-gold/40 bg-stone/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-light backdrop-blur-sm md:bottom-5 md:left-5">
                      Stage {stage.step}
                    </span>
                  </div>
                </motion.figure>

                <div className={`order-3 lg:row-span-2 lg:col-span-4 ${textPlacement} hidden self-center lg:flex lg:flex-col`}>
                  <StageHeading stage={stage} />
                  <p className="mt-6 max-w-md text-base font-light leading-relaxed text-stone/75 xl:text-lg">
                    {stage.copy}
                  </p>
                </div>

                <p className="order-3 max-w-xl text-base font-light leading-relaxed text-stone/75 lg:hidden">
                  {stage.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
