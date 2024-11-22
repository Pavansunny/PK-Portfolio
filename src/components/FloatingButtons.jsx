import { useState } from 'react';
import { FiMessageSquare, FiAward, FiX } from 'react-icons/fi';

function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScoreOpen, setIsScoreOpen] = useState(false);

  // Resume score data
  const resumeScore = 92;
  const resumeFeedback = [
    { category: "Technical Skills", score: 95, feedback: "Strong expertise in Data Engineering & Development" },
    { category: "Experience", score: 90, feedback: "Solid work history with relevant projects" },
    { category: "Education", score: 88, feedback: "Strong academic background" },
    { category: "Projects", score: 94, feedback: "Impressive portfolio of data projects" }
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-4 right-4 w-14 h-14 bg-blue-600 text-white rounded-full 
                   shadow-lg hover:bg-blue-700 transition-all duration-300 
                   flex items-center justify-center group ${isChatOpen ? 'hidden' : 'block'}`}
      >
        <FiMessageSquare className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-800 text-white text-sm py-2 px-3 
                        rounded-lg opacity-0 group-hover:opacity-100 
                        transition-all duration-300 whitespace-nowrap">
          Chat with AI
          <span className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 
                         border-[6px] border-transparent border-l-gray-800"></span>
        </span>
      </button>

      {/* Score Button */}
      <button
        onClick={() => setIsScoreOpen(true)}
        className={`fixed bottom-24 right-4 w-14 h-14 bg-blue-600 text-white rounded-full 
                   shadow-lg hover:bg-blue-700 transition-all duration-300 
                   flex items-center justify-center group ${isScoreOpen ? 'hidden' : 'block'}`}
      >
        <FiAward className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-800 text-white text-sm py-2 px-3 
                        rounded-lg opacity-0 group-hover:opacity-100 
                        transition-all duration-300 whitespace-nowrap">
          Resume Score
          <span className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 
                         border-[6px] border-transparent border-l-gray-800"></span>
        </span>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-xl shadow-2xl z-50 
                      transform transition-all duration-300">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl">
            <h3 className="font-semibold">Chat with AI</h3>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-blue-500 p-1 rounded-lg transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <p>Chat functionality coming soon!</p>
          </div>
        </div>
      )}

      {/* Score Window */}
      {isScoreOpen && (
        <div className="fixed bottom-24 right-4 w-80 bg-white rounded-xl shadow-2xl z-50 
                      transform transition-all duration-300">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl">
            <h3 className="font-semibold">Resume Score</h3>
            <button 
              onClick={() => setIsScoreOpen(false)}
              className="hover:bg-blue-500 p-1 rounded-lg transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            {/* Score Circle */}
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" 
                          className="stroke-current text-gray-200" strokeWidth="3.8" />
                  <circle cx="18" cy="18" r="16" fill="none" 
                          className="stroke-current text-blue-600"
                          strokeWidth="3.8"
                          strokeDasharray={`${resumeScore}, 100`} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">{resumeScore}</span>
                    <span className="text-lg text-blue-600">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="space-y-4">
              {resumeFeedback.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{item.category}</span>
                    <span className="text-blue-600 font-semibold">{item.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{item.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingButtons;
