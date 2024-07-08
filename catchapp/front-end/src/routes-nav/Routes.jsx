import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import Profile from "../profiles/Profile";
import ProfileForm from "../profiles/ProfileForm";
import AreaList from "../areas/AreaList";
import AreaDetail from "../areas/AreaDetail";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );
  
    return (
        <div className="pt-5">
          <Switch>
  
            <Route exact path="/" component={Homepage}/>

  
            <Route exact path="/login">
              <LoginForm login={login} />
            </Route>
  
            <Route exact path="/signup">
              <SignupForm signup={signup} />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/profile-form">
              <ProfileForm />
            </Route>

            <Route exact path="/search">
              <AreaList />
            </Route>

            <Route exact path="/areas/:area">
              <AreaDetail />
            </Route>
  
            <Redirect to="/" />
          </Switch>
        </div>
    );
  }
  
  export default Routes;