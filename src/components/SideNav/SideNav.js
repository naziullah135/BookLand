import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faEdit,faThLarge } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-box">
        <h1>Book Shop</h1>
        <Link to="/manageBooks"><p><FontAwesomeIcon icon={faThLarge} /> &nbsp;Manage Books</p></Link>
        <Link to="/addBook"><p><FontAwesomeIcon icon={faPlus} /> &nbsp;Add Book</p></Link>
        <p><FontAwesomeIcon icon={faEdit} />&nbsp;Edit Book</p>
      </div>
    </div>
  );
};

export default SideNav;
