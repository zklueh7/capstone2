import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import UserContext from "../auth/UserContext";

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
      <div className="Profile">
        <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">My Profile</h1>
            <img src={currentUser.pictureUrl || miscClimber}></img>
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
  );
}

export default Profile;
