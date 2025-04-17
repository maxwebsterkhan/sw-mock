import React from "react";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "dark" | "light";
  withSlantedDivider?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  background = "dark",
  withSlantedDivider = false,
}) => {
  const bgColor = background === "dark" ? "bg-[#0b0a0a]" : "bg-[#f6f9fc]";
  const textColor = background === "dark" ? "text-white" : "text-[#0f172a]";

  // Check if py-0 is included in className
  const hasPyZero = className.includes("py-0");
  const hasPt = className.includes("pt-");
  const hasPb = className.includes("pb-");

  // Apply default padding only if custom padding is not specified
  const paddingY = hasPyZero || (hasPt && hasPb) ? "" : "pt-24 pb-24";

  return (
    <div className={`relative ${className}`}>
      {withSlantedDivider && (
        <div
          className="absolute top-0 left-0 w-full h-[150px] bg-[#f6f9fc]"
          style={{
            clipPath: "polygon(0% 100%, 100% 25%, 100% 100%)",
            marginTop: "-149px",
            zIndex: 5,
          }}
        ></div>
      )}

      <div className={`${bgColor} ${paddingY} relative ${textColor}`}>
        <div className="px-10 w-full">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export interface TwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  reversed?: boolean;
  className?: string;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftContent,
  rightContent,
  reversed = false,
  className = "",
}) => {
  const content = [
    <div key="left" className="flex flex-col justify-center">
      {leftContent}
    </div>,
    <div key="right" className="relative">
      {rightContent}
    </div>,
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${className}`}>
      {reversed ? content.reverse() : content}
    </div>
  );
};
