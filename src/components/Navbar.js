"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg shadow-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          Avni<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">.</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Projects</Link>

        </div>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>  
    </nav>
  );
}