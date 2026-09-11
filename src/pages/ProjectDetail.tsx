import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import SEO from '../components/SEO';
import NotFound from './NotFound';
import { responsiveImageSrcSet } from '../lib/responsiveImages';

import CinematicSection from '../components/CinematicSection';
import { MANAGER_DEMO_MODE, demoItems } from '../config/siteMode';

const EXTRA_GALLERY_IMAGES: Record<string, string[]> = {
  'garden-pavilion': ['/images/garden-pavilion-extra.png'],
  'modular-rooftop-bar': ['/images/rooftop-bar-extra.png'],
  'modular-gym': ['/images/modular-gym-interior.png', '/images/modular-gym-exterior.png'],
};

export default function ProjectDetail() {
  const { id } = useParams();
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
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(58, 35, 26, 0.82) 0%, rgba(58, 35, 26, 0.5) 45%, rgba(58, 35, 26, 0.18) 75%)",
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone/90 via-stone/35 to-transparent z-10" />
        
        <div className="absolute bottom-16 md:bottom-20 left-[var(--layout-gutter)] right-[var(--layout-gutter)] z-20 max-w-5xl">
          <ParallaxElement speed={0.05}>
            <Reveal direction="right">
              <Link to="/work" className="group flex min-h-11 items-center gap-4 text-xs uppercase tracking-[0.1em] text-gold font-semibold mb-7 md:mb-10">
                <div className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all" />
                Back to models
              </Link>
            </Reveal>
            <StaggerText
              el="h1"
              text={project.title}
              className="type-display max-w-5xl mb-7 text-light"
              delay={0.2}
              stagger={0.08}
            />
            <div className="flex flex-wrap gap-4 items-center">
              <Reveal direction="up" delay={0.6}>
                <div className="px-4 py-2 border border-gold/40 bg-stone/40 backdrop-blur-sm rounded-full">
                  <span className="text-xs uppercase tracking-[0.08em] text-light font-semibold">Product model · {project.category}</span>
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
                <div className="bg-stone/5 p-6 md:p-8 border border-stone/10 space-y-9">
                  <h3 className="text-xs uppercase tracking-[0.1em] text-stone font-semibold border-b border-stone/10 pb-5">Model information</h3>
                  <div className="space-y-8">
                    {visibleDetails.map((detail, i) => (
                      <Reveal key={detail.label} direction="up" delay={i * 0.1}>
                        <div className="flex justify-between items-end gap-4">
                          <span className="text-xs uppercase tracking-[0.08em] text-stone/65 font-semibold">{detail.label}</span>
                          <div className="flex-1 border-b border-stone/10 border-dotted mb-1" />
                          <span className="text-sm font-semibold">{detail.value}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  
                  {technicalSpecs.length > 0 && (
                    <div className="pt-8 border-t border-stone/10 space-y-7">
                      <h4 className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold">Key configuration</h4>
                      <div className="space-y-6">
                        {visibleSpecs.map((spec, i) => (
                          <Reveal key={spec.label} direction="up" delay={i * 0.1}>
                            <div className="flex justify-between items-end gap-4">
                              <span className="text-xs uppercase tracking-[0.08em] text-stone/65 font-semibold">{spec.label}</span>
                              <div className="flex-1 border-b border-stone/10 border-dotted mb-1" />
                              <span className="text-sm font-semibold">{spec.value}</span>
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

      {/* Materiality Section */}
      {project.materiality && (
        <CinematicSection overlay={false} className="section-space bg-light-secondary text-stone border-t border-stone/15">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ParallaxElement speed={0.02}>
                <Reveal direction="right">
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-gold-text font-mono text-xs">02</span>
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
                <div className="aspect-square bg-stone/5 p-4 border border-stone/10">
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

      {/* Gallery */}
      <CinematicSection overlay={false} className="section-space bg-light-secondary text-stone">
        <div className="site-container">
          <Reveal direction="up" className="mb-12 md:mb-16 text-center">
            <span className="text-gold-text font-mono text-xs block mb-4">03</span>
            <h2 className="text-xs uppercase tracking-[0.1em] text-stone/65 font-semibold">Exterior, installation & interior</h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {visibleGallery.map((img, i) => {
              const isFull = i % 3 === 0;
              const colSpan = isFull ? 'col-span-12' : 'col-span-12 md:col-span-6';
              const aspect = isFull ? 'aspect-[16/9]' : 'aspect-[4/5]';
              
              return (
                <div key={i} className={colSpan}>
                  <ParallaxElement speed={i % 2 === 0 ? 0.02 : -0.02}>
                    <Reveal direction="up" delay={i * 0.1}>
                      <div className={`relative overflow-hidden ${aspect} p-2 bg-stone/5 group`}>
                        <ParallaxImage
                          src={img}
                          alt={`${project.title} gallery ${i}`}
                          className="w-full h-full transition-all duration-1000"
                        />
                        <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <span className="text-xs uppercase tracking-[0.08em] text-light font-semibold bg-stone/80 backdrop-blur-md px-4 py-2">
                            PLATE_{i + 1}
                          </span>
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

      {/* Model enquiry CTA */}
      <CinematicSection overlay={false} className="section-space text-center bg-light text-stone border-t border-stone/15">
        <div className="relative z-10">
          <Reveal direction="up">
            <span className="text-gold-text font-mono text-xs block mb-8">04</span>
            <span className="text-xs uppercase tracking-[0.1em] text-stone/65 font-semibold mb-7 block">Interested in this model?</span>
            <h2 className="type-section text-stone">
              Discuss your project with our team.
            </h2>
            <Link to="/contact" className="group mt-10 inline-flex min-h-12 items-center gap-4 bg-gold px-7 py-3 text-xs uppercase tracking-[0.1em] font-semibold text-light transition-colors duration-300 hover:bg-gold-text shadow-sm">
              Request pricing
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
