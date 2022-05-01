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
    
    return (
      <div className="list-books">
        <MyReadsTitle />
        <div className="list-books-content">
            <Shelf title="Currently Reading" books={books} />
            <Shelf title="Want To Read" books={books}/>
            <Shelf title="Read" books ={books}/>
        </div>
        <Button />
      </div>
      
    );
};

export default HomePage;