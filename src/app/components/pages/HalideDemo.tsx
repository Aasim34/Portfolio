import HalideTopoHero from '../ui/halide-topo-hero';
import catCoffeeGif from '@/assets/cat/cat-and-coffee.gif';

export function HalideDemo() {
  return (
    <div className="relative">
      <HalideTopoHero />
      
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
