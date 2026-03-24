"use client";

import { motion } from "framer-motion";
import FrogCard from "@/components/UI/FrogCard";

interface InfoCardProps {
  children: React.ReactNode;
  delay: number;
  frogPosition?: "left" | "right";
  className?: string;
}

const InfoCard = ({
  children,
  delay,
  frogPosition = "left",
  className = "",
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
      className={className}
    >
      <FrogCard borderColor="light-green" frogPosition={frogPosition}>
        <p className="text-base font-light leading-relaxed sm:text-lg xl:text-xl">
          {children}
        </p>
      </FrogCard>
    </motion.div>
  );
};

export default InfoCard;
