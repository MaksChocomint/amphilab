"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Story = {
  id: string;
  species: string;
  nickname: string;
  summary: string;
  paragraphs: string[];
  facts: string[];
  image: string;
};

const stories: Story[] = [
  {
    id: "hyla-arborea",
    species: "Hyla arborea",
    nickname: "Лиам",
    summary:
      "Мы назвали его Лиам — за удивительную способность держаться за жизнь буквально кончиками пальцев.",
    paragraphs: [
      "Древесная квакша — небольшая ярко-зелёная лягушка, обитающая на деревьях и кустарниках вблизи воды. Благодаря способности менять оттенок кожи она легко сливается с листвой и почти незаметна для хищников. Активна в сумерках и ночью, когда охотится на насекомых и подаёт громкие квакающие сигналы.",
      "Её пальцы снабжены микроскопическими присосками, позволяющими удерживаться даже на гладких поверхностях — от влажных листьев до стекла.",
    ],
    facts: [
      "Размер: 3-5 см",
      "Окрас: от ярко-зелёного до оливкового и коричневатого",
      "Среда обитания: леса, кустарники, заболоченные низины",
      "Активность: ночная",
      "Питание: насекомые, мелкие беспозвоночные",
    ],
    image: "/stories/stories_frog_1.png",
  },
  {
    id: "oophaga-pumilio",
    species: "Oophaga pumilio",
    nickname: "Янтарь",
    summary:
      "Этого яркого малыша мы прозвали Янтарём: он предупреждает мир о себе цветом раньше, чем голосом.",
    paragraphs: [
      "Земляничный древолаз живёт в тёплых влажных лесах Центральной Америки и почти никогда не выглядит скромно. Его насыщенный оранжевый оттенок служит предупреждением: эту лягушку не стоит трогать без крайней необходимости.",
      "Самки переносят головастиков по одному на листья, наполненные дождевой водой, а затем возвращаются, чтобы кормить потомство неоплодотворёнными яйцами. Для такой крошечной амфибии это поразительно сложная родительская стратегия.",
    ],
    facts: [
      "Размер: 1,7-2,4 см",
      "Окрас: янтарный, алый, оранжевый",
      "Среда обитания: влажные тропические леса",
      "Активность: дневная",
      "Питание: муравьи, клещи, мелкие насекомые",
    ],
    image: "/stories/stories_frog_2.png",
  },
  {
    id: "agalychnis-moreletii",
    species: "Agalychnis moreletii",
    nickname: "Нокта",
    summary:
      "Нокта кажется почти чёрной в тени, но её взгляд вспыхивает раньше, чем успевает пошевелиться лист.",
    paragraphs: [
      "Эта древесная лягушка предпочитает густые влажные заросли и ведёт себя как настоящий ночной дозорный. Тёмная кожа помогает ей исчезать в глубине кроны, а яркие глаза сбивают хищников с толку, когда она внезапно выходит из неподвижности.",
      "Во время дождей самцы занимают укрытия над водой и подолгу удерживают территорию голосом. Их стратегия проста: оставаться незаметными до последнего мгновения, а затем сорваться в прыжок с безошибочной точностью.",
    ],
    facts: [
      "Размер: 6-8 см",
      "Окрас: тёмно-изумрудный, почти чёрный в тени",
      "Среда обитания: влажные леса и высокие кустарники",
      "Активность: ночная",
      "Питание: жуки, мотыльки, мелкие пауки",
    ],
    image: "/stories/stories_frog_3.png",
  },
  {
    id: "pelophylax-ridibundus",
    species: "Pelophylax ridibundus",
    nickname: "Туман",
    summary:
      "Туман умеет часами лежать у самой воды неподвижно, будто сам превратился в рисунок на берегу.",
    paragraphs: [
      "Озёрная лягушка крупнее большинства своих соседей и чувствует себя уверенно там, где вода встречается с солнцем. Её пятнистая спина разбивает силуэт на десятки оттенков, и птице сверху трудно отличить её от ряби травы и ила.",
      "Когда воздух становится тёплым, эти лягушки выходят на открытые кромки и внимательно следят за движением в воде. Один резкий толчок — и они либо уходят под поверхность, либо перехватывают добычу прежде, чем та успеет понять, что произошло.",
    ],
    facts: [
      "Размер: 7-12 см",
      "Окрас: оливковый с тёмными пятнами",
      "Среда обитания: озёра, пруды, заболоченные берега",
      "Активность: сумеречная и дневная",
      "Питание: насекомые, моллюски, мелкая водная живность",
    ],
    image: "/stories/stories_frog_4.png",
  },
];

const contentVariants = {
  enter: { opacity: 0, y: 10, scale: 0.992, filter: "blur(2.5px)" },
  center: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -6, scale: 0.995, filter: "blur(2px)" },
};

function StoryNavButton({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden h-14 w-14 shrink-0 items-center justify-center self-center rounded-full border border-light-green/24 bg-black/18 text-light-green transition hover:bg-light-green/12 lg:flex"
      aria-label={label}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-7 w-7 ${isLeft ? "" : "rotate-180"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 5l-7 7 7 7" />
      </svg>
    </button>
  );
}

export default function StoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const activeStory = stories[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsExpanded(true);
  };

  const handleStep = (direction: -1 | 1) => {
    const nextIndex = (activeIndex + direction + stories.length) % stories.length;
    handleSelect(nextIndex);
  };

  return (
    <section id="stories" className="relative isolate overflow-hidden bg-dark-green">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/stories/stories_bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,6,0.82)_0%,rgba(2,8,6,0.72)_28%,rgba(2,8,6,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(131,153,88,0.1),transparent_46%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1480px] flex-col px-5 py-18 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-8 max-w-[44rem]">
          <p className="mb-3 text-[11px] uppercase tracking-[0.42em] text-light-green/70">
            Stories
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-beige sm:text-4xl">
            Четыре лягушонка, за которыми мы продолжаем наблюдать в полях и лаборатории
          </h2>
        </div>

        <div className="flex items-stretch gap-4 lg:gap-6">
          <StoryNavButton
            direction="left"
            onClick={() => handleStep(-1)}
            label="Предыдущая история"
          />

          <div className="relative min-w-0 flex-1 overflow-hidden rounded-[2.25rem] border border-light-green/18 bg-[rgba(2,8,6,0.56)] shadow-[0_34px_110px_rgba(0,0,0,0.38)] backdrop-blur-md">
            <div className="relative px-5 py-6 sm:px-7 sm:py-8 lg:px-16 lg:py-12">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeStory.id}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.54, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mx-auto flex max-w-[46rem] flex-col items-center text-center">
                  <Image
                    src="/assets/frog.png"
                    alt=""
                    width={56}
                    height={56}
                    className="mb-2 h-11 w-11"
                  />
                  <p className="mb-3 text-[11px] uppercase tracking-[0.38em] text-light-green/68">
                    {activeStory.nickname}
                  </p>
                  <h3 className="text-3xl font-bold text-beige sm:text-4xl lg:text-[3.2rem]">
                    {activeStory.species}
                  </h3>
                  <p className="mt-5 max-w-[36rem] rounded-full border border-light-green/18 bg-light-green/16 px-5 py-3 text-sm leading-relaxed text-beige/92 sm:px-7 sm:text-base">
                    {activeStory.summary}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsExpanded((value) => !value)}
                    className="mt-5 rounded-full border border-light-green/28 bg-light-green/24 px-6 py-3 text-sm font-medium text-beige transition hover:bg-light-green/34"
                  >
                    {isExpanded ? "Скрыть историю" : "Читать историю"}
                  </button>
                </div>

                <div
                  className={`mx-auto max-w-[56rem] overflow-hidden transition-[grid-template-rows,opacity,transform,margin] duration-300 ease-out ${
                    isExpanded ? "mt-8 opacity-100 translate-y-0" : "mt-4 opacity-0 -translate-y-1"
                  }`}
                  style={{
                    display: "grid",
                    gridTemplateRows: isExpanded ? "1fr" : "0fr",
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="rounded-[2rem] border border-light-green/24 bg-[rgba(3,9,7,0.62)] p-5 text-base leading-relaxed text-beige/94 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-7">
                      {activeStory.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(22rem,1.15fr)_minmax(20rem,0.95fr)] lg:items-end">
                  <div className="relative min-h-[18rem] sm:min-h-[21rem] lg:min-h-[28rem]">
                    <motion.div
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              y: [0, -8, 0],
                              rotate: [-2, 0, -2],
                            }
                      }
                      transition={{
                        duration: 5.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute left-1/2 bottom-0 w-[20rem] -translate-x-[58%] scale-x-[-1] sm:w-[24rem] lg:left-[-3%] lg:w-[36rem] lg:translate-x-0 xl:w-[40rem]"
                    >
                      <Image
                        src="/stories/stories_leaf.png"
                        alt=""
                        width={789}
                        height={639}
                        className="h-auto w-full drop-shadow-[0_36px_70px_rgba(0,0,0,0.42)]"
                      />
                    </motion.div>

                    <motion.div
                      key={`${activeStory.id}-active-frog`}
                      initial={{ opacity: 0, y: 12, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="pointer-events-none absolute bottom-[28%] left-1/2 w-[10.5rem] -translate-x-[12%] sm:bottom-[30%] sm:w-[13rem] lg:bottom-[36%] lg:left-[28%] lg:w-[18.5rem] xl:bottom-[37%] xl:left-[29%] xl:w-[20.5rem]"
                    >
                      <motion.div
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : { y: [0, -9, 0], rotate: [-1.5, 0, -1.5] }
                        }
                        transition={{
                          duration: 5.8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={activeStory.image}
                          alt={activeStory.species}
                          width={460}
                          height={460}
                          className="h-auto w-full drop-shadow-[0_18px_26px_rgba(0,0,0,0.35)]"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="flex flex-col gap-5 lg:pb-5">
                    <motion.ul
                      key={`${activeStory.id}-facts`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-[1.8rem] border border-light-green/18 bg-[rgba(3,9,7,0.5)] p-5 text-sm leading-relaxed text-beige/80 sm:p-6"
                    >
                      <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-light-green/68">
                        Параметры наблюдения
                      </p>
                      <div className="space-y-2.5">
                        {activeStory.facts.map((fact) => (
                          <div key={fact} className="flex gap-2">
                            <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-light-green/85" />
                            <span>{fact}</span>
                          </div>
                        ))}
                      </div>
                    </motion.ul>

                    <div className="rounded-[1.8rem] border border-light-green/18 bg-[rgba(3,9,7,0.5)] p-5 sm:p-6">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.34em] text-light-green/68">
                            Следующие истории
                          </p>
                          <p className="mt-2 text-sm text-beige/64">
                            Выберите лягушонка, чтобы переключить наблюдение.
                          </p>
                        </div>
                        <div className="hidden items-center gap-2 lg:flex">
                          {stories.map((story, index) => (
                            <button
                              key={story.id}
                              type="button"
                              onClick={() => handleSelect(index)}
                              className={`h-2.5 w-2.5 rounded-full transition ${
                                index === activeIndex ? "bg-light-green" : "bg-white/16"
                              }`}
                              aria-label={`Переключить на ${story.species}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {stories.map((story, index) => {
                          const isActive = index === activeIndex;

                          return (
                            <motion.button
                              key={story.id}
                              type="button"
                              onClick={() => handleSelect(index)}
                              whileHover={{ y: -2, scale: 1.01 }}
                              whileTap={{ scale: 0.985 }}
                              className={`relative overflow-hidden rounded-[1.5rem] border p-3 text-left transition ${
                                isActive
                                  ? "border-light-green/42 bg-light-green/14"
                                  : "border-white/10 bg-black/14 hover:border-light-green/20 hover:bg-light-green/8"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="relative flex h-18 w-18 shrink-0 items-center justify-center rounded-[1.1rem] bg-[radial-gradient(circle_at_center,rgba(131,153,88,0.16),transparent_70%)]">
                                  <Image
                                    src={story.image}
                                    alt={story.species}
                                    width={92}
                                    height={92}
                                    className="h-16 w-16 object-contain"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-beige">{story.nickname}</p>
                                  <p className="mt-1 text-xs leading-5 text-beige/66">
                                    {story.species}
                                  </p>
                                  {isActive ? (
                                    <span className="mt-2 inline-flex rounded-full border border-light-green/26 bg-light-green/12 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-light-green/90">
                                      В эфире
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-3 border-t border-light-green/12 px-5 py-4 sm:px-7 lg:hidden">
            <button
              type="button"
              onClick={() => handleStep(-1)}
              className="rounded-full border border-light-green/24 px-4 py-2 text-sm text-light-green"
            >
              Назад
            </button>
            <div className="flex items-center gap-2">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? "bg-light-green" : "bg-white/20"
                  }`}
                  aria-label={`Переключить на ${story.species}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleStep(1)}
              className="rounded-full border border-light-green/24 px-4 py-2 text-sm text-light-green"
            >
              Дальше
            </button>
            </div>
          </div>

          <StoryNavButton
            direction="right"
            onClick={() => handleStep(1)}
            label="Следующая история"
          />
        </div>
      </div>
    </section>
  );
}
