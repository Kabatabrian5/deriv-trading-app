export const DERIV_CONFIG = {
  app_id: '34668T5a68zUtQACHU0u5',
  ws_url: 'wss://ws.derivws.com/websockets/v3?app_id=34668T5a68zUtQACHU0u5',
};

export class DerivConnection {
  private ws: WebSocket | null = null;

  connect(token: string, onOpenCallback: () => void) {
    this.ws = new WebSocket(DERIV_CONFIG.ws_url);

    this.ws.onopen = () => {
      // Authorize immediately upon connection
      this.ws?.send(JSON.stringify({ authorize: token }));
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.msg_type === 'authorize') {
        if (!data.error) {
          onOpenCallback();
        } else {
          console.error('Authorization failed:', data.error.message);
        }
      }
    };
  }

  subscribeTicks(symbol: string, onTick: (price: number) => void) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    
    // Subscribe to synthetic volatility indices (e.g., R_10, R_25, R_50, R_75)
    this.ws.send(JSON.stringify({ ticks: symbol }));

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.msg_type === 'tick' && data.tick) {
        onTick(data.tick.quote);
      }
    };
  }
}