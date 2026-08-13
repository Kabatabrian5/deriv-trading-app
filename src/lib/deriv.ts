// src/lib/deriv.ts

export interface Candle {
  time: number; // Unix timestamp in seconds
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface HistoryResponse {
  msg_type: string;
  candles?: Array<{
    epoch: number;
    open: number;
    high: number;
    low: number;
    close: number;
  }>;
  ohlc?: {
    epoch: number;
    open: string;
    high: string;
    low: string;
    close: string;
    symbol: string;
  };
  error?: {
    code: string;
    message: string;
  };
}

export class DerivWS {
  private ws: WebSocket | null = null;
  private appId: string;

  constructor(appId: string = '1089') {
    this.appId = appId;
  }

  public connect(
    symbol: string = 'R_100',
    granularity: number = 60,
    onData: (data: HistoryResponse) => void
  ) {
    this.disconnect();

    const wsUrl = `wss://ws.derivws.com/websockets/v3?app_id=${this.appId}`;
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      console.log(`Connected to Deriv WS for ${symbol}`);
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(
          JSON.stringify({
            ticks_history: symbol,
            adjust_start_time: 1,
            count: 300,
            end: 'latest',
            start: 1,
            style: 'candles',
            granularity: granularity,
            subscribe: 1,
          })
        );
      }
    };

    this.ws.onmessage = (event) => {
      try {
        const data: HistoryResponse = JSON.parse(event.data);
        onData(data);
      } catch (err) {
        console.error('Error parsing WS message:', err);
      }
    };

    this.ws.onerror = (error) => {
      console.warn('Deriv WS connection attempt failed or reset:', error);
    };

    this.ws.onclose = () => {
      console.log('Deriv WS Disconnected');
    };
  }

  public disconnect() {
    if (this.ws) {
      this.ws.onopen = null;
      this.ws.onmessage = null;
      this.ws.onerror = null;
      this.ws.onclose = null;
      if (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) {
        this.ws.close();
      }
      this.ws = null;
    }
  }
}