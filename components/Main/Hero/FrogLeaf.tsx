"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const FrogLeaf = () => {
  const prefersReducedMotion = useReducedMotion();
  const floatDelay = 2.62;

  return (
    <motion.div
      initial={{ x: 260, y: -180, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none absolute right-[-18vw] top-[-16vw] z-20 w-[86vw] max-w-[24rem] sm:right-[-10vw] sm:top-[-10vw] sm:w-[62vw] sm:max-w-[33rem] lg:right-[-2rem] lg:top-[-2rem] lg:w-[31vw] lg:max-w-[34rem]"
    >
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, 10, 0],
                rotate: [3, 0, 3],
                scale: [1, 1.025, 1],
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
          src="/hero/hero_frog_leaf.png"
          alt="Лист с лягушкой"
          width={874}
          height={1109}
          priority
          className="h-auto w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default FrogLeaf;
