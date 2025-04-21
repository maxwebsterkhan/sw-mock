"use client";
import React from "react";
import { Zap, Brain, Layers, ArrowRight } from "lucide-react";
import { FadeIn, AnimatedTextLine } from "../utils/animations";
import { TwoColumnLayout } from "./ui/Section";

const AIAdvisorSection = () => {
  return (
    <div className="relative bg-[#0b0a0a] text-white py-24">
      {/* Top curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-[100px] bg-[#f6f9fc]"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 30%)",
            marginTop: "-1px",
            zIndex: 5,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-10 relative z-10">
        <TwoColumnLayout
          leftContent={
            <div>
              <FadeIn direction="up" delay={0.1}>
                <div className="text-blue-500 font-medium mb-4">
                  Expert Guidance
                </div>
                <div className="font-inter font-bold mb-8">
                  <AnimatedTextLine
                    text="Personalized Financial Advice"
                    className="text-4xl md:text-5xl"
                    delay={0}
                    gradient={true}
                  />
                </div>
                <p className="text-lg text-gray-300 max-w-xl mb-12 leading-relaxed">
                  Get personalized financial guidance powered by advanced AI
                  that understands your unique situation. Our advisor analyzes
                  your portfolio, goals, and market conditions to help you make
                  smarter financial decisions.
                </p>
              </FadeIn>

              <div className="flex items-center mb-16">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all mr-6 flex items-center group">
                  Get started{" "}
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </button>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all flex items-center group"
                >
                  Learn more{" "}
                  <ArrowRight
                    size={14}
                    className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          }
          rightContent={
            <div className="bg-[#1c1c1c] rounded-xl p-8 border border-gray-800 shadow-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col min-h-[240px]">
                  <div>
                    <div className="bg-yellow-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Zap size={28} className="text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      AI Financial Advisor
                    </h3>
                    <p className="text-gray-300 text-sm mb-6">
                      Provides rapid insights and personalized recommendations
                      for your day-to-day financial decisions.
                    </p>
                  </div>
                  <div className="text-yellow-400 text-xs font-semibold mt-auto">
                    For everyday decisions
                  </div>
                </div>

                <div className="flex-1 flex flex-col min-h-[240px]">
                  <div>
                    <div className="bg-green-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Brain size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Deep Thinking AI</h3>
                    <p className="text-gray-300 text-sm mb-6">
                      Performs complex market analysis and processes extensive
                      historical data for strategic investment decisions.
                    </p>
                  </div>
                  <div className="text-green-400 text-xs font-semibold mt-auto">
                    For major investment choices
                  </div>
                </div>

                <div className="flex-1 flex flex-col min-h-[240px]">
                  <div>
                    <div className="bg-rose-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Layers size={28} className="text-rose-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Fine-tuned AI</h3>
                    <p className="text-gray-300 text-sm mb-6">
                      Adapts to your personal financial habits and preferences
                      over time, becoming more accurate with each interaction.
                    </p>
                  </div>
                  <div className="text-rose-400 text-xs font-semibold mt-auto">
                    Continuously improving
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 pt-16 border-t border-gray-800/30">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-[#1c1c1c] rounded-xl p-6 h-full min-h-[130px] flex flex-col justify-between">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-gray-400">
                Always available financial guidance and support
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="bg-[#1c1c1c] rounded-xl p-6 h-full min-h-[130px] flex flex-col justify-between">
              <div className="text-4xl font-bold text-white">93%</div>
              <div className="text-gray-400">
                of users report improved financial confidence
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="bg-[#1c1c1c] rounded-xl p-6 h-full min-h-[130px] flex flex-col justify-between">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="text-gray-400">
                years of market data analyzed for each recommendation
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl"></div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-[100px] bg-[#0a2540]"
          style={{
            clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 40%)",
            marginBottom: "-1px",
            zIndex: 5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default AIAdvisorSection;
