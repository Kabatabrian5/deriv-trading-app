'tsx'
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-gray-200 flex flex-col font-sans">
      
      {/* 1. Top Navigation Bar */}
      <header className="bg-[#121620] border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
            <span className="text-xl font-bold tracking-wide text-white">AlgonexTrading</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="text-emerald-400 border-b-2 border-emerald-400 pb-1">Trading Bots</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Dashboard</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Bot Builder</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Charts</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Digit Analysis</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Copytrading</a>
            <a href="#" className="text-gray-400 hover:text-white transition">AI Tools</a>
            <a href="#" className="text-gray-400 hover:text-white transition">AI Chat</a>
          </nav>
        </div>

        {/* User Profile / Logout status */}
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
        
        {/* Left / Center Content: Trading Bots Grid */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">Premium Trading Bots</h1>
            <p className="text-sm text-gray-400">Select and load an algorithmic strategy directly into your Bot Builder.</p>
          </div>

          {/* Search bar */}
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Search bots..." 
              className="w-full md:w-96 bg-[#161b22] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Bot Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#121620] border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-700 transition">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white text-base">Auto Bot by Algonex 🐂</h3>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">88%</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">High-performance algorithmic trading bot optimized for consistent markets.</p>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg text-sm transition">
                Load Bot
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121620] border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-700 transition">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white text-base">EVEN ODD MYTH V1</h3>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">89%</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">High-performance algorithmic trading bot optimized for consistent markets.</p>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg text-sm transition">
                Load Bot
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121620] border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-700 transition">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white text-base">EVEN ODD MYTH V2</h3>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">90%</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">High-performance algorithmic trading bot optimized for consistent markets.</p>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg text-sm transition">
                Load Bot
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-[#121620] border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-700 transition">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white text-base">Even Odd Switcher II</h3>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">83%</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">High-performance algorithmic trading bot optimized for consistent markets.</p>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg text-sm transition">
                Load Bot
              </button>
            </div>

          </div>
        </main>

        {/* Right Side Control Panel */}
        <aside className="w-96 bg-[#121620] border-l border-gray-800 flex flex-col justify-between p-5">
          <div>
            {/* Run Button Row */}
            <div className="flex items-center justify-between mb-4 bg-[#161b22] p-3 rounded-xl border border-gray-800">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2 rounded-lg text-sm flex items-center space-x-2 transition shadow-lg shadow-emerald-900/20">
                <span>▶ Run</span>
              </button>
              <span className="text-xs text-gray-400 font-medium">Bot is not running</span>
            </div>

            {/* Sub-tabs: Summary, Transactions, etc. */}
            <div className="flex space-x-4 border-b border-gray-800 text-xs font-medium pb-2 mb-4 text-gray-400">
              <span className="text-emerald-400 border-b-2 border-emerald-400 pb-2 cursor-pointer">Summary</span>
              <span className="hover:text-white cursor-pointer">Transactions</span>
              <span className="hover:text-white cursor-pointer">AI Analysis</span>
              <span className="hover:text-white cursor-pointer">Journal</span>
            </div>

            {/* Log / Activity Placeholder */}
            <div className="h-64 bg-[#161b22] border border-gray-800 rounded-xl p-4 flex items-center justify-center text-center text-xs text-gray-500 mb-6">
              When you're ready to trade, hit <strong className="text-gray-300 mx-1">Run</strong>. You’ll be able to track your bot's performance here.
            </div>
          </div>

          {/* Metrics Footer */}
          <div>
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Total stake</div>
                <div className="text-sm font-bold text-white mt-0.5">0.00 USD</div>
              </div>
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Total payout</div>
                <div className="text-sm font-bold text-white mt-0.5">0.00 USD</div>
              </div>
              <div className="bg-[#161b22] p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">No. of runs</div>
                <div className="text-sm font-bold text-white mt-0.5">0</div>
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

            <button className="w-full bg-[#1b222d] hover:bg-[#212a38] text-gray-300 font-medium py-2.5 rounded-lg text-sm border border-gray-800 transition">
              Reset
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}