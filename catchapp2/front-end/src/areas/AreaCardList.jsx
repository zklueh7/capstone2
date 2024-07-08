import React from "react";
import AreaCard from "./AreaCard";
import { Link } from "react-router-dom";

/** Show list of area cards.
 *
 * Used by AreaList to list areas. 
 *
 * AreaList -> AreaCardList -> AreaCard
 *
 */

function AreaCardList({ areas }) {
  console.debug("AreaCardList", "areas=", areas);

  return (
      <div className="AreaCardList">
        {areas.map(area => (
          <div className="card-body">
              <Link className="card-title" to={{pathname: `/areas/${area.name}`, state: `${area.name}`}}>{area.name}</Link>
              <p>Description: {area.description}</p>
              <img src={area.pictureUrl}></img>
          </div>
        ))}
      </div>
  );
}
export default AreaCardList;
