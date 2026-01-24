"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Leaf = () => {
  return (
    <motion.div
      initial={{ x: -400, y: 200, opacity: 0 }}
      animate={{ x: 0, y: -50, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="absolute bottom-0 left-0 z-10"
    >
      <Image
        src="/hero/hero_leaf.png"
        alt="Лист"
        width={650}
        height={650}
        priority
      />
    </motion.div>
  );
};

export default Leaf;
