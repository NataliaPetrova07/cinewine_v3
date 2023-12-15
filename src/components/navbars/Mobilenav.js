import Image from "next/image";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import burgermenu from "@/assets/burgermenu.svg";
import close from "@/assets/close.svg";
import Link from "next/link";
import { useState } from "react";

function Mobilenav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.Mobilenav}>
      <Link className={styles.navitem} href="/">
        <div>
          <Image src="/cinewine.svg" alt="Cinewine Logo" width={75} height={32} />
        </div>
      </Link>
      <div className={`${styles.burgermenu} ${isOpen ? styles.open : ""}`}>
        <Image className={styles.menuicon} onClick={handleToggle} src={burgermenu} alt="Burger Menu" width={24} height={24} />
        <div className={styles.menuoverlay} onClick={handleToggle}>
          <div className={styles.menucontainer}>
            <Image className={styles.closeicon} onClick={handleToggle} src={close} alt="Burger Menu" width={24} height={24} />
            <NavItem href="/" text="Home" isActive={router.pathname === "/"} onClick={handleToggle}></NavItem>
            <NavItem href="/about" text="About" isActive={router.pathname === "/about"} onClick={handleToggle}></NavItem>
            <NavItem href="/events" text="Events" isActive={router.pathname === "/events"} onClick={handleToggle}></NavItem>
            <NavItem href="/contact" text="Contact" isActive={router.pathname === "/contact"} onClick={handleToggle}></NavItem>
            <NavItem href="/volunteer" text="Volunteer" isActive={router.pathname === "/volunteer"} onClick={handleToggle}></NavItem>
            <NavItem href="/sponsor" text="Sponsor" isActive={router.pathname === "/sponsor"} onClick={handleToggle}></NavItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilenav;
