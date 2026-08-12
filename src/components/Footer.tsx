import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { ContactInfo } from '../types';

interface FooterProps {
  name: string;
  contact: ContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ name, contact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090C] border-t border-white/10 py-16 px-6 md:px-12 text-[#A09D96] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="space-y-2">
            <h3 className="font-serif text-3xl md:text-4xl text-[#F4F1EA] font-normal">
              {name}
            </h3>
            <p className="font-serif italic text-lg text-[#C5A059] gold-accent-text">
              “Curious by nature. Intentional by design.”
            </p>
          </div>

          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-[#12151C] border border-white/10 hover:border-[#C5A059] text-xs font-mono text-[#E5E2DC] hover:text-[#C5A059] transition-all flex items-center gap-2 group focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              GitHub
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-[#C5A059] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
