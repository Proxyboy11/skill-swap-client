import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const SearchBar = () => {
  const [email, setEmail] = React.useState("");
  const [skills, setSkills] = React.useState([]);
  const token = localStorage.getItem("token");
  const rawUser = localStorage.getItem("user");
  let user = JSON.parse(rawUser);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = formData.get("user");
    setEmail(user);
  };

  const skillFetch = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/skills/`);
      const data = await res.json();

      setSkills(data.obj);
    } catch (error) {
      toast.error("Error fetching skills:", error.message);
    }
  };

  const newSkill = skills.filter((skill) => skill.userEmail === email);

  React.useEffect(() => {
    skillFetch();
  }, [email]);

  const updateSwap = async (id) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/v1/skills/swap/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Swap sent successfully!");
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info(error.response.data.message); // "You've already swapped..."
      } else {
        toast.error("Unable to swap the skill");
      }
    }
  };

  const skillDisplay =
    newSkill.length == 0 ? (
      <p className="failed-search">
        No skills associated with the user found !!
      </p>
    ) : (
      newSkill.map((skill) => {
        return (
          <div className="skill-card" key={skill._id}>
            <div className="card-header">
              <span>By : </span>
              {skill.username}
            </div>
            <h2>
              <span>Name :</span> {skill.skill}
            </h2>
            <h3>
              <span>Proficiency :</span> {skill.proficiency}
            </h3>
            <h3>
              <span>Experience : </span>
              {skill.yearsOfExperience} years
            </h3>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <h4>
                <span>Portfolio :</span>
              </h4>
              <Link
                to={skill.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "lime" }}
              >
                {skill.portfolio}
              </Link>
            </div>
            <h5>
              <span>last updated : </span>
              {new Date(skill.updatedAt).toLocaleString()}
            </h5>
            <button
              className="logout-btn"
              onClick={() => updateSwap(skill._id)}
            >
              swap
            </button>
          </div>
        );
      })
    );

  return (
    <div className="search">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for a user Email..."
          className="searchbar"
          name="user"
        />
        <button type="submit" className="logout-btn">
          <CiSearch />
        </button>
      </form>
      <div className="all-skill">{email ? skillDisplay : ""}</div>
    </div>
  );
};

export default SearchBar;
