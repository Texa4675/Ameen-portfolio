/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PortfolioData, Project, ResearchTopic, JournalEntry } from './types';
import {
  getPortfolioData,
  savePortfolioData,
  resetPortfolioData,
} from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AreasOfInterest } from './components/AreasOfInterest';
import { SelectedWorks } from './components/SelectedWorks';
import { ResearchIdeas } from './components/ResearchIdeas';
import { CreativeJournal } from './components/CreativeJournal';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { ProjectModal } from './components/ProjectModal';
import { JournalModal } from './components/JournalModal';
import { ResearchModal } from './components/ResearchModal';
import { CommandPalette } from './components/CommandPalette';
import { PortfolioEditorModal } from './components/PortfolioEditorModal';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(getPortfolioData);

  // Active Modals
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeJournal, setActiveJournal] = useState<JournalEntry | null>(null);
  const [activeResearch, setActiveResearch] = useState<ResearchTopic | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [filterOverride, setFilterOverride] = useState<string | null>(null);

  const handleSaveData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    savePortfolioData(newData);
  };

  const handleResetData = () => {
    const reset = resetPortfolioData();
    setPortfolioData(reset);
  };

  const handleSelectInterestFilter = (interestTitle: string) => {
    setFilterOverride(interestTitle);
    const el = document.getElementById('work');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#E5E2DC] font-sans relative selection:bg-[#C5A059] selection:text-[#0A0C10] bg-noise">
      {/* Sticky Top Header Navigation */}
      <Navbar
        name={portfolioData.name}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenEditor={() => setEditorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          name={portfolioData.name}
          identityStatement={portfolioData.identityStatement}
          shortIntro={portfolioData.shortIntro}
        />

        {/* 2. About Section */}
        <About
          aboutStatement={portfolioData.aboutStatement}
          aboutBio={portfolioData.aboutBio}
          philosophyPoints={portfolioData.philosophyPoints}
        />

        {/* 3. Areas of Interest Section */}
        <AreasOfInterest
          interests={portfolioData.areasOfInterest}
          onSelectInterest={handleSelectInterestFilter}
        />

        {/* 4. Selected Works / Portfolio Section */}
        <SelectedWorks
          projects={portfolioData.projects}
          onOpenProjectDetail={(p) => setActiveProject(p)}
          selectedFilterOverride={filterOverride}
        />

        {/* 5. Ideas I'm Exploring / Research Section */}
        <ResearchIdeas
          researchTopics={portfolioData.researchTopics}
          onOpenResearchDetail={(r) => setActiveResearch(r)}
        />

        {/* 6. Creative Journal / Essays Section */}
        <CreativeJournal
          journalEntries={portfolioData.journalEntries}
          onOpenJournalDetail={(j) => setActiveJournal(j)}
        />

        {/* 7. Skills & Capability Matrix Section */}
        <Skills skillCategories={portfolioData.skillCategories} />

        {/* 8. Journey & Timeline Section */}
        <Timeline timeline={portfolioData.timeline} />

        {/* 9. Contact Section */}
        <Contact contact={portfolioData.contact} />
      </main>

      {/* 10. Footer Section */}
      <Footer name={portfolioData.name} contact={portfolioData.contact} />

      {/* Modal Viewers & Tools */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <JournalModal
        entry={activeJournal}
        onClose={() => setActiveJournal(null)}
      />

      <ResearchModal
        topic={activeResearch}
        onClose={() => setActiveResearch(null)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        data={portfolioData}
        onSelectProject={(p) => setActiveProject(p)}
        onSelectResearch={(r) => setActiveResearch(r)}
        onSelectJournal={(j) => setActiveJournal(j)}
      />

      <PortfolioEditorModal
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}
