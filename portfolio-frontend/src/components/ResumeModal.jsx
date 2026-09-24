import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { publicAsset } from '../utils/helpers';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ResumeModal = ({ open, onClose }) => {
  const trapRef = useFocusTrap(open);
  const reduced = useReducedMotion();
  const resumeUrl = publicAsset(`/${profile.resumeFile}`);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/75 p-3 sm:items-center sm:p-6"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={trapRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="glass-panel flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line/60 px-4 py-3 sm:px-6">
              <h2 id="resume-modal-title" className="font-display text-lg font-semibold text-ink">
                Resume
              </h2>
              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  download={profile.resumeDownloadName}
                  className="btn-primary !px-4 !py-2 text-xs"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="icon-link !h-10 !w-10"
                  aria-label="Close resume preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 bg-elevated/20 p-2 sm:p-4">
              <object
                data={`${resumeUrl}#view=FitH`}
                type="application/pdf"
                className="h-[70vh] w-full rounded-lg border border-line/50 bg-white"
                aria-label="Resume PDF preview"
              >
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-muted">
                  <p>PDF preview is unavailable in this browser.</p>
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Open resume in a new tab
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
