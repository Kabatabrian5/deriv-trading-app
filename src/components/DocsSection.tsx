// src/components/DocsSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function DocsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-8 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-8 rounded-2xl bg-[#121929] border border-slate-800/80 shadow-xl space-y-6"
      >
        <div className="space-y-1 border-b border-slate-800/80 pb-4">
          <h2 className="text-xl font-bold text-slate-100">Complete Documentation</h2>
          <p className="text-xs text-slate-400">Everything you need to deploy and customize your trading platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          {/* Column 1: System Docs */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-200 flex items-center gap-1.5">
              <span>📄</span> System Documentation
            </h3>
            <ul className="space-y-2 text-slate-400 font-mono text-[11px]">
              <li className="hover:text-blue-400 transition cursor-pointer">• ARCHITECTURE.md – Complete system design</li>
              <li className="hover:text-blue-400 transition cursor-pointer">• DATABASE_SCHEMA.sql – Full PostgreSQL schema</li>
              <li className="hover:text-blue-400 transition cursor-pointer">• BACKEND_SETUP.md – API setup guide</li>
              <li className="hover:text-blue-400 transition cursor-pointer">• BACKEND_CODE.md – Complete code examples</li>
            </ul>
          </div>

          {/* Column 2: Deployment */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-200 flex items-center gap-1.5">
              <span>🚀</span> Deployment & Workers
            </h3>
            <ul className="space-y-2 text-slate-400 font-mono text-[11px]">
              <li className="hover:text-blue-400 transition cursor-pointer">• COPY_TRADING_BOT_WORKERS.md – Worker processes</li>
              <li className="hover:text-blue-400 transition cursor-pointer">• DEPLOYMENT.md – Step-by-step deployment</li>
              <li className="hover:text-blue-400 transition cursor-pointer">• README.md – Quick start guide</li>
              <li className="hover:text-blue-400 transition cursor-pointer">• Security & scaling best practices</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}