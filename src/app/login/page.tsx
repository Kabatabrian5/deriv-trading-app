// src/app/login/page.tsx
'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowRight, ExternalLink, KeyRound } from 'lucide-react';

export default function AuthPage() {
  const DERIV_APP_ID = '34668T5a68zUtQACHU0u5'; 
  const REDIRECT_URL = 'https://orange-hats-smell.loca.lt/app';

  const derivOAuthLoginUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${DERIV_APP_ID}&l=EN&brand=deriv&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;
  const derivSignupUrl = 'https://home.deriv.com/dashboard/signup?';

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col justify-between font-sans px-4">
      
      {/* Top Header */}
      <header className="w-full max-w-6xl mx-auto py-6 flex items-center justify-between border-b border-slate-800/50">
        <Link href="/" className="text-xl font-bold tracking-tight text-white font-mono">
          Algo<span className="text-blue-500">Nex</span>
        </Link>
        <Link href="/" className="text-xs text-slate-400 hover:text-slate-200 transition">
          ← Back to Home
        </Link>
      </header>

      {/* Main Card Container */}
      <main className="w-full max-w-md mx-auto my-12">
        <div className="p-8 rounded-2xl bg-[#121929] border border-slate-800 shadow-2xl space-y-6 text-center">
          
          <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20 flex items-center justify-center mx-auto">
            <KeyRound className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Connect Your Account</h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Log in with your official Deriv account to authorize trading bots, real-time analytics, and automated strategies.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0f1d] border border-slate-800 text-left space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>OAuth 2.0 Secure Authorization</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              You will authenticate directly on Deriv's official portal and return safely to your workspace.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <a 
              href={derivOAuthLoginUrl}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group"
            >
              <span>Log In with Deriv Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href={derivSignupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#1a2336] hover:bg-[#222d45] border border-slate-700/80 text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-2"
            >
              <span>Get a Free Deriv Account</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <p className="text-[10px] text-slate-500">
            By connecting, you agree to our Terms of Service and Risk Disclaimer.
          </p>
        </div>
      </main>

      <footer className="w-full max-w-6xl mx-auto py-6 text-center text-[11px] text-slate-500 border-t border-slate-800/50">
        © {new Date().getFullYear()} AlgoNex. Deriv 3rd-Party Authorized Application.
      </footer>

    </div>
  );
}