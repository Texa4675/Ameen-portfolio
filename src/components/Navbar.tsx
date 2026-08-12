import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Edit3, Compass, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  name: string;
  onOpenCommandPalette: () => void;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  name,
  onOpenCommandPalette,
  onOpenEditor,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'interests', 'work', 'research', 'journal', 'skills', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Interests', href: '#interests', id: 'interests' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Journal', href: '#journal', id: 'journal' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0C10]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-[#C5A059]/40 bg-[#12151B] flex items-center justify-center text-[#C5A059] font-serif font-bold text-lg group-hover:border-[#C5A059] transition-all">
              M
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-medium tracking-wide text-[#F4F1EA] group-hover:text-[#C5A059] transition-colors block leading-none">
                {name}
              </span>
              <span className="font-mono text-[10px] text-[#A09D96] tracking-widest uppercase mt-1 block">
                Portfolio & Research
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#12151C]/70 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative ${
                    isActive
                      ? 'text-[#0A0C10] font-semibold'
                      : 'text-[#A09D96] hover:text-[#F4F1EA] hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#C5A059] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Controls (Command Palette + Edit Mode + Mobile Toggle) */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161A22] border border-white/10 text-xs text-[#A09D96] hover:text-[#F4F1EA] hover:border-[#C5A059]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              title="Search Portfolio (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] bg-black/40 px-1.5 py-0.5 rounded text-[#A09D96] border border-white/5">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenEditor}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C202B] border border-[#C5A059]/30 text-xs font-medium text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0C10] transition-all focus:outline-none"
              title="Edit Portfolio Content Live"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Edit Portfolio</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#161A22] border border-white/10 text-[#E5E2DC] hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#0D0F14]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30'
                      : 'text-[#A09D96] hover:text-[#F4F1EA] hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-[#A09D96]">Muhammad Ameen © 2026</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEditor();
                  }}
                  className="text-xs text-[#C5A059] underline flex items-center gap-1"
                >
                  <Edit3 className="w-3 h-3" /> Edit Content
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
