import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AreaCard.css";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import UserContext from "../auth/UserContext";

/** Show limited information about an area.
 *
 * Is rendered by AreaCardList to show a "card" for each area.
 *
 * AreaCardList -> AreaCard
 */

function AreaDetail() {
  console.debug("AreaCard");
  const { area } = useParams();

  const [areaInfo, setAreaInfo] = useState(null);
  const [messageInfo, setMessageInfo] = useState(null);

  useEffect(function getAreaAndMessageInfoOnMount() {
    console.debug("AreaDetail Messages useEffect getAreaAndMessageInfoOnMount");
    search();
  }, []);

  /** Loads area info and messages. */
  async function search(area) {
    let areaInfo = await CatchAppApi.getAreas(area);
    let messageInfo = await CatchAppApi.getMessages(area);
    console.log(areaInfo[0].latitude);
    console.log("messages", messageInfo);
    setAreaInfo(areaInfo);
    setMessageInfo(messageInfo);
  }
  if (!areaInfo) return <LoadingSpinner />;

  return (
      <div className="areaDetail">
        <div className="card-body">
          <h6 className="card-title">{area} info</h6>
          <p>Latitude: {areaInfo[0].latitude}</p>
          <p>Longitude: {areaInfo[0].longitude}</p>
          <p>Description: {areaInfo[0].description}</p>
          <img src={areaInfo[0].pictureUrl}></img>

          <h6 className="card-title">{area} messages</h6><br></br>

          <h6 className="card-title">{area} weather</h6>
        </div>
      </div>
  );
}


export default AreaDetail;
