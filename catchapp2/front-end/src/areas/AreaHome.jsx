import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import "./Area.css";

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
        <div className="card mt-2 ml-2 mr-4">
        <div className="card-body ml-1 pt-2">
          <h6 className="card-title">{areaInfo.title}</h6>
          <p>{areaInfo.description}</p>
          <Link className="btn btn-primary btn-block mt-2" to={{pathname: `/areas/${areaInfo.name}/weather`}}>Weather</Link>
          <img src="https://scx2.b-cdn.net/gfx/news/hires/2019/weatherforec.jpg" className="weather-img"></img><br></br>
          <Link className="btn btn-primary btn-block mt-2" to={{pathname: `/areas/${areaInfo.name}/messages`}}>Message Board</Link>
          <img src="https://static.vecteezy.com/system/resources/previews/026/574/999/non_2x/letter-in-opened-envelope-flat-line-color-isolated-object-exchange-messages-editable-clip-art-image-on-white-background-simple-outline-cartoon-spot-illustration-for-web-design-vector.jpg" className="msg-img"></img>
        </div>
        </div>
      </div>
  );
}


export default AreaHome;
