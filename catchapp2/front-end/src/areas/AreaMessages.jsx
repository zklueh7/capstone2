import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AreaCard.css";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import UserContext from "../auth/UserContext";
import AreaNavbar from "../routes-nav/AreaNavbar";

/** Show limited information about an area.
 *
 * Is rendered by AreaCardList to show a "card" for each area.
 *
 * AreaCardList -> AreaCard
 */

function AreaMessages() {
  console.debug("AreaMessages");
  const { area } = useParams();

  return (
      <div className="areaDetail">
        <AreaNavbar />  
        <div className="card-body ml-1 pt-2">
          <h6 className="card-title">{area} messages</h6>
        </div>
      </div>
  );
}


export default AreaMessages;
