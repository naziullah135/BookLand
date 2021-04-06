import React from "react";
import { Link } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import ManageBooks from "../ManageBooks/ManageBooks";
import SideNav from "../SideNav/SideNav";
import './AdminPage.css';

const AdminPage = () => {
   
  return (
    <div >
      
       <ManageBooks />
      {/* <div className="col-md-4">
        <h5>
          <Link to="manageBooks">Manage Books</Link>
        </h5>
        <h5>
          <Link to="/addBook">Add Book</Link>
        </h5>
      </div>
      <div className="col-md-8">
        {mana}
      </div> */}
    </div>
  );
};

export default AdminPage;
