import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  active?: "home" | "research" | "species";
};

const links = [
  { href: "/", label: "Главная", key: "home" },
  { href: "/research", label: "Исследования", key: "research" },
  { href: "/species", label: "Виды лягушек", key: "species" },
] as const;

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-4 self-start rounded-full border border-light-green/14 bg-[rgba(2,8,6,0.34)] px-4 py-3 backdrop-blur-md transition hover:border-light-green/26 hover:bg-[rgba(5,16,11,0.46)]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-light-green/12">
            <Image src="/assets/frog.png" alt="" width={30} height={30} className="h-7 w-7" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-light-green/68">
              Amphibian Atlas
            </p>
            <p className="text-lg font-semibold text-beige">AmphiLab</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => {
            const isActive = active === link.key;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full border px-4 py-2.5 text-sm transition sm:px-5 ${
                  isActive
                    ? "border-light-green/36 bg-light-green/16 text-beige"
                    : "border-white/10 bg-black/12 text-beige/72 hover:border-light-green/20 hover:bg-light-green/10 hover:text-beige"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
