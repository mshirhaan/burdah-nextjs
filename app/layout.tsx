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

console.log("mm", myFont);

export const metadata: Metadata = {
  title: "Qaseeda Burdah",
  description:
    "Read the chapters of Qaseeda Burdah along with Audios and Translations.",
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
