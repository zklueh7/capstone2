import React from "react";
import { Link } from "react-router-dom";

/** Show list of area cards.
 *
 * Used by AreaList to list areas. 
 *
 * AreaList -> AreaCardList -> AreaCard
 *
 */

function AreaCard({ areas }) {
  console.debug("AreaCardList", "areas=", areas);

  return (
      <div className="AreaCardList">
        {areas.map(area => (
          <div className="card-body">
              <Link className="card-title" to={{pathname: `/areas/${area.name}`}}>{area.title}</Link><br></br>
              <img src={area.pictureUrl}></img>
          </div>
        ))}
      </div>
  );
}
export default AreaCard;
