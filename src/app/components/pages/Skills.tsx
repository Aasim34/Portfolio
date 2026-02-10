import { motion } from 'motion/react';
import { 
  Code, 
  Brain, 
  Layers, 
  Layout, 
  Database, 
  Wrench,
  Cpu,
  Globe,
  Server,
  GitBranch
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
      gradient: 'from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6]',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Neural Networks'],
      gradient: 'from-[#7C3AED] to-[#A855F7]',
    },
    {
      icon: Layers,
      title: 'AI/ML Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Hugging Face'],
      gradient: 'from-[#8B5CF6] to-[#C084FC]',
    },
    {
      icon: Server,
      title: 'Backend Frameworks',
      skills: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'Django'],
      gradient: 'from-[#A855F7] to-[#C084FC]',
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      gradient: 'from-[#7C3AED] to-[#8B5CF6]',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase'],
      gradient: 'from-[#8B5CF6] to-[#A855F7]',
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Jupyter Notebook'],
      gradient: 'from-[#0A0A0F] via-[#8B5CF6] to-[#C084FC]',
    },
    {
      icon: Globe,
      title: 'Other Technologies',
      skills: ['REST APIs', 'GraphQL', 'WebSockets', 'CI/CD', 'AWS', 'Google Cloud'],
      gradient: 'from-[#7C3AED] to-[#A855F7]',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Expertise</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeInOut' }}
              className="bg-[#121212] rounded-xl p-6 border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-xl hover:shadow-[#8B5CF6]/30 transition-all group"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#8B5CF6]/20`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.03, ease: 'easeInOut' }}
                    className="px-3 py-1.5 bg-[#0A0A0F] text-gray-300 text-sm rounded-lg border border-[#8B5CF6]/20 hover:border-[#8B5CF6] hover:text-white transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#121212] to-[#161616] rounded-2xl p-8 border border-[#8B5CF6]/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-400">Technologies Mastered</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">20+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
                <p className="text-gray-400">Lines of Code Written</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="mt-16 text-center"
        >
          <div className="bg-[#121212] rounded-2xl p-8 border border-[#8B5CF6]/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Learning</span>
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying at the forefront of innovation. 
              I continuously explore new frameworks, tools, and methodologies to enhance my skill set 
              and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
