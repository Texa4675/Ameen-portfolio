import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JournalEntry } from '../types';
import { X, Clock, Calendar, Tag, BookOpen, Share2 } from 'lucide-react';

interface JournalModalProps {
  entry: JournalEntry | null;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="editorial-card max-w-3xl w-full my-auto rounded-2xl border border-[#C5A059]/40 bg-[#0D0F14] overflow-hidden relative shadow-2xl space-y-8 p-6 md:p-12 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3 font-mono text-xs text-[#A09D96]">
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                {entry.category}
              </span>
              <span>{entry.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#C5A059]">
                <Clock className="w-3.5 h-3.5" />
                {entry.readTime}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#161A22] text-[#A09D96] hover:text-[#F4F1EA] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F1EA] leading-tight">
              {entry.title}
            </h1>
            <p className="text-lg font-serif italic text-[#C5A059] border-l-2 border-[#C5A059] pl-4 py-1">
              “{entry.excerpt}”
            </p>
          </div>

          {/* Optional Visual Banner */}
          {entry.image && (
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 bg-[#12151C]">
              <img
                src={entry.image}
                alt={entry.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Body Article Text */}
          <div className="prose prose-invert max-w-none text-[#C2BFB5] font-light leading-relaxed text-base sm:text-lg space-y-6">
            {entry.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#161A24] border border-white/10 text-xs font-mono text-[#A09D96]"
                >
                  #{t}
                </span>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#C5A059] text-[#0A0C10] font-semibold text-xs hover:bg-[#E2BE76] transition-all"
            >
              Done Reading
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
