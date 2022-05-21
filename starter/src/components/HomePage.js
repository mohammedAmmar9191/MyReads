import React from "react";
import Shelf from "./Shelf";
import MyReadsTitle from "./MyReadsTitle";
import Button from "./Button";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";


const HomePage = (books, updateBookToShelf) => {
  console.log(books);
  console.log(typeof updateBookToShelf);
  console.log(updateBookToShelf);
   const currentlyReading = books.books.filter(book => book.shelf === "currentlyReading");
   const wantToRead = books.books.filter(book => book.shelf === "wantToRead");
   const read = books.books.filter(book => book.shelf === "read");
  
    return (
      <div className="list-books">
        <MyReadsTitle />
        <div className="list-books-content">
            <Shelf title="Currently Reading" books={currentlyReading} updateBookToShelf={updateBookToShelf} />
            <Shelf title="Want To Read" books={wantToRead} updateBookToShelf={updateBookToShelf} />
            <Shelf title="Read" books ={read} updateBookToShelf={updateBookToShelf} />
        </div>
        <Button />
      </div>
      
    );
};


HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookToShelf: PropTypes.func.isRequired,
};
export default HomePage;