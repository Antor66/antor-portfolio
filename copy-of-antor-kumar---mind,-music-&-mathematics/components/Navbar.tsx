
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#mathematics' },
    { name: 'Creative', href: '#writings' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`mx-auto max-w-fit px-8 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'glass-pink apple-shadow-pink' : 'bg-transparent'}`}>
        <div className="flex items-center space-x-12">
          <a href="#" className="text-pink-600 font-black tracking-tighter text-2xl hover:scale-110 transition-transform">AK</a>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-gray-500 hover:text-pink-600 transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ${isScrolled ? 'bg-pink-600 text-white hover:bg-pink-700 hover:scale-105' : 'glass-pink border border-pink-100 text-pink-600 hover:bg-white'}`}
          >
            Connect
          </a>
        </div>
      </div>
      <style>{`
        .glass-pink {
          background: rgba(255, 240, 245, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </nav>
  );
};
