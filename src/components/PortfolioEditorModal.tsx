import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioData, Project } from '../types';
import { X, Save, RotateCcw, Plus, Trash2, Edit, Check } from 'lucide-react';

interface PortfolioEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (data: PortfolioData) => void;
  onReset: () => void;
}

export const PortfolioEditorModal: React.FC<PortfolioEditorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'contact'>('profile');
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1000);
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: 'New Exploratory Project',
      shortDescription: 'Short description of the new project or research artifact.',
      fullDescription: 'Detailed breakdown of the architecture, goals, and outcomes.',
      category: 'Technology',
      year: new Date().getFullYear().toString(),
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      tags: ['TypeScript', 'AI', 'Design'],
      keyHighlights: ['Designed high-performance client state engine'],
      featured: true,
    };
    setFormData({
      ...formData,
      projects: [newProject, ...formData.projects],
    });
  };

  const handleDeleteProject = (id: string) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter((p) => p.id !== id),
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="editorial-card max-w-4xl w-full my-auto rounded-2xl border border-[#C5A059]/50 bg-[#0D0F14] p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs text-[#C5A059] uppercase block">
                Portfolio Content Customizer
              </span>
              <h2 className="font-serif text-2xl text-[#F4F1EA]">
                Live Editorial Editor
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onReset();
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-[#181C26] border border-white/10 text-xs font-mono text-[#A09D96] hover:text-[#F4F1EA]"
                title="Reset to Initial Defaults"
              >
                <RotateCcw className="w-3.5 h-3.5 inline mr-1" /> Reset
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#181C26] text-[#A09D96] hover:text-[#F4F1EA]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 border-b border-white/10 pb-3">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'profile'
                  ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                  : 'bg-[#141822] text-[#A09D96]'
              }`}
            >
              Profile & Hero
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'projects'
                  ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                  : 'bg-[#141822] text-[#A09D96]'
              }`}
            >
              Selected Projects ({formData.projects.length})
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'contact'
                  ? 'bg-[#C5A059] text-[#0A0C10] font-semibold'
                  : 'bg-[#141822] text-[#A09D96]'
              }`}
            >
              Contact & Links
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <label className="text-[#A09D96]">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#A09D96]">Identity Statement</label>
                <input
                  type="text"
                  value={formData.identityStatement}
                  onChange={(e) => setFormData({ ...formData, identityStatement: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#A09D96]">Short Intro</label>
                <textarea
                  rows={2}
                  value={formData.shortIntro}
                  onChange={(e) => setFormData({ ...formData, shortIntro: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA] resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#A09D96]">About Statement Quote</label>
                <input
                  type="text"
                  value={formData.aboutStatement}
                  onChange={(e) => setFormData({ ...formData, aboutStatement: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA]"
                />
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A09D96]">Manage Portfolio Entries</span>
                <button
                  onClick={handleAddProject}
                  className="px-3 py-1.5 rounded-lg bg-[#C5A059] text-[#0A0C10] font-mono text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Project
                </button>
              </div>

              <div className="space-y-3">
                {formData.projects.map((proj, idx) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-[#12151C] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg text-[#F4F1EA]">
                        {idx + 1}. {proj.title}
                      </span>
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 rounded hover:bg-white/5"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const newProjs = [...formData.projects];
                          newProjs[idx].title = e.target.value;
                          setFormData({ ...formData, projects: newProjs });
                        }}
                        className="p-2 rounded bg-[#0D0F14] border border-white/10 text-[#F4F1EA]"
                        placeholder="Title"
                      />
                      <select
                        value={proj.category}
                        onChange={(e) => {
                          const newProjs = [...formData.projects];
                          newProjs[idx].category = e.target.value as any;
                          setFormData({ ...formData, projects: newProjs });
                        }}
                        className="p-2 rounded bg-[#0D0F14] border border-white/10 text-[#F4F1EA]"
                      >
                        <option value="Technology">Technology</option>
                        <option value="Research">Research</option>
                        <option value="Creative Work">Creative Work</option>
                        <option value="Digital Experience">Digital Experience</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      value={proj.shortDescription}
                      onChange={(e) => {
                        const newProjs = [...formData.projects];
                        newProjs[idx].shortDescription = e.target.value;
                        setFormData({ ...formData, projects: newProjs });
                      }}
                      className="w-full p-2 rounded bg-[#0D0F14] border border-white/10 text-xs font-mono text-[#F4F1EA]"
                      placeholder="Short Description"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <label className="text-[#A09D96]">Contact Email</label>
                <input
                  type="text"
                  value={formData.contact.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, email: e.target.value },
                    })
                  }
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#A09D96]">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.contact.linkedIn}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, linkedIn: e.target.value },
                    })
                  }
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#A09D96]">GitHub URL</label>
                <input
                  type="text"
                  value={formData.contact.github}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, github: e.target.value },
                    })
                  }
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#A09D96]">Instagram URL</label>
                <input
                  type="text"
                  value={formData.contact.instagram}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, instagram: e.target.value },
                    })
                  }
                  className="w-full p-3 rounded-xl bg-[#12151C] border border-white/10 text-[#F4F1EA]"
                />
              </div>
            </div>
          )}

          {/* Footer Save Button */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            {savedNotice ? (
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" /> Changes saved successfully!
              </span>
            ) : (
              <span className="text-xs font-mono text-[#A09D96]">
                All edits save directly to your session.
              </span>
            )}

            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-full bg-[#C5A059] text-[#0A0C10] font-semibold text-xs hover:bg-[#E2BE76] transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
