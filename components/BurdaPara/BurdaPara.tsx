import { useEffect, useRef, useState } from "react";
import styles from "./BurdaPara.module.css";
import { SlControlPlay } from "react-icons/sl";
import { GiPauseButton } from "react-icons/gi";
import { PiBookOpenLight } from "react-icons/pi";
import Modal from "../Modal/Modal";
import { useTheme } from "@/context/ThemeContext";

const BurdaPara = ({
  para,
  audioMapping,
  isPlaying,
  setPlaybackTime,
  togglePlay,
  currentTime,
}: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const [isTafseerModalOpen, setTafseerModalOpen] = useState(false);

  const openTafseerModal = () => {
    setTafseerModalOpen(true);
  };

  const closeTafseerModal = () => {
    setTafseerModalOpen(false);
  };

  const isHighlighted =
    currentTime >= audioMapping.audioStart &&
    currentTime <= audioMapping.audioEnd;

  // Function to scroll to the highlighted div when it becomes visible
  useEffect(() => {
    if (isHighlighted && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isHighlighted]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${theme == "dark" ? "dark" : ""} ${
        isHighlighted && theme == "dark" ? styles.highlightedDark : ""
      } ${isHighlighted && theme != "dark" ? styles.highlighted : ""} `}
    >
      <div className={styles.buttonGroup}>
        <button
          disabled={audioMapping.disabled}
          onClick={() => {
            togglePlay(!isHighlighted ? true : null);
            setPlaybackTime(audioMapping.audioStart);
          }}
          className={`${
            !audioMapping.disabled && theme == "dark" ? "dark" : ""
          }`}
        >
          <span
            className={`${
              theme == "dark" ? styles.whiteText : styles.darkText
            }`}
          >
            {para.id}
          </span>
          {isHighlighted && isPlaying ? <GiPauseButton /> : <SlControlPlay />}
        </button>
        <button
          className={`${theme == "dark" ? "dark" : ""}`}
          onClick={() => {
            openTafseerModal();
          }}
        >
          <PiBookOpenLight />
          <span className={styles.tooltip}>Tafsirs</span>
        </button>
      </div>
      {para.arabicLines.map((str: string) => (
        <p key={str} className={styles.arabic}>{str}</p>
      ))}
      {para.englishLines.map((str: string) => (
        <p key={str} className={styles.english}>{str}</p>
      ))}
      <Modal
        isOpen={isTafseerModalOpen}
        closeModal={closeTafseerModal}
        content={para.tafseer}
      />
    </div>
  );
};

export default BurdaPara;
