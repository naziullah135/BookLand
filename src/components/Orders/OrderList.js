import React from 'react';

const OrderList = ({order}) => {
    return (
        <tr>
            <td>{order.orderIn}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.price}</td>
          </tr>
    );
};

export default OrderList;