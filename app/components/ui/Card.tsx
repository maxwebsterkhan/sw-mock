import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  withGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  withGlow = false,
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-[#121212] to-[#090909] rounded-xl p-8 border border-gray-800 transition-all relative ${className}`}
      style={{
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.4), 0 10px 15px rgba(0,0,0,0.25), inset 0 1px 0 0 rgba(255,255,255,0.1)",
      }}
    >
      {withGlow && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl blur-xl opacity-50 -z-10"></div>
      )}
      {children}
    </div>
  );
};

export interface IconContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform -translate-y-1 ${className}`}
    >
      <div className="text-white filter drop-shadow-xl transform scale-110">
        {children}
      </div>
    </div>
  );
};

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "h-10 px-5 font-inter font-medium text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex items-center justify-center gap-2";

  const variantStyles =
    variant === "primary"
      ? "text-white bg-[#0b0a0a] hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]"
      : "text-white border border-white/20 hover:border-white hover:text-black hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};
