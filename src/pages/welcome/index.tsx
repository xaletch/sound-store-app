import { useCallback, useEffect, useState } from "react";

import { SlideOne, SlideThree, SlideTwo } from "@/widgets"

const SLIDES_COUNT = 3;

export const Welcome = () => {
  const [activeSlide, setActiveSlide] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev < SLIDES_COUNT - 1 ? prev + 1 : prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev < SLIDES_COUNT - 1 ? prev + 1 : prev));
  }, []);

  const handleClick = () => {
    if (activeSlide < SLIDES_COUNT - 1) {
      nextSlide();
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" onClick={handleClick}>
      <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-10">
        {[...Array(SLIDES_COUNT)].map((_, index) => (
          <div
            key={index}
            className="h-1 bg-[#7CC0AB]/30 bg-opacity-50 flex-grow rounded-full overflow-hidden"
          >
            <div
              className={`h-full bg-[#7CC0AB] rounded-full transition-all duration-[3s] ${
                index <= activeSlide ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>

      <div className="flex h-full transition-transform duration-500" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </div>
    </div>
  );
};
