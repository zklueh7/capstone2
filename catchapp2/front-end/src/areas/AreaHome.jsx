import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import UserContext from "../auth/UserContext";
import AreaNavbar from "../routes-nav/AreaNavbar";


/** Show area home page
 *
 * Area description and links to area message board and weather pages
 *
 * Linked to from AreaCard
 */

function AreaHome() {
  console.debug("AreaHome");
  const { area } = useParams();

  const [areaInfo, setAreaInfo] = useState(null);

  useEffect(function getAreaInfoOnMount() {
    console.debug("getAreaInfoOnMount");
    search(area);
  }, []);

  /** Loads area info and messages. */
  async function search(myArea) {
    let areaInfo = await CatchAppApi.getArea(area);
    setAreaInfo(areaInfo);
  }
  if (!areaInfo) return <LoadingSpinner />;

  return (
      <div className="area-home">
        <div className="card-body ml-1 pt-2">
          <h6 className="card-title">{areaInfo.title}</h6>
          <p>{areaInfo.description}</p>
          <Link className="card-title" to={{pathname: `/areas/${areaInfo.name}/weather`}}>Weather</Link><br></br>
          <Link className="card-title" to={{pathname: `/areas/${areaInfo.name}/messages`}}>Message Board</Link>
        </div>
      </div>
  );
}


export default AreaHome;
