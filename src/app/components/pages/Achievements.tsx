import { motion } from 'motion/react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

export function Achievements() {
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
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Animated background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(139,92,246,0.03)_1.5px,transparent_1.5px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium backdrop-blur-sm">
              <Trophy className="w-4 h-4" />
              Notable Achievements
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-white">Achievements & </span>
            <span className="bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#E0B0FF] bg-clip-text text-transparent">
              Recognition
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-light"
          >
            Milestones and accomplishments throughout my journey
          </motion.p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title + achievement.subtitle}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-950/90 rounded-3xl p-8 sm:p-10 border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                {/* Animated gradient mesh on hover */}
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-lg text-purple-400 font-medium">
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Footer with year */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                    <span className="text-sm text-gray-500 font-medium">
                      Achieved in {achievement.year}
                    </span>
                    <div className="flex items-center gap-1 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">View Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA or Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-gray-400 text-sm font-medium">
              More achievements coming soon...
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
