import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import localFont from "next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });

const myFont = localFont({
  src: "../assets/fonts/Uthmanic.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qaseeda Burda - Translations, Tafseer, and Audio Recitations",
  description:
    "Explore Qaseeda Burda with English translations, detailed tafseer explanations, and synchronized audio recitations. Enjoy a rich, interactive experience of this timeless Islamic poem.",
  keywords:
    "Qaseeda, Qasida, Qaseeda Burda, Qasida Burda, Qasida Burdah, Qaseeda Burdah, Burdah, Burda, Qasidat al-Burdah, Imam al-Busiri, Islamic poetry, Prophet Muhammad, spiritual poems, Islamic literature, religious poems, devotional poetry, translations, tafseer, audio recitations, Qaseeda Burda translation, Qaseeda Burda tafseer, Qaseeda Burda audio recitations, Qaseeda Burdah translation, Qaseeda Burdah tafseer, Qaseeda Burdah audio recitations, Qasida Burdah translation, Qasida Burdah tafseer, Qasida Burdah audio recitations",
  authors: [{ name: "Imam al-Busiri" }],

  openGraph: {
    title: "Qaseeda Burda - Translations, Tafseer, and Audio Recitations",
    description:
      "Discover the Qaseeda Burda with English translations, detailed tafseer, and synchronized audio recitations. Experience the poem like never before.",
    url: "https://www.qaseedaburda.com",
    type: "website",
    images: ["https://www.qaseedaburda.com/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qaseeda Burda - Translations, Tafseer, and Audio Recitations",
    description:
      "Explore the Qaseeda Burda with English translations, detailed tafseer explanations, and synchronized audio recitations.",
    images: ["https://www.qaseedaburda.com/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
