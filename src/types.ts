export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Technology' | 'Research' | 'Creative Work' | 'Digital Experience';
  year: string;
  image: string;
  tags: string[];
  keyHighlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ResearchTopic {
  id: string;
  title: string;
  category: string;
  shortSummary: string;
  fullDescription: string;
  keyQuestions: string[];
  currentHypothesis: string;
  status: 'Active Inquiry' | 'Published Essay' | 'Conceptual Stage';
  readingList: string[];
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  category: 'Essays' | 'Field Notes' | 'Photography' | 'Reflections';
  readTime: string;
  excerpt: string;
  content: string;
  image?: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  description: string;
  level: 'Expert' | 'Advanced' | 'Core Competency';
}

export interface SkillCategory {
  categoryName: 'Technology' | 'Creative' | 'Intellectual';
  skills: SkillItem[];
  toolsAndFrameworks: string[];
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconType: 'tech' | 'research' | 'creative';
}

export interface AreaOfInterest {
  id: string;
  title: 'Technology' | 'Research' | 'Design' | 'Writing' | 'Photography' | 'Philosophy';
  icon: string;
  description: string;
  longDescription: string;
  relatedFocus: string[];
}

export interface ContactInfo {
  email: string;
  linkedIn: string;
  github: string;
  instagram: string;
  location: string;
  availability: string;
}

export interface PortfolioData {
  name: string;
  identityStatement: string;
  shortIntro: string;
  aboutStatement: string;
  aboutBio: string[];
  philosophyPoints: { title: string; desc: string }[];
  areasOfInterest: AreaOfInterest[];
  projects: Project[];
  researchTopics: ResearchTopic[];
  journalEntries: JournalEntry[];
  skillCategories: SkillCategory[];
  timeline: TimelineEntry[];
  contact: ContactInfo;
}
