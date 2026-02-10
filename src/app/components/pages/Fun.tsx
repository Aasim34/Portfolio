import { motion } from 'motion/react';

export function Fun() {
  const interests = [
    {
      image: '/src/assets/Itachi theme/Cool Anime Silhouette.jfif',
      title: 'Anime Philosophy',
      subtitle: 'Stories that shape patience and perspective',
      tag: 'Anime 🍥',
      quote: 'Discipline through storytelling',
    },
    {
      image: '/src/assets/Itachi theme/download (1).jfif',
      title: 'Dark Aesthetic',
      subtitle: 'Beauty in shadows and contrasts',
      tag: 'Series 🎬',
      quote: 'Where darkness meets depth',
    },
    {
      image: '/src/assets/Itachi theme/download (2).jfif',
      title: 'Intense Moments',
      subtitle: 'Scenes that leave lasting impact',
      tag: 'Chess ♟️',
      quote: 'Power in every frame',

    },
    {
      image: '/src/assets/Itachi theme/download (3).jfif',
      title: 'Character Depth',
      subtitle: 'Understanding complexity through fiction',
      tag: 'Art Of Music 🎵',
      quote: 'Every character tells a story',
    },
    {
      image: '/src/assets/Itachi theme/download (4).jfif',
      title: 'Admiring the Vast Universe',
      subtitle: 'Where art meets narrative',
      tag: 'Space 🌌',
      quote: 'Frames that speak volumes',
    },
    {
      image: '/src/assets/Itachi theme/download.jfif',
      title: 'Cinematic Vision',
      subtitle: 'Visual creativity that inspires',
      tag: 'Calm in Chaos ✨',
      quote: 'Every shot is intentional',
    },
    {
      image: '/src/assets/Itachi theme/images (1).jfif',
      title: 'Emotional Impact',
      subtitle: 'Scenes that stay with you forever',
      tag: 'Love Towards Marvel ❤️',
      quote: 'Moments that shape memories',
    },
    {
      image: '/src/assets/Itachi theme/images (2).jfif',
      title: 'Artistic Expression',
      subtitle: 'Where creativity knows no bounds',
      tag: 'Paw Affinity 🐾',
      quote: 'Art fuels imagination',
    },
    {
      image: '/src/assets/Itachi theme/images.jfif',
      title: 'Legendary Icons',
      subtitle: 'Characters that inspire and motivate',
      tag: 'DR STRANGE 🔮',
      quote: 'Legends never fade',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Hero Header Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#E10600]/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#FF4D6D] to-[#E10600] bg-clip-text text-transparent">
              Beyond Tech
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-xl sm:text-2xl font-light"
          >
            Chapters of my world beyond programming
          </motion.p>
        </div>
      </section>

      {/* Interest Sections - Alternating Layout */}
      {interests.map((interest, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <section
            key={index}
            className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden"
          >
            {/* Grid Layout Container */}
            <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 min-h-[70vh] md:min-h-[80vh]">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden ${
                  isImageLeft ? 'md:order-1' : 'md:order-2'
                } order-1`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay with red tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E10600]/20 via-transparent to-[#D90429]/15"></div>
                  {/* Vignette effect */}
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow: isImageLeft
                        ? 'inset -80px 0 100px -20px rgba(0,0,0,0.9)'
                        : 'inset 80px 0 100px -20px rgba(0,0,0,0.9)',
                    }}
                  ></div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center justify-center bg-black px-6 md:px-12 lg:px-16 py-16 md:py-0 ${
                  isImageLeft ? 'md:order-2' : 'md:order-1'
                } order-2`}
              >
                <div className="max-w-lg">
                  {/* Tag */}
                  <motion.div
                    initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6"
                  >
                    <span className="inline-block px-5 py-2 bg-[#E10600]/20 backdrop-blur-md border border-[#E10600]/50 rounded-full text-[#FF6B6B] text-sm font-semibold tracking-wide">
                      {interest.tag}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
                  >
                    {interest.title}
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gray-300 text-xl sm:text-2xl font-light leading-relaxed mb-6"
                  >
                    {interest.subtitle}
                  </motion.p>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="border-l-4 border-[#E10600]/60 pl-5 text-gray-400 text-base italic"
                  >
                    "{interest.quote}"
                  </motion.blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}



      {/* Final Quote Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-[#E10600]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-300 italic leading-relaxed">
              "Everything I experience shapes the{' '}
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#E10600] bg-clip-text text-transparent font-semibold">
                systems I build
              </span>
              {' '}and the{' '}
              <span className="bg-gradient-to-r from-[#E10600] to-[#D90429] bg-clip-text text-transparent font-semibold">
                ideas I create
              </span>
              ."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
