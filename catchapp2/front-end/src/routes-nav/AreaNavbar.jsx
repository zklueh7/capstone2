import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function AreaNavbar() {
  const { currentUser } = useContext(UserContext);
  const { area } = useParams();
  const homeLink = `areas/${area}`;
  const messageLink = `/areas/${area}/messages`;
  const weatherLink = `/areas/${area}/weather`;
  console.debug("AreaNavbar", "currentUser=", currentUser);


  return (
      <nav className="Navigation navbar navbar-expand-md">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item ml-2">
            <NavLink className="nav-link" to={homeLink}>
              Area Home
            </NavLink>
          </li>
          <li className="nav-item ml-2">
            <NavLink className="nav-link" to={messageLink}>
              Message Board
          </NavLink>
          </li>
          <li className="nav-item ml-2">
            <NavLink className="nav-link" to={weatherLink}>
              Weather
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default AreaNavbar;
