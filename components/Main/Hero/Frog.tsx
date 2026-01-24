"use client";

import { motion, scale } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
const jumpVariants = {
  initial: { y: 100, opacity: 0, x: 0 },
  animate: {
    y: [100, -300, 0],
    x: [200, 50, 30],
    scale: [0.5, 0.7, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.6,
      delay: 2,
      ease: "easeOut",
      times: [0, 0.4, 1],
    },
  },
};
const Frog = () => {
  const [zIndex, setZIndex] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZIndex(30);
    }, 2300); // 1.5s delay + 1.2s duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={jumpVariants}
      initial="initial"
      animate="animate"
      className="absolute bottom-40 right-32"
      style={{ zIndex }}
    >
      <Image
        src="/hero/hero_frog.png"
        alt="Лягушка"
        width={500}
        height={500}
        priority
      />
    </motion.div>
  );
};

export default Frog;
