import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import UserContext from "../auth/UserContext";
import axios from "axios";


/** Show weather information for an area.
 *
 * Is rendered by AreaCardList to show a "card" for each area.
 *
 * AreaCardList -> AreaCard
 */

function AreaWeather() {
  console.debug("AreaWeather");
  const { area } = useParams();

  const [areaInfo, setAreaInfo] = useState(null);
  const [areaWeather, setAreaWeather] = useState(null);

  useEffect(function getAreaAndWeatherInfoOnMount() {
    console.debug("getAreaAndWeatherInfoOnMount");
    search(area);
  }, []);

  /** Loads area info and messages. */
  async function search(area) {
    let areaInfo = await CatchAppApi.getArea(area);
    setAreaInfo(areaInfo);
    getWeather(areaInfo.latitude, areaInfo.longitude);
  }
  if (!areaInfo) return <LoadingSpinner />;

  /** Loads area weather */
  async function getWeather(lat, lng) {
    let url = "https://api.weatherapi.com/v1/current.json?key=be973e8b65bd4281b2c170504240607&q=" + lat + "," + lng;
    let areaWeather = await axios.get(url);

    setAreaWeather(areaWeather);
    console.log(areaWeather.data);
  }
  if (!areaWeather) return <LoadingSpinner />;

  return (
      <div className="area-weather">
        <div className="card-body ml-1 pt-2">
        
          <h6 className="card-title">{areaInfo.title} weather</h6>
          <img src={areaWeather.data.current.condition.icon}></img>
          <p>{areaWeather.data.current.condition.text}</p>
          <p>Temperature: {areaWeather.data.current.temp_f} degrees F</p>
          <p>Wind: {areaWeather.data.current.wind_mph} mph</p>
          <Link className="card-title" to={{pathname: `/areas/${area}`}}>Back to Area Home</Link>
        </div>  
      </div>
  );
}


export default AreaWeather;
