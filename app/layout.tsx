import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "AmphiLab",
  description: "Совместная платформа для исследования амфибий и их сохранения.",
  authors: [{ name: "AmphiLab" }],
  keywords: ["амфибии", "исследование", "сохранение", "платформа"],
  openGraph: {
    title: "AmphiLab",
    description:
      "Совместная платформа для исследования амфибий и их сохранения.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${jost.variable} antialiased`}>{children}</body>
    </html>
  );
}
