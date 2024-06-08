"use client";
import Header from "@/components/Header/Header";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import Backdrop from "@/components/Backdrop/Backdrop";
import Hero from "@/components/Hero/Hero";
import Chapters from "@/components/Chapters/Chapters";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const showBackDropHandler = (show: any) => {
    setShowBackdrop(show);
  };

  return (
    <div>
      <Header
        showBackdrop={showBackdrop}
        setShowBackdrop={showBackDropHandler}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {showBackdrop ? <Backdrop setShowBackdrop={showBackDropHandler} /> : null}
      <main>
        <Hero />
        <Chapters />
      </main>
      <Footer />
    </div>
  );
}
