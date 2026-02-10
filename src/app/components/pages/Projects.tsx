import { motion } from 'motion/react';
import { Code2, FileSearch, Brain, ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub, FaRobot, FaBook, FaShieldAlt } from 'react-icons/fa';

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
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      icon: FaBook,
      title: 'Smart PDF Search Engine',
      description: 'Hybrid semantic search with natural language Q&A capabilities',
      techStack: ['Python', 'FAISS', 'Transformers', 'Flask', 'MongoDB'],
      impact: [
        '95% semantic retrieval precision',
        'Natural language understanding',
        'Processes 10,000+ documents',
      ],
      gradient: 'from-[#8B5CF6] to-[#A855F7]',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      icon: FaShieldAlt,
      title: 'Deepfake Detection System',
      description: 'Deep learning model detecting synthetic media with high accuracy',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'CNNs'],
      impact: [
        '98% detection accuracy',
        'Real-time video analysis',
        'REST API deployment',
      ],
      gradient: 'from-[#A855F7] to-[#C084FC]',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient accents */}
      <div className="absolute inset-0 bg-[#0A0A0F]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Projects
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg sm:text-xl"
          >
            Some of the things I've built
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#1A1A1F] rounded-2xl border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/60 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Purple glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(139,92,246,0.3)]"></div>
              </div>

              <div className="relative p-6">
                {/* Project Image */}
                <div className="w-full h-48 -mx-6 -mt-6 mb-6 overflow-hidden relative bg-black">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <project.icon className="w-14 h-14 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C084FC] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 text-xs font-medium text-[#C084FC] border border-[#8B5CF6]/30 rounded-lg bg-[#8B5CF6]/5 hover:border-[#8B5CF6]/60 hover:bg-[#8B5CF6]/10 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact bullets */}
                <ul className="space-y-2 mb-6">
                  {project.impact.map((item, impactIndex) => (
                    <li key={impactIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className={`flex-shrink-0 w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient} mt-2`}></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A0A0F] border border-[#8B5CF6]/30 rounded-lg hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/5 transition-all group/btn"
                  >
                    <FaGithub className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] rounded-lg hover:shadow-lg hover:shadow-[#8B5CF6]/40 transition-all group/btn"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#8B5CF6]/50 hover:scale-105 transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}