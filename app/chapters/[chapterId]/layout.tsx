"use client";

import Backdrop from "@/components/Backdrop/Backdrop";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function ChapterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, toggleTheme } = useTheme();

  const [showBackdrop, setShowBackdrop] = useState(false);

  const showBackDropHandler = (show: any) => {
    setShowBackdrop(show);
  };

  return (
    <div className={`${theme == "dark" ? "dark" : ""}`}>
      <Header
        showBackdrop={showBackdrop}
        setShowBackdrop={showBackDropHandler}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {showBackdrop ? <Backdrop setShowBackdrop={showBackDropHandler} /> : null}
      {children}
      <Footer />
    </div>
  );
}
