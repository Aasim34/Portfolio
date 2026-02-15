import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { FaBook, FaGithub, FaRobot, FaShieldAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Dynamically import all screenshot images from the Projects folder
const screenshotModules = import.meta.glob<string>(
  '/src/assets/Projects/**/*.{jpg,jpeg,png}',
  { eager: true, import: 'default' }
);

// Map screenshot paths to project names
const getProjectScreenshots = (projectName: string): string[] => {
  const screenshots: string[] = [];
  Object.entries(screenshotModules).forEach(([path, module]) => {
    if (path.includes(projectName)) {
      screenshots.push(module);
    }
  });
  return screenshots.sort();
};

export function Projects() {
  type Project = {
    icon: typeof FaRobot;
    title: string;
    description: string;
    techStack: string[];
    impact: string[];
    gradient: string;
    image: string;
    screenshots: string[];
    github: string;
    demo: string;
    linkedinPost: string;
    badge: string;
    metric: string;
    overview?: string;
    features?: string[];
    requirements?: string[];
    quickStart?: string[];
    apiEndpoints?: string[];
    output?: string[];
    notes?: string[];
  };

  const projects: Project[] = [
    {
      icon: FaRobot,
      title: 'AI Website Builder',
      description: 'Auto-generates full-stack websites from text prompts using AI',
      techStack: ['Python', 'FastAPI', 'React', 'TailwindCSS', 'OpenAI API'],
      impact: [
        'Reduced setup time by 80%',
        'Generated 500+ custom websites',
        'Automated deployment pipeline',
      ],
      gradient: 'from-[#7C3AED] to-[#8B5CF6]',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
      screenshots: getProjectScreenshots('AI Website Builder'),
      github: 'https://github.com/Aasim34/MINI_AI.git',
      demo: '#',
      linkedinPost: '',
      badge: 'GenAI • Full-stack automation',
      metric: '80% faster launch velocity',
      overview:
        'AI-driven full-stack website generator with a Next.js UI and a Python-based generator engine. Provide an app idea, stream generation progress, and receive a complete project scaffold.',
      features: [
        'Idea-to-app generation using OpenAI',
        'Real-time progress via Server-Sent Events (SSE)',
        'Downloadable project output (ZIP)',
        'Example generated projects included in Projects/',
      ],
      requirements: ['Node.js 18+', 'Python 3.10+', 'OpenAI API key'],
      output: ['Projects/<project-slug>/'],
      notes: [
        'Generator targets gpt-4o-mini by default',
        'Keep API keys out of client code for public deployments',
      ],
    },
    {
      icon: FaRobot,
      title: 'Nexa AI Assistant',
      description: 'Browser extension that brings multi-model AI assistance to any page with glassy UI and hotkeys.',
      techStack: ['JavaScript', 'Chrome APIs', 'OpenAI', 'Claude', 'Gemini', 'REST APIs'],
      impact: [
        'Smartly detects MCQs, code, videos, and images for tailored answers',
        'Supports OpenAI, Claude, and Gemini with context-aware responses',
        'Floating UI with history, exports, and Ctrl+Shift+Space quick launch',
      ],
      gradient: 'from-[#22D3EE] to-[#8B5CF6]',
      image: '',
      screenshots: getProjectScreenshots('Nexa AI Assistant'),
      github: 'https://github.com/Aasim34/Nexa_ai.git',
      demo: 'https://lnkd.in/e255mJQz',
      linkedinPost: '',
      badge: 'Browser extension • Multi-AI',
      metric: 'Ctrl+Shift+Space quick invoke',
      overview:
        'Premium AI assistant browser extension with glassmorphism UI, intelligent content analysis, and multi-provider AI support. Provides instant analysis of web content with smooth, professional interactions.',
      features: [
        'Auto-detects MCQs, code problems, PDFs, images, and general content',
        'Instant MCQ answers and code solutions with structured formatting',
        'Glassmorphism UI with smooth animations and responsive layouts',
        'Floating action button, tabbed interface, and keyboard shortcut support',
        'Conversation history with markdown-style formatting and syntax highlighting',
        'Supports OpenAI, Gemini, and OpenRouter with easy provider switching',
      ],
      requirements: ['Chrome or Edge (Manifest V3)', 'Firefox add-on build', 'API key for AI provider'],
      notes: [
        'Manifest V3 compliant with modular, event-driven architecture',
        'Uses secure local storage for API keys and HTTPS-only API calls',
      ],
    },
    {
      icon: FaShieldAlt,
      title: 'KAI • AI Mental Wellness Companion',
      description: 'Privacy-first, multi-modal AI web app delivering 24/7 emotional support for university students.',
      techStack: ['Multi-modal AI', 'On-device processing', 'Encryption', 'React', 'Node.js', 'WebRTC'],
      impact: [
        'Analyzes text, facial cues, and voice tone to spot early distress',
        'Processes sensitive signals on-device with end-to-end encryption',
        'Gamified, proactive well-being journeys instead of crisis-only flows',
      ],
      gradient: 'from-[#10B981] to-[#3B82F6]',
      image: '',
      screenshots: getProjectScreenshots('KAI'),
      github: 'https://github.com/Aasim34/KAI_SIH.git',
      demo: '#',
      linkedinPost: '',
      badge: 'Mental wellness • On-device',
      metric: '24/7 support + early signals',
      overview:
        'Student-focused wellness companion with empathetic AI support, voice and video analysis, and a glassmorphism UI. Built with Next.js and Genkit for personalized recommendations and check-ins.',
      features: [
        'Mood-aware AI chat with actionable wellness recommendations',
        'Voice check-in with emotional analysis and TTS response',
        'Video check-in with facial emotion analysis and confidence scores',
        'Personalized wellness activities and dashboard insights',
        'Firebase Auth and Firestore integration for user state',
      ],
      requirements: ['Node.js 18+', 'Google AI API key', 'Firebase project config'],
      notes: [
        'Video analysis key should be stored in env variables for production',
        'Wellness support only; not a medical or crisis service',
      ],
    },
    {
      icon: FaBook,
      title: 'Arthos • UPI Spend Analyzer',
      description: 'Full-stack app that parses UPI/SMS messages into clear spend insights with charts and categories.',
      techStack: ['FastAPI', 'SQLModel', 'SQLite', 'React', 'TypeScript', 'TailwindCSS', 'React Query', 'Axios'],
      impact: [
        'Auto-categorizes UPI transactions across banks and apps',
        'Shows totals, counts, top categories, and clean visual charts',
        'Deployed end-to-end in under 24 hours with tests to stay stable',
      ],
      gradient: 'from-[#0EA5E9] to-[#6366F1]',
      image: '',
      screenshots: getProjectScreenshots('Arthos'),
      github: 'https://github.com/Savyasachi-2005/Arthos.git',
      demo: '#',
      linkedinPost: '',
      badge: 'Fintech • Analytics',
      metric: 'Built & shipped in 24h',
      overview:
        'Full-stack analytics platform for parsing UPI transaction SMS messages, categorizing spend, and visualizing insights with charts and dashboards.',
      features: [
        'UPI SMS parsing across banks and payment apps with regex patterns',
        'Auto-categorization (food, shopping, transport, bills, and more)',
        'Spend analytics: totals, counts, and top categories',
        'Interactive charts and detailed transaction history table',
        'SQLite persistence with API endpoints for analysis and retrieval',
      ],
      requirements: ['Python 3.11+', 'Node.js 18+', 'npm 9+'],
      notes: [
        'Backend: FastAPI + SQLModel + SQLite with tested parser + API',
        'Frontend: React + TypeScript + TailwindCSS with React Query + Axios',
      ],
    },
    {
      icon: FaBook,
      title: 'Smart PDF Search Engine',
      description: 'AI-powered document retrieval that blends TF-IDF, BM25, and semantic/hybrid search with a clean, real-time UI.',
      techStack: ['Python', 'FAISS', 'Transformers', 'Flask', 'MongoDB', 'BM25', 'TF-IDF'],
      impact: [
        'Uploads PDF/DOC/TXT, indexes folders, and serves context-aware Q&A',
        'Hybrid TF-IDF + BM25 + embeddings for sharper ranking',
        'Built for coursework IR challenges with plans for query expansion and relevance feedback',
      ],
      gradient: 'from-[#8B5CF6] to-[#A855F7]',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&h=800&fit=crop',
      screenshots: getProjectScreenshots('Smart PDF Search Engine'),
      github: 'https://github.com/Aasim34/IR_OPEN.git',
      demo: '#',
      linkedinPost: '',
      badge: 'RAG • Semantic search',
      metric: 'Ctrl+F, but truly smart',
      overview:
        'AI-powered information retrieval system with conversational Q&A, hybrid search, and a modern Next.js UI for document discovery.',
      features: [
        'Hybrid search blending TF-IDF, BM25, and semantic search for optimal relevance',
        'Conversational AI chat with multi-document synthesis and citations',
        'Drag-and-drop uploads with auto-indexing and progress tracking',
        'Smart filters for files and folders, metadata display, and previews',
        '3D particle background and holographic UI effects for premium UX',
      ],
      requirements: ['Python 3.11+', 'Node.js 18+', 'npm 9+'],
      notes: [
        'Flask backend with caching, query expansion, and configurable search weights',
        'Next.js frontend with Three.js effects, Framer Motion, and glassmorphism UI',
      ],
    },
    {
      icon: FaShieldAlt,
      title: 'Deepfake Detection System',
      description: 'RealEye combines ELA/FFT signal checks with Google Cloud Vision to flag AI-generated images with high confidence.',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'CNNs', 'Cloud Vision'],
      impact: [
        'Multi-layer analysis: ELA, FFT, and metadata for compression anomalies',
        'Cloud Vision scoring for semantic + artifact cues (e.g., missing sensor noise)',
        'Flagged AI landscapes at 95% confidence; surfaced edge cases for future tuning',
      ],
      gradient: 'from-[#A855F7] to-[#C084FC]',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop',
      screenshots: getProjectScreenshots('Deepfake Detection System'),
      github: 'https://github.com/Aasim34/Real-eye.git',
      demo: '#',
      linkedinPost: '',
      badge: 'Safety • Vision',
      metric: '95% AI-flag confidence',
      overview:
        'Advanced digital forensics tool with multi-layered AI detection using Error Level Analysis (ELA), FFT frequency analysis, and Google Gemini for expert-level interpretation.',
      features: [
        'Error Level Analysis (ELA) detects JPEG compression inconsistencies revealing manipulated regions',
        'FFT frequency analysis identifies unnatural patterns in the frequency domain',
        'Noise pattern detection analyzes sensor noise to detect artificial generation',
        'Google Gemini integration for AI-powered multimodal analysis with confidence scoring',
        'Drag-and-drop interface with real-time image preview',
      ],
      requirements: ['Node.js 18+', 'npm 9+', 'Modern browser', 'Google Gemini API key'],
      notes: [
        'Client-side forensics (ELA, FFT) run privately in the browser',
        'Only images sent to Gemini API for AI interpretation, never stored',
      ],
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    if (!activeProject) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeProject]);

  // Show projects when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show projects after scrolling 300px
      if (scrollPosition > 300 && !showProjects) {
        setShowProjects(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showProjects]);

  useEffect(() => {
    if (!activeProject && !expandedImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (expandedImage) {
          setExpandedImage(null);
        } else {
          setActiveProject(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, expandedImage]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05050A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.16),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.14),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0)_55%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_100%,140px_140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#C4B5FD] shadow-[0_10px_45px_rgba(124,58,237,0.25)]">
              <Sparkles className="h-3.5 w-3.5" />
              Selected Builds
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Some of My <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#C084FC] bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-gray-300">
              AI-first products, resilient pipelines, and polished user experiences. Each build combines reliable engineering with expressive interfaces that feel premium and purposeful.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">AI</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">RAG • ML</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Cloud vision</span>
            </div>
            {/* CTA buttons removed per request */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/6 via-white/2 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0E0E15] via-[#0C0C13] to-[#0A0A11] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.18em] text-gray-400">Practitioner snapshots</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#E9D5FF]">2025-2026</div>
              </div>
              <div className="space-y-4 text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_0_6px_rgba(139,92,246,0.18)]" />
                  Built AI-first experiences with measurable lifts in activation and throughput.
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#C084FC] shadow-[0_0_0_6px_rgba(192,132,252,0.18)]" />
                  Productionized RAG, CV, and detection models with clean APIs and observability.
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_0_6px_rgba(124,58,237,0.2)]" />
                  Shipped design systems so the UI feels intentional—not default—across surfaces.
                </div>
              </div>
              {/* Metrics removed per request */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Fades out when projects appear */}
        {!showProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-3 py-8"
          >
            <p className="text-sm text-gray-400">Scroll to explore projects</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-5 rounded-full border-2 border-[#8B5CF6]/40 flex items-start justify-center p-1"
            >
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Projects Grid - Shows after scrolling */}
        {showProjects && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E14]/90 shadow-[0_16px_60px_rgba(0,0,0,0.55)] backdrop-blur-md"
              >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`} />
                <div className="absolute inset-0 shadow-[0_0_55px_rgba(139,92,246,0.28)]" />
              </div>

              <div className="relative flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white">
                    <project.icon className="h-4 w-4" />
                    {project.badge}
                  </div>
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/90">
                    {project.metric}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#E9D5FF]">{project.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[12px] text-[#EDE9FE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-gray-300">
                  {project.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-white/10"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#7C3AED] hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Details
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
          </motion.div>
        )}

        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            <button
              type="button"
              aria-label="Close details"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0E0E14] shadow-[0_25px_80px_rgba(0,0,0,0.65)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C4B5FD]">Project details</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">{activeProject.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{activeProject.badge}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-[#C084FC]"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-6 px-6 py-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5">
                  <p className="text-sm text-gray-300 leading-relaxed">{activeProject.description}</p>

                  {activeProject.overview && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                      {activeProject.overview}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[12px] text-[#EDE9FE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {activeProject.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {activeProject.features && activeProject.features.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400">Features</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {activeProject.features.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProject.requirements && activeProject.requirements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400">Requirements</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.requirements.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[12px] text-[#EDE9FE]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProject.quickStart && activeProject.quickStart.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400">Quick start</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {activeProject.quickStart.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProject.apiEndpoints && activeProject.apiEndpoints.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400">API</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {activeProject.apiEndpoints.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProject.output && activeProject.output.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400">Output</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.output.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[12px] text-[#EDE9FE]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProject.notes && activeProject.notes.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400">Notes</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {activeProject.notes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-white/10"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#7C3AED] hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live / Demo
                    </a>
                    {activeProject.linkedinPost ? (
                      <a
                        href={activeProject.linkedinPost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#38BDF8] hover:bg-white/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                        LinkedIn post
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                        LinkedIn post coming soon
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">Screenshots</h4>
                    <span className="text-xs text-gray-500">{activeProject.screenshots.length || 0} images</span>
                  </div>
                  {activeProject.screenshots.length > 0 ? (
                    <div className="grid gap-3">
                      {activeProject.screenshots.map((shot) => (
                        <button
                          key={shot}
                          onClick={() => setExpandedImage(shot)}
                          type="button"
                          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer transition hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/20"
                        >
                          <img src={shot} alt={`${activeProject.title} screenshot`} className="h-48 w-full object-cover hover:opacity-75 transition" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-10 text-center text-sm text-gray-400">
                      Screenshots coming soon. Add image URLs to this project to show them here.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {expandedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedImage}
                alt="Expanded screenshot"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                type="button"
                aria-label="Close image viewer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p className="text-center text-gray-400 text-sm mt-4">Click outside or press Escape to close</p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}