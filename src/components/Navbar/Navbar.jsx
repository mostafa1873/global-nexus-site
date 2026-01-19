import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Plus, ArrowUpRight, Layers, Briefcase, Mail, Home, Linkedin, User2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/header.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={22} /> },
    { name: 'About', path: '/about', icon: <User2 size={22} /> },
    { name: 'Services', path: '/services', icon: <Layers size={22} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Briefcase size={22} /> },
  ];

  const mobileLinks = [
    ...navLinks,
    { name: 'Contact', path: '/contact', icon: <Mail size={22} /> },
  ];

  return (
    <header className="fixed top-5 left-0 w-full z-[100] flex justify-center px-4 md:px-6">
      <nav className="flex items-center bg-white border border-black/5 shadow-[0_12px_40px_0_rgba(0,0,0,0.08)] rounded-full w-full max-w-6xl py-4 px-4 md:px-10 transition-all duration-300">

        {/* 1.LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={Logo} alt="Global Nexus" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        <div className="flex-1 md:hidden"></div>

        {/* 2.ACTIVE STATE */}
        <div className="hidden md:flex items-center gap-3 bg-gray-50/50 p-1.5 rounded-full border border-black/[0.03] mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                text-[13px] font-black uppercase tracking-[1.8px] px-8 py-3.5 rounded-full transition-all duration-300
                ${isActive
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'text-gray-500 hover:text-black hover:bg-white'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* 3.CONTACT-BUTTON */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:flex items-center gap-3 bg-blue-600 text-white px-8 py-3.5 rounded-full text-[13px] font-black uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-1">
            Let's Talk <ArrowUpRight size={16} />
          </Link>

          {/* BUTTON MENU PHONE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full transition-all active:scale-95 md:hidden"
          >
            <motion.div animate={{ rotate: isOpen ? 135 : 0 }}>
              <Plus size={24} />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* MENU PHONE */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[110] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="fixed top-28 w-[92%] max-w-md bg-white rounded-[2.5rem] p-4 shadow-2xl z-[120] border border-black/5 md:hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                {mobileLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      group flex flex-col items-center justify-center h-32 rounded-[2.2rem] transition-all
                      ${link.name === 'Contact' ? 'col-span-2' : ''} 
                      ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-50 text-black hover:bg-gray-100'}
                    `}
                  >
                    <div className="mb-2 p-3 rounded-full bg-white/10">{link.icon}</div>
                    <span className="text-[11px] font-black uppercase tracking-widest">{link.name}</span>
                  </NavLink>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/company/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-[#0077b5] rounded-[2rem] py-6 px-8 flex justify-between items-center text-white group/footer hover:bg-[#005582] transition-colors duration-500 cursor-pointer shadow-xl shadow-blue-900/20"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black opacity-80 tracking-[2px]">Global Nexus</span>
                  <span className="text-[14px] font-bold tracking-tight flex items-center gap-2">
                    Connect on LinkedIn <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="relative bg-white p-2.5 rounded-xl transition-transform duration-500 group-hover/footer:rotate-[360deg]">
                  <Linkedin className="text-[#0077b5] fill-current" size={28} />
                </div>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}