// src/components/Hero.tsx
import Link from 'next/link';
import { ArrowRight, Shield, Activity, Users, Bot, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-12 pb-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Deriv Third-Party Authorized Platform
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mb-6 leading-[1.1]">
          Deriv Pro Trading Platform
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          Complete production-ready third-party trading platform with OAuth authentication, real-time charts, copy trading, and automated bots.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/auth"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/auth"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <span>View Documentation</span>
          </Link>
        </div>

        {/* Feature Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl text-left">
          
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-1">OAuth Authentication</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Secure login with Deriv accounts using standard OAuth 2.0 workflow.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-1">Real-Time Trading</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              WebSocket integration with live market data and instant execution.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-1">Copy Trading</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Mirror trades from successful leaders automatically.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-1">Automated Bots</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Multiple strategies: Martingale, Trend Following, RSI.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-1">Admin Panel</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Complete platform management and analytics dashboard.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-1">Production Ready</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Enterprise-grade security and scalability out of the box.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}