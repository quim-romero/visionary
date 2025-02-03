import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function LightboxModal({ artwork, onClose }) {
  const modalRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (!artwork) return;
    openerRef.current = document.activeElement;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const list = Array.from(focusables || []);
        if (list.length === 0) return;
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    modalRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [artwork, onClose]);

  useEffect(() => {
    if (!artwork && openerRef.current) {
      openerRef.current.focus();
    }
  }, [artwork]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-desc"
          tabIndex={-1}
          className="bg-white dark:bg-neutral-900 rounded-xl max-w-3xl w-full relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-black dark:hover:text-white"
          >
            <FiX className="w-6 h-6" />
          </button>
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-auto rounded object-cover"
            />
            <div className="flex flex-col justify-center">
              <h2 id="lightbox-title" className="text-2xl font-semibold mb-2">
                {artwork.title}
              </h2>
              <p className="text-sm text-neutral-500 mb-4">
                by {artwork.artist}
              </p>
              <p
                id="lightbox-desc"
                className="text-base text-neutral-700 dark:text-neutral-300 mb-4"
              >
                {artwork.description}
              </p>
              <span className="text-xs text-neutral-400">
                {artwork.category} · {artwork.type} · {artwork.style}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
