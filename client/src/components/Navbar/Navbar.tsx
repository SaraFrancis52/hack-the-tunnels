import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src="Logo_no_background2.png" alt="UPS Logo" className="logo"></img>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button onClick={() => navigate("/sign-up")} className="button">Sign Up</button>
            <button onClick={() => navigate("/login")} className="button">Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
