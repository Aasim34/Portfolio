import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Total intro duration: 3 seconds + 0.5s hold + 0.8s exit = 4.3s total
    const timer = setTimeout(() => {
      setVisible(false);
      // Wait for exit animation to complete before calling onComplete
      setTimeout(onComplete, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0F] overflow-hidden"
        >
          {/* Purple gradient glow background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute w-[600px] h-[600px] bg-[#8B5CF6]/30 rounded-full blur-[120px]" />
            <div className="absolute w-[400px] h-[400px] bg-[#7C3AED]/40 rounded-full blur-[100px]" />
          </motion.div>

          {/* Main content container */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Animated purple ring */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative w-32 h-32 mb-4"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 1.5, delay: 0.5, ease: 'easeInOut' },
                    opacity: { duration: 0.3, delay: 0.5 },
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Monogram in center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-4xl font-bold bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  MV
                </span>
              </motion.div>

              {/* Rotating glow effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-50"
              >
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-[#8B5CF6] rounded-full blur-sm" />
              </motion.div>
            </motion.div>

            {/* Name - slides up and fades in */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              Mohammed Vasim
            </motion.h1>

            {/* Subtitle - appears with delay */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-400 tracking-wide"
            >
              AI & Full Stack Developer
            </motion.p>

            {/* Thin decorative line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.8, ease: 'easeInOut' }}
              className="w-64 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent"
            />
          </div>

          {/* Subtle particle effect */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                x: Math.cos((i / 8) * Math.PI * 2) * 200,
                y: Math.sin((i / 8) * Math.PI * 2) * 200,
              }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.1,
                ease: 'easeOut',
              }}
              className="absolute left-1/2 top-1/2 w-1 h-1 bg-[#8B5CF6] rounded-full"
              style={{ transformOrigin: 'center' }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
