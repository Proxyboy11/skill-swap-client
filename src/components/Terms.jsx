import React from "react";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    color: "white",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "peachpuff",
  },
  section: {
    marginTop: "20px",
  },
  title: {
    fontSize: "1.3rem",
    color: "#0284c7",
    marginBottom: "10px",
  },
};

const TermsOfService = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms of Service</h1>

      <div style={styles.section}>
        <h2 style={styles.title}>1. Acceptance of Terms</h2>
        <p>
          By using Skill Swap, you agree to abide by these terms and all
          applicable laws and regulations. If you do not agree, please do not
          use the platform.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>2. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and any content you upload. Abusive or misleading content
          is not allowed.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>3. Intellectual Property</h2>
        <p>
          All content on Skill Swap is either owned by us or licensed to us. You
          may not copy, modify, or distribute any content without permission.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>4. Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these terms or abuse the platform in any way.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>5. Modifications</h2>
        <p>
          We may revise these terms at any time without prior notice. By
          continuing to use the platform, you agree to be bound by the updated
          terms.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
