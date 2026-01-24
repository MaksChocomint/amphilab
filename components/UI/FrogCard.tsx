"use client";

import Image from "next/image";

interface FrogCardProps {
  children: React.ReactNode;
  borderColor?: "light-green" | "midnight-green";
  frogPosition?: "left" | "right";
}

const FrogCard = ({
  children,
  borderColor = "light-green",
  frogPosition = "left",
}: FrogCardProps) => {
  const borderColorClass =
    borderColor === "light-green"
      ? "border-light-green"
      : "border-midnight-green";

  const isFrogRight = frogPosition === "right";

  return (
    <div className="relative inline-block max-w-[460px]">
      {/* Лягушка на рамке */}
      <div
        className={`absolute -top-2 ${
          isFrogRight ? "right-0" : "left-0"
        } -translate-y-1/2 z-10`}
      >
        <Image
          src="/assets/frog.png"
          alt="Frog"
          width={100}
          height={100}
          style={{
            transform: isFrogRight ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </div>

      {/* Рамочка с контентом */}
      <div
        className={`border ${borderColorClass} relative rounded-4xl`}
        style={{
          backgroundColor: "rgba(38, 38, 38, 0.2)",
        }}
      >
        <div className="px-8 py-3">{children}</div>
      </div>
    </div>
  );
};

export default FrogCard;
