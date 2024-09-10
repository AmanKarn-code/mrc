import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Register } from "./Pages/Register";
import { Services } from "./Pages/Service";
import { Login } from "./Pages/Login";
import { Logout } from "./Pages/Logout";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import Admin from "./Pages/Admin";
import AdUser from "./Pages/AdUser";
import AdContact from "./Pages/AdContact";
import { Outlet } from "react-router-dom"; // Import Outlet to handle nested routing

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdUser />} /> {/* Default route */}
          <Route path="user" element={<AdUser />} />
          <Route path="contact" element={<AdContact />} />
          {/* <Route path="services" element={<Services />} /> */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
