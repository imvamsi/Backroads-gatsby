import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="Us" />
      <div className={styles.center}>
        <form action="" className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              className={styles.formControl}
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className={styles.formControl}
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="10"
              className={styles.formControl}
              placeholder="Enter your Message here..."
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
