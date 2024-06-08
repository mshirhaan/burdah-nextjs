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
        <title>Qaseeda Burda - The Poem of the Mantle</title>

        <meta
          name="description"
          content="Explore Qaseeda Burda with English translations, detailed tafseer explanations, and synchronized audio recitations. Enjoy a rich, interactive experience of this timeless Islamic poem."
        />
        <meta
          name="keywords"
          content="Qaseeda, Qasida, Qaseeda Burda, Qasida Burda, Qasida Burdah, Qaseeda Burdah, Burdah, Burda, Qasidat al-Burdah, Imam al-Busiri, Islamic poetry, Prophet Muhammad, spiritual poems, Islamic literature, religious poems, devotional poetry, translations, tafseer, audio recitations"
        />
        <meta name="author" content="QaseedaBurda.com" />
        <meta name="author" content="QaseedaBurda.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Qaseeda Burda - Translations, Tafseer, and Audio Recitations"
        />
        <meta
          property="og:description"
          content="Discover the Qaseeda Burda with English translations, detailed tafseer, and synchronized audio recitations. Experience the poem like never before."
        />
        <meta property="og:url" content="https://www.qaseedaburda.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.qaseedaburda.com/images/logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Qaseeda Burda - Translations, Tafseer, and Audio Recitations"
        />
        <meta
          property="twitter:description"
          content="Explore the Qaseeda Burda with English translations, detailed tafseer explanations, and synchronized audio recitations."
        />
        <meta
          property="twitter:image"
          content="https://www.qaseedaburda.com/images/logo.png"
        />
        <link rel="canonical" href="https://www.qaseedaburda.com" />
      </Head>
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
