import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Folder, BookOpen, Lightbulb, User, Mail, ArrowRight } from 'lucide-react';
import { PortfolioData, Project, ResearchTopic, JournalEntry } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSelectProject: (p: Project) => void;
  onSelectResearch: (r: ResearchTopic) => void;
  onSelectJournal: (j: JournalEntry) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  data,
  onSelectProject,
  onSelectResearch,
  onSelectJournal,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingProjects = data.projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );

  const matchingResearch = data.researchTopics.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.shortSummary.toLowerCase().includes(q)
  );

  const matchingJournal = data.journalEntries.filter(
    (j) =>
      j.title.toLowerCase().includes(q) ||
      j.category.toLowerCase().includes(q) ||
      j.excerpt.toLowerCase().includes(q)
  );

  const navLinks = [
    { label: 'About Muhammad Ameen', section: '#about' },
    { label: 'Areas of Interest', section: '#interests' },
    { label: 'Selected Works', section: '#work' },
    { label: 'Ideas I\'m Exploring', section: '#research' },
    { label: 'Creative Journal', section: '#journal' },
    { label: 'Skills Matrix', section: '#skills' },
    { label: 'Journey Timeline', section: '#timeline' },
    { label: 'Contact & Inquiry', section: '#contact' },
  ];

  const handleScrollTo = (href: string) => {
    onClose();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="editorial-card max-w-2xl w-full rounded-2xl border border-[#C5A059]/40 bg-[#0D0F14] overflow-hidden shadow-2xl space-y-4 p-4"
        >
          {/* Input Header */}
          <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10">
            <Search className="w-5 h-5 text-[#C5A059]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, research theses, journal essays, navigation..."
              className="w-full bg-transparent text-[#F4F1EA] text-sm focus:outline-none placeholder-[#A09D96] font-mono"
            />
            <button
              onClick={onClose}
              className="p-1 rounded bg-[#161A22] text-[#A09D96] hover:text-[#F4F1EA]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto space-y-6 px-2 py-2">
            {/* Quick Navigation Links */}
            {query === '' && (
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block px-2">
                  Quick Navigation
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {navLinks.map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleScrollTo(link.section)}
                      className="p-2.5 rounded-lg bg-[#141822] hover:bg-[#C5A059]/15 hover:text-[#C5A059] text-xs font-mono text-left text-[#E5E2DC] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-50" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Projects */}
            {matchingProjects.length > 0 && (
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block px-2">
                  Projects ({matchingProjects.length})
                </span>
                {matchingProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(proj);
                    }}
                    className="w-full p-3 rounded-xl bg-[#141822] hover:bg-[#1A202C] text-left transition-colors flex items-start gap-3 border border-white/5"
                  >
                    <Folder className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-serif text-base text-[#F4F1EA] block">
                        {proj.title} <span className="font-mono text-xs text-[#C5A059]">({proj.category})</span>
                      </span>
                      <span className="font-mono text-xs text-[#A09D96] line-clamp-1">
                        {proj.shortDescription}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Matching Research */}
            {matchingResearch.length > 0 && (
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block px-2">
                  Ideas & Research ({matchingResearch.length})
                </span>
                {matchingResearch.map((res) => (
                  <button
                    key={res.id}
                    onClick={() => {
                      onClose();
                      onSelectResearch(res);
                    }}
                    className="w-full p-3 rounded-xl bg-[#141822] hover:bg-[#1A202C] text-left transition-colors flex items-start gap-3 border border-white/5"
                  >
                    <Lightbulb className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-serif text-base text-[#F4F1EA] block">
                        {res.title} <span className="font-mono text-xs text-[#C5A059]">({res.category})</span>
                      </span>
                      <span className="font-mono text-xs text-[#A09D96] line-clamp-1">
                        {res.shortSummary}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Matching Journal */}
            {matchingJournal.length > 0 && (
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block px-2">
                  Creative Journal Essays ({matchingJournal.length})
                </span>
                {matchingJournal.map((j) => (
                  <button
                    key={j.id}
                    onClick={() => {
                      onClose();
                      onSelectJournal(j);
                    }}
                    className="w-full p-3 rounded-xl bg-[#141822] hover:bg-[#1A202C] text-left transition-colors flex items-start gap-3 border border-white/5"
                  >
                    <BookOpen className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-serif text-base text-[#F4F1EA] block">
                        {j.title} <span className="font-mono text-xs text-[#C5A059]">({j.readTime})</span>
                      </span>
                      <span className="font-mono text-xs text-[#A09D96] line-clamp-1">
                        {j.excerpt}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {query !== '' && matchingProjects.length === 0 && matchingResearch.length === 0 && matchingJournal.length === 0 && (
              <div className="text-center py-8 text-[#A09D96] font-mono text-xs">
                No matching results found for “{query}”.
              </div>
            )}
          </div>

          <div className="px-3 py-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A09D96]">
            <span>Press <kbd className="bg-black/50 px-1.5 py-0.5 rounded border border-white/10">ESC</kbd> to exit</span>
            <span>Muhammad Ameen Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
