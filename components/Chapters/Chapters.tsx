import Link from "next/link";
import styles from "./Chapters.module.css";
import { useTheme } from "@/context/ThemeContext";

const Chapters = () => {
  const { theme } = useTheme();

  const chapters = [
    "Chapter 1: Title 1",
    "Chapter 2: Title 2",
    "Chapter 3: Title 3",
    "Chapter 4: Title 4",
    "Chapter 5: Title 5",
    "Chapter 6: Title 6",
    "Chapter 7: Title 7",
    "Chapter 8: Title 8",
    "Chapter 9: Title 9",
    "Chapter 10: Title 10",
  ];

  const metaDescription = `Explore the chapters of Qaseeda Burda: ${chapters.join(
    ", "
  )}.`;

  return (
    <div id="chapters" className={styles.container}>
      <div className={styles.chaptersDescription}>
        <h2>Chapters</h2>

        <Link
          className={`button ${theme == "dark" ? "buttonDark" : ""}`}
          href={`https://www.imamghazali.org/blog/introduction-to-qasidah-burdah`}
        >
          About Qaseeda Burda
        </Link>
      </div>
      <ul className={styles.chaptersButtonList}>
        {[...Array(10)].map((_, index) => (
          <li key={index}>
            <Link
              className={`button ${theme == "dark" ? "buttonDark" : ""}`}
              key={index}
              href={`/chapters/${index + 1}`}
            >
              Chapter {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chapters;
