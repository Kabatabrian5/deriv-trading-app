'use client';

import { useState } from 'react';

export default function TradingPanel({ activeSymbol }: { activeSymbol: string }) {
  const [stake, setStake] = useState('10');
  const [takeProfit, setTakeProfit] = useState('50');
  const [stopLoss, setStopLoss] = useState('20');
  const [strategy, setStrategy] = useState('BOS_CHOCH');
  const [isRunning, setIsRunning] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Parameter Panel */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900">Bot Strategy Setup</h2>
            <p className="text-xs text-slate-500 mt-0.5">Configure execution rules for {activeSymbol}</p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Strategy Model */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Execution Strategy</label>
              <select
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="BOS_CHOCH">Market Structure Shift (BOS / CHOCH)</option>
                <option value="CANDLE_RANGE">Candle Range Expansion (CRT)</option>
                <option value="MARTINGALE_GUARD">Smart Martingale & Liquidity Guard</option>
              </select>
            </div>

            {/* Stake Input */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Stake Amount ($ USD)</label>
              <input
                type="number"
                value={stake}
                onChange={(e) => setStake(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Risk Parameters */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">Take Profit ($)</label>
                <input
                  type="number"
                  value={takeProfit}
                  onChange={(e) => setTakeProfit(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">Stop Loss ($)</label>
                <input
                  type="number"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Start / Stop Action */}
          <div className="pt-2">
            {!isRunning ? (
              <button
                onClick={() => setIsRunning(true)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition shadow-sm"
              >
                ▶ Run Strategy Bot
              </button>
            ) : (
              <button
                onClick={() => setIsRunning(false)}
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-xs transition shadow-sm animate-pulse"
              >
                ■ Stop Bot Execution
              </button>
            )}
          </div>
        </div>

        {/* Right Live Execution Monitor */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">Live Execution Activity</h2>
              <p className="text-xs text-slate-500 mt-0.5 font-mono">Index: {activeSymbol}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-emerald-500 animate-ping' : 'bg-slate-300'}`} />
              <span className="text-xs font-semibold text-slate-600">{isRunning ? 'BOT ACTIVE' : 'BOT IDLE'}</span>
            </div>
          </div>

          {/* Trade Activity Console */}
          <div className="h-64 bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-xs overflow-y-auto space-y-2">
            <div className="text-slate-400">[SYSTEM] Connection initialized to Deriv WebSocket endpoint.</div>
            <div className="text-slate-400">[SYSTEM] Target Index set to {activeSymbol}.</div>
            {isRunning ? (
              <>
                <div className="text-blue-600">[BOT] Monitoring price ticks for Market Structure Shift...</div>
                <div className="text-emerald-600">[TRADE EXECUTED] CALL Contract #94827104 • Stake: ${stake}</div>
              </>
            ) : (
              <div className="text-slate-500">[INFO] Press "Run Strategy Bot" to begin execution.</div>
            )}
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-center text-xs">
            <div>
              <span className="text-slate-500 font-mono block">RUNS</span>
              <strong className="text-slate-800 text-sm font-mono">{isRunning ? '1' : '0'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-mono block">PROFIT / LOSS</span>
              <strong className="text-emerald-600 text-sm font-mono">+$0.00</strong>
            </div>
            <div>
              <span className="text-slate-500 font-mono block">WIN RATE</span>
              <strong className="text-slate-800 text-sm font-mono">0.0%</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}