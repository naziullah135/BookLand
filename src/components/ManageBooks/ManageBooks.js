import React, { useEffect, useState } from "react";
import SideNav from "../SideNav/SideNav";
import ManageBook from "../ManageBook/ManageBook";


const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-bastion-60676.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="d-flex">
      <div className="col-md-3 col-sm-12">
        <SideNav />
      </div>
      <div className="col-md-9 col-sm-12 checkout-table">
        <h2>Manage books</h2>
        <table>
          <tr>
            <th>Description</th>
            <th>AuthorName</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {books.map((book) => (
          <ManageBook book={book}></ManageBook>
        ))}
        </table>   
      </div>
    </div>
  );
};

export default ManageBooks;
