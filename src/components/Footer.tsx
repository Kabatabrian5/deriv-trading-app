// src/components/Footer.tsx
'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0e14] border-t border-slate-800/80 py-4 px-6 text-xs text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} ALGONEX • Deriv 3rd-Party Trading Application</span>
        <span className="text-slate-500">Trade responsibly. Synthetic indices involve significant capital risk.</span>
      </div>
    </footer>
  );
}