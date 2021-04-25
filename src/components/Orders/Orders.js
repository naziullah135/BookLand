import React, { useEffect, useState } from "react";
import OrderList from "./OrderList";
import "./Orders.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-bastion-60676.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container">
      <h1>Ordered Books</h1>
      <table>
        <tr>
          <th>Order Date</th>
          <th>Book Name</th>
          <th>Email</th>
          <th>Price</th>         
        </tr>
      {orders.map(order => <OrderList order={order}></OrderList>)}
      </table>
    </div>
  );
};

export default Orders;
