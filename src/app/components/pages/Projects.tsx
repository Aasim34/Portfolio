import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { FaBook, FaGithub, FaRobot, FaShieldAlt } from 'react-icons/fa';

export function Projects() {
  const projects = [
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
      github: '#',
      demo: '#',
      badge: 'GenAI • Full-stack automation',
      metric: '80% faster launch velocity',
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
      github: 'https://lnkd.in/eAhJr8Ke',
      demo: 'https://lnkd.in/e255mJQz',
      badge: 'Browser extension • Multi-AI',
      metric: 'Ctrl+Shift+Space quick invoke',
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
      github: '#',
      demo: '#',
      badge: 'Mental wellness • On-device',
      metric: '24/7 support + early signals',
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
      github: '#',
      demo: '#',
      badge: 'Fintech • Analytics',
      metric: 'Built & shipped in 24h',
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
      github: '#',
      demo: '#',
      badge: 'RAG • Semantic search',
      metric: 'Ctrl+F, but truly smart',
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
      github: '#',
      demo: '#',
      badge: 'Safety • Vision',
      metric: '95% AI-flag confidence',
    },
  ];

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.24 }}
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
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-white/10"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#7C3AED] hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Details
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0F0F1A] via-[#0B0B12] to-[#0F0F1A] px-6 py-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Next up</p>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            Want a bespoke build with measurable lift?
          </h3>
          <p className="max-w-2xl text-gray-300">
            From idea to shipped feature set, I pair fast experiments with production rigor. Let’s design, instrument, and launch something bold.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_55px_rgba(124,58,237,0.35)] transition hover:translate-y-[-1px]"
            >
              Book a call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-white/10"
            >
              View resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}