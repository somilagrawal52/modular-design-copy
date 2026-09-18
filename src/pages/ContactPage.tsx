import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Download,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import ParallaxElement from "../components/ParallaxElement";
import ParallaxImage from "../components/ParallaxImage";
import StaggerText from "../components/StaggerText";
import Reveal from "../components/Reveal";
import CinematicSection from "../components/CinematicSection";
import SEO from "../components/SEO";
import Magnetic from "../components/Magnetic";
import { INDIA_CONTACT, CANADA_CONTACT, SALES_EMAIL } from "../config/siteMode";
import { submitContactForm } from "../lib/contact";

const inquiryTypes = [
  "Modular Space Capsule",
  "Resort & Hospitality Enclave",
  "Private Estate Retreat",
  "Commercial & Wellness Space",
  "Architectural Partnership",
  "Masterplan Community Amenity",
];

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState("");
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (submissionState === "submitting") return;

    if (!selectedInquiry) {
      setSubmissionState("error");
      setSubmissionMessage("Please choose an advisory focus.");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmissionState("submitting");
    setSubmissionMessage("");

    try {
      await submitContactForm(form);

      form.reset();
      setSelectedInquiry("");

      setSubmissionState("success");

      setSubmissionMessage(
        "Thank you. Your advisory brief has been submitted successfully. Our executive advisory team will review your requirements and respond within 24 business hours.",
      );
    } catch (error) {
      setSubmissionState("error");

      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit your advisory brief right now. Please try again or reach out directly to sales@rpexotichomes.com.",
      );
    }
  };

  return (
    <div className="bg-light text-stone min-h-screen pt-28 md:pt-36 relative overflow-hidden">
      <SEO
        title="Inquiries & Advisory"
        description="Engage RP Exotic Homes project advisory for custom space capsule configurations, resort masterplanning, siting feasibility, and turnkey delivery."
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="site-container relative z-10">
        <div className="mb-14 md:mb-20">
          <ParallaxElement speed={0.02}>
            <Reveal direction="right">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-gold-text font-mono text-xs font-semibold">
                  04
                </span>
                <div className="rule-metallic-bronze w-12" />
                <span className="text-xs uppercase tracking-[0.14em] text-gold-text font-semibold">
                  Inquiries & Advisory
                </span>
              </div>
            </Reveal>
            <StaggerText
              el="h1"
              text="Project Advisory & Siting Feasibility."
              className="type-display mb-8 max-w-5xl text-stone"
              delay={0.2}
              stagger={0.06}
            />
            <div className="max-w-3xl">
              <StaggerText
                text="Direct consultation for commercial developers, hospitality operators, architects, and private commissioners. We structure every engagement around site topography, model selection, thermal envelope grading, and turnkey deployment."
                className="text-base md:text-lg text-stone/75 font-light leading-relaxed"
                delay={0.6}
                stagger={0.02}
              />
            </div>
          </ParallaxElement>

          {/* Three B2B Advisory Pathways */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone/15">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-light-secondary p-7 rounded-[2px] h-full">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold font-semibold block mb-2">
                  Pathway 01
                </span>
                <h3 className="text-base font-display font-semibold text-stone mb-3">
                  Resorts & Destination Developers
                </h3>
                <p className="text-xs text-stone/70 font-light leading-relaxed">
                  Multi-key masterplanning, off-grid energy and water
                  integration, and fixed CAPEX modeling for rapid ROI.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-light-secondary p-7 rounded-[2px] h-full">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold font-semibold block mb-2">
                  Pathway 02
                </span>
                <h3 className="text-base font-display font-semibold text-stone mb-3">
                  Hoteliers & Boutique Operators
                </h3>
                <p className="text-xs text-stone/70 font-light leading-relaxed">
                  Fast 48-hour on-site commissioning, R-32 acoustic isolation
                  (STC 45+), and premium RevPAR performance.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-light-secondary p-7 rounded-[2px] h-full">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold font-semibold block mb-2">
                  Pathway 03
                </span>
                <h3 className="text-base font-display font-semibold text-stone mb-3">
                  Architects & Private Commissioners
                </h3>
                <p className="text-xs text-stone/70 font-light leading-relaxed">
                  Independent micro-pier foundation engineering, site terrain
                  adaptation, and complete BIM/CAD specification packages.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-32">
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.4}>
              <div className="bg-light-secondary p-6 md:p-10 relative">
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/20" />
                <div className="mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-gold font-semibold block mb-1">
                    B2B Project Brief
                  </span>
                  <h2 className="text-2xl font-display font-semibold text-stone tracking-tight">
                    Initiate Project Advisory Brief
                  </h2>
                </div>

                <form
                  className="space-y-10"
                  onSubmit={handleSubmit}
                  aria-busy={submissionState === "submitting"}
                >
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="sr-only"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-name"
                        className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                      >
                        Full name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        placeholder="Your name"
                        required
                        className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light"
                      />
                    </div>
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-email"
                        className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                      >
                        Email address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        required
                        className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-phone"
                        className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="+91 98765 43210"
                        className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light"
                      />
                    </div>
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-company"
                        className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        autoComplete="organization"
                        placeholder="Company name"
                        className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div
                      id="contact-inquiry-label"
                      className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                    >
                      Advisory Focus <span aria-hidden="true">*</span>
                    </div>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={selectedInquiry}
                      onChange={(event) =>
                        setSelectedInquiry(event.target.value)
                      }
                      tabIndex={-1}
                      aria-hidden="true"
                      className="sr-only"
                    >
                      <option value="">Select advisory focus</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div
                      className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:gap-4"
                      role="group"
                      aria-labelledby="contact-inquiry-label"
                      aria-required="true"
                    >
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedInquiry(type)}
                          aria-pressed={selectedInquiry === type}
                          className={`min-h-11 w-full justify-start px-5 py-2 border rounded-sm text-left text-xs uppercase tracking-[0.08em] transition-all sm:w-auto sm:justify-center sm:text-center ${
                            selectedInquiry === type
                              ? "border-gold bg-gold text-ink"
                              : "border-stone/30 hover:border-gold hover:text-gold"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-estimated-units"
                        className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                      >
                        Estimated number of units
                      </label>
                      <select
                        id="contact-estimated-units"
                        name="estimatedUnits"
                        defaultValue=""
                        className="w-full min-h-14 max-w-full bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 text-stone text-lg font-light appearance-none"
                      >
                        <option value="">Select quantity</option>
                        <option value="1">1 unit</option>
                        <option value="2-5">2–5 units</option>
                        <option value="6-10">6–10 units</option>
                        <option value="11-25">11–25 units</option>
                        <option value="26-50">26–50 units</option>
                        <option value="50-plus">50+ units</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-project-timeline"
                        className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                      >
                        Project timeline
                      </label>
                      <select
                        id="contact-project-timeline"
                        name="projectTimeline"
                        defaultValue=""
                        className="w-full min-h-14 max-w-full bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 text-stone text-lg font-light appearance-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="exploring">
                          Exploring / No fixed timeline
                        </option>
                        <option value="within-3-months">Within 3 months</option>
                        <option value="3-6-months">3–6 months</option>
                        <option value="6-12-months">6–12 months</option>
                        <option value="12-plus-months">12+ months</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label
                      htmlFor="contact-brief"
                      className="text-xs uppercase tracking-[0.1em] text-gold-text font-semibold"
                    >
                      Your brief <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      placeholder="Tell us about your project, intended use, number of units, and what you would like to create."
                      id="contact-brief"
                      name="brief"
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light resize-none"
                    />
                  </div>

                  <Magnetic strength={0.2}>
                    <motion.button
                      type="submit"
                      disabled={submissionState === "submitting"}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="mobile-no-hover w-full min-h-14 py-5 bg-gold text-ink uppercase tracking-[0.1em] font-semibold text-xs flex items-center justify-center gap-6 group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        {submissionState === "submitting"
                          ? "Submitting Advisory Brief..."
                          : "Submit Advisory Brief"}
                      </span>
                      <ArrowRight
                        size={16}
                        className="relative z-10 group-hover:translate-x-2 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    </motion.button>
                  </Magnetic>
                  {(submissionState === "submitting" || submissionMessage) && (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`text-sm leading-relaxed ${submissionState === "success" ? "text-gold-text" : "text-stone/75"}`}
                    >
                      {submissionState === "submitting"
                        ? "Sending..."
                        : submissionMessage}
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <ParallaxElement speed={-0.05} className="h-full">
              <div className="relative h-full overflow-hidden p-4 bg-stone/5">
                <ParallaxImage
                  src="/images/modular-capsule-forest-retreat-hero-v2.png"
                  alt="Premium capsule retreat set within a forest landscape"
                  className="w-full h-full"
                  objectPosition="68% center"
                />
                <div className="absolute inset-0 bg-stone/40" />
                <div className="absolute bottom-12 left-12 right-12">
                  <span className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                    Choose the right starting point
                  </span>
                  <p className="mt-5 text-xl font-sans font-medium leading-tight text-light">
                    A model, an application, or a project question.
                  </p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

        {/* DEDICATED PROMINENT INQUIRIES & ARCHITECTURAL ADVISORY CARD */}
        <div className="pb-24 md:pb-32">
          <Reveal direction="up">
            <div className="bg-light-secondary relative overflow-hidden rounded-[2px]">
              {/* Refined Architectural Header Ribbon */}
              <div className="bg-stone text-light px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-gold shrink-0" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.14em] font-mono font-semibold text-light truncate">
                    RP Exotic Homes · Executive Advisory Desk
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.12em] font-mono text-gold font-medium shrink-0">
                  Guaranteed 24-Hour SLA Response
                </span>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-6 md:p-10 lg:p-12 space-y-6 sm:space-y-8 md:space-y-10">
                {/* General Inquiry & Direct Email Desk */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 md:pb-8 border-b border-stone/15">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <span className="h-px w-5 bg-gold" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold-text font-semibold">
                        Commercial & Resort Advisory Desk
                      </span>
                    </div>
                    <a
                      href={`mailto:${SALES_EMAIL}`}
                      className="text-base sm:text-2xl md:text-3xl font-light hover:text-gold transition-colors block text-stone font-sans tracking-tight break-all sm:break-normal"
                    >
                      {SALES_EMAIL}
                    </a>
                  </div>
                  <div className="text-xs font-mono text-stone/70 md:text-right space-y-1 shrink-0">
                    <p className="text-gold-text font-semibold flex items-center md:justify-end gap-1.5">
                      <span>✓</span> Direct Executive Consultation
                    </p>
                    <p className="text-stone/60">
                      Turnkey CAPEX Budgeting • Siting Feasibility • Direct
                      Procurement
                    </p>
                  </div>
                </div>

                {/* Studio Locations — Clean Vertical Architectural Ledger (Variant A) */}
                <div className="space-y-8 pt-2">
                  {/* INDIAN OFFICE */}
                  <div className="space-y-3 pb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono uppercase tracking-[0.14em] text-stone font-bold">
                          Indian Office
                        </span>
                        <span className="text-[10px] font-mono text-stone/40">
                          ·
                        </span>
                        <span className="text-[11px] font-mono text-gold-text font-semibold uppercase tracking-wider">
                          Jaipur, Rajasthan, India
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone/50 font-light">
                        {INDIA_CONTACT.hours}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-3 pt-1">
                      <a
                        href={INDIA_CONTACT.tel}
                        className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-stone hover:text-gold transition-colors tracking-tight"
                      >
                        {INDIA_CONTACT.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-2 pt-1 text-xs sm:text-sm text-stone/75 font-light leading-relaxed">
                      <MapPin
                        size={14}
                        className="text-stone/40 mt-0.5 shrink-0"
                      />
                      <span>{INDIA_CONTACT.address}</span>
                    </div>
                  </div>

                  {/* Signature Bronze Architectural Divider (Suggestion B) */}
                  <div className="py-2">
                    <div className="rule-metallic-bronze opacity-75" />
                  </div>

                  {/* INTERNATIONAL OFFICE */}
                  <div className="space-y-3 pt-2 pb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono uppercase tracking-[0.14em] text-stone font-bold">
                          International Office
                        </span>
                        <span className="text-[10px] font-mono text-stone/40">
                          ·
                        </span>
                        <span className="text-[11px] font-mono text-stone/60 uppercase tracking-wider">
                          Bowmanville, Ontario, Canada
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone/50 font-light">
                        {CANADA_CONTACT.hours}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-3 pt-1">
                      <a
                        href={CANADA_CONTACT.tel}
                        className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-stone hover:text-gold transition-colors tracking-tight"
                      >
                        {CANADA_CONTACT.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-2 pt-1 text-xs sm:text-sm text-stone/75 font-light leading-relaxed">
                      <MapPin
                        size={14}
                        className="text-stone/40 mt-0.5 shrink-0"
                      />
                      <span>{CANADA_CONTACT.address}</span>
                    </div>
                  </div>
                </div>

                {/* Developer Partnerships & Brochure Download */}
                <div className="pt-8 border-t border-stone/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="text-gold-text" size={16} />
                      <h4 className="text-sm uppercase tracking-[0.1em] font-mono font-semibold text-stone">
                        Architectural & Developer Partnerships
                      </h4>
                    </div>
                    <p className="text-stone/75 font-light text-xs md:text-sm leading-relaxed">
                      Whether specifying a single bespoke capsule or
                      master-planning a multi-key eco-resort enclave, our
                      advisory team coordinates factory-controlled
                      manufacturing, custom R-32 thermal packages, and rapid
                      48-hour plug-and-play crane commissioning.
                    </p>
                  </div>
                  <a
                    href="/rp-exotic-homes-architectural-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="RP-Exotic-Homes-Architectural-Brochure.pdf"
                    className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 bg-stone text-light text-xs uppercase tracking-[0.1em] font-semibold hover:bg-gold hover:text-stone transition-all w-full sm:w-auto shrink-0"
                  >
                    <Download size={14} /> Download Brochure (PDF)
                  </a>
                </div>
              </div>

              {/* Bottom Reassurance Strip */}
              <div className="px-4 sm:px-6 py-3.5 md:px-8 border-t border-stone/15 bg-stone/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-stone/60">
                <span className="text-gold-text font-semibold uppercase tracking-wider">
                  Factory Direct Procurement • Aerospace Alloy Cladding •
                  Seismic Zone IV Rigidity
                </span>
                <span className="shrink-0">www.rpexotichomes.com</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
