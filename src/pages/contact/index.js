import Head from "next/head";
import Contact from "@/components/display/Contact";
import styles from "@/styles/Subpage.module.css";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles.contact_page}`}>
        <div className={styles.subpage_hero}>
          <div className={styles.contactdisplay}>
            <Contact />
          </div>
        </div>
        <ContactSection />
      </main>
    </>
  );
}