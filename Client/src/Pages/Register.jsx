import { useState, useEffect } from "react";
import "./Pages-css/Register.css";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    phone: false,
    password: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {
        username: user.username.length < 3,
        email: !validateEmail(user.email),
        phone: user.phone.length !== 10 || !/^\d+$/.test(user.phone),
        password: user.password !== user.confirmPassword,
      };

      setErrors(newErrors);

      const isValid = !Object.values(newErrors).some((error) => error) && 
                      Object.values(user).every((field) => field !== "");
      
      setIsFormValid(isValid);
    };

    validateForm();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      Swal.fire({
        title: "Error!",
        text: "Please correct all errors before submitting.",
        icon: "error",
      });
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        Swal.fire({
          title: "Great!",
          text: "User created.",
          icon: "success",
        });
        const res_data = await res.json();
        // console.log("success", res_data);
        navigate("/login");
      } else {
        Swal.fire({
          title: "ERROR!",
          text: "Something went wrong.",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("register ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <main className="register-container">
          <div className="register-card">
            <div className="register-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2115373814844!2d-73.98509668459421!3d40.74881797932844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1626265715745!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="register-content">
              <h2 className="section-title">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">
                    Username <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="error-message">Username must be at least 3 characters long</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="error-message">Please enter a valid email address</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="Enter your phone number"
                    value={user.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="error-message">Phone number must be 10 digits</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    Confirm Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    placeholder="Confirm your password"
                    value={user.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="error-message">Passwords do not match</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address <span className="required">*</span></label>
                  <textarea
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    value={user.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group checkbox">
                  <input type="checkbox" name="tnc" id="tnc" required />
                  <label htmlFor="tnc">
                    I have read and agree to the{" "}
                    <a href="#">Terms & Conditions</a>{" "}
                  </label>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={!isFormValid}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};