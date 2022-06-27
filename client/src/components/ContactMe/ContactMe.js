import React, { useState } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import Typical from "react-typical";
import Head from "../../components/Head/Head";
import "./ContactMe.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [boolean, setBoolean] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = { name, email, message };

      setBoolean(true);

      const res = await axios.post("/contact", data);

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBoolean(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBoolean(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-container" id="contact">
      <Head title={"Contact Me"} description={"Let's Get In Touch"} />
      <div className="form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={["Get In Touch 🤝", 1000, "E-mail me 📧", 1000]}
            />
          </h2>
          <a
            href="https://github.com/Amine13u"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamedaminemannai/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-form">
            <h4>Send Your E-mail Here !!</h4>
            <img
              src={require("../../assets/ContactMe/mail.jpeg")}
              alt="email"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">E-mail</label>
            <input type="email" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                Send <i className="fa-solid fa-paper-plane"></i>
              </button>
              {boolean && (
                <div className="loader">
                  <PropagateLoader color={"#3cbcc3"} />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
