import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-bastion-60676.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="row container">
      {books.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
};

export default Home;
