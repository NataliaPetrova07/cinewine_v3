import Head from "next/head";
import styles from "@/styles/Home.module.css";
import circles from "@/assets/circles.svg";
import Image from "next/image";
import Contribute from "@/components/sections/ContributeSection";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import UpcomingSection from "@/components/sections/UpcomingSection";
import PastEventsSection from "@/components/sections/PastEventsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.hero}>
          <Image className={styles.circles} src={circles} alt="background graphics" width={1515.29} height={1281} />
          <div className={styles.description}>
            <h1>Cultivating connections through cinema & wine </h1>
          </div>
          <a href="https://www.facebook.com/groups/289672311787100" target="_blank" rel="noopener noreferrer" className="link">
            Join the community
          </a>
        </div>
        <UpcomingSection />
        <PastEventsSection />
        <Contribute />
      </main>
    </>
  );
}
