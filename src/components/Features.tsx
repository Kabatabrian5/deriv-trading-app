// src/components/Features.tsx
'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, Bot, BarChart3, Zap } from 'lucide-react';

const FEATURES = [
  {
    title: 'OAuth Authentication',
    description: 'Secure login with Deriv accounts using OAuth 2.0 flow',
    icon: Shield,
  },
  {
    title: 'Real-Time Trading',
    description: 'WebSocket integration with live market data and instant execution',
    icon: TrendingUp,
  },
  {
    title: 'Copy Trading',
    description: 'Mirror trades from successful leaders automatically',
    icon: Users,
  },
  {
    title: 'Automated Bots',
    description: 'Multiple strategies: Martingale, Trend Following, RSI',
    icon: Bot,
  },
  {
    title: 'Admin Panel',
    description: 'Complete platform management and analytics dashboard',
    icon: BarChart3,
  },
  {
    title: 'Production Ready',
    description: 'Enterprise-grade security and scalability out of the box',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="p-6 rounded-2xl bg-[#121929] border border-slate-800/80 shadow-md flex flex-col space-y-4 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-600/20 transition">
                <Icon className="w-5 h-5" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-slate-100">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}