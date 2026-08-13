'use client';

import { useState } from 'react';
import { Play, Wallet, ChevronDown, Sparkles, X, Upload, Bot, Zap, Sun, Moon } from 'lucide-react';

export default function DashboardPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showTour, setShowTour] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [balance] = useState('0.00 KES');

  const navItems = [
    'Trading Bots', 'Dashboard', 'Bot Builder', 'Charts', 
    'Digit Analysis', 'Copytrading', 'AI Tools', 'AI Chat'
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Top Header */}
      <header className={`border-b px-4 py-2.5 flex items-center justify-between text-sm transition-colors duration-200 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-6 overflow-x-auto">
          <span className={`font-black tracking-wider text-lg ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`}>ALGONEX</span>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Deriv Volatility Indices Active</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-medium ${
              isDarkMode 
                ? 'bg-slate-950 border-slate-800 text-amber-400 hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="hidden sm:inline">{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>

          <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-1.5 rounded-lg transition-all shadow-sm text-xs">
            Withdraw
          </button>
          
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold text-emerald-500 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
            <Wallet className="w-3.5 h-3.5" />
            <span>{balance}</span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </div>
        </div>
      </header>

      {/* Sub Navigation Bar */}
      <nav className={`border-b px-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-2 transition-colors duration-200 ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === item 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                : isDarkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row p-4 gap-4">
        
        {/* Center Canvas / Bot Builder Loader */}
        <div className={`flex-1 border rounded-xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden transition-colors duration-200 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className={`absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Load or build your bot
          </div>

          <div className="max-w-md py-12 flex flex-col items-center">
            <p className={`text-xs mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Import a bot from your computer, build it from scratch, or start with a quick strategy.
            </p>

            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              <div className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-950 border-slate-800 hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-500'}`}>
                <Upload className="w-6 h-6 text-blue-500" />
                <span className="text-xs font-medium">My computer</span>
              </div>
              <div className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-950 border-slate-800 hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-500'}`}>
                <Bot className="w-6 h-6 text-blue-500" />
                <span className="text-xs font-medium">Bot Builder</span>
              </div>
              <div className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-950 border-slate-800 hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-500'}`}>
                <Zap className="w-6 h-6 text-blue-500" />
                <span className="text-xs font-medium">Quick strategy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Execution Panel */}
        <div className={`w-full lg:w-80 border rounded-xl p-4 flex flex-col justify-between transition-colors duration-200 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div>
            {/* Sidebar Tabs */}
            <div className={`grid grid-cols-4 p-1 rounded-lg border text-[11px] mb-4 font-medium text-center ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
              <span className="bg-blue-600 text-white py-1.5 rounded shadow-sm">Summary</span>
              <span className="py-1.5 hover:opacity-100 opacity-70 cursor-pointer">Transactions</span>
              <span className="py-1.5 hover:opacity-100 opacity-70 cursor-pointer">AI Analysis</span>
              <span className="py-1.5 hover:opacity-100 opacity-70 cursor-pointer">Journal</span>
            </div>

            <div className={`text-center py-8 text-xs border-b mb-4 ${isDarkMode ? 'text-slate-500 border-slate-800' : 'text-slate-400 border-slate-100'}`}>
              When you're ready to trade, hit <strong className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Run</strong>.<br />
              You'll be able to track your bot's performance here.
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-6">
              <div className={`p-2.5 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <span className="opacity-60 block text-[10px]">Total stake</span>
                <span className="font-bold text-sm">0.00 KES</span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <span className="opacity-60 block text-[10px]">Total payout</span>
                <span className="font-bold text-sm">0.00 KES</span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <span className="opacity-60 block text-[10px]">Contracts won</span>
                <span className="font-bold text-emerald-500 text-sm">0</span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <span className="opacity-60 block text-[10px]">Contracts lost</span>
                <span className="font-bold text-rose-500 text-sm">0</span>
              </div>
            </div>
          </div>

          {/* Execution Button */}
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-white" />
            <span>Run Strategy</span>
          </button>
        </div>
      </div>

      {/* Welcome Tour Modal Popup */}
      {showTour && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`border rounded-2xl max-w-md w-full p-6 shadow-2xl relative ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <button 
              onClick={() => setShowTour(false)}
              className="absolute top-4 right-4 opacity-60 hover:opacity-100"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Welcome to AlgoNex</h3>
            </div>

            <p className={`text-sm mb-6 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Let’s take a quick tour to discover how your automated synthetic indices trading platform works. Press <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>Start</strong> to begin.
            </p>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowTour(false)}
                className={`flex-1 font-medium py-2.5 rounded-xl transition-all text-sm border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              >
                Skip
              </button>
              <button 
                onClick={() => setShowTour(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}