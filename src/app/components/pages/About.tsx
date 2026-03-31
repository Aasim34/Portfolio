import { motion } from 'motion/react';
import { Award, Download, GraduationCap, Trophy, Medal, Star } from 'lucide-react';
import aboutPhoto from '@/assets/Movements/1770800597930.jpg';
import catCoffeeGif from '@/assets/cat/cat-and-coffee.gif';

export function About() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top 10 Finalist',
      subtitle: 'Kalp-AI-thon 2025',
      description: 'Advanced to finals in prestigious AI hackathon competition',
      gradient: 'from-[#8B5CF6] via-[#A855F7] to-[#C084FC]',
      year: '2025',
      badge: 'Finalist',
    },
    {
      icon: Award,
      title: 'Winner',
      subtitle: 'Bluetooth Controlled Robot Competition',
      description: 'First place in robotics innovation challenge',
      gradient: 'from-[#C084FC] via-[#A855F7] to-[#8B5CF6]',
      year: '2024',
      badge: 'Winner',
    },
    {
      icon: Medal,
      title: 'Top 10 Team',
      subtitle: 'Smart India Hackathon (Internal)',
      description: 'Selected among top teams for national-level hackathon',
      gradient: 'from-[#A855F7] via-[#8B5CF6] to-[#C084FC]',
      year: '2024',
      badge: 'National Level',
    },
    {
      icon: Star,
      title: 'Runner-up',
      subtitle: 'Starlink Innovation Challenge',
      description: 'Second place in innovation and technology competition',
      gradient: 'from-[#8B5CF6] via-[#C084FC] to-[#A855F7]',
      year: '2024',
      badge: 'Runner-up',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-400 text-lg">Get to know more about my journey and achievements</p>
        </motion.div>

        {/* Photo and Bio Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative flex justify-center order-1 md:order-none"
            >
              <div className="relative group">
                {/* Animated gradient background */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#C084FC] rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"
                />
                
                {/* Photo container */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#8B5CF6]/50 hover:border-[#8B5CF6] transition-all shadow-[0_0_40px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_60px_rgba(139,92,246,0.6)]">
                  <img
                    src={aboutPhoto}
                    alt="Mohammed Vasim"
                    className="w-full max-w-md h-auto object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Mohammed Vasim</h2>
                <p className="text-gray-400 leading-relaxed">
                  I'm a passionate Computer Science Engineering student with a specialization in <span className="text-[#8B5CF6]">Artificial Intelligence</span> 
                  and Machine Learining Development. My journey in technology is driven by a deep fascination with how AI can 
                  transform the way we interact with software and solve complex problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-white">
                  <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />
                  Education & Journey
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Currently pursuing my degree in Computer Science with a focus on cutting-edge <span className="text-[#8B5CF6]">AI</span> technologies. 
                  I specialize in machine learning, deep learning, computer vision, and natural language processing, 
                  combined with modern full-stack development skills. My technical journey involves building scalable 
                  applications that leverage the power of AI to create meaningful impact.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Technical Focus</h3>
                <p className="text-gray-400 leading-relaxed">
                  My work spans across developing intelligent AI systems, building robust full-stack applications, 
                  and creating innovative solutions that bridge the gap between advanced machine learning and 
                  practical software engineering. I'm experienced in frameworks like TensorFlow, PyTorch, FastAPI, 
                  and modern frontend technologies.
                </p>
              </div>

              <motion.a
                href="/Resume/MOHAMMAD_VASIM_RESUME.pdf"
                download="MOHAMMAD_VASIM_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-xl font-semibold overflow-hidden group shadow-lg shadow-[#8B5CF6]/30"
              >
                <span className="relative flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <div className="relative mt-20">
          {/* Animated background orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-center mb-12 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                <Trophy className="w-4 h-4" />
                Notable Achievements
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Achievements & <span className="bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#E0B0FF] bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-gray-400 text-base">Milestones and accomplishments throughout my journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeInOut' }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-zinc-950/80 rounded-3xl p-8 border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                  {/* Animated gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 blur-2xl`}></div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top section with icon and badge */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Icon */}
                      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <achievement.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        
                        {/* Icon glow */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </div>

                      {/* Badge */}
                      <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                        {achievement.badge}
                      </span>
                    </div>

                    {/* Title section */}
                    <div className="mb-4 space-y-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-base text-purple-400 font-medium">
                        {achievement.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    {/* Footer with year */}
                    <div className="pt-4 border-t border-zinc-800/50">
                      <span className="text-xs text-gray-500 font-medium">
                        Achieved in {achievement.year}
                      </span>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
