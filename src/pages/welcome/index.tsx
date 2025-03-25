import { useEffect, useState } from "react";

import { SlideOne, SlideThree, SlideTwo } from "@/widgets"
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [<SlideOne />, <SlideTwo />, <SlideThree />];
const SLIDES_COUNT = SLIDES.length;

const slideVariants = {
  enter: { opacity: 0.5, scale: 1.2 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0.5, scale: 1, transition: { duration: 0.6, ease: "easeIn" } },
};

export const Welcome = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev < SLIDES_COUNT - 1 ? prev + 1 : prev));
    }, 3700);

    return () => clearInterval(interval);
  }, []);

  // переключение слайда
  // const nextSlide = useCallback(() => {
  //   setActiveSlide((prev) => (prev < SLIDES_COUNT - 1 ? prev + 1 : prev));
  // }, []);

  // const handleClick = () => {
  //   if (activeSlide < SLIDES_COUNT - 1) {
  //     nextSlide();
  //   }
  // };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-10">
        {[...Array(SLIDES_COUNT)].map((_, index) => (
          <div
            key={index}
            className="h-1 bg-[#7CC0AB]/30 bg-opacity-50 flex-grow rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-[#7CC0AB] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: index <= activeSlide ? "100%" : "0%" }}
              transition={{ duration: 4.2 }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full flex items-center justify-center"
        >
          {SLIDES[activeSlide]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
