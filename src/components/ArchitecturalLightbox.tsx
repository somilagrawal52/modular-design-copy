import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  subtitle?: string;
  specs?: {
    footprint?: string;
    clearHeight?: string;
    capacity?: string;
  };
}

export default function ArchitecturalLightbox({
  isOpen,
  onClose,
  image,
  title,
  subtitle,
  specs,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-dark/95 backdrop-blur-xl p-4 md:p-8"
          onClick={onClose}
        >
          {/* Top Control Bar */}
          <div
            className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-[0.14em] text-gold px-2.5 py-1 bg-light/10 backdrop-blur-md rounded-[2px] border border-gold/30">
                Architectural Plate Inspection
              </span>
              {subtitle && (
                <span className="hidden sm:inline text-xs font-mono text-light/60 uppercase tracking-wider">
                  {subtitle}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-[0.1em] font-semibold text-light/80 hover:text-light bg-light/10 hover:bg-light/20 border border-light/20 rounded-[2px] transition-all duration-300"
              aria-label="Close inspection"
            >
              <X size={16} />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>

          {/* High-Resolution Image Canvas */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl max-h-[82vh] w-full flex flex-col items-center justify-center my-auto pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-[2px] border border-light/15 shadow-2xl bg-dark">
              <img
                src={image}
                alt={title}
                className="max-h-[74vh] w-auto max-w-full object-contain mx-auto select-none"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
              <div>
                <h3 className="text-base md:text-lg font-display font-semibold text-light tracking-wide">
                  {title}
                </h3>
                {specs && (
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs font-mono text-light/70">
                    {specs.footprint && <span>Footprint: {specs.footprint}</span>}
                    {specs.clearHeight && <span>· Ceiling: {specs.clearHeight}</span>}
                    {specs.capacity && <span>· Capacity: {specs.capacity}</span>}
                  </div>
                )}
              </div>
              <div className="text-[11px] font-mono text-gold tracking-widest uppercase self-end sm:self-auto">
                RP EXOTIC HOMES · MONOGRAPH ARCHIVE
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

