"use client";

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

interface ValuePoint {
  date: string;
  value: number;
}

interface ValueHistoryGraphProps {
  history: ValuePoint[];
  currency: string;
}

export default function ValueHistoryGraph({
  history,
  currency,
}: ValueHistoryGraphProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update container width when window resizes
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial update
    updateWidth();

    // Add resize observer for more reliable width updates
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      // Fallback to window resize
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  // Create/update chart when data or container size changes
  useEffect(() => {
    if (
      !history ||
      history.length === 0 ||
      !chartRef.current ||
      containerWidth === 0
    ) {
      return;
    }

    // Sort history by date
    const sortedHistory = [...history].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Format dates for display
    const formattedDates = sortedHistory.map((point) => {
      const date = new Date(point.date);
      return date.toLocaleDateString("en-GB", {
        month: "short",
        day: "numeric",
      });
    });

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const currencySymbol = currency === "GBP" ? "£" : "$";

    // Calculate max ticks based on container width
    const maxTicks = Math.max(2, Math.min(6, Math.floor(containerWidth / 60)));

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: formattedDates,
        datasets: [
          {
            label: "Value",
            data: sortedHistory.map((point) => point.value),
            borderColor: "#38bdf8",
            backgroundColor: "rgba(56, 189, 248, 0.1)",
            borderWidth: 2,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: "#38bdf8",
            pointRadius: 3,
            pointHoverRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 5,
            right: 10,
            top: 10,
            bottom: 5,
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend to save space
          },
          tooltip: {
            backgroundColor: "#1c1c1c",
            titleColor: "#ffffff",
            bodyColor: "#e5e7eb",
            borderColor: "#374151",
            borderWidth: 1,
            padding: 8,
            displayColors: false,
            callbacks: {
              label: function (context) {
                const value = context.parsed.y;
                return `${currencySymbol}${value.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Hide grid lines for cleaner look
            },
            ticks: {
              color: "#9ca3af",
              font: {
                size: 10, // Smaller font for x-axis
              },
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: maxTicks, // Dynamic based on container width
            },
          },
          y: {
            grid: {
              color: "rgba(75, 85, 99, 0.1)",
            },
            ticks: {
              color: "#9ca3af",
              font: {
                size: 10, // Smaller font for y-axis
              },
              callback: function (value) {
                if (typeof value === "number") {
                  return (
                    currencySymbol +
                    value.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })
                  );
                }
                return value;
              },
              maxTicksLimit: 5, // Limit the number of ticks
            },
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [history, currency, containerWidth]);

  if (!history || history.length === 0) {
    return (
      <div className="text-gray-400 text-sm py-4">
        No historical data available
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">Value History</h3>
        <div className="text-sm text-blue-400">
          {currency === "GBP" ? "£" : "$"}
          <span className="ml-1">Value</span>
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative w-full max-w-full h-[180px] bg-[#242424] rounded-lg p-2 overflow-hidden"
      >
        <canvas ref={chartRef} width="100%" height="100%" />
      </div>
    </div>
  );
}
