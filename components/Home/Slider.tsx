"use client";

import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const images = [
  "https://www.atyabalmarshoud.com/cdn/shop/files/LYCHEE_BACK_IN_STOCK__MOB.jpg?v=1716377556&width=450",
  "https://www.atyabalmarshoud.com/cdn/shop/files/ALL_IN_ALL_MOB_copy.jpg?v=1721889270&width=320",
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
      <div className="relative flex items-center justify-center h-[40vw] mb-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="w-full h-full absolute object-none"
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div
          className="top-[45%] right-2 absolute bg-white rounded-full p-[0.6vw] flex justify-center items-center select-none cursor-pointer font-bold text-base lg:text-xl md:text-lg z-20 hover:scale-105 transition-all ease-in-out"
          onClick={() => paginate(1)}
        >
          <IoIosArrowForward />
        </div>
        <div
          className="top-[45%] left-2 absolute bg-white rounded-full p-[0.6vw] flex justify-center items-center select-none cursor-pointer font-bold text-base lg:text-xl md:text-lg z-20 hover:scale-105 transition-all ease-in-out"
          onClick={() => paginate(-1)}
        >
          <IoIosArrowBack />
        </div>
      </div>
  );
};

export default Slider;
