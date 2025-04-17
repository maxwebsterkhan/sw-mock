import React, { useEffect, useRef, useState } from "react";

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "none";
  distance?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "up",
  distance = 20,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  const getTransform = () => {
    if (direction === "none") return "";
    const translateY = direction === "up" ? distance : -distance;
    return isVisible ? "translateY(0)" : `translateY(${translateY}px)`;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export interface AnimatedTextLineProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedTextLine: React.FC<AnimatedTextLineProps> = ({
  text,
  className = "",
  delay = 0,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <p className="text-white relative">{text}</p>
      <div
        className="absolute top-0 right-0 bg-[#0b0a0a] opacity-65 h-full z-2"
        style={{
          width: isLoaded ? "0%" : "100%",
          transition: `width 1.5s ease-in-out ${delay}s`,
        }}
      ></div>
    </div>
  );
};

// Custom hook for scroll detection
export const useScrollDetection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we're at the top
      if (currentScrollY < 50) {
        setScrolled(false);
        setHidden(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Add background when not at the top
      setScrolled(true);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return { scrolled, hidden };
};
