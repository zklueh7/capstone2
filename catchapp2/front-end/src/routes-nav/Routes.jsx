import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import Profile from "../profiles/Profile";
import ProfileForm from "../profiles/ProfileForm";
import AreaList from "../areas/AreaList";
import AreaDetail from "../areas/AreaHome";
import AreaMessages from "../messages/AreaMessages";
import AreaWeather from "../areas/AreaWeather";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function CatchRoutes({ login, signup }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );
  
    return (
        <div>
            <Routes>
              <Route exact path="/" element={<Homepage />} />

              <Route exact path="/login" element={<LoginForm login={login} />} />

              <Route exact path="/signup" element={<SignupForm signup={signup} />} />

              <Route exact path="/profile" element={<Profile />} />

              <Route exact path="/profile-form" element={<ProfileForm />} />

              <Route exact path="/search" element={<AreaList />} />

              <Route exact path="/areas/:area" element={<AreaDetail />} />

              <Route exact path="/areas/:area/messages" element={<AreaMessages />} />

              <Route exact path="/areas/:area/weather" element={<AreaWeather />} />
  
            </Routes>
        </div>
    );
  }
  
  export default CatchRoutes;