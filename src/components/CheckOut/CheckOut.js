import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router";
import "./CheckOut.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const CheckOut = () => {
  const { _id } = useParams();
  const [books, setBooks] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({ orderIn: new Date() });

  const handleOrderDate = (date) => {
    const newDate = { ...selectedDate };
    newDate.orderIn = date;
    setSelectedDate(newDate);
  };

  const submitOrder = () => {
    const newOrder = { ...loggedInUser, ...books, ...selectedDate };
    fetch("https://mysterious-bastion-60676.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // const {strTeam} = props.details;
  useEffect(() => {
    fetch(`https://mysterious-bastion-60676.herokuapp.com/book/${_id}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1>CheckOut</h1>
      <div className="checkout-table">
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Order in Date"
              value={selectedDate.orderIn}
              onChange={handleOrderDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button onClick={submitOrder} className="btn btn-info text-white">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
