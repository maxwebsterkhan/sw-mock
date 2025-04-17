"use client";
import React, { useState, useEffect } from "react";
import { AnimatedTextLine } from "../utils/animations";
import { Section, TwoColumnLayout } from "./ui/Section";
import Link from "next/link";

// Main Hero component
interface HeroProps {
  title1?: string;
  title2?: string;
  title3?: string;
}

const Hero: React.FC<HeroProps> = ({
  title1 = "Visualize",
  title2 = "Your Path",
  title3 = "to Financial Freedom",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const leftContent = (
    <>
      {/* Staggered title text */}
      <div className="font-inter font-extrabold mb-8">
        <AnimatedTextLine
          text={title1}
          className="text-5xl md:text-[68px] mb-1"
          delay={0}
        />
        <AnimatedTextLine
          text={title2}
          className="text-5xl md:text-[68px] mb-1"
          delay={0.2}
        />
        <AnimatedTextLine
          text={title3}
          className="text-5xl md:text-[68px]"
          delay={0.4}
        />
      </div>

      {/* Subtext */}
      <div className="mt-8 mb-8">
        <AnimatedTextLine
          text="Join thousands of investors who trust our platform"
          className="text-2xl text-gray-300"
          delay={0.6}
        />
        <AnimatedTextLine
          text="for their wealth management and financial growth."
          className="text-2xl text-gray-300"
          delay={0.8}
        />
      </div>

      {/* Get Started Button */}
      <div
        className="transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Link href="/signup">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-10 rounded-lg text-xl font-medium transition-colors duration-300 inline-flex items-center">
            Get Started
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
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </>
  );

  const rightContent = (
    <div
      className="hidden md:block relative overflow-visible"
      style={{ zIndex: 30 }}
    >
      {/* Container for floating UI elements */}
      <div
        className="absolute top-0 right-0 w-full"
        style={{ minHeight: "600px" }}
      >
        {/* First placeholder UI element */}
        <div
          className="absolute bg-white rounded-xl shadow-2xl p-6 w-[350px] h-[500px] transform transition-all duration-1000"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? "translateY(0) rotate(-2deg)"
              : "translateY(50px) rotate(-2deg)",
            right: "100px",
            top: "0",
          }}
        >
          {/* UI placeholder content */}
          <div className="bg-gray-100 w-full h-8 rounded-md mb-4"></div>
          <div className="bg-gray-200 w-4/5 h-4 rounded-md mb-4"></div>
          <div className="bg-gray-200 w-3/5 h-4 rounded-md mb-6"></div>

          <div className="bg-gray-100 w-full h-40 rounded-md mb-6"></div>

          <div className="bg-gray-200 w-full h-4 rounded-md mb-4"></div>
          <div className="bg-gray-200 w-4/5 h-4 rounded-md mb-4"></div>

          <div className="mt-auto">
            <div className="bg-blue-500 w-full h-12 rounded-md"></div>
          </div>
        </div>

        {/* Second placeholder UI element */}
        <div
          className="absolute bg-white rounded-xl shadow-2xl p-6 w-[350px] h-[400px] transform transition-all duration-1000 delay-500"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? "translateY(0) rotate(3deg)"
              : "translateY(80px) rotate(3deg)",
            right: "20px",
            top: "120px",
          }}
        >
          {/* UI placeholder content */}
          <div className="bg-gray-100 w-full h-32 rounded-md mb-6"></div>

          <div className="flex space-x-2 mb-4">
            <div className="bg-gray-200 w-1/3 h-10 rounded-md"></div>
            <div className="bg-gray-200 w-1/3 h-10 rounded-md"></div>
            <div className="bg-gray-200 w-1/3 h-10 rounded-md"></div>
          </div>

          <div className="bg-gray-300 w-full h-4 rounded-md mb-3"></div>
          <div className="bg-gray-300 w-3/4 h-4 rounded-md mb-6"></div>

          <div className="mt-auto">
            <div className="bg-green-500 w-full h-12 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Section background="dark" className="pt-32 pb-24">
      <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
    </Section>
  );
};

export default Hero;
