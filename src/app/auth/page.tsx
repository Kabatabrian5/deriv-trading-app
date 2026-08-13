'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DERIV_CONFIG } from '@/config/deriv';

export default function AuthPage() {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) {
      setError('Please enter a valid API token.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Test the token against Deriv's WebSocket API
      const ws = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${DERIV_CONFIG.app_id}`);

      ws.onopen = () => {
        ws.send(JSON.stringify({ authorize: token.trim() }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.error) {
          setError(data.error.message || 'Invalid token.');
          setLoading(false);
          ws.close();
        } else if (data.authorize) {
          // Save token securely in local storage/session
          localStorage.setItem('deriv_api_token', token.trim());
          setLoading(false);
          ws.close();
          // Redirect straight to your trading dashboard
          router.push('/app');
        }
      };
    } catch (err) {
      setError('Connection failed. Please check your network.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-2xl font-bold mb-2 text-center">Connect to Algonex</h1>
        <p className="text-slate-400 text-sm mb-6 text-center">
          Enter your Deriv API token to start trading.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">API Token</label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Paste your token here..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-red-600/20 disabled:opacity-50"
          >
            {loading ? 'Verifying Token...' : 'Connect Workspace'}
          </button>
        </form>
      </div>
    </main>
  );
}
