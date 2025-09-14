import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import React from "react";
import BackButton from "./BackButton";

const UserNav = () => {
  const rawUser = localStorage.getItem("user");
  const { username } = JSON.parse(rawUser);
  const navigate = useNavigate();

  return (
    <div>
      <div className="user-nav" style={{ borderBottom: "3px solid white" }}>
        <Link to={"/skills"}>
          <h2>Explore Skills</h2>
        </Link>
        <Link to={"/skills/user"}>
          <h2>Your Skills</h2>
        </Link>
        <Link to={"/skills/user/search"}>
          <h2>Search User</h2>
        </Link>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <CgProfile
            style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => navigate("/skills/user/profile")}
          />
          <IoIosNotifications
            style={{ color: "yellow", fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => navigate("/skills/notifications")}
          />
          <h2 style={{ color: "peachpuff", textTransform: "uppercase" }}>
            {username}
          </h2>
        </div>
      </div>
      <BackButton />
      <Outlet />
    </div>
  );
};

export default UserNav;
