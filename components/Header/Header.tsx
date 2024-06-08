import NavLink from "./NavLink";
import styles from "./Header.module.css";
import logoImg from "@/public/images/logo.png";
import calligraphyImg from "@/public/images/burda-calligraphy.avif";
import calligraphyImgDark from "@/public/images/qaseeda-calligraphy.avif";
import Hamburger from "../HamburgerButton/Hamburger";
import MobileNav from "./MobileNav/MobileNav";
import { BsBrightnessHigh } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

function Header({ showBackdrop, setShowBackdrop, theme, toggleTheme }: any) {
  const navLinks = [{ title: "Home", link: "/" }];

  return (
    <>
      <MobileNav
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
      />
      <header className={`${styles.header} `}>
        <div
          className={`${styles.logoContainer} ${
            theme != "dark" ? styles.darkText : ""
          }`}
        >
          <div className={`${styles.logo} ${styles.logoMain} `}>
            <Link href={"/"}>
              <Image alt="Logo Image" src={logoImg} />
            </Link>
          </div>
          <div className={`${styles.logo} slideInFromBottom `}>
            <Link href={"/"}>
              <Image
                alt="Logo Image"
                src={theme == "dark" ? calligraphyImg : calligraphyImgDark}
              />
            </Link>
          </div>
        </div>
        <nav className={styles.mainNav}>
          <ul className={styles.list}>
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.title}
                title={navLink.title}
                link={navLink.link}
                className={styles.navLink}
              />
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.theme} ${
            theme == "dark" ? styles.whiteBtn : styles.blackBtn
          }`}
          onClick={toggleTheme}
        >
          {theme == "light" ? <BsBrightnessHigh /> : <FiMoon />}
        </button>
        <Hamburger
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
        />
      </header>
    </>
  );
}

export default Header;
