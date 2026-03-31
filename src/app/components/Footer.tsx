import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'motion/react';
import gmailLogo from '@/assets/c15b5692091c1796f264c6911b20032c19157478.png';

export function Footer() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0F] via-[#08080F] to-[#050508] border-t border-[#8B5CF6]/20 px-4 sm:px-6 lg:px-8 py-12">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.15),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.15),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:140px_140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0D0D18]/90 via-[#0B0B14] to-[#0E0E19]/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(139,92,246,0.1)]"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#C4B5FD]"
              >
                <Sparkles className="h-4 w-4" />
                Let's collaborate
              </motion.div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to build something amazing?</h3>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
                  I'm always excited about new opportunities and collaborations. Let's connect and create something extraordinary together.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-start md:justify-end">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadvasim353@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8B5CF6]/40 transition-all"
              >
                Email me
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-[#C084FC]/50 hover:bg-white/10 transition-all"
              >
                View work
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Links and Social */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#EDE9FE] via-[#8B5CF6] to-[#C4B5FD] bg-clip-text text-transparent">
              Mohammed Vasim
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="text-[#8B5CF6] font-semibold">AI & ML Developer</span> crafting intelligent systems with beautiful interfaces. Passionate about transforming ideas into impactful solutions.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-gray-400 hover:text-[#8B5CF6] transition-colors inline-flex items-center gap-1"
                  >
                    <span className="inline-block w-0 h-0.5 bg-[#8B5CF6] group-hover:w-2 transition-all" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all"
                style={{
                  boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                }}
              >
                <FaGithub className="w-5 h-5 text-white group-hover:text-[#C084FC] transition-all" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-vasim-64084b331"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/30 hover:border-[#0A66C2] transition-all"
                style={{
                  boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                }}
              >
                <FaLinkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-[#0A7FD9] transition-all" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mdaasim2005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/30 hover:border-[#E4405F] transition-all"
                style={{
                  boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                }}
              >
                <FaInstagram className="w-5 h-5 text-[#E4405F] group-hover:text-[#F77737] transition-all" />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadvasim353@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 bg-gradient-to-br from-[#1A1A24] to-[#0F0F14] rounded-xl border border-[#8B5CF6]/30 hover:border-[#EA4335] transition-all"
                style={{
                  boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                }}
              >
                <img src={gmailLogo} alt="Gmail" className="w-5 h-5 group-hover:brightness-120 transition-all" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
          <p className="text-xs text-gray-500">
            © 2026 Mohammed Vasim. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            Made with <Heart className="w-3 h-3 text-[#8B5CF6] fill-[#8B5CF6]" /> and lots of <span className="text-[#8B5CF6]">AI</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}