"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import Reveal from "../Reveal";
import StaggerText from "../StaggerText";
import ParallaxElement from "../ParallaxElement";
import Magnetic from "../Magnetic";
import {
  INDIA_CONTACT,
  CANADA_CONTACT,
  SALES_EMAIL,
} from "../../config/siteMode";

export default function Contact() {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionState === "submitting") return;

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmissionState("submitting");
    setSubmissionMessage("");

    try {
      const formData = new FormData(form);

      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const website = String(formData.get("website") || "").trim();

      const originalProjectType = String(
        formData.get("projectType") || "",
      ).trim();

      /*
       * Backend currently accepts:
       * Space Capsule
       * Hotel or Retreat
       * Private Project
       * Commercial Space
       * Workplace
       * Community Amenity
       *
       * Keep the existing UI exactly as it is and only normalize
       * additional frontend choices before sending.
       */
      const projectTypeMap: Record<string, string> = {
        "Modular Home": "Private Project",
        "Modular Hotel or Retreat": "Hotel or Retreat",
        "Modular Office": "Workplace",

        "Space Capsule": "Space Capsule",
        "Hotel or Retreat": "Hotel or Retreat",
        "Private Project": "Private Project",
        "Commercial Space": "Commercial Space",
        Workplace: "Workplace",
        "Community Amenity": "Community Amenity",

        "Café, Bar, or Restaurant": "Commercial Space",
        "Retail or Pop-Up": "Commercial Space",
        "Pool or Outdoor Amenity": "Community Amenity",
      };

      const projectType =
        projectTypeMap[originalProjectType] || originalProjectType;

      const response = await fetch(
        "https://modular-design-backend.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,

            // Backend-required field
            projectType,

            // Your backend expects brief, while this form uses message
            brief: message,

            // Keep message too for compatibility
            message,

            // Honeypot
            website,

            // Optional fields not present in this form
            phone: "",
            company: "",
            estimatedUnits: "",
            projectTimeline: "",
          }),
        },
      );

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        success?: boolean;
        message?: string;
      };

      if (!response.ok || (result.ok !== true && result.success !== true)) {
        throw new Error(
          result.message ||
            "We couldn't submit your advisory request right now. Please try again or reach out to sales@rpexotichomes.com.",
        );
      }

      form.reset();

      setSubmissionState("success");

      setSubmissionMessage(
        "Thank you. Your advisory request has been sent successfully. Our executive advisory team will review your brief and respond within 24 business hours.",
      );
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmissionState("error");

      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit your advisory request right now. Please try again or reach out to sales@rpexotichomes.com.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="section-space-compact relative overflow-hidden bg-light text-stone"
    >
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <ParallaxElement speed={0.02}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-gold font-mono text-xs font-semibold">
                    05
                  </span>
                  <div className="rule-metallic-bronze w-12" />
                  <span className="text-xs uppercase tracking-[0.14em] text-gold-text font-semibold">
                    Inquiries & Advisory
                  </span>
                </div>
              </Reveal>
              <StaggerText
                el="h2"
                text="Bespoke advisory for developers, hoteliers & architects."
                className="type-section mb-8 text-stone"
                delay={0.2}
                stagger={0.06}
              />
              <p className="text-base md:text-lg text-stone/75 font-light leading-relaxed mb-10">
                Whether assessing terrain feasibility for an off-grid resort or
                procuring turnkey capsule suites for a commercial development,
                our advisory team provides complete specification, logistics,
                and CAPEX modeling.
              </p>

              {/* Advisory Pillars */}
              <div className="space-y-6 pt-6 pb-8 border-y border-stone/15 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.1em] text-stone font-semibold">
                      1. Siting & Feasibility Assessment
                    </h4>
                    <p className="text-xs text-stone/70 font-light mt-0.5">
                      Topography, micro-pier foundations, off-grid utilities,
                      and crane placement logistics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.1em] text-stone font-semibold">
                      2. Model Selection & Configuration
                    </h4>
                    <p className="text-xs text-stone/70 font-light mt-0.5">
                      E3, E8, A50 envelope sizing, R-32 thermal rating, and
                      turnkey bespoke interior palettes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.1em] text-stone font-semibold">
                      3. Turnkey CAPEX & Commissioning
                    </h4>
                    <p className="text-xs text-stone/70 font-light mt-0.5">
                      Transparent fixed manufacturing pricing and 48-hour
                      on-site plug-and-play commissioning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-stone/[0.03] rounded-[2px]">
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold-text font-semibold block mb-1.5">
                    Executive Advisory Email
                  </span>
                  <a
                    href={`mailto:${SALES_EMAIL}`}
                    className="text-lg md:text-xl font-light tracking-tight text-stone hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <Mail size={16} className="text-gold shrink-0" />
                    <span>{SALES_EMAIL}</span>
                  </a>
                  <span className="block text-[11px] font-mono text-stone/50 mt-1.5">
                    Response SLA: Guaranteed within 24 business hours
                  </span>
                </div>
              </div>
            </ParallaxElement>
          </div>

          <div className="lg:col-span-7 lg:pl-24">
            <ParallaxElement speed={-0.02}>
              <Reveal direction="left" delay={0.2}>
                <div className="bg-light-secondary p-6 md:p-12 xl:p-16 relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/20" />

                  <div className="mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-gold font-semibold block mb-1">
                      Turnkey B2B Engagement
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-stone">
                      Initiate Project Advisory
                    </h3>
                  </div>

                  <form
                    className="space-y-9 md:space-y-10"
                    onSubmit={handleSubmit}
                    aria-busy={submissionState === "submitting"}
                  >
                    {/* Honeypot anti-spam field */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="sr-only"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                      <div className="relative group">
                        <label
                          htmlFor="home-contact-name"
                          className="text-xs uppercase tracking-[0.08em] text-stone/75 font-medium mb-3 block"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="home-contact-name"
                          name="name"
                          autoComplete="name"
                          placeholder="Your Name"
                          required
                          className="w-full min-h-14 bg-transparent border-b border-stone/25 py-4 outline-none focus:border-gold transition-all duration-300 placeholder:text-stone/40 text-stone text-lg font-light"
                        />
                      </div>
                      <div className="relative group">
                        <label
                          htmlFor="home-contact-email"
                          className="text-xs uppercase tracking-[0.08em] text-stone/75 font-medium mb-3 block"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="home-contact-email"
                          name="email"
                          autoComplete="email"
                          placeholder="your@email.com"
                          required
                          className="w-full min-h-14 bg-transparent border-b border-stone/25 py-4 outline-none focus:border-gold transition-all duration-300 placeholder:text-stone/40 text-stone text-lg font-light"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="home-contact-project-type"
                        className="text-xs uppercase tracking-[0.08em] text-stone/75 font-medium mb-3 block"
                      >
                        Project Type
                      </label>
                      <select
                        id="home-contact-project-type"
                        name="projectType"
                        defaultValue=""
                        required
                        className="w-full min-h-14 bg-transparent border-b border-stone/25 py-4 outline-none focus:border-gold transition-all duration-300 text-stone text-lg font-light appearance-none"
                      >
                        <option value="" className="bg-light text-stone">
                          Select Sector
                        </option>
                        <option
                          value="Modular Home"
                          className="bg-light text-stone"
                        >
                          Modular Home
                        </option>
                        <option
                          value="Modular Hotel or Retreat"
                          className="bg-light text-stone"
                        >
                          Modular Hotel or Retreat
                        </option>
                        <option
                          value="Modular Office"
                          className="bg-light text-stone"
                        >
                          Modular Office
                        </option>
                        <option
                          value="Space Capsule"
                          className="bg-light text-stone"
                        >
                          Space Capsule
                        </option>
                        <option
                          value="Hotel or Retreat"
                          className="bg-light text-stone"
                        >
                          Hotel or Retreat
                        </option>
                        <option
                          value="Private Project"
                          className="bg-light text-stone"
                        >
                          Private Project
                        </option>
                        <option
                          value="Commercial Space"
                          className="bg-light text-stone"
                        >
                          Commercial Space
                        </option>
                        <option
                          value="Workplace"
                          className="bg-light text-stone"
                        >
                          Workplace
                        </option>
                        <option
                          value="Community Amenity"
                          className="bg-light text-stone"
                        >
                          Community Amenity
                        </option>
                        <option
                          value="Café, Bar, or Restaurant"
                          className="bg-light text-stone"
                        >
                          Café, Bar, or Restaurant
                        </option>
                        <option
                          value="Retail or Pop-Up"
                          className="bg-light text-stone"
                        >
                          Retail or Pop-Up
                        </option>
                        <option
                          value="Pool or Outdoor Amenity"
                          className="bg-light text-stone"
                        >
                          Pool or Outdoor Amenity
                        </option>
                      </select>
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="home-contact-message"
                        className="text-xs uppercase tracking-[0.08em] text-stone/75 font-medium mb-3 block"
                      >
                        Message
                      </label>
                      {/* Name attribute includes both "message" and "brief" fallback */}
                      <textarea
                        placeholder="Tell us about your vision..."
                        id="home-contact-message"
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-transparent border-b border-stone/25 py-4 outline-none focus:border-gold transition-all duration-300 placeholder:text-stone/40 text-stone text-lg font-light resize-none"
                      />
                    </div>

                    <Magnetic strength={0.2}>
                      <motion.button
                        type="submit"
                        disabled={submissionState === "submitting"}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mobile-no-hover w-full py-5 bg-gold text-light uppercase tracking-[0.1em] font-semibold text-xs flex items-center justify-center gap-6 group overflow-hidden relative shadow-md hover:bg-gold-text transition-colors duration-300"
                      >
                        <span className="relative z-10">
                          {submissionState === "submitting"
                            ? "Submitting Brief..."
                            : "Submit Advisory Request"}
                        </span>
                        <Send
                          size={16}
                          className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </motion.button>
                    </Magnetic>

                    {(submissionState === "submitting" ||
                      submissionMessage) && (
                      <p
                        role="status"
                        aria-live="polite"
                        className={`text-sm leading-relaxed ${
                          submissionState === "success"
                            ? "text-gold-text font-semibold"
                            : "text-stone/75"
                        }`}
                      >
                        {submissionState === "submitting"
                          ? "Sending..."
                          : submissionMessage}
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
}
