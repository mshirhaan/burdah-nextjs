import Link from "next/link";
import styles from "./Chapters.module.css";
import { useTheme } from "@/context/ThemeContext";

const CHAPTER_TITLES = [
  "Love & Nostalgic Rhapsody",
  "Caprices of the Ego & Nafs",
  "Praise of the Prophet ﷺ",
  "The Prophet's ﷺ Birth",
  "The Prophet's ﷺ Miracles",
  "Nobility of the Holy Qur'an",
  "The Night Journey & Ascension",
  "The Prophet's ﷺ Jihad",
  "Seeking Intercession",
  "Intimate Discourse & Petition"
];

const Chapters = () => {
  const { theme } = useTheme();

  return (
    <div
      id="chapters"
      className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.chaptersDescription}>
        <h2>Chapters</h2>
        <p>
          Explore the ten profound chapters of the Qaseeda Burdah, each
          dedicated to a distinct spiritual theme and aspect of the love for the Prophet Muhammad ﷺ.
        </p>
        <Link
          className={styles.aboutButton}
          href={`https://www.imamghazali.org/blog/introduction-to-qasidah-burdah`}
          target="_blank"
          rel="noopener noreferrer"
        >
          About Qaseeda Burda
        </Link>
      </div>
      <ul className={styles.chaptersGrid}>
        {CHAPTER_TITLES.map((title, index) => {
          const chNum = index + 1;
          const formattedNum = chNum < 10 ? `0${chNum}` : `${chNum}`;
          return (
            <li key={index} className={styles.chapterItem}>
              <Link
                className={styles.chapterLink}
                href={`/chapters/${chNum}`}
              >
                <div className={styles.chapterHeader}>
                  <span className={styles.chapterNumber}>{formattedNum}</span>
                  <span className={styles.chapterBadge}>Chapter {chNum}</span>
                </div>
                <h3 className={styles.chapterTitle}>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chapters;
