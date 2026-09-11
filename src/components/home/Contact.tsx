import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import Reveal from "../Reveal";
import StaggerText from "../StaggerText";
import ParallaxElement from "../ParallaxElement";
import Magnetic from "../Magnetic";
import { dreamRealtyEmail } from "../../config/siteMode";

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
            "We couldn't send your enquiry right now. Please try again.",
        );
      }

      form.reset();

      setSubmissionState("success");

      setSubmissionMessage(
        "Thank you. Your project enquiry has been sent successfully.",
      );
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmissionState("error");

      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your enquiry right now. Please try again.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="section-space-compact relative overflow-hidden"
    >
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <ParallaxElement speed={0.02}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-gold font-mono text-xs">05</span>
                  <div className="h-[1px] w-12 bg-gold" />
                  <span className="text-xs uppercase tracking-[0.1em] text-ivory/60 font-semibold">
                    Inquiries
                  </span>
                </div>
              </Reveal>
              <StaggerText
                el="h2"
                text="Let's define the future."
                className="type-section mb-10"
                delay={0.2}
                stagger={0.08}
              />

              <div className="space-y-10 md:space-y-12">
                {[{ label: "Sales enquiries", value: dreamRealtyEmail() }].map(
                  (item, i) => (
                    <Reveal
                      key={item.label}
                      direction="right"
                      delay={i * 0.1 + 0.2}
                    >
                      <a
                        href={`mailto:${item.value}`}
                        className="group block w-fit"
                      >
                        <h4 className="text-xs uppercase tracking-[0.1em] text-ivory/75 font-medium mb-3 group-hover:text-gold transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                          {item.value}
                        </p>
                      </a>
                    </Reveal>
                  ),
                )}
              </div>
            </ParallaxElement>
          </div>

          <div className="lg:col-span-7 lg:pl-24">
            <ParallaxElement speed={-0.02}>
              <Reveal direction="left" delay={0.2}>
                <div className="bg-white/[0.045] p-6 md:p-12 xl:p-16 border border-white/15 relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/20" />

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
                          className="text-xs uppercase tracking-[0.08em] text-ivory/75 font-medium mb-3 block"
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
                          className="w-full min-h-14 bg-transparent border-b border-white/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/50 text-ivory/90 text-lg font-light"
                        />
                      </div>
                      <div className="relative group">
                        <label
                          htmlFor="home-contact-email"
                          className="text-xs uppercase tracking-[0.08em] text-ivory/75 font-medium mb-3 block"
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
                          className="w-full min-h-14 bg-transparent border-b border-white/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/50 text-ivory/90 text-lg font-light"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="home-contact-project-type"
                        className="text-xs uppercase tracking-[0.08em] text-ivory/75 font-medium mb-3 block"
                      >
                        Project Type
                      </label>
                      <select
                        id="home-contact-project-type"
                        name="projectType"
                        defaultValue=""
                        required
                        className="w-full min-h-14 bg-transparent border-b border-white/20 py-4 outline-none focus:border-gold transition-all duration-500 text-ivory/90 text-lg font-light appearance-none"
                      >
                        <option value="" className="bg-ink text-ivory">
                          Select Sector
                        </option>
                        <option
                          value="Modular Home"
                          className="bg-ink text-ivory"
                        >
                          Modular Home
                        </option>
                        <option
                          value="Modular Hotel or Retreat"
                          className="bg-ink text-ivory"
                        >
                          Modular Hotel or Retreat
                        </option>
                        <option
                          value="Modular Office"
                          className="bg-ink text-ivory"
                        >
                          Modular Office
                        </option>
                        <option
                          value="Space Capsule"
                          className="bg-ink text-ivory"
                        >
                          Space Capsule
                        </option>
                        <option
                          value="Hotel or Retreat"
                          className="bg-ink text-ivory"
                        >
                          Hotel or Retreat
                        </option>
                        <option
                          value="Private Project"
                          className="bg-ink text-ivory"
                        >
                          Private Project
                        </option>
                        <option
                          value="Commercial Space"
                          className="bg-ink text-ivory"
                        >
                          Commercial Space
                        </option>
                        <option value="Workplace" className="bg-ink text-ivory">
                          Workplace
                        </option>
                        <option
                          value="Community Amenity"
                          className="bg-ink text-ivory"
                        >
                          Community Amenity
                        </option>
                        <option
                          value="Café, Bar, or Restaurant"
                          className="bg-ink text-ivory"
                        >
                          Café, Bar, or Restaurant
                        </option>
                        <option
                          value="Retail or Pop-Up"
                          className="bg-ink text-ivory"
                        >
                          Retail or Pop-Up
                        </option>
                        <option
                          value="Pool or Outdoor Amenity"
                          className="bg-ink text-ivory"
                        >
                          Pool or Outdoor Amenity
                        </option>
                      </select>
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="home-contact-message"
                        className="text-xs uppercase tracking-[0.08em] text-ivory/75 font-medium mb-3 block"
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
                        className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/50 text-ivory/90 text-lg font-light resize-none"
                      />
                    </div>

                    <Magnetic strength={0.2}>
                      <motion.button
                        type="submit"
                        disabled={submissionState === "submitting"}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mobile-no-hover w-full py-6 bg-gold text-ink uppercase tracking-[0.1em] font-semibold text-xs flex items-center justify-center gap-6 group overflow-hidden relative"
                      >
                        <span className="relative z-10">
                          {submissionState === "submitting"
                            ? "Sending..."
                            : "Start a project"}
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
                            ? "text-gold"
                            : "text-ivory/75"
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
