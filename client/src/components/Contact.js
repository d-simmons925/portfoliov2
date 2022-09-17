import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/contact.module.css";

const Contact = ({ handleMsg }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("/email", data, config).then((res) => {
      handleMsg(res.data);
    });
  };
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputText}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className={styles.formControl}>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.inputText}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.formControl}>
            <input
              type="phone"
              id="phone"
              name="phone"
              className={styles.inputText}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className={styles.formControl}>
            <textarea
              id="message"
              name="message"
              className={styles.inputText}
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="message" className={styles.messageLabel}>
              Message
            </label>
          </div>
          <button className={styles.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
