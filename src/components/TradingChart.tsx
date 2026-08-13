// src/components/TradingChart.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import {
  createChart,
  ColorType,
  IChartApi,
  ISeriesApi,
  CandlestickSeries,
  CandlestickData,
  Time,
} from 'lightweight-charts';
import { Candle } from '@/lib/deriv';

interface ChartProps {
  data: Candle[];
  liveCandle: Candle | null;
}

export default function TradingChart({ data, liveCandle }: ChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#0f172a' },
        textColor: '#94a3b8',
      },
      grid: {
        vertLines: { color: '#1e293b' },
        horzLines: { color: '#1e293b' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });

    chartRef.current = chart;
    seriesRef.current = candlestickSeries as ISeriesApi<'Candlestick'>;

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  useEffect(() => {
    if (seriesRef.current && data.length > 0) {
      const formattedData: CandlestickData<Time>[] = data.map((c) => ({
        time: c.time as Time,
        open: c.open,
        high: c.high,
        low: c.low,
        close: c.close,
      }));
      seriesRef.current.setData(formattedData);
    }
  }, [data]);

  useEffect(() => {
    if (seriesRef.current && liveCandle) {
      const formattedLive: CandlestickData<Time> = {
        time: liveCandle.time as Time,
        open: liveCandle.open,
        high: liveCandle.high,
        low: liveCandle.low,
        close: liveCandle.close,
      };
      seriesRef.current.update(formattedLive);
    }
  }, [liveCandle]);

  return <div ref={chartContainerRef} className="w-full rounded-lg overflow-hidden border border-slate-800" />;
}