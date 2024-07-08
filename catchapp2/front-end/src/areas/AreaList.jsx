import React, { useState, useEffect } from "react";
import Search from "../common/SearchForm";
import CatchAppApi from "../api/api";
import AreaCardList from "./AreaCardList";
import LoadingSpinner from "../common/LoadingSpinner";

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
    console.debug("AreaList useEffect getAllAreasOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(handle) {
    let areas = await CatchAppApi.getAreas(handle);
    setAreas(areas);
  }
  if (!areas) return <LoadingSpinner />;

  return (
      <div className="JobList col-md-8 offset-md-2 pt-4">
            <Search searchFor={search} />
            {areas.length
            ? <AreaCardList areas={areas} />
            : <p className="lead">Sorry, no results were found!</p>
            }
      </div>
  );
}

export default AreaList;
