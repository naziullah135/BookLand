import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import './NavBar.css';

const NavBar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <h3>Book Shop</h3>
          </div>
          <div class="nav-link container-fluid justify-content-end">
            <Link to="/home">
              <h5>Home</h5>
            </Link>
            <Link to="/checkout/:_id">
              <h5>Orders</h5>
            </Link>
            <Link to="/admin">
            <h5>Admin</h5>
            </Link>
            <button onClick={() => setLoggedInUser({})} className="btn btn-info">
            <Link to="/login">{loggedInUser.email ? loggedInUser.name || loggedInUser.email : "Login"}</Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
