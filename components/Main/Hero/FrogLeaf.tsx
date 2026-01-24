"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FrogLeaf = () => {
  return (
    <motion.div
      initial={{ x: 400, y: -200, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.6,
        ease: "easeOut",
      }}
      className="absolute top-15 right-0 z-20"
    >
      <Image
        src="/hero/hero_frog_leaf.png"
        alt="Лист с лягушкой"
        width={800}
        height={800}
        priority
      />
    </motion.div>
  );
};

export default FrogLeaf;
