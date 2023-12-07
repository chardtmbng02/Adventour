import React, { useState } from "react";
import  Logo  from "../../assets/index/Adventourist-Logo.png";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="ml-3" src={Logo} alt="prtlgo" />
          </NavLink>
          <div className="menu-icon text-white" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tourism"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Tourism
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/restaurants"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Restaurants
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/accomodations"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Accomodations
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};
