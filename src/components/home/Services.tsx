import { motion } from 'motion/react';
import { SERVICES } from '../../constants';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../Reveal';
import StaggerText from '../StaggerText';
import ParallaxElement from '../ParallaxElement';
import Magnetic from '../Magnetic';
import { demoItems } from '../../config/siteMode';

export default function Services() {
  const visibleServices = demoItems(SERVICES, SERVICES.slice(0, 2));
  const [activeId, setActiveId] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="section-space-compact bg-light-secondary text-stone relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-4">
            <ParallaxElement speed={0.03}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-gold font-mono text-xs">03</span>
                  <div className="h-[1px] w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.1em] text-stone/60 font-semibold">Expertise</span>
                </div>
              </Reveal>
              <StaggerText
                el="h2"
                text="Modular spaces, made to move."
                className="type-section mb-8"
                delay={0.2}
                stagger={0.08}
              />
              <StaggerText
                text="From prefab homes to container cafés and outdoor amenities, we create flexible spaces built for the way people live and gather."
                className="text-stone/75 text-lg font-light leading-relaxed max-w-xs"
                delay={0.6}
                stagger={0.02}
              />
            </ParallaxElement>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {visibleServices.map((service, i) => (
              <Reveal key={service.id} direction="up" delay={i * 0.1} fullWidth>
                <button
                  type="button"
                  className="w-full border-b border-stone/15 py-6 md:py-7 cursor-pointer group text-left"
                  onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                  aria-expanded={activeId === service.id}
                  aria-controls={`service-details-${service.id}`}
                >
                  <div className="flex justify-between items-center gap-4 mb-5">
                    <div className="flex flex-1 min-w-0 items-center gap-8">
                      <span className="text-gold font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                      <h3 className={`min-w-0 text-2xl md:text-3xl font-sans font-medium tracking-tight leading-[1.1] transition-all duration-500 ${activeId === service.id ? 'text-stone pl-3 md:pl-5' : 'text-stone group-hover:pl-3'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <Magnetic strength={0.5}>
                      <div className={`w-11 h-11 rounded-full border border-stone/25 flex items-center justify-center transition-all duration-500 ${activeId === service.id ? 'bg-gold border-gold rotate-45' : 'group-hover:border-gold'}`}>
                        <Plus 
                          className={`transition-colors duration-500 ${activeId === service.id ? 'text-light' : 'text-stone/50 group-hover:text-gold'}`}
                          size={24} 
                        />
                      </div>
                    </Magnetic>
                  </div>
                  
                  <motion.div
                    id={`service-details-${service.id}`}
                    initial={false}
                    animate={{ 
                      height: activeId === service.id ? 'auto' : 0,
                      opacity: activeId === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-4 md:pl-16 flex flex-col md:flex-row gap-8 md:gap-16">
                      <p className="flex-1 text-stone/75 text-lg font-light leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex-1 grid grid-cols-1 gap-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center justify-between border-b border-stone/10 pb-4 group/item">
                            <span className="text-sm uppercase tracking-[0.06em] text-stone/70 font-semibold group-hover/item:text-gold transition-colors">
                              {feature}
                            </span>
                            <div className="w-1.5 h-1.5 bg-gold/20 group-hover/item:bg-gold transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
