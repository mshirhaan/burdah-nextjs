import NavLink from "./NavLink";
import styles from "./Header.module.css";
import logoDarkImg from "@/public/images/logo.svg";
import Hamburger from "../HamburgerButton/Hamburger";
import MobileNav from "./MobileNav/MobileNav";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import ThemeIcon from "../ThemeIcon/ThemeIcon";

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
              <Image alt="Logo Image" src={logoDarkImg} />
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
          {theme == "light" ? (
            <ThemeIcon Icon={MdOutlineWbSunny} color="#598562" />
          ) : (
            <ThemeIcon Icon={FiMoon} />
          )}
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
