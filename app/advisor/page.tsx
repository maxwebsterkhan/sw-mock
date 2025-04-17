"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Plus, MessageSquare } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

export default function AdvisorPage() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hello! I'm your AI financial advisor. I can help you with:\n\n• Investment strategies\n• Retirement planning\n• Tax optimization\n• Portfolio analysis\n• Financial goal setting\n\nHow can I assist you today?",
    },
  ]);

  // Demo recent conversations
  const [recentConversations] = useState<Conversation[]>([
    {
      id: "1",
      title: "Retirement Planning Discussion",
      lastMessage: "Let's review your retirement goals",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      title: "Investment Strategy Review",
      lastMessage: "Portfolio diversification analysis",
      timestamp: "Yesterday",
    },
    {
      id: "3",
      title: "Tax Planning Session",
      lastMessage: "Tax-efficient investment options",
      timestamp: "2 days ago",
    },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    // Hide mobile sidebar if it's open when sending a message
    if (showMobileSidebar) {
      setShowMobileSidebar(false);
    }

    // Add user message
    setChatHistory((prev) => [...prev, { role: "user", content: message }]);

    // Simulate AI response
    setTimeout(() => {
      const demoResponses = [
        "Based on your investment goals and risk tolerance, I would recommend considering a diversified portfolio of low-cost index funds. This could include a mix of domestic and international stocks, as well as bonds for stability.",
        "Looking at your retirement planning, it's important to consider factors like your desired retirement age, expected lifestyle, and inflation. Have you started contributing to any retirement accounts?",
        "For tax optimization, there are several strategies we could explore. This might include maximizing your ISA allowance, pension contributions, or considering tax-efficient investment vehicles. Would you like to discuss any of these in detail?",
        "When analyzing your portfolio, I notice a good foundation in diversification. However, we might want to consider rebalancing to maintain your target asset allocation. What are your thoughts on this?",
      ];

      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            demoResponses[Math.floor(Math.random() * demoResponses.length)],
        },
      ]);

      setMessage("");
      setIsLoading(false);
    }, 1000);
  };

  const handleNewConversation = () => {
    setChatHistory([
      {
        role: "assistant",
        content:
          "👋 Hello! I'm your AI financial advisor. I can help you with:\n\n• Investment strategies\n• Retirement planning\n• Tax optimization\n• Portfolio analysis\n• Financial goal setting\n\nHow can I assist you today?",
      },
    ]);
    // Close sidebar on mobile after creating new conversation
    if (showMobileSidebar) {
      setShowMobileSidebar(false);
    }
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <main className="min-h-screen bg-[#0b0a0a] text-white flex flex-col">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0 mb-6 md:mb-12 mt-16 md:mt-24">
          <div className="space-y-1 md:space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 opacity-0 animate-fade-in">
              Chat with <span className="underline">your</span> personal
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent opacity-0 animate-fade-in-delay">
              AI Advisor
            </h2>
          </div>

          {/* Mobile sidebar toggle */}
          <button
            onClick={toggleMobileSidebar}
            className="md:hidden bg-[#1c1c1c] border border-gray-800 rounded-full p-3 self-start opacity-0 animate-fade-in-delay-2 flex items-center gap-2"
          >
            <MessageSquare size={20} />
            <span className="text-sm font-medium">
              {showMobileSidebar ? "Hide" : "Show"} Conversations
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                showMobileSidebar ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 opacity-0 animate-fade-in-delay-2">
          {/* Sidebar - Mobile (accordion) */}
          <div className="md:hidden mb-6">
            <div
              className={`bg-[#1c1c1c] rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 ${
                showMobileSidebar
                  ? "max-h-[80vh] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4">
                {/* New Conversation Button */}
                <button
                  onClick={handleNewConversation}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full p-3 flex items-center justify-center gap-2 mb-6 transition-all"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">New Conversation</span>
                </button>

                {/* Recent Conversations */}
                <div>
                  <h3 className="text-gray-400 font-medium text-sm mb-3 px-2">
                    RECENT CONVERSATIONS
                  </h3>
                  <div className="space-y-1">
                    {recentConversations.map((conv) => (
                      <button
                        key={conv.id}
                        className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        onClick={() => setShowMobileSidebar(false)}
                      >
                        <div className="flex items-start gap-3">
                          <MessageSquare className="w-5 h-5 text-gray-400 mt-1" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-300 truncate group-hover:text-white transition-colors">
                              {conv.title}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {conv.lastMessage}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {conv.timestamp}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Desktop */}
          <div className="hidden md:block md:col-span-3">
            <div className="bg-[#1c1c1c] rounded-xl border border-gray-800 p-4 sticky top-24">
              {/* New Conversation Button */}
              <button
                onClick={handleNewConversation}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full p-3 flex items-center justify-center gap-2 mb-6 transition-all"
              >
                <Plus className="w-5 h-5" />
                <span className="font-medium">New Conversation</span>
              </button>

              {/* Recent Conversations */}
              <div>
                <h3 className="text-gray-400 font-medium text-sm mb-3 px-2">
                  RECENT CONVERSATIONS
                </h3>
                <div className="space-y-1">
                  {recentConversations.map((conv) => (
                    <button
                      key={conv.id}
                      className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-gray-400 mt-1" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-300 truncate group-hover:text-white transition-colors">
                            {conv.title}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {conv.lastMessage}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {conv.timestamp}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-1 md:col-span-9">
            <div className="bg-[#1c1c1c] rounded-xl border border-gray-800 flex flex-col h-[calc(100vh-16rem)]">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="space-y-6">
                  {chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[90%] md:max-w-[80%] p-3 md:p-4 rounded-xl ${
                          msg.role === "user"
                            ? "bg-blue-500/10 text-blue-400 ml-4 md:ml-8"
                            : "bg-[#2a2a2a] text-gray-300 mr-4 md:mr-8 border border-gray-700"
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm md:text-base">
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="flex-shrink-0 border-t border-gray-800 p-3 md:p-4">
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask the chat..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 md:p-4 pr-12 md:pr-16 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-2 md:p-2.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {isLoading ? (
                        <svg
                          className="animate-spin h-4 w-4 md:h-5 md:w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="md:w-5 md:h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 14-7-7 14V12H5Z"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
