import Background from "@/components/UI/Background";
import HeroButton from "@/components/UI/HeroButton";
import Leaf from "./Leaf";
import FrogLeaf from "./FrogLeaf";
import Frog from "./Frog";
import InfoCard from "./InfoCard";

const Hero = () => {
  return (
    <Background bgImage="/hero/hero_background.webp">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,21,14,0.18)_0%,rgba(6,21,14,0.38)_32%,rgba(6,21,14,0.82)_100%)]" />

      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="relative z-40 mx-auto flex min-h-screen w-full max-w-[1480px] flex-col px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-12">
          <div className="relative flex flex-1 flex-col">
            <div className="relative mx-auto flex w-full max-w-[44rem] flex-1 flex-col items-center justify-center text-center">
              <h2 className="mb-4 text-base font-light sm:text-xl lg:mb-6 lg:text-2xl">
                Мы изучаем жизнь лягушек
              </h2>
              <h1 className="mb-3 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                AmphiLab
              </h1>
              <h3 className="mb-8 max-w-[32rem] text-base font-semibold text-rosy-brown sm:text-lg lg:mb-12 lg:text-xl">
                от тропических джунглей до северных болот
              </h3>

              <div className="flex w-full max-w-[24rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 lg:gap-8">
                <HeroButton>Исследования</HeroButton>
                <HeroButton>Виды лягушек</HeroButton>
              </div>

              <div className="mt-8 flex w-full flex-col gap-4 lg:hidden">
                <InfoCard
                  delay={1.2}
                  frogPosition="left"
                  className="w-full max-w-[22rem] self-start"
                >
                  Мы объединяем <b>биологию, экологию и современные технологии</b>, чтобы
                  лучше понять амфибий и сохранить их будущее
                </InfoCard>

                <InfoCard
                  delay={1.35}
                  frogPosition="right"
                  className="w-full max-w-[22rem] self-end"
                >
                  <span className="font-bold">AmphiLab</span> — это научно-исследовательский
                  проект, посвящённый изучению <b>лягушек, их поведения, экосистем</b> и роли
                  в природе
                </InfoCard>
              </div>
            </div>

            <div className="pointer-events-none mt-auto hidden items-end justify-between gap-8 pb-20 lg:flex xl:pb-24">
              <InfoCard delay={1.7} frogPosition="left" className="max-w-[28rem]">
                Мы объединяем <b>биологию, экологию и современные технологии</b>, чтобы
                лучше понять амфибий и сохранить их будущее
              </InfoCard>

              <InfoCard delay={1.85} frogPosition="right" className="max-w-[28rem]">
                <span className="font-bold">AmphiLab</span> — это научно-исследовательский
                проект, посвящённый изучению <b>лягушек, их поведения, экосистем</b> и роли
                в природе
              </InfoCard>
            </div>
          </div>
        </div>

        <Leaf />
        <FrogLeaf />
        <Frog />
      </div>
    </Background>
  );
};

export default Hero;
