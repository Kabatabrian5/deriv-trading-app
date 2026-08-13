'use client';

interface Props {
  activeSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

const INDICES = [
  { id: 'R_10', label: 'Volatility 10 Index' },
  { id: 'R_25', label: 'Volatility 25 Index' },
  { id: 'R_50', label: 'Volatility 50 Index' },
  { id: 'R_75', label: 'Volatility 75 Index' },
  { id: 'R_100', label: 'Volatility 100 Index' },
  { id: '1HZ10V', label: 'Volatility 10 (1S)' },
  { id: '1HZ100V', label: 'Volatility 100 (1S)' },
];

export default function MarketBar({ activeSymbol, onSelectSymbol }: Props) {
  return (
    <div className="w-full bg-slate-50 border-b border-slate-200 py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Select Index:</span>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {INDICES.map((idx) => {
              const isActive = activeSymbol === idx.id;
              return (
                <button
                  key={idx.id}
                  onClick={() => onSelectSymbol(idx.id)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {idx.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}