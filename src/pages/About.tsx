import { ArrowUpRight, Compass, ShipWheel } from "lucide-react";
import { Link } from "react-router-dom";
import CinematicSection from "../components/CinematicSection";
import ParallaxImage from "../components/ParallaxImage";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import StaggerText from "../components/StaggerText";

const directorExperience = [
  {
    icon: Compass,
    number: "01",
    title: "Hospitality + project consultancy",
    copy: "One of the Directors is an established hotelier and hospitality consultant, with extensive experience providing turnkey project consultancy for golf courses, five-star hotels and luxury resorts across Jaipur and the NCR region. His expertise encompasses project planning, development, aesthetics and execution, with a strong understanding of the expectations of discerning clients.",
  },
  {
    icon: ShipWheel,
    number: "02",
    title: "International operational experience",
    copy: "The other Director brings more than two decades of international experience managing luxury cruise ships, with extensive global exposure and a highly developed eye for design, aesthetics, quality and operational excellence.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-ink pt-28 text-ivory md:pt-36">
      <SEO
        title="About Us"
        description="Learn how Dream Ventures Realty combines hospitality, luxury tourism, marine, and project consultancy experience with next-generation modular architecture."
        image="/images/modular-capsule-desert-retreat-hero.png"
      />

      <CinematicSection parallax={false} className="pb-20 md:pb-28">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative z-10 py-6 md:py-10">
            <Reveal direction="right">
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-xs text-gold">DVR / 01</span>
                <div className="h-px w-14 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ivory/65">
                  About us
                </span>
              </div>
            </Reveal>
            <StaggerText
              el="h1"
              text="About Dream Ventures Realty."
              className="type-page-title max-w-xl"
              delay={0.1}
              stagger={0.04}
            />
          </div>

          <Reveal
            direction="left"
            delay={0.15}
            className="relative aspect-[4/5] w-full max-w-[38rem] justify-self-center overflow-hidden p-2 lg:aspect-[5/6] lg:justify-self-end"
          >
            <ParallaxImage
              src="/images/modular-capsule-desert-retreat-hero.png"
              alt="DVR modular capsule in a considered landscape setting"
              priority
              className="h-full w-full"
            />
            <div className="pointer-events-none absolute inset-2 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
                Hospitality · modular architecture · place
              </p>
            </div>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="border-y border-stone/15 bg-light-secondary text-stone section-space-compact"
      >
        <div className="site-container grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <Reveal direction="right">
            <span className="eyebrow text-gold-text">Our story</span>
            <h2 className="mt-6 type-section">
              Experience that shapes every project.
            </h2>
          </Reveal>
          <Reveal direction="left" className="space-y-6 text-base leading-relaxed text-stone/75 md:text-lg">
            <p>
              DVR was established by two Directors with several decades of
              combined experience in the hospitality, luxury tourism, marine,
              and project consultancy sectors.
            </p>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="bg-light text-stone section-space-compact"
      >
        <div className="site-container">
          <Reveal direction="up" className="max-w-3xl">
            <span className="eyebrow text-gold-text">The Directors</span>
            <h2 className="mt-6 type-section">Two perspectives. One shared standard.</h2>
          </Reveal>
          <div className="mt-12 grid border-l border-t border-stone/20 md:mt-16 md:grid-cols-2">
            {directorExperience.map(({ icon: Icon, number, title, copy }, index) => (
              <Reveal
                key={title}
                direction="up"
                delay={index * 0.1}
                className="border-b border-r border-stone/20 p-7 md:p-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon size={22} strokeWidth={1.5} className="text-gold-text" aria-hidden="true" />
                  <span className="font-mono text-xs text-gold-text">{number}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone/70 md:text-base">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection
        parallax={false}
        overlay={false}
        className="border-y border-stone/15 bg-light-secondary text-stone section-space-compact"
      >
        <div className="site-container grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <span className="eyebrow text-gold-text">Why modular</span>
            <h2 className="mt-6 type-section">
              A more flexible approach to hospitality development.
            </h2>
          </Reveal>
          <Reveal direction="left" className="space-y-6 text-base leading-relaxed text-stone/75 md:text-lg">
            <p>
              Bringing together these complementary strengths, the Directors
              have ventured into the emerging world of next-generation modular
              and capsule architecture—a technology that offers clients rapid
              project turnaround, exceptional aesthetics, flexibility and cost
              efficiency, while significantly reducing the environmental impact
              associated with conventional construction.
            </p>
            <p>
              Our vision is to create spaces that can be deployed quickly,
              adapted to changing requirements and, where required, relocated
              or redeployed—providing a smarter approach to hospitality and
              accommodation development.
            </p>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="section-space text-center">
        <div className="site-container relative z-10">
          <Reveal direction="up">
            <span className="eyebrow text-gold">Our vision</span>
            <h2 className="mx-auto mt-6 max-w-4xl type-section">
              Designed for the future.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-ivory/70">
              At DVR, we combine hospitality expertise, international standards,
              innovative technology and a strong sense of environmental
              responsibility to deliver solutions designed for the future.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex min-h-11 items-center gap-4 border-b border-gold/60 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold transition-colors hover:border-ivory hover:text-ivory"
            >
              Discuss your project <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
