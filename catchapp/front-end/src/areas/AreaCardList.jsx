import React from "react";
import AreaCard from "./AreaCard";

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
            <AreaCard
                name={area.name}
                latitude={area.latitude}
                longitude={area.longitude}
                description={area.description}
                picture={area.pictureUrl}
            />
        ))}
      </div>
  );
}

export default AreaCardList;
