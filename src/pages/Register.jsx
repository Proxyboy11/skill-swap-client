import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [state, setState] = React.useState(true); // true = login
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = state
      ? `${import.meta.env.VITE_API_URL}/api/v1/user/login`
      : `${import.meta.env.VITE_API_URL}/api/v1/user/register`;
    const data = state
      ? { email, password }
      : { username: name, email, password };

    try {
      const response = await axios.post(url, data);

      if (response.data?.token && response.data?.userData) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.userData));
        toast.success("Login successful!");
        navigate("/skills");
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong. Please try again.";

      toast.error(`❌ ${message}`);
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h1>{state ? "Login" : "Register"}</h1>
        <div>
          {state ? null : (
            <label>
              <h2>Name</h2>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </label>
          )}
          <label>
            <h2>Email</h2>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <h2>Password</h2>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button>{state ? "Login" : "Register"}</button>
        <div className="help">
          <p>{state ? `Don't have an account?` : `Already have an account?`}</p>
          <a onClick={() => setState(!state)}>
            {state ? "Sign-up" : "Sign-in"}
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
