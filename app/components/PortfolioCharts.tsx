"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

// Common chart options
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#fff",
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#fff",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#fff",
      },
    },
  },
};

export const PortfolioValueChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Portfolio Value",
        data: [
          800000, 850000, 900000, 875000, 925000, 1000000, 1026481, 1050000,
          1075000, 1100000, 1150000, 1200000,
        ],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
      },
    ],
  };

  return <Line options={commonOptions} data={data} />;
};

export const PortfolioDistributionChart = () => {
  const data = {
    labels: ["Stocks", "Bonds", "Real Estate", "Cash", "Commodities"],
    datasets: [
      {
        data: [45, 25, 15, 10, 5],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(147, 51, 234, 0.8)",
          "rgba(236, 72, 153, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(249, 115, 22, 0.8)",
        ],
        borderColor: "rgba(255, 255, 255, 0.1)",
      },
    ],
  };

  const options = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      legend: {
        ...commonOptions.plugins.legend,
        position: "right" as const,
      },
    },
  };

  return <Pie options={options} data={data} />;
};

export const HistoricalReturnsChart = () => {
  const data = {
    labels: [
      "ARCI",
      "VUAG",
      "VJAM",
      "V3AM",
      "Home",
      "3 Small Lane",
      "Lake Share",
    ],
    datasets: [
      {
        label: "Annual Return %",
        data: [5.8, 6.7, 3.2, 6.5, 6.2, 4.8, 5.5],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={commonOptions} data={data} />;
};

export const RetirementProjectionChart = () => {
  const generateProjectionData = () => {
    const years = Array.from({ length: 30 }, (_, i) => 2024 + i);
    const pensionData = Array.from({ length: 30 }, (_, i) => {
      if (i < 13) {
        return 800000 + i * 50000;
      } else {
        return 1200000 - (i - 13) * 30000;
      }
    });
    const personalData = Array.from(
      { length: 30 },
      (_, i) => 600000 - i * 15000
    );

    return { years, pensionData, personalData };
  };

  const { years, pensionData, personalData } = generateProjectionData();

  const data = {
    labels: years,
    datasets: [
      {
        label: "Pension Assets",
        data: pensionData,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
      },
      {
        label: "Personal Assets",
        data: personalData,
        borderColor: "rgb(236, 72, 153)",
        backgroundColor: "rgba(236, 72, 153, 0.5)",
        tension: 0.4,
      },
    ],
  };

  return <Line options={commonOptions} data={data} />;
};

export const RetirementIncomeChart = () => {
  const data = {
    labels: Array.from({ length: 25 }, (_, i) => 2037 + i),
    datasets: [
      {
        label: "Fixed Income",
        data: Array.from({ length: 25 }, () => 80000),
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        stack: "Stack 0",
      },
      {
        label: "Pension Income",
        data: Array.from({ length: 25 }, () => 42415),
        backgroundColor: "rgba(236, 72, 153, 0.8)",
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    ...commonOptions,
    scales: {
      ...commonOptions.scales,
      x: {
        ...commonOptions.scales.x,
        stacked: true,
      },
      y: {
        ...commonOptions.scales.y,
        stacked: true,
      },
    },
  };

  return <Bar options={options} data={data} />;
};
