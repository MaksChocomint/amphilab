import Background from "@/components/UI/Background";
import HeroButton from "@/components/UI/HeroButton";
import Leaf from "./Leaf";
import FrogLeaf from "./FrogLeaf";
import Frog from "./Frog";
import InfoCard from "./InfoCard";

const Hero = () => {
  return (
    <Background bgImage="/hero/hero_background.webp">
      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center z-40 relative mb-40">
          <h2 className="font-light text-2xl mb-6">Мы изучаем жизнь лягушек</h2>
          <h1 className="font-bold text-7xl mb-2">AmphiLab</h1>
          <h3 className="font-bold text-xl text-rosy-brown mb-12">
            от тропических джунгей до северных болот
          </h3>
          <div className="flex gap-8 items-center justify-center">
            <HeroButton>Исследования</HeroButton>
            <HeroButton>Виды лягушек</HeroButton>
          </div>
        </div>
        <div className="absolute bottom-48 left-20 z-40">
          <InfoCard delay={2} frogPosition="left">
            Мы объединяем <b>биологию, экологию и современные технологии</b>,
            чтобы лучше понять амфибий и сохранить их будущее
          </InfoCard>
        </div>

        <div className="absolute bottom-48 right-36 z-40">
          <InfoCard delay={2} frogPosition="right">
            <span className="font-bold">AmphiLab</span> — это
            научно-исследовательский проект, посвящённый изучению{" "}
            <b>лягушек, их поведения, экосистем</b> и роли в природе
          </InfoCard>
        </div>

        {/* Анимированные элементы */}
        <Leaf />
        <FrogLeaf />
        <Frog />
      </div>
    </Background>
  );
};

export default Hero;
