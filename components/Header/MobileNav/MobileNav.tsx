import styles from "./MobileNav.module.css";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav({ showBackdrop, setShowBackdrop }: any) {
  const { theme } = useTheme();
  const currentPathname = usePathname();
  const chapterId = currentPathname.split("/")[2];

  useEffect(() => {
    if (showBackdrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBackdrop]);

  return (
    <nav
      className={`${styles.mobileNav} ${showBackdrop ? styles.open : ""} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <div className={styles.navContainer}>
        {/* Header Section */}
        <div className={styles.navHeader}>
          <h2 className={styles.navTitle}>Qaseeda Burda</h2>
          <p className={styles.navSubtitle}>Translations, Tafseer & Recitation</p>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Navigation</h3>
          <div className={styles.mainLinks}>
            <Link
              href="/"
              onClick={() => setShowBackdrop(false)}
              className={`${styles.mainLink} ${
                currentPathname === "/" ? styles.activeLink : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/credits"
              onClick={() => setShowBackdrop(false)}
              className={`${styles.mainLink} ${
                currentPathname === "/credits" ? styles.activeLink : ""
              }`}
            >
              Credits
            </Link>
          </div>
        </div>

        {/* Chapters Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Chapters</h3>
          <div className={styles.chaptersGrid}>
            {[...Array(10)].map((_, index) => {
              const chNum = index + 1;
              const active = index === +chapterId - 1;
              return (
                <Link
                  key={index}
                  href={`/chapters/${chNum}`}
                  onClick={() => setShowBackdrop(false)}
                  className={`${styles.chapterGridItem} ${
                    active ? styles.activeChapter : ""
                  }`}
                >
                  <span className={styles.gridNum}>
                    {chNum < 10 ? `0${chNum}` : chNum}
                  </span>
                  <span className={styles.gridLabel}>Ch {chNum}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
