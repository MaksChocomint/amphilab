import React from "react";

const Background = ({
  children,
  bgImage,
}: {
  children: React.ReactNode;
  bgImage: string;
}) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default Background;
