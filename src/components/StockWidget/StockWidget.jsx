import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { FiTrendingUp, FiTrendingDown, FiX } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

function StockWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const stocks = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 182.63,
      change: 1.25,
      changePercent: 0.69,
      chartData: generateMockData()
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft',
      price: 338.47,
      change: -2.15,
      changePercent: -0.63,
      chartData: generateMockData()
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet',
      price: 141.18,
      change: 0.88,
      changePercent: 0.63,
      chartData: generateMockData()
    },
    {
      symbol: 'AMZN',
      name: 'Amazon',
      price: 178.35,
      change: 1.45,
      changePercent: 0.82,
      chartData: generateMockData()
    }
  ];

  // Compact widget view
  const CompactWidget = () => (
    <motion.div
      className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg
                 w-full max-w-md hover:shadow-xl transition-all duration-300"
    >
      <div className="grid grid-cols-2 gap-4">
        {stocks.map((stock) => (
          <motion.div
            key={stock.symbol}
            onClick={() => {
              setSelectedStock(stock);
              setIsExpanded(true);
            }}
            className="bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-500">{stock.symbol}</span>
              <span className="text-lg font-semibold">${stock.price}</span>
              <div className={`text-sm ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent}%)
              </div>
              <div className="h-[40px]">
                <Line
                  data={{
                    labels: Array(20).fill(''),
                    datasets: [{
                      data: stock.chartData,
                      borderColor: stock.change >= 0 ? '#22C55E' : '#EF4444',
                      borderWidth: 1.5,
                      pointRadius: 0,
                      tension: 0.4,
                      fill: true,
                      backgroundColor: stock.change >= 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                    }]
                  }}
                  options={miniChartOptions}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Expanded widget view
  const ExpandedWidget = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={() => setIsExpanded(false)}
    >
      <motion.div 
        className="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-semibold">{selectedStock?.name}</h3>
            <p className="text-gray-500">NASDAQ: {selectedStock?.symbol}</p>
          </div>
          <button 
            onClick={() => setIsExpanded(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <div className="text-3xl font-bold">${selectedStock?.price}</div>
          <div className={`flex items-center gap-2 text-lg ${
            selectedStock?.change >= 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {selectedStock?.change >= 0 ? <FiTrendingUp /> : <FiTrendingDown />}
            {selectedStock?.change >= 0 ? '+' : ''}{selectedStock?.change} ({selectedStock?.changePercent}%)
          </div>
        </div>

        {/* Chart */}
        <div className="h-[300px] mb-6">
          <Line
            data={{
              labels: Array(100).fill(''),
              datasets: [{
                data: selectedStock?.chartData,
                borderColor: selectedStock?.change >= 0 ? '#22C55E' : '#EF4444',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                fill: true,
                backgroundColor: selectedStock?.change >= 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'
              }]
            }}
            options={expandedChartOptions}
          />
        </div>

        {/* Time Periods */}
        <div className="flex gap-2 justify-center">
          {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((period) => (
            <button
              key={period}
              className="px-4 py-2 rounded-full text-sm font-medium
                       hover:bg-gray-100 transition-colors"
            >
              {period}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <CompactWidget />
      <AnimatePresence>
        {isExpanded && selectedStock && <ExpandedWidget />}
      </AnimatePresence>
    </>
  );
}

// Helper function to generate mock data
function generateMockData() {
  const points = 100;
  const data = [];
  let value = 150;
  
  for (let i = 0; i < points; i++) {
    value += (Math.random() - 0.5) * 3;
    data.push(value);
  }
  
  return data;
}

// Chart configurations
const miniChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { 
    legend: { display: false }, 
    tooltip: { enabled: false } 
  },
  scales: {
    x: { display: false },
    y: { display: false }
  },
  interaction: { enabled: false }
};

const expandedChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#000',
      bodyColor: '#666',
      borderColor: '#ddd',
      borderWidth: 1,
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { display: true }
    },
    y: {
      grid: { color: '#f0f0f0' },
      ticks: { padding: 10 }
    }
  },
  interaction: {
    intersect: false,
    mode: 'index'
  },
  hover: {
    mode: 'index',
    intersect: false
  }
};

export default StockWidget; 