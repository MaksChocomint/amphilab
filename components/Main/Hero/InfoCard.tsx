"use client";

import { motion } from "framer-motion";
import FrogCard from "@/components/UI/FrogCard";

interface InfoCardProps {
  children: React.ReactNode;
  delay: number;
  frogPosition?: "left" | "right";
}

const InfoCard = ({
  children,
  delay,
  frogPosition = "left",
}: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      <FrogCard borderColor="light-green" frogPosition={frogPosition}>
        <p className="text-xl font-light leading-relaxed">{children}</p>
      </FrogCard>
    </motion.div>
  );
};

export default InfoCard;
