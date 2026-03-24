import Link from "next/link";
import React from "react";

type HeroButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const baseClassName =
  "inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-light-green/50 bg-light-green/22 px-8 py-3 text-sm font-semibold tracking-[0.08em] text-beige backdrop-blur-sm transition duration-300 hover:bg-light-green/34 sm:w-auto sm:px-10 sm:py-4 sm:text-base";

const HeroButton = ({ children, href, className = "" }: HeroButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={`${baseClassName} ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${baseClassName} ${className}`.trim()}>
      {children}
    </button>
  );
};

export default HeroButton;
