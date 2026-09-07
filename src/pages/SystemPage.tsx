import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import CinematicSection from '../components/CinematicSection';
import ParallaxImage from '../components/ParallaxImage';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import StaggerText from '../components/StaggerText';

const anatomyLayers = [
  ['01', 'Exterior shell', 'An outer skin shaped for the selected capsule and its setting.'],
  ['02', 'Weather layer', 'A sealed layer that helps manage exposure at the building edge.'],
  ['03', 'Thermal insulation', 'An insulated build-up that supports a more controlled interior environment.'],
  ['04', 'Structural frame', 'The primary support system coordinated with the base and installation approach.'],
  ['05', 'Service cavity', 'A coordinated zone for routes, connections, and selected equipment.'],
  ['06', 'Interior finish', 'Wall, ceiling, and floor finishes completed within the agreed configuration.'],
];

const structuralNotes = [
  ['01', 'Chassis + frame', 'The base and frame are developed as the primary structural assembly.'],
  ['02', 'Transport restraint', 'Fixing and handling considerations are coordinated for the delivery route.'],
  ['03', 'Lifting provisions', 'Lifting points and access are reviewed for the module and site plan.'],
  ['04', 'Support points', 'The capsule transfers load through project-specific support locations.'],
  ['05', 'Permanent connection', 'Final placement is coordinated with the selected foundation or platform.'],
];

const serviceRoutes = [
  ['01', 'Electrical', 'Distribution, lighting circuits, outlets, and project-specific equipment provisions.'],
  ['02', 'Climate', 'HVAC and ventilation allowances considered for the model, location, and brief.'],
  ['03', 'Water', 'Hot and cold water routes coordinated with kitchen or bathroom layouts where specified.'],
  ['04', 'Drainage', 'Waste connections planned around the final site interface and utility strategy.'],
];

const comfortMeasures = [
  ['01', 'Safe by design', 'Safety glazing, circuit protection, and detection provisions can be specified by project.'],
  ['02', 'Quietly separated', 'Envelope and equipment decisions help manage sound between interior life and its surroundings.'],
  ['03', 'Built for daily use', 'Wet-area finishes, ventilation, and accessible service zones are considered where applicable.'],
  ['04', 'Configured for climate', 'Glazing, insulation, HVAC, moisture, and exterior strategies vary by location.'],
];

const smartControls = [
  ['Access', 'Smart-lock and entry options where specified.'],
  ['Light', 'Interior and architectural lighting controls.'],
  ['Climate', 'Temperature and ventilation control options.'],
  ['Privacy', 'Curtain or shading controls in available configurations.'],
];

const siteInterfaces = [
  ['Support', 'Prepared foundations or engineered platforms, subject to site engineering.'],
  ['Power', 'Electrical supply connection coordinated for the selected model and site.'],
  ['Water', 'Incoming water connection planned around the agreed service location.'],
  ['Drainage', 'Wastewater connection coordinated with the site drainage strategy.'],
];

const qualityChecks = [
  ['01', 'Structure', 'Frame and assembly review before dispatch.'],
  ['02', 'Envelope', 'Openings, seals, and visible finish inspection.'],
  ['03', 'Building services', 'Installed electrical, water, and climate systems review.'],
  ['04', 'Final completion', 'A pre-dispatch check of the agreed finished scope.'],
];

const lifecycleStages = ['Materials', 'Factory', 'Transport', 'Installation', 'Operation', 'Reuse / end of life'];

export default function SystemPage() {
  return (
    <div className="min-h-screen bg-ink pt-28 text-ivory md:pt-36">
      <SEO
        title="Technology Behind It"
        description="Explore the integrated structure, envelope, building services, and site interfaces behind DVR modular capsule building systems."
        image="/images/modular-capsule-visitor-gateway-installation.png"
      />

      <CinematicSection parallax={false} className="pb-20 md:pb-28">
        <div className="site-container grid items-end gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative z-10 pb-4 md:pb-10">
            <Reveal direction="right">
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-xs text-gold">SYSTEM / 01</span>
                <div className="h-px w-14 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ivory/65">Integrated building systems</span>
              </div>
            </Reveal>
            <StaggerText el="h1" text="Technology behind it." className="type-page-title max-w-xl" delay={0.1} stagger={0.045} />
            <Reveal direction="up" delay={0.3}>
              <p className="mt-10 max-w-xl text-base leading-relaxed text-ivory/70 md:text-lg">
                A capsule is more than a finished shell. Structure, envelope, services, and site interfaces are developed as one compact building system. Final materials and scope vary by model and project.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.45}>
              <Link to="/contact" className="mt-10 inline-flex min-h-11 items-center gap-4 border-b border-gold/50 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold transition-colors hover:border-ivory hover:text-ivory">
                Discuss a capsule system <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15} className="relative aspect-[4/5] overflow-hidden p-2 lg:aspect-[5/6]">
            <ParallaxImage src="/images/modular-capsule-visitor-gateway-installation.png" alt="A capsule module being crane-set into position" priority className="h-full w-full" />
            <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">Designed as a system</p>
                <p className="mt-2 text-sm text-ivory/75">A precise relationship between module and place.</p>
              </div>
              <span className="font-mono text-xs text-ivory/55">01—08</span>
            </div>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} overlay={false} className="border-y border-stone/15 bg-light-secondary text-stone section-space-compact">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal direction="right" className="relative overflow-hidden bg-stone/5 p-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <ParallaxImage src="/images/modular-capsule-courtyard-residence-hero-v2.png" alt="Panoramic modular capsule residence showing its exterior shell and glazing" className="h-full w-full" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/25 to-transparent" />
              <div className="absolute left-5 top-5 border border-gold/40 bg-ink/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-gold md:left-7 md:top-7">Layered assembly</div>
              <div className="absolute bottom-5 left-5 hidden gap-3 lg:flex lg:flex-col">
                {['Exterior shell', 'Thermal layer', 'Structural frame'].map((label, index) => (
                  <div key={label} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-ivory">
                    <span className="flex h-5 w-5 items-center justify-center border border-gold/50 font-mono text-[10px] text-gold">0{index + 1}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-4">
                <Layers3 size={18} className="text-gold-text" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-text">Capsule anatomy</span>
              </div>
              <h2 className="mt-7 type-section">Built in layers. Engineered as one system.</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone/75">The visible form contains a coordinated building assembly. Each layer has a role, while its final construction remains specific to the chosen model and configuration.</p>
            </Reveal>
            <div className="mt-10 divide-y divide-stone/15 border-t border-stone/15">
              {anatomyLayers.map(([number, title, copy], index) => (
                <Reveal key={title} direction="left" delay={0.08 + index * 0.045}>
                  <article className="grid grid-cols-[2.75rem_1fr] gap-3 py-4 md:grid-cols-[3.5rem_1fr] md:gap-5 md:py-5">
                    <span className="font-mono text-xs text-gold-text">{number}</span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone/70">{copy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="border-b border-stone/15 bg-ink text-ivory section-space-compact">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <Reveal direction="right">
              <span className="eyebrow text-gold">Structural engineering</span>
              <h2 className="mt-6 type-section max-w-lg">Engineered to move. Built to remain.</h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/70">A capsule must respond to handling and transport before it becomes a permanent room. The structural chassis connects the delivery condition to the final support strategy.</p>
            </Reveal>
            <div className="mt-10 border-t border-stone/20">
              {structuralNotes.map(([number, title, copy], index) => (
                <Reveal key={title} direction="right" delay={0.08 + index * 0.06}>
                  <article className="grid grid-cols-[2.75rem_1fr] gap-3 border-b border-stone/20 py-5 md:grid-cols-[3.5rem_1fr] md:gap-5">
                    <span className="font-mono text-xs text-gold">{number}</span>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                      <p className="max-w-sm text-sm leading-relaxed text-ivory/65">{copy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="left" className="relative aspect-[4/3] overflow-hidden p-2">
            <ParallaxImage src="/images/modular-capsule-tea-estate-retreat-installation-v2.png" alt="Capsule module positioned above prepared supports in a tea-estate setting" className="h-full w-full" />
            <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 flex justify-between gap-4 text-xs font-semibold uppercase tracking-[0.08em] text-ivory/75"><span>Module</span><span className="text-gold">Support</span><span>Site</span></div>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} overlay={false} className="bg-light text-stone section-space-compact">
        <div className="site-container">
          <Reveal direction="up" className="max-w-3xl">
            <span className="eyebrow text-gold-text">Envelope + glazing</span>
            <h2 className="mt-6 type-section">The barrier between comfort and climate.</h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone/75">The envelope separates interior comfort from external conditions. Glazing, sealing, insulation, drainage, and exterior materials are considered together rather than as separate finishes.</p>
          </Reveal>
          <Reveal direction="up" delay={0.15} className="relative mt-12 overflow-hidden bg-stone/5 p-2 md:mt-16">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/8]">
              <ParallaxImage src="/images/modular-capsule-forest-retreat-hero-v2.png" alt="Panoramic capsule retreat with large insulated glazing in a forest setting" className="h-full w-full" />
              <div className="pointer-events-none absolute inset-0 bg-ink/25" />
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-2 sm:inset-x-6 sm:bottom-6 sm:grid-cols-4 sm:gap-4">
                {['01 Glazing', '02 Shell', '03 Insulation', '04 Weather layer'].map((label) => (
                  <span key={label} className="border border-ivory/30 bg-ink/75 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ivory sm:px-4 sm:py-3 sm:text-xs">{label}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-5 border-t border-stone/20 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Panoramic glazing', 'Insulated glazed openings are selected by model and project requirements.'],
              ['Sealed construction', 'Layered junctions help manage exposure around the capsule exterior.'],
              ['Solar + privacy', 'Shading, opening windows, and privacy options are available where specified.'],
              ['Material response', 'Exterior and moisture strategies are considered for the particular climate.'],
            ].map(([title, copy], index) => (
              <Reveal key={title} direction="up" delay={index * 0.06}>
                <article className="border-l border-gold/50 pl-4">
                  <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone/70">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="border-y border-stone/15 bg-ink text-ivory section-space-compact">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.83fr_1.17fr] lg:gap-16">
          <Reveal direction="right" className="relative overflow-hidden bg-ivory/5 p-2">
            <div className="relative aspect-square overflow-hidden">
              <ParallaxImage src="/images/modular-capsule-island-retreat-interior-v2.png" alt="Capsule interior with integrated lighting and finished service areas" className="h-full w-full" />
              <div className="pointer-events-none absolute inset-0 bg-ink/30" />
              <div className="absolute inset-x-5 bottom-5 border-t border-gold/50 pt-3 text-xs font-semibold uppercase tracking-[0.1em] text-gold">Services coordinated before final connection</div>
            </div>
          </Reveal>
          <div>
            <Reveal direction="left">
              <span className="eyebrow text-gold">Integrated building services</span>
              <h2 className="mt-6 type-section">Technology you don’t have to see.</h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/70">Electrical, climate, plumbing, and equipment routes are planned within the compact plan. The finished interior stays calm because the building services are considered before the module meets the site.</p>
            </Reveal>
            <div className="mt-10 grid border-l border-t border-stone/20 sm:grid-cols-2">
              {serviceRoutes.map(([number, title, copy], index) => (
                <Reveal key={title} direction="left" delay={0.08 + index * 0.07} className="border-b border-r border-stone/20 p-6 md:p-8">
                  <span className="font-mono text-xs text-gold">{number}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{copy}</p>
                </Reveal>
              ))}
            </div>
            <Reveal direction="left" delay={0.3} className="mt-7 border-l border-gold/60 pl-5 md:mt-8 md:pl-6">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">Serviceable systems</span>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ivory/65">Where the model permits, technical equipment can be grouped into accessible service zones so electrical, water, climate, and control components can be inspected with minimal disturbance to occupied spaces.</p>
            </Reveal>
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} overlay={false} className="border-b border-stone/15 bg-light-secondary py-12 text-stone md:py-16">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12">
            <Reveal direction="right">
              <span className="eyebrow text-gold-text">Sustainability · whole-life carbon</span>
              <h2 className="mt-5 type-section">Lower impact starts with the system.</h2>
            </Reveal>
            <Reveal direction="left">
              <p className="max-w-2xl text-base leading-relaxed text-stone/75">A capsule’s environmental impact extends beyond the energy it uses on site. Materials, manufacturing, transport, installation, and operation all contribute to whole-life carbon. Actual performance depends on the model, material specification, manufacturing location, transport distance, climate, and energy source.</p>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.12} className="mt-8 grid grid-cols-2 border-l border-t border-stone/20 sm:grid-cols-3 lg:grid-cols-6">
            {lifecycleStages.map((stage, index) => (
              <div key={stage} className="border-b border-r border-stone/20 px-4 py-4 md:px-5">
                <span className="font-mono text-xs text-gold-text">0{index + 1}</span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-stone">{stage}</p>
              </div>
            ))}
          </Reveal>

          <div className="mt-8 grid gap-7 border-t border-stone/20 pt-7 md:grid-cols-3 md:gap-10">
            <Reveal direction="up">
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-text">Embodied carbon</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/70">Materials, manufacturing, transport, and installation all contribute to a building’s upfront impact. Controlled off-site production can improve material use and reduce site waste and rework, while material selection and logistics remain important variables.</p>
            </Reveal>
            <Reveal direction="up" delay={0.08}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-text">Operational carbon</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/70">Insulation, insulated or Low-E glazing where specified, efficient climate systems, LED lighting, and intelligent controls can help reduce energy demand during use.</p>
            </Reveal>
            <Reveal direction="up" delay={0.16}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-text">Reuse + adaptability</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/70">Where the model and project allow, a relocatable modular structure can support refurbishment, reuse, or deployment at a new site rather than complete demolition and replacement.</p>
            </Reveal>
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} overlay={false} className="bg-light text-stone section-space-compact">
        <div className="site-container">
          <Reveal direction="up" className="max-w-3xl">
            <span className="eyebrow text-gold-text">Safety + comfort</span>
            <h2 className="mt-6 type-section">Comfort is an engineered outcome.</h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone/75">The best technical decisions stay mostly invisible: a controlled interior, sensible protection, and equipment that supports daily use without interrupting the room.</p>
          </Reveal>
          <div className="mt-10 grid border-l border-t border-stone/20 md:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {comfortMeasures.map(([number, title, copy], index) => (
              <Reveal key={title} direction="up" delay={index * 0.07} className="border-b border-r border-stone/20 p-6 md:p-7">
                <span className="font-mono text-xs text-gold-text">{number}</span>
                <h3 className="mt-7 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone/70">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="border-y border-stone/15 bg-ink text-ivory section-space-compact">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <div>
            <Reveal direction="right">
              <span className="eyebrow text-gold">Intelligent living</span>
              <h2 className="mt-6 type-section">One interface. Multiple systems.</h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/70">Where included, controls bring the everyday environment together without turning the room into a dashboard. Available systems depend on the selected model and project scope.</p>
            </Reveal>
            <div className="mt-10 divide-y divide-stone/20 border-y border-stone/20">
              {smartControls.map(([title, copy], index) => (
                <Reveal key={title} direction="right" delay={0.08 + index * 0.07}>
                  <article className="grid grid-cols-[minmax(5.5rem,0.45fr)_1fr] gap-4 py-5 md:gap-8">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-gold">{title}</h3>
                    <p className="text-sm leading-relaxed text-ivory/65">{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="left" className="relative aspect-[4/5] overflow-hidden bg-ivory/5 p-2 sm:aspect-square">
            <ParallaxImage src="/images/modular-capsule-wellness-pavilion-interior-v2.png" alt="Calm capsule interior with integrated ambient lighting" className="h-full w-full" />
            <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-gold/50 pt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ivory/80"><span>Future-ready</span><span className="text-gold">Project-dependent</span></div>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} overlay={false} className="border-b border-stone/15 bg-light-secondary py-10 text-stone md:py-12">
        <div className="site-container">
          <Reveal direction="up" className="grid gap-5 border-b border-stone/20 pb-6 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-10 md:pb-8">
            <div>
              <span className="eyebrow text-gold-text">Quality before delivery</span>
              <h2 className="mt-4 text-[clamp(1.5rem,2.2vw,2.25rem)] font-display font-semibold leading-[1.05] tracking-[-0.025em]">Built off-site. Checked before dispatch.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-stone/75 md:text-base">Factory completion allows the structure, envelope, installed services, and finishes to be reviewed before the capsule leaves production.</p>
          </Reveal>
          <div className="grid border-l border-stone/20 sm:grid-cols-2 lg:grid-cols-4">
            {qualityChecks.map(([number, title, copy], index) => (
              <Reveal key={title} direction="up" delay={0.06 + index * 0.06} className="border-b border-r border-stone/20 p-4 md:p-5">
                <span className="font-mono text-xs text-gold-text">{number}</span>
                <h3 className="mt-4 text-sm font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/70">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} overlay={false} className="bg-light text-stone section-space-compact">
        <div className="site-container">
          <div className="grid items-end gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
            <Reveal direction="right" className="relative aspect-[4/3] overflow-hidden bg-stone/5 p-2">
              <ParallaxImage src="/images/capsule-site-preparation.webp" alt="Prepared capsule site with support locations and access route" className="h-full w-full" />
              <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-2 sm:inset-x-7 sm:bottom-7 sm:grid-cols-4 sm:gap-3">
                {['Power', 'Water', 'Drainage', 'Support'].map((label) => (
                  <span key={label} className="border border-ivory/25 bg-ink/80 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-ivory sm:px-3 sm:text-xs">{label}</span>
                ))}
              </div>
            </Reveal>
            <div>
              <Reveal direction="left">
                <span className="eyebrow text-gold-text">Site integration</span>
                <h2 className="mt-6 type-section">Designed off-site. Connected to place.</h2>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-stone/75">A capsule arrives as a coordinated building volume, then connects to a site that has been prepared for its particular ground conditions, utilities, access, and intended setting.</p>
              </Reveal>
              <div className="mt-9 grid gap-x-8 gap-y-6 border-t border-stone/20 pt-7 sm:grid-cols-2">
                {siteInterfaces.map(([title, copy], index) => (
                  <Reveal key={title} direction="left" delay={0.08 + index * 0.06}>
                    <article>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-gold-text">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone/70">{copy}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
              <p className="mt-7 border-l border-gold/50 pl-4 text-sm leading-relaxed text-stone/70">Final requirements depend on the selected model, project location, local infrastructure, and site engineering.</p>
            </div>
          </div>
          <Reveal direction="up" className="mt-12 grid gap-7 border-y border-stone/20 py-8 md:mt-16 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-12 md:py-10">
            <div>
              <span className="eyebrow text-gold-text">Documentation for project coordination</span>
              <h2 className="mt-5 text-[clamp(1.5rem,2.2vw,2.25rem)] font-display font-semibold leading-[1.05] tracking-[-0.025em]">Technical information, ready for the project team.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-relaxed text-stone/75">Commercial modular projects may require drawings, specifications, structural information, and supporting product documentation for coordination with consultants, contractors, and local authorities.</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.08em] text-gold-text">
                <span>Model data</span><span>Technical drawings</span><span>System information</span><span>Project documentation</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-stone/65">Available documentation varies by model, supplier, and destination. Local approvals, permits, and code compliance remain project- and jurisdiction-specific.</p>
            </div>
          </Reveal>
          <Reveal direction="up" className="mt-14 text-center md:mt-20">
            <span className="eyebrow text-gold-text">Technical information by model</span>
            <h2 className="mt-5 type-section">Find the right system.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone/75">Dimensions, layouts, configurations, and available systems vary by model. Explore individual models for project-specific information.</p>
            <Link to="/work" className="mt-8 inline-flex min-h-11 items-center gap-4 border-b border-gold/60 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold-text transition-colors hover:border-stone hover:text-stone">View models <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
