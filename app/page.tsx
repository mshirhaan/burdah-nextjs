"use client";
import Header from "@/components/Header/HeaderBeta";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import Backdrop from "@/components/Backdrop/Backdrop";
import Hero from "@/components/Hero/Hero";
import Chapters from "@/components/Chapters/Chapters";
import Footer from "@/components/Footer/Footer";
import QaseedaIntroduction from "@/components/QaseedaIntroduction/QaseedaIntroduction";

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
      <div>
        <Hero />
        <Chapters />
      </div>
      <QaseedaIntroduction />
      <Footer />
    </div>
  );
}
