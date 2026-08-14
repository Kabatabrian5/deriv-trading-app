'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'bots' | 'builder' | 'dashboard'>('bots');
  
  // Right panel states
  const [rightTab, setRightTab] = useState<'summary' | 'transactions' | 'ai' | 'journal'>('summary');
  const [isRunning, setIsRunning] = useState(false);
  const [runsCount, setRunsCount] = useState(0);

  // Bot Builder parameter states
  const [market, setMarket] = useState('Synthetic Indices');
  const [subMarket, setSubMarket] = useState('Volatility 10 Index');
  const [tradeType, setTradeType] = useState('Rise/Fall');
  const [contractType, setContractType] = useState('Calls/Puts');
  const [duration, setDuration] = useState('5');
  const [stake, setStake] = useState('10.00');

  const toggleRun = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setRunsCount((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-gray-200 flex flex-col font-sans">
      
      {/* 1. Top Navigation Bar */}
      <header className="bg-[#121620] border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
            <span className="text-xl font-bold tracking-wide text-white">AlgonexTrading</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button 
              onClick={() => setActiveTab('bots')}
              className={`transition pb-1 ${activeTab === 'bots' ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              Trading Bots
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`transition pb-1 ${activeTab === 'dashboard' ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('builder')}
              className={`transition pb-1 ${activeTab === 'builder' ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              Bot Builder
            </button>
            <a href="#" className="text-gray-400 hover:text-white transition">Charts</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Digit Analysis</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Copytrading</a>
            <a href="#" className="text-gray-400 hover:text-white transition">AI Tools</a>
            <a href="#" className="text-gray-400 hover:text-white transition">AI Chat</a>
          </nav>
        </div>

        {/* User Profile / Mock Mode */}
        <div className="flex items-center space-x-4">
          <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">
            Mock Mode Active
          </span>
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">
            BK
          </div>
        </div>
      </header>

      {/* 2. Main Workspace Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left / Center Dynamic Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          
          {/* VIEW A: TRADING BOTS GRID */}
          {activeTab === 'bots' && (
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-1">Premium Trading Bots</h1>
                <p className="text-sm text-gray-400">Select and load an algorithmic strategy directly into your workspace.</p>
              </div>

              <div className="mb-6">
                <input 
                  type="text" 
                  placeholder="Search bots..." 
                  className="w-full md:w-96 bg-[#161b22] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#121620] border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-700 transition">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-white text-base">Auto Bot by Algonex 🐂</h3>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">88%</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-6">High-performance algorithmic trading bot optimized for consistent markets.</p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('builder')}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg text-sm transition"
                  >
                    Load Bot
                  </button>
                </div>

                <div className="bg-[#121620] border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-700 transition">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-white text-base">EVEN ODD MYTH V1</h3>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">89%</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-6">High-performance algorithmic trading bot optimized for consistent markets.</p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('builder')}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg text-sm transition"
                  >
                    Load Bot
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIEW B: BOT BUILDER QUICK STRATEGY TEMPLATE */}
          {activeTab === 'builder' && (
            <div className="max-w-3xl mx-auto bg-[#121620] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
                <div>
                  <h2 className="text-xl font-bold text-white">Quick Strategy Bot Builder</h2>
                  <p className="text-xs text-gray-400">Configure parameters for synthetic volatility execution.</p>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-md font-mono">
                  Template: Deriv API Standard
                </span>
              </div>

              <div className="space-y-6 text-sm">
                {/* 1. Trade Parameters */}
                <div className="bg-[#161b22] p-4 rounded-xl border border-gray-800 space-y-4">
                  <h3 className="font-semibold text-emerald-400 flex items-center space-x-2">
                    <span>1. Trade Parameters</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Market</label>
                      <select 
                        value={market} 
                        onChange={(e) => setMarket(e.target.value)}
                        className="w-full bg-[#121620] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>Synthetic Indices</option>
                        <option>Forex</option>
                        <option>Cryptocurrencies</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Submarket / Volatility Index</label>
                      <select 
                        value={subMarket} 
                        onChange={(e) => setSubMarket(e.target.value)}
                        className="w-full bg-[#121620] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>Volatility 10 Index</option>
                        <option>Volatility 25 Index</option>
                        <option>Volatility 50 Index</option>
                        <option>Volatility 75 Index</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Trade Type</label>
                      <select 
                        value={tradeType} 
                        onChange={(e) => setTradeType(e.target.value)}
                        className="w-full bg-[#121620] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>Rise/Fall</option>
                        <option>Even/Odd</option>
                        <option>Matches/Differs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Contract Type</label>
                      <select 
                        value={contractType} 
                        onChange={(e) => setContractType(e.target.value)}
                        className="w-full bg-[#121620] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>Calls/Puts</option>
                        <option>Higher/Lower</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 2. Trade Options */}
                <div className="bg-[#161b22] p-4 rounded-xl border border-gray-800 space-y-4">
                  <h3 className="font-semibold text-emerald-400">2. Trade Options & Stake</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Duration (Ticks)</label>
                      <input 
                        type="number" 
                        value={duration} 
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-[#121620] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Initial Stake (USD)</label>
                      <input 
                        type="text" 
                        value={stake} 
                        onChange={(e) => setStake(e.target.value)}
                        className="w-full bg-[#121620] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsRunning(true)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-emerald-900/20"
                >
                  Save & Initialize Strategy
                </button>
              </div>
            </div>
          )}

          {/* VIEW C: GENERAL DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Performance Dashboard</h1>
              <p className="text-sm text-gray-400 mb-6">Overview of account health and aggregated run statistics.</p>
              <div className="bg-[#121620] border border-gray-800 p-6 rounded-xl text-center text-gray-400 py-16">
                Active trading session metrics and portfolio performance charts will appear here.
              </div>
            </div>
          )}

        </main>

        {/* Right Side Control Panel */}
        <aside className="w-96 bg-[#121620] border-l border-gray-800 flex flex-col justify-between p-5">
          <div>
            {/* Run Button Row */}
            <div className="flex items-center justify-between mb-4 bg-[#161b22] p-3 rounded-xl border border-gray-800">
              <button 
                onClick={toggleRun}
                className={`font-bold px-6 py-2 rounded-lg text-sm flex items-center space-x-2 transition shadow-lg ${
                  isRunning 
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-900/20' 
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20'
                }`}
              >
                <span>{isRunning ? '⏹ Stop' : '▶ Run'}</span>
              </button>
              <span className="text-xs text-gray-400 font-medium">
                {isRunning ? <span className="text-emerald-400 animate-pulse">Bot is running...</span> : 'Bot is not running'}
              </span>
            </div>

            {/* Sub-tabs */}
            <div className="flex space-x-4 border-b border-gray-800 text-xs font-medium pb-2 mb-4 text-gray-400">
              <button onClick={() => setRightTab('summary')} className={`pb-2 transition ${rightTab === 'summary' ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold' : 'hover:text-white'}`}>Summary</button>
              <button onClick={() => setRightTab('transactions')} className={`pb-2 transition ${rightTab === 'transactions' ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold' : 'hover:text-white'}`}>Transactions</button>
              <button onClick={() => setRightTab('ai')} className={`pb-2 transition ${rightTab === 'ai' ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold' : 'hover:text-white'}`}>AI Analysis</button>
              <button onClick={() => setRightTab('journal')} className={`pb-2 transition ${rightTab === 'journal' ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold' : 'hover:text-white'}`}>Journal</button>
            </div>

            {/* Content Display */}
            <div className="h-64 bg-[#161b22] border border-gray-800 rounded-xl p-4 overflow-y-auto text-xs text-gray-300 mb-6 flex flex-col justify-center">
              {rightTab === 'summary' && (
                <div className="text-center text-gray-500">
                  {isRunning ? (
                    <div className="space-y-2 text-emerald-400 font-mono">
                      <p>Active Market: {subMarket}</p>
                      <p>Strategy Type: {tradeType}</p>
                      <p className="text-white">Status: Executing ticks...</p>
                    </div>
                  ) : (
                    <p>Hit <strong className="text-gray-300 mx-1">Run</strong> or configure your strategy in the <strong className="text-emerald-400">Bot Builder</strong> tab.</p>
                  )}
                </div>
              )}
              {rightTab === 'transactions' && (
                <div className="space-y-2 text-left">
                  <div className="text-gray-500 font-semibold mb-1">Recent Contracts</div>
                  {runsCount > 0 ? (
                    <div className="bg-[#121620] p-2 rounded border border-gray-800 flex justify-between">
                      <span className="text-emerald-400">#1 {subMarket}</span>
                      <span className="text-gray-400">Active</span>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-10">No transactions recorded yet.</p>
                  )}
                </div>
              )}
              {rightTab === 'ai' && (
                <div className="space-y-2 text-left">
                  <div className="text-emerald-400 font-semibold">Algonex AI Insight</div>
                  <p className="text-gray-400">Optimized for {subMarket} with selected {tradeType} parameters.</p>
                </div>
              )}
              {rightTab === 'journal' && (
                <div className="space-y-2 text-left text-gray-400 font-mono">
                  <div className="text-gray-500">[System Logs]</div>
                  <p>&gt; Quick Strategy builder active</p>
                  <p>&gt; Ready for deployment</p>
                </div>
              )}
            </div>
          </div>

          {/* Metrics Footer */}
          <div>
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Total stake</div>
                <div className="text-sm font-bold text-white mt-0.5">{isRunning ? stake : '0.00'} USD</div>
              </div>
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Total payout</div>
                <div className="text-sm font-bold text-white mt-0.5">0.00 USD</div>
              </div>
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">No. of runs</div>
                <div className="text-sm font-bold text-white mt-0.5">{runsCount}</div>
              </div>

              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Contracts lost</div>
                <div className="text-sm font-bold text-red-400 mt-0.5">0</div>
              </div>
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Contracts won</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">0</div>
              </div>
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Profit/loss</div>
                <div className="text-sm font-bold text-white mt-0.5">0.00 USD</div>
              </div>
            </div>

            <button 
              onClick={() => { setIsRunning(false); setRunsCount(0); }}
              className="w-full bg-[#1b222d] hover:bg-[#212a38] text-gray-300 font-medium py-2.5 rounded-lg text-sm border border-gray-800 transition"
            >
              Reset
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}