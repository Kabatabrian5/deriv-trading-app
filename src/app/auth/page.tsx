'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Update with your Deriv configuration or environment variables
const DERIV_CONFIG = {
  app_id: process.env.NEXT_PUBLIC_DERIV_APP_ID || '34668T5a68zUtQACHU0u5',
};

export default function AuthPage() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) {
      setError('Please enter a valid API token.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Connect to the base WebSocket endpoint without query parameters
      const ws = new WebSocket('wss://ws.derivws.com/websockets/v3');

      ws.onopen = () => {
        // Send the app_id and token together in the authorization payload
        ws.send(
          JSON.stringify({
            authorize: token.trim(),
            passthrough: {
              app_id: DERIV_CONFIG.app_id,
            },
          })
        );
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.msg_type === 'authorize') {
          if (data.error) {
            setError(data.error.message || 'Authentication failed. Please check your token.');
            setLoading(false);
            ws.close();
          } else {
            // Successfully authorized! Store token in localStorage
            localStorage.setItem('deriv_api_token', token.trim());
            localStorage.setItem('client_accounts', JSON.stringify(data.authorize.account_list || []));
            
            setLoading(false);
            ws.close();

            // Redirect to the main dashboard workspace
            router.push('/dashboard');
          }
        }
      };

      ws.onerror = () => {
        setError('Failed to connect to Deriv WebSocket gateway.');
        setLoading(false);
      };

    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0e14] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#121824] p-8 shadow-2xl border border-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-wide">Connect to Algonex</h1>
          <p className="text-sm text-gray-400 mt-2">Enter your Deriv API token to start trading.</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleConnect} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              API Token
            </label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Paste your token here..."
              className="w-full rounded-xl bg-[#1b2230] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-600 py-3.5 font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-500 active:scale-[0.99] transition disabled:opacity-50"
          >
            {loading ? 'Verifying Workspace...' : 'Connect Workspace'}
          </button>
        </form>
      </div>
    </main>
  );
}
