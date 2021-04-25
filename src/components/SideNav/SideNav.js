import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faThLarge,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-box">
        <h1>BookLand</h1>
        <Link to="/home" className="nav-link text-white">
          <p>
            <FontAwesomeIcon icon={faHome} /> &nbsp;Home
          </p>
        </Link>
        <Link to="/manageBooks" className="nav-link text-white">
          <p>
            <FontAwesomeIcon icon={faThLarge} /> &nbsp;Manage Books
          </p>
        </Link>
        <Link to="/addBook" className="nav-link text-white">
          <p>
            <FontAwesomeIcon icon={faPlus} /> &nbsp;Add Book
          </p>
        </Link>
        <p className="nav-link">
          <FontAwesomeIcon icon={faEdit} />
          &nbsp;Edit Book
        </p>
      </div>
    </div>
  );
};

export default SideNav;
