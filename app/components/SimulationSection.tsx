"use client";
import React from "react";
import { GitBranch, TrendingUp, BarChart } from "lucide-react";
import { FadeIn } from "../utils/animations";
import { TwoColumnLayout } from "./ui/Section";

const SimulationSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white py-24 overflow-hidden">
      {/* Top curve - matches AIAdvisorSection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-[100px] bg-[#0b0a0a]"
          style={{
            clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
            marginTop: "-99px",
            zIndex: 5,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-10 relative z-10">
        <TwoColumnLayout
          leftContent={
            <div>
              <FadeIn direction="up" delay={0.1}>
                <div className="text-white/90 font-medium mb-4">
                  Investment Tools
                </div>
                <h2 className="font-inter font-bold text-4xl md:text-5xl mb-8 text-white">
                  Investment Simulations for Financial Freedom
                </h2>
                <p className="text-lg text-white/80 max-w-xl mb-12 leading-relaxed">
                  Test different investment strategies with our sophisticated
                  simulation tools before committing your money. Visualize
                  potential outcomes based on your risk tolerance, time horizon,
                  and financial goals.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 pt-10 border-t border-white/30">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      15+
                    </div>
                    <div className="text-white/70 text-sm">
                      investment strategies to simulate and compare
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      30yr
                    </div>
                    <div className="text-white/70 text-sm">
                      projection horizon for long-term planning
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      3
                    </div>
                    <div className="text-white/70 text-sm">
                      risk profiles to match your comfort level
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      100%
                    </div>
                    <div className="text-white/70 text-sm">
                      personalized to your financial situation
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          }
          rightContent={
            <div className="relative h-full flex items-center justify-center">
              <FadeIn direction="up" delay={0.3}>
                <div className="relative w-full h-full flex flex-col justify-center gap-6">
                  {/* Conservative card */}
                  <div className="ml-auto bg-[#1c1c1c] rounded-xl p-4 shadow-lg shadow-gray-900/20 w-48 transform rotate-2">
                    <div className="text-blue-400 text-xs font-semibold mb-1">
                      Conservative
                    </div>
                    <div className="text-white text-lg font-bold">
                      $1,258,000
                    </div>
                    <div className="text-green-400 text-xs">+4.2%</div>
                  </div>

                  {/* Aggressive card */}
                  <div className="bg-[#1c1c1c] rounded-xl p-4 shadow-lg shadow-gray-900/20 w-48 transform -rotate-1">
                    <div className="text-blue-400 text-xs font-semibold mb-1">
                      Aggressive
                    </div>
                    <div className="flex items-center">
                      <BarChart size={14} className="text-blue-400 mr-1" />
                      <div className="text-white text-sm font-bold">
                        $2,104,000
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      30-year projection
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          }
        />

        <FadeIn direction="up" delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div className="bg-[#1c1c1c] rounded-xl p-8 border border-gray-800 flex items-start shadow-lg">
              <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mr-5 shrink-0">
                <TrendingUp size={28} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Risk Profile Comparison
                </h3>
                <p className="text-gray-300">
                  Compare how conservative, balanced, and aggressive investment
                  approaches might perform over time based on your specific
                  financial situation
                </p>
              </div>
            </div>
            <div className="bg-[#1c1c1c] rounded-xl p-8 border border-gray-800 flex items-start shadow-lg">
              <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mr-5 shrink-0">
                <GitBranch size={28} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Dashboard Projections
                </h3>
                <p className="text-gray-300">
                  View detailed projections in your dashboard that show
                  potential future portfolio values, income streams, and
                  retirement readiness
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-[100px] bg-[#0b0a0a]"
          style={{
            clipPath: "polygon(0% 0%, 100% 60%, 100% 100%, 0% 100%)",
            marginBottom: "-1px",
            zIndex: 5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SimulationSection;
