import Link from "next/link";
import styles from "./Chapters.module.css";
import { useTheme } from "@/context/ThemeContext";

const Chapters = () => {
  const { theme } = useTheme();

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
