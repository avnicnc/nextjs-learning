"use client";

import { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    // Simulate an API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-purple-300 text-sm font-semibold tracking-wider mb-8 backdrop-blur-sm shadow-sm">
          LET'S TALK
        </span>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          Ready to Start Your Next Big Project?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you have a specific project in mind or just want to explore the possibilities, we're here to help.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="mb-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              required
              disabled={status === 'submitting' || status === 'success'}
              className="w-full px-5 py-4 bg-black/40 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 outline-none transition-all disabled:opacity-50" 
            />
          </div>
          <button 
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Get Started'}
          </button>
          
          {status === 'success' && (
            <p className="mt-4 text-green-400 text-sm font-medium animate-pulse">
              Thank you! We'll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
