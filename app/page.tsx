"use client";
import Header from "@/components/Header/Header";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import Backdrop from "@/components/Backdrop/Backdrop";
import Hero from "@/components/Hero/Hero";
import Chapters from "@/components/Chapters/Chapters";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const showBackDropHandler = (show: any) => {
    setShowBackdrop(show);
  };

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Header
        showBackdrop={showBackdrop}
        setShowBackdrop={showBackDropHandler}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {showBackdrop ? <Backdrop setShowBackdrop={showBackDropHandler} /> : null}
      <Hero />
      <Chapters />
      <Footer />
    </div>
  );
}
