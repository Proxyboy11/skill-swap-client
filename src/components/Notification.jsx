import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NotificationBar = () => {
  const token = localStorage.getItem("token");
  const rawUser = localStorage.getItem("user");
  const { username, email } = JSON.parse(rawUser);
  const [swappers, setSwappers] = React.useState([]);
  const navigate = useNavigate();
  const notiFetch = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/skills`);
      const data = await res.json();
      const userSkills = data.obj.filter((skill) => skill.userEmail === email);
      const allSwappers = userSkills.flatMap((skill) => skill.swappedBy);
      setSwappers(allSwappers);
    } catch (error) {
      toast.error("something went wrong ");
      console.log(error);
    }
  };

  function copyEmail(email) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.info("email copied to clipboard ");
        navigate("/skills/user/search");
      })
      .catch((err) => {
        alert("Failed to copy ");
        console.error(err);
      });
  }

  const swapDisplay = swappers.map((obj) => {
    return (
      <ul key={obj._id}>
        <li onClick={() => copyEmail(obj.email)} style={{ cursor: "grabbing" }}>
          {obj.username} : {obj.email}
        </li>
      </ul>
    );
  });

  React.useEffect(() => {
    notiFetch();
  }, [email, token]);

  return (
    <div className="notification-bar">
      <h1 style={{ textTransform: "uppercase" }}>{username}</h1>
      <h2 style={{ writingMode: "horizontal-tb", textOrientation: "mixed" }}>
        Swapped By:
      </h2>
      {swappers.length === 0 ? (
        <p style={{ writingMode: "horizontal-tb" }}>No swaps yet</p>
      ) : (
        swapDisplay
      )}
    </div>
  );
};
export default NotificationBar;
