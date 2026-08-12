import { PortfolioData } from '../types';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  name: "Muhammad Ameen",
  identityStatement: "Exploring ideas. Building things. Creating meaning.",
  shortIntro: "I'm Muhammad Ameen — a curious mind interested in technology, creativity, ideas, and the questions that shape how we understand the world.",
  aboutStatement: "I believe curiosity is the beginning of every meaningful creation.",
  aboutBio: [
    "My work sits at the intersection of computer science, creative expression, and philosophical inquiry. I don't see technology as a standalone domain, but rather as an amplifier for human thought, reasoning, and cultural evolution.",
    "Driven by an innate desire to understand how systems work — whether software architectures, neural models, or social frameworks — I approach every endeavor with rigor, empathy, and artistic discipline.",
    "When I am not designing software systems or conducting exploratory research, I write reflective essays, capture visual compositions through black-and-white photography, and study the foundational questions of ethics and cognition."
  ],
  philosophyPoints: [
    {
      title: "First Principles & Depth",
      desc: "Deconstructing complex phenomena down to fundamental truths before synthesising solution spaces."
    },
    {
      title: "Craft & Intentionality",
      desc: "Rejecting visual and technical noise. Every pixel, line of code, and word must serve a clear function."
    },
    {
      title: "Cross-Disciplinary Synthesis",
      desc: "The most transformative breakthroughs occur at the boundaries between technology, art, and philosophy."
    }
  ],
  areasOfInterest: [
    {
      id: "interest-tech",
      title: "Technology",
      icon: "Cpu",
      description: "Building scalable software systems, intelligent architectures, and intuitive digital interfaces.",
      longDescription: "Explorations into modern Web frameworks, full-stack architectures, distributed state engines, and agentic AI systems that expand human agency.",
      relatedFocus: ["Full-Stack Engineering", "Agentic Workflows", "System Design", "Web Performance"]
    },
    {
      id: "interest-research",
      title: "Research",
      icon: "Atom",
      description: "Investigating the intersection of artificial cognition, human computer interaction, and digital societal ethics.",
      longDescription: "Formulating hypotheses around how algorithmic feedback loops influence human decision making, narrative structure, and societal attention spans.",
      relatedFocus: ["AI Ethics", "Cognitive Ergonomics", "Information Architecture", "Sociotechnical Systems"]
    },
    {
      id: "interest-design",
      title: "Design",
      icon: "Compass",
      description: "Crafting minimalist, high-contrast, editorial user experiences with rigorous spatial hierarchy.",
      longDescription: "Aesthetic systems built on mathematical type scales, restraint over decoration, generous negative space, and dark-mode elegance.",
      relatedFocus: ["UI/UX Systems", "Editorial Typography", "Interactive Motion", "Design Engineering"]
    },
    {
      id: "interest-writing",
      title: "Writing",
      icon: "Feather",
      description: "Articulating technical concepts, cultural commentary, and philosophical essays with precision.",
      longDescription: "Distilling complex technical papers into lucid prose and publishing reflective essays on knowledge systems, digital solitude, and intentional living.",
      relatedFocus: ["Technical Essays", "Philosophical Inquiry", "Creative Prose", "Documentation"]
    },
    {
      id: "interest-photography",
      title: "Photography",
      icon: "Camera",
      description: "Capturing geometric architectures, quiet urban atmospheres, and play of light and shadow.",
      longDescription: "A visual exploration of geometry, texture, and silence. Using monochrome medium-format photography to study spatial balance and light.",
      relatedFocus: ["Monochrome Geometry", "Architectural Light", "Street Atmospheres", "Visual Framing"]
    },
    {
      id: "interest-philosophy",
      title: "Philosophy",
      icon: "BookOpen",
      description: "Contemplating epistemology, ethics, consciousness, and the search for meaning in a technological age.",
      longDescription: "Reading classical Stoic, Phenomenological, and Existential philosophy to ground modern technical decisions in timeless human virtues.",
      relatedFocus: ["Epistemology", "Ethics of AI", "Philosophy of Mind", "Digital Humanism"]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Aura Engine",
      shortDescription: "Interactive neural reasoning visualization and knowledge map generator.",
      fullDescription: "Aura Engine is a full-stack research tool designed to map complex cognitive reasoning pathways into interactive visual node graphs. It processes multi-modal queries, tracks inference trees, and presents context networks using custom graph layout engines.",
      category: "Technology",
      year: "2026",
      image: "/src/assets/images/ameen_project_ai_1786556288084.jpg",
      tags: ["TypeScript", "React", "AI Models", "Canvas API", "Tailwind CSS"],
      keyHighlights: [
        "Real-time node streaming with responsive force-directed graph layouts",
        "Sub-10ms graph rendering for over 1,000 contextual nodes",
        "Exportable markdown research briefs and conceptual mind maps"
      ],
      featured: true,
      demoUrl: "https://example.com/aura-engine",
      githubUrl: "https://github.com/m-ameen/aura-engine"
    },
    {
      id: "project-2",
      title: "Algorithmic Ethics Framework",
      shortDescription: "An open research inquiry on agentic autonomy and human intent preservation.",
      fullDescription: "A comprehensive analytical paper and interactive dataset examining how autonomous AI recommendations shape cognitive bias. Designed as a framework for software architects to evaluate intent alignment in generative interfaces.",
      category: "Research",
      year: "2025",
      image: "/src/assets/images/ameen_hero_portrait_1786556270531.jpg",
      tags: ["Ethics", "AI Research", "Data Visualization", "Sociology", "Papers"],
      keyHighlights: [
        "Comprehensive taxonomy of 14 algorithmic decision loops",
        "Interactive case study simulator comparing recommendation outputs",
        "Published in open digital research forums with 12k+ reads"
      ],
      featured: true,
      demoUrl: "https://example.com/algorithmic-ethics",
      githubUrl: "https://github.com/m-ameen/algorithmic-ethics"
    },
    {
      id: "project-3",
      title: "Atmospheres & Shadows",
      shortDescription: "Generative ambient audio and visual soundscape installation for focused creation.",
      fullDescription: "An interactive digital installation combining micro-tonal synthesizer engines with generative canvas ripples. Designed to evoke focused contemplative states during deep research and writing sessions.",
      category: "Creative Work",
      year: "2025",
      image: "/src/assets/images/ameen_journal_photo_1786556310964.jpg",
      tags: ["Web Audio API", "Generative Art", "Design", "Acoustics"],
      keyHighlights: [
        "Zero-latency browser audio synthesis with dynamic harmonic loops",
        "Minimalist aesthetic with organic particle physics simulation",
        "Used by over 5,000 creators for deep focused work"
      ],
      featured: false,
      demoUrl: "https://example.com/atmospheres"
    },
    {
      id: "project-4",
      title: "Synthetica Workspace",
      shortDescription: "Distraction-free markdown workspace with atomic note linkage and spatial canvas.",
      fullDescription: "Synthetica reimagine personal knowledge management by stripping away unnecessary tools. Features a sleek, high-contrast editor with bi-directional note linking, keyboard-first navigation, and local-first encryption.",
      category: "Digital Experience",
      year: "2024",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "IndexedDB", "Markdown", "Design System"],
      keyHighlights: [
        "Instant local search indexing with zero cloud telemetry dependencies",
        "Custom typography rendering optimized for extended reading comfort",
        "Fluid drag-and-drop spatial card organization"
      ],
      featured: true,
      demoUrl: "https://example.com/synthetica",
      githubUrl: "https://github.com/m-ameen/synthetica"
    }
  ],
  researchTopics: [
    {
      id: "research-1",
      title: "Technology & Society",
      category: "Sociotechnical Systems",
      shortSummary: "How hyper-connectivity alters human intimacy, focus, and communal memory structures.",
      fullDescription: "Investigating the shift from deliberate human communication to high-velocity algorithmic feed consumption. How can digital interfaces be designed to respect attention rather than exploit dopamine feedback loops?",
      keyQuestions: [
        "What happens to reflective deep thought when information latency drops to zero?",
        "Can we build social software that prioritizes depth of connection over engagement metric volume?"
      ],
      currentHypothesis: "Sub-second digital latency creates a bias toward reactive commentary over reflective synthesis.",
      status: "Active Inquiry",
      readingList: ["The Medium is the Massage — Marshall McLuhan", "Amusing Ourselves to Death — Neil Postman"]
    },
    {
      id: "research-2",
      title: "Artificial Intelligence",
      category: "Cognitive Architectures",
      shortSummary: "Evaluating reasoning bounds, agentic decision trees, and human-AI symbiosis.",
      fullDescription: "Exploring how generative models can act as intellectual sparring partners rather than automated replacement for human judgment. Focus on transparent chain-of-thought workflows.",
      keyQuestions: [
        "How do we maintain human agency when delegate reasoning to autonomous models?",
        "What visual representations best communicate AI uncertainty to human operators?"
      ],
      currentHypothesis: "AI interfaces must explicitly expose confidence bounds to prevent over-reliance on hallucinated statements.",
      status: "Active Inquiry",
      readingList: ["Superintelligence — Nick Bostrom", "Gödel, Escher, Bach — Douglas Hofstadter"]
    },
    {
      id: "research-3",
      title: "Human Behaviour",
      category: "Behavioral Psychology",
      shortSummary: "Understanding decision fatigue, habit loops, and spatial environment influences.",
      fullDescription: "Analyzing how digital environments shape human habit formation, emotional regulation, and cognitive load management.",
      keyQuestions: [
        "Why do minimal digital workspaces reduce subjective task anxiety?",
        "How do spatial visual metaphors improve information recall?"
      ],
      currentHypothesis: "Visual noise in software directly correlates with perceived mental fatigue during long sessions.",
      status: "Published Essay",
      readingList: ["Thinking, Fast and Slow — Daniel Kahneman", "The Design of Everyday Things — Don Norman"]
    },
    {
      id: "research-4",
      title: "Philosophy",
      category: "Epistemology & Ethics",
      shortSummary: "Examining ancient stoic and modern phenomenological frameworks in tech.",
      fullDescription: "Applying classical philosophical frameworks to modern software engineering, personal ethics, and product leadership.",
      keyQuestions: [
        "What constitutes a virtuous technological contribution in the 21st century?",
        "How can we cultivate stoic resilience in high-velocity tech environments?"
      ],
      currentHypothesis: "Engineers who study philosophy make more empathetic architectural trade-offs.",
      status: "Conceptual Stage",
      readingList: ["Meditations — Marcus Aurelius", "Being and Time — Martin Heidegger"]
    },
    {
      id: "research-5",
      title: "Culture & Civilization",
      category: "Cultural Evolution",
      shortSummary: "Tracing the evolution of tools, language, architecture, and historical memory.",
      fullDescription: "Studying how civilizations preserve ideas across centuries and how modern digital storage mediums compare in long-term archival permanence.",
      keyQuestions: [
        "Is digital knowledge more fragile than stone and parchment?",
        "How will future archeologists decode 21st century software artifacts?"
      ],
      currentHypothesis: "Without intentional archival standards, our digital era may become a dark age for future historians.",
      status: "Active Inquiry",
      readingList: ["Guns, Germs, and Steel — Jared Diamond", "The Structure of Scientific Revolutions — Thomas Kuhn"]
    },
    {
      id: "research-6",
      title: "Ethics",
      category: "Digital Ethics",
      shortSummary: "Moral responsibility in software deployment, data autonomy, and digital rights.",
      fullDescription: "Framing clear ethical principles for data collection, algorithm transparency, and default user privacy rights in global consumer products.",
      keyQuestions: [
        "Who bears ultimate accountability for non-deterministic model outcomes?",
        "Should software privacy be a fundamental engineering constraint rather than an opt-in setting?"
      ],
      currentHypothesis: "Privacy-by-default is the single most effective barrier against surveillance exploitation.",
      status: "Published Essay",
      readingList: ["Weapons of Math Destruction — Cathy O'Neil", "The Age of Surveillance Capitalism — Shoshana Zuboff"]
    }
  ],
  journalEntries: [
    {
      id: "journal-1",
      title: "Notes on Digital Solitude & Meaning",
      date: "August 2026",
      category: "Essays",
      readTime: "6 min read",
      excerpt: "In an era where every second of silence is filled with synthetic media, cultivating intentional solitude is no longer a luxury — it is a requirement for original thought.",
      content: `In our hyper-connected ecosystem, solitude is often misconstrued as isolation. Yet, true solitude is not the absence of people; it is the presence of one's own unobstructed mind.

When Marshall McLuhan observed that 'we become what we behold', he could not have anticipated the algorithmic precision with which modern platforms curate our consciousness. Every scroll, notification, and automated suggestion introduces external noise into our cognitive baseline.

To create anything of lasting value — whether software, literature, or scientific insight — requires extended stretches of uninterrupted contemplation. When we protect our cognitive quiet, we allow ideas to mature, cross-pollinate, and gain genuine depth.

Here are three principles I practice to preserve digital solitude:

1. **Selective Latency**: Intentionally introducing delay into daily communication to allow thoughtful response over immediate reaction.
2. **Minimalist Environments**: Removing UI clutter and unnecessary notification triggers from primary work machines.
3. **Daily Analogue Intervals**: Dedicating at least two hours daily to physical books, handwritten notebooks, or silent walks.`,
      image: "/src/assets/images/ameen_journal_photo_1786556310964.jpg",
      tags: ["Solitude", "Focus", "Philosophy", "Digital Hygiene"]
    },
    {
      id: "journal-2",
      title: "Geometry of Light: Architectural Photography Study",
      date: "June 2026",
      category: "Photography",
      readTime: "4 min look",
      excerpt: "An exploration of brutalist concrete forms, stark shadow plays, and golden hour reflections captured across urban landscapes.",
      content: `Architecture is frozen music, and light is the conductor. In this photo journal, I document the interplay between brutalist concrete structures and high-contrast natural light.

When photographing architecture in monochrome, texture and geometric rhythm take precedence over color hue. A sharp angle cuts through the frame, dividing light from darkness in a stark, mathematical declaration.

Key observations from this visual series:
- **Shadow as Mass**: Shadows are not mere absences of light; in photography, they function as solid geometric weights.
- **Rhythm in Repetition**: Pillars, windows, and steps create rhythmic cadences similar to musical tempo.
- **Scale and Silence**: Including negative sky space emphasizes human scale within massive built environments.`,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      tags: ["Monochrome", "Architecture", "Photography", "Visual Language"]
    },
    {
      id: "journal-3",
      title: "Building Software with First Principles",
      date: "March 2026",
      category: "Field Notes",
      readTime: "8 min read",
      excerpt: "Why modern web development often defaults to bloated dependencies, and how returning to core primitives restores elegance and speed.",
      content: `It is easy to stack abstractions until a simple application requires hundreds of megabytes of third-party code. But true engineering mastery lies in knowing what to omit.

When we build from first principles, we ask:
- What is the absolute minimum state required?
- How does data flow from input to presentation?
- What performance guarantees are non-negotiable?

By removing unnecessary middle layers, we produce software that boots in milliseconds, runs smoothly on low-power devices, and remains maintainable across years rather than months.`,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
      tags: ["Software Engineering", "Performance", "Web Architecture"]
    },
    {
      id: "journal-4",
      title: "The Epistemology of Artificial Intelligence",
      date: "December 2025",
      category: "Reflections",
      readTime: "7 min read",
      excerpt: "What does it mean for a machine to 'know' something? Examining probabilistic pattern matching versus genuine human comprehension.",
      content: `As language models grow more articulate, we risk confusing linguistic fluency with cognitive understanding.

A model predicts the next token in a sequence based on statistical probabilities distilled from billions of web documents. It has no subjective experience of pain, triumph, or mortal time.

Understanding this boundary is crucial. Generative tools excel at synthesis, pattern retrieval, and structural formatting. However, the spark of moral judgment, creative vision, and existential empathy remains distinctly human.`,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      tags: ["AI Ethics", "Epistemology", "Philosophy of Mind"]
    }
  ],
  skillCategories: [
    {
      categoryName: "Technology",
      skills: [
        { name: "Web Development", description: "Full-stack React, TypeScript, Vite, Node.js/Express, SSR & Client SPAs", level: "Expert" },
        { name: "Programming", description: "Clean architecture, TypeScript, Python, C++, REST/GraphQL APIs", level: "Expert" },
        { name: "AI & Machine Learning", description: "@google/genai SDK, prompt engineering, agentic workflows, embeddings", level: "Advanced" },
        { name: "Databases & Storage", description: "PostgreSQL, Firestore, IndexedDB, vector stores, distributed caches", level: "Advanced" }
      ],
      toolsAndFrameworks: ["React 19", "TypeScript", "Tailwind CSS v4", "Express", "Vite", "Node.js", "Git", "Docker"]
    },
    {
      categoryName: "Creative",
      skills: [
        { name: "Graphic Design", description: "Editorial visual systems, typography scaling, brand identity, spatial grids", level: "Expert" },
        { name: "Photography", description: "Monochrome architectural compositions, street geometry, light editing", level: "Advanced" },
        { name: "Video Editing", description: "Cinematic color grading, motion graphics in Motion/React, narrative pacing", level: "Core Competency" },
        { name: "Visual Storytelling", description: "Infographics, UI interaction motion, presentation layout design", level: "Expert" }
      ],
      toolsAndFrameworks: ["Figma", "Lightroom", "Motion/React", "Canvas API", "DaVinci Resolve", "Font Systems"]
    },
    {
      categoryName: "Intellectual",
      skills: [
        { name: "Research", description: "Literature review, qualitative synthesis, hypothesis testing, citation rigor", level: "Expert" },
        { name: "Writing", description: "Editorial technical essays, research papers, documentation, essay prose", level: "Expert" },
        { name: "Critical Thinking", description: "First-principles analysis, logic verification, cognitive bias auditing", level: "Expert" },
        { name: "Communication", description: "Public speaking, technical presentation, cross-disciplinary moderation", level: "Advanced" }
      ],
      toolsAndFrameworks: ["Markdown", "Zotero", "Obsidian/Synthetica", "LaTeX", "Logic Trees"]
    }
  ],
  timeline: [
    {
      id: "time-2024",
      year: "2024",
      title: "Began Exploring Technology and Creative Work",
      subtitle: "Foundational Foundations & Core Experiments",
      description: "Initiated deep explorations into software engineering, web technologies, and visual media. Built initial web applications, published introductory technical articles, and established an ongoing photography journal.",
      highlights: [
        "Mastered modern full-stack web architectures with TypeScript and React",
        "Built first open-source spatial markdown editor (Synthetica)",
        "Curated a 50+ image monochrome architectural photography series"
      ],
      iconType: "tech"
    },
    {
      id: "time-2025",
      year: "2025",
      title: "Developed Projects and Expanded Research Interests",
      subtitle: "Interdisciplinary Synthesis & AI Ethics",
      description: "Shifted focus toward sociotechnical research, artificial cognition, and generative art. Published research frameworks on algorithmic ethics while building interactive Web Audio and visual installations.",
      highlights: [
        "Authored 'Algorithmic Ethics Framework' paper on human agency preservation",
        "Created 'Atmospheres' ambient soundscape installation used by thousands of creators",
        "Collaborated with cross-disciplinary student researchers on cognitive ergonomics"
      ],
      iconType: "research"
    },
    {
      id: "time-2026",
      year: "2026",
      title: "Building, Researching, and Exploring New Ideas",
      subtitle: "Agentic Systems & Intellectual Depth",
      description: "Currently engineering advanced AI reasoning graph engines (Aura Engine), writing long-form essays on digital solitude, and designing high-contrast editorial portfolio interfaces.",
      highlights: [
        "Launched Aura Engine — neural reasoning node mapping research tool",
        "Pioneering editorial design standards for minimalist intellectual web apps",
        "Actively seeking collaborative research inquiries and technical ventures"
      ],
      iconType: "creative"
    }
  ],
  contact: {
    email: "m.ameen@example.com",
    linkedIn: "https://linkedin.com/in/muhammad-ameen-placeholder",
    github: "https://github.com/muhammad-ameen-placeholder",
    instagram: "https://instagram.com/muhammad_ameen_visuals",
    location: "Global / Remote",
    availability: "Open for Research Collaborations & Technical Projects"
  }
};

const STORAGE_KEY = "muhammad_ameen_portfolio_data_v1";

export function getPortfolioData(): PortfolioData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...INITIAL_PORTFOLIO_DATA, ...parsed };
    }
  } catch (err) {
    console.error("Failed to load portfolio data from localStorage", err);
  }
  return INITIAL_PORTFOLIO_DATA;
}

export function savePortfolioData(data: PortfolioData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save portfolio data to localStorage", err);
  }
}

export function resetPortfolioData(): PortfolioData {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("Failed to reset portfolio data", err);
  }
  return INITIAL_PORTFOLIO_DATA;
}
