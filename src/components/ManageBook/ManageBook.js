import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageBook = (props) => {
  const { name, price, authorname, imageURL, _id } = props.book;

  const deleteBook = (id) => {
    fetch(`http://localhost:5000/deleteBook/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      console.log('delete succesfully')
    })
  };
  return (
    <div>
      <div className="checkout-table">
        <table>
          <tr>
            <td>{name}</td>
            <td>{authorname}</td>
            <td>{price}</td>
            <td>
              <FontAwesomeIcon icon={faEdit} />
              &nbsp;
              <button onClick={() => deleteBook(_id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
