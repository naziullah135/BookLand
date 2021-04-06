import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageBook = (props) => {
  const { name, price, authorname, imageURL, _id } = props.book;
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
              <button>
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
