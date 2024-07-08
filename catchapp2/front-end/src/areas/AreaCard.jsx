import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./AreaCard.css";
import UserContext from "../auth/UserContext";

/** Show limited information about an area.
 *
 * Is rendered by AreaCardList to show a "card" for each area.
 *
 * AreaCardList -> AreaCard
 */

function AreaCard({ name, latitude, longitude, description, picture }) {
  console.debug("AreaCard");

  return (
      <div className="JobCard card">
        <div className="card-body">
          <Link className="card-title" to={{pathname: `/areas/${name}`, state: `${name}`}}>{name}</Link>
          <p>Description: {description}</p>
          <img src={picture}></img>
        </div>
      </div>
  );
}


export default AreaCard;
