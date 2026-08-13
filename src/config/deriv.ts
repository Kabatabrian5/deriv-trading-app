// config/deriv.ts

export const DERIV_CONFIG = {
  // Replace with your actual registered Deriv App ID or load from environment variables
  app_id: process.env.NEXT_PUBLIC_DERIV_APP_ID || 'YOUR_APP_ID',
  
  // Dynamically detect origin or fallback to your production Vercel deployment URL
  redirect_uri: typeof window !== 'undefined' 
    ? `${window.location.origin}/app` 
    : 'https://deriv-trading-app.vercel.app/app',
    
  auth_url: 'https://oauth.deriv.com/oauth2/authorize',
};

// Helper function to generate clean, fully-encoded login URLs uniformly
export function getDerivLoginUrl(): string {
  const params = new URLSearchParams({
    app_id: DERIV_CONFIG.app_id,
    redirect_uri: DERIV_CONFIG.redirect_uri,
  });
  return `${DERIV_CONFIG.auth_url}?${params.toString()}`;
}