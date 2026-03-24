import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/Main/Footer/FooterSection";
import HeroButton from "@/components/UI/HeroButton";
import SiteHeader from "@/components/UI/SiteHeader";

export const metadata: Metadata = {
  title: "Виды лягушек | AmphiLab",
  description: "Атлас видов AmphiLab: визуальные профили, биотопы и риски для амфибий.",
};

const speciesCards = [
  {
    name: "Hyla arborea",
    title: "Лиам",
    habitat: "Лесные кромки и влажные кустарники",
    status: "Чуткий индикатор",
    note: "Быстро реагирует на пересыхание кромки и шумовое загрязнение водоёмов.",
    image: "/stories/stories_frog_1.png",
  },
  {
    name: "Oophaga pumilio",
    title: "Янтарь",
    habitat: "Тропический подлесок и бромелии",
    status: "Яркая тревога",
    note: "Показывает, насколько уязвимы микроочаги влаги в перегретом лесу.",
    image: "/stories/stories_frog_2.png",
  },
  {
    name: "Agalychnis moreletii",
    title: "Нокта",
    habitat: "Тёмные влажные кроны",
    status: "Ночной дозор",
    note: "Лучше всего считывается не по цвету, а по режиму движения и голосу после дождя.",
    image: "/stories/stories_frog_3.png",
  },
  {
    name: "Pelophylax ridibundus",
    title: "Туман",
    habitat: "Пруды, озёра и затопленные берега",
    status: "Береговая линия",
    note: "Хорошо показывает, где экосистема удерживает баланс между светом, илом и растительностью.",
    image: "/stories/stories_frog_4.png",
  },
] as const;

const habitats = [
  {
    title: "Крона и подлесок",
    text: "Древесные формы живут в тонком диапазоне влажности и исчезают первыми, если ломается вертикальная структура леса.",
  },
  {
    title: "Болота и поймы",
    text: "Здесь важны не только глубина и температура воды, но и мягкая граница между мхом, травой и открытым зеркалом.",
  },
  {
    title: "Тёплые заводи",
    text: "Открытые водные кромки дают сигнал о качестве среды быстрее, чем редкие разовые наблюдения по особям.",
  },
] as const;

const legend = [
  {
    title: "Окрас",
    text: "Нужен не ради красоты, а как маркер фона, температуры и стратегии маскировки.",
  },
  {
    title: "Голос",
    text: "Для многих видов акустика надёжнее визуального контакта, особенно в густой ночной среде.",
  },
  {
    title: "Риск",
    text: "Мы смотрим не только на редкость вида, но и на то, как быстро меняется сама среда вокруг него.",
  },
] as const;

export default function SpeciesPage() {
  return (
    <main className="overflow-x-hidden bg-dark-green">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#081711_0%,#07120f_38%,#081610_100%)]" />
        <div className="absolute left-[-10rem] top-[7rem] h-[24rem] w-[24rem] rounded-full bg-light-green/14 blur-[120px]" />
        <div className="absolute right-[-12rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-midnight-green/18 blur-[140px]" />

        <SiteHeader active="species" />

        <section className="relative z-10 pb-18 pt-4 lg:pb-24">
          <div className="mx-auto grid w-full max-w-[1480px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1fr)] lg:items-center lg:px-10">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-light-green/72">
                Species Atlas
              </p>
              <h1 className="max-w-[38rem] text-balance text-4xl font-semibold leading-[0.96] text-beige sm:text-5xl lg:text-[4.85rem]">
                Виды, за которыми мы наблюдаем прямо сейчас
              </h1>
              <p className="mt-6 max-w-[35rem] text-base leading-8 text-beige/74 sm:text-lg">
                Это не сухой каталог. Мы собрали живой атлас, где вид читается через среду,
                поведение, ритм активности и уязвимость самого биотопа.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <HeroButton href="/research">Открыть исследования</HeroButton>
                <Link
                  href="/#stories"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/14 px-8 py-3 text-sm font-medium text-beige/78 transition hover:border-light-green/20 hover:bg-light-green/10 hover:text-beige sm:px-10 sm:py-4 sm:text-base"
                >
                  Перейти к историям
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-light-green/12 blur-[90px]" />
              <div className="absolute -right-8 bottom-4 h-56 w-56 rounded-full bg-midnight-green/20 blur-[110px]" />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-light-green/16 bg-[rgba(3,10,7,0.52)] p-3 shadow-[0_34px_120px_rgba(0,0,0,0.3)]">
                <Image
                  src="/generated/species-hero.svg"
                  alt="Иллюстрация атласа видов AmphiLab"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full rounded-[1.8rem]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative overflow-hidden py-18 lg:py-24">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[36rem]">
              <p className="mb-3 text-[11px] uppercase tracking-[0.38em] text-light-green/68">
                Current Watchlist
              </p>
              <h2 className="text-3xl font-semibold text-beige sm:text-4xl">
                Четыре профиля, через которые читается вся система
              </h2>
            </div>
            <p className="max-w-[29rem] text-sm leading-7 text-beige/66">
              Мы не держим все виды на одном визуальном уровне. У каждого свой ритм, своя
              зона среды и свой способ выдавать проблему раньше, чем она станет очевидной.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {speciesCards.map((card, index) => (
              <article
                key={card.name}
                className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_26px_80px_rgba(0,0,0,0.22)] ${
                  index === 0 || index === 3
                    ? "border-light-green/18 bg-[rgba(6,14,10,0.62)]"
                    : "border-white/10 bg-[rgba(5,11,9,0.56)]"
                }`}
              >
                <div className="absolute right-4 top-4 rounded-full border border-light-green/20 bg-light-green/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-light-green/86">
                  {card.status}
                </div>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[1.6rem] bg-[radial-gradient(circle_at_center,rgba(131,153,88,0.18),transparent_72%)]">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={180}
                      height={180}
                      className="h-24 w-24 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-light-green/64">
                      {card.title}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-beige">{card.name}</h3>
                    <p className="mt-3 text-sm font-medium text-light-green">{card.habitat}</p>
                    <p className="mt-4 text-sm leading-7 text-beige/68">{card.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-18 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,15,11,0)_0%,rgba(12,31,24,0.46)_30%,rgba(7,15,11,0)_100%)]" />
        <div className="mx-auto grid w-full max-w-[1480px] gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.88fr)] lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-[2.4rem] border border-light-green/16 bg-[rgba(4,10,8,0.58)] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
            <Image
              src="/generated/species-habitats.svg"
              alt="Иллюстрация сред обитания амфибий"
              width={1200}
              height={800}
              className="h-auto w-full rounded-[1.8rem]"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.38em] text-light-green/68">
              Habitat Reading
            </p>
            <h2 className="text-3xl font-semibold text-beige sm:text-4xl">
              Вид нельзя читать отдельно от его среды
            </h2>

            <div className="mt-8 space-y-4">
              {habitats.map((habitat) => (
                <article
                  key={habitat.title}
                  className="rounded-[1.8rem] border border-white/10 bg-[rgba(4,10,8,0.54)] p-5"
                >
                  <h3 className="text-xl font-semibold text-beige">{habitat.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-beige/68">{habitat.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20 pt-18 lg:pb-24 lg:pt-24">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10">
          <div className="rounded-[2.3rem] border border-light-green/16 bg-[linear-gradient(135deg,rgba(15,36,27,0.82),rgba(7,15,12,0.84))] p-7 shadow-[0_28px_100px_rgba(0,0,0,0.24)] sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-[34rem]">
                <p className="text-[11px] uppercase tracking-[0.34em] text-light-green/66">
                  Reading System
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-beige sm:text-4xl">
                  Что мы считаем важным в карточке вида
                </h2>
                <p className="mt-4 text-sm leading-7 text-beige/68">
                  В атласе каждый профиль держится на трёх опорах: что видно, что слышно и
                  как быстро рушится среда, если климат или нагрузка меняются.
                </p>
              </div>

              <div className="grid gap-4 lg:max-w-[42rem] lg:grid-cols-3">
                {legend.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.7rem] border border-white/10 bg-[rgba(4,10,8,0.46)] p-5"
                  >
                    <h3 className="text-lg font-semibold text-beige">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-beige/66">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <HeroButton href="/research">Посмотреть исследовательский цикл</HeroButton>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/12 px-8 py-3 text-sm font-medium text-beige/78 transition hover:border-light-green/20 hover:bg-light-green/10 hover:text-beige sm:px-10 sm:py-4 sm:text-base"
              >
                На главную
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
