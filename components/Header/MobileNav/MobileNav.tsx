import styles from "./MobileNav.module.css";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav({ showBackdrop, setShowBackdrop }: any) {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Credits", link: "/credits" },
  ];
  const { theme, toggleTheme } = useTheme();

  const currentPathname = usePathname();
  const chapterId = currentPathname.split("/")[2];

  useEffect(() => {
    if (showBackdrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBackdrop]);

  return (
    <nav
      className={`${styles.mobileNav} ${showBackdrop ? styles.open : ""} ${
        theme == "dark" ? "dark" : ""
      }`}
    >
      <ul className={styles.mobileNavItems}>
        {[...Array(10)].map((_, index) => (
          <li
            key={index}
            id={"" + index}
            onClick={() => {
              setShowBackdrop(false);
            }}
          >
            <Link
              className={`button ${theme == "dark" ? "buttonDark" : ""}
              ${index == +chapterId - 1 ? "active" : ""}
            `}
              key={index}
              href={`/chapters/${index + 1}`}
            >
              Chapter {index + 1}
            </Link>
          </li>
        ))}
        {navLinks.map((navLink) => (
          <Link
            id={navLink.title}
            className={`button ${theme == "dark" ? "buttonDark" : ""}
            ${currentPathname == navLink.link ? "active" : ""}
            `}
            key={navLink.title}
            href={navLink.link}
            onClick={() => {
              setShowBackdrop(false);
            }}
          >
            {navLink.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNav;
