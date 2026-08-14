// src/lib/deriv-connection.ts

const appId = process.env.NEXT_PUBLIC_DERIV_APP_ID || '346TpYeuY3fF5iCG2UgEd';

export const DERIV_CONFIG = {
  app_id: appId,
  ws_url: `wss://ws.derivws.com/websockets/v3?app_id=${appId}`,
};

export class DerivConnection {
  private ws: WebSocket | null = null;
  private messageHandlers: Map<string, (data: any) => void> = new Map();

  connect(token: string, onOpenCallback: () => void) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      onOpenCallback();
      return;
    }

    this.ws = new WebSocket(DERIV_CONFIG.ws_url);

    this.ws.onopen = () => {
      // Authorize immediately upon connection
      if (token && this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ authorize: token }));
      } else {
        onOpenCallback();
      }
    };

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const msgType = data.msg_type;

        if (msgType === 'authorize') {
          if (!data.error) {
            onOpenCallback();
          } else {
            console.error('Authorization failed:', data.error.message);
          }
        }

        // Route messages to specific registered handlers
        if (msgType && this.messageHandlers.has(msgType)) {
          const handler = this.messageHandlers.get(msgType);
          if (handler) handler(data);
        }
      } catch (err) {
        console.error('Failed to parse WebSocket message:', err);
      }
    };

    this.ws.onerror = (error) => {
      console.error('Deriv WebSocket error:', error);
    };

    this.ws.onclose = () => {
      console.warn('Deriv WebSocket connection closed');
    };
  }

  subscribeTicks(symbol: string, onTick: (price: number) => void) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error('WebSocket is not connected. Cannot subscribe to ticks.');
      return;
    }
    
    // Register or wrap the tick handler for this message type
    this.messageHandlers.set('tick', (data) => {
      if (data.tick && data.tick.symbol === symbol) {
        onTick(data.tick.quote);
      }
    });

    // Send the tick subscription request for volatility indices (e.g., R_10, R_25, R_50, R_75)
    this.ws.send(JSON.stringify({ ticks: symbol }));
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      this.messageHandlers.clear();
    }
  }
}