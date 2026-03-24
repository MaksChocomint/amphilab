"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const Leaf = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ x: -260, y: 160, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration: 1.1,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none absolute bottom-[-2vw] left-[-18vw] z-10 w-[78vw] max-w-[24rem] sm:bottom-[1vw] sm:left-[-10vw] sm:w-[58vw] sm:max-w-[30rem] lg:bottom-[-1rem] lg:left-[-4rem] lg:w-[34vw] lg:max-w-[38rem]"
    >
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -12, 0],
                rotate: [-3, 0, -3],
                scale: [1, 1.03, 1],
              }
        }
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/hero/hero_leaf.png"
          alt="Лист"
          width={741}
          height={802}
          priority
          className="h-auto w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Leaf;
