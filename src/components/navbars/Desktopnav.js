import Image from "next/image";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Desktopnav() {
  const router = useRouter();
  return (
    <div className={styles.Desktopnav}>
      <Link className={styles.navitem} href="/">
        <div>
          <Image src="/cinewine.svg" alt="Cinewine Logo" width={109} height={45} />
        </div>
      </Link>
      <NavItem href="/about" text="About" isActive={router.pathname === "/about"}></NavItem>
      <NavItem href="/events" text="Events" isActive={router.pathname === "/events"}></NavItem>
      <NavItem href="/contact" text="Contact" isActive={router.pathname === "/contact"}></NavItem>
      <NavItem href="/volunteer" text="Volunteer" isActive={router.pathname === "/volunteer"}></NavItem>
      <NavItem href="/sponsor" text="Sponsor" isActive={router.pathname === "/sponsor"}></NavItem>
    </div>
  );
}

export default Desktopnav;
