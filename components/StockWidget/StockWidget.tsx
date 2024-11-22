import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface StockData {
  price: number;
  sentiment: number;
  prediction: string;
  timestamp: string;
}

const StockWidget: React.FC = () => {
  const [symbol, setSymbol] = useState<string>('');
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [timeframe, setTimeframe] = useState<string>('1d');

  const chartOptions = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Stock Price & Sentiment Analysis',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold dark:text-white">
            Stock Sentiment Analyzer
          </h2>
          <div className="flex space-x-2">
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              placeholder="Enter stock symbol"
              className="px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="1d">1 Day</option>
              <option value="1w">1 Week</option>
              <option value="1m">1 Month</option>
            </select>
          </div>
        </div>

        {/* Charts */}
        <div className="h-[400px] relative">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
          ) : stockData.length > 0 ? (
            <Line
              options={chartOptions}
              data={{
                labels: stockData.map(d => d.timestamp),
                datasets: [
                  {
                    label: 'Price',
                    data: stockData.map(d => d.price),
                    borderColor: 'rgb(75, 192, 192)',
                    yAxisID: 'y',
                  },
                  {
                    label: 'Sentiment',
                    data: stockData.map(d => d.sentiment),
                    borderColor: 'rgb(255, 99, 132)',
                    yAxisID: 'y1',
                  },
                ],
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Enter a stock symbol to begin
            </div>
          )}
        </div>

        {/* Metrics */}
        {stockData.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Current Price
              </h3>
              <p className="text-lg font-bold dark:text-white">
                ${stockData[stockData.length - 1].price.toFixed(2)}
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Sentiment
              </h3>
              <p className="text-lg font-bold dark:text-white">
                {(stockData[stockData.length - 1].sentiment * 100).toFixed(1)}%
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Prediction
              </h3>
              <p className="text-lg font-bold dark:text-white">
                {stockData[stockData.length - 1].prediction}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockWidget; 