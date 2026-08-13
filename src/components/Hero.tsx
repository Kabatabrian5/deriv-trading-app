// src/components/Hero.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pt-20 pb-12 flex flex-col items-center text-center space-y-6">
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
      >
        Deriv Pro Trading Platform
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
      >
        Complete production-ready third-party trading platform with OAuth authentication, real-time charts, copy trading, and automated bots
      </motion.p>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center gap-4 pt-2"
      >
        <Link href="/login">
          <button className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
            <TrendingUp className="w-4 h-4" />
            <span>Get Started</span>
          </button>
        </Link>

        <button className="px-6 py-2.5 rounded-lg bg-[#161f33] hover:bg-[#1e2a45] border border-slate-700/60 text-slate-200 font-semibold text-xs transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
          <FileText className="w-4 h-4 text-slate-400" />
          <span>View Documentation</span>
        </button>
      </motion.div>
    </section>
  );
}