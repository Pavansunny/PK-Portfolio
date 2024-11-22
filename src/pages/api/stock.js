import yahooFinance from 'yahoo-finance2';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { symbol = 'AAPL' } = req.query; // Default to AAPL if no symbol provided

  try {
    const quote = await yahooFinance.quote(symbol);
    const data = {
      price: quote.regularMarketPrice,
      change: quote.regularMarketChange,
      changePercent: quote.regularMarketChangePercent,
      symbol: quote.symbol,
      timestamp: new Date().toISOString()
    };

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ message: 'Error fetching stock data' });
  }
} 