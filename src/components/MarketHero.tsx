// src/components/MarketHero.tsx
'use client';

export default function MarketHero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0B1120] to-[#080C14] border-b border-slate-800/60 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          INSTITUTIONAL ALGORITHMIC MARKETPLACE
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight">
          Discover & Deploy Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Trading Bots</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
          Access backtested algorithms, smart money concept (SMC) automation, and execution scripts built for Deriv synthetic indices.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl flex items-center bg-[#0F172A] border border-slate-700/80 rounded-xl p-1.5 shadow-xl">
          <span className="px-3 text-slate-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search strategies (e.g., Volatility 100 BOS, Martingale Guard, Candle Range...)"
            className="w-full bg-transparent text-xs text-slate-200 focus:outline-none placeholder:text-slate-500"
          />
          <button className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition min-w-max">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}