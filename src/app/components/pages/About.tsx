import { motion } from 'motion/react';
import { Award, Download, GraduationCap, Trophy } from 'lucide-react';
import aboutPhoto from '@/assets/Movements/1770800597930.jpg';

export function About() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top 10 Finalist – Kalp-AI-thon 2025',
      description: 'Advanced to finals in prestigious AI hackathon competition',
      gradient: 'from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6]',
    },
    {
      icon: Award,
      title: 'Winner – Bluetooth Controlled Robot Competition',
      description: 'First place in robotics innovation challenge',
      gradient: 'from-[#7C3AED] to-[#A855F7]',
    },
    {
      icon: Trophy,
      title: 'Top 10 Team – Smart India Hackathon (Internal)',
      description: 'Selected among top teams for national-level hackathon',
      gradient: 'from-[#8B5CF6] to-[#C084FC]',
    },
    {
      icon: Award,
      title: 'Runner-up – Starlink Innovation Challenge',
      description: 'Second place in innovation and technology competition',
      gradient: 'from-[#A855F7] to-[#C084FC]',
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
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6] rounded-2xl blur-2xl opacity-50"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#8B5CF6]/40 hover:border-[#8B5CF6]/60 transition-all">
                  <img
                    src={aboutPhoto}
                    alt="Mohammed Vasim"
                    className="w-full max-w-md h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Mohammed Vasim</h2>
                <p className="text-gray-400 leading-relaxed">
                  I'm a passionate Computer Science Engineering student with a specialization in <span className="text-[#8B5CF6]">Artificial Intelligence</span> 
                  and Full Stack Development. My journey in technology is driven by a deep fascination with how AI can 
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

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-lg hover:shadow-lg hover:shadow-[#8B5CF6]/50 hover:-translate-y-1 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Achievements & <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-gray-400">Milestones and accomplishments throughout my journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
                className="bg-[#121212] rounded-xl p-6 border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-xl hover:shadow-[#8B5CF6]/30 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.gradient} mb-4 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/20`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
