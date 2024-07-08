import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AreaCard.css";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import UserContext from "../auth/UserContext";
import AreaNavbar from "../routes-nav/AreaNavbar";
import axios from "axios";


/** Show weather information for an area.
 *
 * Is rendered by AreaCardList to show a "card" for each area.
 *
 * AreaCardList -> AreaCard
 */

function AreaWeather() {
  console.debug("AreaWeather");
  const BASE_URL = "http://api.weatherapi.com/v1";
  const { area } = useParams();
  console.log(area);

    
  const [areaWeather, setAreaWeather] = useState(null);

  useEffect(function getAreaWeatherOnMount(lat, lng) {
    console.debug(`Get area weather for: lat: ${lat}, lng: ${lng}`);
    getWeather(lat, lng);
  }, []);

  /** Loads area info and messages. */
  async function getWeather(lat, lng) {
    let areaWeather = await axios.get("https://api.weatherapi.com/v1/current.json?key=be973e8b65bd4281b2c170504240607&q=orlando");
    console.log(areaWeather);
    setAreaWeather(areaWeather);
  }
  if (!areaWeather) return <LoadingSpinner />;

  return (
      <div className="areaDetail">
        <AreaNavbar />  
        <div className="card-body ml-1 pt-2">
        
          <h6 className="card-title">{area} weather</h6>
          <p>Current temp: {areaWeather.data.current.temp_f}</p>
        </div>
      </div>
  );
}


export default AreaWeather;
