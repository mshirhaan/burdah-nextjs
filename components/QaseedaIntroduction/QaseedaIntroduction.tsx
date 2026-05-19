import styles from "./styles.module.css";
import { useTheme } from "@/context/ThemeContext";

const QaseedaIntroduction = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
      id="introduction"
    >
      <div className={styles.wrapper}>

        {/* Main Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Spiritual Heritage</span>
          <h2 className={styles.mainTitle}>About Qaseeda Burda</h2>
          <p className={styles.mainSubtitle}>
            Explore the history, significance, and divine blessings surrounding the Prophet&apos;s ﷺ Mantle.
          </p>
        </div>

        <div className={styles.editorialGrid}>
          {/* Card 1: Intro (Full Width) */}
          <div className={`${styles.card} ${styles.fullWidth}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNum}>01</span>
              <h3>Introduction</h3>
            </div>
            <p className={styles.cardContent}>
              The Burdah, or the Prophet&apos;s{" "}
              <span className={styles.arabicSalawat} lang="ar" dir="rtl">
                صلى الله عليه وسلم
              </span>{" "}
              Mantle, is a Qasidah (poem) composed by the great Sufi Shaykh Imam
              Sharafuddin Muhammad Al-Busiri{" "}
              <span className={styles.arabicRahmat} lang="ar" dir="rtl">
                عليه الرحمة
              </span>{" "}
              who was born in 608 A.H. (1212 C.E) and passed away in 695 A.H. (1296 C.E).
            </p>
          </div>

          {/* Card 2: History (Left Column) */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNum}>02</span>
              <h3>The Miraculous Cure</h3>
            </div>
            <p className={styles.cardContent}>
              Imam Busiri{" "}
              <span className={styles.arabicRahmat} lang="ar" dir="rtl">
                عليه الرحمة
              </span>{" "}
              wrote this Qasidah after having suffered a stroke and being paralysed
              in half his body. After compiling this Qasidah, he went to sleep. He
              was granted the sacred opportunity of seeing the Beloved Prophet{" "}
              <span className={styles.arabicSalawat} lang="ar" dir="rtl">
                صلى الله عليه وسلم
              </span>{" "}
              in his dream, who placed His sacred hands over his body and covered
              him with His sacred shawl. Instantly, he was cured. When he woke up,
              he observed that he was able to stand and move about.
            </p>
          </div>

          {/* Card 3: Significance (Right Column) */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNum}>03</span>
              <h3>Divine Significance</h3>
            </div>
            <div className={styles.cardContent}>
              <p>
                The next day, when he came out of his house, he met a Dervish (Holy
                person) who was a stranger to him. The Dervish asked him to recite the
                Qasidah, which he had written in praise of the Holy Prophet{" "}
                <span className={styles.arabicSalawat} lang="ar" dir="rtl">
                  صلى الله عليه وسلم
                </span>
                . He asked the Dervish which Qasidah he was referring to. He said the
                one you recited in front of The Most Beloved{" "}
                <span className={styles.arabicSalawat} lang="ar" dir="rtl">
                  صلى الله عليه وسلم
                </span>{" "}
                in the blessed court last night. The news of this spread far and wide.
                Hence, the Qasidah came to be called Qasidah tu&apos;l Burdah and
                received veneration among all Muslims as a Qasidah especially approved
                by the Beloved Prophet{" "}
                <span className={styles.arabicSalawat} lang="ar" dir="rtl">
                  صلى الله عليه وسلم
                </span>
                .
              </p>
              <p className={styles.subParagraph}>
                Its verses are often memorised and inscribed on the walls of public
                buildings. It is congregationally recited in the majalis (spiritual
                gatherings) of the Zaakireen (those who remember Allah Ta&apos;ala)
                all over the world. It cures diseases as well as purifies hearts if
                recited with love and devotion.
              </p>
            </div>
          </div>

          {/* Card 4: Translations (Left Column) */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNum}>04</span>
              <h3>Translations & Popularity</h3>
            </div>
            <p className={styles.cardContent}>
              Qasidah Burdah was translated from Arabic into many languages
              including Persian, Urdu, Latin, French, and English. This Qasidah is
              popular not only in the Middle East but also in India, Pakistan, and
              Africa, etc. This Qasidah was inscribed in beautiful calligraphy on
              the roof of the domes of Masjid-e-Nabawi during the Turkish reign, and
              it was there until 1972.
            </p>
          </div>

          {/* Card 5: Benefits (Right Column) */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNum}>05</span>
              <h3>Spiritual Benefits</h3>
            </div>
            <p className={styles.cardContent}>
              If this Qasidah is read with sincere devotion and cleanliness,
              everyone will derive spiritual benefits. The Qasidah is held in high
              esteem and reverence in all Islamic countries. The reciting and
              memorizing of it is regarded as a source of spiritual blessings. As
              you have just read, the author of this Qasidah gained great benefits.
              This Qasidah will continue to be heard and recited till the Day of
              Judgement, with the same devotion and reverence. In’sha’Allah, it will
              provide spiritual relief to the servants of the Beloved Prophet{" "}
              <span className={styles.arabicSalawat} lang="ar" dir="rtl">
                صلى الله عليه وسلم
              </span>
              . May Allah Almighty grant us its benefits. Aameen.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QaseedaIntroduction;
