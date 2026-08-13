// src/config/deriv.ts

export const DERIV_CONFIG = {
  app_id: process.env.NEXT_PUBLIC_DERIV_APP_ID || '34668T5a68zUtQACHU0u5',
  redirect_uri: 'https://deriv-trading-app.vercel.app/auth',
  auth_url: 'https://oauth.deriv.com/oauth2/authorize',
};
export function getDerivLoginUrl(): string {
  const params = new URLSearchParams({
    app_id: DERIV_CONFIG.app_id,
    redirect_uri: DERIV_CONFIG.redirect_uri,
  });
  return `${DERIV_CONFIG.auth_url}?${params.toString()}`;
}