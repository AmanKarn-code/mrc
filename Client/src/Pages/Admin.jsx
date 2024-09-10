import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Admin.css"; // Importing the CSS file
import Navbar from "../Components/Navbar";

const Admin = () => {
  return (
    <>
    <Navbar/>
    <div className="admin-container">
      <nav className="admin-navbar">
        <ul>
          <li>
            <NavLink to="user" className="admin-link" activeClassName="active-link">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="admin-link" activeClassName="active-link">
              Contacts
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="services" className="admin-link" activeClassName="active-link">
              Services
            </NavLink>
          </li> */}
        </ul>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Admin;
