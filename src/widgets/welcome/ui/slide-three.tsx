import { useVisit } from "@/app/providers/visit-provider";
import { useNavigate } from "@tanstack/react-router"
import { motion } from "framer-motion";

const slideVariants = {
  enter: { opacity: 0, y: 50, scale: 1.05 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.6, ease: "easeIn" } },
};


export const SlideThree = () => {
  const navigate = useNavigate();
  const { setFirstVisit } = useVisit();

  const handleOpen = () => {
    localStorage.setItem('first-visit', 'true');
    setFirstVisit(false);
    navigate({ to: '/' });
  }

  return (
    <div className="w-full h-full pt-10">
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <h1 className="font-extrabold uppercase text-[#7cc0ab] 400:text-8xl text-7xl font-trap flex items-center justify-center">
            try
            <span className="font-extrabold text-[#1d1f22] text-2xl 400:text-3xl">free</span>
          </h1>
          <div className="mt-4 mx-4">
            <motion.h2 
              className="text-base text-center"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ delay: 0.2 }}
            >
              попробуй бесплатно
            </motion.h2>
            <motion.p 
              className="text-xs text-center mt-1"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ delay: 0.4 }}
            >
              окунись в мир музыки вместе с layer - бесплатно
            </motion.p>
            <motion.button 
              onClick={handleOpen} 
              className="cursor-pointer mt-8 w-full flex items-center justify-center uppercase text-[#e7e4dd] bg-[#1D1F22] rounded-full text-sm 400:text-base py-3 px-4"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ delay: 0.6 }}
            >
              открыть бот
            </motion.button>
          </div>
        </div>
        <img className="w-full" src="/image/slide-3.png" alt="slide-3" />
      </div>
    </div>
  )
}
