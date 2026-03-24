import React from "react";

const HeroButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full cursor-pointer rounded-full border border-light-green/50 bg-light-green/22 px-8 py-3 text-sm font-semibold tracking-[0.08em] text-beige backdrop-blur-sm transition duration-300 hover:bg-light-green/34 sm:w-auto sm:px-10 sm:py-4 sm:text-base">
      {children}
    </button>
  );
};

export default HeroButton;
