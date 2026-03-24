"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import FrogCard from "@/components/UI/FrogCard";

type CardColor = "light-green" | "midnight-green";
type FrogPosition = "left" | "right";

type CardContent = {
  text: string;
  borderColor: CardColor;
  frogPosition: FrogPosition;
  delay: number;
};

const cards = {
  habitat: {
    text: "Мы наблюдаем за жизненным циклом лягушек в лесах, болотах и тропиках, фиксируя их миграции и поведенческие паттерны.",
    borderColor: "midnight-green",
    frogPosition: "left",
    delay: 0.08,
  },
  climate: {
    text: "Исследуем кожу, дыхание и адаптацию к меняющемуся климату, чтобы вовремя защищать редкие и уязвимые виды.",
    borderColor: "light-green",
    frogPosition: "right",
    delay: 0.16,
  },
  ecosystem: {
    text: "Чувствительность амфибий к загрязнениям помогает нам отслеживать изменения экосистем задолго до критической точки.",
    borderColor: "midnight-green",
    frogPosition: "right",
    delay: 0.24,
  },
  archive: {
    text: "Создаём фото-, видео- и 3D-архивы, чтобы сохранить внешний вид и истории этих видов для будущих исследований.",
    borderColor: "light-green",
    frogPosition: "left",
    delay: 0.3,
  },
  mission: {
    text: "Главная цель AmphiLab — сохранить биоразнообразие и превратить полевые наблюдения в знания, которыми можно делиться с миром.",
    borderColor: "midnight-green",
    frogPosition: "right",
    delay: 0.38,
  },
} satisfies Record<string, CardContent>;

const fireflies = [
  { className: "left-[6vw] top-[12vh] h-2.5 w-2.5", duration: 7.5, delay: 0.4 },
  { className: "left-[16vw] top-[46vh] h-2 w-2", duration: 6.6, delay: 1.1 },
  { className: "left-[52vw] top-[24vh] h-3 w-3", duration: 8.2, delay: 0.2 },
  { className: "right-[12vw] top-[16vh] h-2.5 w-2.5", duration: 7.9, delay: 0.8 },
  { className: "right-[20vw] bottom-[24vh] h-2 w-2", duration: 6.9, delay: 1.5 },
  { className: "left-[48vw] bottom-[16vh] h-2.5 w-2.5", duration: 7.1, delay: 0.9 },
];

function InfoBlock({
  content,
  className = "",
}: {
  content: CardContent;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        delay: content.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      <FrogCard borderColor={content.borderColor} frogPosition={content.frogPosition}>
        <p className="text-base font-light leading-relaxed text-beige/90 xl:text-lg">
          {content.text}
        </p>
      </FrogCard>
    </motion.div>
  );
}

function LeafReveal({
  src,
  alt,
  width,
  height,
  className,
  motionStyle,
  delay,
  prefersReducedMotion,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  motionStyle: {
    x: MotionValue<number>;
    y: MotionValue<number>;
    rotate: MotionValue<number>;
  };
  delay: number;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <motion.div style={motionStyle} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 140, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
          transition={{
            duration: 5.6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            className="h-auto w-full drop-shadow-[0_34px_72px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-60, 100],
  );
  const mistY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [20, -100],
  );
  const leftLeafX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-26, 18],
  );
  const leftLeafY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [30, -32],
  );
  const leftLeafRotate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-5, -1],
  );
  const rightLeafX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [24, -16],
  );
  const rightLeafY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [24, -36],
  );
  const rightLeafRotate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [4, 0],
  );
  const archiveY = useTransform(
    scrollYProgress,
    [0.55, 1],
    prefersReducedMotion ? [0, 0] : [28, 0],
  );
  const archiveOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-dark-green py-[10vh] lg:py-[12vh]"
    >
      <motion.div aria-hidden className="absolute inset-0" style={{ y: backgroundY }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(17,33,44,0.98) 0%, rgba(5,8,7,1) 24%, rgba(2,4,3,1) 72%, rgba(6,21,14,1) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#09141c] to-transparent" />
        <motion.div
          aria-hidden
          className="absolute left-[4vw] top-[22vh] h-80 w-80 rounded-full bg-light-green/10 blur-[120px]"
          style={{ y: mistY }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[6vw] top-[28vh] h-96 w-96 rounded-full bg-midnight-green/16 blur-[140px]"
          style={{ y: mistY }}
        />
        {fireflies.map((firefly) => (
          <motion.span
            key={firefly.className}
            aria-hidden
            className={`absolute rounded-full bg-[#f2f7b4] shadow-[0_0_24px_8px_rgba(242,247,180,0.18)] ${firefly.className}`}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -18, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.35, 0.9, 0.35],
                  }
            }
            transition={{
              duration: firefly.duration,
              delay: firefly.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-[2vw] lg:gap-y-[8vh]">
          <InfoBlock content={cards.habitat} className="col-span-4" />
          <InfoBlock
            content={cards.climate}
            className="col-span-4 col-start-9 justify-self-end"
          />

          <div className="col-span-12 mt-[2vh]">
            <div className="pointer-events-none relative left-1/2 h-[clamp(28rem,62vh,48rem)] w-screen -translate-x-1/2 overflow-visible">
              <LeafReveal
                src="/intro/intro_frog_1.png"
                alt="Зелёная лягушка на широком листе"
                width={839}
                height={698}
                delay={0.18}
                prefersReducedMotion={prefersReducedMotion}
                motionStyle={{
                  x: leftLeafX,
                  y: leftLeafY,
                  rotate: leftLeafRotate,
                }}
                className="absolute bottom-[-2vh] left-[-2vw] w-[36vw] min-w-[24rem] max-w-[39rem]"
              />

              <LeafReveal
                src="/intro/intro_frog_2.png"
                alt="Лягушка на фактурном листе"
                width={1180}
                height={953}
                delay={0.3}
                prefersReducedMotion={prefersReducedMotion}
                motionStyle={{
                  x: rightLeafX,
                  y: rightLeafY,
                  rotate: rightLeafRotate,
                }}
                className="absolute bottom-[-3vh] right-[-3vw] w-[40vw] min-w-[28rem] max-w-[44rem]"
              />
            </div>
          </div>

          <InfoBlock
            content={cards.ecosystem}
            className="col-span-6 col-start-4 justify-self-center"
          />

          <InfoBlock content={cards.archive} className="col-span-4 mt-[2vh]" />
          <InfoBlock
            content={cards.mission}
            className="col-span-4 col-start-9 mt-[2vh] justify-self-end"
          />

          <motion.div
            style={{ opacity: archiveOpacity, y: archiveY }}
            className="col-span-6 col-start-4 mt-[12vh] text-center"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-light-green/72">
              Архив AmphiLab
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-beige xl:text-[2.6rem]">
              Удивительные лягушки, которых нам удалось сохранить и исследовать
            </h2>
            <motion.span
              aria-hidden
              className="mt-6 inline-block text-4xl text-light-green/85"
              animate={
                prefersReducedMotion ? undefined : { y: [0, 9, 0], opacity: [0.55, 1, 0.55] }
              }
              transition={{
                duration: 2.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ⌄
            </motion.span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-10 lg:hidden">
          <InfoBlock content={cards.habitat} className="w-full max-w-[22rem] self-start" />
          <InfoBlock content={cards.climate} className="w-full max-w-[22rem] self-end" />

          <div className="pointer-events-none relative left-1/2 mt-2 h-[29rem] w-screen -translate-x-1/2 overflow-visible">
            <LeafReveal
              src="/intro/intro_frog_1.png"
              alt="Зелёная лягушка на широком листе"
              width={839}
              height={698}
              delay={0.18}
              prefersReducedMotion={prefersReducedMotion}
              motionStyle={{
                x: leftLeafX,
                y: leftLeafY,
                rotate: leftLeafRotate,
              }}
              className="absolute bottom-[5.5rem] left-[-10vw] w-[66vw] max-w-[20rem]"
            />

            <LeafReveal
              src="/intro/intro_frog_2.png"
              alt="Лягушка на фактурном листе"
              width={1180}
              height={953}
              delay={0.28}
              prefersReducedMotion={prefersReducedMotion}
              motionStyle={{
                x: rightLeafX,
                y: rightLeafY,
                rotate: rightLeafRotate,
              }}
              className="absolute bottom-[-0.5rem] right-[-14vw] w-[76vw] max-w-[23rem]"
            />
          </div>

          <InfoBlock content={cards.ecosystem} className="w-full max-w-[22rem] self-center" />
          <InfoBlock content={cards.archive} className="w-full max-w-[22rem] self-start" />
          <InfoBlock content={cards.mission} className="w-full max-w-[22rem] self-end" />

          <motion.div
            style={{ opacity: archiveOpacity, y: archiveY }}
            className="mt-12 px-2 text-center"
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.42em] text-light-green/70">
              Архив AmphiLab
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-beige">
              Удивительные лягушки, которых нам удалось сохранить и исследовать
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
