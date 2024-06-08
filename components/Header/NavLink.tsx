import Link from "next/link";
import styles from "./NavLink.module.css";

function NavLink({ title, link, className, onClick }: any) {
  return (
    <li className={`${styles.navLink} ${className}`} onClick={onClick}>
      <Link href={link}>{title}</Link>
    </li>
  );
}

export default NavLink;
