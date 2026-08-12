import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  name: string;
  identityStatement: string;
  shortIntro: string;
}

export const Hero: React.FC<HeroProps> = ({
  name,
  identityStatement,
  shortIntro,
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-[#0A0C10]"
    >
      {/* Background Subtle Gradient Spheres & Grid Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-900/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        {/* Subtle Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151C] border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono tracking-widest uppercase"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Personal Portfolio & Research Hub</span>
        </motion.div>

        {/* Large Name Display */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight text-[#F4F1EA] leading-[0.95]">
            {name}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#C5A059] max-w-3xl mx-auto leading-relaxed gold-accent-text">
            “{identityStatement}”
          </p>
        </motion.div>

        {/* Short Introduction Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-[#B0AD9E] max-w-2xl mx-auto font-light leading-relaxed pt-2"
        >
          {shortIntro}
        </motion.p>

        {/* Primary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => scrollToSection('work')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A059] text-[#0A0C10] font-semibold text-sm tracking-wide hover:bg-[#E2BE76] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/10"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#12151C] border border-white/15 text-[#E5E2DC] font-medium text-sm tracking-wide hover:border-[#C5A059] hover:text-[#C5A059] hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
          </button>
        </motion.div>

        {/* Quick Highlights / Key Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left"
        >
          <div className="p-3.5 rounded-xl bg-[#10131A]/60 border border-white/5">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block">Domain</span>
            <span className="text-xs text-[#E5E2DC] font-medium mt-0.5 block">Tech & AI Systems</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#10131A]/60 border border-white/5">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block">Inquiry</span>
            <span className="text-xs text-[#E5E2DC] font-medium mt-0.5 block">Societal Research</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#10131A]/60 border border-white/5">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block">Craft</span>
            <span className="text-xs text-[#E5E2DC] font-medium mt-0.5 block">Editorial Design</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#10131A]/60 border border-white/5">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block">Medium</span>
            <span className="text-xs text-[#E5E2DC] font-medium mt-0.5 block">Essays & Photography</span>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-12 flex flex-col items-center gap-2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="group text-[#A09D96] hover:text-[#C5A059] transition-colors flex flex-col items-center gap-2 focus:outline-none"
            aria-label="Scroll to About Section"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">Scroll To Discover</span>
            <div className="w-6 h-10 rounded-full border border-white/20 group-hover:border-[#C5A059] flex items-start justify-center p-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
