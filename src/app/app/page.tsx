'use client';

import React, { useEffect, useState } from 'react';

interface Account {
  loginid: string;
  token: string;
  currency: string;
  type: string;
}

export default function DashboardApp() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [wsStatus, setWsStatus] = useState<string>('Disconnected');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const extractedAccounts: Account[] = [];

    let i = 1;
    while (params.has(`acct${i}`)) {
      const loginid = params.get(`acct${i}`) || '';
      const token = params.get(`token${i}`) || '';
      const currency = params.get(`cur${i}`) || 'USD';
      
      extractedAccounts.push({
        loginid,
        token,
        currency,
        type: loginid.startsWith('VR') ? 'demo' : 'real',
      });
      i++;
    }

    if (extractedAccounts.length > 0) {
      setAccounts(extractedAccounts);
      sessionStorage.setItem('algonex_accounts', JSON.stringify(extractedAccounts));
      const defaultAcc = extractedAccounts[0];
      setSelectedAccount(defaultAcc);
      
      window.history.replaceState({}, document.title, window.location.pathname);
      initializeWebSocket(defaultAcc.token);
    } else {
      const savedAccounts = sessionStorage.getItem('algonex_accounts');
      if (savedAccounts) {
        const parsed: Account[] = JSON.parse(savedAccounts);
        setAccounts(parsed);
        if (parsed.length > 0) {
          setSelectedAccount(parsed[0]);
          initializeWebSocket(parsed[0].token);
        }
      }
    }
  }, []);

  const initializeWebSocket = (token: string) => {
    setWsStatus('Connecting...');
    // Updated to match your exact env variable name and correct app ID fallback
    const appId = process.env.NEXT_PUBLIC_DERIV_APP_ID || '346TpYeuY3fF5iCG2UgEd';
    const ws = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${appId}`);

    ws.onopen = () => {
      ws.send(JSON.stringify({ authorize: token }));
    };

    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      if (data.msg_type === 'authorize') {
        if (!data.error) {
          setWsStatus('Authorized');
          console.log('Successfully authorized:', data.authorize);
        } else {
          setWsStatus('Authorization Failed');
        }
      }
    };

    ws.onerror = () => {
      setWsStatus('Connection Error');
    };
  };

  return (
    <div className="p-6 bg-[#0b0e14] min-h-screen text-slate-200 font-mono">
      <div className="max-w-4xl mx-auto bg-[#12161f] border border-slate-800 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">AlgoNex Session Handler</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-500">WS STATUS</span>
            <div className="text-emerald-400 font-medium mt-1">{wsStatus}</div>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-500">ACTIVE LOGIN ID</span>
            <div className="text-amber-400 font-medium mt-1">{selectedAccount ? selectedAccount.loginid : 'None Detected'}</div>
          </div>
        </div>

        <h3 className="text-xs uppercase text-slate-500 mb-3 tracking-wider">Parsed Accounts from URL</h3>
        <div className="space-y-2">
          {accounts.map((acc: Account) => (
            <div key={acc.loginid} className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 flex justify-between items-center text-xs">
              <div>
                <span className="text-white font-bold">{acc.loginid}</span>
                <span className="ml-2 text-[10px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">{acc.type}</span>
              </div>
              <div className="text-slate-400">{acc.currency}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}