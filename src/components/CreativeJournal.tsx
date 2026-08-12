import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JournalEntry } from '../types';
import { BookOpen, Clock, Tag, ArrowUpRight, Camera, FileText, Image as ImageIcon } from 'lucide-react';

interface CreativeJournalProps {
  journalEntries: JournalEntry[];
  onOpenJournalDetail: (entry: JournalEntry) => void;
}

export const CreativeJournal: React.FC<CreativeJournalProps> = ({
  journalEntries,
  onOpenJournalDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Essays', 'Field Notes', 'Photography', 'Reflections'];

  const filteredEntries = journalEntries.filter((entry) => {
    if (activeCategory === 'All') return true;
    return entry.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="journal" className="py-24 px-6 md:px-12 bg-[#0C0F14] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block mb-2">
              05 — Writings & Observations
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal tracking-tight">
              Creative Journal
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                    : 'bg-[#141822] border border-white/10 text-[#A09D96] hover:text-[#F4F1EA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Magazine Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntries.map((entry, index) => {
            const isFeatured = index === 0 && activeCategory === 'All';

            return (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`editorial-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#C5A059]/40 transition-all ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Cover Image */}
                {entry.image && (
                  <div className={`relative overflow-hidden bg-[#141720] ${isFeatured ? 'h-72 md:h-80' : 'h-52'}`}>
                    <img
                      src={entry.image}
                      alt={entry.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F14] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#C5A059]">
                        {entry.category}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#A09D96]">
                      <span>{entry.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#C5A059]">
                        <Clock className="w-3 h-3" />
                        {entry.readTime}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-[#F4F1EA] group-hover:text-[#C5A059] transition-colors ${
                        isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'
                      }`}
                    >
                      {entry.title}
                    </h3>

                    <p className="text-sm text-[#B0AD9E] font-light leading-relaxed line-clamp-3">
                      {entry.excerpt}
                    </p>
                  </div>

                  {/* Footer Tag & Read More */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.slice(0, 2).map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-[#8C8A81]">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenJournalDetail(entry)}
                      className="px-4 py-2 rounded-full bg-[#181C26] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0C10] text-xs font-medium transition-all flex items-center gap-1.5"
                    >
                      <span>Read More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
