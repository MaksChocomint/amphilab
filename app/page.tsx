import Hero from "@/components/Main/Hero/Hero";
import IntroSection from "@/components/Main/Intro/IntroSection";
import StoriesSection from "@/components/Main/Stories/StoriesSection";
import FooterSection from "@/components/Main/Footer/FooterSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-dark-green">
      <Hero />
      <IntroSection />
      <StoriesSection />
      <FooterSection />
    </main>
  );
}
