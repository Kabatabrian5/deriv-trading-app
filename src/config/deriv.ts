export const DERIV_CONFIG = {
  app_id: process.env.NEXT_PUBLIC_DERIV_APP_ID || '346TpYeuY3fF5iCG2UgEd',
  redirect_uri: 'https://algonex-app.vercel.app/',
  // Official Deriv OAuth 2.0 authorization endpoint
  auth_url: 'https://auth.deriv.com/oauth2/auth',
};

export function getDerivLoginUrl(): string {
  const params = new URLSearchParams({
    app_id: DERIV_CONFIG.app_id,
    redirect_uri: DERIV_CONFIG.redirect_uri,
    l: 'en',
    brand: 'deriv',
  });
  return `${DERIV_CONFIG.auth_url}?${params.toString()}`;
}