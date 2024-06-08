import HeartAnimation from "../HeartAnimation/HeartAnimation";
import styles from "./Hero.module.css";
import usePartCounter from "@/hooks/usePartCounter";
import KhatamCounter from "../KhatamCounter/KhatamCounter";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentPart } = usePartCounter();

  const scrollToChapters = () => {
    const chaptersSection = document.getElementById("chapters");

    if (chaptersSection) {
      chaptersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${styles.container} ${
        theme === "dark"
          ? styles["dark-background"]
          : styles["light-background"]
      }`}
    >
      <div className={`${styles.content} `}>
        <h1 className={styles["text-cycle"]}>Qaseeda Al Burda</h1>
        <HeartAnimation>
          <p>The Poem of the Mantle</p>
        </HeartAnimation>
        <KhatamCounter />
        <div className={styles.links}>
          <Link
            className={`button ${theme == "dark" ? "buttonDark" : ""}`}
            href={"/chapters/" + currentPart}
          >
            Read Chapter {currentPart} today
          </Link>
          <button
            className={`button ${theme == "dark" ? "buttonDark" : ""}`}
            onClick={scrollToChapters}
          >
            Chapters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
