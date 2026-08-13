'use client';

import { useState } from 'react';
import { DERIV_CONFIG } from '@/config/deriv';

export default function AuthPage() {
  const [loading, setLoading] = useState(false);

  const handleDerivLogin = async () => {
    try {
      setLoading(true);

      // 1. Generate a random code_verifier for PKCE
      const array = new Uint8Array(64);
      window.crypto.getRandomValues(array);
      const codeVerifier = Array.from(array)
        .map((v) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'[v % 66])
        .join('');

      // 2. Derive the code_challenge using SHA-256
      const encoder = new TextEncoder();
      const data = encoder.encode(codeVerifier);
      const digest = await window.crypto.subtle.digest('SHA-256', data);
      
      const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      // 3. Generate a random state for security
      const stateArray = new Uint8Array(16);
      window.crypto.getRandomValues(stateArray);
      const state = Array.from(stateArray)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');

      // 4. Save verifier and state in sessionStorage for the callback page
      sessionStorage.setItem('pkce_code_verifier', codeVerifier);
      sessionStorage.setItem('oauth_state', state);

      // 5. Construct the official Deriv OAuth 2.0 authorization URL
      const authUrl = new URL(DERIV_CONFIG.auth_url);
      authUrl.searchParams.append('response_type', 'code');
      authUrl.searchParams.append('client_id', DERIV_CONFIG.app_id);
      authUrl.searchParams.append('redirect_uri', DERIV_CONFIG.redirect_uri);
      authUrl.searchParams.append('scope', 'trade account_manage application_read');
      authUrl.searchParams.append('state', state);
      authUrl.searchParams.append('code_challenge', codeChallenge);
      authUrl.searchParams.append('code_challenge_method', 'S256');

      // Redirect user to Deriv's official login & consent screen
      window.location.href = authUrl.toString();
    } catch (error) {
      console.error('OAuth initialization error:', error);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
        <h1 className="text-2xl font-bold mb-2">Connect to Algonex</h1>
        <p className="text-slate-400 text-sm mb-6">
          Authorize your Deriv account securely using OAuth 2.0.
        </p>
        
        <button
          onClick={handleDerivLogin}
          disabled={loading}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-red-600/20 disabled:opacity-50"
        >
          {loading ? 'Connecting to Deriv...' : 'Authorize with Deriv'}
        </button>
      </div>
    </main>
  );
}