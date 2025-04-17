import React from "react";

export interface GraphVisualizationProps {
  className?: string;
}

export const GraphVisualization: React.FC<GraphVisualizationProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-xl overflow-hidden ${className}`}
    >
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <div className="font-medium text-gray-800">Portfolio Performance</div>
        <div className="text-sm text-blue-600">Last 12 months</div>
      </div>
      <div className="p-6">
        {/* Graph header with metrics */}
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">Total Return</div>
            <div className="text-2xl font-bold text-gray-900">+24.8%</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Risk Score</div>
            <div className="text-2xl font-bold text-gray-900">Low</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Assets</div>
            <div className="text-2xl font-bold text-gray-900">8</div>
          </div>
        </div>

        {/* SVG Graph */}
        <div className="h-64 w-full">
          <svg viewBox="0 0 100 40" className="h-full w-full">
            {/* Grid lines */}
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="30"
              x2="100"
              y2="30"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="40"
              x2="100"
              y2="40"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />

            {/* Vertical grid lines */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="25"
              y1="0"
              x2="25"
              y2="40"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="40"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="75"
              y1="0"
              x2="75"
              y2="40"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />
            <line
              x1="100"
              y1="0"
              x2="100"
              y2="40"
              stroke="#f1f5f9"
              strokeWidth="0.5"
            />

            {/* Primary line chart */}
            <path
              d="M0,30 C10,28 15,22 20,18 C25,14 30,25 40,20 C50,15 60,10 70,8 C80,6 90,10 100,5"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Area under primary line */}
            <path
              d="M0,30 C10,28 15,22 20,18 C25,14 30,25 40,20 C50,15 60,10 70,8 C80,6 90,10 100,5 L100,40 L0,40 Z"
              fill="url(#blueGradient)"
              opacity="0.2"
            />

            {/* Secondary comparison line */}
            <path
              d="M0,35 C10,34 20,32 30,30 C40,28 50,25 60,28 C70,31 80,25 90,20 C95,17 100,15 100,15"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="2,2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="blueGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Time period selection */}
        <div className="flex justify-between mt-6 border-t border-gray-100 pt-4">
          <button className="text-gray-500 text-sm">1M</button>
          <button className="text-gray-500 text-sm">3M</button>
          <button className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
            1Y
          </button>
          <button className="text-gray-500 text-sm">3Y</button>
          <button className="text-gray-500 text-sm">5Y</button>
          <button className="text-gray-500 text-sm">All</button>
        </div>
      </div>
    </div>
  );
};
