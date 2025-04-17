"use client";
import React, { useState } from "react";
import { Section } from "./ui/Section";

// Define interface for form data
interface FormData {
  country: string;
  riskTolerance: string;
  dob: string;
  retirementAge: string;
  retirementIncome: string;
}

// Animation wrapper component
const AnimatedStep = ({
  children,
  isVisible,
}: {
  children: React.ReactNode;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`transition-opacity duration-700 ease-in-out w-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// Step 1: Experience Level Selection
const ExperienceStep = ({
  onNext,
  onSelect,
  currentSelection,
}: {
  onNext: () => void;
  onSelect: (level: string) => void;
  currentSelection: string;
}) => {
  const options = [
    {
      title: "Beginner",
      description: "New to investing and financial planning",
      value: "beginner",
    },
    {
      title: "Some Knowledge",
      description: "Familiar with basic investment concepts",
      value: "intermediate",
    },
    {
      title: "Experienced",
      description: "Well-versed in investment strategies and financial markets",
      value: "experienced",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h1 className="text-5xl font-bold mb-4 text-center">
        <div className="text-white">Welcome to</div>
        <div className="mt-2">
          <span className="text-white">Stellar</span>
          <span className="text-blue-500">Wealth</span>
        </div>
      </h1>
      <p className="text-center mb-10 text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
        Let&apos;s personalise your investment journey
      </p>

      {/* Progress Indicator - Step 1 active */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-1 bg-blue-500 rounded-full w-40"></div>
        <div className="h-1 bg-gray-700 rounded-full flex-1 mx-2"></div>
        <div className="h-1 bg-gray-700 rounded-full w-40"></div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-white">
        What&apos;s your investment experience level?
      </h2>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`p-5 rounded-xl cursor-pointer border-2 transition-all ${
              currentSelection === option.value
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-700 hover:border-blue-400"
            }`}
          >
            <h3 className="font-medium text-xl text-white">{option.title}</h3>
            <p className="text-base text-gray-400">{option.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!currentSelection}
        className={`w-full py-4 rounded-full font-medium transition-all text-lg ${
          currentSelection
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-700 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

// Step 2: Personal Details
const PersonalDetailsStep = ({
  onNext,
  onBack,
  formData,
  setFormData,
}: {
  onNext: () => void;
  onBack: () => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h1 className="text-5xl font-bold mb-4 text-center">
        <div className="text-white">Welcome to</div>
        <div className="mt-2">
          <span className="text-white">Stellar</span>
          <span className="text-blue-500">Wealth</span>
        </div>
      </h1>
      <p className="text-center mb-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
        Let&apos;s personalise your investment journey
      </p>

      {/* Progress Indicator - Step 1 complete, Step 2 active */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-1 bg-blue-500 rounded-full w-40"></div>
        <div className="h-1 bg-blue-500 rounded-full flex-1 mx-2"></div>
        <div className="h-1 bg-gray-700 rounded-full w-40"></div>
      </div>

      <div className="mb-6">
        <div className="font-medium mb-3 text-gray-300 text-lg">
          Country of Residence
        </div>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          {/* Add more countries as needed */}
        </select>
      </div>

      <div className="mb-6">
        <div className="font-medium mb-3 text-gray-300 text-lg">
          Investment Risk Tolerance
        </div>
        <select
          name="riskTolerance"
          value={formData.riskTolerance}
          onChange={handleChange}
          className="w-full p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          <option value="Conservative">
            Conservative - Lower risk, stable returns
          </option>
          <option value="Balanced">Balanced - Moderate risk and returns</option>
          <option value="Aggressive">
            Aggressive - Higher risk, potential for higher returns
          </option>
        </select>
        <p className="mt-2 text-base text-gray-400">
          This helps us tailor investment recommendations to your comfort level
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <div className="font-medium mb-3 text-gray-300 text-lg">
            Date of Birth
          </div>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>
        <div>
          <div className="font-medium mb-3 text-gray-300 text-lg">
            Target Retirement Age
          </div>
          <input
            type="number"
            name="retirementAge"
            value={formData.retirementAge}
            onChange={handleChange}
            className="w-full p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            min="40"
            max="100"
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="font-medium mb-3 text-gray-300 text-lg">
          Target Annual Retirement Income
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <span className="text-gray-400 text-lg">£</span>
          </div>
          <input
            type="number"
            name="retirementIncome"
            value={formData.retirementIncome}
            onChange={handleChange}
            className="w-full pl-10 p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            placeholder="35000"
          />
        </div>
        <p className="mt-2 text-base text-gray-400">
          How much annual income would you like in retirement?
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-full font-medium border border-gray-700 text-gray-300 hover:bg-gray-800 transition-all text-lg"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 py-4 rounded-full font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// Step 3: Asset Collection/Chat Interface
const AssetCollectionStep = ({
  onBack,
  onComplete,
}: {
  onBack: () => void;
  onComplete: () => void;
}) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [collectedAssets, setCollectedAssets] = useState<
    Array<{
      name: string;
      type: string;
      value: number;
    }>
  >([
    {
      name: "Vanguard S&P 500",
      type: "Stock",
      value: 10000,
    },
    {
      name: "UK Government Bonds",
      type: "Bond",
      value: 5000,
    },
    {
      name: "iShares FTSE 100",
      type: "ETF",
      value: 7500,
    },
    {
      name: "London Property",
      type: "Real Estate",
      value: 250000,
    },
  ]);
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hi! I'll help you list your assets. Let's start with any savings accounts or cash you have. Please tell me about your cash holdings, including the currency and interest rate.",
    },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { role: "user", content: message }]);

    // Simulate AI response with more engaging demo responses
    setTimeout(() => {
      let response;
      let newAsset = null;

      if (message.toLowerCase().includes("cash")) {
        response =
          "Great! I've noted your cash holdings. Do you have any investments in stocks or mutual funds?";
        newAsset = { name: "Cash Savings", type: "Cash", value: 15000 };
      } else if (message.toLowerCase().includes("stock")) {
        response =
          "I've recorded your stock investments. How about any bonds or fixed-income securities?";
        newAsset = { name: "Tesla Stock", type: "Stock", value: 5000 };
      } else if (message.toLowerCase().includes("bond")) {
        response =
          "Perfect, I've added your bond holdings. Do you have any real estate investments?";
        newAsset = { name: "Corporate Bonds", type: "Bond", value: 8000 };
      } else if (message.toLowerCase().includes("real estate")) {
        response =
          "I've noted your real estate investments. Any cryptocurrency or alternative investments?";
        newAsset = {
          name: "Investment Property",
          type: "Real Estate",
          value: 180000,
        };
      } else {
        response =
          "I understand. Would you like to tell me about any other investments you have?";
      }

      if (newAsset) {
        setCollectedAssets((prev) => [...prev, newAsset]);
      }

      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
      setMessage("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h1 className="text-5xl font-bold mb-4 text-center">
        <div className="text-white">Welcome to</div>
        <div className="mt-2">
          <span className="text-white">Stellar</span>
          <span className="text-blue-500">Wealth</span>
        </div>
      </h1>
      <p className="text-center mb-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
        Let&apos;s personalise your investment journey
      </p>

      {/* Progress Indicator - All steps complete */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-1 bg-blue-500 rounded-full w-40"></div>
        <div className="h-1 bg-blue-500 rounded-full flex-1 mx-2"></div>
        <div className="h-1 bg-blue-500 rounded-full w-40"></div>
      </div>

      <div className="bg-[#1c1c1c] rounded-xl border border-gray-700 mb-8">
        {/* Fixed Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">Your Assets</h2>
              <p className="text-sm text-gray-400">
                Overview of your portfolio
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 max-h-[50vh] overflow-y-auto">
          {/* Display collected assets */}
          {collectedAssets.length > 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {collectedAssets.map((asset, index) => (
                  <div
                    key={index}
                    className="bg-[#2a2a2a] p-4 rounded-xl border border-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          {asset.type === "Stock" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-400"
                            >
                              <path d="M3 3v18h18"></path>
                              <path d="m19 9-5 5-4-4-3 3"></path>
                            </svg>
                          )}
                          {asset.type === "Bond" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-400"
                            >
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="3"
                                rx="2"
                              ></rect>
                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                              <path d="M12 18V6"></path>
                            </svg>
                          )}
                          {asset.type === "ETF" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-400"
                            >
                              <path d="M2 16V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"></path>
                              <path d="M12 20v2"></path>
                              <path d="M12 14v2"></path>
                              <path d="M12 8v2"></path>
                              <path d="M12 2v2"></path>
                            </svg>
                          )}
                          {asset.type === "Real Estate" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-400"
                            >
                              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          )}
                          {asset.type === "Cash" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-400"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
                              <path d="M12 18V6"></path>
                            </svg>
                          )}
                          {![
                            "Stock",
                            "Bond",
                            "ETF",
                            "Real Estate",
                            "Cash",
                          ].includes(asset.type) && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-400"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
                              <path d="M12 18V6"></path>
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            {asset.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {asset.type}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">
                          £{asset.value.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-700 my-6"></div>

          {/* Chat History */}
          <div className="space-y-4 mb-6">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${
                  msg.role === "user"
                    ? "bg-blue-500/10 text-blue-400 ml-8"
                    : "bg-[#2a2a2a] text-gray-300 mr-8 border border-gray-700"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Footer with Input */}
        <div className="border-t border-gray-700 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tell me about your assets..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-5 pr-16 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
                    width="24"
                    height="24"
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

      <div className="flex gap-4 mt-8">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-full font-medium border border-gray-700 text-gray-300 hover:bg-gray-800 transition-all text-lg"
        >
          Back
        </button>
        <button
          onClick={onComplete}
          className="flex-1 py-4 rounded-full font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all text-lg"
        >
          Skip to Dashboard
        </button>
      </div>
    </div>
  );
};

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [experienceLevel, setExperienceLevel] = useState("");
  const [formData, setFormData] = useState<FormData>({
    country: "United Kingdom",
    riskTolerance: "Balanced",
    dob: "",
    retirementAge: "65",
    retirementIncome: "35000",
  });
  const [isVisible, setIsVisible] = useState(true);
  const [displayContent, setDisplayContent] = useState(1);

  const animateToNextStep = (newStep: number) => {
    // First fade out
    setIsVisible(false);

    // After fade out completes, change content and fade in
    setTimeout(() => {
      setStep(newStep);
      setDisplayContent(newStep);
      setIsVisible(true);
    }, 300);
  };

  const nextStep = () => {
    animateToNextStep(step + 1);
  };

  const prevStep = () => {
    animateToNextStep(step - 1);
  };

  const handleComplete = () => {
    // First fade out
    setIsVisible(false);

    // After fade out completes, redirect
    setTimeout(() => {
      console.log("Form submitted:", { experienceLevel, ...formData });
      window.location.href = "/dashboard";
    }, 300);
  };

  // Render the appropriate content based on displayContent (not step)
  const renderContent = () => {
    switch (displayContent) {
      case 1:
        return (
          <ExperienceStep
            onNext={nextStep}
            onSelect={setExperienceLevel}
            currentSelection={experienceLevel}
          />
        );
      case 2:
        return (
          <PersonalDetailsStep
            onNext={nextStep}
            onBack={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <AssetCollectionStep onBack={prevStep} onComplete={handleComplete} />
        );
      default:
        return null;
    }
  };

  return (
    <Section
      background="dark"
      className="min-h-screen flex items-center justify-center py-0"
    >
      <div className="w-full flex items-center justify-center px-4 overflow-hidden mt-20 mb-10">
        <AnimatedStep isVisible={isVisible}>{renderContent()}</AnimatedStep>
      </div>
    </Section>
  );
};

export default SignupForm;
