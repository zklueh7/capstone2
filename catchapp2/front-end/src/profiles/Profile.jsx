import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext"; 
import "./Profile.css";

/** User profile page
 *
 * Shows user profile details and 
 * link to profile editing form
 * 
 */

function Profile() {
  const { currentUser } = useContext(UserContext);
  const miscClimber = "/public/misc_climber.png";
  console.debug("User Profile", "currentUser=", currentUser);

  return (
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3 className="text-center mt-2">My Profile</h3>
        <div className="card">
        <div className="container text-center">
            
            <img src={currentUser.pictureUrl } className="prof-img"></img>
            <p>Username: {currentUser.username}</p>
            <p>First Name: {currentUser.firstName}</p>
            <p>Last Name: {currentUser.lastName}</p>
            <p>Email: {currentUser.email}</p>
            <p>Looking for partners? {currentUser.lookingForPartners ? "Yes" : "No"}</p>
            <p>Climbing Type: {currentUser.climbingType}</p>
            <p>Experience Level: {currentUser.experienceLevel}</p>
            <p>
                <Link className="btn btn-primary font-weight-bold" to="/profile-form">
                    Edit Profile
                </Link>
            </p>
        </div>
        </div>


      </div>
  );
}

export default Profile;
