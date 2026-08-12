import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AreaOfInterest } from '../types';
import { Cpu, Atom, Compass, Feather, Camera, BookOpen, ArrowUpRight, Sparkles } from 'lucide-react';

interface AreasOfInterestProps {
  interests: AreaOfInterest[];
  onSelectInterest?: (interestTitle: string) => void;
}

export const AreasOfInterest: React.FC<AreasOfInterestProps> = ({
  interests,
  onSelectInterest,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeInterestModal, setActiveInterestModal] = useState<AreaOfInterest | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#C5A059]" />;
      case 'Atom': return <Atom className="w-6 h-6 text-[#C5A059]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#C5A059]" />;
      case 'Feather': return <Feather className="w-6 h-6 text-[#C5A059]" />;
      case 'Camera': return <Camera className="w-6 h-6 text-[#C5A059]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#C5A059]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="interests" className="py-24 px-6 md:px-12 bg-[#0A0C10] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block mb-2">
              02 — Intellectual Spheres
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal tracking-tight">
              Areas of Interest
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md font-light leading-relaxed">
            Six distinct dimensions of inquiry that form Muhammad Ameen's creative and research practice.
          </p>
        </div>

        {/* Asymmetrical / Distinctive Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, index) => {
            const isHovered = hoveredId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveInterestModal(item)}
                className={`editorial-card p-8 rounded-2xl cursor-pointer group relative overflow-hidden flex flex-col justify-between min-h-[260px] ${
                  isHovered ? 'editorial-card-active scale-[1.02]' : ''
                }`}
              >
                {/* Background Subtle Geometric Watermark */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="font-mono text-4xl font-bold text-[#C5A059]">0{index + 1}</span>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#181C26] border border-white/10 flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    {getIcon(item.icon)}
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-widest block mb-1">
                      Sphere 0{index + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-[#F4F1EA] group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#A09D96] font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag list & Arrow */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between relative z-10 mt-4">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {item.relatedFocus.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-[#B0AD9E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#181C26] group-hover:bg-[#C5A059] group-hover:text-[#0A0C10] text-[#A09D96] flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Interest Overview Modal */}
      {activeInterestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="editorial-card max-w-xl w-full p-8 rounded-2xl border border-[#C5A059]/40 bg-[#0D0F14] space-y-6 relative"
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#181C26] border border-[#C5A059]/30">
                  {getIcon(activeInterestModal.icon)}
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                    Area of Focus
                  </span>
                  <h3 className="font-serif text-3xl text-[#F4F1EA]">
                    {activeInterestModal.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveInterestModal(null)}
                className="text-[#A09D96] hover:text-[#F4F1EA] text-2xl font-light focus:outline-none"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#C2BFB5] leading-relaxed font-light">
              {activeInterestModal.longDescription}
            </p>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                Primary Focus Dimensions
              </span>
              <div className="flex flex-wrap gap-2">
                {activeInterestModal.relatedFocus.map((focus, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-3 py-1 rounded-full bg-[#181C26] border border-white/10 text-xs font-mono text-[#E5E2DC]"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => {
                  const title = activeInterestModal.title;
                  setActiveInterestModal(null);
                  if (onSelectInterest) onSelectInterest(title);
                }}
                className="px-5 py-2.5 rounded-full bg-[#C5A059] text-[#0A0C10] font-medium text-xs hover:bg-[#E2BE76] transition-all flex items-center gap-2"
              >
                <span>Filter Projects in {activeInterestModal.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
