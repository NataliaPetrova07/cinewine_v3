import Image from "next/image";
import NavItem from "../navbars/NavItem";
import styles from "../navbars/Navbar.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.Footer}>
      <Link className={styles.navitem} href="/">
        <div>
          <Image src="/cinewine.svg" alt="Cinewine Logo" width={109} height={45} />
        </div>
      </Link>
      <NavItem href="/about" text="About"></NavItem>
      <NavItem href="/events" text="Events"></NavItem>
      <NavItem href="/contact" text="Contact"></NavItem>
      <NavItem href="/volunteer" text="Facebook"></NavItem>
      <NavItem href="/sponsor" text="Instagram"></NavItem>
      <p>2023 - Two Forks </p>
    </div>
  );
}

export default Footer;
