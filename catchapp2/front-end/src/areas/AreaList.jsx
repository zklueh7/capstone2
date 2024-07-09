import React, { useState, useEffect } from "react";
import Search from "../search/SearchForm";
import CatchAppApi from "../api/api";
import AreaCard from "./AreaCard";
import LoadingSpinner from "../common/LoadingSpinner";
import "./Area.css";

/** Show page with list of areas.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * AreaList -> AreaCardList -> AreaCard
 *
 * This is routed to at /areas
 */

function AreaList() {
  console.debug("AreaList");

  const [areas, setAreas] = useState(null);

  useEffect(function getAllAreasOnMount() {
    console.debug("useEffect getAllAreasOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(handle) {
    let areas = await CatchAppApi.getAreas(handle);
    setAreas(areas);
  }
  if (!areas) return <LoadingSpinner />;

  return (
      <div className="area-list col-md-8 offset-md-2 pt-4 ml-2">
            <Search searchFor={search} />
            {areas.length
            ? <AreaCard areas={areas} />
            : <p className="lead">Sorry, no results were found!</p>
            }
      </div>
  );
}

export default AreaList;
