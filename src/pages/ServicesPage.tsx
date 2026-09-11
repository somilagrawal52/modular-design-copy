import { SERVICES } from "../constants";
import Reveal from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import StaggerText from "../components/StaggerText";
import ParallaxElement from "../components/ParallaxElement";
import CinematicSection from "../components/CinematicSection";
import ConceptToCommissioning from "../components/services/ConceptToCommissioning";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { demoItems } from "../config/siteMode";
import { responsiveImageSrcSet } from "../lib/responsiveImages";

const SERVICES_HERO_IMAGE = "/images/modular-residence-pool-hero.png";

export default function ServicesPage() {
  const visibleServices = demoItems(SERVICES, SERVICES.slice(0, 2));
  const heroWebpSrcSet = responsiveImageSrcSet(SERVICES_HERO_IMAGE);

  return (
    <div className="bg-light text-stone min-h-screen">
      <SEO
        title="Our Services"
        description="Explore modular home design, commercial container spaces, and modular amenities built for flexible modern use."
        image={SERVICES_HERO_IMAGE}
      />
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[600px] h-[92svh] max-h-[860px] items-center overflow-hidden bg-light sm:min-h-[660px]">
        <div className="absolute inset-0 z-0">
          <picture className="block h-full w-full">
            {heroWebpSrcSet && <source type="image/webp" srcSet={heroWebpSrcSet} sizes="100vw" />}
            <img
              src={SERVICES_HERO_IMAGE}
              alt="Premium modular architectural residence with illuminated pool"
              className="h-full w-full object-cover object-[center_35%] md:object-[center_30%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
              referrerPolicy="no-referrer"
            />
          </picture>
          {/* Editorial warm peach-bark gradient overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(58, 35, 26, 0.84) 0%, rgba(58, 35, 26, 0.6) 45%, rgba(58, 35, 26, 0.22) 75%, rgba(58, 35, 26, 0.05) 100%)",
            }}
          />
        </div>

        <div className="site-container relative z-20 w-full pt-28 sm:pt-32 md:pt-28">
          <div className="max-w-[48rem] text-left">
            <Reveal direction="right">
              <div className="mb-7 flex items-center gap-4">
                <div className="h-[1px] w-8 md:w-12 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                  Our Capabilities
                </span>
                <div className="hidden h-[1px] w-8 bg-gold/40 sm:block md:w-12" />
              </div>
            </Reveal>

            <StaggerText
              el="h1"
              text="Dream Ventures Realty (DVR) Services."
              className="type-hero-title max-w-4xl font-display font-semibold leading-[0.98] tracking-[-0.035em] text-light mb-8"
              delay={0.2}
              stagger={0.04}
            />

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 md:mt-10">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-3 bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-light transition-colors duration-300 hover:bg-gold-text shadow-sm"
              >
                Start your project
                <ArrowUpRight size={15} />
              </Link>
              <a
                href="#concept-stages"
                className="inline-flex min-h-12 items-center gap-2 border border-light/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-light/90 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Explore Services
                <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConceptToCommissioning />

      {/* Services Showcase */}
      <div className="relative">
        {visibleServices.map((service, i) => (
          <CinematicSection
            key={service.id}
            overlay={false}
            className="section-space-compact border-b border-stone/10 bg-light text-stone"
          >
            <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ParallaxElement speed={0.03}>
                  <Reveal direction="right">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-gold-text font-mono text-xs">
                        0{i + 1}
                      </span>
                      <div className="h-[1px] w-12 bg-gold" />
                      <span className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold">
                        Service Sector
                      </span>
                    </div>
                  </Reveal>
                  <StaggerText
                    el="h2"
                    text={service.title}
                    className="type-section mb-7"
                    delay={0.2}
                  />
                  <StaggerText
                    text={service.description}
                    className="text-base md:text-lg font-light text-stone/80 leading-relaxed mb-10"
                    delay={0.4}
                    stagger={0.02}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {demoItems(
                      service.features,
                      service.features.slice(0, 2),
                    ).map((feature, j) => (
                      <Reveal
                        key={feature}
                        direction="up"
                        delay={j * 0.1 + 0.6}
                      >
                        <div className="group flex items-start gap-4 p-5 border border-stone/10 bg-stone/5 hover:border-gold/30 transition-colors duration-500">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 group-hover:scale-150 transition-transform" />
                          <div>
                            <StaggerText
                              text={feature}
                            className="text-sm uppercase tracking-[0.06em] text-stone/80 font-semibold mb-2"
                              delay={0.2}
                            />
                            <p className="text-sm text-stone/75 font-light leading-relaxed">
                              A key consideration when reviewing this
                              application.
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </ParallaxElement>
              </div>

              <ParallaxElement speed={i % 2 === 0 ? -0.05 : 0.05}>
                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Technical Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gold/5 mix-blend-overlay z-10" />

                  <Reveal
                    direction={i % 2 === 1 ? "right" : "left"}
                    delay={0.2}
                    className="aspect-[16/10] overflow-hidden rounded-sm shadow-sm"
                  >
                    <ParallaxImage
                      src={
                        [
                          "/images/modular-home-garden-hero.jpg",
                          "/images/modular-capsule-desert-retreat-hero.png",
                          "/images/modular-office-india-exterior.jpg",
                          "/images/container-cafe-rooftop.jpeg",
                          "/images/modular-capsule-micro-library-hub-hero-v2.png",
                          "/images/container-pool.jpeg",
                        ][i]
                      }
                      alt={service.title}
                      className="w-full h-full transition-all duration-1000"
                    />
                  </Reveal>

                </div>
              </ParallaxElement>
            </div>
          </CinematicSection>
        ))}
      </div>

      {/* CTA Section */}
      <CinematicSection overlay={false} className="section-space-compact text-center bg-light-secondary text-stone border-t border-stone/15">
        <ParallaxElement speed={0.05}>
          <Reveal direction="up">
            <span className="text-xs uppercase tracking-[0.12em] text-stone/65 mb-6 block">
              From first idea to final installation.
            </span>
            <Link to="/contact" className="group inline-block">
              <h2 className="type-section text-balance group-hover:text-gold transition-colors">
                Discuss your{" "}
                <span className="font-sans font-medium">project.</span>
              </h2>
            </Link>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-3 bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-light transition-colors duration-300 hover:bg-gold-text shadow-sm"
              >
                Start your project
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </ParallaxElement>
      </CinematicSection>
    </div>
  );
}
