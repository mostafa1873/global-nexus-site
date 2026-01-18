import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, X } from 'lucide-react';
import Logo from '../../assets/header.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
  
    <footer className="relative z-10 bg-[#fbfcfd] border-t border-gray-100 pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* 1.LOGO */}
        <div className="flex flex-col items-center text-center mb-20">
          <Link to="/" className="mb-6 transition-transform duration-500 hover:scale-105">
            <img src={Logo} alt="Global Nexus" className="h-16 md:h-24 w-auto object-contain" />
          </Link>
          <p className="text-gray-400 font-medium max-w-md leading-relaxed text-sm md:text-base">
            Helping brands navigate the digital landscape with precision and creativity.
          </p>
        </div>

        {/* 2.LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-y border-gray-100">

          {/* 1: Navigation */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <h4 className="text-black font-black uppercase text-[11px] tracking-[2px]">Agency</h4>
            <div className="flex flex-col items-center md:items-start gap-3">
              {['Home', 'Services', 'Portfolio', 'About'].map((item) => (
                <Link key={item} to="/" className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* 2: Contact */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <h4 className="text-black font-black uppercase text-[11px] tracking-[2px]">Contact</h4>
            <div className="flex flex-col items-center md:items-start gap-3 text-sm font-bold text-gray-500">
              <a href="mailto:hello@globalnexus.com" className="hover:text-black transition-colors">hello@globalnexus.com</a>
              <a href="tel:+201234567890" className="hover:text-black transition-colors">+20 123 456 7890</a>
            </div>
          </div>

          {/* 3: Location */}
          <div className="flex flex-col items-center md:items-start space-y-5 text-center md:text-left">
            <h4 className="text-black font-black uppercase text-[11px] tracking-[2px]">Location</h4>
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm font-bold text-gray-500 leading-relaxed">
                Business District, Tower 4<br />
                New Cairo, Egypt
              </p>
            </div>
          </div>

          {/* 4: Social */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <h4 className="text-black font-black uppercase text-[11px] tracking-[2px]">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, color: 'hover:bg-[#0077b5]' },
                { icon: <Instagram size={18} />, color: 'hover:bg-pink-600' },
                { icon: <Facebook size={18} />, color: 'hover:bg-blue-600' },
                { icon: <X size={18} />, color: 'hover:bg-black' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* 3.Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-50 flex justify-center items-center">
          <p className="text-[10px] md:text-[11px] font-black text-gray-300 uppercase tracking-[4px] text-center">
            © {currentYear} Global Nexus Solutions — All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}