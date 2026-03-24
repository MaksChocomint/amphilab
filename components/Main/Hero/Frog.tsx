"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Frog = () => {
  const [zIndex, setZIndex] = useState(10);
  const floatDelay = 2.62;

  useEffect(() => {
    const timer = setTimeout(() => {
      setZIndex(30);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 240, x: 190, scale: 0.5, opacity: 0 }}
      animate={{
        y: [240, -90, 0],
        x: [190, 44, 0],
        scale: [0.5, 0.78, 1],
        opacity: [0, 1, 1],
      }}
      transition={{
        duration: 0.72,
        delay: 1.9,
        ease: "easeOut",
        times: [0, 0.4, 1],
      }}
      className="pointer-events-none absolute right-[-0.25rem] top-28 hidden w-[28vw] max-w-[11rem] sm:block md:right-3 md:top-30 md:max-w-[12rem] lg:right-[6rem] lg:top-[8.25rem] lg:max-w-[15.5rem] xl:right-[7.5rem] xl:top-[8.75rem] xl:max-w-[17.5rem]"
      style={{ zIndex }}
    >
      <motion.div
        animate={
          {
            y: [0, 10, 0],
            x: [0, -2, 0],
            rotate: [2, 0, 2],
            scale: [1, 1.015, 1],
          }
        }
        transition={{
          duration: 6.6,
          delay: floatDelay,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/hero/hero_frog.png"
          alt="Лягушка"
          width={500}
          height={500}
          priority
          className="h-auto w-full drop-shadow-[0_18px_24px_rgba(0,0,0,0.32)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Frog;
