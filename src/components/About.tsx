import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, BookOpen, Lightbulb, Compass, Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  aboutStatement: string;
  aboutBio: string[];
  philosophyPoints: { title: string; desc: string }[];
}

export const About: React.FC<AboutProps> = ({
  aboutStatement,
  aboutBio,
  philosophyPoints,
}) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'philosophy' | 'approach'>('narrative');

  const approachPillars = [
    {
      step: "01",
      title: "Interdisciplinary Exploration",
      desc: "Refusing to isolate technology from human culture, philosophy, or creative design."
    },
    {
      step: "02",
      title: "Continuous First-Principles Inquiry",
      desc: "Asking fundamental 'why' and 'how' questions before writing code or making architectural commitments."
    },
    {
      step: "03",
      title: "Execution with Aesthetic Discipline",
      desc: "Translating abstract research ideas into clean, reliable, and beautifully presented digital reality."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0C0F14] relative overflow-hidden">
      {/* Decorative background rule */}
      <div className="max-w-7xl mx-auto mb-16">
        <hr className="editorial-hr" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block mb-2">
              01 — Identity & Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal tracking-tight">
              About Muhammad Ameen
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] font-mono max-w-xs">
            Personal profile, intellectual inquiry & creative outlook.
          </p>
        </div>

        {/* Highlight Quote Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="editorial-card p-8 md:p-12 rounded-2xl mb-12 relative overflow-hidden border border-[#C5A059]/20"
        >
          <Quote className="absolute -top-4 -left-4 w-24 h-24 text-[#C5A059]/5 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-xs text-[#C5A059] uppercase tracking-widest block mb-4">
              Core Belief
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#F4F1EA] leading-snug">
              “{aboutStatement}”
            </blockquote>
          </div>
        </motion.div>

        {/* Main Grid: Portrait Image + Content Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <img
                src="/src/assets/images/ameen_hero_portrait_1786556270531.jpg"
                alt="Muhammad Ameen Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] md:h-[540px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0C10]/80 backdrop-blur-md border border-white/10">
                <span className="font-serif text-lg text-[#F4F1EA] block">Muhammad Ameen</span>
                <span className="font-mono text-xs text-[#C5A059] block mt-0.5">
                  Researcher, Developer & Creator
                </span>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-3 rounded-xl bg-[#12151C] border border-white/5">
                <span className="font-serif text-xl text-[#C5A059] block">3+</span>
                <span className="font-mono text-[10px] text-[#A09D96] uppercase block">Years Inquiry</span>
              </div>
              <div className="p-3 rounded-xl bg-[#12151C] border border-white/5">
                <span className="font-serif text-xl text-[#C5A059] block">12+</span>
                <span className="font-mono text-[10px] text-[#A09D96] uppercase block">Projects</span>
              </div>
              <div className="p-3 rounded-xl bg-[#12151C] border border-white/5">
                <span className="font-serif text-xl text-[#C5A059] block">6</span>
                <span className="font-mono text-[10px] text-[#A09D96] uppercase block">Research Fields</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* View Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#12151C] border border-white/10 w-fit">
              <button
                onClick={() => setActiveTab('narrative')}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'narrative'
                    ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                    : 'text-[#A09D96] hover:text-[#F4F1EA]'
                }`}
              >
                Background & Mindset
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                    : 'text-[#A09D96] hover:text-[#F4F1EA]'
                }`}
              >
                Philosophical Pillars
              </button>
              <button
                onClick={() => setActiveTab('approach')}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'approach'
                    ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                    : 'text-[#A09D96] hover:text-[#F4F1EA]'
                }`}
              >
                Learning Approach
              </button>
            </div>

            {/* Tab 1: Narrative */}
            {activeTab === 'narrative' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 text-[#C2BFB5] font-light leading-relaxed text-base sm:text-lg"
              >
                {aboutBio.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-serif first-letter:text-[#C5A059] first-letter:mr-1">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 p-5 rounded-xl bg-[#12151C]/80 border-l-2 border-[#C5A059] space-y-2">
                  <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                    Working Philosophy
                  </span>
                  <p className="text-sm text-[#E5E2DC] italic">
                    “Code is thought rendered executable; design is intentional structure rendered visible. Meaning emerges where both are aligned with purpose.”
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Philosophy */}
            {activeTab === 'philosophy' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {philosophyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-[#12151C] border border-white/5 hover:border-[#C5A059]/40 transition-all space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center font-mono text-xs">
                        0{index + 1}
                      </div>
                      <h3 className="font-serif text-xl text-[#F4F1EA]">{point.title}</h3>
                    </div>
                    <p className="text-sm text-[#A09D96] pl-10 font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 3: Approach */}
            {activeTab === 'approach' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {approachPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#12151C] border border-white/5 flex items-start gap-4"
                  >
                    <span className="font-mono text-2xl font-bold text-[#C5A059]/40">{pillar.step}</span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#F4F1EA]">{pillar.title}</h4>
                      <p className="text-sm text-[#A09D96] font-light leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
