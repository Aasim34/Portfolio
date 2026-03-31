import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import catCoffeeGif from '@/assets/cat/cat-and-coffee.gif';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Load Devicon CDN
  useEffect(() => {
    // Check if Devicon CSS is already loaded
    if (!document.querySelector('link[href*="devicon"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
      document.head.appendChild(link);
    }
  }, []);

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      color: 'from-[#61DAFB] to-[#149eca]',
      accent: 'bg-[#61DAFB]/20 border-[#61DAFB]',
      skills: [
        { name: 'HTML5', icon: 'devicon-html5-plain colored', color: '#E34F26' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored', color: '#1572B6' },
        { name: 'React', icon: 'devicon-react-original colored', color: '#61DAFB' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      color: 'from-[#339933] to-[#226D5D]',
      accent: 'bg-[#339933]/20 border-[#339933]',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored', color: '#339933' },
        { name: 'Flask', icon: 'devicon-flask-original', color: '#000000' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain colored', color: '#009688' },
      ]
    },
    {
      id: 'ml',
      name: 'AI & ML',
      color: 'from-[#FF6F00] to-[#FF9800]',
      accent: 'bg-[#FF6F00]/20 border-[#FF6F00]',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain colored', color: '#3776AB' },
        { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored', color: '#FF6F00' },
        { name: 'OpenCV', icon: 'devicon-opencv-plain colored', color: '#5C3EE8' },
        { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored', color: '#F7931E' },
      ]
    },
    {
      id: 'database',
      name: 'Databases',
      color: 'from-[#47A248] to-[#336600]',
      accent: 'bg-[#47A248]/20 border-[#47A248]',
      skills: [
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', color: '#47A248' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored', color: '#FFCA28' },
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Tools',
      color: 'from-[#2496ED] to-[#0066cc]',
      accent: 'bg-[#2496ED]/20 border-[#2496ED]',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain colored', color: '#F05032' },
        { name: 'GitHub', icon: 'devicon-github-original', color: '#181717' },
        { name: 'Docker', icon: 'devicon-docker-plain colored', color: '#2496ED' },
      ]
    },
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const displaySkills = activeCategory === 'all' ? allSkills : skillCategories.find(c => c.id === activeCategory)?.skills || allSkills;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
            style={{ 
              textShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
            }}
          >
            Technical Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            A comprehensive toolkit spanning full-stack development, AI/ML, and cloud technologies
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === 'all' 
                ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg shadow-[#8B5CF6]/40'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:border-[#8B5CF6]/50'
            }`}
          >
            All Skills
          </motion.button>
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
        >
          {displaySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              whileHover={{ 
                scale: 1.15,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#0F0F17] to-[#0A0A12] rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/60 transition-all overflow-hidden">
                {/* Active category highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/15 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl"></div>
                
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/0 group-hover:bg-purple-500/30 rounded-full blur-3xl transition-all duration-300"></div>

                {/* Icon */}
                <div className="relative flex flex-col items-center justify-center space-y-3">
                  <i 
                    className={`${skill.icon} text-6xl transition-all duration-300 group-hover:scale-125 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]`}
                  ></i>
                    
                  {/* Label */}
                  <span className="text-gray-300 text-xs sm:text-sm font-semibold text-center group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>

                {/* Enhanced glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  style={{
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.4), inset 0 0 30px rgba(168, 85, 247, 0.15)',
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { number: '5+', label: 'Skill Categories' },
            { number: '20+', label: 'Technologies' },
            { number: '100%', label: 'Continuous Learning' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#0F0F17] to-[#0A0A12] border border-purple-500/20 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
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
