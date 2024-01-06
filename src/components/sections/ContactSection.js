import { useTheme } from "@/contexts/ThemeProvider";
import styles from "@/styles/Subpage.module.css";
import { useRef, useState } from "react";

function ContactSection() {
  const { appliedTheme } = useTheme();
  const theForm = useRef(null);
  const [formCompleted, setFormCompleted] = useState(false);

  function submitted(e) {
    e.preventDefault();
    const payload = {
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      message: theForm.current.elements.message.value,
    };
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setFormCompleted(true);
          console.log("payload: ", payload);
        }
      });
  }

  return (
    <>
      {formCompleted ? (
        <div className={styles.confirmation_screen}>
          <div>
            <h2>Message sent</h2>
            <p>Thank you so much for expressing your interest in our event! Our team will carefully review your message and get back to you as soon as possible.</p>
          </div>
        </div>
      ) : (
        <div className={styles.about_content}>
          <p>Do you want to sponsor us, volunteer or simply want to say hello? Reach out to us by sending an email, a direct message on our social media pages or by filling the form below. We will reply as soon as possible.</p>
          <div className={styles.contact_links}>
            <a className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"}`} href="mailto:hello@cinewine.com">
              hello@cinewine.com
            </a>
            <div className={styles.social_links}>
              {" "}
              <a href="https://www.instagram.com/cinewine.cph/" target="_blank" rel="noopener noreferrer" className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"}`}>
                Instagram
              </a>
              <a href="https://www.facebook.com/cinewinecph" target="_blank" rel="noopener noreferrer" className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"}`}>
                Facebook
              </a>
            </div>
          </div>
          <form onSubmit={submitted} ref={theForm} className={`${styles.contactform} ${appliedTheme === "dark" ? styles.contactform_dark : ""}`}>
            <fieldset>
              <label htmlFor="name">Full Name</label>
              <input required type="text" name="name" id="name" pattern="[\p{L}\s]+" />
              <label htmlFor="email">Email</label>
              <input required type="email" name="email" id="email" />
              <label htmlFor="message">Message</label>
              <textarea required className={styles.message} placeholder="Max. 500 characters" maxLength="500" id="message" name="message"></textarea>
            </fieldset>
            <button className={`${appliedTheme === "dark" ? "darkbutton" : "lightbutton"} `} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ContactSection;
