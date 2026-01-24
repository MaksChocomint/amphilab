import React from "react";

const HeroButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-light-green text-beige text-lg py-4 px-14 cursor-pointer">
      {children}
    </button>
  );
};

export default HeroButton;
