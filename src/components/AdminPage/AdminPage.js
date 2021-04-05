import React from 'react';
import { Link } from 'react-router-dom';
import AddBook from '../AddBook/AddBook';


const AdminPage = () => {
    return (
        <div>
            <div className="col-md-4">
                <h5><Link to='/addBook'>Add Book</Link> </h5>
            </div>
            <div >
                
            </div>
        </div>
    );
};

export default AdminPage;