import { useTheme } from "@/contexts/ThemeProvider";
import Link from "next/link";
import styles from "@/components/navbars/Navbar.module.css";

function NavItem({ href, text, isActive, onClick }) {
  const { appliedTheme } = useTheme();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link className={`${styles.navitem} ${isActive ? styles.activeIndicator : ""} ${appliedTheme === "dark" ? styles.darkmodenavitem : ""}`} href={href}>
      <div onClick={handleClick}>{text}</div>
    </Link>
  );
}

export default NavItem;
