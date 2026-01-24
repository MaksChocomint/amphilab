"use client";

import Hero from "@/components/Main/Hero/Hero";
import Intro from "@/components/Main/Intro/IntroSection";

export default function Home() {
  return (
    <div className="snap-mandatory snap-y h-screen overflow-y-scroll">
      <div className="snap-start snap-always h-screen w-full">
        <Hero />
      </div>
      <Intro />
    </div>
  );
}
