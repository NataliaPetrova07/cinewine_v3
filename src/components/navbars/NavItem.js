import Link from "next/link";
import PropTypes from "prop-types";
import styles from "@/components/navbars/Navbar.module.css";

function NavItem({ href, text, isActive, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link className={`${styles.navitem} ${isActive ? styles.activeIndicator : ""}`} href={href}>
      <div onClick={handleClick}>{text}</div>
    </Link>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavItem;
