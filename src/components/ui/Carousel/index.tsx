import React, { useEffect, useState } from "react";

type PropsType = {
  children?: React.ReactNode;
  classname?: string;
  link?: string;
};

const Carousel = (props: PropsType) => {
  const { children, classname } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const childArray = React.Children.toArray(children);

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? childArray.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === childArray.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 10000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentImageIndex, goToNext]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative md:w-auto flex border border-solid border-blue-300 ">
      {isLoading && <div className="carousel-loading"></div>}
      <div
        className={`carousel rounded-sm ${
          isLoading ? "animate-pulse" : "overflow-hidden"
        } relative h-1/2 `}
      >
        <div
          className="slider flex"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {childArray.map((child, index) => (
            <div
              key={index}
              className="w-full h-1/2 flex-shrink-0 aspect-video group relative transition ease-in-out duration-300 justify-center align-middle"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {childArray.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? "bg-teal-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
