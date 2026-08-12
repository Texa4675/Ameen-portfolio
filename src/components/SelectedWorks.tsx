import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ExternalLink, Github, Eye, Sparkles, Filter, ArrowUpRight } from 'lucide-react';

interface SelectedWorksProps {
  projects: Project[];
  onOpenProjectDetail: (project: Project) => void;
  selectedFilterOverride?: string | null;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({
  projects,
  onOpenProjectDetail,
  selectedFilterOverride,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Technology', 'Research', 'Creative Work', 'Digital Experience'];

  const filterToUse = selectedFilterOverride || activeCategory;

  const filteredProjects = projects.filter((proj) => {
    if (filterToUse === 'All') return true;
    return proj.category.toLowerCase() === filterToUse.toLowerCase();
  });

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#0C0F14] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block mb-2">
              03 — Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal tracking-tight">
              Selected Works
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all ${
                  filterToUse.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#C5A059] text-[#0A0C10] font-semibold shadow-md'
                    : 'bg-[#141822] border border-white/10 text-[#A09D96] hover:text-[#F4F1EA] hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {filteredProjects.map((project, index) => {
            // Asymmetrical layout logic: First & fourth items span 7 or 8 columns, others 4 or 5
            const isFeatured = project.featured || index % 3 === 0;
            const colSpan = isFeatured ? 'md:col-span-8 lg:col-span-7' : 'md:col-span-4 lg:col-span-5';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${colSpan} editorial-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#C5A059]/40 transition-all`}
              >
                {/* Visual Image Header */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#141720]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F14] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#C5A059]">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#E5E2DC]">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#F4F1EA] group-hover:text-[#C5A059] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#A09D96] font-light leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#161A24] border border-white/5 text-[11px] font-mono text-[#B0AD9E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Row */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => onOpenProjectDetail(project)}
                      className="px-5 py-2.5 rounded-full bg-[#1A1E29] border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0C10] font-medium text-xs transition-all flex items-center gap-2 group/btn"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[#141822] border border-white/10 text-[#A09D96] hover:text-[#F4F1EA] transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[#141822] border border-white/10 text-[#A09D96] hover:text-[#C5A059] transition-colors"
                          title="External Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#12151C] border border-white/10">
            <p className="text-[#A09D96] font-mono text-sm">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 px-4 py-2 rounded-full bg-[#C5A059] text-[#0A0C10] font-semibold text-xs"
            >
              Reset Category Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
