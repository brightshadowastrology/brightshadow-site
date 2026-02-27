import React from "react";

interface CarouselSlideProps {
  caption?: React.ReactNode;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ caption }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-3/5 md:w-4/5 mx-auto bg-cover bg-center">
      {caption && <div className="flex flex-col justify-center items-center">{caption}</div>}
    </div>
  );
};

export default CarouselSlide;
