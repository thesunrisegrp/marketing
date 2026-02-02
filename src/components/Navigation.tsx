'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

interface NavigationProps {
  navLinks: NavLink[];
}

export default function Navigation({ navLinks }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white py-4 shadow-[0_2px_20px_rgba(0,0,0,0.05)]' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group cursor-pointer z-50">
          <img 
            src="/company.png" 
            alt="The Sunrise Group Logo" 
            className="h-10 w-auto transition-opacity duration-300"
          />
          <span className={`font-serif text-xl tracking-widest font-bold hidden md:block transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-neutral-900' : 'text-white'}`}>
            THE SUNRISE GROUP
          </span>
        </a>

        {/* Desktop Nav */}
        <div className={`hidden lg:flex items-center gap-10 ${isScrolled ? 'text-neutral-800' : 'text-white'}`}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-gold-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              {link.children && hoveredLink === link.label && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[180px] py-2 z-50">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-800 hover:text-gold-500 hover:bg-neutral-50 transition-colors"
                      onClick={() => setHoveredLink(null)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="#contact" 
            className={`border px-6 py-2 text-[11px] uppercase tracking-widest font-bold transition-all hover:bg-gold-500 hover:border-gold-500 hover:text-white ${isScrolled ? 'border-neutral-900 text-neutral-900' : 'border-white text-white'}`}
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden z-50 transition-colors ${isScrolled || mobileMenuOpen ? 'text-neutral-800' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden flex items-center justify-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a 
                href={link.href}
                className="text-2xl font-serif text-neutral-900 hover:text-gold-600 transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
              {link.children && (
                <div className="flex flex-col gap-4 mt-4">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="text-lg font-serif text-neutral-600 hover:text-gold-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

