"use client";

import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


const introContent = [
  {
    text: "Мы изучаем лягушек в лесах, болотах и тропиках, наблюдая за их жизненным циклом и миграциями",
    position: "right" as const,
    color: "midnight-green" as const,
  },
  {
    text: "Исследуем кожу, дыхание и адаптацию лягушек к изменениям климата. Разрабатываем стратегии защиты редких видов",
    position: "left" as const,
    color: "light-green" as const,
  },
  {
    text: "Чувствительность лягушек к загрязнениям помогает учёным отслеживать изменения экосистем задолго до того, как они станут критическими",
    position: "right" as const,
    color: "midnight-green" as const,
  },
  {
    text: "Создаём фото-, видео- и 3D-архивы амфибий, чтобы сохранить их образы и истории для будущих исследований",
    position: "left" as const,
    color: "light-green" as const,
  },
  {
    text: "Главная задача AmphiLab - сохранять биоразнообразие и делиться знаниями с миром",
    position: "right" as const,
    color: "midnight-green" as const,
  },
];

export default function Intro() {
  return (
    <div
      ref={containerRef}
      className="relative min-h-[150vh] overflow-hidden"
    >
      <motion.div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #11212C 0%, #000000 75%, #06160F 100%)",
          y: bgY,
        }}
        className="fixed inset-0"
      />

      <motion.div style={{ y: contentY }} className="relative z-10 pt-20">
        {/* Контент движется медленнее, чем фон */}
      </motion.div>
    </div>
  );
}
