import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ContactInfo } from '../types';
import { Mail, Linkedin, Github, Instagram, Send, Copy, Check, Sparkles, MapPin, Globe } from 'lucide-react';

interface ContactProps {
  contact: ContactInfo;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Research Inquiry',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const subjectOptions = [
    'Research Inquiry',
    'Technical Project',
    'Creative Collaboration',
    'General Conversation',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0A0C10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Statement Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-[#C5A059] tracking-widest uppercase block">
            08 — Initiate Connection
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#F4F1EA] font-normal tracking-tight">
            “Have an idea worth exploring?”
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-[#C5A059] gold-accent-text">
            Let's start a conversation.
          </p>
          <p className="text-sm text-[#A09D96] font-light max-w-xl mx-auto pt-2">
            Whether discussing sociotechnical research, building sophisticated digital experiences, or exploring philosophical questions — my inbox is always open.
          </p>
        </div>

        {/* Form + Social Links Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="editorial-card p-8 rounded-2xl border border-white/10 space-y-6">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                Direct Contact
              </span>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-[#141822] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-[#1D2230] text-[#C5A059]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="font-mono text-[10px] text-[#A09D96] uppercase block">Primary Email</span>
                    <span className="font-mono text-sm text-[#F4F1EA] truncate block">{contact.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg bg-[#1E2330] border border-white/10 text-xs font-mono text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0C10] transition-all shrink-0 flex items-center gap-1.5"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Status */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs text-[#A09D96]">
                  <Globe className="w-4 h-4 text-[#C5A059]" />
                  <span>Location: <strong className="text-[#E5E2DC] font-normal">{contact.location}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#A09D96]">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Status: <strong className="text-[#E5E2DC] font-normal">{contact.availability}</strong></span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="editorial-card p-8 rounded-2xl border border-white/10 space-y-4">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                Digital Presence
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141822] border border-white/5 hover:border-[#C5A059]/40 hover:bg-[#1A1F2D] text-[#E5E2DC] hover:text-[#C5A059] transition-all flex items-center gap-2.5 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4 text-[#C5A059]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141822] border border-white/5 hover:border-[#C5A059]/40 hover:bg-[#1A1F2D] text-[#E5E2DC] hover:text-[#C5A059] transition-all flex items-center gap-2.5 text-xs font-mono"
                >
                  <Github className="w-4 h-4 text-[#C5A059]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141822] border border-white/5 hover:border-[#C5A059]/40 hover:bg-[#1A1F2D] text-[#E5E2DC] hover:text-[#C5A059] transition-all flex items-center gap-2.5 text-xs font-mono"
                >
                  <Instagram className="w-4 h-4 text-[#C5A059]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="editorial-card p-8 md:p-10 rounded-2xl border border-white/10 space-y-6 relative">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block">
                Send A Message
              </span>

              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#F4F1EA]">Message Received</h3>
                  <p className="text-sm text-[#A09D96] max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Muhammad Ameen will respond to your message shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Research Inquiry', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#181C26] border border-white/10 text-xs text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0C10] font-mono transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Subject Tag Selector */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#A09D96] uppercase block">
                      Topic / Intent
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {subjectOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, subject: opt })}
                          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                            formData.subject === opt
                              ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                              : 'bg-[#141822] border border-white/10 text-[#A09D96] hover:text-[#F4F1EA]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A09D96] uppercase block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA] text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A09D96] uppercase block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA] text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#A09D96] uppercase block">
                      Message / Proposal *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts, ideas, or questions here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA] text-sm focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#C5A059] text-[#0A0C10] font-semibold text-sm tracking-wide hover:bg-[#E2BE76] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/10"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
