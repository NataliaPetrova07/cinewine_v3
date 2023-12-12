import styles from "@/styles/Subpage.module.css";

function ContactSection() {
  return (
    <div className={styles.about_content}>
      <p>Do have a question, a suggestion, or simply want to say hello? Reach out to us by sending an email, a direct message on our social media pages or by filling the form below. We will reply as soon as possible.</p>
      <div className={styles.contact_links}>
        <a href="#" className="link">
          hello@cinewine.com
        </a>
        <div className={styles.social_links}>
          {" "}
          <a href="https://www.instagram.com/cinewine.cph/" className="link">
            Instagram
          </a>
          <a href="https://www.facebook.com/cinewinecph" className="link">
            Facebook
          </a>
        </div>
      </div>
      <div className={styles.contactform}>
        <fieldset>
          <label htmlFor="name">Full Name</label>
          <input required type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input required type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea required className={styles.message} placeholder="Max. 500 characters" maxLength="500" id="message" name="message"></textarea>
        </fieldset>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default ContactSection;
