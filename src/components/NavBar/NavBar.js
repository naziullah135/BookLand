import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./NavBar.css";
import Logo from "../../images/Logo-02.png";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <img src={Logo} style={{ width: "50%" }} alt="" />
          </div>
          <div className="nav-link container-fluid justify-content-end">
            <Link to="/home" className="nav-link">
              <h5>Home</h5>
            </Link>
            <Link to="/orders" className="nav-link">
              <h5>Orders</h5>
            </Link>
            <Link to="/admin" className="nav-link">
              <h5>Admin</h5>
            </Link>
            <button
              onClick={() => setLoggedInUser({})}
              className="btn btn-info"
            >
              <Link to="/login" className="nav-link text-white">
                {loggedInUser.email
                  ? loggedInUser.name || loggedInUser.email
                  : "Login"}
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
