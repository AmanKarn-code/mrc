import { useState } from "react";
import "./Pages-css/Register.css";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
const navigate=useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      const res_data = await res.json();

      // Store the token and username in localStorage
      localStorage.setItem("token", res_data.token);
      localStorage.setItem("username", res_data.userName);  
      localStorage.setItem("email", res_data.email);
      localStorage.setItem("isAdmin", res_data.isAdmin);

      Swal.fire({
        title: "Great!",
        text: "Login successful.",
        icon: "success",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });

      setCredentials({ email: "", password: "" });
      navigate("/");
      // console.log("login success", res_data);
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Something went wrong",
        icon: "error",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }
  } catch (error) {
    console.log(error);
  }
};


  const handleSocialLogin = (platform) => {
    // social login logic here
    console.log(`Logging in with ${platform}`);
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <main className="register-container">
          <div className="register-card">
            <div className="register-image">
              <img
                src="../src/assets/login.png"
                alt="Login"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </div>
            <div className="register-content">
              <h2 className="section-title">Login</h2>
              <form onSubmit={handleSubmit}>
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
                    value={credentials.email}
                    onChange={handleChange}
                  />
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
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group checkbox">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <div className="form-group">
                  <button type="submit" className="submit-btn">
                    Login
                  </button>
                </div>
                <div className="form-group">
                  <p>
                    Don't have an account? <a href="/register">Sign Up</a>
                  </p>
                </div>
                <p className="other-options">or</p>
                <div className="form-group social-login">
                  <a
                    href="#"
                    // className="google-btn"
                    onClick={() => handleSocialLogin("Google")}
                  >
                    <img
                      src="../src/assets/google.png"
                      alt="Login with Google"
                    />
                  </a>
                  <a
                    href="#"
                    // className="github-btn"
                    onClick={() => handleSocialLogin("GitHub")}
                  >
                    <img
                      src="../src/assets/github.png"
                      alt="Login with Github"
                    />
                  </a>
                  <a
                    href="#"
                    // className="facebook-btn"
                    onClick={() => handleSocialLogin("Facebook")}
                  >
                    <img
                      src="../src/assets/facebook.png"
                      alt="Login with Facebook"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
