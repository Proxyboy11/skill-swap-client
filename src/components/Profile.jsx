import React from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="profile">
      <CgProfile
        style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
        onClick={() => navigate(-1)}
      />
      <h2>
        <span>Username : </span>
        {userData.username}
      </h2>
      <h2>
        <span>Email : </span>
        {userData.email}
      </h2>
    </div>
  );
};

export default Profile;
8;
