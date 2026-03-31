import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Side Quests', path: '/fun' },
    { name: 'Moments & Memories', path: '/moments' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0A0A0F]/95 via-[#0A0A0F]/85 to-[#0A0A0F]/75 backdrop-blur-xl border-b border-gradient-to-r border-[#8B5CF6]/20 hover:border-[#8B5CF6]/30 transition-all"
      style={{
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-[#EDE9FE] via-[#8B5CF6] to-[#C4B5FD] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(139,92,246,0.4)] group-hover:drop-shadow-[0_2px_20px_rgba(139,92,246,0.6)] transition-all"
            >
              Mohammed Vasim
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#8B5CF6]'
                      : 'text-gray-300 group-hover:text-white'
                  }`}
                >
                  {item.name}
                </span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC]"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {!isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-[#8B5CF6]/20 bg-gradient-to-b from-transparent to-[#0A0A0F]/50"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[#8B5CF6]/20 text-[#8B5CF6] font-medium border border-[#8B5CF6]/40'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}