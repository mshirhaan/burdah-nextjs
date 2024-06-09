"use client";
import Header from "@/components/Header/HeaderBeta";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import Backdrop from "@/components/Backdrop/Backdrop";
import Hero from "@/components/Hero/Hero";
import Chapters from "@/components/Chapters/Chapters";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal";

export default function Home() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const showBackDropHandler = (show: any) => {
    setShowBackdrop(show);
  };

  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header
        showBackdrop={showBackdrop}
        setShowBackdrop={showBackDropHandler}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {showModal && (
        <Modal
          message="Welcome to our website!. We are currently working on improving this website."
          onClose={closeModal}
        />
      )}
      {showBackdrop ? <Backdrop setShowBackdrop={showBackDropHandler} /> : null}
      <main>
        <Hero />
        <Chapters />
      </main>
      <Footer />
    </div>
  );
}
