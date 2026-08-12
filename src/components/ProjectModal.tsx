import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ExternalLink, Github, Calendar, Tag, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="editorial-card max-w-4xl w-full my-auto rounded-2xl border border-[#C5A059]/40 bg-[#0D0F14] overflow-hidden relative shadow-2xl space-y-8 p-6 md:p-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 font-mono text-xs">
                {project.category}
              </span>
              <span className="font-mono text-xs text-[#A09D96]">
                Year: {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#161A22] text-[#A09D96] hover:text-[#F4F1EA] hover:bg-white/10 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Title & Short Tagline */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-serif text-[#F4F1EA] font-normal leading-tight">
              {project.title}
            </h2>
            <p className="text-lg text-[#C5A059] font-serif italic">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Image Banner */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden border border-white/10 bg-[#12151C]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Project Overview */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[#C5A059] uppercase tracking-wider">
              Project Overview & Architecture
            </h3>
            <p className="text-base text-[#C2BFB5] font-light leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.keyHighlights && project.keyHighlights.length > 0 && (
            <div className="space-y-3 p-6 rounded-xl bg-[#12151C] border border-white/5">
              <h3 className="font-mono text-xs text-[#C5A059] uppercase tracking-wider">
                Key Technical & Conceptual Highlights
              </h3>
              <ul className="space-y-2">
                {project.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#E5E2DC] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Tag List */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-[#C5A059] uppercase tracking-wider">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#161A24] border border-white/10 text-xs font-mono text-[#E5E2DC]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#C5A059] text-[#0A0C10] font-semibold text-xs hover:bg-[#E2BE76] transition-all flex items-center gap-2"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#181C26] border border-white/10 text-[#E5E2DC] hover:text-[#C5A059] font-medium text-xs transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#12151C] text-[#A09D96] hover:text-[#F4F1EA] text-xs font-mono"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
