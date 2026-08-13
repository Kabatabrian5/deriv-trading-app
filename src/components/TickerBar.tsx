// src/components/TickerBar.tsx
'use client';

interface TickerProps {
  activeSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

const SYMBOLS = [
  { id: 'R_10', label: 'Volatility 10 Index' },
  { id: 'R_25', label: 'Volatility 25 Index' },
  { id: 'R_50', label: 'Volatility 50 Index' },
  { id: 'R_75', label: 'Volatility 75 Index' },
  { id: 'R_100', label: 'Volatility 100 Index' },
];

export default function TickerBar({ activeSymbol, onSelectSymbol }: TickerProps) {
  return (
    <div className="w-full bg-[#0a0f1d] border-b border-slate-800/80 py-2.5 px-6 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-400 font-medium min-w-max">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Active Indices:</span>
        </div>

        <div className="flex items-center gap-3 min-w-max">
          {SYMBOLS.map((s) => {
            const isActive = activeSymbol === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectSymbol(s.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}