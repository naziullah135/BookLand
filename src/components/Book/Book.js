import React from "react";
import { Link } from "react-router-dom";
import './Book.css';

const Book = (props) => {
  const {name,price,authorname,imageURL,_id} = props.book;
  return (
    <div className="col-md-4 book-box mt-4">
      <div className="img-div">
        <img  src={imageURL} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <h6>{authorname}</h6>
      </div>
      <div className="d-flex">
        <div>
          <h2>{price}</h2>
        </div>
        <div className="buy-btn d-flex justify-content-end">
          <Link to ={`/checkout/${_id}`}><button className="btn btn-info">Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
