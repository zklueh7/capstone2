import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
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

function AreaDetail() {
  console.debug("AreaDetail");
  const { area } = useParams();

  const [areaInfo, setAreaInfo] = useState(null);

  useEffect(function getAreaInfoOnMount() {
    console.debug("getAreaInfoOnMount");
    search(area);
  }, []);

  /** Loads area info and messages. */
  async function search(myArea) {
    let areaInfo = await CatchAppApi.getAreas(area);
    setAreaInfo(areaInfo);
  }
  if (!areaInfo) return <LoadingSpinner />;

  return (
      <div className="areaDetail">
        <AreaNavbar />
        <div className="card-body ml-1 pt-2">
          <h6 className="card-title">{areaInfo[0].title}</h6>
          <img src={areaInfo[0].pictureUrl}></img>
          <p>{areaInfo[0].description}</p>
        </div>
      </div>
  );
}


export default AreaDetail;
