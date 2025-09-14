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

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>

      <div style={styles.section}>
        <h2 style={styles.title}>1. Information We Collect</h2>
        <p>
          We collect user information such as name, email, and skill details
          when you register or use Skill Swap. This data helps us provide
          personalized experiences and match skill-based collaborations.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>2. How We Use Your Information</h2>
        <p>
          We use your data strictly to operate and improve the Skill Swap
          platform. Your information is never sold or shared with third parties
          without consent.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>3. Data Security</h2>
        <p>
          We use encryption and token-based authentication to keep your data
          secure. However, please understand that no method of transmission over
          the internet is 100% secure.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>4. Your Rights</h2>
        <p>
          You may request to update or delete your data by contacting us through
          the support email provided on the Contact page.
        </p>
      </div>

      <div style={styles.section}>
        <p>
          This policy may be updated periodically. Continued use of the platform
          after changes implies acceptance of the new terms.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
