import { useState, useEffect } from "react";
import "./Pages-css/Contact.css";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";

export const Contact = () => {
  const [conMessage, setConMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Retrieve the stored username and email from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedUsername = localStorage.getItem("username");

    // Prefill the fields if available
    setConMessage((prevConMessage) => ({
      ...prevConMessage,
      email: storedEmail || "",
      name: storedUsername || "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConMessage((prevConMessage) => ({
      ...prevConMessage,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  
    if (!conMessage.email || !conMessage.name) {
      Swal.fire({
        title: "Error!",
        text: "Please ensure both email and name are filled in.",
        icon: "error",
      });
      return;
    }
  
    try {
      const res = await fetch("http://localhost:3000/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(conMessage),
      });
  
      if (res.ok) {
        Swal.fire({
          title: "Great!",
          text: "Message sent successfully.",
          icon: "success",
        });
        // Reset form fields
        setConMessage({
          name: localStorage.getItem("username") || "",
          email: localStorage.getItem("email") || "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "There was an error. Plaese login first.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
      console.log("this from contact",error);
      
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contact-container">
          <div className="image-section"></div>
          <div className="contact-form">
            <h2 className="section-title">Contact Us</h2>
            <form onSubmit={onSubmit} method="POST">
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  value={conMessage.name}
                  onChange={handleChange}
                  readOnly
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  value={conMessage.email}
                  onChange={handleChange}
                  readOnly
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder=" "
                  required
                  value={conMessage.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
