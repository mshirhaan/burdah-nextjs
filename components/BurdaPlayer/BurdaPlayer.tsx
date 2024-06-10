import React, { useState, useRef, useEffect } from "react";
import styles from "./BurdaPlayer.module.css";
import { useTheme } from "@/context/ThemeContext";

function BurdaPlayer({
  setPlaybackTime,
  currentTime,
  audioRef,
  togglePlay,
  isPlaying,
  audioUrl,
  reciters,
  handleReciterChange,
  selectedReciter,
}: any) {
  const [isHidden, setIsHidden] = useState(false);
  const { theme } = useTheme();

  const isScrollAtEnd = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    let subtractValue = 100;

    return windowHeight + scrollPosition >= documentHeight - subtractValue;
  };

  const handleScroll = () => {
    if (isScrollAtEnd()) {
      setIsHidden(true); // Hide the player when scroll is at the end
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setPlaybackTime(audioRef.current?.currentTime || 0);
      });
    }
  }, []);

  return (
    <div
      className={`${styles.container} ${
        isHidden || !audioUrl ? styles.hidden : ""
      } ${theme == "dark" ? styles.dark : ""}`}
    >
      <select value={selectedReciter} onChange={handleReciterChange}>
        {reciters.map((reciterName: string) => (
          <option key={reciterName} value={reciterName}>
            {reciterName}
          </option>
        ))}
      </select>
      <audio
        className={`${theme == "light" ? styles.audioLight : ""}`}
        ref={audioRef}
        src={audioUrl}
        autoPlay={isPlaying}
        controls
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default BurdaPlayer;
