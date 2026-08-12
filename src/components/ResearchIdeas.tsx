import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ResearchTopic } from '../types';
import { Lightbulb, ArrowUpRight, HelpCircle, BookOpen, Layers } from 'lucide-react';

interface ResearchIdeasProps {
  researchTopics: ResearchTopic[];
  onOpenResearchDetail: (topic: ResearchTopic) => void;
}

export const ResearchIdeas: React.FC<ResearchIdeasProps> = ({
  researchTopics,
  onOpenResearchDetail,
}) => {
  const [hoveredTopicId, setHoveredTopicId] = useState<string | null>(null);

  return (
    <section id="research" className="py-24 px-6 md:px-12 bg-[#0A0C10] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block mb-2">
              04 — Inquiry Hub
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal tracking-tight">
              Ideas I'm Exploring
            </h2>
          </div>
          <p className="text-sm text-[#A09D96] max-w-md font-light leading-relaxed">
            Active questions, research hypotheses, and ongoing conceptual investigations shaping Muhammad Ameen's intellectual trajectory.
          </p>
        </div>

        {/* Interactive List of Ideas */}
        <div className="space-y-4">
          {researchTopics.map((topic, index) => {
            const isHovered = hoveredTopicId === topic.id;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredTopicId(topic.id)}
                onMouseLeave={() => setHoveredTopicId(null)}
                onClick={() => onOpenResearchDetail(topic)}
                className={`p-6 md:p-8 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isHovered
                    ? 'bg-[#141822] border-[#C5A059]/60 shadow-xl translate-x-1'
                    : 'bg-[#10131A] border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  {/* Topic Title & Category */}
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider">
                        0{index + 1} — {topic.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 text-[10px] font-mono text-[#A09D96]">
                        {topic.status}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#F4F1EA] hover:text-[#C5A059] transition-colors">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Summary / Hypothesis Revealed on Hover / Responsive */}
                  <div className="lg:max-w-md flex-1">
                    <p className="text-sm text-[#B0AD9E] font-light leading-relaxed">
                      {topic.shortSummary}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] shrink-0">
                    <span>Explore Thesis</span>
                    <div className="w-8 h-8 rounded-full bg-[#1A1E2A] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/20">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Additional Question Preview Revealed on Hover */}
                {isHovered && topic.keyQuestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-white/10 flex items-start gap-2 text-xs text-[#A09D96] font-mono"
                  >
                    <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Primary Question: “{topic.keyQuestions[0]}”</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
