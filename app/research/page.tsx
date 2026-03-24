import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/Main/Footer/FooterSection";
import HeroButton from "@/components/UI/HeroButton";
import SiteHeader from "@/components/UI/SiteHeader";

export const metadata: Metadata = {
  title: "Исследования | AmphiLab",
  description: "Полевые экспедиции, лабораторные циклы и климатические наблюдения AmphiLab.",
};

const stats = [
  { value: "18", label: "экспедиций в год", detail: "от карпатских болот до влажных тропиков" },
  { value: "64", label: "точки мониторинга", detail: "маршруты, которые обновляются каждый сезон" },
  { value: "12", label: "лабораторных протоколов", detail: "генетика, акустика, дыхание, кожа" },
  { value: "4.2M", label: "кадров в архиве", detail: "фото, видео и карты движения популяций" },
] as const;

const pillars = [
  {
    title: "Полевые выезды",
    text: "Мы ставим камеры, аудиологгеры и влажностные метки так, чтобы наблюдать животных без давления на среду.",
  },
  {
    title: "Лабораторная проверка",
    text: "Каждый маршрут продолжает жить в лаборатории: мы сверяем акустические сигналы, отпечатки кожи и фотограмметрию.",
  },
  {
    title: "Климатические сценарии",
    text: "Собранные данные переводим в прогнозы риска, чтобы заранее видеть, какие экосистемы уязвимее всего.",
  },
] as const;

const workflow = [
  {
    title: "Сигнал в лесу",
    text: "На старте сезона мы собираем карту пиков активности: ночные голоса, влажность, температуру и плотность растительности.",
  },
  {
    title: "Верификация вида",
    text: "После маршрута сопоставляем звук, фото и микропризнаки окраса, чтобы не путать соседние виды в одном биотопе.",
  },
  {
    title: "Архив и прогноз",
    text: "В финале экспедиции материал уходит в архив, а затем в слой аналитики, где строится прогноз устойчивости популяции.",
  },
] as const;

const missions = [
  {
    region: "Карпатская дуга",
    season: "Апрель - май",
    note: "Ранний отклик популяций на смещение снежной границы и холодные ночи.",
  },
  {
    region: "Полесские болота",
    season: "Июнь - июль",
    note: "Мониторинг уровня воды, конкуренции видов и плотности ночных сигналов.",
  },
  {
    region: "Тропический пояс",
    season: "Сентябрь - ноябрь",
    note: "Сравнение микроклимата кроны и подлеска там, где исчезают редкие древесные формы.",
  },
] as const;

export default function ResearchPage() {
  return (
    <main className="overflow-x-hidden bg-dark-green">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#081711_0%,#07120f_42%,#081711_100%)]" />
        <div className="absolute left-[-12rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-midnight-green/20 blur-[140px]" />
        <div className="absolute right-[-10rem] top-[6rem] h-[24rem] w-[24rem] rounded-full bg-light-green/16 blur-[120px]" />

        <SiteHeader active="research" />

        <section className="relative z-10 pb-18 pt-4 lg:pb-24">
          <div className="mx-auto grid w-full max-w-[1480px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1fr)] lg:items-center lg:px-10">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-light-green/72">
                Research Program
              </p>
              <h1 className="max-w-[40rem] text-balance text-4xl font-semibold leading-[0.96] text-beige sm:text-5xl lg:text-[5rem]">
                Как AmphiLab изучает амфибий в поле и в лаборатории
              </h1>
              <p className="mt-6 max-w-[36rem] text-base leading-8 text-beige/74 sm:text-lg">
                Эта страница собирает наш реальный рабочий цикл: от ночных маршрутов и
                камер-ловушек до фотограмметрии, звукового анализа и климатических сценариев.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <HeroButton href="/species">Перейти к видам</HeroButton>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/14 px-8 py-3 text-sm font-medium text-beige/78 transition hover:border-light-green/20 hover:bg-light-green/10 hover:text-beige sm:px-10 sm:py-4 sm:text-base"
                >
                  Вернуться на главную
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.8rem] border border-light-green/14 bg-[rgba(3,10,7,0.56)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                  >
                    <p className="text-3xl font-semibold text-beige">{item.value}</p>
                    <p className="mt-2 text-sm font-medium text-light-green">{item.label}</p>
                    <p className="mt-3 text-sm leading-6 text-beige/64">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-light-green/12 blur-[80px]" />
              <div className="absolute -right-6 bottom-6 h-56 w-56 rounded-full bg-midnight-green/18 blur-[100px]" />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-light-green/16 bg-[rgba(3,10,7,0.52)] p-3 shadow-[0_34px_120px_rgba(0,0,0,0.32)]">
                <Image
                  src="/generated/research-hero.svg"
                  alt="Иллюстрация исследовательского маршрута AmphiLab"
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,14,10,0)_0%,rgba(9,24,18,0.58)_32%,rgba(5,14,10,0)_100%)]" />
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-[42rem]">
            <p className="mb-3 text-[11px] uppercase tracking-[0.38em] text-light-green/68">
              Three Layers
            </p>
            <h2 className="text-3xl font-semibold text-beige sm:text-4xl">
              Исследование строится на трёх параллельных контурах
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`rounded-[2rem] border p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] ${
                  index === 1
                    ? "border-light-green/28 bg-[rgba(15,33,24,0.74)]"
                    : "border-white/10 bg-[rgba(4,10,8,0.56)]"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-light-green/64">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-beige">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-beige/70">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-18 lg:py-24">
        <div className="absolute left-[-16rem] top-[8rem] h-[26rem] w-[26rem] rounded-full bg-light-green/10 blur-[140px]" />
        <div className="mx-auto grid w-full max-w-[1480px] gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-[2.4rem] border border-light-green/14 bg-[rgba(5,12,10,0.56)] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.3)]">
            <Image
              src="/generated/research-workflow.svg"
              alt="Схема исследовательского цикла AmphiLab"
              width={1200}
              height={800}
              className="h-auto w-full rounded-[1.8rem]"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.38em] text-light-green/68">
              Workflow
            </p>
            <h2 className="text-3xl font-semibold text-beige sm:text-4xl">
              Экспедиция не заканчивается в поле
            </h2>
            <div className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.7rem] border border-white/10 bg-[rgba(4,10,8,0.54)] p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-light-green/24 bg-light-green/10 text-sm font-semibold text-light-green">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-beige">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-beige/70">{step.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20 pt-18 lg:pb-24 lg:pt-24">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[36rem]">
              <p className="mb-3 text-[11px] uppercase tracking-[0.38em] text-light-green/68">
                Mission Window
              </p>
              <h2 className="text-3xl font-semibold text-beige sm:text-4xl">
                Ближайшие окна наблюдений и выезды
              </h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-7 text-beige/66">
              Каждый маршрут привязан к погодному коридору. Мы не просто едем в точку, а
              ловим короткий период, когда среда буквально начинает звучать.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {missions.map((mission) => (
              <article
                key={mission.region}
                className="rounded-[2rem] border border-light-green/14 bg-[rgba(5,12,10,0.58)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-light-green/60">
                  {mission.season}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-beige">{mission.region}</h3>
                <p className="mt-4 text-sm leading-7 text-beige/68">{mission.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2.2rem] border border-light-green/18 bg-[linear-gradient(135deg,rgba(15,39,29,0.82),rgba(7,15,12,0.84))] p-7 shadow-[0_28px_100px_rgba(0,0,0,0.24)] sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[34rem]">
              <p className="text-[11px] uppercase tracking-[0.34em] text-light-green/66">
                Next Step
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-beige sm:text-3xl">
                После цикла исследования данные переходят в атлас видов
              </h3>
              <p className="mt-4 text-sm leading-7 text-beige/68">
                Там уже видно, как поведение, окрас, биотоп и риски складываются в живую
                картину для каждого вида.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <HeroButton href="/species">Открыть атлас видов</HeroButton>
              <Link
                href="/#stories"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/12 px-8 py-3 text-sm font-medium text-beige/78 transition hover:border-light-green/20 hover:bg-light-green/10 hover:text-beige sm:px-10 sm:py-4 sm:text-base"
              >
                К историям
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
