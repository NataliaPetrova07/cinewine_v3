import Head from "next/head";
import About from "@/components/display/About";
import styles from "@/styles/Subpage.module.css";
import LabeledDivider from "@/components/dividers/LabeledDivider";
import ContributeSection from "@/components/sections/ContributeSection";
import Image from "next/image";
import karolina from "@/assets/karolina.png";
import rahuset from "@/assets/rahuset_2.png";
import FaqAccordion from "@/components/sections/FaqAccordion";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.subpage_hero}>
          <div className={styles.aboutdisplay}>
            <About />
          </div>
        </div>
        <div className={styles.about_contentflex}>
          <h1>Collective action through shared experiences.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie eleifend sem eget pellentesque. Proin congue, eros vel posuere interdum, elit sapien lacinia massa, in finibus magna nulla eget leo. Phasellus ut tellus non lacus
            ullamcorper lacinia vel in libero. Curabitur id porta enim, sed ullamcorper neque. Mauris a dictum est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam condimentum leo id pharetra
            molestie. Sed in auctor orci. Donec ultrices sit amet nisi in dictum.
          </p>
          <section className={styles.valuesgrid}>
            <div>
              <LabeledDivider label={"Mission"} />
              <p>Create a space for people to gather, offering a sense of belonging to a community through shared experiences to combat the isolation of those living away from their home countries.</p>
            </div>
            <div>
              <LabeledDivider label={"Vision"} />
              <p>We aspire to create a leading event that will ignite positive transformations/change by bringing people together in a space where diverse perspectives and cultural narratives shine.</p>
            </div>
            <div>
              <LabeledDivider label={"Values"} />
              <p>Inclusivity - An accessible alternative for those seeking connection.</p>
              <p>Diversity - We welcome everyone.</p>
              <p>Global Perspective - Events that showcase the global diversity, challenge cultural norms and create an inclusive environment.</p>
            </div>
          </section>
        </div>
        <section className={styles.theteam}>
          <LabeledDivider label={"The Team"} />
          <div className={styles.theteamcontent}>
            <div>
              <Image src={karolina} alt="portrait of Karolina Curova" height={400} layout="responsive" />
              <h4 className="highlighted">Karolína Čurová</h4>
              <p>Founder of Cinewine</p>
            </div>
            <div>
              <Image src={rahuset} alt="picture of a building" height={400} layout="responsive" />
              <h4 className="highlighted">Råhuset</h4>
              <p>Cinewine's venue in Vesterbro, Copenhagen</p>
            </div>
          </div>
        </section>
        <section className={styles.faq_section}>
          <h2>FAQ</h2>
          <FaqAccordion />
        </section>
        <ContributeSection />
      </main>
    </>
  );
}
