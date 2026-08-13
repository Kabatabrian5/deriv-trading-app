'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'react-router-dom'; // or Next.js router
import { DERIV_CONFIG } from '@/config/deriv';

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Authorize your Deriv account securely.');
  
  // If using Next.js App Router, you can read search params like this:
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
    const state = queryParams.get('state');

    if (code) {
      setLoading(true);
      setStatusMessage('Authenticating with Deriv...');
      
      // Handle code exchange or store session tokens here
      console.log('Authorization code received:', code);
      
      // Simulate successful handshake and redirect to dashboard
      setTimeout(() => {
        window.location.href = '/app';
      }, 1000);
    }
  }, []);

  const handleDerivLogin = async () => {
    try {
      setLoading(true);
      setStatusMessage('Connecting to Deriv...');

      // Generate PKCE code verifier and challenge
      const array = new Uint8Array(64);
      window.crypto.getRandomValues(array);
      const codeVerifier = Array.from(array)
        .map((v) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'[v % 66])
        .join('');

      const encoder = new TextEncoder();
      const data = encoder.encode(codeVerifier);
      const digest = await window.crypto.subtle.digest('SHA-256', data);
      
      const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      const stateArray = new Uint8Array(16);
      window.crypto.getRandomValues(stateArray);
      const state = Array.from(stateArray)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');

      sessionStorage.setItem('pkce_code_verifier', codeVerifier);
      sessionStorage.setItem('oauth_state', state);

      const authUrl = new URL(DERIV_CONFIG.auth_url);
      authUrl.searchParams.append('app_id', DERIV_CONFIG.app_id);
      authUrl.searchParams.append('redirect_uri', DERIV_CONFIG.redirect_uri);
      authUrl.searchParams.append('response_type', 'code');
      authUrl.searchParams.append('scope', 'trade account_management');
      authUrl.searchParams.append('state', state);
      authUrl.searchParams.append('code_challenge', codeChallenge);
      authUrl.searchParams.append('code_challenge_method', 'S256');
      authUrl.searchParams.append('l', 'EN');
      authUrl.searchParams.append('brand', 'deriv');

      window.location.href = authUrl.toString();
    } catch (error) {
      console.error('OAuth initialization error:', error);
      setLoading(false);
      setStatusMessage('Authorization failed. Please try again.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
        <h1 className="text-2xl font-bold mb-2">Connect to Algonex</h1>
        <p className="text-slate-400 text-sm mb-6">{statusMessage}</p>
        
        <button
          onClick={handleDerivLogin}
          disabled={loading}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-red-600/20 disabled:opacity-50"
        >
          {loading ? 'Please wait...' : 'Authorize with Deriv'}
        </button>
      </div>
    </main>
  );
}