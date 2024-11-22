import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export interface StockData {
  price: number;
  sentiment: number;
  prediction: string;
  timestamp: string;
}

export const fetchStockData = async (
  symbol: string,
  timeframe: string
): Promise<StockData[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/stock`, {
      params: { symbol, timeframe },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
}; 