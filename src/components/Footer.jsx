import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Skill Swap. All rights reserved.</p>
      <div>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
