import Image from "next/image";

const socialLinks = [
  { href: "https://t.me/", icon: "/footer/tg_icon.svg", label: "Telegram" },
  { href: "https://vk.com/", icon: "/footer/vk_icon.svg", label: "VK" },
  { href: "https://youtube.com/", icon: "/footer/youtube_icon.svg", label: "YouTube" },
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#03140f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(131,153,88,0.14),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-light-green/35 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 rounded-[2rem] border border-light-green/14 bg-[rgba(2,8,6,0.3)] px-5 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)_auto] lg:items-end lg:gap-10 lg:px-10 lg:py-10">
          <div className="max-w-[30rem]">
            <div className="mb-5 flex items-center gap-4 sm:gap-5">
              <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[1.4rem] border border-light-green/16 bg-[radial-gradient(circle_at_35%_30%,rgba(131,153,88,0.22),rgba(3,9,7,0.08)_72%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:h-22 sm:w-22">
                <Image
                  src="/assets/frog.png"
                  alt=""
                  width={88}
                  height={88}
                  className="h-13 w-13 sm:h-16 sm:w-16"
                />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-light-green/68">
                  Amphibian Archive
                </p>
                <p className="mt-2 text-2xl font-semibold text-beige sm:text-[2rem]">AmphiLab</p>
                <p className="mt-2 text-sm text-light-green/80">Исследования по всему миру</p>
              </div>
            </div>

            <div className="space-y-1 text-sm leading-7 text-beige/84">
              <p>hello@amphilab.org</p>
              <p>+7 (999) 123-45-67</p>
            </div>

            <p className="mt-5 max-w-[28rem] text-sm leading-7 text-beige/68">
              Полевые дневники, архивы и истории амфибий из лесов, болот и тропиков.
            </p>
          </div>

          <div className="max-w-[34rem] lg:justify-self-center lg:text-center">
            <p className="text-sm text-beige/84">© 2026 AmphiLab. Все права защищены.</p>
            <p className="mt-3 text-xs leading-6 text-beige/50">
              Любое копирование материалов сайта допускается только с письменного разрешения
              исследовательской группы AmphiLab.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <p className="text-[11px] uppercase tracking-[0.34em] text-light-green/68">Field Notes</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-light-green/18 bg-light-green/12 transition hover:bg-light-green/24"
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="h-[1.125rem] w-[1.125rem]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
