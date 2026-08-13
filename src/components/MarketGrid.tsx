// src/components/MarketGrid.tsx
'use client';

const LISTINGS = [
  {
    title: 'Vol 100 Smart Structure Bot',
    category: 'Market Structure / CHOCH',
    author: 'QuantLab Studio',
    winRate: '78.4%',
    index: 'Volatility 100 Index',
    rating: '4.9 ★',
    price: 'Free Trial',
    badge: 'VERIFIED',
  },
  {
    title: 'Synthetic Scalper Pro',
    category: 'High Frequency Scalping',
    author: 'AlphaNode',
    winRate: '82.1%',
    index: 'Volatility 10 (1S) Index',
    rating: '4.8 ★',
    price: '$29 / mo',
    badge: 'POPULAR',
  },
  {
    title: 'SMC Breakout & Liquidity Guard',
    category: 'Smart Money Concepts',
    author: 'Apex Trading Co.',
    winRate: '74.9%',
    index: 'Volatility 75 Index',
    rating: '5.0 ★',
    price: '$45 / mo',
    badge: 'VERIFIED',
  },
  {
    title: 'Candle Range Expansion Script',
    category: 'Custom Script Tool',
    author: 'DevCore',
    winRate: '71.2%',
    index: 'Volatility 25 Index',
    rating: '4.7 ★',
    price: 'Free',
    badge: 'COMMUNITY',
  },
];

export default function MarketGrid() {
  return (
    <section id="marketplace" className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Filter Sidebar */}
        <aside className="w-full lg:w-64 space-y-6 shrink-0">
          <div className="p-5 rounded-xl bg-[#0F172A]/80 border border-slate-800/80 space-y-5">
            <h3 className="text-xs font-bold text-slate-200 uppercase font-mono tracking-wider">Filters</h3>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-medium">Category</label>
              <div className="space-y-1.5 text-xs text-slate-300">
                {['All Categories', 'Smart Money (SMC)', 'Trend Following', 'Grid / Martingale', 'Custom Scripts'].map((cat, i) => (
                  <label key={i} className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer">
                    <input type="checkbox" defaultChecked={i === 0} className="rounded accent-cyan-400" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Target Index Filter */}
            <div className="space-y-2 pt-3 border-t border-slate-800">
              <label className="text-xs text-slate-400 font-medium">Target Asset</label>
              <select className="w-full bg-[#080C14] border border-slate-700/80 rounded-lg p-2 text-xs text-slate-300 focus:outline-none">
                <option>All Synthetic Indices</option>
                <option>Volatility 10 Index</option>
                <option>Volatility 25 Index</option>
                <option>Volatility 50 Index</option>
                <option>Volatility 75 Index</option>
                <option>Volatility 100 Index</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Right Product Grid */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Showing <strong className="text-white">4</strong> verified algorithms</span>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="bg-[#0F172A] border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none">
                <option>Highest Rating</option>
                <option>Highest Win Rate</option>
                <option>Newest Release</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LISTINGS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F172A]/60 border border-slate-800/80 hover:border-cyan-500/40 transition flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{item.rating}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition">{item.title}</h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{item.category} • by {item.author}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-[#080C14] border border-slate-800/60 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">WIN RATE</span>
                    <strong className="text-emerald-400 font-mono">{item.winRate}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">INDEX</span>
                    <strong className="text-slate-200 font-mono truncate block">{item.index}</strong>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-bold text-white">{item.price}</span>
                  <button className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold text-xs transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}