'use client';

const STATS = [
  { value: '50K+', label: 'Active Traders' },
  { value: '$2.5B+', label: 'Trading Volume' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '150+', label: 'Trading Pairs' },
];

export default function Stats() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800/80 flex flex-col items-center justify-center text-center shadow-md"
          >
            <span className="text-3xl font-extrabold text-emerald-400">{stat.value}</span>
            <span className="text-xs text-slate-400 font-medium mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}