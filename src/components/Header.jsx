import appLogo from "../assets/appLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header>
      <h1>Skill Swap</h1>
      <nav>
        <Link to={isLoggedIn ? "/skills" : "/"} style={{ cursor: "pointer" }}>
          <img src={appLogo} />
        </Link>
        <div>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">
              <CiLogout />
            </button>
          ) : (
            <Link to="/auth">
              <CiLogin />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
