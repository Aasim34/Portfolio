import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import gmailLogo from '@/assets/c15b5692091c1796f264c6911b20032c19157478.png';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#08080F] border-t border-[#8B5CF6]/20 px-4 sm:px-6 lg:px-8 py-12">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.12),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:140px_140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0D0D18]/95 via-[#0B0B14] to-[#0E0E19]/95 p-6 sm:p-8 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#C4B5FD]">
                <Sparkles className="h-4 w-4" />
                Let's build something bold
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Mohammed Vasim • AI & ML Developer</h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
                From GenAI products to production-ready APIs, I design and ship experiences that feel intentional—not default. Reach out for collaborations, rapid prototyping, or polished launches.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:mohammed@example.com"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_45px_rgba(124,58,237,0.32)] transition hover:translate-y-[-2px]"
              >
                Email me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-white/10"
              >
                View work
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
              Mohammed Vasim
            </h3>
            <p className="text-gray-400 text-sm">
              <span className="text-[#8B5CF6]">AI</span> & Machine Learning Developer focused on shipping reliable systems with expressive, premium UI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">About</a></li>
                <li><a href="/projects" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/skills" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Skills</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Contact</a></li>
                <li><a href="mailto:mohammed@example.com" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Gmail</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
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

        <div className="border-t border-[#8B5CF6]/20 pt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © 2026 Mohammed Vasim. Built using
            <Heart className="w-4 h-4 text-[#8B5CF6]" fill="currentColor" />
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}