import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "", // service ID
          "", // template ID
          mailData,
          "" // user ID
        )
        .then(
          () => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => console.log(err.text)
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="devman_tm_section" id="contact">
      <div className="container">
        <div className="two_panel_contact">
          {/* Left Panel - Contact Info */}
          <div className="contact_info">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <i className="icon-location orangeText" />
                Tampa, FL
              </li>
              <li>
                <i className="icon-mail-1 greenText" />
                <a href="mailto:bharathwazkalamsetti@gmail.com">
                  bharathwazkalamsetti@gmail.com
                </a>
              </li>
              <li>
                <i className="icon-phone purpleText" />
                +1 716-939-6955
              </li>
            </ul>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="contact_form_wrapper">
            <h3>Drop Me a Line</h3>
            <form onSubmit={onSubmit} className="contact_form">
              <div className={error ? "empty_notice" : "returnmessage"}>
                <span>
                  {error
                    ? "Please Fill Required Fields"
                    : "Your message has been received, We will contact you soon."}
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={onChange}
                value={name}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={email}
              />
              <textarea
                name="message"
                placeholder="Your message"
                onChange={onChange}
                value={message}
              />
              <input type="submit" value="Send Message" />
            </form>


            </div>
          </div>
        </div>
      </div>

  );
};

export default Contact;
