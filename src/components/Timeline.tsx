import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TimelineEntry } from '../types';
import { Calendar, ChevronRight, CheckCircle2, Milestone, Sparkles } from 'lucide-react';

interface TimelineProps {
  timeline: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  const [expandedId, setExpandedId] = useState<string | null>(timeline[timeline.length - 1]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-24 px-6 md:px-12 bg-[#0C0F14] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block mb-2">
              07 — Chronology
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal tracking-tight">
              Journey & Milestones
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md font-light leading-relaxed">
            A chronological timeline detailing Muhammad Ameen's evolving focus across engineering, research, and creative practice.
          </p>
        </div>

        {/* Minimalist Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {timeline.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Year Marker Point on Vertical Axis */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isExpanded
                      ? 'bg-[#C5A059] border-[#C5A059] shadow-lg shadow-[#C5A059]/30'
                      : 'bg-[#0A0C10] border-white/20 group-hover:border-[#C5A059]'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-[#0A0C10]' : 'bg-[#C5A059]'}`} />
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`p-6 md:p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isExpanded
                      ? 'editorial-card-active border-[#C5A059]/50 bg-[#121622]'
                      : 'editorial-card border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 font-mono text-xs font-bold">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl text-[#F4F1EA] group-hover:text-[#C5A059] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#A09D96]">
                      <span>{item.subtitle}</span>
                      <ChevronRight className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90 text-[#C5A059]' : ''}`} />
                    </div>
                  </div>

                  <p className="text-sm text-[#B0AD9E] font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expanded Highlights */}
                  {isExpanded && item.highlights.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 pt-6 border-t border-white/10 space-y-3"
                    >
                      <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block">
                        Key Milestones & Artifacts
                      </span>
                      <ul className="space-y-2">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#E5E2DC] font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
