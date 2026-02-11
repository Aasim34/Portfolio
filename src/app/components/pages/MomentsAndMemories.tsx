import { motion } from 'motion/react';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { MapPin, Calendar, X } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  location: string;
  caption: string;
  date?: string;
  category?: string;
  type?: 'image' | 'video';
}

export function MomentsAndMemories() {
  const [selectedImage, setSelectedImage] = useState<Memory | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => new Set(prev).add(id));
  };

  // Test if images are accessible
  console.log('First image path:', '/Movements/1770800597430.jpg');

  const memories: Memory[] = [
    {
      id: 1,
      image: '/Movements/1770800597430.jpg',
      location: 'Bangalore',
      caption: 'Hackathon Night',
      date: 'Nov 2024',
      category: 'Tech',
    },
    {
      id: 2,
      image: '/Movements/1770800597443.jpg',
      location: 'Hyderabad',
      caption: 'College Fest Memories',
      date: 'Mar 2024',
      category: 'Events',
    },
    {
      id: 3,
      image: '/Movements/1770800597456.jpg',
      location: 'Goa',
      caption: 'Exploring New Places',
      date: 'Jan 2025',
      category: 'Travel',
    },
    {
      id: 4,
      image: '/Movements/1770800597470.jpg',
      location: 'Mumbai',
      caption: 'Weekend Reset',
      date: 'Dec 2024',
      category: 'Life',
    },
    {
      id: 5,
      image: '/Movements/1770800597501.jpg',
      location: 'Pune',
      caption: 'Tech Conference Vibes',
      date: 'Oct 2024',
      category: 'Tech',
    },
    {
      id: 6,
      image: '/Movements/1770800597518.jpg',
      location: 'Delhi',
      caption: 'Late Night Coding Sessions',
      date: 'Sep 2024',
      category: 'Tech',
    },
    {
      id: 7,
      image: '/Movements/1770800597538.jpg',
      location: 'Kashmir',
      caption: 'Mountain Adventures',
      date: 'Aug 2024',
      category: 'Travel',
    },
    {
      id: 9,
      image: '/Movements/1770800597575.jpg',
      location: 'Bangalore',
      caption: 'Team Collaboration',
      date: 'Jun 2024',
      category: 'Tech',
    },
    {
      id: 10,
      image: '/Movements/1770800597585.jpg',
      location: 'Ooty',
      caption: 'Hill Station Escape',
      date: 'May 2024',
      category: 'Travel',
    },
    {
      id: 11,
      image: '/Movements/1770800597604.jpg',
      location: 'Mumbai',
      caption: 'Coffee & Code',
      date: 'Apr 2024',
      category: 'Life',
    },
    {
      id: 12,
      image: '/Movements/1770800597619.jpg',
      location: 'Goa',
      caption: 'Sunset Workshop',
      date: 'Feb 2024',
      category: 'Events',
    },
    {
      id: 13,
      image: '/Movements/1770800597648.jpg',
      location: 'Pune',
      caption: 'Innovation Summit',
      date: 'Jan 2024',
      category: 'Tech',
    },
    {
      id: 14,
      image: '/Movements/1770800597667.jpg',
      location: 'Manali',
      caption: 'Mountain Trails',
      date: 'Dec 2023',
      category: 'Travel',
    },
    {
      id: 15,
      image: '/Movements/1770800597693.webp',
      location: 'Hyderabad',
      caption: 'Startup Meetup',
      date: 'Nov 2023',
      category: 'Events',
    },
    {
      id: 16,
      image: '/Movements/1770800597709.webp',
      location: 'Bangalore',
      caption: 'Creative Brainstorming',
      date: 'Oct 2023',
      category: 'Life',
    },
    {
      id: 17,
      image: '/Movements/1770800597740.jpg',
      location: 'Jaipur',
      caption: 'Heritage Exploration',
      date: 'Sep 2023',
      category: 'Travel',
    },
    {
      id: 18,
      image: '/Movements/1770800597754.jpg',
      location: 'Pune',
      caption: 'Team Building Day',
      date: 'Aug 2023',
      category: 'Events',
    },
    {
      id: 19,
      image: '/Movements/1770800597768.jpg',
      location: 'Bangalore',
      caption: 'Product Launch Event',
      date: 'Jul 2023',
      category: 'Tech',
    },
    {
      id: 20,
      image: '/Movements/1770800597785.jpg',
      location: 'Coorg',
      caption: 'Nature Retreat',
      date: 'Jun 2023',
      category: 'Travel',
    },
    {
      id: 21,
      image: '/Movements/1770800597808.jpg',
      location: 'Delhi',
      caption: 'Workshop Sessions',
      date: 'May 2023',
      category: 'Events',
    },
    {
      id: 25,
      image: '/Movements/1770800597874.jpg',
      location: 'Goa',
      caption: 'Beach Days',
      date: 'Jan 2023',
      category: 'Travel',
    },
    {
      id: 26,
      image: '/Movements/1770800597887.webp',
      location: 'Pune',
      caption: 'Learning Session',
      date: 'Dec 2022',
      category: 'Tech',
    },
    {
      id: 27,
      image: '/Movements/1770800597903.jpg',
      location: 'Delhi',
      caption: 'Project Demo Day',
      date: 'Nov 2022',
      category: 'Events',
    },
    {
      id: 28,
      image: '/Movements/1770800597930.jpg',
      location: 'Bangalore',
      caption: 'Collaboration Time',
      date: 'Oct 2022',
      category: 'Life',
    },
    {
      id: 29,
      image: '/Movements/1770800597947.jpg',
      location: 'Kashmir',
      caption: 'Valley Views',
      date: 'Sep 2022',
      category: 'Travel',
    },
  
    {
      id: 31,
      image: '/Movements/1770800597995.jpg',
      location: 'Hyderabad',
      caption: 'Friends & Code',
      date: 'Jul 2022',
      category: 'Life',
    },
    {
      id: 32,
      image: '/Movements/1770800598008.jpg',
      location: 'Mumbai',
      caption: 'Innovation Day',
      date: 'Jun 2022',
      category: 'Tech',
    },
    {
      id: 33,
      image: '/Movements/1770800598025.webp',
      location: 'Goa',
      caption: 'Sunset Moments',
      date: 'May 2022',
      category: 'Travel',
    },
    {
      id: 34,
      image: '/Movements/1770800598039.webp',
      location: 'Pune',
      caption: 'Campus Life',
      date: 'Apr 2022',
      category: 'Events',
    },
    {
      id: 35,
      image: '/Movements/1770800598055.jpg',
      location: 'Bangalore',
      caption: 'Hackathon Prep',
      date: 'Mar 2022',
      category: 'Tech',
    },
    {
      id: 36,
      image: '/Movements/1770800598069.jpg',
      location: 'Ooty',
      caption: 'Mountain Escape',
      date: 'Feb 2022',
      category: 'Travel',
    },
    {
      id: 37,
      image: '/Movements/1770800598081.jpg',
      location: 'Delhi',
      caption: 'Weekend Hangout',
      date: 'Jan 2022',
      category: 'Life',
    },
    {
      id: 38,
      image: '/Movements/1770800598095.jpg',
      location: 'Hyderabad',
      caption: 'Team Success',
      date: 'Dec 2021',
      category: 'Events',
    },
    {
      id: 41,
      image: '/Movements/Snapchat-1446567622.mp4',
      location: 'Bangalore',
      caption: 'Quick Snapshots',
      date: 'Dec 2024',
      category: 'Life',
      type: 'video',
    },
    {
      id: 40,
      image: '/Movements/1770800598132.jpg',
      location: 'Goa',
      caption: 'Paradise Found',
      date: 'Oct 2021',
      category: 'Travel',
      type: 'image',
    },
    {
      id: 42,
      image: '/Movements/VID-20250905-WA0006.mp4',
      location: 'Hyderabad',
      caption: 'Special Moments',
      date: 'Sep 2025',
      category: 'Events',
      type: 'video',
    },
    {
      id: 43,
      image: '/Movements/VID-20251207-WA0000.mp4',
      location: 'Mumbai',
      caption: 'City Adventures',
      date: 'Dec 2025',
      category: 'Life',
      type: 'video',
    },
    {
      id: 44,
      image: '/Movements/WhatsApp Image 2026-02-11 at 3.36.46 PM.jpeg',
      location: 'Bangalore',
      caption: 'New Memories',
      date: 'Feb 2026',
      category: 'Life',
    },
    {
      id: 45,
      image: '/Movements/WhatsApp Image 2026-02-11 at 3.38.48 PM.jpeg',
      location: 'Hyderabad',
      caption: 'Special Moments',
      date: 'Feb 2026',
      category: 'Events',
    },
    {
      id: 46,
      image: '/Movements/WhatsApp Image 2026-02-11 at 3.38.49 PM.jpeg',
      location: 'Mumbai',
      caption: 'City Life',
      date: 'Feb 2026',
      category: 'Life',
    },
    {
      id: 47,
      image: '/Movements/WhatsApp Image 2026-02-11 at 3.39.58 PM.jpeg',
      location: 'Pune',
      caption: 'Good Times',
      date: 'Feb 2026',
      category: 'Events',
    },
    {
      id: 48,
      image: '/Movements/WhatsApp Image 2026-02-11 at 3.40.20 PM.jpeg',
      location: 'Goa',
      caption: 'Joyful Vibes',
      date: 'Feb 2026',
      category: 'Travel',
    },
   
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Moments & <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Memories</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into my journey — personal moments, travel experiences, and life beyond the code
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3, 1536: 4 }}>
            <Masonry gutter="20px">
              {memories.map((memory) => (
                <div
                  key={memory.id}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(memory)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl border border-[#8B5CF6]/20 bg-[#1A1A24] shadow-lg hover:shadow-[#8B5CF6]/40 transition-all duration-500">
                    {/* Loading Skeleton */}
                    {!imagesLoaded.has(memory.id) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A24] to-[#2A2A34] animate-pulse z-0" />
                    )}
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 via-[#8B5CF6]/0 to-[#A855F7]/0 group-hover:from-[#7C3AED]/20 group-hover:via-[#8B5CF6]/10 group-hover:to-[#A855F7]/20 transition-all duration-500 z-10 pointer-events-none"></div>
                    
                    {/* Image or Video */}
                    {memory.type === 'video' ? (
                      <video
                        src={memory.image}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-0"
                        style={{ display: 'block' }}
                        muted
                        loop
                        playsInline
                        onLoadedData={() => handleImageLoad(memory.id)}
                        onError={(e) => {
                          console.error('Failed to load video:', memory.image);
                        }}
                      />
                    ) : (
                      <img
                        src={memory.image}
                        alt={memory.caption}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-0"
                        style={{ 
                          display: 'block',
                          imageOrientation: 'from-image'
                        }}
                        onLoad={() => handleImageLoad(memory.id)}
                        onError={(e) => {
                          console.error('Failed to load image:', memory.image);
                          e.currentTarget.src = 'https://via.placeholder.com/400x600/1A1A24/8B5CF6?text=Image+Not+Found';
                        }}
                      />
                    )}
                    
                    {/* Play Icon for Videos */}
                    {memory.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-2 border-white/80">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-5">
                      {/* Category Tag */}
                      {memory.category && (
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-[#8B5CF6]/40 backdrop-blur-sm rounded-full border border-[#8B5CF6]/50 text-white">
                            {memory.category}
                          </span>
                        </div>
                      )}

                      {/* Caption */}
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {memory.caption}
                      </h3>

                      {/* Location and Date */}
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#8B5CF6]" />
                          <span>{memory.location}</span>
                        </div>
                        {memory.date && (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-[#8B5CF6]" />
                            <span>{memory.date}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {selectedImage.type === 'video' ? (
                <video
                  src={selectedImage.image}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  style={{ display: 'block' }}
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.caption}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  style={{ display: 'block' }}
                />
              )}

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-8">
                {selectedImage.category && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#8B5CF6]/40 backdrop-blur-sm rounded-full border border-[#8B5CF6]/50 text-white mb-3">
                    {selectedImage.category}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.caption}
                </h2>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#8B5CF6]" />
                    <span>{selectedImage.location}</span>
                  </div>
                  {selectedImage.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#8B5CF6]" />
                      <span>{selectedImage.date}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
