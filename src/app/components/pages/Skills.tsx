import { motion } from 'motion/react';
import { useEffect } from 'react';
import catCoffeeGif from '@/assets/cat/cat-and-coffee.gif';

export function Skills() {
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

  const skills = [
    { name: 'HTML5', icon: 'devicon-html5-plain colored', color: '#E34F26' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored', color: '#1572B6' },
    { name: 'React', icon: 'devicon-react-original colored', color: '#61DAFB' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', color: '#339933' },
    { name: 'Git', icon: 'devicon-git-plain colored', color: '#F05032' },
    { name: 'GitHub', icon: 'devicon-github-original', color: '#181717' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', color: '#2496ED' },
    { name: 'Python', icon: 'devicon-python-plain colored', color: '#3776AB' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain colored', color: '#009688' },
    { name: 'Flask', icon: 'devicon-flask-original', color: '#000000' },
    { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored', color: '#FF6F00' },
    { name: 'OpenCV', icon: 'devicon-opencv-plain colored', color: '#5C3EE8' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', color: '#47A248' },
    { name: 'Firebase', icon: 'devicon-firebase-plain colored', color: '#FFCA28' },
    { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored', color: '#F7931E' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with noise and gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] rounded-3xl p-8 sm:p-12 lg:p-16 border border-purple-500/20 shadow-2xl shadow-purple-500/10 backdrop-blur-sm"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
              style={{ 
                textShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
              }}
            >
              What I'm Learning
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
            >
              Continuously expanding my skillset with modern technologies and development practices
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-[#0a0a0a] rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/0 transition-all duration-300"></div>
                  
                  {/* Purple glow behind icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-2xl transition-all duration-300"></div>

                  {/* Icon */}
                  <div className="relative flex flex-col items-center justify-center space-y-3">
                    <i 
                      className={`${skill.icon} text-5xl transition-all duration-300 group-hover:scale-110`}
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0))',
                      }}
                    ></i>
                    
                    {/* Label */}
                    <span className="text-gray-300 text-xs sm:text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>

                  {/* Enhanced glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{
                      boxShadow: '0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)',
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
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
