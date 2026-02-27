import React, { useState } from "react";

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = children.length;

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-[200vh] md:h-[75vh]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div className="min-w-full box-border" key={index}>
            {child}
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 -translate-y-1/2 text-[2rem] bg-transparent border-none cursor-pointer z-[1] text-white px-[10px] select-none left-[10px]"
        onClick={goToPrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 text-[2rem] bg-transparent border-none cursor-pointer z-[1] text-white px-[10px] select-none right-[10px]"
        onClick={goToNext}
      >
        &#10095;
      </button>

      <div className="text-center mt-[10px]">
        {children.map((_, index) => (
          <span
            key={index}
            className={`inline-block h-[10px] w-[10px] mx-[5px] rounded-full cursor-pointer ${
              index === activeIndex ? "bg-[#717171]" : "bg-[#bbb]"
            }`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
