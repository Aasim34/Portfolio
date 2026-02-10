import React, { useEffect, useRef, useState } from 'react';

interface HalideTopoHeroProps {
  onComplete?: () => void;
}

const HalideTopoHero: React.FC<HalideTopoHeroProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      if (isExiting) return; // Disable parallax during exit
      
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
    const entranceTimeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    // If onComplete is provided, trigger exit after animation
    let exitTimeout: ReturnType<typeof setTimeout>;
    if (onComplete) {
      exitTimeout = setTimeout(() => {
        setIsExiting(true);
        // Wait for exit animation (800ms) then call onComplete
        setTimeout(onComplete, 800);
      }, 4000); // 300ms delay + 2500ms entrance + 1200ms hold = 4000ms
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(entranceTimeout);
      if (exitTimeout) clearTimeout(exitTimeout);
    };
  }, [onComplete, isExiting]);

  return (
    <>
      <style>{`
        :root {
          --halide-bg: #0a0a0a;
          --halide-silver: #e0e0e0;
          --halide-accent: #8B5CF6;
          --halide-grain-opacity: 0.15;
        }

        .halide-body {
          background-color: var(--halide-bg);
          color: var(--halide-silver);
          font-family: 'Inter', -apple-system, sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .halide-body.exiting {
          opacity: 0;
          transform: scale(0.95);
        }

        .halide-grain {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--halide-grain-opacity);
        }

        .halide-viewport {
          perspective: 2000px;
          width: 100vw; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .halide-canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .halide-layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(139, 92, 246, 0.2);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .halide-layer-1 { 
          background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'); 
          filter: grayscale(1) contrast(1.2) brightness(0.4); 
        }
        
        .halide-layer-2 { 
          background-image: url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1200'); 
          filter: grayscale(0.8) contrast(1.1) brightness(0.5) hue-rotate(250deg); 
          opacity: 0.6; 
          mix-blend-mode: screen; 
        }
        
        .halide-layer-3 { 
          background-image: url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1200'); 
          filter: grayscale(0.7) contrast(1.3) brightness(0.6) hue-rotate(260deg); 
          opacity: 0.4; 
          mix-blend-mode: overlay; 
        }

        .halide-contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(139, 92, 246, 0.08) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .halide-interface-grid {
          position: fixed;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .halide-hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(3rem, 10vw, 10rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          mix-blend-mode: difference;
          font-weight: 900;
        }

        .halide-cta-button {
          pointer-events: auto;
          background: var(--halide-accent);
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
        }

        .halide-cta-button:hover { 
          background: #7C3AED; 
          transform: translateY(-5px); 
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
        }

        .halide-scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--halide-accent), transparent);
          animation: halide-flow 2s infinite ease-in-out;
        }

        @keyframes halide-flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }

        @media (max-width: 768px) {
          .halide-canvas-3d {
            width: 90vw;
            height: 60vh;
          }
          
          .halide-interface-grid {
            padding: 2rem;
            grid-template-rows: auto auto 1fr auto;
          }
          
          .halide-hero-title {
            font-size: clamp(2rem, 12vw, 5rem);
            grid-row: 3;
          }
        }
      `}</style>

      <div className={`halide-body ${isExiting ? 'exiting' : ''}`}>
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="halide-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#halide-grain)' }}></div>

        <div className="halide-interface-grid">
          <div style={{ fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em' }}>
            Loading<span className="animate-pulse">...</span>
          </div>
          <div style={{ 
            textAlign: 'right', 
            fontFamily: 'monospace', 
            color: 'var(--halide-accent)', 
            fontSize: '0.7rem',
            lineHeight: 1.6 
          }}>
            <div>AI & ML</div>
            <div>ENGINEER</div>
          </div>

          <h1 className="halide-hero-title">
            MOHAMMED<br />VASIM
          </h1>

          <div style={{ 
            gridColumn: '1 / -1', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', lineHeight: 1.8 }}>
              <p style={{ opacity: 0.6 }}>[ PORTFOLIO 2026 ]</p>
              <p>AI SYSTEMS & SCALABLE APPLICATIONS</p>
            </div>
            <a href="#projects" className="halide-cta-button">
              Explore Projects
            </a>
          </div>
        </div>

        <div className="halide-viewport">
          <div className="halide-canvas-3d" ref={canvasRef}>
            <div className="halide-layer halide-layer-1" ref={(el) => { if (el) layersRef.current[0] = el; }}></div>
            <div className="halide-layer halide-layer-2" ref={(el) => { if (el) layersRef.current[1] = el; }}></div>
            <div className="halide-layer halide-layer-3" ref={(el) => { if (el) layersRef.current[2] = el; }}></div>
            <div className="halide-contours"></div>
          </div>
        </div>

        <div className="halide-scroll-hint"></div>
      </div>
    </>
  );
};

export default HalideTopoHero;
