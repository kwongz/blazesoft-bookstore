import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBook, addBook } from "./bookstoreSlice";

const Modal = ({ addEditBook, setHideModal, modalType }) => {
  const dispatch = useDispatch();

  //create state to store new book object
  const [newBook, setNewBook] = useState(addEditBook);

  const handleChange = (e) => {
    const value = e.target.value;
    setNewBook({
      ...newBook,
      [e.target.name]: value,
    });
  };

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setHideModal(true);
    if (modalType === "edit") {
      dispatch(editBook(newBook));
    } else if (modalType === "add") {
      dispatch(addBook(newBook));
    }
  };

  const capitalizedStr =
    modalType.slice(0, 1).toUpperCase() + modalType.slice(1);

  return (
    <div>
      <h2>{capitalizedStr} Book Details</h2>
      <form className="popUpForm" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="name">
            <span className="categoryTitle">name:</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newBook.name}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="inputContainer">
          <label htmlFor="price">
            <span className="categoryTitle">Price:</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={newBook.price}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="inputContainer">
          <label htmlFor="category">
            <span className="categoryTitle">Category:</span>
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={newBook.category}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="inputContainer">
          <label htmlFor="description">
            <span className="categoryTitle">Description:</span>
          </label>
          <textarea
            type="textarea"
            id="description"
            name="description"
            value={newBook.description}
            onChange={handleChange}
            required
            rows="3"
          ></textarea>
        </div>

        <button className="submitPopUp">Submit</button>
      </form>
      <button
        onClick={() => {
          setHideModal(true);
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
