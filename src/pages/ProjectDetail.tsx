import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import SEO from '../components/SEO';
import NotFound from './NotFound';
import { responsiveImageSrcSet } from '../lib/responsiveImages';

import CinematicSection from '../components/CinematicSection';
import { MANAGER_DEMO_MODE, demoItems, siteContactEmail } from '../config/siteMode';

const EXTRA_GALLERY_IMAGES: Record<string, string[]> = {
  'garden-pavilion': ['/images/garden-pavilion-extra.png'],
  'modular-rooftop-bar': ['/images/rooftop-bar-extra.png'],
  'modular-gym': ['/images/modular-gym-interior.png', '/images/modular-gym-exterior.png'],
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [diurnalMode, setDiurnalMode] = useState<'day' | 'night'>('day');
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return <NotFound />;
  const technicalSpecs = project.technicalSpecs ?? [];
  const projectWebpSrcSet = responsiveImageSrcSet(project.image);
  const productType = project.details.find((detail) => detail.label === 'Type')?.value ?? project.category;
  const modelDetails = [
    { label: 'Product type', value: productType },
    { label: 'Location', value: project.location },
    { label: 'Year', value: project.year },
  ];
  const visibleDetails = demoItems(modelDetails, modelDetails);
  const visibleSpecs = demoItems(technicalSpecs, technicalSpecs.slice(0, 2));
  const completeGallery = [...project.gallery, ...(EXTRA_GALLERY_IMAGES[project.id] ?? [])];
  while (completeGallery.length < 3) {
    completeGallery.push(project.image);
  }
  const visibleGallery = demoItems(completeGallery, completeGallery.slice(0, 2));

  const modelSystemName = technicalSpecs.find(s => s.label.toLowerCase().includes('system') || s.label.toLowerCase().includes('capsule'))?.value ?? `${project.category} Modular Capsule`;

  return (
    <div className="bg-light text-stone min-h-screen">
      <SEO 
        title={project.title} 
        description={project.description} 
        image={project.image}
      />
      {/* Hero */}
      <CinematicSection parallax={false} overlay={false} className="isolate h-[100svh] max-h-[960px] min-h-[680px] bg-light">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <picture className="block h-full w-full">
              {projectWebpSrcSet && <source type="image/webp" srcSet={projectWebpSrcSet} sizes="100vw" />}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="100vw"
                referrerPolicy="no-referrer"
              />
            </picture>
            <div className="absolute inset-0 scrim-dark-twilight" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone/95 via-stone/40 to-transparent z-10" />
        
        <div className="absolute bottom-16 md:bottom-24 left-[var(--layout-gutter)] right-[var(--layout-gutter)] z-20 max-w-5xl">
          <ParallaxElement speed={0.05}>
            <Reveal direction="right">
              <Link to="/work" className="group inline-flex min-h-11 items-center gap-4 text-xs uppercase tracking-[0.12em] text-gold font-semibold mb-6 md:mb-8">
                <div className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
                Back to models
              </Link>
            </Reveal>

            {/* Model Designation Dominant Eyebrow */}
            <Reveal direction="right" delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.14em] text-gold font-semibold font-mono">
                  {modelSystemName}
                </span>
                <span className="text-light/40">·</span>
                <span className="text-xs uppercase tracking-[0.1em] text-light/75 font-medium">
                  {project.category}
                </span>
              </div>
            </Reveal>

            <StaggerText
              el="h1"
              text={project.title}
              className="type-display max-w-5xl mb-6 text-light font-semibold"
              delay={0.2}
              stagger={0.08}
            />

            <div className="rule-metallic-bronze max-w-sm mb-6" />

            <div className="flex flex-wrap gap-4 items-center">
              <Reveal direction="up" delay={0.5}>
                <div className="px-4 py-2 badge-metallic-bronze backdrop-blur-md rounded-[2px]">
                  <span className="text-xs uppercase tracking-[0.1em] text-light font-medium">
                    Architectural Model Reference · {project.year}
                  </span>
                </div>
              </Reveal>
            </div>
          </ParallaxElement>
        </div>
      </CinematicSection>

      {/* Narrative Section */}
      <CinematicSection overlay={false} className="section-space bg-light text-stone">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <ParallaxElement speed={0.02}>
                <Reveal direction="right">
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-gold-text font-mono text-xs">01</span>
                    <div className="h-[1px] w-12 bg-gold" />
                    <span className="text-xs uppercase tracking-[0.1em] text-stone font-semibold">Product overview</span>
                  </div>
                </Reveal>
                
                <StaggerText
                  text={project.description}
                  className="text-[clamp(1.75rem,3vw,2.5rem)] font-display font-medium tracking-tight leading-[1.12] text-stone mb-14 md:mb-16"
                  delay={0.2}
                  stagger={0.02}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                  {project.challenge && (
                    <Reveal direction="up" delay={0.4}>
                      <div className="space-y-5">
                        <h3 className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold">Designed for</h3>
                        <p className="text-lg font-light leading-relaxed text-stone/80">{project.challenge}</p>
                      </div>
                    </Reveal>
                  )}
                  {project.solution && !MANAGER_DEMO_MODE && (
                    <Reveal direction="up" delay={0.6}>
                      <div className="space-y-5">
                        <h3 className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold">Configuration approach</h3>
                        <p className="text-lg font-light leading-relaxed text-stone/80">{project.solution}</p>
                      </div>
                    </Reveal>
                  )}
                </div>
              </ParallaxElement>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-40">
              <ParallaxElement speed={0.04}>
                <div className="bg-stone/5 p-7 md:p-9 border border-stone/10 rounded-[2px] space-y-8 shadow-sm">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold font-semibold block mb-2">
                      Architectural Model
                    </span>
                    <h3 className="text-xl font-display font-semibold tracking-tight text-stone">
                      {modelSystemName}
                    </h3>
                    <div className="rule-metallic-bronze mt-4 mb-2" />
                  </div>

                  <div className="space-y-6">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-stone/50 font-semibold block">
                      Model Information
                    </span>
                    <div className="space-y-5">
                      {visibleDetails.map((detail, i) => (
                        <Reveal key={detail.label} direction="up" delay={i * 0.08}>
                          <div className="flex justify-between items-baseline gap-4">
                            <span className="text-xs uppercase tracking-[0.06em] text-stone/55 font-medium">{detail.label}</span>
                            <div className="flex-1 border-b border-stone/15 border-dotted mb-1" />
                            <span className="text-xs font-semibold text-stone/90 text-right">{detail.value}</span>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                  
                  {project.scaleMetrics && (
                    <div className="pt-6 border-t border-stone/15 space-y-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] uppercase tracking-[0.1em] text-gold-text font-semibold">
                          Spatial Scale & Ergonomics
                        </span>
                        <div className="rule-metallic-bronze flex-1" />
                      </div>
                      <div className="space-y-4">
                        {project.scaleMetrics.footprint && (
                          <div className="flex justify-between items-baseline gap-4">
                            <span className="text-xs uppercase tracking-[0.06em] text-stone/55 font-medium">Footprint</span>
                            <div className="flex-1 border-b border-stone/15 border-dotted mb-1" />
                            <span className="text-xs font-semibold text-stone/90 text-right">{project.scaleMetrics.footprint}</span>
                          </div>
                        )}
                        {project.scaleMetrics.clearHeight && (
                          <div className="flex justify-between items-baseline gap-4">
                            <span className="text-xs uppercase tracking-[0.06em] text-stone/55 font-medium">Clear Ceiling</span>
                            <div className="flex-1 border-b border-stone/15 border-dotted mb-1" />
                            <span className="text-xs font-mono text-stone/85 text-right">{project.scaleMetrics.clearHeight}</span>
                          </div>
                        )}
                        {project.scaleMetrics.capacity && (
                          <div className="flex justify-between items-baseline gap-4">
                            <span className="text-xs uppercase tracking-[0.06em] text-stone/55 font-medium">Guest Capacity</span>
                            <div className="flex-1 border-b border-stone/15 border-dotted mb-1" />
                            <span className="text-xs font-semibold text-stone/90 text-right">{project.scaleMetrics.capacity}</span>
                          </div>
                        )}
                        {project.scaleMetrics.glazingArc && (
                          <div className="flex justify-between items-baseline gap-4">
                            <span className="text-xs uppercase tracking-[0.06em] text-stone/55 font-medium">Glazing Arc</span>
                            <div className="flex-1 border-b border-stone/15 border-dotted mb-1" />
                            <span className="text-xs font-medium text-stone/90 text-right">{project.scaleMetrics.glazingArc}</span>
                          </div>
                        )}
                        {project.scaleMetrics.dimensions && (
                          <div className="flex justify-between items-baseline gap-4">
                            <span className="text-xs uppercase tracking-[0.06em] text-stone/55 font-medium">Dimensions</span>
                            <div className="flex-1 border-b border-stone/15 border-dotted mb-1" />
                            <span className="text-[11px] font-mono text-stone/80 text-right">{project.scaleMetrics.dimensions}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {technicalSpecs.length > 0 && (
                    <div className="pt-6 border-t border-stone/15 space-y-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] uppercase tracking-[0.1em] text-gold-text font-semibold">
                          Technical Specifications
                        </span>
                        <div className="rule-metallic-titanium flex-1" />
                      </div>
                      <div className="space-y-4">
                        {visibleSpecs.map((spec, i) => (
                          <Reveal key={spec.label} direction="up" delay={i * 0.08}>
                            <div className="flex justify-between items-baseline gap-4">
                              <span className="text-xs uppercase tracking-[0.06em] text-stone/55 font-medium">{spec.label}</span>
                              <div className="flex-1 border-b border-stone/15 border-dotted mb-1" />
                              <span className="text-xs font-mono text-stone/85 text-right font-medium">{spec.value}</span>
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ParallaxElement>
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* Day-to-Night Diurnal Glazing Study */}
      {project.diurnalExperience && (
        <CinematicSection overlay={false} className="section-space bg-light text-stone border-t border-stone/15">
          <div className="site-container">
            <Reveal direction="up" className="mb-10 md:mb-14">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gold-text font-mono text-xs font-semibold">DIURNAL GLAZING STUDY</span>
                <div className="h-px w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.1em] text-stone/65 font-semibold">
                  Day to Night Envelope Performance
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="type-section text-stone">
                    270° Panoramic Glazing: Daylight to Dusk.
                  </h2>
                  <p className="mt-3 max-w-2xl text-base text-stone/75 font-light leading-relaxed">
                    Experience how the curved Low-E glass envelope transforms from daytime solar rejection and exterior privacy into an architectural lantern with warm 2700K hospitality ambient glow at twilight.
                  </p>
                </div>
                {/* Interactive Day/Night Mode Switcher */}
                <div className="inline-flex p-1.5 rounded-[2px] bg-stone/5 border border-stone/15 shrink-0 self-start md:self-auto">
                  <button
                    type="button"
                    onClick={() => setDiurnalMode('day')}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.1em] font-semibold transition-all duration-300 rounded-[2px] flex items-center gap-2 ${
                      diurnalMode === 'day'
                        ? 'bg-gold text-light shadow-sm'
                        : 'text-stone/70 hover:text-stone'
                    }`}
                  >
                    <Sun size={13} /> Daylight Exterior
                  </button>
                  <button
                    type="button"
                    onClick={() => setDiurnalMode('night')}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.1em] font-semibold transition-all duration-300 rounded-[2px] flex items-center gap-2 ${
                      diurnalMode === 'night'
                        ? 'bg-stone text-light shadow-sm'
                        : 'text-stone/70 hover:text-stone'
                    }`}
                  >
                    <Moon size={13} /> Twilight Glow
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Diurnal Showcase Frame */}
            <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] rounded-[2px] bg-stone/10 border border-stone/15 shadow-sm group">
              <ParallaxImage
                src={diurnalMode === 'day' ? project.diurnalExperience.dayImage : project.diurnalExperience.nightImage}
                alt={diurnalMode === 'day' ? project.diurnalExperience.dayTitle : project.diurnalExperience.nightTitle}
                className="w-full h-full transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 scrim-dark-bottom pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-20">
                <div className="max-w-2xl text-light">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 text-[10px] uppercase font-mono tracking-widest text-gold bg-dark/85 backdrop-blur-md rounded-[2px] border border-gold/30">
                    {diurnalMode === 'day' ? 'Solar Rejection Mode · SHGC < 0.28' : 'Nocturnal Lantern Mode · 2700K Warm Ambience'}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold">
                    {diurnalMode === 'day' ? project.diurnalExperience.dayTitle : project.diurnalExperience.nightTitle}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-light/85 font-light leading-relaxed">
                    {diurnalMode === 'day' ? project.diurnalExperience.dayDescription : project.diurnalExperience.nightDescription}
                  </p>
                </div>
                {/* Glazing Specification Badge */}
                <div className="hidden lg:flex flex-col items-end gap-1.5 text-right text-light/80 font-mono text-[11px] bg-dark/70 backdrop-blur-md p-3.5 rounded-[2px] border border-light/10">
                  <span className="text-gold font-semibold uppercase">Glazing Specification</span>
                  <span>Continuous Curved Arc: 270°</span>
                  <span>Solar Control: SHGC &lt; 0.28</span>
                  <span>Acoustic Isolation: STC 45+</span>
                </div>
              </div>
            </div>
          </div>
        </CinematicSection>
      )}

      {/* Materiality Section */}
      {project.materiality && (
        <CinematicSection overlay={false} className="section-space bg-light-secondary text-stone border-t border-stone/15">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ParallaxElement speed={0.02}>
                <Reveal direction="right">
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-gold-text font-mono text-xs">{project.diurnalExperience ? '03' : '02'}</span>
                    <div className="h-[1px] w-12 bg-gold" />
                    <span className="text-xs uppercase tracking-[0.1em] text-stone/65 font-semibold">Exterior & interior finish</span>
                  </div>
                </Reveal>
                <StaggerText
                  text={`"${project.materiality}"`}
                  className="text-[clamp(2rem,3.8vw,3rem)] font-display font-medium tracking-tight leading-[1.08] text-stone/90"
                  delay={0.2}
                  stagger={0.03}
                />
              </ParallaxElement>
              <ParallaxElement speed={-0.02}>
                <div className="aspect-square bg-stone/5 p-4 border border-stone/10 rounded-[2px]">
                  <ParallaxImage
                    src={project.gallery[0] ?? project.image}
                    alt={`${project.title} material palette`}
                    className="w-full h-full"
                  />
                </div>
              </ParallaxElement>
            </div>
          </div>
        </CinematicSection>
      )}

      {/* Gallery with increased white space and contextual plate captions */}
      <CinematicSection overlay={false} className="section-space bg-light-secondary text-stone">
        <div className="site-container">
          <Reveal direction="up" className="mb-14 md:mb-20 text-center">
            <span className="text-gold-text font-mono text-xs block mb-4">
              {project.diurnalExperience ? (project.materiality ? '04' : '03') : (project.materiality ? '03' : '02')}
            </span>
            <h2 className="text-xs uppercase tracking-[0.12em] text-stone/65 font-semibold">Exterior, installation & interior</h2>
            <div className="rule-metallic-bronze max-w-xs mx-auto mt-4" />
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            {visibleGallery.map((img, i) => {
              const isFull = i % 3 === 0;
              const colSpan = isFull ? 'col-span-12' : 'col-span-12 md:col-span-6';
              const aspect = isFull ? 'aspect-[16/9]' : 'aspect-[4/5]';
              const lower = img.toLowerCase();
              let plateTag = 'Exterior Architecture';
              let plateCaption = 'Precision composite shell & curved Low-E panoramic glazing';
              if (lower.includes('evening') || lower.includes('night')) {
                plateTag = 'Twilight Atmosphere';
                plateCaption = 'Illuminated 270° glazing with warm 2700K hospitality ambient glow';
              } else if (lower.includes('interior') || lower.includes('suite') || lower.includes('living')) {
                plateTag = 'Interior Living Scale';
                plateCaption = 'Furnished master suite with 2.7m ceiling clearance & panoramic outlook';
              } else if (lower.includes('installation') || lower.includes('preparation')) {
                plateTag = 'Site Placement';
                plateCaption = 'Lightweight structural chassis positioned onto independent micro-piers';
              } else if (lower.includes('garden') || lower.includes('terrace') || lower.includes('deck')) {
                plateTag = 'Landscape Integration';
                plateCaption = 'Integrated exterior decking linking architecture with site topography';
              }
              
              return (
                <div key={i} className={colSpan}>
                  <ParallaxElement speed={i % 2 === 0 ? 0.02 : -0.02}>
                    <Reveal direction="up" delay={i * 0.1}>
                      <div className={`relative overflow-hidden ${aspect} rounded-[2px] bg-stone/5 group shadow-sm transition-all duration-700 hover:shadow-md`}>
                        <ParallaxImage
                          src={img}
                          alt={`${project.title} gallery ${i}`}
                          className="w-full h-full transition-all duration-1000"
                        />
                        {/* Top Plate Tag */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="inline-block px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider font-semibold text-light bg-dark/85 backdrop-blur-md rounded-[2px] border border-light/15">
                            {plateTag}
                          </span>
                        </div>
                        {/* Bottom Plate Caption Bar */}
                        <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6 bg-gradient-to-t from-dark/90 via-dark/55 to-transparent">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="text-xs uppercase tracking-[0.1em] text-light font-semibold font-display">
                              PLATE 0{i + 1}
                            </span>
                            <span className="text-[11px] font-mono text-gold font-medium">
                              {project.scaleMetrics?.footprint ?? 'Modular Suite'}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-light/85 font-light leading-relaxed truncate md:whitespace-normal">
                            {plateCaption}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </ParallaxElement>
                </div>
              );
            })}
          </div>
        </div>
      </CinematicSection>

      {/* Inquiries & Advisory CTA */}
      <CinematicSection overlay={false} className="section-space text-center bg-light text-stone border-t border-stone/15">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <Reveal direction="up">
            <span className="text-gold-text font-mono text-xs block mb-6">
              {project.diurnalExperience ? '05' : '04'}
            </span>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-gold" />
              <span className="text-xs uppercase tracking-[0.14em] text-gold-text font-semibold font-mono">
                Inquiries & Architectural Advisory
              </span>
              <span className="h-[1px] w-6 bg-gold" />
            </div>
            <h2 className="type-section text-stone">
              Initiate project consultation for {project.title}.
            </h2>
            <p className="mt-6 text-stone/75 font-light leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
              Feasibility assessments, bespoke configuration, turnkey CAPEX budgeting, and site logistics for commercial developers, boutique hoteliers, and architects.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/contact" className="group inline-flex min-h-12 items-center gap-4 bg-gold px-8 py-3.5 text-xs uppercase tracking-[0.12em] font-semibold text-ink transition-colors duration-300 hover:bg-stone hover:text-light shadow-sm">
                Initiate Project Advisory
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <a
                href={`mailto:${siteContactEmail()}`}
                className="inline-flex min-h-12 items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.12em] font-semibold text-stone/80 hover:text-gold border border-stone/20 hover:border-gold transition-colors duration-300"
              >
                Direct Advisory Desk
              </a>
            </div>
            <span className="block mt-6 text-[11px] font-mono text-stone/50">
              Executive response within 24 business hours • Global delivery & crane assembly
            </span>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
