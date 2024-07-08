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

function AreaInfo() {
  console.debug("AreaInfo");
  const { area } = useParams();

  return (
      <div className="areaDetail">
        <div className="card-body">
          <AreaNavbar />  
          <h6 className="card-title">{area} info</h6>
        </div>
      </div>
  );
}


export default AreaInfo;
