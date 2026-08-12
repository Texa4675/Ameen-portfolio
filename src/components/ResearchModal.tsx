import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ResearchTopic } from '../types';
import { X, Lightbulb, BookOpen, HelpCircle, Layers, CheckCircle } from 'lucide-react';

interface ResearchModalProps {
  topic: ResearchTopic | null;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ topic, onClose }) => {
  if (!topic) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="editorial-card max-w-3xl w-full my-auto rounded-2xl border border-[#C5A059]/40 bg-[#0D0F14] overflow-hidden relative shadow-2xl space-y-8 p-6 md:p-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3 font-mono text-xs text-[#A09D96]">
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                {topic.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/50 border border-white/10 text-[10px]">
                Status: {topic.status}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#161A22] text-[#A09D96] hover:text-[#F4F1EA] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Core Hypothesis */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F1EA]">
              {topic.title}
            </h2>
            <p className="text-base text-[#A09D96] font-light leading-relaxed">
              {topic.shortSummary}
            </p>
          </div>

          {/* Detailed Inquiry */}
          <div className="space-y-3 p-6 rounded-xl bg-[#12151C] border border-white/5">
            <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
              Working Research Hypothesis
            </span>
            <p className="text-base text-[#F4F1EA] font-serif italic">
              “{topic.currentHypothesis}”
            </p>
          </div>

          {/* Full Narrative */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
              Inquiry Scope & Thesis
            </span>
            <p className="text-sm sm:text-base text-[#C2BFB5] font-light leading-relaxed">
              {topic.fullDescription}
            </p>
          </div>

          {/* Key Questions */}
          {topic.keyQuestions && topic.keyQuestions.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                Fundamental Questions Being Examined
              </span>
              <ul className="space-y-2">
                {topic.keyQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#141822] border border-white/5 text-xs text-[#E5E2DC] font-mono">
                    <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reading List */}
          {topic.readingList && topic.readingList.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                Reference Reading & Foundations
              </span>
              <div className="flex flex-wrap gap-2">
                {topic.readingList.map((book, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#161A24] border border-white/10 text-xs font-mono text-[#A09D96]"
                  >
                    📖 {book}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#C5A059] text-[#0A0C10] font-semibold text-xs hover:bg-[#E2BE76] transition-all"
            >
              Close Inquiry
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
