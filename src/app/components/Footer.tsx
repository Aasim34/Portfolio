import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import gmailLogo from '@/assets/c15b5692091c1796f264c6911b20032c19157478.png';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#8B5CF6]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
              Mohammed Vasim
            </h3>
            <p className="text-gray-400 text-sm">
              <span className="text-[#8B5CF6]">AI</span> & Full Stack Developer passionate about building intelligent systems and scalable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#8B5CF6] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#8B5CF6] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-[#8B5CF6] transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-400 hover:text-[#8B5CF6] transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#8B5CF6] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
              >
                <FaGithub className="w-5 h-5 text-white group-hover:brightness-110 transition-all" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin className="w-5 h-5 text-[#0A66C2] group-hover:brightness-125 transition-all" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
              >
                <FaInstagram className="w-5 h-5 text-[#E4405F] group-hover:brightness-125 transition-all" />
              </a>
              <a
                href="mailto:mohammed@example.com"
                className="group p-2 bg-[#121212] rounded-lg border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
              >
                <img src={gmailLogo} alt="Gmail" className="w-5 h-5 group-hover:brightness-110 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#8B5CF6]/20 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © 2026 Mohammed Vasim. Built with{' '}
            <Heart className="w-4 h-4 text-[#8B5CF6]" fill="currentColor" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}