'use client';

import { useState } from 'react';
import { Shield, ArrowRight, UserPlus, LogIn } from 'lucide-react';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAction = () => {
    const APP_ID = '34668T5a68zUtQACHU0u5';
    const REDIRECT_URL = 'https://deriv-trading-app.vercel.app/app';

    if (isSignUp) {
      window.location.href = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URL)}&prompt=registration`;
    } else {
      // Points straight to Deriv's authorization handshake which generates the consent challenge
      window.location.href = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 mb-4 border border-blue-500/30">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            {isSignUp ? 'Create your Deriv Account' : 'Sign In to AlgoNex'}
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            {isSignUp 
              ? 'Register a new account via official Deriv gateway.' 
              : 'Authorize securely via Deriv OAuth to access your dashboard.'}
          </p>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-xl mb-8 border border-slate-800">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
              !isSignUp ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <LogIn className="w-4 h-4" /> Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
              isSignUp ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-4 h-4" /> Sign Up
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleAction}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group"
          >
            <span>{isSignUp ? 'Proceed to Deriv Sign Up' : 'Authorize with Deriv'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          Secured with official Deriv OAuth API integration.
        </p>
      </div>
    </div>
  );
}