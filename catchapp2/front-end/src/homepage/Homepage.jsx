import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="Homepage pt-5">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">CatchApp</h1>
          <img src="https://25.media.tumblr.com/55a1be4296cc5516f9ea9ade216e99c0/tumblr_mrdbw8H48e1sx0siio1_400.gif" className="whip"></img>
          {currentUser
              ? 
              <div>
                <h5>Find your next climbing partner today {currentUser.firstName || currentUser.username}!</h5>
              </div>
              
              : (
                  <div>
                    <h6 className="whip">Log in or create an account to find your next climbing partner today! </h6>
                    <Link className="btn btn-primary font-weight-bold mr-3"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/signup">
                      Sign up
                    </Link>
                  </div>
              )}
        </div>
      </div>
  );
}

export default Homepage;
