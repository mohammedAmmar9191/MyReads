import React from "react";
import Shelf from "./Shelf";
import MyReadsTitle from "./MyReadsTitle";
import Button from "./Button";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import BookProvider from "./BookContext";
import props from "react";


const HomePage = (props) => {
  const [books, setAllBooks] = useState([]);

  useEffect(()=>{
    const getBooks= async ()=>{
     const books = await BooksAPI.getAll();
      setAllBooks(books);
      console.log(books);
    }; 
    getBooks();
  },[]);

const updateBookToShelf = (book, moveTo)=>{
  const updatedBooks= books.map(bk =>{
    if (bk.id===book.id) {
    book.shelf=moveTo;
    return book;
  }
  return bk;
  })
  setAllBooks(updatedBooks);
  BooksAPI.update(book, moveTo);
}

   const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
   const wantToRead = books.filter(book => book.shelf === "wantToRead");
   const read = books.filter(book => book.shelf === "read");
  


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

export default HomePage;