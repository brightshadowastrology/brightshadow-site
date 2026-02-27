import React from "react";
import { useState, useRef, useEffect } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}

const FadeInSection: React.FC<FadeInSectionProps> = (props) => {
  const { children, customStyle } = props;
  const domRef = useRef<HTMLDivElement>(null);

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        if (domRef.current) {
          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      }
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`flex w-full transition-opacity duration-500 delay-[250ms] [will-change:opacity,visibility] ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={customStyle}
    >
      {children}
    </div>
  );
};
export default FadeInSection;
