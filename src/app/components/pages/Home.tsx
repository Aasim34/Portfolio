import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gmailLogo from '@/assets/c15b5692091c1796f264c6911b20032c19157478.png';

export function Home() {
  const projects = [
    {
      title: 'AI Website Builder',
      description: 'AI-powered platform that auto-generates full-stack websites from text prompts',
      gradient: 'from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6]',
    },
    {
      title: 'Smart PDF Search Engine',
      description: 'AI-powered hybrid keyword + semantic document search with natural language Q&A',
      gradient: 'from-[#7C3AED] to-[#A855F7]',
    },
    {
      title: 'Deepfake Detection System',
      description: 'Deep learning-based video manipulation detection with real-time inference',
      gradient: 'from-[#8B5CF6] to-[#C084FC]',
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
                    src="https://images.unsplash.com/photo-1717672135267-c788f9582870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZCUyMHN0dWRpbyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MDczMTA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Mohammed{' '}
                <span className="bg-gradient-to-r from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
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
                <span className="text-[#8B5CF6]">AI</span> & Full Stack Developer
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
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-lg hover:shadow-lg hover:shadow-[#8B5CF6]/50 hover:-translate-y-1 transition-all"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-lg border border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeInOut' }}
                className="flex gap-4 pt-4 justify-center md:justify-start"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
                >
                  <FaGithub className="w-6 h-6 text-white group-hover:brightness-110 transition-all" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
                >
                  <FaLinkedin className="w-6 h-6 text-[#0A66C2] group-hover:brightness-125 transition-all" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
                >
                  <FaInstagram className="w-6 h-6 text-[#E4405F] group-hover:brightness-125 transition-all" />
                </a>
                <a
                  href="mailto:mohammed@example.com"
                  className="group p-3 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
                >
                  <img src={gmailLogo} alt="Gmail" className="w-6 h-6 group-hover:brightness-110 transition-all" />
                </a>
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
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              About <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm a Computer Science Engineering student specializing in <span className="text-[#8B5CF6]">Artificial Intelligence</span> and Full Stack Development. 
              With a passion for creating intelligent systems and scalable applications, I focus on leveraging cutting-edge 
              technologies to solve real-world problems. My expertise spans machine learning, deep learning, computer vision, 
              and modern web development frameworks.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
            >
              Learn more about me
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                className="group bg-[#121212] rounded-xl p-6 border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-xl hover:shadow-[#8B5CF6]/30 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/20`}>
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
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
    </div>
  );
}