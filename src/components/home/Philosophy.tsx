import Reveal from '../Reveal';
import ParallaxImage from '../ParallaxImage';
import StaggerText from '../StaggerText';
import ParallaxElement from '../ParallaxElement';
import { MANAGER_DEMO_MODE } from '../../config/siteMode';

export default function Philosophy() {
  return (
    <section id="why-modular" className="section-space desktop-transition-tight-bottom bg-light text-stone relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ParallaxElement speed={0.02}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gold-text font-mono text-xs">01</span>
                  <div className="h-[1px] w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.1em] text-stone/70 font-semibold">Why modular</span>
                </div>
              </Reveal>
              
              <StaggerText
                el="h2"
                text="Premium capsule models for extraordinary settings."
                className="type-section mb-8 text-stone"
                delay={0.2}
                stagger={0.05}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
                <StaggerText
                  text="Dream Ventures Realty (DVR) presents design-led space capsules and modular living solutions for hospitality, retreats, commercial spaces, and private projects."
                  className="text-base md:text-lg text-stone/80 font-light leading-relaxed"
                  delay={0.6}
                  stagger={0.02}
                />
                {!MANAGER_DEMO_MODE && <StaggerText
                  text="Each model is a clear starting point for conversations about site conditions, interior character, application, and the experience you want to create."
                  className="text-base text-stone/65 font-light leading-relaxed md:pt-1"
                  delay={1.2}
                  stagger={0.01}
                />}
              </div>

            </ParallaxElement>
          </div>

          <div className="lg:col-span-5">
            <ParallaxElement speed={-0.04}>
              <div className="relative">
                <Reveal direction="left" delay={0.3} className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-sm shadow-sm">
                  <ParallaxImage
                    src="/images/modular-campus-aerial-hero.jpg"
                    alt="Aerial view of a modular living campus"
                    className="w-full h-full transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gold/5 mix-blend-overlay z-10" />
                </Reveal>
                
              </div>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
}
