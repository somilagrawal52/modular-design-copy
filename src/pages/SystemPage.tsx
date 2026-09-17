import { Link } from "react-router-dom";
import {
  Anchor,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Factory,
  Layers3,
  Leaf,
  Recycle,
  ShieldCheck,
  Snowflake,
  Sun,
  Truck,
  Zap,
} from "lucide-react";
import CinematicSection from "../components/CinematicSection";
import ParallaxImage from "../components/ParallaxImage";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import StaggerText from "../components/StaggerText";

interface AnatomyLayer {
  number: string;
  title: string;
  spec: string;
  guestBenefit: string;
  developerBenefit: string;
}

const engineeringWarranties = [
  {
    icon: ShieldCheck,
    badge: "50-YEAR STRUCTURAL FRAME",
    title: "Galvanized Steel Exoskeleton",
    spec: "Aviation-grade hot-dip galvanized steel structural space-frame engineered for zero structural fatigue, corrosion immunity, and a certified 50+ year asset life.",
  },
  {
    icon: Snowflake,
    badge: "15-YEAR WEATHERPROOF ENVELOPE",
    title: "Fluorocarbon Alloy Shell",
    spec: "Marine-certified fluorocarbon baked finish with continuous monolithic weather-resistive barrier, providing complete wind-driven rain and UV degradation immunity.",
  },
  {
    icon: Zap,
    badge: "SEISMIC ZONE IV & 180 KM/H WIND",
    title: "Typhoon & Earthquake Resilience",
    spec: "Rigid three-dimensional structural space-cage tested to withstand Class 12 typhoon wind velocities (180 km/h) and severe seismic ground movements.",
  },
  {
    icon: Clock3,
    badge: "48-HOUR COMMISSIONING",
    title: "Turnkey Plug-and-Play MEPS",
    spec: "Factory pre-commissioned inverter HVAC, pressurized sanitary pods, and quick-connect electrical harnesses allow complete operational handover in 48 hours.",
  },
];

const logisticsRoadmap = [
  {
    step: "01",
    phase: "Phase 1: 60–90 Days",
    title: "Controlled Factory Fabrication",
    desc: "Every capsule is manufactured in an aerospace-grade off-site facility. Structure, R-32 insulation, electrical harness, and luxury bathroom pods are completed in parallel, cutting conventional construction time by up to 70% with 78% less waste.",
  },
  {
    step: "02",
    phase: "Phase 2: Global Transit",
    title: "Flat-Rack Maritime Logistics",
    desc: "Engineered to fit standard 40ft Flat-Rack shipping containers. Units are moisture-sealed, shock-monitored, and transported seamlessly across maritime trade routes and regional flatbed carriers to any port worldwide.",
  },
  {
    step: "03",
    phase: "Phase 3: Day 1 Siting",
    title: "Zero-Excavation Micro-Pier Siting",
    desc: "Lightweight helical screw piles or concrete micro-piers are installed without destructive hillside terracing or heavy earthmoving machinery. A single mobile crane lifts each capsule into position in under 45 minutes.",
  },
  {
    step: "04",
    phase: "Phase 4: Day 2 Turnover",
    title: "48-Hour Plug-and-Play Turnover",
    desc: "Pre-routed quick-connect utility sleeves mate with site power, potable water, and wastewater lines. After air-balancing and smart automation calibration, the keys are handed over for immediate guest check-ins.",
  },
];

const anatomyLayers: AnatomyLayer[] = [
  {
    number: "01",
    title: "Aerospace Aluminium Shell",
    spec: "Fluorocarbon-coated aluminium composite outer skin engineered for coastal salt-spray resilience and UV resistance.",
    guestBenefit: "Sleek, reflective all-weather architectural aesthetic that mirrors natural surroundings.",
    developerBenefit: "Zero external repainting or corrosion maintenance across a 50+ year asset lifespan.",
  },
  {
    number: "02",
    title: "Continuous Weather Barrier",
    spec: "High-permeability weather-resistive membrane eliminating wind-driven rain penetration while allowing moisture vapor to escape.",
    guestBenefit: "Draft-free stillness and complete weather security during extreme monsoons or mountain storms.",
    developerBenefit: "Preserves internal building envelope health and completely eliminates water-ingress liability.",
  },
  {
    number: "03",
    title: "R-32 High-Performance Thermal Core",
    spec: "Continuous R-32 multi-layer insulation combining high-density closed-cell cores and aerogel thermal breaks.",
    guestBenefit: "Whisper-quiet acoustic privacy (STC 45+) and effortless 21°C climate stability across -15°C alpine cold or 45°C desert heat.",
    developerBenefit: "Cuts HVAC operating energy demand by up to 35%, dramatically lowering required solar-battery array CAPEX.",
  },
  {
    number: "04",
    title: "Galvanized Steel Exoskeleton",
    spec: "Hot-dip galvanized structural space-frame engineered to Seismic Zone IV and 180 km/h wind resistance.",
    guestBenefit: "Solid, deflection-free structural sensation with zero floor vibration or creaking.",
    developerBenefit: "Enables crane placement onto lightweight micro-piers with zero heavy foundation excavation or site alteration.",
  },
  {
    number: "05",
    title: "Factory Integrated MEPS System",
    spec: "Pre-commissioned concealed ducted inverter HVAC, pressurization pumps, and modular plug-and-play wiring harnesses.",
    guestBenefit: "Concealed draftless climate delivery and immediate, continuous hot water.",
    developerBenefit: "Quick-connect utility coupling delivers 48-hour on-site commissioning per module, slashing wet-trade delays.",
  },
  {
    number: "06",
    title: "Architectural Interior Fit-Out",
    spec: "Natural oak wall linings, concealed warm ambient LED coves, and acoustic ceiling baffles installed under clean factory supervision.",
    guestBenefit: "Five-star boutique hospitality tactile luxury and serene atmospheric lighting from day one.",
    developerBenefit: "Immediate guest occupancy upon installation without weeks of punch-list fixes or on-site painting dust.",
  },
];


const comfortMeasures = [
  [
    "01",
    "Low-E Glazing (SHGC < 0.28)",
    "Double/triple-glazed Low-E argon assemblies block 72%+ of solar heat gain while preserving crystal-clear panoramic horizon views.",
  ],
  [
    "02",
    "Acoustic Separation (STC 45+)",
    "Multi-layer envelope damping and decoupled wall assemblies insulate interior guest suites from heavy rain and exterior resort activity.",
  ],
  [
    "03",
    "Turnkey Ready for Operations",
    "Pre-fitted luxury bathrooms, integrated ventilation, and durable marine-grade finishes deliver instant hospitality compliance.",
  ],
  [
    "04",
    "All-Climate Optimization",
    "From Himalayan freeze-thaw cycles to coastal humidity and desert thermal swings, thermal envelopes are configured for site conditions.",
  ],
];

const siteInterfaces = [
  [
    "Support",
    "Prepared foundations or engineered platforms, subject to site engineering.",
  ],
  [
    "Power",
    "Electrical supply connection coordinated for the selected model and site.",
  ],
  [
    "Water",
    "Incoming water connection planned around the agreed service location.",
  ],
  [
    "Drainage",
    "Wastewater connection coordinated with the site drainage strategy.",
  ],
];

const qualityChecks = [
  ["01", "Structure", "Frame and assembly review before dispatch."],
  ["02", "Envelope", "Openings, seals, and visible finish inspection."],
  [
    "03",
    "Building services",
    "Installed electrical, water, and climate systems review.",
  ],
  [
    "04",
    "Final completion",
    "A pre-dispatch check of the agreed finished scope.",
  ],
];

const lowerCarbonBenefits = [
  {
    icon: Factory,
    title: "Factory precision, 78% less waste",
    copy: "Standardized off-site fabrication ensures micrometer material planning, rigid quality control, and clean manufacturing. An ASCE multi-case study documented that modular construction reduces construction waste by 78.8% on average versus conventional builds, protecting project budgets and site ecologies.",
  },
  {
    icon: Leaf,
    title: "Minimal site disturbance",
    copy: "Because capsules arrive 95% complete, on-site wet trades, noisy deliveries, concrete batching, and dust are eliminated. This enables resort developers to place luxury suites across sensitive tea estates, coastal sands, and forests without landscape destruction.",
  },
  {
    icon: Snowflake,
    title: "R-32 shell & Low-E envelope",
    copy: "R-32 continuous multi-layer insulation and argon-filled Low-E glazing (SHGC < 0.28) drastically reduce HVAC energy demand, cutting resort operational power costs by up to 35% while providing guests with draft-free acoustic stillness in extreme climates.",
  },
  {
    icon: Sun,
    title: "Solar-ready and all-electric capable",
    copy: "Engineered with integrated pre-wired DC/AC solar bus routing for rooftop or remote PV arrays, battery storage, and high-efficiency inverter heat pumps, enabling completely autonomous, off-grid eco-resort operations.",
  },
  {
    icon: Recycle,
    title: "100% relocatable asset value",
    copy: "Unlike site-built concrete that depreciates with demolition, modular capsule suites retain high capital value as transportable, redeployable assets that can be relocated, reconfigured, or liquidated as market demands evolve.",
  },
  {
    icon: Clock3,
    title: "Rapid 90-day project commissioning",
    copy: "Parallel factory fabrication and site foundation preparation compress typical 18-month construction timelines to under 90 days. On-site positioning and MEPS hookup require just 48 hours per suite, accelerating guest revenue generation.",
  },
];

export default function SystemPage() {
  return (
    <div className="min-h-screen bg-light pt-28 text-stone md:pt-36">
      <SEO
        title="Technology Behind It"
        description="Explore the structure, envelope, lower-carbon approach, quality checks, and site interfaces behind RP Exotic Homes modular capsule building systems."
        image="/images/modular-capsule-visitor-gateway-installation.png"
      />

      <CinematicSection parallax={false} overlay={false} className="pb-20 md:pb-28">
        <div className="site-container grid items-end gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative z-10 pb-4 md:pb-10">
            <Reveal direction="right">
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-xs text-gold">SYSTEM / 01</span>
                <div className="h-px w-14 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-stone/65">
                  Integrated building systems
                </span>
              </div>
            </Reveal>
            <StaggerText
              el="h1"
              text="Technology behind it."
              className="type-page-title max-w-xl text-stone"
              delay={0.1}
              stagger={0.045}
            />
            <Reveal direction="up" delay={0.3}>
              <p className="mt-10 max-w-xl text-base leading-relaxed text-stone/75 md:text-lg">
                A capsule is more than a finished shell. Structure, envelope,
                services, and site interfaces are developed as one compact
                building system. Final materials and scope vary by model and
                project.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.45}>
              <Link
                to="/contact"
                className="mt-10 inline-flex min-h-11 items-center gap-4 border-b border-gold/60 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold-text transition-colors hover:border-stone hover:text-stone"
              >
                Discuss a capsule system <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal
            direction="left"
            delay={0.15}
            className="relative aspect-[4/5] overflow-hidden p-2 lg:aspect-[5/6]"
          >
            <ParallaxImage
              src="/images/modular-capsule-visitor-gateway-installation.png"
              alt="A capsule module being crane-set into position"
              priority
              className="h-full w-full"
            />
            <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-stone/75 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
                  Designed as a system
                </p>
                <p className="mt-2 text-sm text-light/85">
                  A precise relationship between module and place.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="border-y border-stone/15 bg-light-secondary text-stone section-space-compact"
      >
        <div className="site-container grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal
            direction="right"
            className="relative overflow-hidden bg-stone/5 p-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <ParallaxImage
                src="/images/modular-capsule-courtyard-residence-hero-v2.png"
                alt="Panoramic modular capsule residence showing its exterior shell and glazing"
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-stone/30 to-transparent" />
              <div className="absolute left-5 top-5 border border-gold/40 bg-stone/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-light md:left-7 md:top-7">
                Layered assembly
              </div>
              <div className="absolute bottom-5 left-5 hidden gap-3 lg:flex lg:flex-col">
                {["Exterior shell", "Thermal layer", "Structural frame"].map(
                  (label, index) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-light"
                    >
                      <span className="flex h-5 w-5 items-center justify-center border border-gold/50 font-mono text-[10px] text-gold">
                        0{index + 1}
                      </span>
                      <span>{label}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-4">
                <Layers3 size={18} className="text-gold-text" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-text">
                  Capsule anatomy
                </span>
              </div>
              <h2 className="mt-7 type-section">
                Built in layers. Engineered as one system.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone/75">
                The visible form contains a coordinated building assembly. Each
                layer has a role, while its final construction remains specific
                to the chosen model and configuration.
              </p>
            </Reveal>
            <div className="mt-10 divide-y divide-stone/15 border-t border-stone/15">
              {anatomyLayers.map(
                ({ number, title, spec, guestBenefit, developerBenefit }, index) => (
                  <Reveal
                    key={title}
                    direction="left"
                    delay={0.08 + index * 0.045}
                  >
                    <article className="grid grid-cols-[2.75rem_1fr] gap-3 py-5 md:grid-cols-[3.5rem_1fr] md:gap-5 md:py-6">
                      <span className="font-mono text-xs text-gold-text font-semibold">
                        {number}
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold tracking-tight text-stone">
                          {title}
                        </h3>
                        <p className="text-sm leading-relaxed text-stone/75 font-light">
                          {spec}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          <div className="bg-stone/5 border border-stone/10 p-2.5 rounded-[2px]">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-gold-text font-semibold block mb-0.5">
                              Guest Benefit
                            </span>
                            <span className="text-xs text-stone/80 font-light leading-snug">
                              {guestBenefit}
                            </span>
                          </div>
                          <div className="bg-stone/5 border border-stone/10 p-2.5 rounded-[2px]">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-stone/60 font-semibold block mb-0.5">
                              Developer Benefit
                            </span>
                            <span className="text-xs text-stone/80 font-light leading-snug">
                              {developerBenefit}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* Engineering Warranties & Resilience Trust Strip */}
      <CinematicSection
        parallax={false}
        overlay={false}
        className="bg-light-secondary text-stone border-b border-stone/15 py-12 md:py-16"
      >
        <div className="site-container">
          <Reveal direction="up" className="max-w-3xl mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs text-gold">STRUCTURAL ASSURANCES</span>
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-stone/65">
                Engineering durability & warranties
              </span>
            </div>
            <h2 className="type-section text-stone">
              Certified durability. Guaranteed asset longevity.
            </h2>
            <p className="mt-4 text-base text-stone/75 font-light leading-relaxed">
              Engineered to aerospace and luxury marine standards. Every module is protected by verified structural, envelope, and mechanical warranties designed for commercial institutional investment.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringWarranties.map(({ icon: Icon, badge, title, spec }, idx) => (
              <Reveal key={badge} direction="up" delay={idx * 0.08}>
                <div className="bg-light p-6 md:p-7 border border-stone/15 rounded-[2px] h-full flex flex-col justify-between shadow-sm relative group hover:border-gold/60 transition-colors duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-[2px] bg-stone/5 flex items-center justify-center text-gold-text">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-[10px] text-stone/40 font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gold-text block mb-1">
                        {badge}
                      </span>
                      <h3 className="text-base font-semibold text-stone">
                        {title}
                      </h3>
                    </div>
                    <div className="rule-metallic-bronze" />
                    <p className="text-xs leading-relaxed text-stone/75 font-light">
                      {spec}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone/10 flex items-center gap-2 text-[10px] font-mono text-stone/60">
                    <CheckCircle2 size={12} className="text-gold" /> Certified Architectural Standard
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="bg-light text-stone section-space-compact"
      >
        <div className="site-container">
          <Reveal direction="up" className="max-w-3xl">
            <span className="eyebrow text-gold-text">Envelope + glazing</span>
            <h2 className="mt-6 type-section">
              The barrier between comfort and climate.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone/75">
              The envelope separates interior comfort from external conditions.
              Glazing, sealing, insulation, drainage, and exterior materials are
              considered together rather than as separate finishes.
            </p>
          </Reveal>
          <Reveal
            direction="up"
            delay={0.15}
            className="relative mt-12 overflow-hidden bg-stone/5 p-2 md:mt-16"
          >
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/8]">
              <ParallaxImage
                src="/images/modular-capsule-forest-retreat-hero-v2.png"
                alt="Panoramic capsule retreat with large insulated glazing in a forest setting"
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-stone/25" />
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-2 sm:inset-x-6 sm:bottom-6 sm:grid-cols-4 sm:gap-4">
                {[
                  "01 Low-E Glazing (SHGC < 0.28)",
                  "02 Aero Alloy Shell",
                  "03 R-32 Thermal Core",
                  "04 Monolithic Barrier",
                ].map((label) => (
                  <span
                    key={label}
                    className="border border-light/30 bg-stone/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-light sm:px-4 sm:py-3 sm:text-xs backdrop-blur-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-6 border-t border-stone/20 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Low-E Glazing (SHGC < 0.28)",
                subtitle: "Panoramic views without solar overheating",
                copy: "Double and triple-glazed argon-filled curved envelope with Solar Heat Gain Coefficient SHGC < 0.28 and U-value < 1.4 W/m²K. Blocks 72%+ of solar infrared heat without tint distortion, shielding suites from greenhouse overheating and lowering daytime AC energy by up to 35%.",
              },
              {
                title: "R-32 Multi-Layer Shell",
                subtitle: "Silent climate control & year-round comfort",
                copy: "Continuous R-32 thermal envelope with precision airtight tape sealing (air infiltration < 0.6 ACH50). Maintains a calm 21°C interior ambient temperature across sub-zero mountain winters and hot arid plains while delivering whisper-quiet acoustic isolation (STC 45+).",
              },
              {
                title: "Seismic Zone IV Exoskeleton",
                subtitle: "Zero-excavation micro-pier stability",
                copy: "Aviation-grade hot-dip galvanized steel structural cage with integrated crane-rigging points. Withstands 180 km/h wind loads and seismic shocks, enabling installation on minimal micro-piers without massive concrete ground disturbance.",
              },
              {
                title: "Diurnal Climate Ventilation",
                subtitle: "Whisper-quiet filtered fresh air & sleep comfort",
                copy: "Concealed inverter heat pump coupled with balanced fresh air heat-recovery ventilation (MERV 13). Continuously delivers filtered, fresh outdoor air without heating or cooling loss, ensuring optimal sleep comfort through day-to-night transitions.",
              },
            ].map(({ title, subtitle, copy }, index) => (
              <Reveal key={title} direction="up" delay={index * 0.06}>
                <article className="border-l-2 border-gold/60 pl-4 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-text font-semibold block">
                    {subtitle}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-stone">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone/75 font-light">
                    {copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="border-b border-stone/15 bg-light-secondary text-stone section-space-compact"
      >
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-14">
            <Reveal direction="right">
              <span className="eyebrow text-gold-text">
                Lower-carbon by design
              </span>
              <h2 className="mt-5 type-section">
                Luxury modular living with a lighter environmental footprint.
              </h2>
            </Reveal>
            <Reveal direction="left">
              <p className="max-w-2xl text-base leading-relaxed text-stone/75">
                Our modular system is designed to use controlled factory
                production, high-performance insulation, transportable
                components, and solar-ready electrical infrastructure to reduce
                waste, site disruption, and operating energy. The next step is
                to measure the full life-cycle footprint and use those findings
                to guide verified reductions.
              </p>
              <p className="mt-6 max-w-2xl border-l border-gold/60 pl-5 text-sm leading-relaxed text-stone/70">
                Modular does not automatically mean carbon neutral. Carbon
                performance depends on the steel, insulation, glazing, factory
                electricity, transport distance, foundation, operating energy,
                and end-of-life plan. We use “designed for lower-carbon
                performance” until a life-cycle assessment verifies the result.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid border-l border-t border-stone/20 sm:grid-cols-2 lg:grid-cols-3">
            {lowerCarbonBenefits.map(({ icon: Icon, title, copy }, index) => (
              <Reveal
                key={title}
                direction="up"
                delay={index * 0.06}
                className="border-b border-r border-stone/20 p-6 md:p-8"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-gold-text"
                  aria-hidden="true"
                />
                <h3 className="mt-7 text-lg font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone/70">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="bg-light text-stone section-space-compact"
      >
        <div className="site-container">
          <Reveal direction="up" className="max-w-3xl">
            <span className="eyebrow text-gold-text">Safety + comfort</span>
            <h2 className="mt-6 type-section">
              Comfort is an engineered outcome.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone/75">
              The best technical decisions stay mostly invisible: a controlled
              interior, sensible protection, and equipment that supports daily
              use without interrupting the room.
            </p>
          </Reveal>
          <div className="mt-10 grid border-l border-t border-stone/20 md:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {comfortMeasures.map(([number, title, copy], index) => (
              <Reveal
                key={title}
                direction="up"
                delay={index * 0.07}
                className="border-b border-r border-stone/20 p-6 md:p-7"
              >
                <span className="font-mono text-xs text-gold-text">
                  {number}
                </span>
                <h3 className="mt-7 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone/70">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="border-b border-stone/15 bg-light-secondary py-10 text-stone md:py-12"
      >
        <div className="site-container">
          <Reveal
            direction="up"
            className="grid gap-5 border-b border-stone/20 pb-6 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-10 md:pb-8"
          >
            <div>
              <span className="eyebrow text-gold-text">
                Quality before delivery
              </span>
              <h2 className="mt-4 text-[clamp(1.5rem,2.2vw,2.25rem)] font-display font-semibold leading-[1.05] tracking-[-0.025em]">
                Built off-site. Checked before dispatch.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-stone/75 md:text-base">
              Factory completion allows the structure, envelope, installed
              services, and finishes to be reviewed before the capsule leaves
              production.
            </p>
          </Reveal>
          <div className="grid border-l border-stone/20 sm:grid-cols-2 lg:grid-cols-4">
            {qualityChecks.map(([number, title, copy], index) => (
              <Reveal
                key={title}
                direction="up"
                delay={0.06 + index * 0.06}
                className="border-b border-r border-stone/20 p-4 md:p-5"
              >
                <span className="font-mono text-xs text-gold-text">
                  {number}
                </span>
                <h3 className="mt-4 text-sm font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/70">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="bg-light text-stone section-space-compact"
      >
        <div className="site-container">
          <div className="grid items-end gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
            <Reveal
              direction="right"
              className="relative aspect-[4/3] overflow-hidden bg-stone/5 p-2"
            >
              <ParallaxImage
                src="/images/capsule-site-preparation.webp"
                alt="Prepared capsule site with support locations and access route"
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-stone/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-2 sm:inset-x-7 sm:bottom-7 sm:grid-cols-4 sm:gap-3">
                {["Power", "Water", "Drainage", "Support"].map((label) => (
                  <span
                    key={label}
                    className="border border-light/25 bg-stone/85 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-light sm:px-3 sm:text-xs"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
            <div>
              <Reveal direction="left">
                <span className="eyebrow text-gold-text">Site integration</span>
                <h2 className="mt-6 type-section">
                  Designed off-site. Connected to place.
                </h2>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-stone/75">
                  A capsule arrives as a coordinated building volume, then
                  connects to a site that has been prepared for its particular
                  ground conditions, utilities, access, and intended setting.
                </p>
              </Reveal>
              <div className="mt-9 grid gap-x-8 gap-y-6 border-t border-stone/20 pt-7 sm:grid-cols-2">
                {siteInterfaces.map(([title, copy], index) => (
                  <Reveal
                    key={title}
                    direction="left"
                    delay={0.08 + index * 0.06}
                  >
                    <article>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-gold-text">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone/70">
                        {copy}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
              <p className="mt-7 border-l border-gold/50 pl-4 text-sm leading-relaxed text-stone/70">
                Final requirements depend on the selected model, project
                location, local infrastructure, and site engineering.
              </p>
            </div>
          </div>

          {/* Turnkey Logistics & Siting Roadmap */}
          <div className="mt-20 md:mt-28 border-t border-stone/20 pt-16">
            <Reveal direction="up" className="max-w-3xl mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs text-gold">DEPLOYMENT ROADMAP</span>
                <div className="h-px w-12 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-stone/65">
                  Turnkey logistics & siting
                </span>
              </div>
              <h2 className="type-section text-stone">
                From off-site fabrication to 48-hour guest turnover.
              </h2>
              <p className="mt-4 text-base text-stone/75 font-light leading-relaxed">
                By eliminating on-site masonry, wet trades, and multi-month contractor delays, our 4-phase turnkey logistics framework delivers rapid project execution with zero landscape destruction.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {logisticsRoadmap.map(({ step, phase, title, desc }, idx) => (
                <Reveal key={step} direction="up" delay={idx * 0.08}>
                  <div className="bg-stone/5 p-6 md:p-7 border border-stone/15 rounded-[2px] h-full flex flex-col justify-between relative group hover:border-gold/60 transition-colors duration-300">
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between border-b border-stone/15 pb-3">
                        <span className="font-mono text-2xl font-semibold text-gold-text">
                          {step}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone/60 font-semibold">
                          {phase}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-stone">
                        {title}
                      </h3>
                      <p className="text-xs leading-relaxed text-stone/75 font-light">
                        {desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="up" className="mt-14 text-center md:mt-20">
            <span className="eyebrow text-gold-text">
              Technical information by model
            </span>
            <h2 className="mt-5 type-section">Find the right system.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone/75">
              Dimensions, layouts, configurations, and available systems vary by
              model. Explore individual models for project-specific information.
            </p>
            <Link
              to="/work"
              className="mt-8 inline-flex min-h-11 items-center gap-4 border-b border-gold/60 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold-text transition-colors hover:border-stone hover:text-stone"
            >
              View models <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
