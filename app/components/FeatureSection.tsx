"use client";
import React from "react";
import { Eye, BarChart2, PieChart, ArrowRight } from "lucide-react";
import { FadeIn } from "../utils/animations";
import { Card, IconContainer, Button } from "./ui/Card";
import { Section, TwoColumnLayout } from "./ui/Section";
import { GraphVisualization } from "./ui/GraphVisualization";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  delay,
}) => {
  return (
    <FadeIn delay={delay} direction="up" distance={20}>
      <Card withGlow={true}>
        <IconContainer>{icon}</IconContainer>

        <h3 className="text-white text-xl font-bold mb-3 drop-shadow-md">
          {title}
        </h3>
        <p className="text-gray-300 text-base/relaxed">{description}</p>
      </Card>
    </FadeIn>
  );
};

const FeatureSection = () => {
  return (
    <Section background="light" withSlantedDivider={true}>
      <TwoColumnLayout
        className="mb-20"
        leftContent={
          <>
            <FadeIn direction="up" delay={0.1} className="mb-6">
              <h2 className="font-inter font-bold text-[#0f172a] text-4xl md:text-5xl">
                AI-Powered Portfolio Intelligence
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mb-8">
              <p className="text-[#334155] text-xl">
                Our advanced AI platform delivers comprehensive portfolio
                tracking and personalized investment advice to help you reach
                your financial goals
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Button className="group">
                Explore features
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Button>
            </FadeIn>
          </>
        }
        rightContent={
          <FadeIn direction="up" delay={0.3}>
            <GraphVisualization />
          </FadeIn>
        }
      />

      <FadeIn direction="up" delay={0.2} className="mb-12">
        <h2 className="font-inter font-semibold text-[#0f172a] text-3xl text-center mb-10">
          Portfolio Visualization
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Current Asset Dashboard"
          description="Visualize your entire investment portfolio in real-time. Track performance across all asset classes with our intuitive, comprehensive dashboard."
          icon={<Eye size={28} className="text-blue-400" />}
          delay={0.3}
        />
        <FeatureCard
          title="Future Projections"
          description="See where your investments are headed with AI-powered projections and scenario modeling. Make informed decisions based on data-driven forecasts."
          icon={<BarChart2 size={28} className="text-indigo-400" />}
          delay={0.6}
        />
        <FeatureCard
          title="Retirement Planning"
          description="Plan your path to retirement with confidence. Our AI analyzes your portfolio and helps you optimize for long-term financial security and growth."
          icon={<PieChart size={28} className="text-purple-400" />}
          delay={0.9}
        />
      </div>
    </Section>
  );
};

export default FeatureSection;
