"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  PortfolioValueChart,
  PortfolioDistributionChart,
  HistoricalReturnsChart,
  RetirementProjectionChart,
  RetirementIncomeChart,
} from "../components/PortfolioCharts";

export default function Dashboard() {
  const [activeMainTab, setActiveMainTab] = useState("Portfolio");
  const [activeSubTab, setActiveSubTab] = useState("Value");
  const [activeStatsTab, setActiveStatsTab] = useState("Portfolio");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long" as const,
      year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
    };
    setCurrentDate(date.toLocaleDateString("en-GB", options));
  }, []);

  const portfolioStats = [
    {
      title: "Net Worth",
      value: "£881,281",
      icon: "💰",
      color: "bg-orange-500",
    },
    {
      title: "Portfolio Value",
      value: "£1,026,481",
      icon: "📈",
      color: "bg-blue-500",
    },
    {
      title: "Total Assets",
      value: "10",
      icon: "📊",
      color: "bg-pink-500",
    },
    {
      title: "Risk Score",
      value: "72/100",
      icon: "🎯",
      color: "bg-emerald-500",
    },
  ];

  const retirementStats = [
    {
      title: "Years Until Retirement",
      value: "13",
      icon: "⏳",
      color: "bg-purple-500",
    },
    {
      title: "Personal Annual",
      value: "£0.00",
      icon: "💷",
      color: "bg-green-500",
    },
    {
      title: "Pension Annual",
      value: "£122,415",
      icon: "🏦",
      color: "bg-blue-500",
    },
    {
      title: "Target Progress",
      value: "68%",
      icon: "🎯",
      color: "bg-orange-500",
    },
  ];

  const advisors = [
    {
      name: "Sarah Johnson",
      role: "Financial Advisor",
      metric: "Portfolio Review",
      date: "02 Aug",
      color: "bg-orange-400",
      chart: "📈",
    },
    {
      name: "Michael Chen",
      role: "Investment Analyst",
      metric: "Risk Assessment",
      date: "27 July",
      color: "bg-violet-400",
      chart: "📊",
    },
    {
      name: "Emma Williams",
      role: "Wealth Manager",
      metric: "Asset Allocation",
      date: "27 July",
      color: "bg-teal-400",
      chart: "💰",
    },
  ];

  const portfolioSubTabs = [
    { id: "Value", label: "Portfolio Value Over Time" },
    { id: "Distribution", label: "Portfolio Distribution" },
    { id: "Returns", label: "Historical Returns" },
  ];

  const retirementSubTabs = [
    { id: "Assets", label: "Asset Values Over Time" },
    { id: "Income", label: "Income Breakdown" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0a0a] text-white">
      <Navigation />
      <div className="flex-grow overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0 mb-6 md:mb-12 mt-16 md:mt-24">
            <div className="space-y-1 md:space-y-3">
              <h1 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 opacity-0 animate-fade-in">
                Check your
              </h1>
              <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent opacity-0 animate-fade-in-delay">
                Financial Health
              </h2>
            </div>

            {/* Date Display */}
            <div className="bg-[#1c1c1c] rounded-xl p-3 md:p-4 opacity-0 animate-fade-in-delay-2 self-start md:self-auto">
              <p className="text-xs md:text-sm text-gray-400 mb-1">Today</p>
              <p className="text-sm md:text-lg font-medium">{currentDate}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 opacity-0 animate-fade-in-delay-3">
            {/* Left Column - Portfolio Stats */}
            <div className="md:col-span-7">
              {/* Stats Tabs */}
              <div className="bg-[#1c1c1c] rounded-xl p-2 mb-4 overflow-x-auto">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveStatsTab("Portfolio")}
                    className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-medium ${
                      activeStatsTab === "Portfolio"
                        ? "bg-blue-500 text-white"
                        : "text-gray-400 hover:bg-[#2a2a2a]"
                    }`}
                  >
                    Portfolio Overview
                  </button>
                  <button
                    onClick={() => setActiveStatsTab("Retirement")}
                    className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-medium ${
                      activeStatsTab === "Retirement"
                        ? "bg-blue-500 text-white"
                        : "text-gray-400 hover:bg-[#2a2a2a]"
                    }`}
                  >
                    Retirement Planning
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {(activeStatsTab === "Portfolio"
                  ? portfolioStats
                  : retirementStats
                ).map((stat) => (
                  <div
                    key={stat.title}
                    className="bg-[#1c1c1c] rounded-xl p-3 md:p-4"
                  >
                    <div
                      className={`${stat.color} w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-3`}
                    >
                      <span className="text-base md:text-xl">{stat.icon}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-sm md:text-xl font-bold mt-1 truncate">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Advisor Cards */}
            <div className="md:col-span-5 mt-6 md:mt-0">
              {/* Advisor Cards */}
              <div className="space-y-3 md:space-y-4">
                {advisors.map((advisor) => (
                  <div
                    key={advisor.name}
                    className={`${advisor.color} rounded-xl p-3 md:p-4 flex items-center justify-between group cursor-pointer transform transition-all duration-200 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-base md:text-xl">👤</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">
                          {advisor.name}
                        </h4>
                        <p className="text-xs md:text-sm text-white/80">
                          {advisor.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm md:text-base">
                        {advisor.metric}
                      </p>
                      <p className="text-xs md:text-sm text-white/80">
                        {advisor.date}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-4 md:w-6 h-4 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Width Visualization Section */}
            <div className="md:col-span-12 mt-6">
              <div className="bg-[#1c1c1c] rounded-xl p-4 md:p-6">
                {/* Main Tabs */}
                <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-4 md:mb-6">
                  <button
                    onClick={() => {
                      setActiveMainTab("Portfolio");
                      setActiveSubTab("Value");
                    }}
                    className={`px-3 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium ${
                      activeMainTab === "Portfolio"
                        ? "bg-blue-500 text-white"
                        : "text-gray-400 hover:bg-[#2a2a2a]"
                    }`}
                  >
                    Portfolio Analysis
                  </button>
                  <button
                    onClick={() => {
                      setActiveMainTab("Retirement");
                      setActiveSubTab("Assets");
                    }}
                    className={`px-3 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap ${
                      activeMainTab === "Retirement"
                        ? "bg-blue-500 text-white"
                        : "text-gray-400 hover:bg-[#2a2a2a]"
                    }`}
                  >
                    Retirement Projection Analysis
                  </button>
                </div>

                {/* Sub Tabs and Controls Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-4 md:mb-6">
                  <div className="overflow-x-auto md:overflow-visible">
                    <div className="flex gap-2 md:gap-4 bg-[#2a2a2a] md:bg-transparent p-1 md:p-0 rounded-lg md:rounded-none">
                      {(activeMainTab === "Portfolio"
                        ? portfolioSubTabs
                        : retirementSubTabs
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveSubTab(tab.id)}
                          className={`px-3 md:px-4 py-1 md:py-2 rounded-md md:rounded-lg text-xs md:text-sm whitespace-nowrap font-medium ${
                            activeSubTab === tab.id
                              ? "bg-blue-500 md:bg-[#2a2a2a] text-white"
                              : "text-gray-400 hover:bg-[#3a3a3a] md:hover:bg-[#2a2a2a]"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Strategy Dropdown for Retirement */}
                  {activeMainTab === "Retirement" && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm text-gray-400">
                        Strategy:
                      </span>
                      <select className="bg-[#2a2a2a] border border-gray-700 md:border-transparent text-white text-xs md:text-sm rounded-lg px-2 py-1 md:px-3 md:py-2 outline-none">
                        <option>Blended Strategy</option>
                        <option>Conservative</option>
                        <option>Aggressive</option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="h-[300px] md:h-[600px] flex items-center justify-center bg-[#2a2a2a] rounded-lg p-2 md:p-6 overflow-hidden">
                  {activeMainTab === "Portfolio" ? (
                    <>
                      {activeSubTab === "Value" && <PortfolioValueChart />}
                      {activeSubTab === "Distribution" && (
                        <PortfolioDistributionChart />
                      )}
                      {activeSubTab === "Returns" && <HistoricalReturnsChart />}
                    </>
                  ) : (
                    <>
                      {activeSubTab === "Assets" && (
                        <RetirementProjectionChart />
                      )}
                      {activeSubTab === "Income" && <RetirementIncomeChart />}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
