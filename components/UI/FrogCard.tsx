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
    <div className="relative inline-block w-full max-w-[460px]">
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
          className="h-auto w-16 sm:w-20 md:w-24"
          style={{
            transform: isFrogRight ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </div>

      <div
        className={`border ${borderColorClass} relative rounded-[2rem] sm:rounded-4xl`}
        style={{
          backgroundColor: "rgba(38, 38, 38, 0.2)",
        }}
      >
        <div className="px-5 py-4 sm:px-8 sm:py-3">{children}</div>
      </div>
    </div>
  );
};

export default FrogCard;
