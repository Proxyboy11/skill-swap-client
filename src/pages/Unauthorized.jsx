import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>401</h1>
      <p style={styles.message}>
        You are not authorized to view this page. Please register or log in to
        access the content. If you believe this is an error, please contact
        support.
      </p>
      <Link to="/auth" style={styles.homeBtn}>
        ⟵ Login
      </Link>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#121212",
    color: "#EEEEEE",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 1rem",
  },
  code: {
    fontSize: "8rem",
    margin: "0",
    color: "crimson",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  homeBtn: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "mediumseagreen",
    color: "black",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
};

export default Unauthorized;
