import { useState } from 'react';
import { motion } from 'framer-motion';

function NewsBot() {
  const [news] = useState([
    {
      title: "Tech Innovation Breakthrough",
      description: "Major advancement in quantum computing announced today...",
      source: "Tech Daily",
      time: "2 hours ago"
    },
    {
      title: "Market Update",
      description: "Global markets show positive trends as tech sector leads...",
      source: "Finance News",
      time: "4 hours ago"
    },
    // Add more news items as needed
  ]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
      <h3 className="text-lg font-semibold mb-4">Latest News</h3>
      <div className="space-y-4">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-gray-100 pb-4 last:border-0"
          >
            <h4 className="font-medium text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{item.source}</span>
              <span>{item.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NewsBot;