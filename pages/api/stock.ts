import type { NextApiRequest, NextApiResponse } from 'next';
import yahooFinance from 'yahoo-finance2';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { symbol, timeframe } = req.query;

  if (!symbol) {
    return res.status(400).json({ message: 'Symbol is required' });
  }

  try {
    const quote = await yahooFinance.quote(symbol as string);
    // For now, return dummy sentiment data
    const data = {
      price: quote.regularMarketPrice,
      sentiment: Math.random(),
      prediction: Math.random() > 0.5 ? 'Bullish' : 'Bearish',
      timestamp: new Date().toISOString(),
    };

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ message: 'Error fetching stock data' });
  }
} 