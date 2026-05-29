import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Bouton flottant paramétrable — apparaît dès que triggerRef entre dans le viewport,
 * disparaît quand le footer devient visible.
 *
 * @param {string}        label       - Texte complet du bouton (desktop)
 * @param {string}        href        - Route React Router cible
 * @param {React.RefObject} triggerRef - Ref sur la section qui déclenche l'apparition
 * @param {React.ElementType} MobileIcon - Icône Lucide affichée seule sur mobile (défaut : ArrowRight)
 */
const FloatingCTA = ({ label, href, triggerRef, MobileIcon = ArrowRight }) => {
  const [hasPassedTrigger, setHasPassedTrigger] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const visible = hasPassedTrigger && !footerVisible;

  useEffect(() => {
    const footer = document.querySelector('footer[data-testid="main-footer"]');
    const trigger = triggerRef?.current;

    if (!trigger) return;

    const triggerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasPassedTrigger(true);
      },
      { threshold: 0.1 }
    );

    const footerObserver = footer
      ? new IntersectionObserver(
          ([entry]) => setFooterVisible(entry.isIntersecting),
          { threshold: 0 }
        )
      : null;

    triggerObserver.observe(trigger);
    if (footer && footerObserver) footerObserver.observe(footer);

    return () => {
      triggerObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, [triggerRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            to={href}
            aria-label={label}
            className="
              group flex items-center
              bg-[#3D8B2A] text-white font-semibold
              shadow-[0_8px_24px_rgba(61,139,42,0.3)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(61,139,42,0.45)]
              focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#2E9013] focus-visible:outline-offset-2
              rounded-full
              p-4 sm:px-7 sm:py-4 sm:gap-2
            "
          >
            {/* Mobile : icône seule (MobileIcon) — Desktop : texte + ArrowRight */}
            <MobileIcon className="w-5 h-5 flex-shrink-0 sm:hidden" />
            <span className="hidden sm:inline text-[15px]">{label}</span>
            <ArrowRight className="hidden sm:inline w-4 h-4 flex-shrink-0" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
