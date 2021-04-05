import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CheckOut.css";

const CheckOut = () => {
  const { _id } = useParams();
  const [books, setBooks] = useState([]);
  console.log(books);
  // const {strTeam} = props.details;
  useEffect(() => {
    fetch(`https://mysterious-bastion-60676.herokuapp.com/book/${_id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  },[]);
  return (
    <div className="container">
      <h1>CheckOut</h1>
      <table>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>{books.name}</td>
          <td>1</td>
          <td>{books.price}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td></td>
          <td>{books.price}</td>
        </tr>
      </table>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-info">Checkout</button>
      </div>
    </div>
  );
};

export default CheckOut;
