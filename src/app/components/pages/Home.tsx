import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gmailLogo from '@/assets/c15b5692091c1796f264c6911b20032c19157478.png';
import profileImg from '@/assets/Profile/WhatsApp Image 2026-02-11 at 3.47.21 PM.jpeg';
import catCoffeeGif from '@/assets/cat/cat-and-coffee.gif';

export function Home() {
  const projects = [
    {
      title: 'AI Website Builder',
      description: 'AI-powered platform that auto-generates full-stack websites from text prompts',
      gradient: 'from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6]',
      tags: ['Generative UX', 'Full-stack automation', 'Next.js'],
      accent: 'bg-[#8B5CF6]',
    },
    {
      title: 'Smart PDF Search Engine',
      description: 'AI-powered hybrid keyword + semantic document search with natural language Q&A',
      gradient: 'from-[#7C3AED] to-[#A855F7]',
      tags: ['RAG', 'Vector search', 'FastAPI'],
      accent: 'bg-[#7C3AED]',
    },
    {
      title: 'Deepfake Detection System',
      description: 'Deep learning-based video manipulation detection with real-time inference',
      gradient: 'from-[#8B5CF6] to-[#C084FC]',
      tags: ['Computer Vision', 'Real-time inference', 'PyTorch'],
      accent: 'bg-[#C084FC]',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Now with repeatable viewport animations */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Orbs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Photo */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="relative flex justify-center order-1 md:order-1"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Radial Gradient Background behind photo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(139,92,246,0.4)_0%,rgba(10,10,15,0)_70%)] scale-150 blur-xl"></div>
                
                {/* Photo Container with Neon Glow */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.5)] z-10">
                  <img
                    src={profileImg}
                    alt="Mohammed Vasim"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Text Content */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-2">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
              >
                <span className="block">Mohammed</span>
                <span className="block bg-gradient-to-r from-[#EDE9FE] via-[#8B5CF6] to-[#C4B5FD] bg-clip-text text-transparent">
                  Vasim
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl text-gray-300"
              >
                <span className="text-[#8B5CF6]">AI</span> & ML Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
                className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0"
              >
                Building intelligent AI systems and scalable full-stack applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <motion.div whileHover="hover">
                  <Link
                    to="/projects"
                    className="relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-xl font-semibold overflow-hidden group"
                    style={{
                      boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      View Projects
                      <motion.div
                        variants={{ hover: { x: 4 } }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </span>
                  </Link>
                </motion.div>
                
                <motion.a
                  href="/Resume/MOHAMMAD_VASIM_RESUME.pdf"
                  download="MOHAMMAD_VASIM_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  className="relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-transparent to-transparent text-white rounded-xl font-semibold overflow-hidden group border-2 border-[#8B5CF6] hover:border-[#C084FC] transition-all"
                  style={{
                    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.15)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeInOut' }}
                className="flex gap-3 pt-4 justify-center md:justify-start"
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/40 hover:border-[#8B5CF6] transition-all"
                  style={{
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                  }}
                >
                  <FaGithub className="w-6 h-6 text-white group-hover:text-[#C084FC] transition-all" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohammed-vasim-64084b331"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/40 hover:border-[#0A66C2] transition-all"
                  style={{
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                  }}
                >
                  <FaLinkedin className="w-6 h-6 text-[#0A66C2] group-hover:text-[#0A7FD9] transition-all" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/mdaasim2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/40 hover:border-[#E4405F] transition-all"
                  style={{
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                  }}
                >
                  <FaInstagram className="w-6 h-6 text-[#E4405F] group-hover:text-[#F77737] transition-all" />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadvasim353@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/40 hover:border-[#EA4335] transition-all"
                  style={{
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                  }}
                >
                  <img src={gmailLogo} alt="Gmail" className="w-6 h-6 group-hover:brightness-120 transition-all" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section - Replays on scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F] border-t border-[#8B5CF6]/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/25 via-[#8B5CF6]/15 to-transparent blur-3xl rounded-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-[#8B5CF6]/25 bg-gradient-to-br from-[#11111A] via-[#0A0A0F] to-[#0B0B12] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.15),transparent_30%)]" />
              <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 p-8 sm:p-10">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#8B5CF6]/30 text-xs uppercase tracking-[0.12em] text-[#C4B5FD]">
                    About Me
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                    I'm a Computer Science Engineering student specializing in <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Artificial Intelligence</span> and Machine Learining Development.
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    With a passion for creating intelligent systems and scalable applications, I focus on leveraging cutting-edge technologies to solve real-world problems. My expertise spans machine learning, deep learning, computer vision, and modern web development frameworks.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-2 rounded-full border border-[#8B5CF6]/40 bg-white/5 text-[#E9D5FF]">Machine Learning</span>
                    <span className="px-3 py-2 rounded-full border border-[#7C3AED]/40 bg-white/5 text-[#C4B5FD]">Computer Vision</span>
                    <span className="px-3 py-2 rounded-full border border-[#6D28D9]/40 bg-white/5 text-[#DDD6FE]">NLP</span>
                    <span className="px-3 py-2 rounded-full border border-[#8B5CF6]/40 bg-white/5 text-[#E0E7FF]">API</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all"
                    >
                      Learn more about me
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="hidden sm:inline-flex text-sm text-gray-400">Always exploring the next model to ship.</span>
                  </div>
                </div>

                <div className="grid gap-4 self-center">
                  <div className="rounded-2xl border border-[#8B5CF6]/25 bg-white/5 p-5 shadow-inner shadow-[#8B5CF6]/10">
                    <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">What I build</p>
                    <ul className="space-y-2 text-gray-200 text-sm leading-relaxed list-none">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />Intelligent products that blend AI-first features with usable UX.</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />Robust data/ML pipelines with reproducible experiments.</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C084FC]" />Production-ready services that scale cleanly on cloud-native stacks.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-[#8B5CF6]/25 bg-gradient-to-r from-[#141426] to-[#0F0F19] p-5">
                    <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">Current toolkit</p>
                    <div className="flex flex-wrap gap-2 text-xs text-[#EDE9FE]">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">PyTorch</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">TensorFlow</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">FastAPI</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Next.js</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Tailwind</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Docker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section - Replays on scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-[#8B5CF6]/25 bg-gradient-to-br from-[#0F0F17] via-[#0A0A12] to-[#0F0F17] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_60px_rgba(139,92,246,0.2)] hover:border-[#8B5CF6]/60 transition-all"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.03) 100%)
                  `
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                  background: `
                    radial-gradient(600px at 0% 0%, rgba(139, 92, 246, 0.1), transparent 80%),
                    radial-gradient(600px at 100% 100%, rgba(124, 58, 237, 0.1), transparent 80%)
                  `
                }} />
                
                <div className="relative flex flex-col h-full gap-4 z-10">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#8B5CF6]/40 text-[11px] uppercase tracking-[0.14em] text-[#C4B5FD] group-hover:border-[#C084FC] transition-colors">
                      ✨ Featured
                    </span>
                    <motion.span 
                      className={`h-3 w-3 rounded-full ${project.accent}`}
                      animate={{ boxShadow: ['0_0_10px rgba(139,92,246,0.6)', '0_0_20px rgba(139,92,246,0.8)', '0_0_10px rgba(139,92,246,0.6)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C4B5FD] transition-colors">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-[#8B5CF6]/30 text-[#E0E7FF] group-hover:border-[#C084FC]/50 group-hover:bg-[#8B5CF6]/10 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>


                  <div className="mt-auto flex items-center justify-between pt-4 text-sm border-t border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/40 transition-all">
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className={`h-2 w-2 rounded-full ${project.accent} shadow-lg`} />
                      <span className="group-hover:text-[#C4B5FD] transition-colors">AI-powered</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 4 }}
                    >
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-[#C4B5FD] group-hover:text-white font-medium transition-colors"
                      >
                        View details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
            className="text-center mt-10"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cat Drinking Coffee GIF - Easter Egg */}
      <div className="fixed top-20 right-6 z-40 pointer-events-none">
        <img
          src={catCoffeeGif}
          alt=""
          className="w-20 h-auto opacity-70"
          style={{ 
            filter: 'brightness(0.7) contrast(1.2) saturate(0.8) hue-rotate(250deg) drop-shadow(0 4px 12px rgba(139, 92, 246, 0.6))',
            mixBlendMode: 'screen'
          }}
        />
      </div>
    </div>
  );
}