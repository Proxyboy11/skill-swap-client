import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Skill = () => {
  const { id } = useParams();
  const [skill, setSkill] = React.useState({});
  const navigate = useNavigate();

  const skillFetch = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/skills/${id}`
      );
      const data = await res.json();
      setSkill(data.obj);
    } catch (error) {
      toast.error("Error fetching skill:", error.message);
    }
  };

  React.useEffect(() => {
    skillFetch();
  }, []);

  const skillComp = (
    <div className="skill-card" key={skill._id}>
      <h1 style={{ color: "white" }}>
        <span>By : </span>
        {skill.username}
      </h1>
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
          style={{ textDecoration: "none", color: "#3EA6FF" }}
        >
          {skill.portfolio}
        </Link>
      </div>
      <h5>
        <span>last updated : </span>
        {new Date(skill.updatedAt).toLocaleString()}
      </h5>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        padding: "2rem",
        minWidth: "fit-content",
        fontSize: "1.5rem",
      }}
    >
      {/* <IoMdArrowRoundBack
        style={{ fontSize: "3rem", cursor: "pointer" }}
        onClick={() => navigate("/skills/user")}
      /> */}
      {skill ? skillComp : "waiting"}
    </div>
  );
};

export default Skill;
