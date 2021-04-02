import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import './Addbook.css';

const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const bookData = {
      name: data.name,
      authorname: data.authName,
      price:data.price,
      imageURL: imageURL
    };
    const url = `http://localhost:5000/addBook`;
    console.log(bookData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    }).then((res) => console.log("server side response"));
  };
  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "43e2db0acea534d5ddd6e1d6fa094725");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="added-page">
      <h1>This is Added page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=""><h5>Book Name</h5></label>
        <br />
        <input name="name" placeholder="Enter book name" ref={register} />
        <br />
        <label htmlFor=""><h5>Author Name</h5></label>
        <br />
        <input name="authName" placeholder="Enter author name" ref={register} />
        <br />
        <label htmlFor=""><h5>Price</h5></label>
        <br />
        <input name="price" placeholder="Enter price" ref={register} />
        <br />
        <label htmlFor=""><h5>Add Image</h5></label>
        <br />
        <input name="exampleRequired" type="file" onChange={handleImgUpload} />
        <br />
        <input className="btn btn-info" type="submit" />
      </form>
    </div>
  );
};

export default AddBook;
