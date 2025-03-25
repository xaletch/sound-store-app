import { Logo } from "@/shared/icons"
import { motion } from "framer-motion";

const slideVariants = {
  enter: { opacity: 0, y: 50, scale: 1.05 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.6, ease: "easeIn" } },
};

export const SlideOne = () => {
  return (
    <div className="w-full h-full">
      <div className="h-screen w-full bg-[url('/image/slide-1.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <div className="absolute text-[#e7e4dd] pt-82">
          <div className="">
            <motion.p
              className="text-[#e7e4dd] text-start text-xs mx-10"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              тысячи роялти фри сэмплов, миди, пресетов и fx. всё это в твоих руках. всё это на
            </motion.p>
            <motion.h1
              className="text-8xl text-center font-trap"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              layer
            </motion.h1>

            <motion.h2
              className="uppercase text-center text-[#7cc0ab] mt-6 font-trap font-extrabold"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              create your own sound
            </motion.h2>
          </div>
          <div className="mt-4 mx-10 flex items-center gap-4">
            <p className="text-[5px]">All rights reserved. No part of this publication may be reproduced, stored in a retrieval system or transmitted, in any form or by any means, electronic, mechanical, photocopying, recording or otherwise, without permission in writing from the publisher.</p>
            <div className="min-w-5 min-h-5"><Logo/></div>
          </div>
        </div>
      </div>
    </div>
  )
}
