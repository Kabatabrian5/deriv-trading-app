export const DERIV_CONFIG = {
  app_id: process.env.NEXT_PUBLIC_DERIV_APP_ID || '34668T5a68zUtQACHU0u5',
  redirect_uri: 'https://deriv-trading-app.vercel.app/auth',
  // Official Deriv OAuth 2.0 authorization endpoint
  auth_url: 'https://auth.deriv.com/oauth2/auth',
  ws_url: 'wss://ws.derivws.com/websockets/v3?app_id=34668T5a68zUtQACHU0u5',
};

export function getDerivLoginUrl(): string {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: DERIV_CONFIG.app_id,
    app_id: DERIV_CONFIG.app_id,
    redirect_uri: DERIV_CONFIG.redirect_uri,
    scope: 'trade account_management',
  });
  return `${DERIV_CONFIG.auth_url}?${params.toString()}`;
}