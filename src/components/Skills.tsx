import React from 'react';
import { motion } from 'motion/react';
import { SkillCategory } from '../types';
import { Terminal, Palette, Brain, CheckCircle, Wrench, ShieldCheck } from 'lucide-react';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Technology':
        return <Terminal className="w-5 h-5 text-[#C5A059]" />;
      case 'Creative':
        return <Palette className="w-5 h-5 text-[#C5A059]" />;
      case 'Intellectual':
        return <Brain className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#0A0C10] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block mb-2">
              06 — Capability Matrix
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal tracking-tight">
              Skills & Methodologies
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md font-light leading-relaxed">
            A qualitative overview of technical proficiencies, creative mediums, and intellectual methodologies without arbitrary percentage bars.
          </p>
        </div>

        {/* 3 Main Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.categoryName}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="editorial-card p-8 rounded-2xl flex flex-col justify-between border border-white/10 space-y-8"
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="p-3 rounded-xl bg-[#181C26] border border-[#C5A059]/30">
                    {getCategoryIcon(cat.categoryName)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-widest block">
                      Category 0{index + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-[#F4F1EA]">
                      {cat.categoryName}
                    </h3>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-[#12151C] border border-white/5 space-y-1.5 hover:border-[#C5A059]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-[#F4F1EA]">
                          {skill.name}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-[10px] font-mono border border-[#C5A059]/30">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#A09D96] font-light leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Frameworks Chips */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block">
                  Tools & Environment
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.toolsAndFrameworks.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#161A24] border border-white/10 text-xs font-mono text-[#E5E2DC]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
