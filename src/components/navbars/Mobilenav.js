import Image from "next/image";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import burgermenu from "@/assets/burgermenu.svg";
import Link from "next/link";

function Mobilenav() {
  const router = useRouter();
  return (
    <div className={styles.Mobilenav}>
      <Link className={styles.navitem} href="/">
        <div>
          <Image src="/cinewine.svg" alt="Cinewine Logo" width={75} height={32} />
        </div>
      </Link>
      <Image src={burgermenu} alt="Burger Menu" width={32} height={32} />
      <div className="hidden">
        <NavItem href="/about" text="About" isActive={router.pathname === "/about"}></NavItem>
        <NavItem href="/events" text="Events" isActive={router.pathname === "/events"}></NavItem>
        <NavItem href="/contact" text="Contact" isActive={router.pathname === "/contact"}></NavItem>
        <NavItem href="/volunteer" text="Volunteer" isActive={router.pathname === "/volunteer"}></NavItem>
        <NavItem href="/sponsor" text="Sponsor" isActive={router.pathname === "/sponsor"}></NavItem>
      </div>
    </div>
  );
}

export default Mobilenav;
